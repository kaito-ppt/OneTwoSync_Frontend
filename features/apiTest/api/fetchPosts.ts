'use server';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Post[] = await response.json();
    return data;
  }