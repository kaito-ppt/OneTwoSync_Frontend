"use client";

import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { fetchPosts } from "@/features/apiTest/api/fetchPosts";

const FetchOnButtonClick = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isHidden, setIsHidden] = useState(true);

  const handleButtonClick = async () => {
    if (posts.length > 0) {
      setPosts([]);
      setIsHidden(true);
    } else {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
      setIsHidden(false);
    }
  };

  return (
    <Container>
      <Typography variant="h5" component="h2" gutterBottom>
        Posts on Button Click
      </Typography>
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        {isHidden ? "Show Posts" : "Hide Posts"}
      </Button>
      {!isHidden && (
        <List>
          {posts.map((post) => (
            <ListItem key={post.id}>
              <ListItemText primary={post.title} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default FetchOnButtonClick;
