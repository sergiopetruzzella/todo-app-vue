<template>
    <div class="container mx-auto px-4 pt-4 pb-12 flex flex-col flex-wrap relative">
        <form>
            <div class="mb-4">
                <label class="block mb-2 text-gray-700" for="to-do-title">
                    Title
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Title">
            </div>
            
            <button @click="deleteToDo()" class="bg-transparent border border-indigo-700 text-indigo-700 font-semibold hover:text-white hover:bg-indigo-700 py-1 px-4 rounded-full absolute bottom-0 right-0 mr-4">
                Add
            </button>
        </form>
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
        deleteToDo() {
            /* this.tasks.$remove(task); */
            alert('hola')
        }
    }
}
</script>