<template>
  <div class="border-end border-3 border-primary col-3 pt-2 text-white">
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

    h3>A bit about me:</h3>

    <h5>Languages</h5>
    <p>{{getLanguages}}</p>

    <h5>Engines</h5>
    <p>{{getEngines}}</p>

    <h5>Source Control</h5>
    <p>{{getScm}}</p>

    <div class="btn-group mt-2 mb-2" v-for="social in getSocials" :key="social.name">
      <a class="btn btn-primary me-2" :href="social.url" target="_blank"><i v-if="social.icon" :class="social.icon"/> {{social.name}}</a>
    </div>

    <p class="mt-2 text-muted">This site was made with <a href="https://gridsome.org/" target="_blank">Gridsome</a> and <a href="https://getbootstrap.com" target="_blank">Bootstrap</a></p>
  </div>
</template>

<static-query>
query {
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

  allSocials {
    edges {
      node {
        fields {
          data {
            icon
            name
            url
          }
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  name: 'Introduction',
  computed: {
    generalInfo() {
      return this.$static.generalInfo.fields.data;
    },
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
    },
 }
}
</script>