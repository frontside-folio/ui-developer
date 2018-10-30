import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { stripesShape, TitleManager, withStripes } from '@folio/stripes/core';
import View from '../components/HotKeysDemo';

function HotKeysRoute({ history, stripes }) {
  const handlers = {
    stripesHome: () => {
      stripes.logger.log('action', 'handler for stripesHome: going to /');
      history.push('/');
    },
    stripesAbout: () => {
      stripes.logger.log('action', 'handler for stripesAbout: going to /about');
      history.push('/about');
    },
  };

  const bindings = stripes.bindings || {};

  return (
    <TitleManager page="Developer settings" record="Hot keys">
      <View handlers={handlers} bindings={bindings} />
    </TitleManager>
  );
}

HotKeysRoute.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  stripes: stripesShape
};

export default withStripes(HotKeysRoute);
