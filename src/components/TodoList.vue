<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        <h1 class="font-hairline text-5xl text-center text-gray-600">Ampizzella To-Do App</h1>
         
      
        <todo-card class="mx-auto mt-32 ml-16 w-full max-w-lg absolute left-0">
            <todo-form @addtask="addTask"></todo-form>
        </todo-card>

     
<ol id="app">
         <todo-taskslist @remove="removeTask" @change="doneChange" :tasks="tasks" class="mx-auto mt-4 h-64 w-full max-w-lg text-gray-700 absolute right-0 mr-16" > 
         </todo-taskslist>
</ol>

<button @click="removeTask(2)" class=" mr-2 absolute right-0 text-red-800 hover:text-white hover:bg-red-800 border border-red-800 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
                Delete
            </button>
 

<!--        <todo-card class="mx-auto mt-10 w-full max-w-lg text-gray-700">
            Create/Edit Task
        </todo-card> -->

    </div>
</template>

<script>
var cont = 0; 
export default {

    props: {

    },

    data () { 
        return { 
            tasks: [
              
            ]
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
          done: false
        });},

        removeTask(index) {
      this.tasks.splice(index-1, 1);
          for (var i = index-1; i < this.tasks.length; i++) {
              this.tasks[i].id = this.tasks[i].id-1;
          }
    },

    doneChange(index) {
        this.tasks[index-1].done= true;
        alert(this.tasks[index-1].done);
      if (this.tasks[index-1].done= false) { this.tasks[index-1].done= true
          
      }
          }
    },
       
    }

</script>