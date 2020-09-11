<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="hello">
    helloworld
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj:{
        name:"zhangsan"
      },
      list:["zhang","li","jkfhg"],
      list1:[{'tile':'111'},{'tile':'222'},{'tile':'333'}],
      title:'我是标题'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
