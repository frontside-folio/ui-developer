import React, { Component } from 'react';
import { merge } from 'lodash';
import { stripesShape, TitleManager, withStripes } from '@folio/stripes/core';
import View from '../components/ConfigurationForm';

class Configuration extends Component {
  static propTypes = {
    stripes: stripesShape.isRequired
  };

  onSave = (data) => {
    const stripes = this.props.stripes;
    merge(stripes, data);
    this.forceUpdate();
  }

  render() {
    const { stripes } = this.props;
    if (!stripes.config.autoLogin) { stripes.config.autoLogin = { username: '', password: '' }; }

    const initialValues = {
      logger: {
        categories: stripes.logger.categories,
      },
      config: {
        showPerms: stripes.config.showPerms || false,
        listInvisiblePerms: stripes.config.listInvisiblePerms || false,
        hasAllPerms: stripes.config.hasAllPerms || false,
        autoLogin: {
          username: stripes.config.autoLogin.username,
          password: stripes.config.autoLogin.password,
        },
      },
    };

    return (
      <TitleManager page="Developer settings" record="Configuration">
        <View onSubmit={this.onSave} initialValues={initialValues} />
      </TitleManager>
    );
  }
}

export default withStripes(Configuration);
