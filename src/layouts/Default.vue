<template>
  <div class="layout">
    <!--
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    -->
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
/*
:root {
  color-scheme: dark;
}
*/

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

::-webkit-scrollbar {
  background-color: #252829;
  color: #a9a298;
}

::-webkit-scrollbar-corner {
  background-color: #1d1f20;
}

::-webkit-scrollbar-thumb {
    background-color: #484d50;
}

body {
  /*font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;*/
  font-family: 'Roboto', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

/*
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
*/

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
