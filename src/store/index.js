import { createStore } from 'vuex'

export default createStore({
  state: {
    imageArray: [],
   
  },
  getters: {
    getImageArray(state) {
      return state.imageArray
    },

  },
  mutations: {
    loadImages(state, { background, body, eyebrows, eye, glasses, mouth, pet, top }) {
      state.imageArray = [
        {
          src: require(`@/assets/Background/Background${background}.svg`),
          position: [0, 0],
          size: [440, 440],
        },
        {
          src: require(`@/assets/Head/Head.svg`),
          position: [140, 123],
          size: [157, 187],
        },
        {
          src: require(`@/assets/Body/Body${body}.svg`),
          position: [70, 280],
          size: [295, 230]
        },
        {
          src: require(`@/assets/Glasses/Glasses${glasses}.svg`),
          position: [140, 195],
          size: [156, 32]
        },

        {
          src: require(`@/assets/Eyes/Eyes${eye}.svg`),
          position: [174, 200],
          size: [84, 24]
        },
        {
          src: require(`@/assets/Eyebrows/Eyebrows${eyebrows}.svg`),
          position: [162, 180],
          size: [110, 25]
        },
        {
          src: require(`@/assets/Mouth/Mouth${mouth}.svg`),
          position: [168, 230],
          size: [101, 41]
        },
        {
          src: require(`@/assets/Pet/Pet${pet}.svg`),
          position: [-90, 290],
          size: [290, 184]
        },
        {
          src: require(`@/assets/Top/Top${top}.svg`),
          position: [80, 50],
          size: [280, 225]
        },
      ]
    },
  },
  
})