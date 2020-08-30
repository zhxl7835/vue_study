<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ obj.name }}</h1>
    <ul>
      <li v-for="lists in list">{{lists}}</li>
      <br/>
      <li v-for="item in list1">{{item.tile}}</li>
    </ul>
    <h2>Essential Links</h2>
    <h2 v-bind:title="title">I am title</h2>
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598699952649&di=fb68e9b47a09bbbeb3c41d4a9ff17106&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D1761131378%2C1355750940%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D667%26h%3D1000">
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
