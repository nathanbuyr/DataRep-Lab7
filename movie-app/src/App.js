import logo from './logo.svg';
import './App.css';
//Wrapped up imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Read from './components/Read';
import Create from './components/Create';
{/* Imports from excercise 5 to use in this file*/ }

{/*App function that holds everything */ }
function App() {
  return (
    <Router>
      {/* Calling the navbar */}
      <NavigationBar />
      <Routes>
        {/*Each route has a path that redirects to a different page when clicked, */};
        {/*Client side routing allows the app to update the url without making another request to the server */}
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
