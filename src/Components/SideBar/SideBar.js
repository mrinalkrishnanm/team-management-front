import React from 'react';
import { Drawer, ListItem, List, ListItemText, ListItemIcon, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Accessibility, Assignment, AssignmentInd, BarChart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Firebase from 'firebase';
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
        icon: <BarChart />,
        url: "dashboard"
    },{
        text: "Teammate",
        icon: <Accessibility />,
        url: "teammate"
    },{
        text: "Task",
        icon: <Assignment />,
        url: "task"
    },{
        text: "Assign Task",
        icon: <AssignmentInd />,
        url: "assign-task"
    }
]; 

const SideBar =  () => {
    const sideBarStyles = useStyles();
    return (
       <Drawer variant="permanent" anchor="left" className = {sideBarStyles.drawer} >
        <Divider />
           <List className = {sideBarStyles.list}>
               {listItems.map((listItem) => (
                    <ListItem>
                        <ListItemIcon>{listItem.icon}</ListItemIcon>
                        <Link className={sideBarStyles.listItem} to={listItem.url}>
                            <ListItemText primary={listItem.text} />
                        </Link>
                    </ListItem>
               ))}
           </List>
       </Drawer>
    )
};

export default SideBar;