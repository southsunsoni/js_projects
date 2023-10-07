<template>
  <input type="text" placeholder="enter a task" v-model="task" id="enter">
  <input type="submit" name="" id="send" @click="Addtask">
  <button id="show" @click="show">showlist</button>
  <ul v-if="showlist" class="list">
    <li v-for="item in tasks" :key="item.indexof" >{{ item.text }}<button @click="Deletetask(item.index)">x</button></li>
  
  </ul>
</template>

<script>
export default {
    data(){

        return{
            task:'',
            showlist:true,
            tasks:[],
        };
    },
        methods:{
            Addtask(){
                if(this.task!==''){
                    this.tasks.push({id:this.task.indexOf,text:this.task})
                    this.task=''
                    console.log(this.tasks)
                };
            },
            Deletetask(item){
                this.tasks.splice(item,1)
                console.log(this.tasks)
                },
            show(){
                this.showlist=!this.showlist
            }

    },
};
</script>

<style>
#enter{
    width: 400px;
    border-radius: 20px;
    background-color:black ;
    color: white;
}
.list{
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    background-color:gray ;
}

</style>