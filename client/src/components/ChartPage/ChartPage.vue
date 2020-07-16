<template>
  <div class="chart">
      <h1>Chart</h1>
      <pre>{{$_topFive}}</pre>
  </div>
</template>

<script>
import topFive from '../../mixin/topfive'

export default {
  mixins : [
    topFive
  ],
  mounted (){
    this.$_fetchTopFive("http://localhost:3000/topFIveDay")
  }
}
</script>

<style>

</style>