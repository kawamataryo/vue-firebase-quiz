<template>
  <div>
    <v-progress-circular
        :rotate="-90"
        :size="380"
        :width="20"
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
        this.starting = true
        this.interval = setInterval(() => {
          if (this.value === 0) {
            this.color = "red"
            return
          }
          this.value -= 1
        }, 1000)
      },
      timerStop: function () {
        this.starting = false
        clearInterval(this.interval)
      },
      timerClear: function () {
        this.starting = false
        this.value = this.limit
        this.color = "success"
        clearInterval(this.interval)
      },
    },
    mounted() {
      this.value = this.limit
    }
  }
</script>

<style>
  .v-progress-circular__info {
    font-size: 8rem !important;
    font-weight: bold !important;
  }
</style>