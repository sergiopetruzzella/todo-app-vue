<template>
<div class="bg-blue-100">
    <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span class="font-semibold text-xl tracking-tight">Ampizzella</span>
    </div>
    <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="lg:flex-grow">
        </div>
        <div class="content-center">
        <a @click="showForm = true" href="#" class="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Task Form</a>
        </div>
    </div>
    </nav>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
         
      
        <todo-card class="mx-auto w-full max-w-lg" v-if="showForm">
            <todo-form @closeForm="showForm = false" @addtask="addTask"></todo-form>
        </todo-card>

     
<ol id="app">
         <todo-taskslist @remove="removeTask" @change="doneChange" :tasks="tasks" class="mx-auto mt-4 h-64 w-full max-w-lg text-gray-700" > 
         </todo-taskslist>
</ol>


 
 
    </div>
</div>    
</template>

<script>
var cont = 0; 
export default {

    props: {
       

    },
    computed: {
    className() {
      let classes = ['tasks__item__toggle'];
      if (this.task.completed) {
        classes.push('tasks__item__toggle--completed');
      }
      return classes.join(' ');
    }
  },

    data () { 
        return { 
            tasks: [
              
            ],
            showForm: false,
        };
    },

    mounted () {

    },


   

    methods: {
        deleteToDo(text) {
            // this.tasks.$remove(task);
            alert(text)
        }, 
        addTask(text) {
            cont = this.tasks.length+1;  
            this.tasks.push({
                id: cont,
                title: text,
                done: false,
                edit: false
            });

        },

        removeTask(index) {
        this.tasks.splice(index-1, 1);
          for (var i = index-1; i < this.tasks.length; i++) {
              this.tasks[i].id = this.tasks[i].id-1;
          }
    },

   
    },
       
    }

</script>