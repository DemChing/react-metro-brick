import React from 'react';
import ReactDOM from 'react-dom';
import { BrickContainer } from '../src';
import { BrickSizes, BrickTheme } from '../src/variables';
import { TBrickConfig, AssetsPath } from './util';
import Title from './Title';

const ArrangeSVG = (num: number) => <svg viewBox='0 0 20 20'><text x='50%' y='50%' dominantBaseline='middle' textAnchor='middle' fill='#fff'>{num}</text></svg>

const ThemeBricks: TBrickConfig = BrickTheme.map(theme => ({ theme, name: theme }));
const SizeBricks: TBrickConfig = BrickSizes.map(size => ({ size, name: size })).reverse();
const ArrangeBricks1: TBrickConfig = ([{ size: 'small' }, { size: 'small' }, {}, {}, { size: 'wide' }, { size: 'small' }, { size: 'small' }] as TBrickConfig).map((props, i) => (props.icon = ArrangeSVG(i + 1), props));
const ArrangeBricks2: TBrickConfig = ([{ size: 'small' }, { size: 'small' }, {}, {}, { fill: true, size: 'small', divProps: { style: { background: '#555' } } }, { fill: true, size: 'small', divProps: { style: { background: '#555' } } }, { size: 'wide' }, { size: 'small' }, { size: 'small' }] as TBrickConfig).map((props, i) => (props.icon = ArrangeSVG(i + 1), props.fill ? props.name = `${i + 1}` : true, props));
const ArrangeBricks3: TBrickConfig = ([{ size: 'small' }, { size: 'small' }, {}, {}, { size: 'wide', prepend: { count: 2, size: 'small' } }, { size: 'small' }, { size: 'small' }] as TBrickConfig).map((props, i) => (props.icon = ArrangeSVG(i + 1), props));

ReactDOM.render(<Title />, document.getElementById('title-bricks'))
ReactDOM.render(<BrickContainer size='wide' bricks={ThemeBricks} />, document.getElementById('theme-bricks'))
ReactDOM.render(<BrickContainer size='wide' bricks={SizeBricks} />, document.getElementById('size-bricks'))
ReactDOM.render(<div>
    <BrickContainer size='wide' bricks={SizeBricks.map(v => (v = { ...v }, v.icon = AssetsPath('windows'), delete v.name, v))} />
    <BrickContainer size='wide' bricks={SizeBricks.map(v => (v = { ...v }, v.icon = <img src={AssetsPath('outlook', 'styled')} />, delete v.name, v.theme = 'dark', v))} />
</div>, document.getElementById('icon-bricks'))
ReactDOM.render(<BrickContainer size='wide' bricks={SizeBricks.map(v => (v = { ...v }, v.icon = AssetsPath('windows'), v.name = 'Example App', v.badge = 721, v))} />, document.getElementById('name-badge-bricks'))
ReactDOM.render(<BrickContainer size='wide' bricks={SizeBricks.map(v => (v = { ...v }, v.icon = AssetsPath('windows'), v.name = 'Gallery', v.bkg = AssetsPath('01', 'gallery', 'jpg'), v))} />, document.getElementById('background-bricks'))
ReactDOM.render(<div>
    <BrickContainer size='wide' bricks={SizeBricks.map((v, i) => (v = { ...v }, v.icon = AssetsPath('windows'), v.name = 'Message', v.msg = [{ title: 'Title', body: 'Message Body', delay: (i + 1) * 2000, }], v))} />
    <BrickContainer size='wide' bricks={SizeBricks.map((v, i) => (v = { ...v }, v.icon = AssetsPath('windows'), v.name = 'Gallery', v.msg = [{ bkg: AssetsPath('02', 'gallery', 'jpg'), delay: (i + 1) * 2000, },
    { bkg: AssetsPath('03', 'gallery', 'jpg'), delay: (i + 1) * 2000, },
    { bkg: AssetsPath('04', 'gallery', 'jpg'), delay: (i + 1) * 2000, }], v.bkg = AssetsPath('01', 'gallery', 'jpg'), v))} />
</div>, document.getElementById('message-bricks'))
ReactDOM.render(<div>
    <BrickContainer name='Default' bricks={[{}, { size: 'large' }, {}]} />
    <BrickContainer name='Large' size='large' bricks={[{ size: 'large' }, { size: 'wide' }, { size: 'large' }, {}, {}]} />
</div>, document.getElementById('layout-containers'))
ReactDOM.render(<BrickContainer name='Example Container' bricks={[{}, { size: 'wide' }, { size: 'wide' }, {}]} />, document.getElementById('basic-containers'))
ReactDOM.render(<div>
    <BrickContainer bricks={ArrangeBricks1} name='Default Order' /><br />
    <BrickContainer bricks={ArrangeBricks2} name='Manually add 2 Small Bricks after Brick 4' /><br />
    <BrickContainer bricks={ArrangeBricks3} name='Prepend 2 Small Bricks before Brick 5' />
</div>, document.getElementById('gap-containers'))
