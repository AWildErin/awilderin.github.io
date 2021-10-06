<template>
  <Layout>
    <!--
    <h1> AWildErin's Portfolio </h1>

    {{generalInfo.intro}}

    <h3>Things I know</h3>
    <h5>Languages</h5>
    {{getLanguages}}

    <h5>Engines</h5>
    {{getEngines}}

    <h5>Source Control</h5>
    {{getScm}}

    <div class="btn-group mt-2 mb-2" v-for="social in getSocials" :key="social.name">
      <a class="btn btn-primary me-2" :href="social.url" target="_blank"><i v-if="social.icon" :class="social.icon"/> {{social.name}}</a>
    </div>

    <h2> My projects </h2>
    <div v-for="project in getProjects" :key="project.name">
      <ProjectCard :project="project" />
    </div>
    -->
    <div class="container-fluid bg-dark">
      <div class="row ps-2">
        <div class="col-3 pt-2 text-white">
          <!--
          <nav class="nav flex-column position-fixed">
            <a class="p-1 nav-link active" href="#">Active</a>
            <a class="p-1 nav-link" href="#">Link</a>
            <a class="p-1 nav-link" href="#">Link</a>
            <a class="p-1 nav-link disabled" href="#">Disabled</a>
          </nav>
          <img src="current-pfp.png" class="rounded-circle border-primary" />
          -->
          <img src="current-pfp.png" class="mx-auto d-block rounded-circle border-success" />
          <h1 class="text-center">AWildErin's Portfolio</h1>
          {{generalInfo.intro}}

          <h3>A bit about me:</h3>

          <h5>Languages</h5>
          {{getLanguages}}

          <h5>Engines</h5>
          {{getEngines}}

          <h5>Source Control</h5>
          {{getScm}}

        </div>
        <div class="border-start border-3 border-primary col-9 mt-2">
          <h1 class="text-center text-white">A list of projects I've worked on</h1>
          <div v-for="project in getProjects" :key="project.name">
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

  allSocials {
    edges {
      node {
        fields {
          data {
            icon
            name
            url
            copy
          }
        }
      }
    }
  }

  generalInfo(path: "/content/general/") {
    fields {
      data {
        intro
        languages
        engines
        scm
      }
    }
  }
}
</static-query>

<script>
import ProjectCard from "@/components/ProjectCard";

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    ProjectCard
  },
  computed: {
    getProjects() {
      return this.$static.allProjects.edges
      .map(item => item.node.fields.data).reverse();
    },
    generalInfo() {
      return this.$static.generalInfo.fields.data;
    },
    // Maybe move this to an intro component?

    getSocials() {
      return this.$static.allSocials.edges
      .map(item => item.node.fields.data);
    },
    getLanguages()
    {
      return this.$static.generalInfo.fields.data.languages.join( ", " );
    },
    getEngines()
    {
      return this.$static.generalInfo.fields.data.engines.join( ", " );
    },
    getScm()
    {
      return this.$static.generalInfo.fields.data.scm.join( ", " );
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
