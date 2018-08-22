
<template>
    <div>
        <input type="radio" v-on:click="deletar" />  
             {{texto}}  
    </div>
</template>

<script>

export default {
    props:[
        "texto",
        "num"
    ],
    methods: {
        deletar(){
            this.$emit("deletar");
        }
    },
}
</script>

<style>

</style>
