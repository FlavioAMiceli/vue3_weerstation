<template>
  <div>

    <h2>weather stuff</h2>
    {{ this.weather }}

    <div class="weather-sources">Source: <a href="https://www.buienradar.nl">buienradar.nl</a></div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

  name: 'WeatherStationsComponent',

  data() {
    return {
      weather: ''
    }
  },

//   computed: {
//     base64encoded(): string {
//       return window.btoa(this.textFieldInput);
//     }
//   },

  methods: {
    fetchWeatherData() {
        fetch('https://data.buienradar.nl/2.0/feed/json')
        .then(response => response.json())
        .then(data => this.weather = data);

    }
  },

  mounted() {
    this.fetchWeatherData();
  }

});
</script>

<style>

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
