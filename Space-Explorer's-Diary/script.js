class planet {
	constructor(name, distance, moons, region, inhabitants, date, notes = 'No content added') {
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
		console.log(newPlanet);
	}
}

document.addEventListener('DOMContentLoaded', UI.displayPlanets);

let form = document.getElementById('main-form');
let planetName = document.getElementById('planet-name');
let distance = document.getElementById('distance');
let moons = document.getElementById('moons');
let inhabitants = document.getElementById('inhabitants');
let date = document.getElementById('date');
let note = document.getElementById('notes');

form.addEventListener('submit', () => {
	const newPlanet = new planet(planetName.value, distance.value, moons.value, inhabitants.value, date.value, note.value);
	UI.addPlanetToList(newPlanet);
});
