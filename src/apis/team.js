const BASE_URL = process.env.REACT_APP_BASE_URL

//GET fetch
export const  checkEmail = async (email) => {
    const encodedEmail = encodeURIComponent(email)

    try {
        const response = await fetch(`${BASE_URL}/team?email=${encodedEmail}`,
        {
            method: 'GET',
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        }) 

        const email = await response.json()
        if(email.email) {
            return true
        }
        return false

    } catch (error) {
        console.log(error)
    }
};

export const  checkTeamName = async (name) => {
    
    try {
        const response = await fetch(`${BASE_URL}/team?name=${name}`,
        {
            method: 'GET',
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        }) 

        const teamName = await response.json()
        if(teamName.name) {
            return true
        }
        return false

    } catch (error) {
        console.log(error)
    }
};

export const getTeam = async () => {

    try {
        const response = await fetch(`${BASE_URL}/team/getTeam`,
            {
                method: 'GET',
                credentials: "include",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true
                },
            }
        )
            
        const team = await response.json()
        return team
        
    } catch (error) {
        console.log(error)
    }
    
};

//POST fetch
export const  addTeam = async (userEmail, teamName) => {
    const encodedEmail = encodeURIComponent(userEmail)
    
    try {
        const response = await fetch(`${BASE_URL}/team/addTeam?userEmail=${encodedEmail}&teamName=${teamName}`,
            {
                method: 'POST',
                credentials: "include",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true
                }
            }
        ) 

        const teamData = await response.json()

        if(teamData.name === teamName) {
            return true
        }
        return false

    } catch (error) {
        console.log(error)
    }
};

//PUT fetch
export const  addPartner = async (userEmail, teamLeadEmail) => {
    const encodedUserEmail = encodeURIComponent(userEmail)
    const encodedTeamLeadEmail = encodeURIComponent(teamLeadEmail)
    
    try {
        const response = await fetch(`${BASE_URL}/team/updateTeam?userEmail=${encodedUserEmail}&teamLeadEmail=${encodedTeamLeadEmail}`,
            {
                method: 'PUT',
                credentials: "include",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true
                }
            }
        ) 

        const teamData = await response.json()

        if(teamData.partner === userEmail) {
            return true
        }
        return false

    } catch (error) {
        console.log(error)
    }
};
