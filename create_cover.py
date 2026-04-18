from PIL import Image, ImageDraw, ImageFont
import os

def add_title_to_image(image_path, output_path, main_title, sub_title):
    """直接在图片上添加标题"""
    img = Image.open(image_path).convert("RGBA")
    draw = ImageDraw.Draw(img)
    width, height = img.size
    
    # 字体大小
    main_size = min(width, height) // 12
    sub_size = main_size // 2
    
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
    main_y = height // 3
    
    sub_bbox = draw.textbbox((0, 0), sub_title, font=sub_font)
    sub_w = sub_bbox[2] - sub_bbox[0]
    sub_x = (width - sub_w) // 2
    sub_y = main_y + main_size + 20
    
    # 白色文字，黑色阴影
    shadow_offset = 2
    draw.text((main_x + shadow_offset, main_y + shadow_offset), main_title, font=main_font, fill=(0, 0, 0, 200))
    draw.text((main_x, main_y), main_title, font=main_font, fill=(255, 255, 255, 255))
    
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
            "什么是ACE球？"
        )
    else:
        print(f"❌ 请将背景图片命名为: {background}")