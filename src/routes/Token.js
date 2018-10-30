import React, { Component } from 'react';
import { stripesShape, TitleManager, withStripes } from '@folio/stripes/core';
import View from '../components/TokenForm';

class Token extends Component {
  static propTypes = {
    stripes: stripesShape.isRequired
  };

  onSave = (data) => {
    const { stripes } = this.props;
    stripes.setToken(data.token);
  }

  render() {
    const { stripes } = this.props;
    const token = stripes.store.getState().okapi.token;

    return (
      <TitleManager page="Developer settings" record="Token">
        <View onSubmit={this.onSave} initialValues={{ token }} />
      </TitleManager>
    );
  }
}

export default withStripes(Token);
