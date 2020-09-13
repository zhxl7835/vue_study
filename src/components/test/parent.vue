<template>
  <div class="parent">
    <Button type="primary" @click="changeMsg">查询</Button>
    <Input v-model="lifemsg" clearable style="width: 200px" />
    <Son :title="msg1" :lifemsg="lifemsg"/>
  </div>
</template>

<script>
  import Son from '@/components/test/son'

  export default {
    name: "parent",
    data() {
      return {
        msg1:"我是父亲",
        lifemsg:""
      }
    },
    methods: {
      changeMsg(event){
        this.msg1="123"
      }
    },

    components: {
      Son
    }
  }
</script>

<style scoped>

</style>
