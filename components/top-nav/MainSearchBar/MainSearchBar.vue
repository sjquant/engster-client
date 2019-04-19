<template>
  <div class="search-bar-container">
    <input type="text" placeholder="찾고싶은 표현을 입력하세요!" @keyup.enter="onEnterSearch" ref="inputSearch">
    <SearchGlass @click="onClickSearch"/>
  </div>
</template>

<script>
import SearchGlass from "./SearchGlass.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    SearchGlass
  },
  methods: {
    ...mapMutations(["SET_SEARCH_WORD"]),
    onClickSearch() {
      let searchWord = this.$refs.inputSearch.value;
      this.search(searchWord);
    },
    onEnterSearch(e) {
      let searchWord = e.target.value;
      this.search(searchWord);
    },
    search(searchWord) {
      if (searchWord.length < 2) {
        // doNothing
        return;
      }

      this.SET_SEARCH_WORD(searchWord);

      let krCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      if (krCheck.test(searchWord)) {
        this.$router.push({
          path: `/search/korean/${searchWord}`
        });
      } else {
        this.$router.push({
          path: `/search/english/${searchWord}`
        });
      }
    }
  }
};
</script>

<style lang='scss'>
@import "~styles/utils.scss";

.search-bar-container {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  @include media(">=lg") {
    width: 60%;
    // max-width: $large-w;
  }

  input {
    width: 100%;
    font-size: 1.6rem;
    padding: 0.8rem 3.2rem 0.8rem 1.6rem;
    border: 1px solid $gray-lighter;
    background-color: $gray-lighter;
    border-radius: 4px;
    transition: all 0.1s ease-in;

    &:focus {
      outline: none;
      background: white;
      border: 1px solid $gray-light;
    }

    &::placeholder {
      color: $gray;
    }

    @include media("<=sm") {
      font-size: 14px;
    }
  }
}

.search-glass {
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  right: 1.2rem;
  cursor: pointer;
}
</style>