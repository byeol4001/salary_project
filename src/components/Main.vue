<template>
  <div id="main" class="sections">
    <div class="text_line" @click="moveSection('section_1')">
      <img class="logo" src="../image/logo.png" alt="나 오늘까지 얼마벌었어?" />

      <h2>▶ 오늘까지 번 이번달 월급 확인하기 🤔 ◀</h2>
      <div class="icons">
        <img src="../image/icon_wh.png" alt="아이콘1" />
        <img src="../image/icon2_wh.png" alt="아이콘2" />
        <img src="../image/icon3_wh.png" alt="아이콘3" />
        <img src="../image/icon_wh.png" alt="아이콘1" />
        <img src="../image/icon2_wh.png" alt="아이콘2" />
        <img src="../image/icon3_wh.png" alt="아이콘3" />
      </div>
    </div>
  </div>
</template>

<script>
import { moveTo } from '../utils/utils';

export default {
  methods: {
    moveSection(goto) {
      moveTo(goto);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../style/_variables.scss';
#main {
  background-color: $mainColor;
  text-align: center;
  .logo {
    width: 50%;
    min-width: 380px;
  }
  .icons {
    width: 50%;
    min-width: 400px;
    margin: 0 auto;
    img {
      width: 8%;
      min-width: 40px;
      margin: 6% 2% 0;
      animation: rotationCycle 2s infinite ease-in;
      &:nth-child(1) {
        animation-delay: 200ms;
      }
      &:nth-child(2) {
        animation-delay: 400ms;
      }
      &:nth-child(3) {
        animation-delay: 600ms;
      }
      &:nth-child(4) {
        animation-delay: 800ms;
      }
      &:nth-child(5) {
        animation-delay: 1000ms;
      }
      &:nth-child(6) {
        animation-delay: 1200ms;
      }
    }
  }
  h2 {
    color: #fff;
    margin-top: 20px;
    font-size: 1.5rem;
    cursor: pointer;
  }

  @keyframes rotationCycle {
    0% {
      transform: rotate(-90deg) scale(0);
    }
    40% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(0deg) scale(1);
    }
    100% {
      transform: rotate(90deg) scale(0);
    }
  }
}
</style>
