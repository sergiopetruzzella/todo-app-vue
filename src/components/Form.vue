<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        <todo-card class="mx-auto mt-10 w-full max-w-lg">
            <form>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="to-do-title">
                        To-Do Title
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="to-do-description">
                        To-Do Description
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                </div>
            </form>
        </todo-card>
    </div>
</template>

<script>
export default {
    props: {

    },

    data () {
        return {

        };
    },

    mounted () {

    },

    methods: {

    }
}
</script>