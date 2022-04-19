var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById('wday').innerHTML = ("Happy " + days[d.getDay()] + "!");


gsap.to('.mask', {
  duration: 6,
  ease: "sine.out",
  "--mask": 'linear-gradient(-30deg, transparent -50%, black 0%)'
})
