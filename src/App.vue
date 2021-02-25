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

/* /Dialogic/Formats/Markdown/Typora theme/dialogic.css */

  * {
    padding: 0px;
    margin: 0px;
  }

  body {
    font-family: verdana;
    font-size: 9pt;
  }

  p, li {
    color: rgb(77, 77, 77);
  }

  p {
    text-align: justify;
    margin-bottom: 8pt;
    line-height: 1.4em;
  }

  li > p {
    margin-bottom: 0pt;
  }

  p + ul {
    margin-bottom: 0;
  }

  li {
    margin-left: 1cm;
    margin-bottom: 4pt;
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

  h4 {
    font-size:  9pt;
    font-weight: bold;
    font-style: italic;
    color: rgb(77, 77, 77);
    line-height:  1.4em;
    margin-top: 12pt;
    break-after: avoid;
  }

  h5 {
    font-size:  9pt;
    font-weight: normal;
    font-style: italic;
    color: rgb(77, 77, 77);
    line-height:  1.4em;
    margin-top: 12pt;
    break-after: avoid;
  }

  a, a:visited {
    color:  rgb(77, 77, 77);
  }

  table {
    margin-top: 4pt;
    margin-bottom: 8pt;
  }

  table th {
    color:  white;
    background-color: rgb(0,55,100);
    font-weight:  bold;
    font-size: 9pt;
    padding: 4pt;
    -webkit-print-color-adjust: exact; 
  }

  table td {
    font-size:  9pt;
    color:  rgb(77,77,77);
    padding: 4pt;
  }

  table tr:nth-child(2n) td {
    background-color: #EFEFEF;
  }

  code, pre {
    margin-bottom: 8pt;
    margin-top: 8pt;
    color:  rgb(77, 77, 77);
    font-size: 9pt;
    font-family: consolas, sans-serif;
    
  }

  hr {
    border: none;
    border-top: solid 1px rgb(77,77,77);
    margin-bottom: 8pt;
  }

  blockquote {
    margin-top: 0.5cm;
    margin-bottom: 0.5cm;
    padding: 0.5cm;
    padding-top: 8pt;
    padding-bottom: 1pt;
    background-color: rgba(0,0,0,0.1);
  }

  ul {
    margin-top: 2pt;
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  @media print {
    #write {
      counter-reset: h1-counter 0 h2-counter 0 h3-counter 0;
      padding-left: 5.5cm;
      padding-bottom: 3cm;
      padding-right:  5.8cm;
    }
  }

</style>
