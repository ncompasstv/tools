<template>
  <div class="container">
  <div id="app" class="columns">
    <div class="column is-two-thirds">
      <section class="section">
        <h1 class="title">Fun with Forms in Vue 2.0</h1>
      </section>
        <hr>
        <section class="form">
          <label class="label">hi</label>
          <vue-google-autocomplete
              id="map"
              classname="form-control input"
              placeholder="Start typing"
              v-on:placechanged="getAddressData"
          >
          </vue-google-autocomplete>
          <FinalForm
            :submit="handleSubmit"
            @change="updateState">
            <form slot-scope="props" @submit="props.handleSubmit">
              <FinalField
                name="name"
                :validate="v => v ? null : 'this is required'">
                <div slot-scope="props" class="field">
                  <label class="label">{{props.name}}</label>
                  <input v-on="props.events" :name="props.name" class="input">
                  <span v-if="props.meta.error && props.meta.touched">
                    {{ props.meta.error }}
                  </span>
                </div>
              </FinalField>
              <FinalField
                name="location_id"
                :validate="v => v ? null : 'this is required'">
                <div slot-scope="props" class="field">
                  <label class="label">{{props.name}}</label>
                  <input v-on="props.events" :name="props.name" class="input">
                  <span v-if="props.meta.error && props.meta.touched">
                    {{ props.meta.error }}
                  </span>
                </div>
              </FinalField>
            </form>
          </FinalForm>
    </section>
  </section>
  </div>

    <pre v-if="formState" class="position: fixed; right:0; top: 10%"><code>form state:<br><br>{{ JSON.stringify(formState, null, 2) }}</code></pre>
  </div>
</div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        formState: null,
      }
    },
    methods: {
      async handleSubmit(state) {
       await sleep(2000)
       console.log(state)
      },

      updateState(state) {
       this.formState = state
      },
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
