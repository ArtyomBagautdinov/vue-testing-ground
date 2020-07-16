<template>
  <div class="navigation-item__container" :id="idName">
        <img :src="itemSource"/>  
  </div>
</template>

<script>
export default {
    props : {
        idName : {
            type : Number,
            required: true
        },
        itemSource: {
            type : String,
            required: true
        }
    },
}
</script>

<style>

</style>