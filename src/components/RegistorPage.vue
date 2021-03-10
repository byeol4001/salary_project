<template>
  <div id="section_1" class="sections">
    <form class="text_wrap">
      <div class="text_line">
        <h1>월급일은 매월</h1>
        <input
          type="number"
          v-model="payday"
          placeholder="월급날"
          pattern="^[0-9]*$"
        />
        <h1>일</h1>
      </div>
      <div class="text_line">
        <h1>
          <select v-model="SalarySelect">
            <option selected>월급</option>
            <option>연봉</option>
          </select>
        </h1>
        <input
          class="big"
          type="number"
          v-model="salary"
          placeholder="급여액"
          pattern="^[0-9]*$"
        />
        <h1>원</h1>
      </div>
      <div class="text_line" @click.prevent="moveSection('section_2')">
        <button>오늘까지 번 이번달 월급 확인하기 🤔</button>
      </div>
    </form>
  </div>
</template>

<script>
import { moveToSmooth } from '../utils/utils';
export default {
  data() {
    return {
      payday: '',
      salary: '',
      SalarySelect: '월급',
    };
  },
  watch: {
    payday() {
      this.payday <= 0 ? (this.payday = '') : '';
      this.payday > 31 ? (this.payday = 31) : '';
    },
    SalarySelect() {
      if (this.SalarySelect === '연봉') {
        alert('죄송합니다. 연봉 계산은 준비중입니다 🙅🏻‍♀️');
        this.SalarySelect = '월급';
      }
    },
  },
  methods: {
    moveSection(goto) {
      if (this.payday && this.salary) {
        const data = {
          payday: this.payday,
          salary: this.salary,
          SalarySelect: this.SalarySelect,
        };
        this.$emit('sandData', data);
        moveToSmooth(goto);
        console.log(goto, 'dd');
      } else if (!this.payday) {
        alert('🗓 급여일을 알려주세요! (숫자만 입력가능)');
      } else if (this.salary === '') {
        alert('💵 급여액을 알려주세요 (숫자만 입력가능)');
      }
    },
  },
};
</script>

<style lang="scss">
@import '../style/_variables.scss';
h1 {
  color: $mainColor;
}
p {
  text-align: center;
}
</style>
