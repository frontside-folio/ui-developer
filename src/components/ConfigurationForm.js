import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import stripesForm from '@folio/stripes/form';
import { Button, Checkbox, Pane, TextField } from '@folio/stripes/components';
import PaneCloseLink from './PaneCloseLink';

const ConfigurationForm = (props) => {
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
      paneTitle="Configuration"
      firstMenu={(
        <PaneCloseLink to="/settings/developer" />
      )}
      lastMenu={lastMenu}
      tagName="form"
      onSubmit={handleSubmit}
    >
      <Field
        htmlFor="1"
        component={TextField}
        name="logger.categories"
        label="Logging categories"
      />
      (See
      {' '}
      <a href="https://github.com/folio-org/stripes-core/blob/master/doc/dev-guide.md#configuring-the-logger">the documentation</a>
      {' '}
      for available levels.)
      <hr />
      <Field
        htmlFor="2"
        component={TextField}
        name="config.autoLogin.username"
        label="Auto-login username"
      />
      <Field
        htmlFor="3"
        component={TextField}
        name="config.autoLogin.password"
        label="Auto-login password"
      />
      <hr />
      <Field
        htmlFor="4"
        component={Checkbox}
        name="config.showPerms"
        id="config.showPerms"
        label="Show permissions in user menu?"
      />
      <Field
        htmlFor="5"
        component={Checkbox}
        name="config.listInvisiblePerms"
        id="config.listInvisiblePerms"
        label="List &quot;invisible&quot; permissions in add-perm menus?"
      />
      <Field
        htmlFor="6"
        component={Checkbox}
        name="config.hasAllPerms"
        id="config.hasAllPerms"
        label="Act as though user has all permissions?"
      />
    </Pane>
  );
};

ConfigurationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

export default stripesForm({
  form: 'developerSettingsConfigurationForm',
  navigationCheck: true,
  enableReinitialize: true,
  destroyOnUnmount: false,
})(ConfigurationForm);
