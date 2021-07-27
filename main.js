var d = new Date();

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById('wday').innerHTML = ("Happy " + days[d.getDay()] + "!<br><br> Wear a Mask. Save Lives.");



const mouse = document.querySelector('.mouse');
document.addEventListener('mousemove', e => {
	let {clientX: x, clientY: y} = e;

	mouse.style.transform = `translate(
		${x - mouse.offsetWidth / 2}px,
		${y - mouse.offsetHeight / 2}px
	)`;
	
});
