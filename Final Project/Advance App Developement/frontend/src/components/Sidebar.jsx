import * as React from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import {Box} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { MdMenu } from 'react-icons/md';

export default function TemporaryDrawer() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, left: open });
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[ { name: 'Book Events', link: '/booking' },  { name: 'My Dashboard', link: '/adminevents' }, { name: 'Themes', link: '/view_theme' },{ name: 'Food Menu', link: '/view_food' },{ name: 'Addons', link: '/view_addon' },{ name: 'Logout', link: '/' }].map((text, index) => (
          <ListItem key={text.name} disablePadding onClick={() => { navigate(text.link); }}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
      <div>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(true)}><MdMenu style={{ fontSize: 30, color: 'black' }} /></Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
  );
}
