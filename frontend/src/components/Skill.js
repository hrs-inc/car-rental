import React from "react";
import "./Skill.css";

function Skill() {
  return (
    <section class="skill py-5" id="skills">
      <div class="container">
        <div class="row mb-5">
          <div class="col d-flex flex-wrap text-uppercase justify-content-center">
            <h1 class="font-weight-bold aligh-self-center mx-1">Why choose</h1>
            <h1 class="section-title--special mx-1">Easy Cars</h1>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 col-lg-3 text-center my-3">
            <a href="" class="skills-icon p-2 rounded-circle">
              <i class="fas fa-car fa-fw"></i>
            </a>
            <h6 class="text-uppercase font-weight-bold my-3">many brands</h6>
            <div class="skills-underline"></div>
            <p class="w-75% mx-auto text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate, tempore?
            </p>
          </div>

          <div class="col-sm-6 col-lg-3 text-center my-3">
            <a href="" class="skills-icon p-2 rounded-circle">
              <i class="fas fa-wallet fa-fw"></i>
            </a>
            <h6 class="text-uppercase font-weight-bold my-3">affordable</h6>
            <div class="skills-underline"></div>
            <p class="w-75% mx-auto text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate, tempore?
            </p>
          </div>

          <div class="col-sm-6 col-lg-3 text-center my-3">
            <a href="" class="skills-icon p-2 rounded-circle">
              <i class="fas fa-comments fa-fw"></i>
            </a>
            <h6 class="text-uppercase font-weight-bold my-3">Support</h6>
            <div class="skills-underline"></div>
            <p class="w-75% mx-auto text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate, tempore?
            </p>
          </div>

          <div class="col-sm-6 col-lg-3 text-center my-3">
            <a href="" class="skills-icon p-2 rounded-circle">
              <i class="fas fa-people-carry fa-fw"></i>
            </a>
            <h6 class="text-uppercase font-weight-bold my-3">caring</h6>
            <div class="skills-underline"></div>
            <p class="w-75% mx-auto text-muted">
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
