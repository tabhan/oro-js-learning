import BaseView from 'oroform/js/app/views/form-validate-view';
import _ from 'underscore';

const View = BaseView.extend({
    initialize({validationOptions}) {
        validationOptions.submitHandler = _.bind(this.submitHandler, this);
        View.__super__.initialize.apply(this, arguments);
    },

    submitHandler() {
        console.log('successful submit');
        return false;
    }
});

export default View;