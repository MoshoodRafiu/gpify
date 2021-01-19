<template>
  <div class="body grade-wrapper row">
      <div class="col-md-8 mx-auto p-0">
        <div class="col-md-8 result mx-auto" :class="{'dark-mode': $store.state.darkMode}">
          <div v-if="loading" class="text-center mx-auto">
            <cube-shadow background="#FFFCFC" class="mx-auto my-2"/>
            <div class="small">Simulating...</div>
          </div>
          <div v-if="!loading" class="result-container">
            <p>Your grade point is:</p>
            <div>{{ getGPA }}<span class="max-grade">of {{ getMaxGradePoint }}</span></div>
            <p>Remark: {{ getRemark }}</p>
            <button @click="$router.push({name: 'simulate'})" class="back-button">
              Back to Courses
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import {CubeShadow} from 'vue-loading-spinner'
export default {
  name: 'result',
  data(){
    return{
      loading: true,
      GPA: '',
      totalPoint: 0,
      totalUnit: 0
    }
  },
  methods: {
    getCoursePoint(courseGrade){
      const points = this.$store.state.grades.filter(grade => grade.grade === courseGrade)[0].points;
      return points ? points : 0;
    }
  },
  created() {
    if (this.$store.state.courses.length === 0){
      this.$router.push({name: 'simulate'});
      return;
    }
    this.loading = true;
    setTimeout(() => this.loading = false, (Math.floor(Math.random() * 5) + 2) * 1000)
  },
  components: {
    CubeShadow
  },
  computed: {
    getActiveGrade(){
      return this.$store.state.grades.filter(grade => grade.active)
    },
    getActiveCourses(){
      return this.$store.state.courses.filter(course => course.active);
    },
    getComputableActiveCourses(){
      return this.getActiveCourses.filter(course => course.course && course.grade && course.unit);
    },
    getTotalNumberOfUnits(){
      let units = 0;
      this.getComputableActiveCourses.forEach(course => {
        units += parseInt(course.unit);
      })
      return units;
    },
    getTotalNumberOfUnitPoints(){
      let points = 0;
      this.getComputableActiveCourses.forEach(course => {
        points += this.getCoursePoint(course.grade) * course.unit;
      })
      return points;
    },
    getGPA(){
      const gpa = (this.getTotalNumberOfUnitPoints / this.getTotalNumberOfUnits).toFixed(2);
      return !isNaN(gpa) ? gpa : 0;
    },
    getMaxGradePoint(){
      let max = 0;
      this.$store.state.grades.forEach(grade => {
        max = grade.points > max && grade.active ? grade.points : max;
      })
      return max.toFixed(2);
    },
    getRemark(){
      let maxPoint = this.getMaxGradePoint;
      let gpa = this.getGPA;
      switch (true) {
        case gpa === maxPoint:
          return 'Excellent Work! Keep it up';
        case gpa >= (maxPoint - maxPoint/4):
          return 'Great! This is really awesome';
        case gpa >= (maxPoint - maxPoint/2):
          return 'Good! Quite impressive';
        case gpa >= (maxPoint - (3 * maxPoint) / 4):
          return 'Awwnn! Nice work there';
        default:
          return 'Oops!! Looks like you need to study harder';
      }
    }
  }
}
</script>
<style>
  .result{
    width: 100%;
    height: 400px;
    background: #FB5607;
    color: #FFFCFC;
    border-radius: 5px;
    box-shadow: 5px 5px 10px #ccc;
    transition: box-shadow 0.5s ease-in;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .result.dark-mode{
    box-shadow: 5px 5px 10px #151414;
  }
  .result-container{
    text-align: center;
  }
  .result-container p{
    font-size: 15px;
    text-align: center;
  }
  .result-container div{
    font-size: 50px;
    margin: 70px 20px;
    text-align: center;
  }
  .back-button{
    background: #FFFCFC;
    color: #fb5607;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #a55830;
  }
  .max-grade{
    font-size: 13px;
  }
</style>