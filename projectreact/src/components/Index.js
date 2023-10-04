import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

function Home() {
  return (
    <div>
      <body>
        {/* Navbar */}
        <section className="first-section">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            {/* add backgoundimg */}
            <div className="col-10 col-sm-8 col-lg-6">
              <div className="d-flex align-items-end justify-content-between">
                <h1 className="display-5 fw-bold lh-1 mb-3">
                  Whats <span className="text-warning">Nest</span>Fit
                </h1>
              </div>

              <p className="lead">
                Welcome to NestFit - where fitness is fun! With our all-in-one
                features, state-of-the-art workouts, and a supportive community,
                achieving your fitness goals has never been more enjoyable.
                Let's unleash your potential together and start your fitness
                journey with NestFit today!
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src={require("../img/Woman-page-1.png")}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="second-section bg-warning bg-gradient text-dark bg-opacity-10">
          <div className="container text-center">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <h1>Lets Get Tired!</h1>
                <p className="lead">
                  NestFit offers five types of home workouts, including weight
                  lifting, yoga, HIIT, strength training, and pilates. With our
                  app, you can access a variety of workouts from the comfort of
                  your own home - no gym required. Whether you're short on time
                  or prefer working out at home, NestFit has got you covered.
                </p>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </section>

        <section className="third-section">
          <div className="container text-center">
            <div className="row">
              <div className="mb-4 col-6 col-sm-4">
                <Card
                  title="Bicycling"
                  imageSrc={require("../img/bicycle.jpg")}
                  description="A beginner-friendly workout that promotes weight loss and reduces cholesterol"
                />
              </div>
              <div className="col-6 col-sm-4">
                <Card
                  title="Running"
                  imageSrc={require("../img/bicycle.jpg")}
                  description="Running with friends: Never alone, always motivated"
                />
              </div>
              <div className="col-6 col-sm-4">
                <Card
                  title="Weight Training"
                  imageSrc={require("../img/bicycle.jpg")}
                  description="Boost endurance, build strength, and improve fitness"
                />
              </div>
              <div className="col-6 col-sm-4">
                <Card
                  title="Walking"
                  imageSrc={require("../img/bicycle.jpg")}
                  description="Track, walk, succeed: Enjoyable strides towards your goals"
                />
              </div>
              <div className="col-6 col-sm-4">
                <Card
                  title="Dancing"
                  imageSrc={require("../img/bicycle.jpg")}
                  description="Body movements with the music to express emotions and interact with society"
                />
              </div>
              <div className="col-6 col-sm-4">
                <Card
                  title="yoga"
                  imageSrc={require("../img/bicycle.jpg")}
                  description="yogayogayogayogayogayogayogayoga"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="fourth-section">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mx-auto mb-5">
            <div className="col-lg-6">
              <img
                src={require("../img/image 42.png")}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-end justify-content-between">
                <h1 className="display-5 fw-bold lh-1 mb-3">
                  Workout <span className="text-warning">Analytics</span>
                </h1>
              </div>
              <p>
                Welcome to NestFit - where fitness is fun! With our all-in-one
                features, state-of-the-art workouts, and a supportive community,
                achieving your fitness goals has never been more enjoyable.
                Let's unleash your potential together and start your fitness
                journey with NestFit today!
              </p>
            </div>
          </div>
        </section>
        <section className="fifth-section bg-warning bg-gradient text-dark bg-opacity-10">
          <div className="row flex-lg-row-reverse align-items-center g-5 pb-5 mx-auto ">
            <div className="col-10 col-sm-8 col-lg-6">
              <div className="d-flex align-items-end justify-content-between">
                <h1 className="display-5 fw-bold lh-1 mb-3">
                  <span className="text-warning">Connect </span>with Others
                </h1>
              </div>
              <ul>
                <li>
                  Access to a community of like-minded fitness enthusiasts
                </li>
                <li>
                  Get support and encouragement from your connections to stay on
                  track
                </li>
                <li>
                  Discover new workout routines, tips, and ideas from other
                  users to spice up your fitness routine.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <img
                src={require("../img/push-up.jpg")}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className="sixth-section">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mx-auto">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={require("../img/overlay_hitt-guide.jpeg")}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-end justify-content-between">
                <h1 className="display-5 fw-bold lh-1 mb-3">
                  Stay In <span className="text-warning">Shape</span>
                </h1>
              </div>
              <ul>
                <li>
                  Maintain your fitness routine and stay motivated to achieve
                  your goals
                </li>
                <li>
                  Integration with devices to track your progress and keep you
                  active
                </li>
                <li>
                  Stick to your fitness journey and continue to improve your
                  health and well-being
                </li>
              </ul>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default Home;
