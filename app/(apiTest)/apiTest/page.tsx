"use client";

import FetchForm from "./_components/FetchForm";
import FetchOnButtonClick from "./_components/FetchOnButtonClick";
import FetchOnLoad from "./_components/FetchOnLoad";
import React, { ReactElement, useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { fetchPosts } from "@/features/apiTest/api/fetchPosts";

// Postの型定義
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const AboutPage = (): ReactElement => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        APITEST Page
      </Typography>
      <Box component="div" sx={{ mt: 3 }}>
        <FetchOnLoad posts={posts} />
      </Box>
      <Box component="div" sx={{ mt: 3 }}>
        <FetchOnButtonClick />
      </Box>
      <Box component="div" sx={{ mt: 3 }}>
        <FetchForm />
      </Box>
    </Container>
  );
};

export default AboutPage;
