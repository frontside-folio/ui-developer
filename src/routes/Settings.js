import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { TitleManager } from '@folio/stripes/core';
import {
  NavList,
  NavListItem,
  NavListSection,
  Pane
} from '@folio/stripes/components';
import PaneBackLink from '../components/PaneBackLink';

export default class SettingsRoute extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: ReactRouterPropTypes.location.isRequired
  }

  render() {
    const {
      children,
      location: { pathname }
    } = this.props;

    return (
      <TitleManager page="Developer settings">
        <Pane
          defaultWidth="20%"
          paneTitle="Developer"
          firstMenu={(
            <PaneBackLink to="/settings" />
          )}
        >
          <NavList>
            <NavListSection activeLink={pathname}>
              <NavListItem to="/settings/developer/configuration">Configuration</NavListItem>
              <NavListItem to="/settings/developer/hot-keys">Hot keys</NavListItem>
              <NavListItem to="/settings/developer/token">Token</NavListItem>
            </NavListSection>
          </NavList>
        </Pane>
        {children}
      </TitleManager>
    );
  }
}
