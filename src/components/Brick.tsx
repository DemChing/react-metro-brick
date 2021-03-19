import React from 'react';
import { makeClass } from '../utils';
import { BrickSizes, BrickTheme } from '../variables';
import BrickTile from './BrickTile';
import './sass/Brick';

interface IProps {
    size?: typeof BrickSizes[number];
    theme?: typeof BrickTheme[number];
    bkg?: string;
    name?: string;
    badge?: React.ReactNode;
    icon?: React.ReactNode;
    msg?: {
        title?: string;
        body?: React.ReactNode;
        bkg?: string;
        delay?: number;
        theme?: typeof BrickTheme[number];
    }[];
    msgDelay?: number;
    href?: string;
    divProps?: React.HTMLProps<HTMLDivElement>;

    standalone?: boolean;
    fill?: boolean;
}

const MessageDelay = 5000;

const Brick: React.FC<IProps> = (props: IProps) => {
    const [tileId, setTileId] = React.useState(-1);
    const [delay, setDelay] = React.useState(props.msgDelay || MessageDelay);
    const isSmall = props.size == 'small';
    let icon = props.icon ? typeof props.icon === 'string' ? <img src={props.icon} /> : props.icon : '';
    let badge = props.badge || '';

    if (typeof badge === 'number' && badge > 99) badge = '99+';
    badge = badge || (props.bkg ? icon : '');

    React.useEffect(() => {
        const tid = setTimeout(() => {
            let id = tileId;
            if (props.msg && props.msg.length) {
                id++;
                if (id == props.msg.length) id = -1;
                setDelay(props.msg[id]?.delay || props.msgDelay || MessageDelay);
            }
            if (id != tileId) setTileId(id)
        }, delay)

        return () => clearTimeout(tid)
    }, [tileId]);

    let divProps: React.HTMLProps<HTMLDivElement> = {},
        styles: React.CSSProperties = {},
        classNames = '';
    if (props.divProps) {
        let { style: _style, className: _className, title, ..._divProps } = props.divProps;
        divProps = _divProps;
        if (_style) styles = _style;
        if (_className) classNames = _className;
    }
    if (props.bkg) styles.backgroundImage = `url('${props.bkg}')`;

    let content = <>
        <div className='brick-content'>
            {!isSmall && (props.name || badge) ? <div className={makeClass('brick-status-bar', {
                'has-background': props.bkg
            })}>
                {badge ? <div className='brick-badge'>{badge}</div> : ''}
                <div className='brick-name'>{props.name}</div>
            </div> : ''}
            <div className='brick-icon'>{!isSmall && props.bkg ? '' : icon}</div>
        </div>
        {!isSmall && props.msg && props.msg.length ? <BrickTile tileId={tileId} tiles={props.msg} size={props.size} theme={props.theme} bkg={props.bkg} name={props.name} icon={icon} /> : ''}
        <div className='brick-cover'></div>
    </>;

    return <div className={makeClass(classNames, 'brick', {
        [`brick-${props.size}`]: props.size,
        [`brick-${props.theme}`]: props.theme,
        [`brick-standalone`]: props.standalone,
        [`brick-fill`]: props.fill,
    })} title={props.name} style={styles} {...divProps}>
        {props.href ? <a href={props.href}>{content}</a> : content}
    </div>
}

export default Brick;