const isNUll = item => item === null || item === undefined;

export function roundedDecorator(defaultValue: number = null) {
    return (target: any, name?: PropertyKey): any => {
        let _val = target[name];
        const descriptor = {
            get(this: any) {
                if (!isNUll(_val)) {
                    return _val;
                }
                return Math.ceil(defaultValue);
            },
            set(value: any) {
                _val = Math.ceil(value);
            }
        };
        Object.defineProperty(target, name, descriptor);
    }
}