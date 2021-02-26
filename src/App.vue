<template>
  <div>

    <div><h1>Weerstation en text converter dinges</h1></div>

    <div class="text-weather_wrapper">
      <!-- Text convert -->
      <div class="text-converter">

        <!-- Input -->
        <h2> User input text converter dinges.</h2>
        <form class="text-converter_user-input">
          <label for="user-input"><h3>Enter text here</h3></label>
          <textarea id="user-input" rows="4" v-model="textFieldInput"/>
        </form>

        <!-- Output -->
        <!-- TODO: -->
        <!-- Submit button. CSS. Button to toggle live encoding (and grey out submit button)? -->
        <div class="text-converter_output">
          {{ base64encoded }}
        </div>

      </div>

      <!-- Weather divs -->
      <div>
        <WeatherStations/>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WeatherStations from './components/WeatherStations.vue';

export default defineComponent({

  components: {
    WeatherStations
  },

  data() {
    return {
      textFieldInput: '',
    }
  },

  computed: {
    base64encoded(): string {
      return window.btoa(this.textFieldInput);
    }
  },

});
</script>

// TODO: scoped style

<style>

  .text-weather_wrapper {
    width: 100%;
    padding: 50px 5%;
    box-sizing: border-box;
  }

  .text-converter {
    /* display: flex;
    flex-direction: column; */
    margin-right: 50px;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #EFEFEF
  }

  .text-converter_user-input {
    display: flex;
    flex-direction: column;
  }

  .text-converter_output {
    margin: 0;
  }

  * {
    padding: 0px;
    margin: 0px;
  }

  body {
    font-family: verdana;
    font-size: 9pt;
  }

  h1 {
    margin-top: 12pt;
    margin-bottom:  8pt;
    font-size: 22pt;
    font-weight: bold;
    color:  rgb(0,55,100);
    break-after: avoid;
  }

  h2 {
    margin-top: 12pt;
    font-size: 11pt;
    margin-bottom: 8pt;
    font-weight: bold;
    color:  rgb(0,55,100);
    break-after: avoid;
  }

  h3 {
    font-size: 10pt;
    margin-top: 12pt;
    margin-bottom: 8pt;
    font-style: italic;
    color:  rgb(0,55,100);
    font-weight: normal;
    break-after: avoid;
  }

</style>
