//GETTING DOM ELMENTS
const planetList = document.getElementById('list-wrapper');
const form = document.getElementById('main-form');
let deleteButtons = document.querySelectorAll('.del');

const planetName = document.getElementById('planet-name');
const distance = document.getElementById('distance');
const moons = document.getElementById('moons');
const inhabitants = document.getElementById('inhabitants');
const date = document.getElementById('date');
const notes = document.getElementById('notes');

let planets = document.querySelectorAll('.planet');

//MAIN PLANET CLASS (BLUEPRINT OF A SINGLE LIST ITEM)
class planet {
	constructor(name = 'Unnamed', distance, moons, inhabitants, date, notes = 'No content added') {
		this.name = name;
		this.distance = distance;
		this.moons = moons;
		//this.region = region;
		this.inhabitants = inhabitants;
		this.date = date;
		this.notes = notes;
	}
}

class UI {
	static displayPlanets() {
		const storedList = [
			{
				name: 'Geonosis',
				distance: 90,
				moons: 5,
				region: 'Inner Rin',
				inhabitants: 'Geonosians',
				date: 29,
				notes: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore aliquid non 
						nisi fuga possimus. Vel ducimus ad ab culpa at similique accusantium recusandae
						iste reprehenderit alias repellendus a repellat exercitationem dolorum quos, id 
						asperiores! Minus, reiciendis explicabo, delectus beatae, cum quaerat eius 
						doloremque nisi repudiandae impedit amet laborum odit ipsa?`,
			},
			{
				name: 'Kamino',
				distance: 1000,
				moons: 9,
				region: 'Outter Rin',
				inhabitants: 'Kaminoans',
				date: 67,
				notes: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore aliquid non 
						nisi fuga possimus. Vel ducimus ad ab culpa at similique accusantium recusandae
						iste reprehenderit`,
			},
		];

		const planets = storedList;

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
		newPlanet.children[0].addEventListener('click', function (e) {
			this.parentElement.remove();
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	console.log('dom loaded');
	UI.displayPlanets();

	form.addEventListener('submit', () => {
		const newPlanet = new planet(planetName.value, distance.value, moons.value, inhabitants.value, date.value, notes.value);
		UI.addPlanetToList(newPlanet);
	});
});
