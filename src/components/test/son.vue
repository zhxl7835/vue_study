<template>
  <div class="son">
    <li>{{ title }} -- {{ lifemsg }}</li>
  </div>
</template>

<script>
  export default {
    name: "son",
    data() {
      return{
        msg2:"我是儿子"
      }
    },
    props: ['title','lifemsg']

  }
</script>

<style scoped>

</style>
