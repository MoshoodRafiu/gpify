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
      <div class="col-md-8 p-0 text-right mx-auto">
        <button @click="$store.dispatch('addCourse')" class="new-grade-button">
          Add Course
        </button>
        <button @click="$store.dispatch('clearCourses')" class="ml-2 new-grade-button">
          Clear
        </button>
      </div>
      <div class="col-md-12 grade-header">
        Simulate GP
      </div>
      <div class="col-md-8 mx-auto p-0">
        <button v-if="$store.state.courses.length !== 0" class="compute-button">
          Compute Grade Point
        </button>
      </div>
      <div class="grade col-md-8" v-for="(course, index) in $store.state.courses" :key="index" :class="{'disabled': !course.active}">
        <div class="row">
          <div class="col-4 grade-detail">
            <div class="label">Course</div>
            <div>
              <label>
                <input type="text" class="grade-input course" @input="updateCourse($event, 'course', index)" :value="course.course">
              </label>
            </div>
          </div>
          <div class="col-4 text-center grade-detail">
            <div class="label mr-3">Grade</div>
            <label>
              <select class="grade-input grade" :value="course.grade" @change="updateCourse($event, 'grade', index)">
                <option v-for="(grade, index) in getActiveGrade" :key="index+Math.random()" :selected="course.grade === grade.grade" :value="grade.grade">{{ grade.grade }}</option>
              </select>
            </label>
          </div>
          <div class="col-4 grade-action my-auto">
            <span v-if="course.active" @click="$store.dispatch('toggleCourse', index)" class="fa fa-2x fa-toggle-on"></span>
            <span v-if="!course.active" @click="$store.dispatch('toggleCourse', index)" class="fa fa-2x fa-toggle-off"></span>
            <span @click="$store.dispatch('removeCourse', index)" class="fa fa-2x ml-2 fa-minus-circle"></span>
          </div>
        </div>
      </div>
      <div v-if="$store.state.courses.length === 0" class="grade col-md-8 p-4 text-center">
        No Course(s) added
      </div>
    </div>
    <div class="body-footer" :class="{'dark-mode': $store.state.darkMode}">
      &copy; Rafiu Olakunle Moshood {{ (new Date).getFullYear() }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'grading',
  methods: {
    updateCourse(e, type, index){
      let course = this.$store.state.courses[index];
      switch (type) {
        case 'course':
          course.course = e.target.value;
          if (course.course){
            this.$store.dispatch('updateCourse', {index, data: course})
          }
          break;
        case 'grade':
          course.grade = e.target.value;
          if (course.grade){
            this.$store.dispatch('updateCourse', {index, data: course})
          }
          break;
      }
    }
  },
  computed: {
    getActiveGrade(){
      return this.$store.state.grades.filter(grade => grade.active)
    }
  }
}
</script>
<style>
  .grade-input.course{
    width: 80px;
  }
  .grade-input.grade{
    width: 60px;
    color: #333030;
  }
  select.grade-input{
    background: #FFFCFC;
  }
  select option{
    background: #FB5607;
    color: #FFFCFC;
  }
  .compute-button{
    padding: 20px;
    width: 100%;
    border: none;
    border-radius: 5px;
    background: #25ac06;
    color: #FFFCFC;
    margin-bottom: 10px;
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
</style>