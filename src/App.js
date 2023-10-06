// Importing the logo and CSS files
import logo from './logo.svg';
import './App.css';

// Importing necessary components and styles
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Importing necessary routing components
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Navbar component */}
      // Navbar component with a dark theme
      <Navbar bg="dark" data-bs-theme="dark">

        {/* Container to hold the Navbar content */}
        <Container>

          {/* Brand link that leads to the home page */}
          <Navbar.Brand href="/">Navbar</Navbar.Brand>

          {/* Nav component with a "me-auto" class for left-aligned navigation links */}
          <Nav className="me-auto">

            {/* Navigation link for the Home page */}
            <Nav.Link href="/">Home</Nav.Link>

            {/* Navigation link for the Create page */}
            <Nav.Link href="/create">Create</Nav.Link>

            {/* Navigation link for the Read page */}
            <Nav.Link href="/Read">Read</Nav.Link>
          </Nav>

        </Container>
      </Navbar>

      {/* Router configuration */}
      <Routes>
        {/* Route for the home page, rendering the Content component */}
        <Route path='/' element={<Content></Content>}> </Route>

        {/* Route for the create page, rendering the Footer component */}
        <Route path='/create' element={<Footer></Footer>}> </Route>

        {/* Route for the read page, rendering the Header component */}
        <Route path='/read' element={<Header></Header>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
