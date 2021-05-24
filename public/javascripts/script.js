if (window.location.href.includes('symptoms')) {
	const apiService = new BodypartsService()
	const openModal = text => {
		document.querySelector('.modal-body').innerHTML = ''
		document.querySelector('.modal-body').append(text)
		$('#symptoms-modal').modal('show')
	}

	function showLocations(elm) {
		let parag = document.createElement('p')

		parag.innerHTML =
			elm.Name + `<img style="margin-left: 10px" src="/images/link.png" alt="link image">`
		parag.setAttribute('id', `${elm.ID}`)
		parag.classList.add('symptom')
		//LLAMADA A NUESTRA API BACK
		parag.onclick = () => getSymptomsList(elm.ID)

		openModal(parag)
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
			;[...document.getElementsByName('image-map')].forEach(node => {
				node.onclick = e => {
					const part = e.path[0].dataset.part
					apiService
						.getLocation(part)
						.then(fullList => {
							fullList[0].expanded.forEach(element => showLocations(element))
						})
						.catch(err => console.log(err))
				}
			})
		},
		false
	)
}
