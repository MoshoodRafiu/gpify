<template>
  <div id="app" :class="{'dark-mode': $store.state.darkMode}">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');
  body{
    padding: 0;
    margin: 0;
    /*font-family: 'Racing Sans One', cursive;*/
    font-family: 'Potta One', cursive;
    font-weight: lighter;
  }
  #app{
    min-height: 100vh;
    background: #FFFCFC;
    padding: 40px 80px;
    transition: background 0.5s ease-in;
  }
  #app.dark-mode{
    background: #333030;
  }
  button:focus,
  select:focus,
  input:focus{
    outline: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
  @media screen and (max-width: 500px){
    #app{
      padding: 40px 30px;
    }
  }
</style>
