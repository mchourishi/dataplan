<template>
  <div id="app">
    <DataPlan/>
  </div>
</template>

<script>
import DataPlan from './components/DataPlan';

export default {
  name: 'App',
  components: {
    DataPlan
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
</style>
