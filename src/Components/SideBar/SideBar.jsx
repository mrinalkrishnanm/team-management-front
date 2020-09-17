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
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    drawer: {
      width: 240,
      flexShrink: 0
    },
    list: {
        marginTop: 40
    },
    listItem: {
        color: 'inherit',
        textDecoration: 'inherit'
    },
    drawerPaper: {
      width: 240,
    }
}));

const listItems = [
    {
        text: "Dashboard",
        icon: <BarChartIcon />,
        url: "dashboard"
    },{
        text: "Teammate",
        icon: <AccessibilityIcon />,
        url: "teammate"
    },{
        text: "Task",
        icon: <AssignmentIcon />,
        url: "task"
    },{
        text: "Assign Task",
        icon: <AssignmentIndIcon />,
        url: "assign-task"
    }
]; 

const SideBar =  () => {
    const sideBarStyles = useStyles();
    return (
       <Drawer variant="permanent" anchor="left" className = {sideBarStyles.drawer} >
           <List className = {sideBarStyles.list}>
               {listItems.map((listItem) => (
                    <ListItem>
                        <ListItemIcon>{listItem.icon}</ListItemIcon>
                        <Link className={sideBarStyles.listItem} to={listItem.url}><ListItemText primary={listItem.text} />
                        </Link>
                    </ListItem>
               ))}
           </List>
       </Drawer>
    )
};

export default SideBar;