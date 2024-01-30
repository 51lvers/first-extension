async function fetchData() 
    {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            
            if (!response.ok) {
              throw new Error('Failed to fetch Chuck Norris joke');
            }
            
            const data = await response.json();
            
          } 
          catch (error) {
            console.error('Error:', error.message);
          }
    }
    fetchData();
