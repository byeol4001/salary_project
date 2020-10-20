<template>
  <div id="section_1" class="sections">
    <div class="text_wrap">
      <div class="text_line">
        <h1>오늘은</h1>
        <input type="number" v-model="payday" placeholder="1-31" />
        <h1>일?</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { payday: '' };
  },
  methods: {
    moveTo() {
      document
        .getElementById('section_2')
        .scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style lang="scss">
@import '../style/_variables.scss';
h1 {
  color: $mainColor;
}
</style>
