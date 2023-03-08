import React from 'react';
import ReactDOM from 'react-dom';

export const Courses = (props) => {
        return (
          <div className="course-card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>Duración: {props.duration}</p>
            <p>Precio: {props.price}</p>
            <button>Comprar ahora</button>
          </div>
        );    
           
      ReactDOM.render(<App />, document.getElementById('root'));
             
}