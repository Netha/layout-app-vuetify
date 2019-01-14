<template>
  <div id="wDate" class="box-clock">
    {{ time }}</div>
</template>

<script>
  export default {
    data() {
      let weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
      return {
        'time': weekday[new Date().getDay()]
      }
    }
  }
</script>

<style scoped>
  .box-clock {
    background: linear-gradient(to right, rgb(121, 86, 236), rgb(47, 185, 248));
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    color: #fff;
    font-size: 2em;
    box-shadow: 0 0 40px hsla(0, 0%, 88.6%, .5);
  }
</style>