import React from 'react';
import Brick from './Brick';
import './sass/BrickContainer';
import { makeClass } from '../utils';
import { BrickBaseSize, BrickSizes } from '../variables';

interface IFillProps {
    count: number;
    size?: typeof BrickSizes[number];
}

interface IProps {
    size?: typeof BrickSizes[number];
    columns?: number;
    bricks?: (React.ComponentProps<typeof Brick> & {
        prepend?: IFillProps;
        append?: IFillProps;
    })[];
    name?: string;
    children?: React.ReactNode;
    divProps?: React.HTMLProps<HTMLDivElement>;
}

const BrickContainer: React.FC<IProps> = (props: IProps) => {
    let columns = 6;
    let bricksProps: React.ComponentProps<typeof Brick>[] = [],
        pushFill = (_props: IFillProps) => {
            for (let i = 0; i < _props.count; i++) bricksProps.push({ fill: true, size: _props.size })
        };

    if (props.bricks) {
        for (let i = 0; i < props.bricks.length; i++) {
            let prepend = props.bricks[i].prepend,
                append = props.bricks[i].append;
            if (prepend) pushFill(prepend)
            bricksProps.push(props.bricks[i])
            if (append) pushFill(append)
        }
    }

    let divProps: React.HTMLProps<HTMLDivElement> = {},
        styles: React.CSSProperties = {},
        children: React.ReactNode = props.children,
        classNames = '';
    if (props.divProps) {
        let { className: _className, children: _children, ..._divProps } = props.divProps;
        divProps = _divProps;
        if (_children) children = <>
            {children}
            {_children}
        </>;
        if (_className) classNames = _className;
    }

    switch (props.size) {
        case 'small': columns = 4; break;
        case 'wide': columns = 8; break;
        case 'large': columns = 12; break;
    }

    if (props.columns && props.columns > 0) columns = props.columns;

    if (columns != 6) styles.gridTemplateColumns = `repeat(${columns}, ${BrickBaseSize})`;

    return <div className={makeClass(classNames, 'brick-container')} {...divProps}>
        <div className='brick-container-header'>{props.name}</div>
        <div className={'brick-container-layout'} style={styles}>
            {bricksProps.map((_props, idx) => <Brick key={`brick-${idx}`} {..._props} />)}
            {children}
        </div>
    </div>
}

export default BrickContainer;