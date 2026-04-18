#!/usr/bin/env python3
"""
批量生成公众号封面图
Batch Generate WeChat Official Account Cover Images

Usage:
  1. 在浏览器 index.html 中调整好配置，点击"保存配置"下载 config.json
  2. 修改本脚本下方的 batch_tasks 列表，添加你要生成的多个封面配置
  3. 运行: python batch_generate.py
  4. 生成的图片会保存在 output/ 目录下

Requirements:
  pip install playwright
  playwright install chromium
"""

import json
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

# Output directory for generated images
OUTPUT_DIR = Path("./output")
OUTPUT_DIR.mkdir(exist_ok=True)

# ─────────────────────────────────────────────────────────────────────────────
# 在这里配置你要批量生成的任务
# List your batch generation tasks here
#
# 示例 / Example:
# batch_tasks = [
#     {
#         "config_file": "config.json",      # 基础配置文件路径
#         "output_name": "my-cover-01.png",   # 输出文件名
#         "overrides": {                      # 覆盖配置（可选），只需要写要改变的字段
#             "content": {
#                 "title": "这是新标题",        # 修改标题
#                 "subtitle": "这是副标题"     # 修改副标题
#             }
#         }
#     },
#     {
#         "config_file": "config.json",
#         "output_name": "my-cover-02.png",
#         "overrides": {
#             "content": {
#                 "title": "这是第二个标题",
#             }
#         }
#     },
# ]
# ─────────────────────────────────────────────────────────────────────────────

batch_tasks = [
    # Example:
    {
        "config_file": "config.json",
        "output_name": "output-1.png",
        "overrides": {}
    }
]


def deep_merge(base: dict, overrides: dict) -> dict:
    """Deep merge overrides into base config."""
    result = base.copy()
    for k, v in overrides.items():
        if k in result and isinstance(result[k], dict) and isinstance(v, dict):
            result[k] = deep_merge(result[k], v)
        else:
            result[k] = v
    return result


async def generate_single(page, index_html_path: str, config: dict, output_path: Path):
    """Generate a single cover image from config."""
    # Get absolute URL
    index_url = f"file://{index_html_path.absolute()}"

    # Inject the config before page loads
    await page.add_init_script(f"""
        window.__BATCH_CONFIG = {json.dumps(config)};
    """)

    # Open the page
    await page.goto(index_url, wait_until="networkidle")
    # Wait for fonts and rendering
    await page.wait_for_timeout(1000)
    await page.evaluate("() => document.fonts.ready")
    await page.wait_for_timeout(500)

    # Get cover element bounding box
    cover = page.locator("#cover-main")
    bounding_box = await cover.bounding_box()

    # Scale up for higher resolution (2x = 2400x960 for 5:2 ratio)
    device_scale_factor = 2

    # Take screenshot
    await cover.screenshot(path=output_path, scale=device_scale_factor)
    print(f"✓ Saved: {output_path}")


async def main():
    if not batch_tasks:
        print("""
请编辑 batch_generate.py 文件，在 batch_tasks 列表中添加你要生成的任务。
Please edit batch_generate.py and add your tasks to the batch_tasks list.
""")
        return

    index_html_path = Path("./index.html")
    if not index_html_path.exists():
        print(f"Error: {index_html_path} not found")
        return

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport=None)

        for i, task in enumerate(batch_tasks):
            config_file = Path(task["config_file"])
            output_name = task.get("output_name", f"output_{i+1}.png")
            output_path = OUTPUT_DIR / output_name
            overrides = task.get("overrides", {})

            # Load base config
            with open(config_file, "r", encoding="utf-8") as f:
                base_config = json.load(f)

            # Merge overrides
            config = deep_merge(base_config, overrides)

            # Generate
            print(f"Generating {output_name}...")
            await generate_single(page, index_html_path, config, output_path)

        await browser.close()

    print(f"\n✨ All done! {len(batch_tasks)} images generated in {OUTPUT_DIR}/")


if __name__ == "__main__":
    asyncio.run(main())
