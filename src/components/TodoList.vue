<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        <h1 class="font-hairline text-6xl text-center text-gray-500">Todo App</h1>

        <todo-card class="mx-auto mt-10 w-full max-w-lg">
            <todo-form></todo-form>
        </todo-card>

        <todo-card class="mx-auto mt-4 h-64 w-full max-w-lg text-gray-700">
            Todo List
        </todo-card>

        <todo-card class="mx-auto mt-10 w-full max-w-lg text-gray-700">
            Create/Edit Task
        </todo-card>

    </div>
</template>

<script>
export default {
    props: {

    },

    data () {
        return {
            tasks: [
                {
                    id: 1,
                    title: 'Example task',
                    done: false
                }
            ]
        };
    },

    mounted () {

    },

    methods: {

    }
}
</script>