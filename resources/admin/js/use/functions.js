export function convertToFormData(data) {
    let formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        if (value) {
            formData.set(key, value);
        } else {
            formData.set(key, '');
        }
    });
    return formData;
}
