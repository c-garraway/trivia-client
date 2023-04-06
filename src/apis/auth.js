const BASE_URL = process.env.REACT_APP_BASE_URL

//GOOGLE USER
export const  loginGoogleUser = async () => {
    try {
        window.open(`${BASE_URL}/auth`, "_self"); 
        
    } catch (error) {
        console.log(error)
    }
    
};

//LOCAL USER
export const  loginLocalUser = async (email, password) => {
    
    try {
        const response = await fetch(`${BASE_URL}/auth/login`,
            {
                method: 'POST',
                credentials: "include",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    //"Access-Control-Allow-Credentials": true
                },
                body: JSON.stringify({
                    "email": `${email}`,
                    "password": `${password}`
                })
            }
        ) 

        const user = await response.json()
        return user

    } catch (error) {
        console.log(error)
    }

};

export const  registerLocalUser = async (name, email, password, password2) => {
    
    try {
        const response = await fetch(`${BASE_URL}/auth/register`,
            {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "name": `${name}`,
                    "email": `${email}`,
                    "password": `${password}`,
                    "password2": `${password2}`,
                })
            }
        )

        const user = await response.json()
        return user

    } catch (error) {
        console.log(error)
    }

};

//GLOBAL USER
export const getUser = async () => {

    try {
        const response = await fetch(`${BASE_URL}/auth/getUser`,
            {
                method: 'GET',
                credentials: "include",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    //"Access-Control-Allow-Credentials": true
                },
            }
        )
            
        const user = await response.json()
        return user
        
    } catch (error) {
        console.log(error)
    }
    
};

export const  addUserProfile = async (email, firstName, lastName, companyName) => {
    
    try {
        const response = await fetch(`${BASE_URL}/auth/addProfile`,
            {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "email": `${email}`,
                    "firstName": `${firstName}`,
                    "lastName": `${lastName}`,
                    "companyName": `${companyName}`,
                })
            }
        ) 

        const user = await response.json()
        return user

    } catch (error) {
        console.log(error)
    }
    
};

export const  logoutUser = async () => {

    try {
        const response = await fetch(`${BASE_URL}/auth/logout`,
            {
                method: 'POST',
                credentials: "include",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    //"Access-Control-Allow-Credentials": true
                },
            }
        ) 

        const user = await response.json()
        return user

    } catch (error) {
        console.log(error)
    }
    
};