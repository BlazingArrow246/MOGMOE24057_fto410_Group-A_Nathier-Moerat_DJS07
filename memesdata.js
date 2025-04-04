// Define the API endpoint
const apiUrl = 'https://api.imgflip.com/get_memes';                    //__________________________________________

// Use the fetch function to make a GET request
fetch(apiUrl)
  .then(response => {
    // Check if the response is ok (status code 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON data from the response
    return response.json();
  })
  .then(data => {                                     //This code fetches meme data from the API and logs it to the console. 
    // Process the data here
    console.log(data);
    // For example, display the memes data:
    const memes = data.data.memes;
    memes.forEach(meme => {
      console.log(meme.name, meme.url);
    });
  })
  .catch(error => {
    // Handle any errors that occur during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });
//                                                                        _____________________________________           