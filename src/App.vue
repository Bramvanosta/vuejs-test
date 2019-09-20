<template>
  <div id="app">
    <UserDropdown />
  </div>
</template>

<script>
import UserDropdown from './components/UserDropdown/UserDropdown';

export default {
  name: 'app',
  components: {
    UserDropdown,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
