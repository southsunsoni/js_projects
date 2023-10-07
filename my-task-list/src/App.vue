<template>
  <div class="form">
    <input type="text" name="" id="" placeholder="task name" v-model="name">
    <div class="valide"></div>
    <div class="invalide"></div>
    <input type="text" placeholder="task id" v-model="id">  
    <div class="valide"></div>
    <div class="invalide"></div>
    <button @click="description">enter task description</button>
    <input type="text" v-if="show">
    <div class="valide"></div>
    <div class="invalide"></div>
    <button @click="Addtask">Add a newtask</button>
</div>
<div class="container-fluid tasks">
  <div class="container-fluid task" @click="taskshow" v-for="item in tasks" :key="item.id"><h1>{{ item.name }}</h1><br><p>
  {{ item.description }}</p></div>

</div>
  <Taskdescription />
</template>

<script>
import Taskdescription from './components/Taskdescription.vue'

export default {
  name: 'App',
  components: {Taskdescription},
  data(){
    return{
      name:'',
      id:'',
      show:false,
      descripto:'',
      tasks:[]
    }
  },
  methods:{
    Addtask(){
      this.tasks.push({name:this.name,id:this.tasks.indexOf,description:this.descripto})
      this.name=''
      this.id=''
      this.descripto=''
      console.log(this.tasks)
    },
    description(){
      this.show=!this.show

    },
    taskshow(){
      alert('this is a task')

    }

  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
input{
  margin: 10px;
}

.form{
  max-width: 300px;
  height: 350px;
  background-color: aqua;
  
}
.valide,.invalide{
  height: 20px;
}

.task{
  border-radius: 20px;
  background-color: white;
  height: 50px;
  cursor: pointer;
  margin-top:5px ;
}
.tasks{
  position: absolute;
  margin: auto 0;
  background-color: #3090ef;
  border-radius: 20px;
  height: 400px;
  width: 1000px;
  top: 500px;

}
</style>
