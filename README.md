# 🎬 React Movie Explorer

A modern, responsive single-page application built with React that allows users to explore movies, view details, search, filter by categories, and manage favorites.

![React](https://github.com/Yvette334/movie/blob/7c9571a4cf463e0378557eba369c404b45b7d7c6/Screenshot%202025-10-21%20221536.png)
![Vite](https://github.com/Yvette334/movie/blob/7c9571a4cf463e0378557eba369c404b45b7d7c6/Screenshot%202025-10-21%20221628.png)

## ✨ Features

### 🎯 Core Features
- **Movie Discovery**: Browse a comprehensive list of movies from TVMaze API
- **Movie Details**: View detailed information about each movie including summary, rating, and genres
- **Smart Search**: Real-time search functionality to find movies by title
- **Category Filtering**: Filter movies by genres like Drama, Action, Comedy, etc.
- **Favorites Management**: Add/remove movies from your favorites list
- **Responsive Design**: Optimized for both desktop and mobile devices

### 🚀 Advanced Features
- **Persistent Favorites**: Favorites are saved to localStorage and persist between sessions
- **Dynamic Routing**: Single Page Application with React Router
- **Custom Hooks**: Reusable hooks for data fetching and state management
- **Error Handling**: Graceful error handling and loading states
- **Modern UI**: Clean and intuitive user interface

## 🛠 Technologies Used

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: React Hooks (useState, useEffect, custom hooks)
- **API**: TVMaze API (https://api.tvmaze.com/shows)
- **Storage**: localStorage for persisting favorites
- **Styling**: CSS3 with modern flexbox/grid layouts

## 📁 Project Structure
```
movie/
├── public/
│ ├── vite.svg
│ └── (other static files)
├── src/
│ ├── components/
│ │ ├── CategoryFilter.jsx
│ │ ├── MovieCard.jsx
│ │ ├── Navbar.jsx
│ │ └── SearchBar.jsx
│ ├── pages/
│ │ ├── Favorites.jsx
│ │ ├── Home.jsx
│ │ └── MovieDetails.jsx
│ ├── hooks/
│ │ ├── useFetchMovies.js
│ │ └── useFavorites.js
│ ├── utils/
│ │ └── api.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── screenshots/
│ ├── home.png
│ └── favorites.png
├── package.json
├── package-lock.json
├── vite.config.js
├── index.html
├── README.md
└── .gitignore
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yvette334/movie.git
   cd movie 
   npm install
   npm run dev
   ```
## How to Use
Browsing Movies
The home page displays all available movies

Scroll through the movie grid to explore

Click on any movie card to view detailed information

Searching & Filtering
Use the search bar at the top to find movies by title

Select genres from the category filter to narrow down results

Combine search and filters for precise results

Managing Favorites
Click the heart icon ♥ on any movie card to add to favorites

Visit the Favorites page to see all your saved movies

Click the heart icon again to remove from favorites

Viewing Details
Click on any movie card to navigate to the details page

View comprehensive information including:

Movie summary

Rating

Genres

Runtime

Language

Premier date

🔧 Custom Hooks
useFetchMovies
Handles fetching movie data from TVMaze API with loading and error states.

useFavorites
Manages favorites state with localStorage persistence and provides methods to add/remove favorites.

🌟 API Integration
The app integrates with the TVMaze API:

Endpoint: https://api.tvmaze.com/shows

Data Includes: Title, summary, rating, genres, image, and more

Error Handling: Graceful fallbacks for missing images/data

🎨 Component Overview
Navbar: Navigation with links to Home and Favorites

SearchBar: Real-time search with debounced input

CategoryFilter: Multi-select genre filtering

MovieCard: Compact movie display with favorite toggle

Home: Main landing page with search, filters, and movie grid

MovieDetails: Detailed single movie view

Favorites: Personalized favorites collection

📱 Responsive Design
The application is fully responsive and works seamlessly across:

Desktop computers

Tablets

Mobile phones

🔮 Future Enhancements
Pagination or infinite scroll

Dark/Light mode toggle

Movie trailers integration

User ratings and reviews

Advanced filtering options

Movie recommendations

Social sharing features

## Key Observations from Your Code:

1. **Well-structured project** following React best practices
2. **Custom hooks implementation** for separation of concerns
3. **Proper error handling** in API calls
4. **LocalStorage integration** for favorites persistence
5. **Responsive design** with CSS Grid/Flexbox
6. **Clean component architecture** with proper prop passing

## Potential Improvements Noted:

1. Consider adding loading skeletons for better UX
2. Implement proper error boundaries
3. Add PropTypes for type checking
4. Consider using CSS modules or styled-components for scoped styling
5. Add more comprehensive error states for failed API calls
