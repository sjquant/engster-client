<template>
  <div class="container">
    <input
      type="text"
      placeholder="찾고싶은 표현을 입력하세요!"
      @keyup.enter="onEnterSearch"
      ref="inputSearch"
    />
    <div class="search-glass" @click="onClickSearch">
      <MagnifyingGlassIcon />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import MagnifyingGlassIcon from "./icons/MagnifyingGlassIcon.vue";

export default {
  components: {
    MagnifyingGlassIcon
  },
  methods: {
    ...mapActions("common", ["ADD_ALERT"]),
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
        this.ADD_ALERT({
          msg: "최소 2글자 이상의 검색어를 입력해주세요.",
          type: "error"
        });
        return;
      }

      let krCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      if (krCheck.test(keyword)) {
        this.$router.push({
          path: `/search/translation`,
          query: {
            keyword: keyword
          }
        });
      } else {
        this.$router.push({
          path: `/search/subtitle`,
          query: {
            keyword: keyword
          }
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "~utils";

.container {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  @include media(">=md") {
    width: 60%;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    max-width: $x-large-w;
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

  .search-glass {
    position: absolute;
    right: 1.2rem;
    @include media(">=md") {
      right: 3.2rem;
    }
    cursor: pointer;
  }
}
</style>
