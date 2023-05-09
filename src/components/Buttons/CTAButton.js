import * as React from 'react';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import { createTheme } from "@mui/material/styles";

export default function CTAButton() {

    const theme = createTheme({
        spacing: 8, // Spacing factor
    });
    

  return (
    <Stack direction="row" spacing={2} sx={{ maxWidth: 345, m: theme.spacing(8), }}>
      
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}