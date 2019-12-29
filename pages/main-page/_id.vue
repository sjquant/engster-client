<template>
  <div class="main-content-container">
    <div class="main-content-intro">
      <h1>{{title}}</h1>
      <div class="description">{{ description }}</div>
      <h3>
        <strong>예문으로 완벽히 숙지해요!</strong>
      </h3>
    </div>
    <line-card :line="line" v-for="line in lines" :key="line.line_id"></line-card>
  </div>
</template>

<script>
import LineCard from "../../components/main-page/LineCard";
export default {
  components: {
    LineCard
  },
  data() {
    return {
      title: "'catch up' 무슨 의미일까요?",
      description: `'catch up'은 보통 with나 on과 많이 어울려서 쓰이는데요. 
누군가를 따라잡거나, 밀린 내용들을 따라가거나, 안 본지 꽤 된 사이일 때 못다한 이야기를 한다는 의미에요.`,
      lines: [
        {
          line_id: 15,
          line: "We should get together, have lunch, just...catch up.",
          translation:
            "우리 언제 한번 모여서 점심도 먹고 못다한 이야기도 해야지.",
          content_id: 1,
          content: "Shameless US - 2 X 06",
          category: "TV Series",
          like_count: 0,
          translation_count: 1
        },
        {
          line_id: 15,
          line: "We should get together, have lunch, just...catch up.",
          translation:
            "우리 언제 한번 모여서 점심도 먹고 못다한 이야기도 해야지.",
          content_id: 1,
          content: "Shameless US - 2 X 06",
          category: "TV Series",
          like_count: 0,
          translation_count: 1
        },
        {
          line_id: 15,
          line: "We should get together, have lunch, just...catch up.",
          translation:
            "우리 언제 한번 모여서 점심도 먹고 못다한 이야기도 해야지.",
          content_id: 1,
          content: "Shameless US - 2 X 06",
          category: "TV Series",
          like_count: 0,
          translation_count: 1
        },
        {
          line_id: 15,
          line: "We should get together, have lunch, just...catch up.",
          translation:
            "우리 언제 한번 모여서 점심도 먹고 못다한 이야기도 해야지.",
          content_id: 1,
          content: "Shameless US - 2 X 06",
          category: "TV Series",
          like_count: 0,
          translation_count: 1
        },
        {
          line_id: 15,
          line: "We should get together, have lunch, just...catch up.",
          translation:
            "우리 언제 한번 모여서 점심도 먹고 못다한 이야기도 해야지.",
          content_id: 1,
          content: "Shameless US - 2 X 06",
          category: "TV Series",
          like_count: 0,
          translation_count: 1
        },
        {
          line_id: 15,
          line: "We should get together, have lunch, just...catch up.",
          translation:
            "우리 언제 한번 모여서 점심도 먹고 못다한 이야기도 해야지.",
          content_id: 1,
          content: "Shameless US - 2 X 06",
          category: "TV Series",
          like_count: 0,
          translation_count: 1
        },
        {
          line_id: 15,
          line: "We should get together, have lunch, just...catch up.",
          translation:
            "우리 언제 한번 모여서 점심도 먹고 못다한 이야기도 해야지.",
          content_id: 1,
          content: "Shameless US - 2 X 06",
          category: "TV Series",
          like_count: 0,
          translation_count: 1
        },
        {
          line_id: 15,
          line: "We should get together, have lunch, just...catch up.",
          translation:
            "우리 언제 한번 모여서 점심도 먹고 못다한 이야기도 해야지.",
          content_id: 1,
          content: "Shameless US - 2 X 06",
          category: "TV Series",
          like_count: 0,
          translation_count: 1
        },
        {
          line_id: 15,
          line: "We should get together, have lunch, just...catch up.",
          translation:
            "우리 언제 한번 모여서 점심도 먹고 못다한 이야기도 해야지.",
          content_id: 1,
          content: "Shameless US - 2 X 06",
          category: "TV Series",
          like_count: 0,
          translation_count: 1
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../search/search.scss";
div.main-content-container {
  width: 100%;

  > .main-content-intro {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    h1 {
      margin-top: 0;
      margin-bottom: 1.6rem;
    }
    .description {
      white-space: pre-wrap;
    }

    h3 {
      margin-top: 1.6rem;
      margin-bottom: 0;
    }
  }

  h1.example-title {
    margin: 0;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }

  .line-content > .translation {
    color: $gray-darker;
    padding-top: 0.4rem;
  }
}
</style>