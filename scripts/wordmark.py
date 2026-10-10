import sys, json
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
wght=int(sys.argv[1]) if len(sys.argv)>1 else 450
f=TTFont('' + (sys.argv[2] if len(sys.argv)>2 else 'Oxanium[wght].ttf') + ''); inst=instantiateVariableFont(f,{'wght':wght})
gs=inst.getGlyphSet(); cmap=inst.getBestCmap()
# original letter boxes (x0,x1,ytop) baseline 1381.5
boxes=[('O',196,322.5),('w',339,491.5),('l',507,543.5),('W',551,742.5),('o',755,850.5),('r',876,931.5),('k',949,1045.5),('s',1056,1150.5)]
base=1381.5; cap=142
scale=cap/690
parts={'ink':'','accent':''}
for ch,x0,x1 in boxes:
    g=gs[cmap[ord(ch)]]
    bp=BoundsPen(gs); g.draw(bp); b=bp.bounds
    sx=(x1-x0)/((b[2]-b[0])*scale)  # horizontal correction to match the original letter width
    sp=SVGPathPen(gs, lambda v: f"{v:.1f}".rstrip('0').rstrip('.'))
    # x' = x0 + (x-b0)*scale*sx ; y' = base - y*scale
    tp=TransformPen(sp,(scale*sx,0,0,-scale,x0-b[0]*scale*sx,base))
    g.draw(tp)
    parts['accent' if ch=='o' else 'ink']+=sp.getCommands()
    print(ch,'sx',round(sx,3),file=sys.stderr)
json.dump(parts,open(f'wordmark_{wght}.json','w'))
