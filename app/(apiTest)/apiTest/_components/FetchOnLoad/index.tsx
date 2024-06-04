'use client';
import React, { useState } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@material-ui/core';

// Postの型定義
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// コンポーネントのプロップス型定義
interface Props {
  posts: Post[];
}

const FetchOnLoad: React.FC<Props> = ({ posts }) => {
  // postsがundefinedまたはnullの場合、空の配列を使用
  console.log('Fetched posts:', posts);
  const safePosts = posts ?? [];

  // 全ての投稿の表示状態を管理するstate
  const [allOpen, setAllOpen] = useState<boolean>(true);

  return (
    <Container>
      <Typography variant="h5" component="h2" gutterBottom>
        Posts on Load
      </Typography>
      <Button variant={allOpen ? 'outlined' : 'contained'} color="primary" onClick={() => setAllOpen(!allOpen)}>
        {allOpen ? 'Hide All Posts' : 'Show All Posts'}
      </Button>
      {allOpen && (
        <List>
          {safePosts.map(post => (
            <ListItem key={post.id}>
              <ListItemText primary={post.title} secondary={post.body} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default FetchOnLoad;