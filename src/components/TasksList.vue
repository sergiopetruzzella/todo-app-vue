<template>
  <div>
       <li v-for="task in tasks" v-bind:key="task.id">
            
            <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-3">
              <div class=" relative sm:flex sm:items-center px-0 py-4">
                <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                  <p class="text-xl leading-tight">{{task.id}}.{{task.title}}{{task.done}}</p>
                </div>
             <button @click="task.done = !task.done" class=" mr-2 absolute right-0 text-indigo-700 hover:text-white hover:bg-indigo-700 border border-indigo-700 text-xs font-semibold rounded-full px-4 py-1 mr-24 leading-normal">
                Done!
            </button>
            <button @click="$emit('remove',task.id)" id="task.id" class=" mr-2 absolute right-0 text-red-800 hover:text-white hover:bg-red-800 border border-red-800 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
                Delete
            </button>
            
              </div>
            </div>
                </li>

</div>
</template>

<script>
export default {
    props: {
        tasks: { type:Object,
        required:true, 
        }


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