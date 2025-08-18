import React, { useState } from "react";
import axios from "axios";
import "./UserForm.css";

function UserForm() {
  const EMPTY_FORM = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
  };

  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);

  const resetForm = () => {
    setFormData(EMPTY_FORM);
  };

  const handleInputChange = (e) => {
    const { name, type, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);
  try {
    const payload = {
      ...formData,
      imgUpload: formData.imgUpload ? URL.createObjectURL(formData.imgUpload) : "", // just for preview
    };

    const response = await axios.post(
      "https://68a3332fc5a31eb7bb1f60ec.mockapi.io/users/Users",
      payload
    );

    console.log("User added:", response.data);
    resetForm();
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    setSubmitting(false);
  }
};


  return (
    <form className="UserForm" onSubmit={handleSubmit}>
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
            onChange={handleInputChange}
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
              value={formData.firstName}
              onChange={handleInputChange}
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
              value={formData.lastName}
              onChange={handleInputChange}
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
              value={formData.email}
              onChange={handleInputChange}
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
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </section>
      </div>

      {/* Address Information */}
      <h3 className="section-title">Address</h3>
      <div className="address-information">
        

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="United States"
            className="form-input"
            value={formData.country}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="Forms-ActionButton">
        <button
          type="button"
          className="CancelBtn"
          onClick={resetForm}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="SubmitBtn"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default UserForm;
