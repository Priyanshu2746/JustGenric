import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h3 className="paraT">Who Are We?</h3>
          <p className="paragraph">
            At JustGenric, we are pioneers in the healthcare industry, driven by
            a passion to redefine convenience and accessibility in healthcare
            services. Our mission is clear: to empower individuals by
            revolutionizing the way appointments are booked and healthcare is
            accessed.
          </p>
          <p className="paragraph">
            We are more than just a platform. We are the architects of a new era
            in healthcare, where traditional barriers are shattered, and
            seamless, stress-free scheduling becomes the norm.
          </p>
          <p className="paragraph">
            We're here to revolutionize the way you book appointments. No more
            phone calls, no more waiting just seamless, stress-free scheduling
            right at your fingertips. Dive into a world where your health is
            your priority, with our platform connecting you to top-tier
            providers effortlessly. Say hello to instant bookings, personalized
            care, and a smoother healthcare journey. Experience the future of
            appointments, experience JustGenric.
          </p>
          <p className="paragraph">Discover a new era of healthcare convenience at JustGenric!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
