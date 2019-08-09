import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/tailwind.css';

import Card from './components/Card.vue';
import Form from './components/Form.vue';
import Task from './components/Task.vue';
import TasksList from './components/TasksList.vue';

Vue.config.productionTip = false;

Vue.component('todo-card', Card);
Vue.component('todo-form', Form);
Vue.component('todo-task', Task);
Vue.component('todo-taskslist', TasksList);



new Vue({
  render: h => h(App),
}).$mount('#app');


