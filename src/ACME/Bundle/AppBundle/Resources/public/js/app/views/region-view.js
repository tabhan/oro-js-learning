import BaseView from 'oroui/js/app/views/base/view';
import template from 'tpl-loader!acmeapp/templates/regions.html';
import 'jquery-ui/widgets/sortable';
import _ from 'underscore';

const View = BaseView.extend({

    tagName: 'ul',

    template,

    countryCode: null,

    listen: {
        'reset collection': 'render',
    },

    initialize: function({validationOptions}) {
        View.__super__.initialize.apply(this, arguments);
        this.$el.sortable({
            cursor: 'ns-resize',
            axis: 'y',
            tolerance: 'pointer',
            update: _.bind(this.onSortUpdate, this)
        })
    },
    
    render() {
        const template = this.getTemplateFunction();
        const collection = this.collection;
        const html = template({collection});
        this.$el.html(html);
        return this;
    },

    onSortUpdate() {
        console.log(this.$el.sortable('toArray'));
    }
});

export default View;