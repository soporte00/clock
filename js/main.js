const clock = document.getElementById('clock')

const updateClock = ()=>{
	const time = new Date()
	const root = document.documentElement.style

	root.setProperty('--second-needle', `rotate(${ ( time.getSeconds() * 6 ) }deg)`);
	root.setProperty('--minute-needle', `rotate(${ (time.getMinutes() * 6) }deg)`);
	root.setProperty('--hour-needle', `rotate(${ (time.getHours() * 30) + (time.getMinutes() * 0.5) }deg)`);
}

updateClock();
setInterval( actualizeClock, 1000);