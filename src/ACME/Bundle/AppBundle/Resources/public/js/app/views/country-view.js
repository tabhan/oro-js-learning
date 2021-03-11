import $ from 'jquery';
import BaseView from 'oroui/js/app/views/base/view';
import template from 'tpl-loader!acmeapp/templates/countries.html';

const View = BaseView.extend({

    template,

    events: {
        'click [data-country-code]': 'onClick'
    },

    render() {
        const template = this.getTemplateFunction();
        const data = this.getTemplateData();
        const html = template(data);
        this.$el.html(html);
        return this;
    },

    onClick({currentTarget, target}) {
        const countryCode = $(currentTarget).data('country-code');
        this.model.set('countryCode', countryCode);
    }
});

export default View;