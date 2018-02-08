import Vue from 'vue'
import App from './components/App.vue'
import VueGoogleAutocomplete from './components/VueGoogleAutocomplete.vue'
import { FinalForm, FinalField } from 'vue-final-form'

Vue.component('vue-google-autocomplete', VueGoogleAutocomplete)
Vue.component('FinalForm', FinalForm)
Vue.component('FinalField', FinalField)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  components: {
  },
  data: {
    address: ''
  },

  methods: {
      /**
      * When the location found
      * @param {Object} addressData Data of the found location
      * @param {Object} placeResultData PlaceResult object
      * @param {String} id Input container ID
      */
    getAddressData: function (addressData, placeResultData, id) {
          this.address = addressData;
      }
  }
})
