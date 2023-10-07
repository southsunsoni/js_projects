<template>
<div class="container">
  <div class="row">
    <div class="col-md-6 offset-md-3 appearance">
     <div>
      <input type="text" name="" id="display" v-model="result">
       <input type="text" name="" id="input" v-model="input">
      </div>
      <button v-for="item in buttons" :key="item.indexOf" @click="addtoexpresion(item)">{{ item }}</button>
      <button @click="calculate">=</button>
  </div>
  </div>
</div>
</template>

<script>
import * as math from "math.js";
export default {
  name: 'App',
  components: {},
  data(){
    return{
      expresion:'',
      result:'',
      buttons:["+","*","-","1","2","3","4","5","6","7","8","9","0","."]

    }
  },
    methods:{
      addtoexpresion(item){
        this.expresion+=item
        console.log(this.expresion);

      },
      calculate(){
        try{
          const parsedexpression=math.parse(this.expresion)
          const simplifiedexpresion=parsedexpression.compile()
          this.result=simplifiedexpresion.evaluate()
        }catch (error){
          this.result="Error";
        }
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
}
.appearance {
    background-color: #3498db;
    padding: 20px;
    width: 300px;
    height: 500px;
    border: 1px solid #2980b9;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    transform: perspective(3000px) rotateY(0deg);
    text-align: center;
    color: #fff;
}
#input{
  width: 300px;
  height: 20px;
  margin-top: 1px;
}
#display{
  width: 300px;
  height: 20px;
}
button{
  width: 70px;
  height: 70px;
  margin-top: 20px;
}
</style>
