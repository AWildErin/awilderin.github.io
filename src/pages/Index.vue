<template>
  <Layout>
    <div class="container-fluid bg-dark">
      <div class="row ps-2">
        <Introduction />
        <div class="col-9 mt-2">
          <h1 class="text-center text-white">A list of projects I've worked on</h1>
          <div v-for="project in getProjects" :key="project.order">
            <ProjectCard class="mb-2 bg-dark text-white" :project="project" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query {
  allProjects {
    edges {
      node {
        fields {
          data {
            name
            engine
            languages
            software
            description
            paragraphs {
              text
            }
            links {
              icon
              name
              url
            }
            media {
              name 
              url
            }
          }
        }
      }
    }
  }
}
</static-query>

<script>
import Introduction from "@/components/Introduction";
import ProjectCard from "@/components/ProjectCard";

export default {
  metaInfo: {
    title: 'Portfolio'
  },
  components: {
    Introduction,
    ProjectCard
  },
  computed: {
    getProjects() {
      return this.$static.allProjects.edges
      .map(item => item.node.fields.data).reverse();
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
