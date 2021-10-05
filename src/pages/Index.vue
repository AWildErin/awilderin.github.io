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
    -->
    <h2> My projects </h2>
    <div v-for="project in getProjects" :key="project.name">
      <ProjectCard :project="project" />
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

  generalInfo(path: "/content/general/") {
    fields {
      data {
        intro
        languages
        engines
        scm
        social {
          icon
          name
          url
        }
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
      .map(item => item.node.fields.data);
    },
    generalInfo() {
      return this.$static.generalInfo.fields.data;
    },
    // Maybe move this to an intro component?
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
