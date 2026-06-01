import "./style.css";
import { useEffect, useRef, useState } from "react";

export const Button = ({
  label,
  onClick,
  variant = "primary regular",
  type = "button",
  frontIcon,
  backIcon,
  disabled = false,
}) => {
  return (
    <button
      className={`spacing-row spacing-row-center gap-4 ${variant}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {frontIcon && (
        <div className="icons-small">
          <i className={frontIcon}></i>
        </div>
      )}
      {label}
      {backIcon && (
        <div className="icons-small">
          <i className={backIcon}></i>
        </div>
      )}
    </button>
  );
};

export const InputLabel = ({
  label,
  type = "text",
  value,
  name,
  onChange,
  placeholder,
  error,
  required = true,
  accept,
  disabled = false,
}) => {
  return (
    <div className="input-group spacing-col gap-4">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        accept={accept}
        disabled={disabled}
        multiple={type === "file" ? true : undefined}
        className={error ? "input-error" : "input-standard"}
      />
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export const InputLabelCheck = ({
  label,
  type = "text",
  value,
  name,
  onChange,
  placeholder,
  error,
  required = true,
  checkLabel,
  checked,
  checkChange,
}) => {
  return (
    <div className="input-group spacing-col gap-4">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={error ? "input-error" : "input-standard"}
      />
      <div
        className={`input-check ${checked ? "active" : ""} spacing-row spacing-row-center`}
      >
        <div
          className="checkbox"
          onClick={() => checkChange(!checked)}
          style={{ cursor: "pointer" }}
        >
          <i
            className={checked ? "ph-fill ph-check-square" : "ph ph-square"}
          ></i>
        </div>
        <label
          onClick={() => checkChange(!checked)}
          style={{ cursor: "pointer" }}
        >
          {checkLabel}
        </label>
      </div>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export const InputDropdown = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = true,
}) => {
  return (
    <div className="input-group spacing-col gap-4">
      {label && <label htmlFor={name}>{label}</label>}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={error ? "border-red" : "border-gray"}
      >
        <option value="" disabled>
          -- Please Select --
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
};

export const InputTextarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 5,
  error,
  required = true,
}) => {
  return (
    <div className="input-group spacing-col gap-4">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export const InputRadio = ({
  label,
  name,
  value,
  onChange,
  options,
  required = true,
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="input-group spacing-col gap-4">
      {label && <label>{label}</label>}
      <div className="spacing-row gap-8">
        {options.map((opt) => (
          <div key={opt.value} className="spacing-row spacing-row-center gap-4">
            <input
              type="radio"
              id={`${name}-${opt.value}`}
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={handleChange}
              required={required}
            />
            <label htmlFor={`${name}-${opt.value}`}>{opt.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export const InputSearch = ({ name, value, onChange, placeholder }) => {
  const [displaySearch, setDisplaySearch] = useState(false);

  return (
    <div className="input-search spacing-col gap-4">
      <div className="input-group spacing-row spacing-row-center gap-12">
        <input
          id={name}
          name={name}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="input-standard"
          onClick={() => setDisplaySearch(true)}
        />
        <div className="icons-small" onClick={() => setDisplaySearch(false)}>
          <i
            className={`ph ${displaySearch ? "ph-x" : "ph-magnifying-glass"}`}
          ></i>
        </div>
      </div>
      {/* menampilkan search sesuai dengan nama tabel */}
      {name.includes("inventory")
        ? displaySearch && (
          <div className="search-result spacing-col gap-4">
            <div className="product spacing-row spacing-row-center gap-8">
              <p>Cotton Combed - Navy 16s</p>
              <p>CC-NVY-16s</p>
              <div className="chips chips-secondary">80.5 Kg</div>
              <div className="chips chips-primary">Rp 105.000</div>
            </div>
            <div className="product spacing-row spacing-row-center gap-8">
              <p>Cotton Combed - Navy 20s</p>
              <p>CC-NVY-20s</p>
              <div className="chips chips-secondary">80.5 Kg</div>
              <div className="chips chips-primary">Rp 125.000</div>
            </div>
            <div className="product spacing-row spacing-row-center gap-8">
              <p>Cotton Combed - Navy 24s</p>
              <p>CC-NVY-24s</p>
              <div className="chips chips-secondary">80.5 Kg</div>
              <div className="chips chips-primary">Rp 135.000</div>
            </div>
          </div>
        )
        : "Gagal"}
    </div>
  );
};
