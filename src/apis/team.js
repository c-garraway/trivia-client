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
export const  addTeam = async (teamName) => {
    
    try {
        const response = await fetch(`${BASE_URL}/team/addTeam?teamName=${teamName}`,
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
export const  addPartner = async (teamLeadEmail) => {
    const encodedTeamLeadEmail = encodeURIComponent(teamLeadEmail)
    
    try {
        const response = await fetch(`${BASE_URL}/team/updateTeam?teamLeadEmail=${encodedTeamLeadEmail}`,
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

        if(teamData.partner) {
            return true
        }
        return false

    } catch (error) {
        console.log(error)
    }
};
