<template>
  <div>

      <div class="weather-wrapper">

        <h2>weather stuff</h2>
        <div class="weather-stations_wrapper">
          <div class="weather-stations_station" v-for="(station, index) in stations" :key="index">
            <h3>{{ station.regio }}</h3>
            
            temperatuur: {{ station.temperature }}
          </div>
        </div>

        <div class="weather-sources">Aknowledgements: <a href="https://www.buienradar.nl">buienradar.nl</a></div>

    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

declare interface WeatherStation {

  weatherdescription: string;
  regio: string;

  winddirection: number;
  airpressure: number;
  temperature: number;
  groundtemperature: number;
  feeltemperature: number;
  windspeed: number;
  windspeedBft: number;
  humidity: number;
  precipitation: number;
  sunpower: number;
  rainFallLast24Hour: number;
  rainFallLastHour: number;
  winddirectiondegrees: number;

}

export default defineComponent({

  data() {
    return {
      stations: [] as WeatherStation[],
    }
  },

  methods: {
    async fetchWeatherData() {

      const res = await fetch('https://data.buienradar.nl/2.0/feed/json');
      const json = await res.json();

      this.stations = json.actual.stationmeasurements;
      // this.stations = JSON.parse(json).actual.stationmeasurements;
    }
  },

  mounted() {
    this.fetchWeatherData();
  }

});
</script>

<style>

  .weather-wrapper {
      /* display: flex;
      flex-direction: column; */
      margin-right: 50px;
      padding: 20px;
      border-radius: 5px;
      border: 1px solid #EFEFEF
  }

  .weather-stations_wrapper {
    margin: 5px;
  }

  .weather-stations_station {
    margin: 10px;
    border-radius: 5px;
    border: 1px solid #4D4D4D
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

  a, a:visited {
    color:  rgb(77, 77, 77);
  }

</style>
