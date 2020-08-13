import Vue from 'vue';

import Autocomplete from './autocomplete.vue';
import CodeMirror from './codemirror.vue';
import EditJson from './edit-json.vue';
import Error from './error.vue';
import Expand from './expand.vue';
import Explore from './explore.vue';
import InsertLine from './insert-line.vue';
import LinkAction from './link-action.vue';
import LinkContext from './link-context.vue';
import Loader from './loader.vue';
import Modal from './modal.vue';
import Sb from './sb.vue';
import SigninWarning from './signin-warning.vue';
import ValidationError from './validation-error.vue';

Vue.component('autocomplete', Autocomplete);
Vue.component('codemirror', CodeMirror);
Vue.component('edit-json', EditJson);
Vue.component('error', Error);
Vue.component('expand', Expand);
Vue.component('explore', Explore);
Vue.component('insert-line', InsertLine);
Vue.component('link-action', LinkAction);
Vue.component('link-context', LinkContext);
Vue.component('loader', Loader);
Vue.component('modal', Modal);
Vue.component('sb', Sb);
Vue.component('signin-warning', SigninWarning);
Vue.component('validation-error', ValidationError);
