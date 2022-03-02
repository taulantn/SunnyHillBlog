<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost"
export default {
  name: "Home",
  components: {BlogPost},
  data(){
    return{
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, Javascript and more.",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost:[
        {
          title: "This is a Filler Title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "beatiful-stories",
        },
        {
          title: "This is a Filler Title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>
