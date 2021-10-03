<template>
  <v-app>
    <v-app-bar color='secondary'>
      <v-toolbar-title>
        {{ name }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="link"
        :to="link.url"
        class="mr-2"
        text
      >
        {{ link.label }}
      </v-btn>
      <v-switch
        v-model="switchMe"
        @change="toggleTheme"
        class="mt-4"
      ></v-switch>
    </v-app-bar>
    <v-divider></v-divider>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'MovieTime',

    data: () => ({
      name: 'MovieTime',
      links: [
        {
          label: 'See all movies',
          url: '/',
        },
        {
          label: 'See all TV Shows',
          url: '/tvshows',
        },
      ],
    }),
    methods: {
      toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      },
    },
  };
</script>

<style lang="scss">
  #app {
    font-family: 'Francois One', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
