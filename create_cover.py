from PIL import Image, ImageDraw, ImageFont
import os
from pathlib import Path

def add_title_to_image(image_path, output_path, main_title, sub_title):
    """直接在图片上添加标题"""
    img = Image.open(image_path).convert("RGBA")
    draw = ImageDraw.Draw(img)
    width, height = img.size

    # 字体大小
    main_size = min(width, height) // 10
    sub_size = main_size // 1.4

    # 加载字体
    try:
        main_font = ImageFont.truetype("msyh.ttc", main_size)
        sub_font = ImageFont.truetype("msyh.ttc", sub_size)
    except:
        main_font = ImageFont.load_default()
        sub_font = ImageFont.load_default()

    # 计算主标题位置：需要加上字间距，因为逐个字符绘制会额外增加字间距
    char_spacing = main_size // 12  # 字间距 = 字体大小 / 12，需要调整直接改这个数
    # 计算实际总宽度 = 原有宽度 + (字符数 - 1) * 字间距
    main_bbox = draw.textbbox((0, 0), main_title, font=main_font)
    original_w = main_bbox[2] - main_bbox[0]
    char_count = sum(1 for c in main_title if c != '\n')
    total_w = original_w + (char_count - 1) * char_spacing
    main_x = (width - total_w) // 2
    main_y = height // 3 - 60  # 向上移动60像素
    main_y_original = main_y  # 保存起始位置
    final_main_y = main_y  # 记录最后一行的y位置给副标题

    # 模拟加粗：多次偏移叠加让文字变粗
    # 四个方向各偏移两个像素，再叠加原来的阴影和文字
    offsets = [(-2, 0), (2, 0), (0, -2), (0, 2)]
    current_x = main_x
    main_y = main_y_original
    for char in main_title:
        if char == '\n':
            current_x = main_x
            main_y += main_size + int(main_size * 0.2)
            final_main_y = main_y
            continue
        for dx, dy in offsets:
            draw.text((current_x + dx, main_y + dy), char, font=main_font, fill=(0, 0, 0, 80))
        char_bbox = main_font.getbbox(char)
        current_x += (char_bbox[2] - char_bbox[0]) + char_spacing
        final_main_y = main_y

    # 第一层阴影 (深色，偏移大)
    current_x = main_x
    main_y = main_y_original
    for char in main_title:
        if char == '\n':
            current_x = main_x
            main_y += main_size + int(main_size * 0.2)
            final_main_y = main_y
            continue
        draw.text((current_x + 4, main_y + 4), char, font=main_font, fill=(0, 0, 0, 200))
        char_bbox = main_font.getbbox(char)
        current_x += (char_bbox[2] - char_bbox[0]) + char_spacing
        final_main_y = main_y

    # 第二层阴影 (浅色，偏移小)
    current_x = main_x
    main_y = main_y_original
    for char in main_title:
        if char == '\n':
            current_x = main_x
            main_y += main_size + int(main_size * 0.2)
            final_main_y = main_y
            continue
        draw.text((current_x + 2, main_y + 2), char, font=main_font, fill=(64, 64, 64, 160))
        char_bbox = main_font.getbbox(char)
        current_x += (char_bbox[2] - char_bbox[0]) + char_spacing
        final_main_y = main_y

    # 顶层白色文字
    current_x = main_x
    main_y = main_y_original
    for char in main_title:
        if char == '\n':
            current_x = main_x
            main_y += main_size + int(main_size * 0.2)
            final_main_y = main_y
            continue
        draw.text((current_x, main_y), char, font=main_font, fill=(255, 255, 255, 255))
        char_bbox = main_font.getbbox(char)
        current_x += (char_bbox[2] - char_bbox[0]) + char_spacing
        final_main_y = main_y

    # 副标题：支持换行，每行单独居中
    if sub_title:
        # 按换行分割，逐行处理，每行都居中
        lines = sub_title.split('\n')
        current_sub_y = final_main_y + 180  # 主标题最后一行到副标题间距

        for line in lines:
            if not line:  # 跳过空行
                current_sub_y += sub_size + int(sub_size * 0.2)
                continue
            # 计算当前行宽度，居中
            line_bbox = draw.textbbox((0, 0), line, font=sub_font)
            line_w = line_bbox[2] - line_bbox[0]
            line_x = (width - line_w) // 2

            # 阴影 + 文字
            shadow_offset = 2
            # 阴影
            current_x = line_x
            for char in line:
                draw.text((current_x + shadow_offset, current_sub_y + shadow_offset), char, font=sub_font, fill=(0, 0, 0, 200))
                char_bbox = sub_font.getbbox(char)
                current_x += (char_bbox[2] - char_bbox[0])
            # 文字
            current_x = line_x
            for char in line:
                draw.text((current_x, current_sub_y), char, font=sub_font, fill=(255, 255, 255, 255))
                char_bbox = sub_font.getbbox(char)
                current_x += (char_bbox[2] - char_bbox[0])

            # 下一行
            current_sub_y += sub_size + int(sub_size * 0.2)

    # 保存
    if output_path.lower().endswith(('.jpg', '.jpeg')):
        img = img.convert('RGB')
    img.save(output_path, quality=95)

    print(f"已保存: {output_path}")
    return output_path


