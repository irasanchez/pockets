import * as React from 'react';
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import OrderList from './OrderList';
import OrderTable from './OrderTable';
import Typography from "@mui/joy/Typography";
// icons
import Add from '@mui/icons-material/Add';


export default function Home() {

  return (

          <>
            <Box
            sx={{
              display: 'flex',
              my: 1,
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'start', sm: 'center' },
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            <Typography level="h2">Pockets</Typography>
            <Button
              color="primary"
              startDecorator={<Add />}
              size="sm"
            >
              Add pocket
            </Button>
          </Box>
          <OrderTable />
          <OrderList />
        </>
      
    
  );
}