'use client';

import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Card, CardContent, Box } from '@material-ui/core';
import { handleSubmit } from '@/features/apiTest/api/handleSubmit';

const FetchForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState<any>(null);

  const handleButtonClick = async (event: React.FormEvent) => {
    event.preventDefault();
    var data = await handleSubmit(title, body);
    setResponse(data);
  };

  return (
    <Container>
      <Typography variant="h5" component="h2" gutterBottom>
        Create a Post
      </Typography>
      <form onSubmit={handleButtonClick}>
        <TextField
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Body"
          value={body}
          onChange={e => setBody(e.target.value)}
          margin="normal"
          multiline
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      {response && (
        <Card variant="outlined" style={{ marginTop: '16px' }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Response
            </Typography>
            <Box component="pre" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
              {JSON.stringify(response, null, 2)}
            </Box>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default FetchForm;