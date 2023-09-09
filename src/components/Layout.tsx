import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import ColorSchemeToggle from './ColorSchemeToggle';
import CssBaseline from '@mui/joy/CssBaseline';
import FirstSidebar from './FirstSidebar';
import Header from './Header';
import Home from './Home';
import Link from '@mui/joy/Link';
import OrderList from './OrderList';
import OrderTable from './OrderTable';
import SecondSidebar from './SecondSidebar';
import Settings from "./Settings";
import Typography from '@mui/joy/Typography';
import {useScript, useGetAccessUrl} from "../utils";
// icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Add from '@mui/icons-material/Add';
import {Outlet} from "react-router-dom";
const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export default function Layout() {

  const status = useScript(`https://unpkg.com/feather-icons`);

  useEnhancedEffect(() => {
    // Feather icon setup: https://github.com/feathericons/feather#4-replace
    // @ts-ignore
    if (typeof feather !== 'undefined') {
      // @ts-ignore
      feather.replace();
    }
  }, [status]);

  const accessUrl = useGetAccessUrl();

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
        <FirstSidebar />
        <SecondSidebar />
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: {
              xs: 2,
              md: 6,
            },
            pt: {
              xs: 'calc(12px + var(--Header-height))',
              sm: 'calc(12px + var(--Header-height))',
              md: 3,
            },
            pb: {
              xs: 2,
              sm: 2,
              md: 3,
            },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          }}
        >
          <Outlet/>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}