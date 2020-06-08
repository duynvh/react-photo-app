import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';
import Select from 'react-select';

function SelectField(props) {
  const { field, form, options, label, placeholder, disabled } = props;
  const { name, value } = field;
  const selectedOption = options.find(option => option.value === value);
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : selectedOption;
    const changeEvent = {
      target: {
        name,
        value: selectedValue
      }
    };
    field.onChange(changeEvent);
  }

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}

        placeholder={placeholder}
        disabled={disabled}
        options={options}

        className={showError ? 'is-invalid' : ''}
      >

      </Select>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  )
}

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array
};

SelectField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
  options: [],
};

export default SelectField

