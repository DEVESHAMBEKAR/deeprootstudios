from PIL import Image

def remove_background(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Keep original RGB, just change alpha based on how close it is to white
            # If it's pure white (255,255,255), we want it transparent.
            # If it's black or colored, we want it opaque.
            # A simple approach for white backgrounds: 
            # If r>240, g>240, b>240, make it transparent.
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((item[0], item[1], item[2], 0))
            else:
                newData.append((item[0], item[1], item[2], 255))
                
        img.putdata(newData)
        
        # Crop the image to its bounding box
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        img.save(output_path, "PNG")
        print("Success")
    except Exception as e:
        print(f"Error: {e}")

input_image = r"C:\Users\deves\.gemini\antigravity-ide\brain\0e9203cf-fe8e-4543-9738-176298f034e7\.tempmediaStorage\media_0e9203cf-fe8e-4543-9738-176298f034e7_1781776387198.png"
output_image = r"d:\DRS\public\logo.png"

remove_background(input_image, output_image)
