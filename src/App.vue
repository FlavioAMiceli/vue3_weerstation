<template>
  <div>

    <div><h1>Weerstation en text converter dinges</h1></div>

    <div class="text-weather_wrapper">
      <!-- Text convert -->
      <div class="text-converter">

        <!-- Input -->
        <h2> User input text converter dinges.</h2>
        <form class="text-converter_user-input">
          <label for="user-input"><strong>Enter text here</strong></label>
          <textarea id="user-input" rows="4" v-model="textFieldInput"/>
        </form>

        <!-- Output -->
        <!-- TODO: -->
        <!-- Button to toggle live encoding. Submit button. CSS. -->
        <div class="text-converter_output">
          {{ this.base64encoded }}
        </div>

      </div>

      <!-- Weather divs -->
      <!-- <div>
        <h2> Weerstation dinges </h2>
        Import weather component here
      </div> -->

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
      textFieldInput: '',
      weather: ''
    }
  },

  computed: {
    base64encoded(): string {
      return window.btoa(this.textFieldInput);
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

  .text-weather_wrapper {
    display: grid;
    grid-template-columns: 2 fr 2 fr;
    width: 100%;
    padding: 50px 5%;
  }

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

  .text-converter_output {
    margin: 0;
  }

  h1 {
    margin: 0;
  }

  h2 {
    margin: 0;
  }

</style>
