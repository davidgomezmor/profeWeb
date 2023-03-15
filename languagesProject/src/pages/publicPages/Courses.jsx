import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../components/Navbar';

export const Courses = (props) => {
  return (
    <div>
      <Navbar />

      <div className="course-card">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>Duración: {props.duration}</p>
        <p>Precio: {props.price}</p>
        <button className="btn btn-secondary">Comprar ahora</button>
      </div>
    </div>
  );

  ReactDOM.render(<App />, document.getElementById('root'));

}