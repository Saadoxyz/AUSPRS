# Air University Student Portal Registration System (AUSPRS)

Welcome to the official GitHub repository for the **Air University Student Portal Registration System (AUSPRS)**. This repository documents the entire lifecycle of a comprehensive mobile and web-based student portal application developed as part of our Visual Programming and Mobile Computing projects.

## 🚀 Project Overview

The AUSPRS app is a modern solution for managing academic activities, student data, real-time communication, and AI-powered assistance for university students and staff. Built using Flutter (Dart), Firebase, SQL Server, and integrated with APIs such as ChatGPT and Google Analytics, this application aims to centralize all university-related functionalities.

---

## 📌 Table of Contents

1. [Key Features](#key-features)
2. [Technology Stack](#technology-stack)
3. [Problems Addressed](#problems-addressed)
4. [Screenshots](#screenshots)
5. [Figma Design](#figma-design)
6. [Database Schema](#database-schema)
7. [Setup Instructions](#setup-instructions)
8. [Team Contributions](#team-contributions)
9. [Conclusion](#conclusion)

---

## 💡 Key Features

### 🧑‍💻 User Authentication

* Secure login and registration using Firebase Auth
* Splash screen & onboarding flow

### 📊 Student Dashboard

* Central control panel for students
* Displays attendance, GPA tracking, announcements, and more

### 📚 Course Registration

* Smart filtering based on prerequisites and eligibility
* Connects with Firestore and SQL Server

### 📅 Attendance & Leave Portal

* Upload documents for leave requests
* Automated attendance justification
* Calendar UI integrated with backend logic

### 📬 Real-Time Chat & Inbox

* SignalR integration for live messaging with advisors/admin
* Inbox view and notification system

### 🤖 AI Chat Assistant

* Integrated OpenAI ChatGPT for student support

### 📄 Announcements & News Feed

* Firestore and SQL-driven announcement system
* Admin-controlled broadcasting

### 🗂️ Forms and Guidebooks

* Upload/download academic and admin forms

### 🔍 Dictionary & FAQ

* Built-in dictionary for academic terms
* FAQ page with common queries and live assistant fallback

### 🏛️ Undergraduate & Postgraduate Programs

* Dynamic program information with downloadable brochures

### 👥 Societies and Clubs

* Registration portal for student clubs
* Event posting and membership tracking

### 🌐 Google Classroom

* Seamless redirection to Google Classroom

### 📩 Feedback and Complaints

* Anonymous complaint submission
* Feedback analytics stored securely

### 🎓 Internship and Job Listings

* Central job board for students
* Integrated with Firebase and JS backend

---

## 🧰 Technology Stack

### 🖥 Frontend

* ASP .NET 8.0
* JavaScript / HTML / CSS
* Razor Pages (C#)

### 🔧 Backend

* Firebase Firestore
* Firebase Authentication
* SQL Server with SSMS
* ASP.NET Core with SignalR
* ChatGPT API
* Google Cloud Analytics

---

## 📌 Problems Addressed

| Problem                                   | Solution                                                |
| ----------------------------------------- | ------------------------------------------------------- |
| No unified student platform               | Built centralized portal covering all key student needs |
| Manual attendance and leave forms         | Automated attendance justification with document upload |
| Confusion in course registration          | Smart filters and prerequisite checkers                 |
| Missed opportunities (internships/events) | Announcement + job listing system                       |
| No structured complaints or feedback      | Anonymous structured form submission                    |
| Difficulty communicating with admin       | Real-time chat using SignalR                            |
| Outdated student records                  | Profile management page                                 |

---

## 📷 Screenshots

* Login & Splash Screen
* Student Dashboard
* Timetable Page
* Course Registration Page
* Chat AI & Inbox
* Leave Management Calendar
* Societies and Clubs Portal
* Past Papers Access
* GPA Tracker
* Forms Page & Google Classroom Integration

> Refer to the `/screenshots` directory in the repo or see detailed visual design in the Figma section.

---

## 🎨 Figma Design

The application interface was first designed in Figma to ensure a clean, responsive, and modern UI.

View Screenshots: `/figma/` (See report PDF for visual breakdown)

---

## 🗃️ Database Schema

### Main Entities

* **Student Profile**: Name, CNIC, Contact, Gender, etc.
* **Course Enrollment**: CourseName, RegistrationId, ClassId, Date
* **Attendance**: Date, Status, Justification, Document
* **Leave Requests**: Reason, Date, Status, Supporting File
* **Messages/Chats**: Sender, Receiver, Timestamp, Message

> For full ERD and table breakdown, refer to the `Database_Schema.md` or the VP\_REPORT.pdf under `docs/`

---

## ⚙️ Setup Instructions

### Prerequisites

* Flutter SDK
* Android Studio or VS Code
* Firebase Project setup (Auth + Firestore)
* SQL Server instance (can be local)
* .NET Core installed
* Google API key (for Analytics)
* OpenAI API Key

### Installation

```bash
flutter pub get
```

### Running the App

```bash
flutter run
```

### Firebase Setup

* Replace `google-services.json` in `/android/app/`
* Enable Email/Password auth in Firebase Console

### SQL Server Setup

* Import `schema.sql` in your local SSMS
* Configure API endpoints in the `.env` or `api_service.dart`

---

## 🧪 Testing & Quality Assurance

* ✅ Functional Testing (Login, CRUD ops)
* ✅ Performance Testing (SignalR with 100+ users)
* ✅ Beta Testing with 50 students
* ✅ User Acceptance Testing

---

## 🧠 Innovations

* ChatGPT-powered student assistant
* SQL + Firebase hybrid backend
* SignalR-based live chat
* Anonymous complaint system
* Real-time calendar & document tracking

---

## 📌 Conclusion

The Student Portal Registration System is a scalable, secure, and smart academic platform that addresses real challenges faced by university students. With AI integration, role-based dashboards, and real-time functionality, this project stands as a model for smart campus solutions.

> For full project details, visit the [docs folder](./docs/) or explore the source report in `VP_PROJECT.pdf`

---

## 📬 Contact & Feedback

For inquiries, suggestions, or collaborations:

* 📧 Email: [saadok652004@gmail.com](mailto:saadok652004@gmail.com)
* 💬 GitHub Issues
