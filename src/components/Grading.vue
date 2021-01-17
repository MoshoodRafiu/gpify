<template>
  <div class="page-body">
    <div class="header">
      <img src="../assets/logo.svg" class="brand-logo" alt="gpify">
      <div class="toggle-theme" @click="$store.dispatch('toggleAppMode')">
        <div class="toggle-theme-switch">
          <div class="toggle-theme-knob" :class="{'toggled': $store.state.darkMode, 'dark-mode': $store.state.darkMode}"></div>
          <div class="toggle-theme-line" :class="{'dark-mode': $store.state.darkMode}"></div>
        </div>
      </div>
    </div>
    <div class="body grade-wrapper row">
      <div class="col-md-12 grade-header">
        Grading System
      </div>
      <div class="grade disabled col-md-8">
        <div class="row">
          <div class="col-3 grade-detail">A</div>
          <div class="col-3 grade-detail">
            <label>
              <input type="text" class="grade-input" value="70">
            </label>
          </div>
          <div class="col-3 grade-detail">
            <label>
              <input type="text" class="grade-input" value="100">
            </label>
          </div>
          <div class="col-3 grade-action">Dis</div>
        </div>
      </div>
      <div v-for="index in 10" :key="index" class="grade col-md-8">
        <div class="row">
          <div class="col-3 grade-detail">A</div>
          <div class="col-3 grade-detail">
            <label>
              <input type="text" class="grade-input" value="70">
            </label>
          </div>
          <div class="col-3 grade-detail">
            <label>
              <input type="text" class="grade-input" value="100">
            </label>
          </div>
          <div class="col-3 grade-action">Dis</div>
        </div>
      </div>
    </div>
    <div class="body-footer" :class="{'dark-mode': $store.state.darkMode}">
      &copy; Rafiu Olakunle Moshood {{ (new Date).getFullYear() }}
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>
  .grade-wrapper{
    margin: 40px 0;
  }
  .grade-header{
    font-size: 27px;
    color: #FB5607;
    float: none;
    text-align: center;
    margin: 20px 0;
  }
  .grade{
    margin: 10px auto;
    background: #FB5607;
    color: #FFFCFC;
    float: none;
    padding: 10px;
    border-radius: 5px;
    align-items: center;
  }
  .grade.disabled{
    background: #f58650;
  }
  .grade-detail{
    padding-left: 20px;
  }
  .grade-action{
    text-align: right;
    padding-right: 20px;
  }
  .grade-input{
    width: 50px;
    padding: 5px;
    border: none;
    border-radius: 3px;
    text-align: center;
  }
</style>