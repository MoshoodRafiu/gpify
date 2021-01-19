<template>
  <div class="body grade-wrapper row">
      <div class="col-md-8 p-0 text-right mx-auto">
        <button @click="$store.dispatch('addGrade')" class="new-grade-button">
          Add New
        </button>
        <button @click="$store.dispatch('resetGrading')" class="ml-2 new-grade-button">
          Reset
        </button>
      </div>
      <div class="col-md-12 grade-header">
        Grading System
      </div>
      <div v-for="(grade,index) in $store.state.grades" :key="index" class="grade col-md-8" :class="{'disabled': !grade.active}">
        <div class="row">
          <div class="col-md-3 col-6 grade-detail">
            <div class="label">Grade</div>
            <div v-if="!grade.removable">{{ grade.grade }}</div>
            <div v-if="grade.removable">
              <label>
                <input type="text" class="grade-input" @input="updateGrade($event, 'grade', index)" :value="grade.grade">
              </label>
            </div>
          </div>
          <div class="col-md-3 col-6 text-md-left text-right grade-detail">
            <div class="label mr-3">Points</div>
            <label>
              <input type="number" class="grade-input" @input="updateGrade($event, 'points', index)" :value="grade.points">
            </label>
          </div>
          <div class="col-md-3 col-6 grade-detail">
            <div class="label">Grade Range</div>
            <label>
              <input type="number" class="grade-input" @input="updateGrade($event, 'from', index)" :value="grade.from">
            </label>
            <label>
              <input type="number" class="grade-input" @input="updateGrade($event, 'to', index)" :value="grade.to">
            </label>
          </div>
          <div class="col-md-3 col-6 grade-action my-auto">
            <span @click="$store.dispatch('toggleGrade', index)" v-if="grade.active" class="fa fa-2x fa-toggle-on"></span>
            <span @click="$store.dispatch('toggleGrade', index)" v-if="!grade.active" class="fa fa-2x fa-toggle-off"></span>
            <span v-if="grade.removable" @click="$store.dispatch('removeGrade', index)" class="fa fa-2x ml-2 fa-minus-circle"></span>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'grading',
  methods: {
    updateGrade(e, type, index){
      let grade = this.$store.state.grades[index];
      switch (type) {
        case 'points':
          grade.points = parseFloat(e.target.value);
          if (parseFloat(e.target.value) > 7){
            grade.points = 7;
          }
          if (grade.points){
            this.$store.dispatch('updateGrade', {index, data: grade})
          }
          break;
        case 'from':
          grade.from = parseInt(e.target.value);
          if (grade.to && parseInt(e.target.value) >= grade.to){
            grade.from = grade.to - 1;
          }else if (parseInt(e.target.value) > 100){
            grade.from = 100;
          }
          if (grade.from){
            this.$store.dispatch('updateGrade', {index, data: grade})
          }
          break;
        case 'to':
          grade.to = parseInt(e.target.value);
          if (parseInt(e.target.value) > 100){
            grade.to = 100;
          }
          if (grade.to){
            this.$store.dispatch('updateGrade', {index, data: grade})
          }
          break;
        case 'grade':
          grade.grade = e.target.value;
          if (grade.grade){
            this.$store.dispatch('updateGrade', {index, data: grade})
          }
          break;
      }
    }
  }
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
    transition: background 0.5s ease-in;
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
    margin: 5px 5px 5px 0;
    border: none;
    border-radius: 3px;
    text-align: center;
    text-transform: uppercase;
  }
  .new-grade-button{
    padding: 10px 15px;
    font-size: 14px;
    border: none;
    background: #FB5607;
    color: #FFFCFC;
    border-radius: 5px;
  }
  .label{
    font-size: 9px;
  }
</style>