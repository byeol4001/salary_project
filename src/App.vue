<template>
  <div id="app">
    <registor-page></registor-page>
    <registor-result-page></registor-result-page>
  </div>
</template>

<script>
import RegistorPage from './components/RegistorPage.vue';
import RegistorResultPage from './components/RegistorResultPage.vue';

export default {
  name: 'App',
  components: {
    RegistorPage,
    RegistorResultPage,
  },
  created() {
    window.__scrollPosition = document.documentElement.scrollTop || 0;
    document.addEventListener('scroll', function() {
      const _documentY = document.documentElement.scrollTop;
      const _direction = _documentY - window.__scrollPosition >= 0 ? 1 : -1;
      console.log(_direction); // 콘솔창에 스크롤 방향을 출력

      window.__scrollPosition = _documentY; // Update scrollY
    });
  },
};
</script>

<style></style>
