<template>
  <v-app>
    <v-toolbar app class="top-toolbar" flat>
      <v-toolbar-side-icon></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600');
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons');

  #app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #fafbfc;
  }

  hr {
    height: 1px;
    border: none;
    background: #2c3e50;
    opacity: .2;
  }

  h1 {
    font-weight: 300;
  }

  .top-toolbar {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
    background-color: #fff !important;
  }

  [draggable] {
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .dragging {
    opacity: 0.8;
  }

  .drag-over {
    border-radius: 7px;
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.2);
  }
</style>