# Nature Website - React Router Navigation Demo

![image](https://github.com/user-attachments/assets/8e2d8f65-4a0e-44b2-8b0d-6b6b4b8ae96c)


A modern React application demonstrating route handling and navigation using React Router v7. The project features a clean, responsive UI built with Tailwind CSS.

## Features

- **Dynamic Routing**: Implements nested routes and navigation using React Router DOM
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Modern UI Components**: 
  - Home page with hero image and login functionality
  - About page with nested team member display
  - Contact form with modern styling
  - Protected dashboard route
  - 404 error handling page

## Key Components

- **Navigation Bar**: Persistent top navigation with Home, About, and Contact links
- **Current Location Tracker**: Shows user's current position in the application
- **Team Display**: Grid layout showcasing team members with hover effects
- **Contact Form**: Styled form with input validation
- **Dashboard**: Protected route accessed after login

  ![routing-nature-website](https://github.com/user-attachments/assets/11d913ca-0e3a-4bea-a3c5-f288c1f6b489)


## Technical Stack

- React 19
- React Router DOM 7
- Tailwind CSS 4
- Vite 6
- ESLint for code quality

## Getting Started

1. Clone the repository
2. Install dependencies:
```sh
npm install
```

3. Run the development server:
```sh
npm run dev
```

## Project Structure

```
src/
  ├── components/
  │   ├── About.jsx
  │   ├── Contact.jsx
  │   ├── CurrentLocation.jsx
  │   ├── Dashboard.jsx
  │   ├── Home.jsx
  │   ├── NotFound.jsx
  │   └── Team.jsx
  ├── App.jsx
  └── main.jsx
```

## License

This project is open source and available under the MIT license.
