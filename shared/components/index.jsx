import React from 'react';
export default class AppView extends React.Component {
	componentDidMount() {
    console.log('mounted');
    $('.twitch-connect').click(function() {
      Twitch.login({
        scope: ['user_read', 'channel_read']
      });
    })

  }
  render() {
    return (
      <div id="app-view">
        <h1>Todos</h1>
        <hr />
        <img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png" className="twitch-connect" href="#" />
        {this.props.children}
      </div>
    );
  }
}
