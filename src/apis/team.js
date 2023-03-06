const BASE_URL = process.env.REACT_APP_BASE_URL

//LOCAL USER
export const  getTeam = async (id) => {
    
    try {
        const response = await fetch(`${BASE_URL}/team/getTeam/${id}`,
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
