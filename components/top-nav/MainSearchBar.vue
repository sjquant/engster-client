<template>
  <div class="search-bar-container">
    <input type="text" placeholder="찾고싶은 표현을 입력하세요!" @keyup.enter="onEnterSearch" ref="inputSearch" />
    <div class="search-glass" @click="onClickSearch">
      <SearchGlass />
    </div>
  </div>
</template>

<script>
import SearchGlass from "./SearchGlass.vue";
export default {
  components: {
    SearchGlass
  },
  methods: {
    onClickSearch() {
      let keyword = this.$refs.inputSearch.value;
      this.search(keyword);
    },
    onEnterSearch(e) {
      let keyword = e.target.value;
      this.search(keyword);
    },
    search(keyword) {
      if (keyword.length < 2) {
        // doNothing
        return;
      }

      let krCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      if (krCheck.test(keyword)) {
        this.$router.push({
          path: `/search/korean`,
          query: {
            keyword: keyword
          }
        });
      } else {
        this.$router.push({
          path: `/search/english`,
          query: {
            keyword: keyword
          }
        });
      }
    }
  }
};
</script>

<style lang='scss'>
@import "~utils";

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
      color: $gray-dark;
    }

    @include media("<=sm") {
      font-size: 14px;
    }
  }
}

.search-glass {
  position: absolute;
  right: 1.2rem;
  cursor: pointer;
}
</style>