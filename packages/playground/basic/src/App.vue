<template>
  <div>
    <h1>Example</h1>
    <div>
      <h2>Generated</h2>
      <img :src="gif" />
      <img :src="jpg" />
      <img :src="png" />
      <img :src="svg" />
    </div>
    <div>
      <h2>static</h2>
      <img src="@@/public/images/static-test.gif" />
      <img src="@@/public/images/static-test.jpg" />
      <img src="@@/public/images/static-test.png" />
      <img src="@@/public/images/static-test.svg" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import gif from './assets/test.gif'
import jpg from './assets/test.jpg'
import png from './assets/test.png'
import svg from './assets/test.svg'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    return {
      gif,
      jpg,
      png,
      svg,
    }
  },
})
</script>
