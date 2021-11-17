import React, { Component } from 'react';
import sliderim1 from './images/sliderim1.jpg';
import sliderim2 from './images/sliderim2.jpg';
import sliderim3 from './images/sliderim3.jpg';

class Slider extends Component {
    render() {
        return (
            <div>
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={sliderim1} className="d-block w-100" alt="im"/>
    </div>
    <div className="carousel-item">
      <img src={sliderim2} className="d-block w-100" alt="im"/>
    </div>
    <div className="carousel-item">
      <img src={sliderim3} className="d-block w-100" alt="im"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>






            </div>
        );
    }
}

export default Slider;