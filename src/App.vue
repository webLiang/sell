<template>
  <div id="app">
     <div class="main">
      <ul class="liang">
        <router-link to='/liang'>
          <li>商品</li>
        </router-link>
        <router-link to='/liang2'>
          <li>评论</li>
        </router-link>
        <router-link to='/liang3'>
          <li>商家</li>
        </router-link>
        <router-view class='view'></router-view>
      </ul>
       
     </div>
   
    
  </div>
</template>

<script>
// import myLiang from './components.liang.vue'
// export default {  
//       //2.然后,在components中写入子组件  
//       components: {myLiang}
//   }
// export default {
//   name: 'App'
// }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px auto;
   position: absolute;
   left: 50%;
  }
  .main{position: relative;}
#app .liang{
  position: absolute;
  width: 150px;
  margin-left:-150px;
  


}
#app .liang li{
  float: left;
  display: inline;
  width: 50px;
  text-align: center;
}
#app.view {
  clear: both;
  display: inline;
  width: 50px;
}
.router-link-active{
  color: red;
}
</style>
