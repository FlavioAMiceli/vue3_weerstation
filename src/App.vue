<template>
  <div>

    <div><h1>Weerstation dinges</h1></div>

    <div class="text-converter">
      <h2> User input dinges.</h2>
      <form class="text-converter_user-input">
        <label for="user-input"><strong>"Enter text here"</strong></label>
        <textarea id="user-input" rows="4"/>
      </form>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({

  name: 'App',

  data() {
    return {
      userInput: '',
      weather: ''
    }
  },

  methods: {
    loadWeatherData() {
      this.weather = "nice";
    }
  },

  mounted() {
    this.loadWeatherData();
  }

});
</script>

<style>

  .text-converter {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #DFE3E8
  }

  .text-converter_user-input {
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin: 0;
  }

  h2 {
    margin: 0;
  }

</style>
