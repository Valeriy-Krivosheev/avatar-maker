
<template>
  <main>
    <div class="center">
      <CanvasVue /> 
    </div>
  </main>
</template>

<script>
import CanvasVue from '@/components/CanvasVue'
import { defineComponent, } from 'vue'


export default defineComponent({
  name: 'App',
  components: {
    CanvasVue,
  },

})
</script>

<style>
html {
  box-sizing: border-box;
}

body {
  text-decoration-skip-ink: none;

}

*,
*::after,
*::before {
  box-sizing: inherit;
}

ul,
ol {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

ul[class] {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

a {
  text-decoration: none;
  font: inherit;
  display: inline-block;
}

main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-size: 16px;
  color: #000000;
  background-color: aliceblue;
}

.button-wrap {
  text-align: right;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
