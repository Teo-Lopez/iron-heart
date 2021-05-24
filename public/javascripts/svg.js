document.onload() = () => {
  const Vivus = require("vivus")


  new Vivus('my-svg', {
    type: 'delayed', 
    duration: 200,
    animTimingFunction: Vivus.EASE
  })
}