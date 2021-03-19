import React from 'react';
import { BrickContainer } from '../src';
import { TBrickConfig, AssetsPath } from './util';
import { BrickTheme } from '../src/variables';

interface IProps {
    demo?: boolean;
}

const Title: React.FC<IProps> = (props: IProps) => {

    const TitleBricks: TBrickConfig = [{
        icon: AssetsPath('document'),
        size: 'wide',
        name: 'Docs',
        msg: [{ body: <span className='title-message'>Check out the documentation</span>, }],
        msgDelay: 10000,
        href: './#documentation',
    }, {
        theme: 'orange',
        msg: (['blue', 'purple'] as typeof BrickTheme[number][]).map(v => ({ theme: v })),
    }, {
        theme: 'purple',
        msg: (['green', 'red'] as typeof BrickTheme[number][]).map(v => ({ theme: v })),
        msgDelay: 6000,
    }, {
        icon: AssetsPath('demo'),
        size: 'wide',
        theme: 'teal',
        name: 'Demo',
        msg: [{ bkg: AssetsPath('demo', 'gallery', 'png'), }],
        msgDelay: 8000,
        href: props.demo ? '#demo' : 'demo.html',
    }, {
        icon: AssetsPath('github'),
        size: 'wide',
        theme: 'amber',
        name: 'Github',
        msg: [{ body: <span className='title-message'>Visit / Fork the repo</span>, }],
        msgDelay: 11000,
        href: 'https://github.com/DemChing/react-metro-brick',
    }, {
        theme: 'cobalt',
        msg: (['dark', 'orange'] as typeof BrickTheme[number][]).map(v => ({ theme: v })),
        msgDelay: 9000,
    }];

    const NavBricks: TBrickConfig = [{
        icon: AssetsPath('up'),
        size: 'small',
        theme: 'purple',
        name: 'Go To Top',
        href: '#title'
    }, {
        icon: AssetsPath('github'),
        size: 'small',
        theme: 'amber',
        name: 'Fork Me',
        href: '#title'
    }, {
        icon: AssetsPath('bmc', 'styled'),
        size: 'small',
        theme:'yellow',
        name: 'Support Me',
        href: 'https://www.buymeacoffee.com/demching'
    }]

    return <>
        <BrickContainer bricks={TitleBricks.filter(v => props.demo || Boolean(v.name))} size={props.demo ? 'medium' : 'large'} />
        <BrickContainer divProps={{ id: 'navigation' }} bricks={NavBricks} columns={1} />
    </>
}

export default Title;