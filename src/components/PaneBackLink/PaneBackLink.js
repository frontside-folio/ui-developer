import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@folio/stripes/components';
import css from './PaneBackLink.css';

export default class PaneBackLink extends Component {
  static propTypes = {
    to: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
  }

  render() {
    const { to } = this.props;

    return (
      <IconButton
        className={css.paneBackLink}
        icon="left-arrow"
        to={to}
      />
    );
  }
}
