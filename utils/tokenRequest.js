const CryptoJS = require('crypto-js')
const axios = require('axios')

module.exports = function getToken() {
	const hash = CryptoJS.HmacMD5('https://sandbox-authservice.priaid.ch/login', 'f2X4YkKe6a9Z3Wpi7')
	const computedHash = hash.toString(CryptoJS.enc.Base64)
	const config = {
		headers: { Authorization: `Bearer ${process.env.API_USERNAME}:${computedHash}` },
	}

	return axios
		.post('https://sandbox-authservice.priaid.ch/login', {}, config)
		.then(res => (process.env.API_TOKEN = res.data.Token))
		.catch(err => err.message)
}
