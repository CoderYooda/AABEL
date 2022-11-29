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

export function dateFormatting(options) {
    const date = options.date;
    const language = document.documentElement.getAttribute('lang');
    
    let countryFormat;
    
    switch (language) {
        case 'en':
            countryFormat = 'en-US';
            break;
        default:
            countryFormat = 'ru';
    }
    
    let formatter = new Intl.DateTimeFormat(countryFormat, {
        weekday: options.weekday ?? undefined,
        year: options.year ?? undefined,
        month: options.month ?? undefined,
        day: options.day ?? undefined,
    });

    return formatter.format(date);
}
