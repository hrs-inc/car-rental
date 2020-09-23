import React from 'react';
import './Inventory.css';

import Image1 from '../image/se1.jpg';

function Inventory() {
  return (
    // title
    <section className='inventory py-5' id='inventory'>
      <div className='container'>
        <div className='row mb-5'>
          <div className='col d-flex flex-wrap text-uppercase justify-content-center'>
            <h1 className='font-weight-bold aligh-self-center mx-1'>Our</h1>
            <h1 className='section-title--special mx-1'>Inventory</h1>
          </div>
        </div>
      </div>

      {/* Vehicle choosing buttons */}
      <div className='row mb-5'>
        <div className='col10 mx-auto col-md-12 d-flex justify-content-end'>
          <button className='btn btn-outline-secondary text-uppercase mx-1'>
            all
          </button>
          <button className='btn btn-outline-secondary text-uppercase mx-1'>
            sedan
          </button>
          <button className='btn btn-outline-secondary text-uppercase mx-1'>
            suv
          </button>
          <button className='btn btn-outline-secondary text-uppercase mx-1'>
            crossover
          </button>
        </div>
      </div>

      {/* cars cards */}
      <div className='row'>
        <div className='col-10 mx-auto my-3 col-md-6 col-lg-4'>
          <div className='card car-card'>
            <img src='./image/se1.jpg' className='card-img-top car-img' />

            <div className='card-body'>
              <div className='car-info d-flex justify-content-between'>
                <div className='car-text text-uppercase'>
                  <h6 className='font-weight-bold'>car maker</h6>
                  <h6>model</h6>
                </div>

                <h5 className='car-value align-self-center py-2 px-3'>
                  Rs.
                  <span className='car-price'>5000/Day</span>
                </h5>
              </div>
            </div>

            <div className='card-footer text-capitalize d-flex justify-content-between'>
              <p>
                <span>
                  <i className='fas fa-car'></i>
                </span>
                Sedan
              </p>
              <p>
                <span>
                  <i className='fas fa-cogs'></i>
                </span>
                Manual
              </p>
              <p>
                <span>
                  <i className='fas fa-gas-pump'></i>
                </span>
                petrol
              </p>
            </div>
          </div>
        </div>

        <div className='col-10 mx-auto my-3 col-md-6 col-lg-4'>
          <div className='card car-card'>
            <img src={Image1} className='card-img-top car-img' />

            <div className='card-body'>
              <div className='car-info d-flex justify-content-between'>
                <div className='car-text text-uppercase'>
                  <h6 className='font-weight-bold'>car maker</h6>
                  <h6>model</h6>
                </div>

                <h5 className='car-value align-self-center py-2 px-3'>
                  Rs.
                  <span className='car-price'>5000/Day</span>
                </h5>
              </div>
            </div>

            <div className='card-footer text-capitalize d-flex justify-content-between'>
              <p>
                <span>
                  <i className='fas fa-car'></i>
                </span>
                Sedan
              </p>
              <p>
                <span>
                  <i className='fas fa-cogs'></i>
                </span>
                Manual
              </p>
              <p>
                <span>
                  <i className='fas fa-gas-pump'></i>
                </span>
                petrol
              </p>
            </div>
          </div>
        </div>

        <div className='col-10 mx-auto my-3 col-md-6 col-lg-4'>
          <div className='card car-card'>
            <img src='image/se3.jpg' className='card-img-top car-img' />

            <div className='card-body'>
              <div className='car-info d-flex justify-content-between'>
                <div className='car-text text-uppercase'>
                  <h6 className='font-weight-bold'>car maker</h6>
                  <h6>model</h6>
                </div>

                <h5 className='car-value align-self-center py-2 px-3'>
                  Rs.
                  <span className='car-price'>5000/Day</span>
                </h5>
              </div>
            </div>

            <div className='card-footer text-capitalize d-flex justify-content-between'>
              <p>
                <span>
                  <i className='fas fa-car'></i>
                </span>
                Sedan
              </p>
              <p>
                <span>
                  <i className='fas fa-cogs'></i>
                </span>
                Manual
              </p>
              <p>
                <span>
                  <i className='fas fa-gas-pump'></i>
                </span>
                petrol
              </p>
            </div>
          </div>
        </div>

        <div className='col-10 mx-auto my-3 col-md-6 col-lg-4'>
          <div className='card car-card'>
            <img src='image/su1.jpg' className='card-img-top car-img' />

            <div className='card-body'>
              <div className='car-info d-flex justify-content-between'>
                <div className='car-text text-uppercase'>
                  <h6 className='font-weight-bold'>car maker</h6>
                  <h6>model</h6>
                </div>

                <h5 className='car-value align-self-center py-2 px-3'>
                  Rs.
                  <span className='car-price'>5000/Day</span>
                </h5>
              </div>
            </div>

            <div className='card-footer text-capitalize d-flex justify-content-between'>
              <p>
                <span>
                  <i className='fas fa-car'></i>
                </span>
                SUV
              </p>
              <p>
                <span>
                  <i className='fas fa-cogs'></i>
                </span>
                Manual
              </p>
              <p>
                <span>
                  <i className='fas fa-gas-pump'></i>
                </span>
                petrol
              </p>
            </div>
          </div>
        </div>

        <div className='col-10 mx-auto my-3 col-md-6 col-lg-4'>
          <div className='card car-card'>
            <img src='image/su2.jpg' className='card-img-top car-img' />

            <div className='card-body'>
              <div className='car-info d-flex justify-content-between'>
                <div className='car-text text-uppercase'>
                  <h6 className='font-weight-bold'>car maker</h6>
                  <h6>model</h6>
                </div>

                <h5 className='car-value align-self-center py-2 px-3'>
                  Rs.
                  <span className='car-price'>5000/Day</span>
                </h5>
              </div>
            </div>

            <div className='card-footer text-capitalize d-flex justify-content-between'>
              <p>
                <span>
                  <i className='fas fa-car'></i>
                </span>
                SUV
              </p>
              <p>
                <span>
                  <i className='fas fa-cogs'></i>
                </span>
                Manual
              </p>
              <p>
                <span>
                  <i className='fas fa-gas-pump'></i>
                </span>
                petrol
              </p>
            </div>
          </div>
        </div>

        <div className='col-10 mx-auto my-3 col-md-6 col-lg-4'>
          <div className='card car-card'>
            <img src='image/su3.jpg' className='card-img-top car-img' />

            <div className='card-body'>
              <div className='car-info d-flex justify-content-between'>
                <div className='car-text text-uppercase'>
                  <h6 className='font-weight-bold'>car maker</h6>
                  <h6>model</h6>
                </div>

                <h5 className='car-value align-self-center py-2 px-3'>
                  Rs.
                  <span className='car-price'>5000/Day</span>
                </h5>
              </div>
            </div>

            <div className='card-footer text-capitalize d-flex justify-content-between'>
              <p>
                <span>
                  <i className='fas fa-car'></i>
                </span>
                SUV
              </p>
              <p>
                <span>
                  <i className='fas fa-cogs'></i>
                </span>
                Manual
              </p>
              <p>
                <span>
                  <i className='fas fa-gas-pump'></i>
                </span>
                petrol
              </p>
            </div>
          </div>
        </div>

        <div className='col-10 mx-auto my-3 col-md-6 col-lg-4'>
          <div className='card car-card'>
            <img src='image/c1.jpg' className='card-img-top car-img' />

            <div className='card-body'>
              <div className='car-info d-flex justify-content-between'>
                <div className='car-text text-uppercase'>
                  <h6 className='font-weight-bold'>car maker</h6>
                  <h6>model</h6>
                </div>

                <h5 className='car-value align-self-center py-2 px-3'>
                  Rs.
                  <span className='car-price'>5000/Day</span>
                </h5>
              </div>
            </div>

            <div className='card-footer text-capitalize d-flex justify-content-between'>
              <p>
                <span>
                  <i className='fas fa-car'></i>
                </span>
                Crossover
              </p>
              <p>
                <span>
                  <i className='fas fa-cogs'></i>
                </span>
                Manual
              </p>
              <p>
                <span>
                  <i className='fas fa-gas-pump'></i>
                </span>
                petrol
              </p>
            </div>
          </div>
        </div>

        <div className='col-10 mx-auto my-3 col-md-6 col-lg-4'>
          <div className='card car-card'>
            <img src='image/c2.jpg' className='card-img-top car-img' />

            <div className='card-body'>
              <div className='car-info d-flex justify-content-between'>
                <div className='car-text text-uppercase'>
                  <h6 className='font-weight-bold'>car maker</h6>
                  <h6>model</h6>
                </div>

                <h5 className='car-value align-self-center py-2 px-3'>
                  Rs.
                  <span className='car-price'>5000/Day</span>
                </h5>
              </div>
            </div>

            <div className='card-footer text-capitalize d-flex justify-content-between'>
              <p>
                <span>
                  <i className='fas fa-car'></i>
                </span>
                Crossover
              </p>
              <p>
                <span>
                  <i className='fas fa-cogs'></i>
                </span>
                Manual
              </p>
              <p>
                <span>
                  <i className='fas fa-gas-pump'></i>
                </span>
                electric
              </p>
            </div>
          </div>
        </div>

        <div className='col-10 mx-auto my-3 col-md-6 col-lg-4'>
          <div className='card car-card'>
            <img src='image/c3.jpg' className='card-img-top car-img' />

            <div className='card-body'>
              <div className='car-info d-flex justify-content-between'>
                <div className='car-text text-uppercase'>
                  <h6 className='font-weight-bold'>car maker</h6>
                  <h6>model</h6>
                </div>

                <h5 className='car-value align-self-center py-2 px-3'>
                  Rs.
                  <span className='car-price'>5000/Day</span>
                </h5>
              </div>
            </div>

            <div className='card-footer text-capitalize d-flex justify-content-between'>
              <p>
                <span>
                  <i className='fas fa-car'></i>
                </span>
                Crossover
              </p>
              <p>
                <span>
                  <i className='fas fa-cogs'></i>
                </span>
                Manual
              </p>
              <p>
                <span>
                  <i className='fas fa-gas-pump'></i>
                </span>
                petrol
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Inventory;
