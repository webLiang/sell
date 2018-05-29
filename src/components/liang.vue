<template>
  <div class="hello">
    <h1>HelloLiang1商品组件</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
	mounted: function () {
    axios.get('http://music.163.com/api/playlist/detail?id=19723756')
    .then(function (res) {
      console.log(res)
    }, function (error) {
      console.log(error)
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
