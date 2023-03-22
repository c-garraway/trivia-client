const BASE_URL = process.env.REACT_APP_BASE_URL

//GET fetch
export const  getTeamPoints = async () => {

    try {
        const response = await fetch(`${BASE_URL}/points`,
        {
            method: 'GET',
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        }) 

        const teamPoints = await response.json()
        /* if(email.email) {
            return true
        } */
        return teamPoints

    } catch (error) {
        console.log(error)
    }
};

export const  getAllTeamRanks = async () => {

    try {
        const response = await fetch(`${BASE_URL}/points/getTeamRanks`,
        {
            method: 'GET',
            credentials: "include",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        }) 

        const allTeamRanks = await response.json()
        /* if(email.email) {
            return true
        } */
        return allTeamRanks

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
