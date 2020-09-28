//GETTING DOM ELMENTS
/*const planetList = document.getElementById('list-wrapper');*/
const form = document.getElementById('main-form');
let deleteButtons = document.querySelectorAll('.del');

const planetName = document.getElementById('planet-name');
const distance = document.getElementById('distance');
const moons = document.getElementById('moons');
const inhabitants = document.getElementById('inhabitants');
const date = document.getElementById('date');
const notes = document.getElementById('notes');

let planetList = [];

//MAIN PLANET CLASS (BLUEPRINT OF A SINGLE LIST ITEM)
class planet {
	constructor(name = 'Unnamed', distance = 8, moons, region, inhabitants, date, notes = 'No content added') {
		this.name = name;
		this.distance = distance;
		this.moons = moons;
		this.region = region;
		this.inhabitants = inhabitants;
		this.date = date;
		this.notes = notes;
	}
}

class UI {
	static displayPlanets() {
		const planets = storage.getPlanets();

		planets.forEach(planet => {
			UI.addPlanetToList(planet);
		});
	}

	static addPlanetToList(planet) {
		const planetListContainer = document.getElementById('list-wrapper');
		const newPlanet = document.createElement('div');
		newPlanet.classList.add('planet');
		newPlanet.innerHTML = `
			<button class="del">X</button>
			<h4 class="planet-name">${planet.name}</h4>
			<div class="content">
				<p class="distance"><span>Distance: </span>${planet.distance} Parsec</p>
				<p class="date-discovered"><span>Date-Discovered: </span>${planet.date}</p>
				<p class="region"><span>Region: </span>${planet.region}</p>
				<p class="inhabitants"><span>Inhabitants: </span>${planet.inhabitants}</p>
				<p class="moons"><span>No of Moons: </span>${planet.moons}</p>
			</div>
			<p class="notes">${planet.notes}</p>
			`;
		planetListContainer.appendChild(newPlanet);

		//EVENT LISTNER TO CHECK WHEN THE CROSS BUTTON IS PRESSED TO DELETE THE PLANET DATA
		newPlanet.children[0].addEventListener('click', function (e) {
			this.parentElement.remove();
			let thisPlanetName = this.parentElement.children[1].innerHTML;
			storage.removePlanet(thisPlanetName);
		});
	}
}

class storage {
	static getPlanets() {
		let planets;
		if (localStorage.getItem('planetss') === null) {
			planets = [];
		} else {
			planets = JSON.parse(localStorage.getItem('planetss'));
		}

		return planets;
	}

	static addPlanet(planet) {
		const planets = storage.getPlanets();
		planets.push(planet);
		localStorage.setItem('planetss', JSON.stringify(planets));
	}

	//Delets the planet object with the name (which is a string) passed
	static removePlanet(planetName) {
		let fromStorage = JSON.parse(localStorage.getItem('planetss'));
		fromStorage = fromStorage.filter(item => {
			return item.name !== planetName;
		});
		localStorage.setItem('planetss', JSON.stringify(fromStorage));
	}
}

document.getElementById('');
function radio(input) {
	return input;
}

document.addEventListener('DOMContentLoaded', () => {
	console.log('dom loaded');
	UI.displayPlanets();

	distance.addEventListener('input', function () {
		document.getElementById('slider-value').innerHTML = `${this.value} parsec`;
	});

	//Taking input from radio buttons
	let radioInput;
	let radioList = document.querySelectorAll('.radio');
	radioList.forEach(e => {
		e.addEventListener('input', function () {
			//console.log(this.value);
			//console.log(e.checked);
			radioInput = e.value;
		});
	});

	//Submit button event handler
	form.addEventListener('submit', () => {
		let newPlanet = new planet(planetName.value, distance.value, moons.value, radioInput, inhabitants.value, date.value, notes.value);
		UI.addPlanetToList(newPlanet);
		storage.addPlanet(newPlanet);
	});
});
