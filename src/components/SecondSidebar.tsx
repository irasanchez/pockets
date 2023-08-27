import * as React from 'react';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
// icons
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AccountBalance from '@mui/icons-material/AccountBalance';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';

import { closeSidebar } from '../utils';

export default function SecondSidebar() {
  return (
    <React.Fragment>
      <Box
        className="SecondSidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      
    
    </React.Fragment>
  );
}