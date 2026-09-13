from PIL import Image, ImageDraw
import glob, os, sys
root = os.path.join(os.path.dirname(__file__), '..', 'applovin-1080')
S, cols = 400, 5
made = []
for line in ('sleep','thc'):
    for cdir in sorted(glob.glob(os.path.join(root, line, '*'))):
        files = sorted(glob.glob(os.path.join(cdir, 'v*.png')))
        if not files: continue
        rows = (len(files)+cols-1)//cols
        sheet = Image.new('RGB', (cols*S, rows*S), (24,24,24))
        for i,f in enumerate(files):
            sheet.paste(Image.open(f).convert('RGB').resize((S,S), Image.LANCZOS), ((i%cols)*S, (i//cols)*S))
        out = os.path.join(cdir, '_sheet.png'); sheet.save(out); made.append(out)
print(len(made), 'sheets')
