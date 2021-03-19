import { BrickContainer } from '../src';

export type TBrickConfig = Exclude<React.ComponentProps<typeof BrickContainer>['bricks'], undefined>;

export const AssetsPath = (file: string, dir: string = 'plain', ext: string = 'svg') => `/assets/${dir}/${file}.${ext}`;
