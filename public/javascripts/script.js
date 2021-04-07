const apiService = new BodypartsService()

function showLocations(elm, divId) {
	let parag = document.createElement('p')

	parag.innerHTML = elm.Name + `<img src="/images/link.png" alt="link image">`
	parag.setAttribute('id', `${elm.ID}`)
	parag.classList.add('symptom')
	//LLAMADA A NUESTRA API BACK
	parag.onclick = () => {
		getSymptomsList(elm.ID)
	}

	document.getElementById(divId).appendChild(parag)
	document.getElementById(divId).classList.remove('hidden')
	document.getElementById(divId).classList.add('menu')
}

const getSymptomsList = id => {
	apiService
		.getDiagnosis(id)
		.then(list => {
			console.log(list)
			list.forEach(data => {
				const option = document.createElement('input')
				option.setAttribute('type', 'checkbox')
				option.setAttribute('value', `${data.ID}`)
				option.setAttribute('name', `${data.Name}`)
				option.setAttribute('class', 'col-md-6')

				const label = document.createElement('label')
				label.setAttribute('for', `${data.Name}`)
				label.setAttribute('class', 'col-md-6')
				label.innerHTML = data.Name
				const li = document.createElement('li')
				li.setAttribute('class', 'col-md-6')
				li.append(label)
				li.append(option)
				document.getElementById('ulSymptoms').append(li)
			})
		})
		.catch(err => console.log(err))
}

document.addEventListener(
	'DOMContentLoaded',
	() => {
		//ARMS
		document.getElementById('arms').onclick = _ => {
			apiService
				.getArmsLocations()
				.then(fullList => {
					document.getElementById('armsdiv').innerHTML = ''
					fullList[0].expanded.forEach(element => showLocations(element, 'armsdiv'))
				})
				.catch(err => console.log(err))
		}

		document.getElementById('armsdiv').onclick = e => {
			document.getElementById('armsdiv').classList.add('hidden')
			document.getElementById('armsdiv').classList.remove('menu')
		}

		//ABDOMEN
		document.getElementById('abdomen').onclick = e => {
			apiService
				.getAbdomenLocations()
				.then(fullList => {
					document.getElementById('abdomendiv').innerHTML = ''
					fullList[0].expanded.forEach(element => showLocations(element, 'abdomendiv'))
				})
				.catch(err => console.log(err))
		}
		document.getElementById('abdomendiv').onclick = e => {
			document.getElementById('abdomendiv').classList.add('hidden')
			document.getElementById('abdomendiv').classList.remove('menu')
		}

		//CHEST

		document.getElementById('chest').onclick = e => {
			apiService
				.getChestLocations()
				.then(fullList => {
					document.getElementById('chestdiv').innerHTML = ''
					fullList[0].expanded.forEach(element => showLocations(element, 'chestdiv'))
				})
				.catch(err => console.log(err))
		}
		document.getElementById('chestdiv').onclick = e => {
			document.getElementById('chestdiv').classList.add('hidden')
			document.getElementById('chestdiv').classList.remove('menu')
		}

		//HEAD

		document.getElementById('head').onclick = e => {
			apiService
				.getHeadLocations()
				.then(fullList => {
					document.getElementById('headdiv').innerHTML = ''
					fullList[0].expanded.forEach(element => showLocations(element, 'headdiv'))
				})
				.catch(err => console.log(err))
		}

		document.getElementById('headdiv').onclick = e => {
			document.getElementById('headdiv').classList.add('hidden')
			document.getElementById('headdiv').classList.remove('menu')
		}

		//LEGS

		document.getElementById('legs').onclick = e => {
			apiService
				.getLegLocations()
				.then(fullList => {
					document.getElementById('legsdiv').innerHTML = ''
					fullList[0].expanded.forEach(element => showLocations(element, 'legsdiv'))
				})
				.catch(err => console.log(err))
		}

		document.getElementById('legsdiv').onclick = e => {
			document.getElementById('legsdiv').classList.add('hidden')
			document.getElementById('legsdiv').classList.remove('menu')
		}

		// SKIN

		document.getElementById('skin').onclick = e => {
			apiService
				.getSkinLocations()
				.then(fullList => {
					document.getElementById('skindiv').innerHTML = ''
					fullList[0].expanded.forEach(element => showLocations(element, 'skindiv'))
				})
				.catch(err => console.log(err))
		}

		document.getElementById('skindiv').onclick = e => {
			document.getElementById('skindiv').classList.add('hidden')
			document.getElementById('skindiv').classList.remove('menu')
		}
	},
	false
)

// PETITION FROM CLIENT SIDE
