'use client'
import Link from 'next/link';
import { AppBar, Toolbar, Button, Box } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" justifyContent="space-between">
          <Link href="../../../" passHref>
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="../../../about" passHref>
            <Button color="inherit">About</Button>
          </Link>
          <Link href="../../../apiTest" passHref>
            <Button color="inherit">ApiTest</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;