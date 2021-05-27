export function execTimeDecorator(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    //spread operator
    descriptor.value = function (...args) {
        const start = new Date();
        const result = originalMethod.apply(this, args);
        const finish = new Date();
        console.log(`Method ${propertyKey}​​​​​​​​ execution time was ${finish.getTime()}​​​​​​​​ - ${start.getTime()}​​​​​​​​ milliseconds`);
    }
}