# 批量处理：从 subtitles.txt 读取，批量生成到 covers 目录
def batch_create_from_txt(txt_path, background, main_title):
    """
    从 subtitles.txt 批量生成封面
    每行格式: 主标题,副标题
    例如:
    网球知识百问百答,为什么中心场票价贵那么多？
    网球规则问答,什么是ACE球？
    """
    # 创建输出目录
    output_dir = Path("covers")
    output_dir.mkdir(exist_ok=True)

    if not os.path.exists(txt_path):
        print(f"文件不存在: {txt_path}")
        return

    with open(txt_path, 'r', encoding='utf-8') as f:
        lines = [line.strip() for line in f if line.strip()]
    # 将文本中的 \n 转义字符转换为实际换行符
    lines = [line.replace(r'\n', '\n') for line in lines]

    print(f"读取到 {len(lines)} 条任务")
    success_count = 0

    for idx, line in enumerate(lines, 1):
        sub_title = line

        # 跳过已生成的文件，支持断点续传
        # 替换所有不允许在文件名中出现的字符
        filename = sub_title
        # 替换换行符和各种路径分隔符
        filename = filename.replace('\n', '_').replace('\r', '_')
        filename = filename.replace('"', '').replace(' ', '_')
        filename = filename.replace('?', '？')
        # 替换Windows文件名不允许的字符
        for c in '\\/:*?"<>|':
            filename = filename.replace(c, '_')
        filename += '.jpg'
        output_path = output_dir / filename
        if output_path.exists():
            print(f"\n[{idx}/{len(lines)}] 已存在，跳过: {filename}")
            success_count += 1
            continue

        print(f"\n[{idx}/{len(lines)}] 生成: {main_title} -> {filename}")
        try:
            add_title_to_image(background, str(output_path), main_title, sub_title)
            success_count += 1
        except Exception as e:
            print(f"生成失败: {e}")
            import traceback
            traceback.print_exc()

    print(f"\n批量生成完成！成功 {success_count}/{len(lines)} 张")
    print(f"输出目录: {output_dir}/")


# 使用入口
if __name__ == "__main__":
    # 默认配置：
    #  - 背景图片: D:\PyWork\cover\bg\hupo2.png
    #  - 输入文件: subtitles.txt (每行: 主标题,副标题)
    #  - 输出目录: covers/
    background = r"D:\PyWork\cover\bg\hupo2.png"
    subtitles_txt = "subtitles.txt"

    if os.path.exists(subtitles_txt):
        batch_create_from_txt(subtitles_txt, background, "网球知识百问百答")
    else:
        # 如果没有 subtitles.txt，就用单个示例
        output = "cover.jpg"
        if os.path.exists(background):
            add_title_to_image(
                background,
                output,
                "网球知识百问百答",
                "三盘两胜和五盘三胜区别在哪里？"
            )
        else:
            print(f"请将背景图片放在: {background}")
            print(f"   或者创建 subtitles.txt 文件，每行格式: 主标题,副标题")
