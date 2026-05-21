import type { TextareaHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  registration?: UseFormRegisterReturn;
}

export const FormTextarea = ({
  label,
  error,
  registration,
  ...props
}: FormTextareaProps) => {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <textarea
        className={`form-textarea ${error ? 'form-textarea--error' : ''}`}
        {...registration}
        {...props}
      />
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};
