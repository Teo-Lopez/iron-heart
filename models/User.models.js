const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
	{
		username: String,
		password: String,
		gender: { type: String, enum: ['male', 'female'] },
		year_of_birth: String,
		history: [{ name: String, date: String, url: String }]
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	}
)

const User = mongoose.model('User', userSchema)
module.exports = User
