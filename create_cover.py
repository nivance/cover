from PIL import Image, ImageDraw, ImageFont
import os

def add_title_to_image(image_path, output_path, main_title, sub_title):
    """直接在图片上添加标题"""
    img = Image.open(image_path).convert("RGBA")
    draw = ImageDraw.Draw(img)
    width, height = img.size

    # 字体大小
    main_size = min(width, height) // 14
    sub_size = main_size // 1.2

    # 加载字体
    try:
        main_font = ImageFont.truetype("msyh.ttc", main_size)
        sub_font = ImageFont.truetype("msyh.ttc", sub_size)
    except:
        main_font = ImageFont.load_default()
        sub_font = ImageFont.load_default()

    # 计算位置
    main_bbox = draw.textbbox((0, 0), main_title, font=main_font)
    main_w = main_bbox[2] - main_bbox[0]
    main_x = (width - main_w) // 2
    main_y = height // 3 - 60  # 向上移动60像素

    sub_bbox = draw.textbbox((0, 0), sub_title, font=sub_font)
    sub_w = sub_bbox[2] - sub_bbox[0]
    sub_x = (width - sub_w) // 2
    # 增加主副标题间距，原来是 +20，现在增加到 +80 (增加 40px)
    sub_y = main_y + main_size + 80

    # 增加主标题字间距：逐个字符绘制，增加字符间距
    char_spacing = main_size // 12  # 字间距 = 字体大小 / 12，需要调整直接改这个数
    current_x = main_x
    main_y_original = main_y  # 保存起始位置

    # 第一层阴影 (深色，偏移大)
    for char in main_title:
        if char == '\n':
            current_x = main_x
            main_y += main_size + int(main_size * 0.2)  # 换行间距
            continue
        draw.text((current_x + 4, main_y + 4), char, font=main_font, fill=(0, 0, 0, 200))
        char_bbox = main_font.getbbox(char)
        current_x += (char_bbox[2] - char_bbox[0]) + char_spacing

    # 第二层阴影 (浅色，偏移小)
    current_x = main_x
    main_y = main_y_original
    for char in main_title:
        if char == '\n':
            current_x = main_x
            main_y += main_size + int(main_size * 0.2)
            continue
        draw.text((current_x + 2, main_y + 2), char, font=main_font, fill=(64, 64, 64, 160))
        char_bbox = main_font.getbbox(char)
        current_x += (char_bbox[2] - char_bbox[0]) + char_spacing

    # 顶层白色文字
    current_x = main_x
    main_y = main_y_original
    for char in main_title:
        if char == '\n':
            current_x = main_x
            main_y += main_size + int(main_size * 0.2)
            continue
        draw.text((current_x, main_y), char, font=main_font, fill=(255, 255, 255, 255))
        char_bbox = main_font.getbbox(char)
        current_x += (char_bbox[2] - char_bbox[0]) + char_spacing

    # 副标题保持单阴影效果
    shadow_offset = 2
    draw.text((sub_x + shadow_offset, sub_y + shadow_offset), sub_title, font=sub_font, fill=(0, 0, 0, 200))
    draw.text((sub_x, sub_y), sub_title, font=sub_font, fill=(255, 255, 255, 255))

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
            "什么是ACE球？\n什么是ACE球？\n什么是ACE球？"
        )
    else:
        print(f"❌ 请将背景图片命名为: {background}")
