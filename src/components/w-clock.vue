<template>
  <div id="wClock" class="box-clock">
    {{ time }}</div>
</template>

<script>
  export default {
    data() {
      return {
        'time': this.getTime()
      }
    },
    methods: {
      getTime() {
        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
        return h + ":" + m + ":" + s;
      }
    },
    created: function tick() {
      setInterval(() => {
        this.time = this.getTime()
      }, 1000);
    }
  }
</script>

<style scoped>
  .box-clock {
    background-color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    box-shadow: 0 0 40px hsla(0, 0%, 88.6%, .5);
    font-size: 3em;
  }
</style>