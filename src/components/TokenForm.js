import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import stripesForm from '@folio/stripes/form';
import { Button, Pane, TextField } from '@folio/stripes/components';
import PaneCloseLink from './PaneCloseLink';

const TokenForm = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting
  } = props;

  const lastMenu = (
    <Button
      type="submit"
      buttonStyle="primary"
      disabled={(pristine || submitting)}
      marginBottom0
    >
      Save
    </Button>
  );

  return (
    <Pane
      defaultWidth="auto"
      paneTitle="Set token"
      firstMenu={(
        <PaneCloseLink to="/settings/developer" />
      )}
      lastMenu={lastMenu}
      tagName="form"
      onSubmit={handleSubmit}
    >
      <Field
        component={TextField}
        id="token"
        name="token"
        label="Authentication token (JWT)"
      />
    </Pane>
  );
};

TokenForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

export default stripesForm({
  form: 'developerSettingsTokenForm',
  navigationCheck: true,
  enableReinitialize: true,
  destroyOnUnmount: false,
})(TokenForm);
