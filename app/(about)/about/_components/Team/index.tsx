"use client";
import React, { useState } from "react";
import { Box,Button,TextField,Typography,CardContent,Card, Container } from "@material-ui/core";

const Team = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [teamMembers, setTeamMembers] = useState<
    { name: string; role: string }[]
  >([]);

  const handleAddMember = () => {
    if (name && role) {
      setTeamMembers([...teamMembers, { name, role }]);
      setName("");
      setRole("");
    }
  };

  return (
    <Container>
      <Typography variant="h5" component="h2" gutterBottom>
        Our Team
      </Typography>
      <Box component="p" sx={{ mb: 1 }}>Additional team members can be added.</Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
        <TextField
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <Button onClick={handleAddMember} variant="contained" color="primary">Add member</Button>
      </Box>
      <Box component="ul">
        {teamMembers.map((member, index) => (
          <Box component={Card} key={index} sx={{ minWidth: 275, mb: 1 }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {member.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ marginBottom: 3 }}
              >
                {member.role}
              </Typography>
            </CardContent>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Team;
