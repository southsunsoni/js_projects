<template>
  <div class="block" v-if="showblock">click me</div>
</template>

<script>
export default {
    props:['delay'],
    data(){
        return{
            showblock:false
        }
    },
    mounted(){
        console.log('component mounted')
        setTimeout(()=>{
            this.showblock=true
            console.log(this.delay)
        },this.delay)

    },
    updated(){

    }

}
</script>

<style>
.block{
    width: 400px;
    border-radius: 20px;
    background: blue;
    color:aqua;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}

</style>