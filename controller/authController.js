const User = require('../model/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'
async function loginController (req, res) {
	const { useremail, password } = req.body
	const user = await User.findOne({ useremail }).lean()

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid useremail/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the useremail, password combination is successful

		const token = jwt.sign(
			{
				id: user._id,
				useremail: user.useremail
			},
			JWT_SECRET
		)

		return res.json({ status: 'ok', dataToken: token })
	}

	res.status(500).json({ status: 'error', error: 'Invalid useremail/password' })
}

async function signupController (req, res) {
	const { useremail, password: plainTextPassword } = req.body

	if (!useremail || typeof useremail !== 'string') {
		return res.status(400).json({ status: 'error', error: 'Invalid useremail' })
	}

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.status(400).json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 8) {
		return res.status(400).json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}

	const password = await bcrypt.hash(plainTextPassword, 10)

	try {
		const response = await User.create({
			useremail,
			password
		})
		console.log('User created successfully: ', response)
	} catch (error) {
		if (error.code) {
			return res.status(500).json({ status: 'error', error: error })
		}
		throw error
	}

	res.status(200).json({ status: 'ok' })
}

module.exports = {loginController,signupController}