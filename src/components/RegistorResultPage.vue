<template>
  <div id="section_2" class="sections">
    <div class="text_wrap">
      <div class="text_line" v-if="this.sec1Data.SalarySelect === '월급'">
        <h1>오늘까지 번 돈은 {{ workPrice }}원</h1>
      </div>
      <div class="text_line" v-else-if="this.sec1Data.SalarySelect === '연봉'">
        <h1>
          오늘까지 번 돈은
          <h1 class="Mfont">{{ workPrice }}</h1>
          원
        </h1>
      </div>
      <div class="text_line">
        <h1 v-if="!today">
          월급까지 남은날은
          <small class="Mfont">{{ remain }}</small
          >일
        </h1>
        <h1 v-else>
          오늘 월급날이잖아!!!!
        </h1>
      </div>
      <div class="text_line percent_wrap">
        <div class="percent" :style="{ width: percent + '%' }">
          <img
            v-if="percent < 60 && today"
            src="../image/icon2.png"
            alt="아이콘 "
          />
          <img v-else src="../image/icon.png" alt="아이콘 " />
        </div>
        <div class="percent"></div>
      </div>
      <div class="text_line">
        <span @click="moveToSmooth('section_3')" style="margin-top:35px"
          >이거사려면 얼마나 벌어야하는지 알아보기! ></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { moveToSmooth } from '../utils/utils';
export default {
  data() {
    return {
      remain: null,
      count: null,
      workCount: null,
      percent: null,
      workPrice: null,
      today: false,
    };
  },
  props: ['sec1Data'],
  watch: {
    sec1Data() {
      this.calSalary();
      this.calPercent();
    },
  },
  methods: {
    moveToSmooth(goto) {
      moveToSmooth(goto);
    },
    calSalary() {
      let { salary, payday } = this.sec1Data;
      payday = parseInt(payday);

      let now = new Date();
      let salaryObj = new Date(now.getFullYear(), now.getMonth(), payday);
      let salaryBefore = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        payday
      );
      let salaryNext = new Date(now.getFullYear(), now.getMonth() + 1, payday);
      let remainCount =
        salaryObj - now < 0 ? salaryNext - now : salaryObj - now;
      let MonthDateCount =
        salaryObj - now < 0 ? salaryNext - salaryObj : salaryObj - salaryBefore;
      this.remain = this.returnDate(remainCount);
      this.count = this.returnDate(MonthDateCount);
      this.workCount = this.count - this.remain;
      if (payday == now.getDate()) {
        this.today = true;
        this.workPrice = salary;
      } else {
        this.workPrice = Math.floor((salary / this.count) * this.workCount);
      }
      this.calPercent();
      this.$emit('postIncomePrice', Math.floor(salary / this.count));
    },
    calPercent() {
      today
        ? (this.percent = 100)
        : (this.percent = (this.workCount / this.count) * 100);
    },
    returnDate(num) {
      return Math.ceil(num / (1000 * 60 * 60 * 24));
    },
  },
};
</script>

<style lang="scss">
@import '../style/_variables.scss';
h1 {
  color: $mainColor;
}
.percent_wrap {
  position: relative;
  width: 60vw;
  min-width: 350px;
  margin-top: 30px;
  .percent {
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 3px;
    background-color: $mainColor;
  }
  & div:first-child {
    opacity: 1;
    img {
      position: absolute;
      z-index: 9;
      left: 100%;
      top: -19px;
      width: 40px;
      opacity: 1;
      animation: iconAnimation 1.5s infinite;
    }
  }
  & div:nth-child(2) {
    opacity: 0.4;
  }
}

@keyframes iconAnimation {
  0% {
    left: 100%;
  }
  70% {
    left: 98%;
  }
  100% {
    left: 100%;
  }
}
</style>
