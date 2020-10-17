import React, {useContext} from 'react';
import { Drawer, ListItem, List, ListItemText, ListItemIcon, Divider, Avatar, MenuList, MenuItem, Menu} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Accessibility, Assignment, AssignmentInd, BarChart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Firebase from 'firebase';
import {AuthContext} from '../../Context/AuthContext';
const useStyles = makeStyles((theme) => ({
    drawer: {
      width: 240,
    },
    drawerPaper: {
        width: 240,
    },
    list: {
        marginTop: 40
    },
    listItem: {
        color: 'inherit',
        textDecoration: 'inherit'
    },
    avatar: {
        width: 90,
        height: 90,
        textAlign: "center"
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
    const  { currentUser } = useContext(AuthContext);
    const sideBarStyles = useStyles();
    return (
    <Drawer
    className={sideBarStyles.drawer}
    variant="permanent"
    classes={{
        paper: sideBarStyles.drawerPaper,
      }}
    >
        <MenuList className={sideBarStyles.drawerContainer}>
            <MenuItem>
                <Avatar src={currentUser.photoURL} className = {sideBarStyles.avatar} />
            </MenuItem>
            {listItems.map((listItem) => (
                        <MenuItem>
                            <ListItemIcon>{listItem.icon}</ListItemIcon>
                            <Link className={sideBarStyles.listItem} to={listItem.url}>
                                <ListItemText primary={listItem.text} />
                            </Link>
                        </MenuItem>
                    ))}
        </MenuList>
    </Drawer>
    )
};

export default SideBar;