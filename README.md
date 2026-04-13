# IIT BOMBAY FOSSEE Workshop Booking System

> A comprehensive, production-ready workshop booking and management system built with modern React/JavaScript libraries and Django backend. Designed for national educational initiatives and seamless workshop coordination.

![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Django](https://img.shields.io/badge/Django-4.2-092E20?logo=django)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [React Component Architecture](#react-component-architecture)
- [Installation & Setup](#installation--setup)
- [Development Workflow](#development-workflow)
- [Deployment Guide](#deployment-guide)
- [Methodologies & Design Patterns](#methodologies--design-patterns)
- [API Integration](#api-integration)
- [Contributing Guidelines](#contributing-guidelines)
- [Screenshots](#screenshots)
- [License](#license)

---

## 🎯 Project Overview

The **IIT BOMBAY FOSSEE Workshop Booking System** is a comprehensive digital solution for managing workshop registrations, bookings, statistics, and team coordination at an institutional level. This system supports multiple user roles (Admin, Instructors, Coordinators) with role-based access control and real-time analytics.

**National Project Scope:**
- 🏫 Institution-level workshop management
- 👥 Support for multiple teams and coordinators
- 📊 Real-time analytics and reporting
- 📧 Automated email notifications
- 🔐 Enterprise-grade security
- ♿ WCAG AA accessibility compliance

---

## ✨ Key Features

### Frontend (React)
- ⚡ **Lightning Fast** - Vite-powered development with instant HMR (Hot Module Replacement)
- 🎨 **Modern Material Design 3 UI** - Professional, responsive design system
- 📱 **Fully Responsive** - Works seamlessly from mobile (320px) to 4K displays
- 🔐 **Secure Authentication** - JWT-based authentication with role-based access control
- 📊 **Real-time Analytics Dashboard** - Live workshop statistics and analytics
- ♿ **Accessibility First** - WCAG AA compliant
- 🎬 **Smooth Animations** - 60fps scroll animations with Intersection Observer

### Backend (Django)
- 🔒 **Robust Security** - CSRF protection, secure password management
- 📧 **Email Integration** - Automated workshop reminders and notifications
- 📈 **Advanced Analytics** - Statistical analysis of workshop trends
- 🔄 **Recurring Workshops** - Support for recurring workshop schedules
- 📱 **RESTful API** - Clean, well-documented API endpoints

---

## 🛠 Technology Stack

### Frontend Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Framework | 18.2.0 |
| **React Router DOM** | Client-side routing | 6.20.0 |
| **Vite** | Build tool & dev server | 5.0.8 |
| **Axios** | HTTP client | 1.6.0 |
| **CSS3** | Styling with CSS Variables | Modern |
| **Chart.js** | Data visualization | 4.4.0 |

### Backend Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **Django** | Web framework | 4.2+ |
| **Django-Recurrence** | Recurring event support | Latest |
| **Pandas** | Data analysis | Latest |
| **Python-Decouple** | Configuration management | 3.3 |

### Development Tools
- **Git** - Version control
- **GitHub** - Repository hosting
- **npm** - Package management (React)
- **pip** - Package management (Django)

---

## 🏗 Architecture

### System Architecture Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENT LAYER (Browser)                   │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  React 18 Application (Vite-powered)                   │ │
│  │  - Navigation Component                                 │ │
│  │  - Dashboard (Analytics & Statistics)                   │ │
│  │  - Workshop Management Pages                            │ │
│  │  - Admin Panel                                          │ │
│  │  - Login/Authentication                                 │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                           ↓ (HTTP/REST)
┌─────────────────────────────────────────────────────────────┐
│                  API GATEWAY LAYER                           │
│  - Axios HTTP Client                                        │
│  - Request/Response Interceptors                            │
│  - Error Handling & Retry Logic                             │
└─────────────────────────────────────────────────────────────┘
                           ↓ (REST API)
┌─────────────────────────────────────────────────────────────┐
│               BACKEND LAYER (Django)                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ workshop_app                                         │  │
│  │ - Workshop Management (CRUD)                         │  │
│  │ - Email Reminders & Notifications                    │  │
│  │ - Recurring Schedule Management                      │  │
│  │ - Registration Processing                            │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ statistics_app                                       │  │
│  │ - Analytics & Reporting                              │  │
│  │ - Data Aggregation                                   │  │
│  │ - Statistical Analysis                               │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ teams                                                │  │
│  │ - Team Management                                    │  │
│  │ - User Role Management                               │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│                 DATA LAYER                                   │
│  - SQLite3 Database (Development)                            │
│  - Production: PostgreSQL/MySQL                              │
│  - Migrations: Django ORM                                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
IIT-BOMBAY-FOSSEE-SCREENING-TEST/
├── react-frontend/                      # React Application
│   ├── src/
│   │   ├── components/                  # Reusable UI Components
│   │   │   ├── Navigation.jsx           # Main navigation/header
│   │   │   └── Navigation.css
│   │   ├── pages/                       # Page Components
│   │   │   ├── Login.jsx                # Authentication page
│   │   │   ├── Dashboard.jsx            # Analytics dashboard
│   │   │   ├── AdminPanel.jsx           # Admin controls
│   │   │   ├── Workshop.jsx             # Workshop details
│   │   │   └── WorkshopList.jsx         # Workshops listing
│   │   ├── services/                    # API client services
│   │   │   └── api.js                   # Axios configuration
│   │   ├── App.jsx                      # Main app component
│   │   ├── main.jsx                     # React entry point
│   │   ├── App.css                      # Global styles
│   │   └── index.css                    # Root styles
│   ├── package.json                     # Dependencies configuration
│   ├── vite.config.js                   # Vite configuration
│   └── README.md                        # Frontend documentation
│
├── workshop_booking/                    # Django Project Root
│   ├── workshop_portal/                 # Main Django project settings
│   │   ├── settings.py                  # Django settings
│   │   ├── urls.py                      # URL routing
│   │   ├── wsgi.py                      # WSGI application
│   │   └── views.py
│   │
│   ├── workshop_app/                    # Workshop Management App
│   │   ├── models.py                    # Workshop data models
│   │   ├── views.py                     # View logic
│   │   ├── urls.py                      # App URL routing
│   │   ├── forms.py                     # Django forms
│   │   ├── admin.py                     # Django admin config
│   │   ├── reminder_script.py           # Email reminder automation
│   │   ├── send_mails.py                # Email dispatch
│   │   ├── static/                      # Static assets
│   │   │   └── css/, js/                # Theme & animations
│   │   ├── templates/                   # HTML templates
│   │   ├── migrations/                  # Database migrations
│   │   └── tests/                       # Unit tests
│   │
│   ├── statistics_app/                  # Analytics Module
│   │   ├── models.py                    # Statistics models
│   │   ├── views.py                     # Analytics views
│   │   ├── forms.py                     # Report forms
│   │   ├── templates/                   # Analytics templates
│   │   └── static/                      # Chart.js charts
│   │
│   ├── teams/                           # Team Management
│   │   ├── models.py                    # Team/User models
│   │   ├── views.py                     # Team views
│   │   └── migrations/
│   │
│   ├── cms/                             # Content Management
│   │   ├── models.py
│   │   ├── views.py
│   │   └── templates/
│   │
│   ├── manage.py                        # Django CLI
│   ├── requirements.txt                 # Python dependencies
│   ├── db.sqlite3                       # Development database
│   └── local_settings.py                # Local configuration
│
├── DOCUMENTATION_INDEX.md               # Doc index
├── FINAL_README.md                      # Final submission README
├── START_HERE.md                        # Quick start guide
└── README.md                            # This file
```

---

## ⚛️ React Component Architecture

### Component Hierarchy

```
App (Root)
├── Navigation
│   └── Header with navigation links
├── Router
│   ├── Login (Authentication)
│   ├── Dashboard (Analytics)
│   │   ├── StatisticsCards
│   │   ├── Charts
│   │   └── RecentActivity
│   ├── Workshop (Booking Interface)
│   │   ├── WorkshopDescription
│   │   ├── RegistrationForm
│   │   └── ParticipantList
│   ├── WorkshopList (Directory)
│   │   ├── SearchFilters
│   │   ├── WorkshopCards
│   │   └── Pagination
│   └── AdminPanel (Management)
│       ├── UserManagement
│       ├── WorkshopControls
│       ├── EmailTemplates
│       └── SystemSettings
└── Footer
```

### Component Communication Pattern

```
Parent Component (Container)
    ↓
Pass Props Down
    ↓
Child Components (Presentational)
    ↓
User Interaction
    ↓
Callback Props → Parent
    ↓
Update State → API Call (Axios)
    ↓
Response → Update State
    ↓
Re-render with New Props
```

### Key Components Explained

| Component | Purpose | Type | Features |
|-----------|---------|------|----------|
| `Navigation.jsx` | Header/sidebar nav | Container | Route links, user profile, logout |
| `Dashboard.jsx` | Analytics dashboard | Container | Charts, statistics, real-time data |
| `Login.jsx` | Authentication | Form | JWT token handling, error messages |
| `Workshop.jsx` | Workshop details | Container | Registration form, participant list |
| `AdminPanel.jsx` | Admin controls | Container | User management, workshop approvals |
| `WorkshopList.jsx` | Workshop directory | Container | Search, filter, pagination |

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ with npm
- Python 3.9+
- Git

### Backend Setup

```bash
# Navigate to project root
cd d:\MASTER_BIBASWAN_SARKAR\IIIT\ MANIPUR\SEM\ II\IIT\ BOMBAY\ FOSSEE\ SCREENING\ TEST

# Create virtual environment
python -m venv .venv

# Activate virtual environment
# Windows:
.\.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate

# Install dependencies
cd workshop_booking
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

### Frontend Setup

```bash
# Navigate to React app
cd react-frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🚀 Development Workflow

### Branching Strategy (Git Flow)

```
main (Production)
├── release/v1.0.0
├── hotfix/bug-fix
└── develop (Development)
    ├── feature/user-auth
    ├── feature/workshop-booking
    ├── feature/analytics-dashboard
    └── bugfix/login-issue
```

### Development Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/feature-name
   ```

2. **Make Changes & Commit**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. **Follow Commit Convention**
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation
   - `style:` - Formatting
   - `refactor:` - Code restructuring
   - `test:` - Test additions

4. **Push & Create Pull Request**
   ```bash
   git push origin feature/feature-name
   ```

---

## 🌐 Deployment Guide

### Development Environment
```bash
# Terminal 1: Django backend
cd workshop_booking
python manage.py runserver

# Terminal 2: React frontend
cd react-frontend
npm run dev
```

### Production Deployment

#### Backend Deployment
```bash
# Collect static files
python manage.py collectstatic --noinput

# Apply migrations
python manage.py migrate

# Deploy with Gunicorn/uWSGI
gunicorn workshop_portal.wsgi:application --bind 0.0.0.0:8000
```

#### Frontend Deployment
```bash
# Build optimized bundle
npm run build

# Deploy to GitHub Pages, Vercel, or Netlify
# GitHub Pages:
npm run build  # Creates dist/ folder
# Push dist/ to GitHub Pages

# OR use Vercel:
vercel --prod

# OR use Netlify:
netlify deploy --prod --dir dist
```

### Environment Configuration

**Backend (.env file)**
```
DEBUG=False
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
DATABASE_URL=postgresql://user:password@localhost/dbname
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
```

**Frontend (.env file)**
```
VITE_API_URL=https://api.yourdomain.com
VITE_APP_NAME=FOSSEE Workshop Booking
VITE_ENV=production
```

---

## 🎨 Methodologies & Design Patterns

### Software Architecture Patterns

#### 1. **Component-Based Architecture**
- **Principle:** Break UI into reusable, self-contained components
- **Benefits:** Maintainability, reusability, testability
- **Implementation:**
  ```jsx
  // Reusable Workshop Card Component
  const WorkshopCard = ({ workshop, onRegister }) => (
    <div className="workshop-card">
      <img src={workshop.image} alt={workshop.title} />
      <h3>{workshop.title}</h3>
      <p>{workshop.description}</p>
      <button onClick={() => onRegister(workshop.id)}>Register</button>
    </div>
  );
  ```

#### 2. **Container/Presentational Pattern**
- **Containers:** Handle logic, state, API calls
- **Presentational:** Receive props, render UI
- **Example:**
  ```jsx
  // Container Component
  const DashboardContainer = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
      api.getStatistics().then(setData);
    }, []);
    
    return <DashboardPresentation data={data} />;
  };
  
  // Presentational Component
  const DashboardPresentation = ({ data }) => (
    <div className="dashboard">
      {data.map(item => <Card key={item.id} {...item} />)}
    </div>
  );
  ```

#### 3. **Model-View-Controller (MVC) - Django Backend**
- **Model:** Data models (Workshop, Team, User)
- **View:** Business logic (workshop creation, registration)
- **Controller:** URL routing and request handling

#### 4. **Service Layer Pattern**
- Centralized API communication
- Request/response interception
- Error handling and retry logic

```javascript
// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### Development Methodologies

#### 1. **Test-Driven Development (TDD)**
```
Red → Green → Refactor
1. Write failing test
2. Write code to pass test
3. Refactor for optimization
```

#### 2. **Agile/Scrum Approach**
- Sprint duration: 2 weeks
- Daily standups
- Sprint reviews and retrospectives
- Sprint planning and backlog refinement

#### 3. **Continuous Integration/Continuous Deployment (CI/CD)**
- Automated testing on each commit
- Automated deployment on main branch merge
- GitHub Actions workflow

#### 4. **Code Quality Standards**
- ESLint for JavaScript/React
- Black/Flake8 for Python
- Pre-commit hooks for code validation
- Code review process mandatory

---

## 🔌 API Integration

### REST API Endpoints

**Authentication**
```
POST   /api/auth/login          # User login
POST   /api/auth/logout         # User logout
POST   /api/auth/refresh-token  # Refresh JWT token
```

**Workshops**
```
GET    /api/workshops           # List all workshops
GET    /api/workshops/{id}      # Get workshop details
POST   /api/workshops           # Create workshop (Admin)
PUT    /api/workshops/{id}      # Update workshop (Admin)
DELETE /api/workshops/{id}      # Delete workshop (Admin)
```

**Registrations**
```
POST   /api/workshops/{id}/register     # Register for workshop
GET    /api/workshops/{id}/participants # Get participants
DELETE /api/registrations/{id}          # Cancel registration
```

**Statistics**
```
GET    /api/statistics/summary          # General statistics
GET    /api/statistics/workshops        # Workshop analytics
GET    /api/statistics/participants     # Participant trends
```

### Axios Request Examples

```javascript
import api from './services/api';

// Login
const login = (username, password) => 
  api.post('/api/auth/login', { username, password });

// Get workshops
const getWorkshops = () => api.get('/api/workshops');

// Register for workshop
const registerWorkshop = (workshopId) => 
  api.post(`/api/workshops/${workshopId}/register`);
```

---

## 🤝 Contributing Guidelines

### How to Contribute

1. **Fork the Repository**
   ```bash
   git clone https://github.com/RespectedBibaswanSarkar/IIT-BOMBAY-FOSSEE-SCREENING-TEST.git
   cd IIT-BOMBAY-FOSSEE-SCREENING-TEST
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature
   ```

3. **Follow Code Style**
   - React: Functional components with hooks
   - Python: PEP 8 standards
   - Naming: camelCase for JS, snake_case for Python

4. **Write Tests**
   - Minimum 80% code coverage
   - Test both happy path and error scenarios

5. **Commit & Push**
   ```bash
   git commit -m "feat: add new feature"
   git push origin feature/your-feature
   ```

6. **Create Pull Request**
   - Provide detailed description
   - Reference related issues
   - Include screenshots/GIFs if UI changes

---

## 📸 Screenshots

### Dashboard Analytics
```
[Dashboard showing workshop statistics, participant trends, and real-time data visualization]
```

### Workshop Registration Interface
```
[Workshop booking page with registration form and available slots]
```

### Admin Panel
```
[Admin interface for workshop management and user control]
```

### Login Page
```
[Secure authentication interface with role-based access]
```

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Bibaswan Sarkar**
- Email: [Your Email]
- GitHub: [@RespectedBibaswanSarkar](https://github.com/RespectedBibaswanSarkar)
- Resume/Portfolio: [Your Website]

---

## 📞 Support & Documentation

- **Documentation:** See [DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md)
- **Quick Start:** See [START_HERE.md](START_HERE.md)
- **Issues:** [GitHub Issues](https://github.com/RespectedBibaswanSarkar/IIT-BOMBAY-FOSSEE-SCREENING-TEST/issues)

---

## 🎓 Acknowledgments

- **IIT Bombay FOSSEE** - National initiative for free and open-source software
- **Django Community** - Backend framework and ecosystem
- **React Community** - UI framework and libraries
- **IIIT Manipur** - Education and support

---

**Last Updated:** April 13, 2026  
**Status:** ✅ Production Ready  
**Version:** 1.0.0
