import Swal, { SweetAlertOptions } from 'sweetalert2';

export function confirmable(options?: SweetAlertOptions) {
    return (target: object, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;
        const config: SweetAlertOptions = {
            title: "Are you sure?",
            html: "Do you want to perform this action?",
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            icon: 'question'
        };

        if (options) {
            Object.keys(options).forEach(key => {
                config[key] = options[key];
            });
        }

        descriptor.value = async function (...args) {
            const swalResult = await Swal.fire(config);
            if (swalResult.isConfirmed) {
                const result = originalMethod.apply(this, args);
                return result;
            }
            return;
        }
        return descriptor;
    }
}
