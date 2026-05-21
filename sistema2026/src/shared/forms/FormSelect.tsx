import type { SelectHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  registration?: UseFormRegisterReturn;
}

export const FormSelect = ({
  label,
  error,
  options,
  registration,
  ...props
}: FormSelectProps) => {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <select
        className={`form-select ${error ? 'form-select--error' : ''}`}
        {...registration}
        {...props}
      >
        <option value="">Seleccionar...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};
