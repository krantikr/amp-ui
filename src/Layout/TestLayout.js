import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MainContent from './../Route/Routeing';
class TestLayout extends React.Component {
  render(){
    return(
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static">
          <Grid container>
            <Grid item>
              <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                  TestZone
                </Typography>
              </Toolbar>
            </Grid>
            <Grid item xs />
            <Grid item>
              <IconButton color="inherit">
                <Avatar src="./images/1.jpg" />
              </IconButton>
            </Grid>
          </Grid>
        </AppBar>
        <MainContent/>
      </React.Fragment>
    )
  }
}

export default TestLayout;
