import AjaxService from 'ember-ajax/services/ajax';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default AjaxService.extend({
  session: service(),
  host: 'http://localhost:8080',

  headers: computed('session', {
    get() {
      let headers = {};

      this.get('session').authorize('authorizer:application', (headerName, headerValue) => {
        headers[headerName] = headerValue;
      });
      return headers;
    }
  })
});