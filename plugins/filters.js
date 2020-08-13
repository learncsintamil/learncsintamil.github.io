import Vue from 'vue'

function twoDigitify(val) {
  return val > 9 ? val.toString() : "0" + val;
}

Vue.filter('duration', val => {

  const oneMinInSeconds = 60;
  const oneHourInSeconds = 60 * oneMinInSeconds;
  if (val >= oneHourInSeconds) {
    const h = Math.floor(val / oneHourInSeconds);
    const m = Math.floor(val % oneMinInSeconds);
    return `${twoDigitify(h)}h ${twoDigitify(m)}m`;
  }
  const m = Math.floor(val / oneMinInSeconds);
  const s = Math.floor(val % oneMinInSeconds);
  return `${twoDigitify(m)}m ${twoDigitify(s)}s`;
});

Vue.filter('twoDigitify', val => {
  return twoDigitify(val);
})
