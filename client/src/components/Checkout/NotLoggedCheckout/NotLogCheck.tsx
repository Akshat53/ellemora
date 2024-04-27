import React, { useState } from 'react';
import Modes from '../PaymentMode/Modes';
import Details from '../../MyBag/PaymentDetails/Details';

const NotLogCheck: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    pin: '',
    city: '',
    state: '',
    country: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
        <div className="container">
        <div className='border-bottom pb-2 mt-4'>
        <h5 className='text-center fw-medium text-uppercase fs-6'>CONTACT DETAILS</h5>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phone">Phone No.</label>
          <input
            type="text"
            className="form-control"
            placeholder='xxxxxxxxxxxx'
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='d-grid gap-2 col-6 mx-auto'>
        <button type="button" className="btn rounded-0 my-2 fw-normal text-uppercase mt-4" style={{ height: '50px', background: '#141414', color: '#F6F6F6', letterSpacing:'0.1em'}}>Login</button>
        </div>
        </form>
        </div>
        
        <h5 className='text-center fw-medium text-uppercase mt-3 p-2 fs-6'>Address</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="addressLine1">Address Line 1</label>
          <input
            type="text"
            className="form-control"
            id="addressLine1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="addressLine2">Address Line 2</label>
          <input
            type="text"
            className="form-control"
            id="addressLine2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="pin">PIN</label>
          <input
            type="text"
            className="form-control"
            id="pin"
            name="pin"
            value={formData.pin}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="state">State</label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
      </form>
      <div className="d-flex justify-content-center align-items-center mt-2 py-1">
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                style={{ backgroundColor: '#2A2A2A', width: '15px', height: '15px', borderColor: '1.5pxsolid #2A2A2A' }}
                type="checkbox"
                id="address"
              />
              <label className="form-check-label"
                style={{ color: '#6B6B6B', letterSpacing: '0.1em', fontSize: '13px' }}
                htmlFor="address"
              >Billing address is same as shipping address
              </label>
            </div>
          </div>
          </div>
          <div className='container mb-1'>
           <Modes />
          </div>
          <div className='border-top border-bottom'>
            <h5 className='text-center text-uppercase'>Order Summary</h5>
            </div>
          <div className='container mt-3'>
            <Details />
          </div>
    </div>
  );
};

export default NotLogCheck;