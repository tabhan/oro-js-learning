import BaseComponent from 'oroui/js/app/components/base/component';
import Model from 'oroui/js/app/models/base/model';
import LoadingMaskView from 'oroui/js/app/views/loading-mask-view';
import CountryView from 'acmeapp/js/app/views/country-view';
import RegionView from 'acmeapp/js/app/views/region-view';
import Collection from 'oroui/js/app/models/base/collection';
import routing from 'routing';

const Component = BaseComponent.extend({
    model: new Model(),
    listen: {
      'change:countryCode model': 'onCountryChange',
      'reset collection': 'reset',
    },

    initialize(options) {
        Component.__super__.initialize.call(this, options)
        this.collection = new Collection();

        this.model.set('countries', options.countries);

        this.countryView = new CountryView({
            model: this.model,
            className: 'float-left'
        });

        this.regionView = new RegionView({
            collection: this.collection,
            className: 'float-left'
        });

        this.loadingMask = new LoadingMaskView({container: options._sourceElement});

        options._sourceElement
            .append(this.countryView.render().$el)
            .append(this.regionView.render().$el);
    },

    onCountryChange() {
        const country = this.model.get('countryCode');
        this.collection.url = routing.generate('oro_api_frontend_country_get_regions', {country});
        this.collection.fetch({reset: true});
        this.loadingMask.show();
    },

    reset() {
        this.loadingMask.hide();
    }
});

export default Component;