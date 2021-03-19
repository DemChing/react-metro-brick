import React from 'react';
import ReactDOM from 'react-dom';
import { AssetsPath, TBrickConfig } from './util';
import { BrickContainer } from '../src';
import Title from './Title';

const Bricks: TBrickConfig = [{ "theme": "red", "name": "Red", "size": "large" }, { "theme": "amber", "name": "Amber" }, { "theme": "orange", "name": "Orange" }, { "theme": "green", "name": "Green", "size": "wide" }, { "theme": "blue", "name": "Blue", "size": "small" }, { "theme": "cyan", "name": "Cyan", "size": "small" }, { "theme": "teal", "name": "Teal", "size": "small" }, { "theme": "purple", "name": "Purple", "size": "small" }, { "theme": "dark", "name": "Dark" }, { "theme": "cobalt", "name": "Cobalt", "size": "wide" }, { "theme": "dark", "name": "Custom Background", "size": "wide", "bkg": AssetsPath('01', 'gallery', 'jpg') }, { "name": "Yellow", "theme": "yellow" }];

const Bricks2: TBrickConfig = [{ "theme": "cobalt", "name": "SharePoint", "icon": AssetsPath('sharepoint') }, { "theme": "teal", "name": "Publisher", "icon": AssetsPath('publisher') }, { "theme": "orange", "name": "PowerPoint", "icon": AssetsPath('powerpoint') }, { "theme": "blue", "name": "Word", "icon": AssetsPath('word'), "size": "small" }, { "theme": "cyan", "name": "Exchange", "icon": AssetsPath('exchange'), "size": "small" }, { "theme": "green", "name": "Excel", "icon": AssetsPath('excel'), "size": "wide" }, { "theme": "teal", "name": "Xbox", "icon": AssetsPath('xbox'), "size": "small" }, { "theme": "purple", "name": "OneNote", "icon": AssetsPath('onenote'), "size": "small" }, { "theme": "cobalt", "name": "Outlook", "icon": AssetsPath('outlook'), "badge": "87+", "size": "wide" }];

const Bricks3: TBrickConfig = [{ "theme": "dark", "name": "Access", "icon": AssetsPath('access', 'styled'), "size": "wide" }, { "theme": "dark", "name": "Excel", "icon": AssetsPath('excel', 'styled') }, { "theme": "dark", "name": "Exchange", "icon": AssetsPath('exchange', 'styled') }, { "theme": "dark", "name": "OneNote", "icon": AssetsPath('onenote', 'styled') }, { "theme": "dark", "name": "Outlook", "icon": AssetsPath('outlook', 'styled'), "size": "small" }, { "theme": "dark", "name": "PowerPoint", "icon": AssetsPath('powerpoint', 'styled'), "size": "small" }, { "theme": "dark", "name": "SharePoint", "icon": AssetsPath('sharepoint', 'styled'), "size": "small" }, { "theme": "dark", "name": "Teams", "icon": AssetsPath('teams', 'styled'), "size": "small" }, { "theme": "dark", "name": "Visio", "icon": AssetsPath('visio', 'styled'), "size": "small" }, { "theme": "dark", "name": "Word", "icon": AssetsPath('word', 'styled'), "size": "small" }, { "theme": "dark", "name": "Project", "icon": AssetsPath('project', 'styled'), "size": "wide" }, { "theme": "dark", "name": "Forms", "icon": AssetsPath('forms', 'styled'), "size": "small" }, { "theme": "dark", "name": "Publisher", "icon": AssetsPath('publisher', 'styled'), "size": "small" }, { "theme": "dark", "name": "Planner", "icon": AssetsPath('planner', 'styled'), "size": "small" }, { "theme": "dark", "name": "Stream", "icon": AssetsPath('stream', 'styled') }, { "theme": "dark", "name": "Todo", "icon": AssetsPath('todo', 'styled'), "size": "small" }, { "theme": "dark", "name": "Whiteboard", "icon": AssetsPath('whiteboard', 'styled'), "size": "small" }, { "theme": "dark", "name": "Skype", "icon": AssetsPath('skype', 'styled'), "size": "small" }, { "theme": "dark", "name": "OneDrive", "icon": AssetsPath('onedrive', 'styled'), "size": "small" }]

const body = `Dolorem maxime cumque sunt voluptas dolorem. Magnam ea iste repudiandae quasi in voluptas tempore. Sed quia facere laborum dolorem sed consequatur ut. Id et ipsum ullam. Accusantium cupiditate et inventore animi aspernatur. Quam fuga optio illum non rerum et est eius.

Laboriosam et nemo in aliquid aut ut minus voluptas. Repudiandae iure natus ullam quibusdam hic. Ut impedit rerum cum id voluptas. Sed dolor sit est dignissimos.
        
Rerum sint molestias et autem dicta illum cum. Et voluptatem illum ea quibusdam tempora quas. Sunt qui aut iste dolore dolore. Sit animi ut inventore qui eveniet at dolorem.`
let config: Exclude<TBrickConfig, undefined>[number] = {
    theme: 'cobalt',
    name: 'Messenger',
    icon: AssetsPath('outlook'),
    msg: [{
        title: 'Lorem ipsum dolor sit amet',
        body
    }, {
        title: 'Lorem ipsum',
        body: 'Lorem ipsum dolor sit amet'
    }]
}, config2: Exclude<TBrickConfig, undefined>[number] = {
    name: 'Gallery',
    bkg: AssetsPath('01', 'gallery', 'jpg'),
    icon: AssetsPath('gallery'),
    msg: [{ bkg: AssetsPath('02', 'gallery', 'jpg') }, { bkg: AssetsPath('03', 'gallery', 'jpg') }, { bkg: AssetsPath('04', 'gallery', 'jpg') }]
}
const Bricks4: TBrickConfig = [
    { ...config },
    { ...config, size: 'wide', },
    { ...config, size: 'large', },
    { ...config, size: 'small', },
]

const Bricks5: TBrickConfig = [
    { ...config2 },
    { ...config2, size: 'wide', },
    { ...config2, size: 'large', },
    { ...config2, size: 'small', },
]

ReactDOM.render(<Title demo />, document.getElementById('title-bricks'))
ReactDOM.render(
    <>
        <BrickContainer bricks={Bricks} name='Bricks' />
        <BrickContainer bricks={Bricks2} name='Microsoft' />
        <BrickContainer bricks={Bricks3} name='Microsoft 2' />
        <BrickContainer bricks={Bricks4} name='Messaging' />
        <BrickContainer bricks={Bricks5} name='Gallery' />
    </>,
    document.getElementById('demo')
)