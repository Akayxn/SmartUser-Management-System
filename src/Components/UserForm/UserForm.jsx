import React from "react";
import "./UserForm.css";

function UserForm() {
  return (
    <form action="" method="post" className="UserForm">
      {/* Basic Information */}
      <h3 className="section-title">Basic Information</h3>
      <div className="basic-information">
        

        <section className="img-upload">
          <label htmlFor="imgUpload">Upload Image</label>
          <input
            type="file"
            id="imgUpload"
            accept="image/*"
            className="form-input"
          />
        </section>

        <section className="contact-section">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              className="form-input"
            />
          </div>
        </section>
      </div>

      {/* Address Information */}
        <h3 className="section-title">Address</h3>
      <div className="address-information">
      

        <div className="form-group">
          <label htmlFor="street1">Street Address</label>
          <input
            type="text"
            id="street1"
            name="street1"
            placeholder="123 Market St"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="street2">Street Address 2 (optional)</label>
          <input
            type="text"
            id="street2"
            name="street2"
            placeholder="Apt, Suite, etc."
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="San Francisco"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder="94103"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="United States"
            className="form-input"
          />
        </div>
      </div>
      <div className="Forms-ActionButton">
        <button className="CancelBtn">Cancel</button>
        <button className="SubmitBtn">Submit</button>
      </div>
    </form>
  );
}

export default UserForm;
