import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';


import "./../scss/testScreen.scss"

 class TestScreen extends React.Component {
   state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

   render(){
     const { open } = this.state;

     return(
       <div className="testContener">
       <div className={ open ? 'appBarShift' : "asdfghjkl"}>
         <CssBaseline />
          <AppBar
            position="fixed"
          >
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                TestZone
              </Typography>
              <Grid item xs/>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <main>
          <div className="drawerHeader"/>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
            elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
            hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
            Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
            viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
            Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
            at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
            ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
            sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
            In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
            sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
            viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </main>
        <Drawer
          className="drawer"
          variant="persistent"
          anchor="right"
          open={open}
        >
          <div className="drawerHeader">
            <IconButton onClick={this.handleDrawerClose}>
              {false ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <div className="questionNumber indicator">
              <div>
                <span className="answered">0</span>
                Answered
              </div>
              <div>
                <span className="marked">0</span>
                Marked
              </div>
              <div>
                <span className="notVisited">100</span>
                Not Visited
              </div>
              <div>
                <span className="markedAnswered">0</span>
                Marked and Answered
              </div>
              <div>
                <span className="notAnswer">0</span>
                Not Answer
              </div>
            </div>

          </List>
          <Divider />
          <List>
            <div className="questionNumber">
              <div className="numBox">
                <span className="notVisited active">1</span>
              </div>
              <div className="numBox">
                <span className="notVisited">2</span>
              </div>
              <div className="numBox">
                <span className="notVisited">3</span>
              </div>
              <div className="numBox">
                <span className="notVisited">4</span>
              </div>
              <div className="numBox">
                <span className="notVisited">5</span>
              </div>
              <div className="numBox">
                <span className="notVisited">1</span>
              </div>
              <div className="numBox">
                <span className="notVisited">2</span>
              </div>
              <div className="numBox">
                <span className="notVisited">3</span>
              </div>
              <div className="numBox">
                <span className="notVisited">4</span>
              </div>
              <div className="numBox">
                <span className="notVisited">5</span>
              </div>
              <div className="numBox">
                <span className="notVisited">1</span>
              </div>
              <div className="numBox">
                <span className="notVisited">2</span>
              </div>
              <div className="numBox">
                <span className="notVisited">3</span>
              </div>
              <div className="numBox">
                <span className="notVisited">4</span>
              </div>
              <div className="numBox">
                <span className="notVisited">5</span>
              </div>
            </div>
          </List>
        </Drawer>
       </div>
       </div>
     )
   }
 }
export default TestScreen;
