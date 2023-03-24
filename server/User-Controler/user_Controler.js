import User from "../module/User_Schema.js";


export const userSignUp = async (request, response) => {
    try {
        console.log(request.body)

        const exist = await User.findOne({ username: request.body.username });
        if (exist) {
            return response.status(401).messagejson({ message: 'User already exist' });
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json(`${user.firstName} has been successfully registered`);
    } catch (error) {
        response.json('Error: ', error.message);
    }
}


export const userLogIn = async (request, response) => {
    try {
        const username = request.body.username;
        const password = request.body.password;

        let user = await User.findOne({ username: username, password: password });
        if (user) {
            return response.status(200).json({ data: user });
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.status(500).json('Error: ', error.message);
    }
}