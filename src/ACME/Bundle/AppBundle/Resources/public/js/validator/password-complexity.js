import Base from 'orouser/js/validator/password-complexity';

const [name, method, message] = Base;

export default [
    name,
    function (value, element, param) {
        const email = this.elements().filter('[data-ftid$="_email"]').val();
        if (email === value) {
            param.message = `${param.baseKey}same_with_email`;
            return false;
        }
        return method(value, element, param);
    },
    message
];