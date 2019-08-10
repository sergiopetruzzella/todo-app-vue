<template>
    <div class="container mx-auto px-4 pt-4 pb-12 flex flex-col flex-wrap relative">
        <form v-on:submit.prevent="onSubmit">
            <div class="mb-4">
              <a href="#" @click="$emit('closeForm')" class="text-bold text-lg absolute right-0 mr-6 mb-10">x</a>
                <label class="block mb-2 text-gray-700 text-lg" for="to-do-title">
                    Title
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="username" v-model="newTask" type="text" placeholder="Title">
            </div>
            
            <button @click="$emit('addtask',newTask)" class="bg-transparent border border-orange-600 text-orange-600 font-semibold hover:text-white hover:bg-orange-600 py-1 px-4 rounded-full absolute bottom-0 right-0 mr-4">
                Add
            </button>
        </form>
       
    </div>
</template>

<script>
export default {
    props: {  tasks: {default: []}

    },

    data () {
       return {   newTask: ''};
    },
    computed: {
    incomplete() {
      return this.tasks.filter(this.inProgress).length;
    }
  },

    mounted () {

    },

    methods: {
        deleteToDo() {
            /* this.tasks.$remove(task); */
            alert('hola')
        },
          addTask() {
      if (this.newTask) {
        this.tasks.push({
          title: this.newTask,
          completed: false
        });
        this.newTask = '';
      }
    },
    }
}
</script>