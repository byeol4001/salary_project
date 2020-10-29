<template>
  <div id="app">
    <Main></Main>
    <registor-page @sandData="postData"></registor-page>
    <registor-result-page
      :sec1Data="section1Datas"
      @postIncomePirce="postIncomePirce"
    ></registor-result-page>
    <Calculating :postIncomePirce="incomePrice"></Calculating>
  </div>
</template>

<script>
import Main from './components/Main';
import RegistorPage from './components/RegistorPage.vue';
import RegistorResultPage from './components/RegistorResultPage.vue';
import Calculating from './components/Calculating.vue';
import { moveTo } from './utils/utils';

export default {
  name: 'App',

  data() {
    return {
      section1Datas: {},
      incomePrice: '',
      section2Show: false,
    };
  },
  watch: {
    section1Datas() {
      this.section1Datas ? (this.section2Show = true) : '';
    },
  },
  components: {
    Main,
    RegistorPage,
    RegistorResultPage,
    Calculating,
  },
  mounted() {
    moveTo('main');
  },
  methods: {
    postData(datas) {
      console.log(datas);
      this.section1Datas = datas;
    },
    postIncomePirce(incomePrice) {
      this.incomePrice = incomePrice;
    },
  },
};
</script>

<style lang="scss"></style>
