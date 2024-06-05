import { Box, Container, Typography } from "@mui/material";
import History from "./_components/History";
import Team from "./_components/Team";

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is the about page of our Next.js App Router example.
      </Typography>
      <Box component="div" sx={{ mt: 3 }}>
        <Team />
      </Box>
      <Box component="div" sx={{ mt: 3 }}>
        <History />
      </Box>
    </Container>
  );
};

export default AboutPage;
