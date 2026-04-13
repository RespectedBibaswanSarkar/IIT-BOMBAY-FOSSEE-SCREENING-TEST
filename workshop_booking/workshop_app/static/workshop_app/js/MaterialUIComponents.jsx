/**
 * ============================================================================
 * FOSSEE WORKSHOP BOOKING - REACT MATERIAL UI COMPONENTS
 * ============================================================================
 * 
 * Modern React components using Material Design 3 principles
 * with neon orange + deep blue theme
 * 
 * Components:
 * - Button (Primary, Secondary, Success, Danger)
 * - Card (Filled, Outlined, Elevated)
 * - StatCard (Statistics display)
 * - Table (Data display with sorting/filtering)
 * - Modal (Dialogs and overlays)
 * - Alert (Notifications)
 * - Badge (Status indicators)
 * - Loader (Loading states)
 * ============================================================================
 */

// ============================================================================
// BUTTON COMPONENT
// ============================================================================

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  children, 
  onClick, 
  className = '',
  ...props 
}) => {
  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn',
    lg: 'btn-lg'
  };

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-danger'
  };

  return (
    <button
      className={`btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// ============================================================================
// CARD COMPONENT
// ============================================================================

const Card = ({ 
  variant = 'filled', 
  children, 
  className = '',
  title,
  subtitle,
  actions,
  ...props 
}) => {
  const variantClasses = {
    filled: 'card card-filled',
    outlined: 'card card-outlined',
    elevated: 'card card-elevated',
    default: 'card'
  };

  return (
    <div className={`${variantClasses[variant]} mui-card ${className}`} {...props}>
      {title && (
        <div>
          <h3 className="mui-card-title">{title}</h3>
          {subtitle && <p className="mui-card-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="mui-card-content">
        {children}
      </div>
      {actions && (
        <div className="mui-card-actions">
          {actions}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// STAT CARD COMPONENT
// ============================================================================

const StatCard = ({ 
  number, 
  label, 
  icon, 
  trend,
  color = 'orange',
  onClick 
}) => {
  return (
    <div 
      className="stat-card"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      {icon && <span style={{ fontSize: '2rem', marginBottom: '8px' }}>{icon}</span>}
      <div className="stat-number">{number}</div>
      <p className="stat-label">{label}</p>
      {trend && (
        <p style={{ 
          fontSize: '0.75rem', 
          color: trend.isNegative ? '#FF0055' : '#00FF41',
          marginTop: '8px'
        }}>
          {trend.isNegative ? '↓' : '↑'} {trend.value}% {trend.text}
        </p>
      )}
    </div>
  );
};

// ============================================================================
// TABLE COMPONENT
// ============================================================================

const DataTable = ({ 
  columns, 
  data, 
  striped = true,
  hoverable = true,
  responsive = true 
}) => {
  return (
    <div style={{ overflowX: responsive ? 'auto' : 'visible' }}>
      <table className={`${striped ? 'table-striped' : ''} ${hoverable ? 'table-hover' : ''}`}>
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col, cidx) => (
                <td 
                  key={cidx}
                  data-label={col.label}
                >
                  {col.render ? col.render(row[col.key]) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ============================================================================
// MODAL COMPONENT
// ============================================================================

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  actions,
  size = 'md' 
}) => {
  if (!isOpen) return null;

  const sizeStyles = {
    sm: { maxWidth: '400px' },
    md: { maxWidth: '600px' },
    lg: { maxWidth: '900px' }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal" style={sizeStyles[size]}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        {actions && (
          <div className="modal-footer">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// ALERT COMPONENT
// ============================================================================

const Alert = ({ 
  type = 'info', 
  title, 
  message, 
  onClose,
  closable = true,
  icon 
}) => {
  const typeClasses = {
    success: 'alert-success',
    error: 'alert-error',
    warning: 'alert-warning',
    info: 'alert-info'
  };

  const defaultIcons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ⓘ'
  };

  return (
    <div className={`alert ${typeClasses[type]}`}>
      <span style={{ fontSize: '1.2rem', minWidth: '24px' }}>
        {icon || defaultIcons[type]}
      </span>
      <div style={{ flex: 1 }}>
        {title && <strong>{title}</strong>}
        {message && <p>{message}</p>}
      </div>
      {closable && (
        <button 
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'inherit',
            fontSize: '1.2rem',
            cursor: 'pointer'
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};

// ============================================================================
// BADGE COMPONENT
// ============================================================================

const Badge = ({ 
  type = 'default', 
  children,
  dot = false 
}) => {
  const typeClasses = {
    default: 'badge',
    success: 'badge badge-success',
    error: 'badge badge-error',
    warning: 'badge badge-warning',
    info: 'badge badge-info'
  };

  return (
    <span className={typeClasses[type]}>
      {dot && <span style={{ width: '8px', height: '8px', borderRadius: '50%', display: 'inline-block', marginRight: '4px', backgroundColor: 'currentColor' }}></span>}
      {children}
    </span>
  );
};

// ============================================================================
// LOADER/SPINNER COMPONENT
// ============================================================================

const Loader = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 40,
    md: 60,
    lg: 80
  };

  return (
    <div className="loader-wrapper">
      <div 
        className="spinner"
        style={{ width: sizeClasses[size], height: sizeClasses[size] }}
      ></div>
      <span className="loader-text">{text}</span>
    </div>
  );
};

// ============================================================================
// FORM COMPONENTS
// ============================================================================

const FormGroup = ({ label, required = false, error, hint, children }) => {
  return (
    <div className="form-group">
      {label && (
        <label className={`form-label ${required ? 'required' : ''}`}>
          {label}
        </label>
      )}
      {children}
      {error && <p className="form-error">{error}</p>}
      {hint && <p className="form-hint">{hint}</p>}
    </div>
  );
};

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange,
  disabled = false,
  error = false,
  ...props 
}) => {
  return (
    <input
      className={`form-input ${error ? 'form-input-error' : ''}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
};

const Select = ({ 
  options, 
  value, 
  onChange,
  placeholder = 'Select an option...',
  disabled = false,
  ...props 
}) => {
  return (
    <select
      className="form-select"
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

// ============================================================================
// PROGRESS BAR COMPONENT
// ============================================================================

const ProgressBar = ({ 
  value = 0, 
  max = 100, 
  type = 'default',
  showLabel = true 
}) => {
  const percentage = (value / max) * 100;
  const typeClasses = {
    default: 'progress-bar',
    success: 'progress-bar progress-bar-success',
    error: 'progress-bar progress-bar-error'
  };

  return (
    <div>
      <div className="progress">
        <div 
          className={typeClasses[type]}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {showLabel && (
        <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
          {Math.round(percentage)}% Complete
        </p>
      )}
    </div>
  );
};

// ============================================================================
// TABS COMPONENT
// ============================================================================

const Tabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div>
      <div style={{ 
        display: 'flex', 
        borderBottom: '1px solid rgba(255, 122, 0, 0.15)',
        gap: '0',
        marginBottom: '20px'
      }}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => onChange(idx)}
            style={{
              background: activeTab === idx ? 'rgba(255, 122, 0, 0.1)' : 'transparent',
              border: 'none',
              color: activeTab === idx ? 'var(--color-orange-primary)' : 'var(--text-secondary)',
              padding: '12px 20px',
              cursor: 'pointer',
              borderBottom: activeTab === idx ? '3px solid var(--color-orange-primary)' : 'none',
              transition: 'all 0.3s ease',
              fontWeight: activeTab === idx ? '600' : '500'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

// ============================================================================
// PAGINATION COMPONENT
// ============================================================================

const Pagination = ({ 
  currentPage = 1, 
  totalPages = 1, 
  onChange 
}) => {
  const pages = [];
  const maxVisiblePages = 5;
  
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center', marginTop: '24px' }}>
      <button 
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="btn btn-secondary"
        style={{ minWidth: '40px' }}
      >
        ← Prev
      </button>
      
      {startPage > 1 && (
        <>
          <button className="btn btn-secondary" onClick={() => onChange(1)}>1</button>
          {startPage > 2 && <span>...</span>}
        </>
      )}
      
      {Array.from({ length: endPage - startPage + 1 }).map((_, i) => (
        <button
          key={startPage + i}
          onClick={() => onChange(startPage + i)}
          className={`btn ${currentPage === startPage + i ? 'btn-primary' : 'btn-secondary'}`}
          style={{ minWidth: '40px' }}
        >
          {startPage + i}
        </button>
      ))}
      
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span>...</span>}
          <button className="btn btn-secondary" onClick={() => onChange(totalPages)}>{totalPages}</button>
        </>
      )}
      
      <button 
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="btn btn-secondary"
        style={{ minWidth: '40px' }}
      >
        Next →
      </button>
    </div>
  );
};

// ============================================================================
// EXPORT ALL COMPONENTS
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Button,
    Card,
    StatCard,
    DataTable,
    Modal,
    Alert,
    Badge,
    Loader,
    FormGroup,
    Input,
    Select,
    ProgressBar,
    Tabs,
    Pagination
  };
}
