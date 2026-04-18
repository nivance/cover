from PIL import Image, ImageDraw, ImageFont
import os

def add_title_to_image(image_path, output_path, main_title, sub_title):
    """直接在图片上添加标题"""
    img = Image.open(image_path).convert("RGBA")
    draw = ImageDraw.Draw(img)
    width, height = img.size

    # 字体大小
    main_size = min(width, height) // 10
    sub_size = main_size // 1.2

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

    print(f"✅ 已保存: {output_path}")
    return output_path

# 使用示例
if __name__ == "__main__":
    # 你的背景图片
    background = r"D:\PyWork\cover\bg\hupo2.png"  # 修改为你的图片
    output = "cover.jpg"

    if os.path.exists(background):
        add_title_to_image(
            background,
            output,
            "网球知识百问百答",
            "为什么计分是\n15-30-40\n而不是 1-2-3?"
        )
    else:
        print(f"❌ 请将背景图片命名为: {background}")
