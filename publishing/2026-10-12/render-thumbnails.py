from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import json
root=Path(__file__).resolve().parents[2]
m=json.loads((Path(__file__).parent/'manifest.json').read_text())
out=root/'public/oct12-heroes';out.mkdir(parents=True,exist_ok=True)
bold='/System/Library/Fonts/Supplemental/Arial Bold.ttf';regular='/System/Library/Fonts/Supplemental/Arial.ttf'
title_font=ImageFont.truetype(bold,66);kicker=ImageFont.truetype(bold,28);small=ImageFont.truetype(regular,26)
items=[('BLOG',x) for x in m['blog']]+[('RESEARCH',x) for x in m['research']]
for i,(kind,item) in enumerate(items):
    im=Image.new('RGB',(1536,1024),(40,32,6));d=ImageDraw.Draw(im)
    accent=(234,179,8) if kind=='BLOG' else (147,51,234)
    d.rounded_rectangle((72,72,1464,952),radius=44,fill=(49,40,12),outline=accent,width=7)
    d.rectangle((72,72,102,952),fill=accent)
    d.text((160,154),f'OUTSOURCED ASSISTANTS  /  {kind}',font=kicker,fill=accent)
    words=item['title'].split();lines=[];line=''
    for word in words:
        candidate=(line+' '+word).strip()
        if d.textlength(candidate,font=title_font)>1150 and line: lines.append(line);line=word
        else: line=candidate
    lines.append(line);y=270
    for line in lines:d.text((160,y),line,font=title_font,fill=(255,252,235));y+=92
    d.line((160,792,1360,792),fill=(132,112,45),width=3)
    d.text((160,835),'TRACEABLE WORK  •  NAMED OWNERS  •  VERIFIED OUTCOMES',font=small,fill=(220,210,168))
    im.save(out/f"{item['slug']}.webp",'WEBP',quality=88,method=6)

