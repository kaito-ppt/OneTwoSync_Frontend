'use client';

import { Container, Typography } from '@material-ui/core';

const HomePage = () => {
  return (
    <Container>
        <Typography variant="h3" gutterBottom>
          Welcome to the Home Page
        </Typography>
        <Typography gutterBottom>
          This is the home page of our Next.js App Router example.
        </Typography>
    </Container>
  );
};

export default HomePage;