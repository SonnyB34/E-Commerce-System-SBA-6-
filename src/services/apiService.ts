const getData = async (url: string): Promise<any> => {
  let response: Response;
  try {
    response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};


