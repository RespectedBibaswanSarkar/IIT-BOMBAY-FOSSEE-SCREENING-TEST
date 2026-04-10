/* ============================================================================
   REACT REGISTER COMPONENT - Modern Glassmorphism Design
   ============================================================================ */

import React, { useState, useEffect } from 'react';
import '../styles/modern-glassmorphism.css';

const ModernRegisterComponent = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password1: '',
    password2: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPasswords, setShowPasswords] = useState({
    password1: false,
    password2: false
  });
  const [focusedField, setFocusedField] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    return strength;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password1') {
      setPasswordStrength(calculatePasswordStrength(value));
    }

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First name is required';
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.password1) {
      newErrors.password1 = 'Password is required';
    } else if (formData.password1.length < 8) {
      newErrors.password1 = 'Password must be at least 8 characters';
    } else if (passwordStrength < 3) {
      newErrors.password1 = 'Password is too weak (must have uppercase, lowercase, and numbers)';
    }

    if (!formData.password2) {
      newErrors.password2 = 'Please confirm your password';
    } else if (formData.password1 !== formData.password2) {
      newErrors.password2 = 'Passwords do not match';
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
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Registration attempt:', formData);
      alert('Registration successful! You will be redirected to login.');
    } catch (error) {
      setErrors({
        general: 'An error occurred during registration. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 1) return '#FF0055';
    if (passwordStrength <= 2) return '#FFC800';
    if (passwordStrength <= 3) return '#FFD700';
    if (passwordStrength <= 4) return '#00FF41';
    return '#00FF41';
  };

  const getPasswordStrengthText = () => {
    const texts = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
    return texts[passwordStrength] || 'Very Weak';
  };

  return (
    <div className="register-page" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '40px', paddingBottom: '40px' }}>
      <div className="register-container" style={{ width: '100%', maxWidth: '500px', padding: '16px' }}>

        {/* Animated Background */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 30% 50%, rgba(0, 217, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255, 0, 255, 0.02) 0%, transparent 50%)',
          zIndex: '-1'
        }} />

        {/* Register Card */}
        <div className="card glass-card" style={{
          width: '100%',
          animation: 'slideUp 0.6s cubic-bezier(0.0, 0, 0.2, 1)',
        }}>

          {/* Card Header */}
          <div className="card-header" style={{ justifyContent: 'center', flexDirection: 'column', textAlign: 'center', borderBottomWidth: '1px' }}>
            <div style={{
              fontSize: '44px',
              marginBottom: '12px',
              textAlign: 'center',
              animation: 'floatIn 0.8s ease-out'
            }}>
              ✨
            </div>
            <h1 style={{
              fontSize: '32px',
              marginBottom: '8px',
              background: 'linear-gradient(135deg, #00D9FF, #00FF41)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '700'
            }}>
              Create Account
            </h1>
            <p style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '0'
            }}>
              Join FOSSEE to coordinate amazing workshops
            </p>
          </div>

          {/* Card Body */}
          <div className="card-body" style={{ paddingTop: '24px' }}>

            {/* General Error */}
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
                marginBottom: '16px',
                animation: 'slideDown 0.3s ease-out'
              }}>
                <span>⚠️</span>
                {errors.general}
              </div>
            )}

            {/* Registration Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}" />

              {/* Row: First Name & Last Name */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {/* First Name */}
                <div className="form-group" style={{ animation: 'slideUp 0.5s cubic-bezier(0.0, 0, 0.2, 1)' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#E8E8FF'
                  }}>
                    👤 First
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="John"
                    value={formData.first_name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('first_name')}
                    onBlur={() => setFocusedField(null)}
                    disabled={isLoading}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: errors.first_name ? '2px solid #FF0055' : focusedField === 'first_name' ? '2px solid #00D9FF' : '2px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      color: '#E8E8FF',
                      fontSize: '13px',
                      boxShadow: focusedField === 'first_name' ? '0 0 15px rgba(0, 217, 255, 0.3)' : 'none',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(20px)',
                    }}
                  />
                  {errors.first_name && (
                    <span style={{ fontSize: '11px', color: '#FF0055', marginTop: '4px' }}>❌ {errors.first_name}</span>
                  )}
                </div>

                {/* Last Name */}
                <div className="form-group" style={{ animation: 'slideUp 0.5s cubic-bezier(0.0, 0, 0.2, 1) 0.05s both' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#E8E8FF'
                  }}>
                    👤 Last
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Doe"
                    value={formData.last_name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('last_name')}
                    onBlur={() => setFocusedField(null)}
                    disabled={isLoading}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: errors.last_name ? '2px solid #FF0055' : focusedField === 'last_name' ? '2px solid #00D9FF' : '2px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      color: '#E8E8FF',
                      fontSize: '13px',
                      boxShadow: focusedField === 'last_name' ? '0 0 15px rgba(0, 217, 255, 0.3)' : 'none',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(20px)',
                    }}
                  />
                  {errors.last_name && (
                    <span style={{ fontSize: '11px', color: '#FF0055', marginTop: '4px' }}>❌ {errors.last_name}</span>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="form-group" style={{ animation: 'slideUp 0.5s cubic-bezier(0.0, 0, 0.2, 1) 0.1s both' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#E8E8FF'
                }}>
                  📧 Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: errors.email ? '2px solid #FF0055' : focusedField === 'email' ? '2px solid #00D9FF' : '2px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: '#E8E8FF',
                    fontSize: '14px',
                    boxShadow: focusedField === 'email' ? '0 0 15px rgba(0, 217, 255, 0.3)' : 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(20px)',
                  }}
                />
                {errors.email && (
                  <span style={{ fontSize: '12px', color: '#FF0055', marginTop: '4px' }}>❌ {errors.email}</span>
                )}
              </div>

              {/* Username */}
              <div className="form-group" style={{ animation: 'slideUp 0.5s cubic-bezier(0.0, 0, 0.2, 1) 0.15s both' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#E8E8FF'
                }}>
                  👥 Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="johndoe123"
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
                    boxShadow: focusedField === 'username' ? '0 0 15px rgba(0, 217, 255, 0.3)' : 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(20px)',
                  }}
                />
                {errors.username && (
                  <span style={{ fontSize: '12px', color: '#FF0055', marginTop: '4px' }}>❌ {errors.username}</span>
                )}
              </div>

              {/* Password */}
              <div className="form-group" style={{ animation: 'slideUp 0.5s cubic-bezier(0.0, 0, 0.2, 1) 0.2s both' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#E8E8FF'
                }}>
                  🔒 Password
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPasswords.password1 ? 'text' : 'password'}
                    name="password1"
                    placeholder="Create a strong password"
                    value={formData.password1}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('password1')}
                    onBlur={() => setFocusedField(null)}
                    disabled={isLoading}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      paddingRight: '40px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: errors.password1 ? '2px solid #FF0055' : focusedField === 'password1' ? '2px solid #00D9FF' : '2px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      color: '#E8E8FF',
                      fontSize: '14px',
                      boxShadow: focusedField === 'password1' ? '0 0 15px rgba(0, 217, 255, 0.3)' : 'none',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(20px)',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswords(prev => ({ ...prev, password1: !prev.password1 }))}
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255, 255, 255, 0.6)',
                      cursor: 'pointer',
                      fontSize: '18px',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00D9FF'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
                  >
                    {showPasswords.password1 ? '👁️' : '🙈'}
                  </button>
                </div>

                {/* Password Strength Indicator */}
                {formData.password1 && (
                  <div style={{
                    marginTop: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    animation: 'slideDown 0.3s ease-out'
                  }}>
                    <div style={{
                      flex: 1,
                      height: '4px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '2px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${(passwordStrength / 5) * 100}%`,
                        background: getPasswordStrengthColor(),
                        transition: 'all 0.3s ease',
                        boxShadow: `0 0 10px ${getPasswordStrengthColor()}`
                      }} />
                    </div>
                    <span style={{
                      fontSize: '12px',
                      color: getPasswordStrengthColor(),
                      fontWeight: '600',
                      minWidth: '50px'
                    }}>
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                )}

                {errors.password1 && (
                  <span style={{ fontSize: '12px', color: '#FF0055', marginTop: '4px', display: 'block' }}>❌ {errors.password1}</span>
                )}
              </div>

              {/* Confirm Password */}
              <div className="form-group" style={{ animation: 'slideUp 0.5s cubic-bezier(0.0, 0, 0.2, 1) 0.25s both' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#E8E8FF'
                }}>
                  🔐 Confirm Password
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPasswords.password2 ? 'text' : 'password'}
                    name="password2"
                    placeholder="Confirm your password"
                    value={formData.password2}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('password2')}
                    onBlur={() => setFocusedField(null)}
                    disabled={isLoading}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      paddingRight: '40px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: errors.password2 ? '2px solid #FF0055' : focusedField === 'password2' ? '2px solid #00D9FF' : formData.password2 && formData.password1 === formData.password2 ? '2px solid #00FF41' : '2px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      color: '#E8E8FF',
                      fontSize: '14px',
                      boxShadow: focusedField === 'password2' ? '0 0 15px rgba(0, 217, 255, 0.3)' : formData.password2 && formData.password1 === formData.password2 ? '0 0 15px rgba(0, 255, 65, 0.3)' : 'none',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(20px)',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswords(prev => ({ ...prev, password2: !prev.password2 }))}
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255, 255, 255, 0.6)',
                      cursor: 'pointer',
                      fontSize: '18px',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00D9FF'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
                  >
                    {showPasswords.password2 ? '👁️' : '🙈'}
                  </button>
                </div>
                {errors.password2 && (
                  <span style={{ fontSize: '12px', color: '#FF0055', marginTop: '4px', display: 'block' }}>❌ {errors.password2}</span>
                )}
                {formData.password2 && formData.password1 === formData.password2 && (
                  <span style={{ fontSize: '12px', color: '#00FF41', marginTop: '4px', display: 'block' }}>✅ Passwords match</span>
                )}
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
                  boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '8px',
                  animation: 'slideUp 0.5s cubic-bezier(0.0, 0, 0.2, 1) 0.3s both'
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.6)';
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
                    Creating Account...
                  </>
                ) : (
                  <>
                    <span>✨</span>
                    Create Account
                  </>
                )}
              </button>

            </form>

            {/* Already have account */}
            <div style={{
              marginTop: '20px',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '14px'
            }}>
              Already have an account?{' '}
              <a href="/login/" style={{
                color: '#00D9FF',
                textDecoration: 'none',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#FF00FF';
                e.target.style.textShadow = '0 0 10px rgba(255, 0, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#00D9FF';
                e.target.style.textShadow = 'none';
              }}>
                Sign In
              </a>
            </div>

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
            <p>By signing up, you agree to the Terms of Service</p>
            <p>© 2026 FOSSEE Workshops. All rights reserved.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ModernRegisterComponent;
