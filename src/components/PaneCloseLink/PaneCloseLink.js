import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@folio/stripes/components';
import css from './PaneCloseLink.css';

export default class PaneCloseLink extends Component {
  static propTypes = {
    to: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
  }

  render() {
    const { to } = this.props;

    return (
      <Fragment>
        <IconButton
          className={css.paneCloseLinkArrow}
          icon="left-arrow"
          to={to}
        />
        <IconButton
          className={css.paneCloseLinkX}
          icon="closeX"
          to={to}
        />
      </Fragment>
    );
  }
}
