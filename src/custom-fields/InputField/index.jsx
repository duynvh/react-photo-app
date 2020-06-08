import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

function InputField(props) {
  const {
    field, form,
    type, label, placeholder, disabled
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input 
        type={type}
        id={name}
        disabled={disabled}
        placeholder={placeholder}
        invalid={showError}
        {...field}
      />

      <ErrorMessage name={name} component={FormFeedback}/>
    </FormGroup>
  )
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false
};

export default InputField

