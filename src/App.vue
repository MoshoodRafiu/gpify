<template>
  <div id="app" :class="{'dark-mode': $store.state.darkMode}">
    <div class="page-body">
      <div class="header">
        <img @click="$router.push({name: 'home'})" src="./assets/logo.svg" class="brand-logo" alt="gpify">
        <div class="toggle-theme" @click="$store.dispatch('toggleAppMode')">
          <div class="toggle-theme-switch">
            <div class="toggle-theme-knob" :class="{'toggled': $store.state.darkMode, 'dark-mode': $store.state.darkMode}"></div>
            <div class="toggle-theme-line" :class="{'dark-mode': $store.state.darkMode}"></div>
          </div>
        </div>
      </div>
      <transition name="fade">
        <router-view/>
      </transition>
      <div class="body-footer" :class="{'dark-mode': $store.state.darkMode}">
        &copy; Rafiu Olakunle Moshood {{ (new Date).getFullYear() }}
      </div>
    </div>
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
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    /*opacity: 1;*/
    transition: opacity 0.4s ease-in;
  }
  .fade-leave{

  }
  .fade-leave-active{
    transition: opacity 0.4s ease-in;
    opacity: 0;
  }
  @media screen and (max-width: 500px){
    #app{
      padding: 40px 30px;
    }
  }
</style>
