<template>
<nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Customers</p>
      <p class="title">{{data_customer}} Record</p>
    </div>
  </div>
</nav>
</template>

<script>

export default {
    name:'Home',
    computed:{
      data_customer(){
        return this.$store.state.customers.length;
      }
    }
}
</script>

<style>

</style>
