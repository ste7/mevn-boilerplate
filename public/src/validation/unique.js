import axios from 'axios'


export const unique = {
    getMessage(field) {
        return `Such ${field} already exists.`
    },
    validate(value) {
        if(value) {
            return axios.get('http://localhost:8000/api/unique/' + value).then((response) => {
                return {
                    valid: response.data
                }
            });
        } else {
            return false;
        }
    }
};
