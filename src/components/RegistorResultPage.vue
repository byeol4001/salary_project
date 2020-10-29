<template>
  <div id="section_2" class="sections">
    <div class="text_wrap">
      <div class="text_line" v-if="this.sec1Data.SalarySelect === '월급'">
        <h1>오늘까지 번 돈은 {{ salaryWon() }}원</h1>
      </div>
      <div class="text_line" v-else-if="this.sec1Data.SalarySelect === '연봉'">
        <h1>
          오늘까지 번 돈은
          <h1 class="Mfont">{{ salaryWon() }}</h1>
          원
        </h1>
      </div>
      <div class="text_line">
        <h1>
          월급까지 남은날은
          <small class="Mfont">{{ getNextSalaryDate() }}</small
          >일
        </h1>
      </div>
      <div class="text_line percent_wrap">
        <div class="percent" :style="{ width: percent + '%' }">
          <img v-if="percent < 50" src="../image/icon2.png" alt="아이콘 " />
          <img v-else src="../image/icon.png" alt="아이콘 " />
        </div>
        <div class="percent"></div>
      </div>
      <div class="text_line">
        <span @click="moveSection('section_3')" style="margin-top:35px"
          >이거사려먼 얼마나 벌어야하는지 알아보기! ></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { moveTo } from '../utils/utils';
export default {
  data() {
    return {
      percent: '',
      dailyIncomePrice: '',
      minusDate: '',
    };
  },
  props: ['sec1Data'],
  methods: {
    moveSection(goto) {
      moveTo(goto);
    },
    getNextSalaryDate() {
      let result;
      const { payday } = this.sec1Data;
      const year = new Date().getFullYear();
      const date = new Date().getDate();
      const month = new Date().getMonth();
      const paydayDate = new Date(year, month + 1, payday);
      const paydayDates = new Date(year, month, payday);

      const todayDate = new Date(year, month, date);

      if (payday - new Date().getDate() >= 0) {
        //월급날짜가 오늘 날짜보다 숫자가 클때
        result =
          (paydayDates.getTime() - todayDate.getTime()) / 1000 / 60 / 60 / 24;
        this.percent = 100 - (result / 30) * 100;
        this.minusDate = result + 1; //현재 마이너스값인데 , 월급 다음날부터 계산에 포함해야하므로 플러스로 하루 빼준다
        return result;
      } else {
        //월급날짜가 오늘 날짜보다 숫자가 작을때 (즉 월급 무조건 다음달)
        result =
          (paydayDate.getTime() - todayDate.getTime()) / 1000 / 60 / 60 / 24;
        this.percent = 100 - (result / 30) * 100;
        return result;
      }
    },
    salaryWon() {
      const { payday, salary } = this.sec1Data;
      let { dailyIncomePrice } = this;
      let result;
      const date = new Date().getDate();
      const month = new Date().getMonth();
      const lastDate = new Date(2020, month + 1, 0).getDate();

      dailyIncomePrice = salary / lastDate;

      if (!this.minusDate) {
        console.log('월급날마이너스아님');
        this.$emit('postIncomePirce', dailyIncomePrice);
        result = Math.floor(
          parseFloat(dailyIncomePrice * (date - payday))
        ).toLocaleString();
        return result;
      } else {
        //월급날이 마이너스 뜰때
        const countWorkDate = -1 + date;
        result = Math.floor(
          parseFloat(dailyIncomePrice * countWorkDate)
        ).toLocaleString();
        return result;
      }

      /*  ---연봉계산하기--- else {
        result = Math.floor(
          parseFloat((salary / 365) * countDate)
        ).toLocaleString();
        console.log(salary / 365, '샐러리를 나눈거');
        console.log(countDate, 'countDate');
        return result;
      } */
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
  min-width: 400px;
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

@-webkit-keyframes iconAnimation {
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
