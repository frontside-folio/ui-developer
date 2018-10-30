import React from 'react';
import PropTypes from 'prop-types';
import { HotKeys, Pane } from '@folio/stripes/components';
import PaneCloseLink from './PaneCloseLink';

function HotKeysDemo({ handlers, bindings }) {
  return (
    <HotKeys handlers={handlers} noWrapper>
      <Pane
        defaultWidth="auto"
        fluidContentWidth
        paneTitle="Hot keys"
        firstMenu={(
          <PaneCloseLink to="/settings/developer" />
        )}
      >
        <p>
          When this area is focused, type:
        </p>
        <ul>
          <li>
            <tt>
              {bindings.stripesHome || '[undefined]'}
            </tt>
            {' '}
            to go to the Home page
          </li>
          <li>
            <tt>
              {bindings.stripesAbout || '[undefined]'}
            </tt>
            {' '}
            to go to the About page
          </li>
        </ul>
      </Pane>
    </HotKeys>
  );
}

HotKeysDemo.propTypes = {
  bindings: PropTypes.object.isRequired,
  handlers: PropTypes.object.isRequired
};

export default HotKeysDemo;
