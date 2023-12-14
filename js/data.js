

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];




// Ciclo for 

for (let i = 0; i < icons.length; i++) {
	const icon = icons[i];
	
	// Creo l'elemento della DOM
	const boxElement = document.createElement('div')
	
	// All'elemento della DOM aggiungo le classi
	boxElement.classList.add('box', 'border', 'border-3', 'p-3', 'm-4', 'shadow')
	
	// Salvo in una variabile col selettore il container nella DOM
	const containerElement = document.querySelector('.container')
	
	// Al container tramite append inserisco il box
	containerElement.append(boxElement)

	// Creo l'elemento i e lo salvo in una variabile
	const iconElement = document.createElement('i')
	
	// Ad ogni box tramite append inserisco l'icona
	boxElement.append(iconElement)
	
	// Stampo in pagina l'icona, aggiungo delle classi e i colori relativi
	iconElement.classList.add(icon.family, icon.prefix + icon.name, 'd-block', 'text-center', icon.color, 'fs-1')
	
	// Creo lo span per il nome dell'icona
	const spanElement = document.createElement('span')

	// Inserisco lo span all'interno del box
	boxElement.append(spanElement)

	// Stampo il nome di ogni icona
	spanElement.innerText = icon.name

	// Aggiungo le classi agli span 
	spanElement.classList.add('text-uppercase', 'd-flex', 'justify-content-center', 'fw-bold')
}