import React from 'react';
export default class AppView extends React.Component {
	componentDidMount() {
    $('.twitch-connect').click(function() {
      Twitch.login({
        scope: ['user_read', 'channel_read']
      });
    });

    Twitch.events.addListener('auth.login', function() {
      // user is logged in
    });

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
