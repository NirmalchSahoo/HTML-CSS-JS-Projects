const proxyUrl = 'https://api.allorigins.win/get?url=';
const apiUrl = 'https://zenquotes.io/api/random';
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const loaderElement = document.getElementById('loader');
const errorElement = document.getElementById('error');

// Minimum time to show the loader (in milliseconds)
const MIN_LOADER_TIME = 4000; // 4 second

async function getQuote(url) {
  try {
    // Show loader and hide quote/author while fetching data
    loaderElement.style.display = 'block';
    quoteElement.style.display = 'none';
    authorElement.style.display = 'none';
    errorElement.style.display = 'none';

    // Simulate a delay to ensure the loader is visible for a minimum time
    const loaderVisiblePromise = new Promise(resolve => setTimeout(resolve, MIN_LOADER_TIME));

    // Add a random cache-busting parameter to the URL
    const fullUrl = proxyUrl + encodeURIComponent(url) + `&random=${Math.random()}`;

    const response = await fetch(fullUrl);
    const data = await response.json();

    // Parse the wrapped contents
    const quoteData = JSON.parse(data.contents);

    // Wait for the minimum loader time to pass
    await loaderVisiblePromise;

    // Display the quote and author after fetching
    quoteElement.innerHTML = quoteData[0].q;
    authorElement.innerHTML = quoteData[0].a;

    // Hide the loader and show the quote/author
    loaderElement.style.display = 'none';
    errorElement.style.display = 'block';
    quoteElement.style.display = 'block';
    authorElement.style.display = 'block';

    console.log(quoteData);
  } catch (error) {
    console.error('Error fetching the quote:', error);
    errorElement.innerHTML = 'Failed to load quote. Please try again.';
  }
}

// Initial fetch
getQuote(apiUrl);


//tweet 
function tweet() {
    const tweetText = encodeURIComponent(quoteElement.innerHTML + " - By " + authorElement.innerHTML);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, '_blank');
}

