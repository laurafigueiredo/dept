export const hasError = (type, value) => {
    const hasError = false;

    switch (type) {
    case 'email': {
        const re = /^(([^<>()\[\]\.,;:\s@\“]+(\.[^<>()\[\]\.,;:\s@\“]+)*)|(\“.+\“))@(([^<>()[\]\.,;:\s@\“]+\.)+[^<>()[\]\.,;:\s@\“]{2,})$/i;
        return !re.test(value);
    }
    case 'text':
    case 'textarea': {
        if (!value || value.length < 1) {
            return true;
        }

        return false;
    }
    default:
        return hasError;
    }
};
