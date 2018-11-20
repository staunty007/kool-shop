<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },
  name: 'App'
}
</script>

<style>
* {
  font-family: 'Rubik', sans-serif;
}
body {
  background: lavender;
}
</style>
