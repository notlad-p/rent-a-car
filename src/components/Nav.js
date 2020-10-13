import React from 'react';
import NavMenuDesktop from './NavMenuDesktop';
import NavMenuMobile from './NavMenuMobile';
import BrandLink from './BrandLink';
// material ui
import { AppBar, Toolbar, Grid, useMediaQuery  } from '@material-ui/core';

export default function Nav() {
  const mediaQuery = useMediaQuery('(min-width:800px)');

  return (
    <div>
      <AppBar className='nav'>
        <Toolbar>
          <Grid
            container
            justify='space-between'
            className='NavContent'
          >
            <BrandLink/>
            {mediaQuery ? <NavMenuDesktop/> : <NavMenuMobile/>}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}