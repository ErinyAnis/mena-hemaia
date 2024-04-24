import React from "react";
import personalImg from "../assets/personal-img.webp";

function ProfileSummary() {
  return (
    <>
      <section className="sec-padding profile-summary container-fluid pe-0">
        <div className="d-md-flex">
          <div className="img-container">
            <img src={personalImg} alt="mena hemaia" className="profile-img" />
          </div>

          <div>
            <div className="info text-center">
              <div className="container">
                <p>
                  Blending my roles as a Certified Public Accountant, educator,
                  and author, I intertwine financial acumen with a deep-seated
                  commitment to positive societal impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileSummary;
