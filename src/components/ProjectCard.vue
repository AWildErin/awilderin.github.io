<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{project.name}}</h5>
        <h6 class="card-subtitle mb-2 text-muted" v-if="project.engine">Engine: {{project.engine}}</h6>
        <h6 class="card-subtitle mb-2 text-muted">{{project.description}}</h6>

        <!--
            Because I'm weird, we will have a check to see if languages has only one.
            If it has only one, then we just do "Language" as opposed to the plural.
        -->
        <h6 class="card-subtitle mb-2 text-muted" v-if="project.languages.length > 1 ">Languages: {{getLanguages}}</h6>

        <!-- Just a hardcode here, generally we only have 1 language anyway so no point doing for each -->
        <h6 class="card-subtitle mb-2 text-muted" v-if="project.languages.length <= 1">Language: {{project.languages[0]}}</h6>

        <h6 class="card-subtitle mb-2 text-muted" v-if="project.software.length > 0">Software: {{getSoftware}}</h6>
        <ul>
          <li v-for="(link, index) of project.links" :key="index">
            <!-- TODO: Fix this space, probably be best to move them to a else if just to be easier -->
            <a class="btn btn-primary" :href="link.url"><i v-if="link.icon" :class="link.icon"/> {{link.name}}</a>
          </li>
        </ul>

        <p class="card-text" v-for="(paragraph, index) of project.paragraphs" :key="index">
          {{paragraph.text}}
        </p>

        <ul class="list-group list-group-horizontal-lg d-flex flex-wrap center" v-if="project.media.length > 0">
          <li class="list-group-item" v-for="(media, index) of project.media" :key="index">
            <!--<g-image :src="getImage(index)" width="50"/>-->
            <img :src="media.url" style="height: 100px" />
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

export default {
  name: 'ProjectCard',
  props: {
    project: Object,
  },
  computed: {
      getLanguages() {
        return this.project.languages.join( ", " );
      },
      getSoftware() {
        return this.project.software.join( ", " );
      }
  },
  methods: {
    // Workaround for https://github.com/gridsome/gridsome/issues/292
    getImage(index) {
      console.log(index)
      return this.project.media[index].url
    }
  },
  data() {
    return {
      name: 0
    }
  }
}
</script>