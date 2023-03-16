/* https://the-trivia-api.com/api/questions?limit=10&region=CA

https://the-trivia-api.com/api/questions?limit=10&region=CA&difficulty=easy

https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=10&region=CA&difficulty=easy

fetch('https://the-trivia-api.com/api/categories')


fetch('https://the-trivia-api.com/api/questions?limit=20&categories=science,history', {
  headers: {
    // An API key is not required for this endpoint,
    // but can be used to bypass the rate limit or request
    // more questions.
    'x-api-key': <LinkPI_KEY>,
    'Content-Type': 'application/json'
  },
})

 */


export const getQuestionCategories = async () => {

    try {
        const response = await fetch('https://the-trivia-api.com/api/categories')
            
        const categories = await response.json()
        return categories
        
    } catch (error) {
        console.log(error)
    }

};

export const getQuestions = async (difficulty, category) => {

    try {
        const response = await fetch(difficulty === 'mixed' ? `https://the-trivia-api.com/api/questions?categories=${category}&limit=10&region=CA` : `https://the-trivia-api.com/api/questions?categories=${category}&limit=10&region=CA&difficulty=${difficulty}`, {
            headers: {
              // An API key is not required for this endpoint,
              // but can be used to bypass the rate limit or request
              // more questions.
              //'x-api-key': <LinkPI_KEY>,
              'Content-Type': 'application/json'
            },
          })
            
        const questions = await response.json()
        return questions
        
    } catch (error) {
        console.log(error)
    }

};