import React from 'react';
import Navbar from './Componentes/Navbar';
import Jumbotron from './Componentes/Jumbotron';
import Card from './Componentes/Card';
import Footer from './Componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  const cardInfo = [
    { title: 'Card title', text: 'Ignacio Garfias Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat diam vel pharetra lobortis. Quisque.', imageUrl: 'https://via.placeholder.com/500x325', buttonText: 'Find Out More!' },
    { title: 'Card title', text: 'Ignacio Garfias Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', imageUrl: 'https://via.placeholder.com/500x325', buttonText: 'Find Out More!' },
    { title: 'Card title', text: 'Ignacio Garfias Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imageUrl: 'https://via.placeholder.com/500x325', buttonText: 'Find Out More!' },
    { title: 'Card title', text: 'Ignacio Garfias Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', imageUrl: 'https://via.placeholder.com/500x325', buttonText: 'Find Out More!' },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1 container mt-5">
        <Jumbotron />
        <div className="row">
          {cardInfo.map((info, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <Card {...info} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
