import Ember from 'ember';
import Torii from 'ember-simple-auth/authenticators/torii';

const { service } = Ember.inject;

export default Torii.extend({
  torii: service('torii'),
  authenticate(options) {
    return this._super(options).then(function (data) {
      return {
        provider: data.provider,
        access_token: data.authorizationToken.access_token
      };
    });
  },
  restore: function(data) {
    return this._super(...arguments).then(() => {
      return data;
    });
  }
});