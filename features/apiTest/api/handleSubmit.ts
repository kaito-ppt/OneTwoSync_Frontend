'use submit';

  export async function handleSubmit (title: string,body: string) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        body,
        userId: 1
      })
    });
    const data = await response.json();
    console.log(data);
    return data;
  };