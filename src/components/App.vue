<template>
  <div class="container">
  <div id="app" class="columns">
    <div class="column is-two-thirds">
      <section class="form">
        <label class="label">{{generateUrl}}</label>
        <select v-model="selectedService">
          <option v-for="service in services" v-bind:value="service">
            {{ service }}
          </option>
        </select>
        <div class="form-control" v-if="selectedService=='yelp'">
          <label>Business</label>
          <input type="text" v-model="business" value="business"></input>
        </div>
        <div class="form-control" v-if="selectedService=='google'">
          <div>
            <label>Location</label>
            <input type="text" v-model="location" value="location"></input>
          </div>
          <div>
            <label>Keyword</label>
            <input type="text" v-model="keyword" value="keyword"></input>
          </div>
        </div>
        <div>
          <div>
            <label>Single</label>
            <input type="radio" name="layout" v-model="layout" value="single">
          </div>
          <div>
            <label>Multiple</label>
            <input type="radio" name="layout" v-model="layout" value="multiple">
          </div>
          <div v-if="layout=='single'">
            <label>Offset</label>
            <input type="number" name="offset" v-model="offset" value="0">
          </div>
          <div v-if="layout=='multiple'">
            <label>Rotate?</label>
            <input type="checkbox" name="rotate" v-model="rotate">
          </div>
          <div v-if="layout=='multiple'">
            <label>Limit</label>
            <input type="number" name="limit" v-model="limit">
          </div>
        </div>
      </section>
      </div>
  <div class="column is-one-thirds">
    <section class="section">
      <h1 class="title">Preview</h1>
      <img
      v-bind:src="generatePreview"
    ></img>
    </section>
    {{layout}}
  </div>
</div>
</div>
</template>

<script>

  export default {
    name: 'app',
    data:  function() {
      return {
        baseUrl: "reviews.n-compass.tv/",
        services: ['yelp', 'google'],
        selectedService: "yelp",
        business: "mcdonalds",
        location: "",
        keyword: "",
        layout: "single",
        offset: 0,
        rotate: false,
        limit: 2
      }
    },
    methods: {
      async handleSubmit(state) {
       await sleep(2000)
       console.log(state)
     }
    },
    computed: {
      generatePreview: function() {
        if(this.selectedService == "yelp"){
          return "https://thumbnail.ws/get/thumbnail/?apikey=ab45a17344aa033247137cf2d457fc39ee4e7e16a464&url="+ this.baseUrl + this.selectedService + "?business=" + this.business
        }else if (this.selectedService == "google"){
          return "https://thumbnail.ws/get/thumbnail/?apikey=ab45a17344aa033247137cf2d457fc39ee4e7e16a464&url="+ this.baseUrl + this.selectedService + "?location=" + this.location + "&keyword=" + this.keyword
        }
      },
      generateUrl: function() {
        let url = this.baseUrl

        if(this.rotate){
          url += rotate
        }

        if(this.selectedService == "yelp"){
          url += this.selectedService + "?business=" + this.business
        }else if (this.selectedService == "google"){
          url += this.selectedService + "?location=" + this.location + "&keyword=" + this.keyword
        }
        url += "&layout=" + this.layout + "&offset=" + this.offset + "&rotate=" + this.rotate + "&limit=" + this.limit
        return url
      }
    }
  }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
  code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-size: 0.9em;
    white-space: pre-wrap;
    color: #2c3e50;
  }

  code::before, code::after {
    content: '`';
  }
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  #app {
    text-align: center;
  }

  #app h1 {
    color: #2c3e50;
    font-weight: 300;
    margin: 0;
  }

  .banner {
    height: 200px;
    background-color: #f6f6f6;
    padding: 50px 10px;
  }

  .bottom {
    padding: 80px 10px;
    font-size: 24px;
    font-weight: 300;
  }

  .fade {
    font-size: 14px;
  }

  .logo {
    animation: spin 4s 1s infinite linear
  }

  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
</style>
