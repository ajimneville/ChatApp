export const baseUrl = "http://localhost:5000/api";

export const postRequest = async(url, body) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body
    });

    const data = await response.json();

    if(!response.ok) {
        let message;

        if(data?.message) {
            message = data.message;
        } else {
            message = data;
        }
    return {error: true, message};
    }

    return data;
};

export const getRequest = async (url) => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      try {
        const data = await response.json();
        return data;
      } catch (jsonError) {
        console.error('Error parsing JSON:', jsonError);
        return { error: true, message: 'Failed to parse JSON response' };
      }
    } catch (error) {
      let message = 'An error occurred...';
  
      if (error.message) {
        message = error.message;
      }
  
      return { error: true, message };
    }
  };