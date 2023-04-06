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
                //"Access-Control-Allow-Credentials": true
            }
        }) 

        const teamPoints = await response.json()

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
                //"Access-Control-Allow-Credentials": true
            }
        }) 

        const allTeamRanks = await response.json()

        return allTeamRanks

    } catch (error) {
        console.log(error)
    }
};

//PUT fetch
export const  updateDailyPoints = async (category, difficulty, dailyPointsTotal, dailyPointsBlock) => {
    
    try {
        const response = await fetch(`${BASE_URL}/points/updateDailyPoints`,
            {
                method: 'PUT',
                credentials: "include",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    //"Access-Control-Allow-Credentials": true
                },
                body: JSON.stringify({
                    "category": `${category}`,
                    "difficulty": `${difficulty}`,
                    "dailyPointsTotal": dailyPointsTotal,
                    "dailyPointsBlock": dailyPointsBlock
                })
            }
        ) 

        const updateMessage = await response.json()

        if(updateMessage.message === 'Points successfully saved') {
            return true
        }
        return false

    } catch (error) {
        console.log(error)
    }
};