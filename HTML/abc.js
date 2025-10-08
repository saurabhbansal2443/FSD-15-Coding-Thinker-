async function fetchSheet() {

    const sheetId = "1iLbAAHNIK4HIVkOOyWHHHxfmzwfMw6Lz9GGUb54Ey5E";
    const apiKey = "AIzaSyBfuVIpFr5Xs5eg6f0I757YlRx8k7qSRDY";
    const range = "TopicWiseSolution"; // replace with your sheet name & range
  
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(range)}?key=${apiKey}`;
  
    console.log("Fetching:", url);
  
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    console.log("Sheet Data:", data.values);
  }
  
  fetchSheet().catch(console.error);
  