import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  fas as freeFasFas
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub as freeFabFaGithub,
  faFontAwesome as freeFabFaFontAwesome,
  faWpforms as freeFabFaWpforms,
  faFacebook as freeFabFaFacebook,
  faInstagram as freeFabFaInstagram,
  faYoutube as freeFabFaYoutube,
  faTwitter as freeFabFaTwitter,
  faPaypal as freeFabFaPaypal
} from '@fortawesome/free-brands-svg-icons'

library.add(
  freeFasFas,
  freeFabFaGithub,
  freeFabFaFontAwesome,
  freeFabFaWpforms,
  freeFabFaFacebook,
  freeFabFaInstagram,
  freeFabFaYoutube,
  freeFabFaTwitter,
  freeFabFaPaypal
)

config.autoAddCss = false

Vue.component('faIcon', FontAwesomeIcon)
Vue.component('faLayers', FontAwesomeLayers)
Vue.component('faLayersText', FontAwesomeLayersText)
