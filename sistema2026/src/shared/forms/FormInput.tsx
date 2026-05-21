import type { InputHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  registration?: UseFormRegisterReturn;
}

export const FormInput = ({
  label,
  error,
  registration,
  ...props
}: FormInputProps) => {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <input
        className={`form-input ${error ? 'form-input--error' : ''}`}
        {...registration}
        {...props}
      />
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};
