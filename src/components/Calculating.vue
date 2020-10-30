<template>
  <div id="section_3" class="sections">
    <form class="text_wrap">
      <div class="text_line">
        <h3 class="Mfont">지름신오지마라!! 🙏🏻</h3>
      </div>
      <div class="text_line">
        <input class="big" type="text" v-model="stuff" placeholder="사고싶은것" />
        <h1>사고싶은데</h1>
      </div>
      <div class="text_line">
        <h1>가격은</h1>
        <input class="big" type="number" v-model="price" placeholder="가격" pattern="^[0-9]*$" />
        <h1>원 이야</h1>
      </div>
      <div class="text_line">
        <button @click.prevent="clickButton">이거 사려면 얼마나 일해야할까? ➡︎</button>
      </div>
      <div class="text_line" v-if="isActive === true">
        <p>{{ dateCount }}</p>
      </div>
      <img class="top" @click="moveSection('section_1')" src="../image/top.png" />
    </form>
  </div>
</template>

<script>
import { moveTo } from "../utils/utils";
export default {
  watch: {},
  data() {
    return {
      stuff: "",
      price: "",
      isActive: false,
      dateCount: ""
    };
  },
  props: ["postIncomePirce"],
  methods: {
    moveSection(goto) {
      moveTo(goto);
    },
    clickButton() {
      const { stuff, price, postIncomePirce } = this;
      if (!this.postIncomePirce) {
        alert("월급을 입력해 주셔야 해요!");
        moveTo("section_1");
      } else if (stuff && price) {
        this.isActive = true;
        const count = Math.ceil(price / postIncomePirce);
        console.log(count);
        if (count < 1) {
          this.dateCount = "에이😎 하루만 일하면 사겠네";
        } else if (1 < count > 2) {
          this.dateCount = "하루하고 조금만 더 일하면 살 수 있어😊";
        } else {
          this.dateCount = `${stuff} 사려면  ${Math.ceil(
            count
          )}일 동안 일해야해... 화이팅 😊`;
        }
      } else if (!Number(price)) {
        alert("💵 가격에는 숫자만 입력 가능합니다.");
      } else {
        alert("구매하고싶은 것의 이름과 가격을 입력해주세요☺️");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/_variables.scss";
h1,
h3,
span {
  color: $mainColor;
}
h3 {
  margin: 0 auto 20px;
  font-size: 1.3rem;
}
p {
  margin: 10px auto 0;
  animation: textAnimation 1s ease-in;
}
.top {
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 35px;
  margin: 10px;
  border: 1px solid;
  border-color: $mainColor;
  padding: 11px;
  cursor: pointer;
}

@-webkit-keyframes textAnimation {
  0% {
    margin-top: -50px;
    opacity: 0;
  }

  80% {
    opacity: 0;
  }
  100% {
    margin-top: 10px;
    opacity: 1;
  }
}
</style>
