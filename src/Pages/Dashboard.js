import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import SimpleTable from './../Components/SimpleTable';
import SimpleLineChart from './../Components/SimpleLineChart';




 class Dashboard extends React.Component {
   render(){
     return(
       <main>
         <div />
         <Typography variant="h4" gutterBottom component="h2">
           Score Graph
         </Typography>
         <SimpleLineChart/>
         <Typography variant="h4" gutterBottom component="h2">
           My Test
         </Typography>
         <SimpleTable/>
         <Typography variant="h4" gutterBottom component="h2">
           Upcoming Test
         </Typography>
         <SimpleTable/>
       </main>
     )
   }
 }


export default Dashboard;
