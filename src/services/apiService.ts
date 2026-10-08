const getData = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=10');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

getData();
