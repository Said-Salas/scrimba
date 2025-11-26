import validator from 'validator'

export async function registerUser(req, res) {

    let { name, email, username, password } = req.body

    const regex = /^[a-zA-Z0-9_-]{1,20}$/

    if (name && email && username && password) {
        name = name.trim()
        email = email.trim()
        username = username.trim()
        password = password.trim()

        if (validator.isEmail(email)) {
            if (regex.test(username)) {
               res.status(200).json({status: 'Registration completed successfully'})

            } else {
                res.status(400).json({error: 'Bad request. Invalid username. Only use letters, numbers, underscores and hyphens'})
            }

        } else {
            res.status(400).json({error: 'Bad request. Invalid email.'})
        }

    } else {
        res.status(400).json({error: 'Bad request: Missing fields.'})
    }
}