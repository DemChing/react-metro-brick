
import React from 'react';
import { makeClass } from '../utils';
import { BrickSizes, BrickTheme } from '../variables';
import Brick from './Brick'
import './sass/BrickTile';

interface IProps2 {
    tileId: number;
    tiles: Exclude<React.ComponentProps<typeof Brick>['msg'], undefined>;

    size?: typeof BrickSizes[number];
    theme?: typeof BrickTheme[number];
    bkg?: string;
    name?: string;
    icon?: React.ReactNode;
};

const BrickTile: React.FC<IProps2> = (props: IProps2) => {
    let tiles: IProps2['tiles'] = [];
    for (let i = 0; i < props.tiles.length; i++) {
        let _props = { ...props.tiles[i] };
        if (!_props.theme && props.theme) _props.theme = props.theme;
        if (!_props.bkg && props.bkg) _props.bkg = props.bkg;
        tiles.push(_props);
    }

    return <>
        {tiles.map((tile, idx) => {
            return <div key={`brick-tile-${idx}`} className={makeClass('brick brick-tile', {
                [`brick-${props.size}`]: props.size,
                [`brick-${tile.theme}`]: tile.theme,
                'brick-tile-active': props.tileId != -1 && (idx == props.tileId || idx == props.tileId - 1),
            })} style={{ backgroundImage: tile.bkg ? `url('${tile.bkg}')` : '' }} data-tiles={idx}>
                <div className={makeClass('brick-status-bar', {
                    'has-background': tile.bkg
                })}>
                    {props.icon ? <div className='brick-badge'>{props.icon}</div> : ''}
                    <div className='brick-name'>{props.name}</div>
                </div>
                <div className={'brick-message'}>
                    <div className='brick-message-title'>
                        <div>{tile.title}</div>
                    </div>
                    <div className='brick-message-body'>{tile.body}</div>
                </div>
            </div>
        })}
    </>
}

export default BrickTile;