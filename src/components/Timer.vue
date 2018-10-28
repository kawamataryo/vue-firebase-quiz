<template>
  <div>
    <v-progress-circular
        :rotate="360"
        :size="400"
        :width="30"
        :value="value * (100/limit)"
        :color="color"
    >
      {{ value }}
    </v-progress-circular>
    <div class="mt-3">
      <v-btn
          @click="timerStart"
          :disabled="starting"
      >START
      </v-btn>
      <v-btn @click="timerStop">STOP</v-btn>
      <v-btn @click="timerClear">CLEAR</v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Timer",
    data() {
      return {
        interval: {},
        value: 0,
        color: "success",
        starting: false,
      }
    },
    computed: {
      limit: function () {
        return this.$store.state.consultationTime
      }
    },
    methods: {
      timerStart: function () {
        this.value += 1
        this.starting = true
        this.interval = setInterval(() => {
          if (this.value === this.limit) {
            this.color = "warning"
            return
          }
          this.value += 1
        }, 1000)
      },
      timerStop: function () {
        this.starting = false
        clearInterval(this.interval)
      },
      timerClear: function () {
        this.starting = false
        this.value = 0
        this.color = "success"
        clearInterval(this.interval)
      },
    },
  }
</script>

<style>
  .v-progress-circular__info {
    font-size: 8rem !important;
    font-weight: bold !important;
  }
</style>