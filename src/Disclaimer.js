import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

export default class  extends React.Component {
  // The disclaimer should be shown as soon as the site loads.
  state = { open: true }

  hide = () => { this.setState({open: false}) }

  render() {
    const actions = [
      <FlatButton
        label="I understand"
        primary
        onTouchTap={this.hide}
      />
    ]

    return (
      <div>
        <Dialog
          actions={actions}
          open={this.state.open}
          onRequestClose={this.hide}
        >
              <h2>WARNING!</h2>
              <p> This portfolio is a work in progress. None of its current layout or implementation should be considered final.</p>
        </Dialog>
      </div>
    )
  }
}
