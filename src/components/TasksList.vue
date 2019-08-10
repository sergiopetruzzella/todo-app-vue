<template>
  <div>
      
       <li v-for="task in tasks" v-bind:key="task.id">

            <div  v-if="task.done === true" class="w-full max-w-lg mx-auto bg-green-300 shadow-lg rounded-lg overflow-hidden my-3">
              <div class=" relative sm:flex sm:items-center px-0 py-4">
                <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                  <a href="#" @dblclick="task.edit = !task.edit" v-if="!task.edit" class="text-xl leading-tight">{{task.id}}.- {{task.title}}</a>
                  <p v-if="task.edit" class="inline-block text-lg">{{task.id}}.- </p>
                  <input @keyup.enter="task.edit = !task.edit" v-if="task.edit" class="inline-block text-lg ml-2 bg-transparent" v-model="task.title" type="text">
                  <button v-if="task.edit" @click="task.edit = !task.edit" class="text-md mr-2 absolute right-0 text-orange-600 hover:text-white hover:bg-orange-600 border border-orange-600 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
                    Edit
                </button>
                </div>
    
             <button v-if="!task.edit" @click="task.done = !task.done" class=" mr-2 absolute right-0 text-blue-500 hover:text-white hover:bg-blue-500 border border-blue-500 text-xs font-semibold rounded-full px-4 py-1 mr-24 leading-normal">
                Done!
            </button>
            <button v-if="!task.edit" @click="$emit('remove',task.id)" id="task.id" class=" mr-2 absolute right-0 text-orange-600 hover:text-white hover:bg-orange-600 border border-orange-600 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
                Delete
            </button>
        
            
              </div>
            </div>
            <div  v-else class="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-3">
              <div class=" relative sm:flex sm:items-center px-0 py-4">
                <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                  <a href="#" @dblclick="task.edit = !task.edit" v-if="!task.edit" class="text-xl leading-tight">{{task.id}}.- {{task.title}}</a>
                  <p v-if="task.edit" class="inline-block text-lg">{{task.id}}.- </p>
                  <input @keyup.enter="task.edit = !task.edit" v-if="task.edit" class="inline-block text-lg ml-2 bg-transparent" v-model="task.title" type="text">
                  <button v-if="task.edit" @click="task.edit = !task.edit" class="text-md mr-2 absolute right-0 text-orange-600 hover:text-white hover:bg-orange-600 border border-orange-600 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
                    Edit
                </button>
                </div>
    
             <button v-if="!task.edit" @click="task.done = !task.done" class=" mr-2 absolute right-0 text-blue-500 hover:text-white hover:bg-blue-500 border border-blue-500 text-xs font-semibold rounded-full px-4 py-1 mr-24 leading-normal">
                Done!
            </button>
            <button v-if="!task.edit" @click="$emit('remove',task.id)" id="task.id" class=" mr-2 absolute right-0 text-orange-600 hover:text-white hover:bg-orange-600 border border-orange-600 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
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