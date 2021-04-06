class BodypartsService {
	constructor() {
		this.baseURL = `https://heroheart.herokuapp.com/api`
		//this.baseURL = `http://localhost:3000/api`
		this.service = axios.create({ baseURL: this.baseURL, withCredentials: true })
	}

	getDiagnosis(id) {
		return this.service
			.get(`/getDiagnosis/${id}`)
			.then(res => res.data)
			.catch(err => console.log(err))
	}

	getArmsLocations() {
		return this.service.get(`/7`).then(res => res.data)
	}

	getAbdomenLocations() {
		return this.service.get(`/16`).then(res => res.data)
	}

	getChestLocations() {
		return this.service.get(`/15`).then(res => res.data)
	}

	getHeadLocations() {
		return this.service.get(`/6`).then(res => res.data)
	}

	getLegLocations() {
		return this.service.get(`/10`).then(res => res.data)
	}

	getSkinLocations() {
		return this.service.get(`/17`).then(res => res.data)
	}
}
