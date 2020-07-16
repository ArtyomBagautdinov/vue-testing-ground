<template>
  <div id="app">
    <Menu></Menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu/Menu'
export default {
  name: 'app',
  components: {
     Menu
  }
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
    background-color: rgb(245, 245, 245);
}

#app{
    display: flex;
    flex-direction: row;
    justify-content: start; 
}
</style>
