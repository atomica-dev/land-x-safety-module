import React, { FunctionComponent } from "react";
import { createFormattedNumberInputHandler, formatNumber, positiveNumericFieldHandler } from "../utils/handlers";

interface ITextInputProps {
  label?: React.ReactNode;
  underLabel?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  onClick?: () => void;
  onBlur?: () => void;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: "string" | "positiveNumber" | "positiveInteger" | "email";
  useFormatter?: boolean;
  isRequired?: boolean;
  size?: "normal" | "small";
  isValid?: boolean;
}

export const TextInput: FunctionComponent<ITextInputProps> = (props) => {
  const {
    type = "string",
    label,
    value = "",
    onBlur,
    onChange,
    onClick,
    error,
    placeholder,
    disabled,
    useFormatter = true,
    isRequired = false,
    size = "normal",
    underLabel,
    isValid,
  } = props;

  const inputClasses = `c-text-input c-text-input--${size} ${disabled ? "c-text-input--disabled" : ""}
    ${error || isValid === false ? "c-text-input--invalid" : ""}`;

  const labelLink = Date.now().toString() + Math.random().toString();

  const changeValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "positiveNumber" && useFormatter) {
      const setter = (pureValue) => onChange && positiveNumericFieldHandler(pureValue, onChange);
      createFormattedNumberInputHandler(value, setter)(event);
    } else if (type === "positiveInteger" && useFormatter) {
      const setter = (pureValue) => onChange && positiveNumericFieldHandler(pureValue, (value) => onChange(Math.floor(+value).toString()));
      createFormattedNumberInputHandler(value, setter)(event);
    } else {
      onChange?.(event.target.value);
    }
  };

  const isOnlyNumber = ["positiveNumber", "positiveInteger"].includes(type);

  const formatter = (value: string) => {
    if (isOnlyNumber && useFormatter) {
      return formatNumber(value);
    } else {
      return value;
    }
  };

  return (
    <div className={inputClasses}>
      {label && (
        <div className="c-text-input__label-wrapper">
          <label htmlFor={labelLink} className={`c-text-input__label ${isRequired ? "c-text-input__label--required" : ""}`}>
            {label}
          </label>
        </div>
      )}
      <input
        disabled={disabled}
        placeholder={placeholder}
        onChange={changeValueHandler}
        value={formatter(value)}
        id={labelLink}
        type="text"
        inputMode={isOnlyNumber ? "decimal" : undefined}
        className="c-text-input__input"
        onClick={onClick}
        onBlur={onBlur}
      />
      {underLabel && <div className="c-text-input__under-label">{underLabel}</div>}
      {error && <span className="c-text-input__validation">{error}</span>}
    </div>
  );
};
