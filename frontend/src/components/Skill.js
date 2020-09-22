import React from 'react';
import './Skill.css';

function Skill() {
  return (
    <section className='skill py-5' id='skills'>
      <div className='container'>
        <div className='row mb-5'>
          <div className='col d-flex flex-wrap text-uppercase justify-content-center'>
            <h1 className='font-weight-bold aligh-self-center mx-1'>
              Why choose
            </h1>
            <h1 className='section-title--special mx-1'>Easy Cars</h1>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-6 col-lg-3 text-center my-3'>
            <a href='' className='skills-icon p-2 rounded-circle'>
              <i className='fas fa-car fa-fw'></i>
            </a>
            <h6 className='text-uppercase font-weight-bold my-3'>
              many brands
            </h6>
            <div className='skills-underline'></div>
            <p className='w-75% mx-auto text-muted'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate, tempore?
            </p>
          </div>

          <div className='col-sm-6 col-lg-3 text-center my-3'>
            <a href='' className='skills-icon p-2 rounded-circle'>
              <i className='fas fa-wallet fa-fw'></i>
            </a>
            <h6 className='text-uppercase font-weight-bold my-3'>affordable</h6>
            <div className='skills-underline'></div>
            <p className='w-75% mx-auto text-muted'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate, tempore?
            </p>
          </div>

          <div className='col-sm-6 col-lg-3 text-center my-3'>
            <a href='' className='skills-icon p-2 rounded-circle'>
              <i className='fas fa-comments fa-fw'></i>
            </a>
            <h6 className='text-uppercase font-weight-bold my-3'>Support</h6>
            <div className='skills-underline'></div>
            <p className='w-75% mx-auto text-muted'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate, tempore?
            </p>
          </div>

          <div className='col-sm-6 col-lg-3 text-center my-3'>
            <a href='' className='skills-icon p-2 rounded-circle'>
              <i className='fas fa-people-carry fa-fw'></i>
            </a>
            <h6 className='text-uppercase font-weight-bold my-3'>caring</h6>
            <div className='skills-underline'></div>
            <p className='w-75% mx-auto text-muted'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate, tempore?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
