/* ============================================================================
   REACT LOGIN COMPONENT - Modern Glassmorphism Design
   ============================================================================ */

import React, { useState, useRef, useEffect } from 'react';
import '../styles/modern-glassmorphism.css';

const ModernLoginComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const usernameInputRef = useRef(null);

  useEffect(() => {
    // Auto-focus on username input
    usernameInputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1200));

      // In real implementation, send to Django backend
      console.log('Login attempt:', formData);

      // Success message would go here
      alert('Login successful! Redirecting...');
    } catch (error) {
      setErrors({
        general: 'An error occurred during login. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="login-container" style={{ width: '100%', maxWidth: '420px', padding: '16px' }}>
        
        {/* Animated Background Gradient */}
        <div className="bg-gradient" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.02) 0%, transparent 50%)',
          zIndex: '-1'
        }} />

        {/* Login Card */}
        <div className="card glass-card" style={{
          width: '100%',
          animation: 'slideUp 0.6s cubic-bezier(0.0, 0, 0.2, 1)',
        }}>

          {/* Card Header */}
          <div className="card-header" style={{ justifyContent: 'center', flexDirection: 'column', textAlign: 'center', borderBottomWidth: '1px' }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '12px',
              textAlign: 'center',
              color: '#00D9FF',
              textShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
              animation: 'floatIn 0.8s ease-out'
            }}>
              🔐
            </div>
            <h1 style={{
              fontSize: '32px',
              marginBottom: '8px',
              background: 'linear-gradient(135deg, #00D9FF, #FF00FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '700'
            }}>
              Welcome Back
            </h1>
            <p style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '0'
            }}>
              Sign in to your FOSSEE account
            </p>
          </div>

          {/* Card Body */}
          <div className="card-body" style={{ paddingTop: '24px' }}>

            {/* General Error Alert */}
            {errors.general && (
              <div className="alert alert-error" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: 'rgba(255, 0, 85, 0.05)',
                border: '2px solid #FF0055',
                borderRadius: '8px',
                color: '#FF0055',
                animation: 'slideDown 0.3s ease-out',
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '20px' }}>⚠️</span>
                <span style={{ fontSize: '14px' }}>{errors.general}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* CSRF Token (for Django) */}
              <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}" />

              {/* Username Field */}
              <div className="form-group" style={{ animation: 'slideUp 0.5s cubic-bezier(0.0, 0, 0.2, 1)' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#E8E8FF'
                }}>
                  <span style={{
                    fontSize: '20px',
                    color: focusedField === 'username' ? '#00D9FF' : 'rgba(255, 255, 255, 0.5)',
                    transition: 'color 0.3s ease'
                  }}>
                    👤
                  </span>
                  Username
                </label>
                <input
                  ref={usernameInputRef}
                  type="text"
                  name="username"
                  className={`input-field ${errors.username ? 'error' : ''}`}
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('username')}
                  onBlur={() => setFocusedField(null)}
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: errors.username ? '2px solid #FF0055' : focusedField === 'username' ? '2px solid #00D9FF' : '2px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: '#E8E8FF',
                    fontSize: '14px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: focusedField === 'username' ? '0 0 15px rgba(0, 217, 255, 0.3)' : 'none',
                    backdropFilter: 'blur(20px)',
                  }}
                />
                {errors.username && (
                  <span style={{
                    fontSize: '12px',
                    color: '#FF0055',
                    marginTop: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    animation: 'slideDown 0.2s ease-out'
                  }}>
                    <span>❌</span> {errors.username}
                  </span>
                )}
              </div>

              {/* Password Field */}
              <div className="form-group" style={{ animation: 'slideUp 0.5s cubic-bezier(0.0, 0, 0.2, 1) 0.1s both' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#E8E8FF'
                }}>
                  <span style={{
                    fontSize: '20px',
                    color: focusedField === 'password' ? '#00D9FF' : 'rgba(255, 255, 255, 0.5)',
                    transition: 'color 0.3s ease'
                  }}>
                    🔒
                  </span>
                  Password
                </label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className={`input-field ${errors.password ? 'error' : ''}`}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    disabled={isLoading}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      paddingRight: '40px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: errors.password ? '2px solid #FF0055' : focusedField === 'password' ? '2px solid #00D9FF' : '2px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      color: '#E8E8FF',
                      fontSize: '14px',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: focusedField === 'password' ? '0 0 15px rgba(0, 217, 255, 0.3)' : 'none',
                      backdropFilter: 'blur(20px)',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '12px',
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255, 255, 255, 0.6)',
                      cursor: 'pointer',
                      fontSize: '18px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00D9FF'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
                  >
                    {showPassword ? '👁️' : '🙈'}
                  </button>
                </div>
                {errors.password && (
                  <span style={{
                    fontSize: '12px',
                    color: '#FF0055',
                    marginTop: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    animation: 'slideDown 0.2s ease-out'
                  }}>
                    <span>❌</span> {errors.password}
                  </span>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.6)',
                animation: 'slideUp 0.5s cubic-bezier(0.0, 0, 0.2, 1) 0.2s both'
              }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="remember_me"
                    style={{
                      width: '16px',
                      height: '16px',
                      cursor: 'pointer',
                      accentColor: '#00D9FF'
                    }}
                  />
                  Remember me
                </label>
                <a href="/password_reset/" style={{
                  color: '#00D9FF',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FF00FF';
                  e.target.style.textShadow = '0 0 10px rgba(255, 0, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#00D9FF';
                  e.target.style.textShadow = 'none';
                }}>
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  background: isLoading ? 'rgba(0, 217, 255, 0.3)' : 'linear-gradient(135deg, #00D9FF, rgba(0, 217, 255, 0.6))',
                  border: '2px solid #00D9FF',
                  color: '#000000',
                  fontSize: '14px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderRadius: '12px',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  boxShadow: isLoading ? 'none' : '0 0 20px rgba(0, 217, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  animation: 'slideUp 0.5s cubic-bezier(0.0, 0, 0.2, 1) 0.3s both'
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.6), 0 0 50px rgba(0, 217, 255, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.2)';
                  }
                }}
              >
                {isLoading ? (
                  <>
                    <span style={{
                      display: 'inline-block',
                      width: '16px',
                      height: '16px',
                      border: '2px solid transparent',
                      borderTopColor: 'currentColor',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite'
                    }} />
                    Signing in...
                  </>
                ) : (
                  <>
                    <span>→</span>
                    Sign In
                  </>
                )}
              </button>

            </form>

            {/* Divider */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              margin: '24px 0',
              color: 'rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
              <span style={{ fontSize: '12px' }}>or</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
            </div>

            {/* Registration Link */}
            <button
              onClick={() => window.location.href = '/register/'}
              className="btn btn-outline"
              style={{
                width: '100%',
                padding: '12px 24px',
                background: 'transparent',
                border: '2px solid #00FF41',
                color: '#00FF41',
                fontSize: '14px',
                fontWeight: '600',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 10px rgba(0, 255, 65, 0.1)',
                animation: 'slideUp 0.5s cubic-bezier(0.0, 0, 0.2, 1) 0.4s both'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(0, 255, 65, 0.05)';
                e.target.style.transform = 'scale(1.02)';
                e.target.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 0 10px rgba(0, 255, 65, 0.1)';
              }}
            >
              ✨ Create New Account
            </button>

          </div>

          {/* Card Footer */}
          <div style={{
            marginTop: '24px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.4)'
          }}>
            <p>Default credentials for testing: <strong style={{ color: '#00D9FF' }}>admin / admin123</strong></p>
            <p>© 2026 FOSSEE Workshops. All rights reserved.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ModernLoginComponent;
