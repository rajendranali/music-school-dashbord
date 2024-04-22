

# Music School Management System

## Overview
This project is a Music School Management System built using React for the frontend and JSON Server for the backend. It allows users to manage courses, enrollments, and user authentication.

## Features
- Display courses available at the music school.
- View latest enrollments and best enrollments.
- Login and logout functionality with authentication.
- Access control based on user authentication.

## Technologies Used
- **Frontend:** React, React Router, Redux
- **Backend:** JSON Server
- **Styling:** Tailwind CSS
- **Icons:** React Icons

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd music-school-management-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the JSON Server:
   ```bash
   json-server --watch db.json --port 3001
   ```
   This will start the JSON Server on port 3001 using the data provided in `db.json`.
5. Start the React development server:
   ```bash
   npm start
   ```
   This will start the React development server.

## JSON Server Endpoints
- **Courses:** http://localhost:3001/courses
- **Latest Enrollment Columns:** http://localhost:3001/latestenrollmentcolumn
- **Latest Enrollment Data:** http://localhost:3001/latestenrollmemtdata
- **Best Enrollment Columns:** http://localhost:3001/bestenrollmentcolumn
- **Best Enrollment Data:** http://localhost:3001/bestenrollmemtdata
- **Login Data:** http://localhost:3001/login

## Folder Structure
- **`public/`**: Contains static assets and HTML template.
- **`src/`**: Contains the React application source code.
  - **`components/`**: Contains reusable components used throughout the application.
  - **`pages/`**: Contains page components.
  - **`redux/`**: Contains Redux-related files such as actions, reducers, and store configuration.
  - **`styles/`**: Contains global styles and utility classes.
  - **`App.js`**: Main component where routing is defined.
  - **`index.js`**: Entry point of the application.

## Additional Notes
- This project uses Tailwind CSS for styling. You can customize the styles by modifying the classes in the components.
- Make sure to update the API URLs in case you deploy the application to a different environment.

---
