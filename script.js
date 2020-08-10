const select = document.getElementById('selectionDiv')
const img = document.getElementById('img')
const result = document.getElementById('resultContainer')
const play = document.getElementById('play')

let machine = 'Tijera'
let interval = 0
let countDown = ''

const changeMachine = ()=>{

	const rand = Math.floor(Math.random() * 3) + 1;

	if(rand === 1){machine = 'Papel'}
	else if(rand === 2){machine = 'Tijera'}
	else if(rand === 3){machine = 'Piedra'}

	img.src=`img/${machine}.jpg`
}


//start the Game
play.addEventListener("click", ()=>{
		
		if(interval > 0) return

		// start the machine
		interval= setInterval(changeMachine,66)

		// Count down to automatically assign
		let count = 5
		countDown = setInterval( ()=>{
	
			result.textContent = `Elige ahora!! ${count}`
			
			if(count == 0){ 
				clearInterval(countDown)				

				const auto = Math.floor(Math.random() * 3) + 1;

				if(auto === 1)select.children.Piedra.click()
				else if(auto === 2)select.children.Tijera.click()
				else if(auto === 3)select.children.Papel.click()
			}
			count--

		},1000)
		

		result.textContent = '...'

		//modify style
		play.classList.add('undisplay')

		if(select.querySelector('.btn--active')){
			select.querySelector('.btn--active').classList.remove('btn--active')
		}

		[].map.call(select.querySelectorAll('.btn--disabled'), (b)=>b.classList.replace('btn--disabled','btn') )		
})



// make a decision
select.addEventListener("click", (e)=>{
	if(e.target.id == 'Piedra' || e.target.id == 'Papel' || e.target.id == 'Tijera'){

		if(interval == 0) return
			
		// stop the machine
		clearInterval(interval) 	
		interval = 0	
		
		//stop the count down
		clearInterval(countDown)

		//modify style
		play.classList.remove('undisplay');
		e.target.classList.add('btn--active');
		[].map.call(select.querySelectorAll('.btn'), (b)=>b.classList.replace('btn','btn--disabled') )


		//print the result
		if(e.target.id == machine){
			result.textContent = `Empate`
			return
		}

		if(	(e.target.id == 'Piedra' && machine == 'Tijera') ||
			(e.target.id == 'Papel' && machine == 'Piedra') ||
			(e.target.id == 'Tijera' && machine == 'Papel') ){

			result.textContent = `Ganaste!!`
			return
		}

		result.textContent = `Perdiste :(`

	}  
})