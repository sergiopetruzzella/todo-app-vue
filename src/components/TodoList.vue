<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        <h1 class="font-hairline text-6xl text-center text-gray-500">Todo App</h1>
         
      
        <todo-card class="mx-auto mt-32 ml-16 w-full max-w-lg absolute left-0">
            <todo-form></todo-form>
        </todo-card>

       
<ol>
         <todo-task  class="mx-auto mt-4 h-64 w-full max-w-lg text-gray-700 absolute right-0 mr-16" > 
            <li v-for="task in tasks">
            
            <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-3">
              <div class=" relative sm:flex sm:items-center px-0 py-4">
                <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                  <p class="text-xl leading-tight">{{task.title}}</p>
                  <p class="pt-1 text-sm leading-tight text-gray-600">{{task.description}}</p>
                </div>
             <button class=" mr-2 absolute right-0 text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Message</button>
            
              </div>
            </div>
                </li>
         </todo-task>
</ol>

<!--        <todo-card class="mx-auto mt-10 w-full max-w-lg text-gray-700">
            Create/Edit Task
        </todo-card> -->

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
                    done: false,
                    description: 'Es necesario qeu vaya a ese sitio temprano'
                },
                {
                    id: 2,
                    title: 'Example task2',
                    done: false,
                    description: '',
                },
                {
                    id: 3,
                    title: 'Example task4',
                    done: false,
                    description: '',
                },
                {
                    id: 3,
                    title: 'Example task4',
                    done: false,
                    description: '',
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