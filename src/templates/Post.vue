<template>
  <Layout>
      hi
    <article class="prose lg:prose-xl xl:prose-2xl">
      <h1>{{ $page.post.title }}</h1>
      <div v-html="$page.post.content"></div>
    </article>
    <hr class="m-4" />
  </Layout>
</template>

<script>
export default {
  name: "Post",
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.description,
        },
        {
          name: "twitter:description",
          content: this.$page.post.description,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: this.$page.post.title,
        },
        {
          name: "twitter:creator",
          content: "@awilderin_",
        },
        {
          name: "twitter:site",
          content: "@awilderin_",
        },
        {
          name: "og:description",
          content: this.$page.post.description,
        },
        {
          name: "og:title",
          content: this.$page.post.title,
        },
        {
          name: "og:image",
          content: this.$static.metadata.siteName + this.$page.post.og_image.src,
        },
      ],
      link: [
        {
          rel: "canonical",
          content: this.$static.metadata.siteName + this.$page.post.path,
        },
      ],
    };
  },
};
</script>

<page-query>
query Post($id: ID!) {
  post(id: $id) {
    title
    path
    content
    description
    og_image
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>