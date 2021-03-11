import $ from 'jquery';
import 'jquery-ui/widgets/sortable';
import moduleConfig from 'module-config';

const {extend} = moduleConfig(module.id);

$.widget('ui.sortable', $.ui.sortable, {

    toArray() {
        if (extend) {
            return this._getItemsAsjQuery().map((i, e) => $(e).data('region-code')).toArray()
        } else {
            return this._super();
        }
    }

});