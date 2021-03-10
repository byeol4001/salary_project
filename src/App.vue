<template>
  <div id="app">
    <img
      @click="popupClick"
      v-if="popup"
      class="popup"
      src="../src/image/popup.png"
      alt="팝업"
    />
    <Main></Main>
    <RegistorPage @sandData="postData"></RegistorPage>
    <RegistorResultPage
      :sec1Data="section1Datas"
      @postIncomePirce="postIncomePirce"
    ></RegistorResultPage>
    <Calculating :postIncomePirce="incomePrice"></Calculating>
  </div>
</template>

<script>
import Main from './components/Main';
import RegistorPage from './components/RegistorPage.vue';
import RegistorResultPage from './components/RegistorResultPage.vue';
import Calculating from './components/Calculating.vue';
import { moveToSmooth } from './utils/utils';

export default {
  name: 'App',

  data() {
    return {
      section1Datas: {},
      incomePrice: '',
      popup: true,
    };
  },

  components: {
    Main,
    RegistorPage,
    RegistorResultPage,
    Calculating,
  },
  mounted() {
    moveToSmooth('main');
  },
  methods: {
    postData(datas) {
      console.log(datas);
      this.section1Datas = datas;
    },
    postIncomePirce(incomePrice) {
      this.incomePrice = incomePrice;
    },
    popupClick() {
      this.popup = false;
      sessionStorage.setItem('popup', 'hide');
    },
  },
  created() {
    sessionStorage.getItem('popup') === 'hide'
      ? (this.popup = false)
      : (this.popup = true);
  },
};
</script>

<style lang="scss">
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  -webkit-box-shadow: 10px 10px 36px 6px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 10px 10px 36px 6px rgba(0, 0, 0, 0.26);
  box-shadow: 10px 10px 36px 6px rgba(0, 0, 0, 0.26);
  border-radius: 11px;
}
</style>
