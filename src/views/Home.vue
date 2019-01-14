<template>
  <v-container fluid>
    <h1>Layouts screen</h1>
    <hr>
    <v-container>
      <v-layout row wrap>
        <!-- Layouts list -->
        <v-card class="card" v-bind:class="item.name" xs4 v-for="(item, index) in componnetsList" :key="index" @click="chooseLayout(index)"></v-card>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  import router from '../router'

  export default {
    methods: {
      chooseLayout(index) {
        // choossing layout
        this.$store.commit('chooseLayout', index)
        router.push({
          path: 'Configuration'
        })
      }
    },
    computed: {
      // Getting layout from store
      componnetsList() {
        return this.$store.getters.getLayouts
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    border-radius: 10px;
    height: 200px;
    width: 300px;
    margin: 2em;
    background-size: contain;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      box-shadow: 0 8px 10px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12) !important;
    }
  }

  .layout1 {
    background-image: url('../assets/layout1.jpg')
  }
</style>