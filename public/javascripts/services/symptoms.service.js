class BodypartsService {
	constructor() {
		//this.baseURL = `https://heroheart.herokuapp.com/api`
		this.baseURL = `http://localhost:3000/api`
		this.service = axios.create({ baseURL: this.baseURL, withCredentials: true })
		this.map = {
			arms: '7',
			abdomen: '16',
			chest: '15',
			head: '6',
			legs: '10',
			skin: '17'
		}
	}

	getDiagnosis(id) {
		return this.service
			.get(`/getDiagnosis/${id}`)
			.then(res => res.data)
			.catch(err => console.log(err))
	}

	getLocation(loc) {
		return this.service.get(`/${this.map[loc]}`).then(res => res.data)
	}
}
