import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    login() {
      this.get('session').authenticate('authenticator:torii', 'google-oauth2-bearer');
    },
    logout() {
      this.get('session').invalidate();
    }
  }
});