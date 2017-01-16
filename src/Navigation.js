import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import profileImage from './images/profile-image.jpg'

const centeringContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "red"
}

let AvatarChip = () => (
    <Chip>
      <Avatar src={profileImage} />
      Rodrig Roa Rodríguez
    </Chip>
  )


class Navigation extends React.Component {

  constructor(props) {
     super(props);
     this.state = {open: false};
   }

   handleToggle = () => this.setState({open: !this.state.open});

   handleClose = () => this.setState({open: false});

   render() {
     return (
       <nav>
         <AppBar
           title="Portfolio"
           onLeftIconButtonTouchTap={this.handleToggle}
         />
         <Drawer
           docked={false}
           width={300}
           open={this.state.open}
           onRequestChange={(open) => this.setState({open})}
         >
           <MenuItem onTouchTap={this.handleClose}
             style={centeringContainer}
              >
              <Avatar size="200" src={profileImage} />
           </MenuItem>
           <MenuItem onTouchTap={this.handleClose}>Placeholder 2</MenuItem>
         </Drawer>
       </nav>
     );
   }
 }

export default Navigation
