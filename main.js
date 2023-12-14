var encEmail = "bXVzaGFtYmFkemV0ZW9uYUBnbWFpbC5jb20=";
const form = document.getElementById("contact");

form.setAttribute("href", "mailto:".concat(atob(encEmail)));

var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


document.getElementById('wday').innerHTML = ("Happy " + days[d.getDay()] + "! 🎄");
document.getElementById('year').innerHTML = `Copyright © ${d.getFullYear().toString()}`;

/** 
gsap.to('.mask', {
  duration: 6,
  ease: "sine.out",
  "--mask": 'linear-gradient(-30deg, transparent -50%, black 0%)'
})

*/
