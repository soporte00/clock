const clock = document.getElementById('clock')

const actualizeClock = ()=>{
	let time = new Date()
	clock.children.second.style.transform=`rotate(${ ( time.getSeconds() * 6 ) }deg)`;
	clock.children.minute.style.transform=`rotate(${ ( time.getMinutes() * 6 ) }deg)`;
	clock.children.hour.style.transform=`rotate(${ (time.getHours() * 30) + (time.getMinutes() * 0.5)   }deg)`;
}

actualizeClock();
setInterval( actualizeClock, 1000);