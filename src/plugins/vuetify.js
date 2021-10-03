import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#9C27B0',
        secondary: '#E1BEE7',
        third: '#CE93D8',
      },
      dark: {
        primary: '#880E4F',
        secondary: '#4527A0',
        third: '#7E57C2',
        accent: '#00bcd4',
      },
    },
  },
});
