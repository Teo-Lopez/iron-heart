if (window.location.href.includes('symptoms')) {
	const apiService = new BodypartsService()
	const clicked = []

	const setWarning = () => {
		const warning = document.createElement('span')
		warning.innerHTML = 'This is a free mockup, some data is not accesible. Sorry!'
		document.getElementById('ulSymptoms').append(warning)
		setTimeout(clearWarning, 7000)
	}
	const clearWarning = () => document.querySelector('#ulSymptoms span')?.remove()

	const openModal = text => {
		document.querySelector('.modal-body').innerHTML = ''
		document.querySelector('.modal-body').append(text)
		$('#symptoms-modal').modal('show')
	}

	function buildAnchorTag(elm) {
		let parag = document.createElement('p')

		parag.innerHTML =
			elm.Name + `<img style="margin-left: 10px" src="/images/link.png" alt="link image">`
		parag.setAttribute('id', `${elm.ID}`)
		parag.classList.add('symptom')
		//LLAMADA A NUESTRA API BACK
		parag.onclick = () => getSymptomsList(elm.ID)

		return parag
	}

	const buildSymptomInput = data => {
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

		return li
	}

	const getSymptomsList = id => {
		clearWarning()

		if (clicked.includes(id)) return
		clicked.push(id)

		apiService
			.getDiagnosis(id)
			.then(list => {
				if (list.length === 0) {
					setWarning()
					return
				}

				list.forEach(data => {
					const li = buildSymptomInput(data)
					document.getElementById('ulSymptoms').append(li)
				})
			})
			.catch(err => console.log(err))
	}

	document.addEventListener(
		'DOMContentLoaded',
		() => {
			;[...document.getElementsByName('image-map')].forEach(node => {
				node.onclick = e => {
					const part = e.path[0].dataset.part

					apiService
						.getLocation(part)
						.then(fullList => {
							const anchors = fullList[0].expanded.map(element => buildAnchorTag(element))
							const anchorList = document.createElement('div')
							anchors.forEach(a => anchorList.append(a))
							openModal(anchorList)
						})
						.catch(err => console.log(err))
				}
			})
		},
		false
	)
}
