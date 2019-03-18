import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';

const StyledErrorMessage = styled.div`
  color: #cd2026;
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
  margin: 0.25rem 0 0.5rem;
`;

const StyledField = styled(Field)`
  border: ${props => (props.error ? '3px solid #cd2026' : '1px solid #5b616b')};
  display: block;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  max-width: 25rem;
  padding: 0.625rem 0.5rem;
  width: 100%;

  &:focus {
    outline: 1px dotted #a9a9a9;
    outline-offset: 2px;
  }
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: ${props => (props.error ? '600' : 'normal')};
  margin-bottom: 0.25rem;
  max-width: 46rem;
`;

const InputError = ({ error }) => {
  return error ? <StyledErrorMessage>{error}</StyledErrorMessage> : null;
};

InputError.propTypes = {
  error: PropTypes.string,
};

const Input = props => {
  const { error, id, label, value, ...rest } = props;

  return (
    <div>
      <StyledLabel error={error} htmlFor={id}>
        {label}
      </StyledLabel>
      <InputError error={error} />
      <StyledField error={error} id={id} value={value} {...rest} />
    </div>
  );
};

Input.propTypes = {
  component: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
