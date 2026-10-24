
let fun = Math.floor(Math.random() * 1000)

console.log("FUN NUMBER:" + fun)


async function fetchData() {
  try {
    const response = await fetch('https://random.andynd.workers.dev/');
    // Always check response.ok (status codes 200-299)
    // Fetch does NOT reject on HTTP error codes like 404 or 500
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parses JSON response into JS object
    console.log("DATA:" + data);
  } catch (error) {
    console.error('Network or parsing error:', error); // Catches network failures
  }
}

fetchData();
