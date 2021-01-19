<template>
  <div class="body">
    <div class="body-text">
      <div>Your one stop to the most dynamic grade point simulation system</div>
    </div>
    <div class="body-buttons-wrapper row">
      <div class="body-button col-sm-6">
        <button @click="$router.push({name: 'grading'})" :class="{'dark-mode': $store.state.darkMode}">Manage Grading System</button>
      </div>
      <div class="body-button col-sm-6">
        <button @click="$router.push({name: 'simulate'})" :class="{'dark-mode': $store.state.darkMode}">Start GP Simulation</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style>
  .page-body{
  }
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .toggle-theme{
    position: relative;
  }
  .brand-logo{
    width: 70px;
  }
  .toggle-theme .toggle-theme-switch{
    position: relative;
    height: 20px;
    width: 40px;
    cursor: pointer;
  }
  .toggle-theme .toggle-theme-switch .toggle-theme-knob.toggled{
    left: 50% !important;
  }
  .toggle-theme .toggle-theme-switch .toggle-theme-knob{
    width: 20px;
    height: 20px;
    background: #333030;
    border-radius: 50%;
    position: absolute;
    transition: left 0.3s linear, background 0.5s ease-in;
    left: 0;
  }
  .toggle-theme .toggle-theme-switch .toggle-theme-line{
    width: 40px;
    height: 8px;
    background: #333030;
    position: absolute;
    border-radius: 5px;
    top: 50%;
    transform: translateY(-50%);
    transition: background 0.5s ease-in;
  }
  .toggle-theme .toggle-theme-switch .toggle-theme-knob.dark-mode{
    background: #FFFCFC;
  }
  .toggle-theme .toggle-theme-switch .toggle-theme-line.dark-mode{
    background: #FFFCFC;
  }
  .body-text{
    margin: 110px auto;
    width: 80%;
    text-align: center;
    color: #FB5607;
    font-size: 46px;
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  .body-buttons-wrapper{
    margin-top: 30px;
  }
  .body-button{
    text-align: center;
  }
  .body-button button{
    padding: 20px 50px;
    font-size: 17px;
    border: none;
    border-radius: 8px;
    color: #FFFCFC;
    background: #FB5607;
    box-shadow: 5px 5px 10px #ccc;
    transition: box-shadow 0.5s ease-in;
  }
  .body-button button.dark-mode{
    box-shadow: 5px 5px 10px #151414;
  }
  .body-button:last-child button{
    background: #25ac06;
  }
  .body-footer{
    margin-top: 40px;
    text-align: center;
    color: #333030;
    font-size: 13px;
    transition: color 0.5s ease-in;
  }
  .body-footer.dark-mode{
    color: #FFFCFC;
  }
  @media screen and (max-width: 790px){
    .body-text{
      font-size: 40px;
      padding: 70px 10px;
    }
  }
  @media screen and (max-width: 767px){
    .body-text{
      font-size: 40px;
      padding: 40px 10px;
    }
    .body-button button{
      width: 100%;
      margin-top: 20px;
    }
  }
  @media screen and (max-width: 500px){
    .brand-logo{
      width: 50px;
    }
    .body-text{
      margin: 70px auto;
      width: 100%;
      font-size: 28px;
      padding: 40px 10px;
    }
    .body-button button{
      width: 100%;
      margin-top: 20px;
      font-size: 13px;
    }
    .body-footer{
      font-size: 10px;
    }
  }
  @media screen and (max-width: 350px){
    .brand-logo{
      width: 45px;
    }
    .body-text{
      margin: 40px auto;
      width: 100%;
      font-size: 30px;
      padding: 40px 10px;
    }
    .body-button button{
      width: 100%;
      margin-top: 20px;
    }
  }
  @keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 10px); }
    100%   { transform: translate(0, -0px); }
  }
</style>