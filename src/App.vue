<template>
  <div id="app" class="container">

    <Navbar :links="navigationLink" ></Navbar>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{currentPage}}
          </h1>
          <h2 class="subtitle">
            {{currentPage}} Page
          </h2>
          <router-view class="view"></router-view>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components:{
    Navbar,
  },
  created(){
  },
  computed:{
    currentPage(){
      return this.$route.name.toLowerCase()
                        .split(' ')
                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ');
    },
    navigationLink(){
      return this.$router.options.routes.map(i => {
          return {
              title:i.name,
              url:i.path,
              child:i.child? i.child : []
            }
        });
    }
  }
}
</script>

<style>

</style>
