<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        <h1 class="andres font-hairline text-5xl text-center text-gray-600">Ampizzella To-Do App</h1>
         
      
        <todo-card class="mx-auto mt-32 ml-16 w-full max-w-lg absolute left-0">
            <todo-form @addtask="addTask"></todo-form>
        </todo-card>

     
<ol id="app">
         <todo-taskslist @remove="removeTask" @change="doneChange" :tasks="tasks" class="mx-auto mt-4 h-64 w-full max-w-lg text-gray-700 absolute right-0 mr-16" > 
         </todo-taskslist>
</ol>


 
 
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

   
    },
       
    }

</script>