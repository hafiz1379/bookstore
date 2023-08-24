import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Booklist from './components/booklist';
import Bookform from './components/bookform';
import CategoriesPage from './components/categories/Categoriespage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul className="header-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">BOOKS</Link>
            </li>
            <li>
              <Link to="/categories">CATEGORIES</Link>
            </li>
            <li className="img">
              <img src="profile.svg" alt="img" />
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={(
              <div>
                <Booklist />
                <Bookform />
              </div>
          )}
          />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
