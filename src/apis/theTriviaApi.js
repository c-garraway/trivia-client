
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

  const cleanedCategory = category.replace(/&| /g, function(match) {
    if (match === "&") {
      return "and";
    } 
    if (match === " ") {
      return "_";
    }
  })

    try {
        const response = await fetch(difficulty === 'mixed' ? `https://the-trivia-api.com/api/questions?categories=${cleanedCategory}&limit=10&region=CA` : `https://the-trivia-api.com/api/questions?categories=${cleanedCategory}&limit=10&region=CA&difficulty=${difficulty}`, {
            headers: {
              'Content-Type': 'application/json'
            },
          })
            
        const questions = await response.json()
        return questions
        
    } catch (error) {
        console.log(error)
    }

};