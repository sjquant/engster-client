<template>
  <div class="main-page-container">
    <large-card
      :id="lgContent.id"
      :title="lgContent.title"
      :description="lgContent.description"
      :photo="lgContent.photo"
    ></large-card>
    <small-card
      v-for="each in mainContents.slice(1,mainContents.length)"
      :key="each.id"
      :id="each.id"
      :title="each.title"
      :description="each.description"
      :photo="each.photo"
    ></small-card>
  </div>
</template>

<script>
import LargeCard from "../components/main-page/LargeCard";
import SmallCard from "../components/main-page/SmallCard";
export default {
  components: {
    LargeCard,
    SmallCard
  },
  data() {
    return {
      mainContents: [
        {
          id: "1",
          title: "'~를 신중히 여기다.' 영어로 어떻게 할까?",
          description:
            "'진지하게 생각해주신다면 감사하겠습니다.' / '너는 어떠한 것도 신중하게 생각하지 않아.' 같은 말, 어떻게 할까요?",
          photo:
            "https://images.unsplash.com/photo-1455354269813-737d9df115bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1283&q=80"
        },
        {
          id: "2",
          title: "'catch up' 무슨 의미일까요?",
          description:
            "'catch up'은 보통 with나 on과 많이 어울려서 쓰이는 데요. 누군가를 따라잡거나, 밀린 내용들을 따라가거나, 안 본지 꽤 된 사이일 때 못다한 이야기를 한다는 의미에요.",
          photo:
            "https://images.unsplash.com/photo-1501621965065-c6e1cf6b53e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
        },
        {
          id: "3",
          title: "'catch up' 무슨 의미일까요?",
          description:
            "'catch up'은 보통 with나 on과 많이 어울려서 쓰이는 데요. 누군가를 따라잡거나, 밀린 내용들을 따라가거나, 안 본지 꽤 된 사이일 때 못다한 이야기를 한다는 의미에요.",
          photo:
            "https://images.unsplash.com/photo-1421151051865-b98b5f93dc13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
          id: "4",
          title: "'catch up' 무슨 의미일까요?",
          description:
            "'catch up'은 보통 with나 on과 많이 어울려서 쓰이는 데요. 누군가를 따라잡거나, 밀린 내용들을 따라가거나, 안 본지 꽤 된 사이일 때 못다한 이야기를 한다는 의미에요.",
          photo:
            "https://images.unsplash.com/photo-1517840088901-2fb4f43641df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        {
          id: "5",
          title: "'catch up' 무슨 의미일까요?",
          description:
            "'catch up'은 보통 with나 on과 많이 어울려서 쓰이는 데요. 누군가를 따라잡거나, 밀린 내용들을 따라가거나, 안 본지 꽤 된 사이일 때 못다한 이야기를 한다는 의미에요.",
          photo:
            "https://images.unsplash.com/photo-1471201310397-b4dc5f0c49c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
        },
        {
          id: "6",
          title: "'catch up' 무슨 의미일까요?",
          description:
            "'catch up'은 보통 with나 on과 많이 어울려서 쓰이는 데요. 누군가를 따라잡거나, 밀린 내용들을 따라가거나, 안 본지 꽤 된 사이일 때 못다한 이야기를 한다는 의미에요.",
          photo:
            "https://images.unsplash.com/photo-1501621965065-c6e1cf6b53e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
        },
        {
          id: "7",
          title: "'catch up' 무슨 의미일까요?",
          description:
            "'catch up'은 보통 with나 on과 많이 어울려서 쓰이는 데요. 누군가를 따라잡거나, 밀린 내용들을 따라가거나, 안 본지 꽤 된 사이일 때 못다한 이야기를 한다는 의미에요.",
          photo:
            "https://images.unsplash.com/photo-1523051121227-d6626e4bb9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        }
      ]
    };
  },
  computed: {
    lgContent() {
      return this.mainContents[0];
    }
  }
};
</script>
