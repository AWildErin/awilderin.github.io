<template>
  <Layout>
    <div class="container-fluid bg-dark">
      <div class="row ps-2">
        <Introduction />
        <div class="col-9 mt-2">
          <h1 class="text-center text-white">Blog posts</h1>
          <div v-for="edge in getPosts" :key="edge.id">
            <PostCard class="mb-2 bg-dark text-white" :post="edge.node" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query {
  posts: allPost (sortBy: "date_published", order: DESC, filter: { published: {eq: true }}){
    edges {
      node {
        id
        title
        description
        tags
        path
        date_published
        timeToRead
      }
    }
  }
}
</static-query>

<script>
import Introduction from "@/components/Introduction";
import ProjectCard from "@/components/ProjectCard";
import PostCard from "@/components/PostCard";

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    Introduction,
    ProjectCard,
    PostCard
  },
  computed: {
    getPosts()
    {
      return this.$static.posts.edges;
    }
  }
}
</script>

<style>

</style>
