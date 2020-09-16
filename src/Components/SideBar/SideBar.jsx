import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles((theme) => ({
    drawer: {
      width: 240,
      flexShrink: 0
    },
    list: {
        marginTop: 40
    },
    drawerPaper: {
      width: 240,
    }
}));

const listItems = [
    {
        text: "Dashboard",
        icon: <BarChartIcon />
    },{
        text: "Teammate",
        icon: <AccessibilityIcon />
    },{
        text: "Task",
        icon: <AssignmentIcon />
    },{
        text: "Assign Task",
        icon: <AssignmentIndIcon />
    }
]; 

const SideBar =  () => {
    const classes = useStyles();
    return (
       <Drawer variant="permanent" anchor="left" className = {classes.drawer} >
           <List className = {classes.list}>
               {listItems.map((listItem) => (
                    <ListItem>
                        <ListItemIcon>{listItem.icon}</ListItemIcon>
                        <ListItemText primary={listItem.text} />
                    </ListItem>
               ))}
           </List>
       </Drawer>
    )
};

export default SideBar;