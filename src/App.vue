<template>
    <div id="app" class="bg-gray-100 h-screen">
        <!-- <Form/> -->
        <TodoList/>
    </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
//import Form from './components/Form.vue';

export default {
    name: 'app',
    components: {
        TodoList,
        //Form
    }
}
</script>