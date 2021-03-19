export const makeClass = (...args: (string | { [key: string]: any })[]): string => {
    let classNames: string[] = [];
    for (let i = 0; i < args.length; i++) {
        let val = args[i];
        if (typeof val === 'string') {
            if (val.trim() != '') classNames.push(val);
        } else if (typeof val !== 'undefined' && val !== null) {
            for (let key in val) {
                if (Boolean(val[key])) classNames.push(key);
            }
        }
    }

    return classNames.join(' ');
}