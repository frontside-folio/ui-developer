import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Route, Switch } from './router';

import Settings from './routes/Settings';
import Configuration from './routes/Configuration';
import HotKeys from './routes/HotKeys';
import Token from './routes/Token';

class DeveloperSettings extends Component {
  static propTypes = {
    match: ReactRouterPropTypes.match.isRequired
  };

  static actionNames = ['stripesHome', 'stripesAbout'];

  render() {
    const {
      match: { path: rootPath }
    } = this.props;

    return (
      <Route path={rootPath} component={Settings}>
        <Switch>
          <Route path={`${rootPath}/configuration`} exact component={Configuration} />
          <Route path={`${rootPath}/hot-keys`} exact component={HotKeys} />
          <Route path={`${rootPath}/token`} exact component={Token} />
        </Switch>
      </Route>
    );
  }
}

export default DeveloperSettings;
