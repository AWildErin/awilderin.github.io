<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{post.title}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{post.description}}</h6>
        <h6> {{post.date_published}} </h6>
        <!--
        <h6 class="card-subtitle mb-2 text-muted" v-if="project.engine">Engine: {{project.engine}}</h6>
        <h6 class="card-subtitle mb-2 text-muted">{{project.description}}</h6>
        -->
      </div>
    </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: Object,
  },
  /*
  computed: {

  },
  methods: {

  },
  */
  data() {
    return {
      name: 0
    }
  }
}
</script>