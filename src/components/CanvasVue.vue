<template>
  <div>
    <canvas id="canvas" ref="canvas"></canvas>
  </div>
  <div class="button-wrap">
    <reloadButton @click="reload">Обновить аватар</reloadButton>
    <loadButton :href="href">
      Загрузить аватар
    </loadButton>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex'
import loadButton from '@/components/loadButton'
import reloadButton from '@/components/reloadButton'

export default defineComponent({
  components: {
    loadButton,
    reloadButton
  },
  setup() {
    const store = useStore()
    const href = ref('')
    const getImageArray = computed(() => store.getters.getImageArray)
    const canvas = ref(null);
    const randNumbers = ref({
      randBackground: '',
      randBody: '',
      randEyebrows: '',
      randEyes: '',
      randGlasses: '',
      randMouth: '',
      randPet: '',
      randTop: ''
    });
    const randNum = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min
    };

    const setRandNumbers = () => {
      randNumbers.value.randBackground = randNum(1, 3)
      randNumbers.value.randBody = randNum(1, 6)
      randNumbers.value.randEyebrows = randNum(1, 6)
      randNumbers.value.randEyes = randNum(1, 5)
      randNumbers.value.randGlasses = randNum(1, 3)
      randNumbers.value.randMouth = randNum(1, 7)
      randNumbers.value.randPet = randNum(1, 4)
      randNumbers.value.randTop = randNum(1, 11)
    };
    const loadImages = (obj) => {
      return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = obj.src
        image.crossOrigin = 'Anonymous'
        image.onload = () => resolve({ obj, image })
      })
    };
    const createAvatar = () => {
      canvas.value.width = 440
      canvas.value.height = 440
      const context = canvas.value.getContext('2d')
      Promise.all(getImageArray.value.map(item => loadImages(item)))
        .then(obj => obj.map(item => {
          context.drawImage(item.image, item.obj.position[0], item.obj.position[1], item.obj.size[0], item.obj.size[1])
        }))
        .then(() => {
          href.value = canvas.value.toDataURL("image/png")
        })
    };
    const refreshAvatar = () => {
      setRandNumbers()
      store.commit('loadImages', { background: randNumbers.value.randBackground, body: randNumbers.value.randBody, eyebrows: randNumbers.value.randEyebrows, eye: randNumbers.value.randEyes, glasses: randNumbers.value.randGlasses, mouth: randNumbers.value.randMouth, pet: randNumbers.value.randPet, top: randNumbers.value.randTop })
      createAvatar()
    };
    const reload = () => {
      refreshAvatar()
    }
    onMounted(() => {
      refreshAvatar()
    })
    return {
      canvas,
      getImageArray,
      randNumbers,
      setRandNumbers,
      loadImages,
      createAvatar,
      refreshAvatar,
      href,
      reload
    }
  }
})
</script>

<style scoped>
#canvas {
  height: 440px;
  width: 440px;
  border: 1px solid lightgray;
}
</style>