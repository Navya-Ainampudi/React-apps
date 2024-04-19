import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddressFormData, setAddressStatus, setAddressError, updateAddressForm } from './adressSlice';
import { selectUser } from './loginSlice';

const AddAddress = () => {
  const user = useSelector(selectUser);
  const formData = useSelector((state) => state.address.formData);
  const status = useSelector((state) => state.address.status);
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({
    fullName: '',
    contactNumber: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'contactNumber'  && !/^\d{10}$/.test(value)) {
      setFormErrors({ ...formErrors, contactNumber: 'Contact number should be a 10-digit number' });
    } else if (name === 'postalCode' && !/^\d{6}$/.test(value)) {
      setFormErrors({ ...formErrors, postalCode: 'Postal code should be a 6-digit number' });
    } else {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  
    dispatch(setAddressFormData({ ...formData, [name]: value }));
    // setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, contactNumber, address, city, state, postalCode, country } = formData;

    
    const addressData = { fullName, contactNumber, address, city, state, postalCode, country };

    dispatch(updateAddressForm({ userId: user.id, addressData }))
      .unwrap()
      .then(() => {
        dispatch(setAddressStatus('success'));
      })
      .catch((error) => {
        dispatch(setAddressError(error.message));
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md">
          <h3 className="mb-3 text-center">Add Address</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-2 d-flex">
              <label htmlFor="fullName" className="form-label col-3">Full Name:</label>
              <input required type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="form-control" />
              
            </div>
            <div className="mb-2 d-flex">
              <label htmlFor="contactNumber" className="form-label col-3">Phone No:</label>
              <input required type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="form-control" />
            </div>
            {formErrors.contactNumber && <span className="text-danger">{formErrors.contactNumber}</span>}
            <div className="mb-2 d-flex">
              <label htmlFor="address" className="form-label col-3">Address :</label>
              <input required type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-2 d-flex">
              <label htmlFor="city" className="form-label col-3">City:</label>
              <input required type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-2 d-flex">
              <label htmlFor="state" className="form-label col-3">State:</label>
              <input required type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-2 d-flex">
              <label htmlFor="postalCode" className="form-label col-3">Postal Code:</label>
              <input required type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} className="form-control" />
            </div>
            {formErrors.postalCode && <span className="text-danger">{formErrors.postalCode}</span>}
            <div className="mb-2 d-flex">
              <label htmlFor="country" className="form-label col-3">Country:</label>
              <input required type="text" id="country" name="country" value={formData.country} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-2 d-flex justify-content-center ">
              <button type="submit" className="btn btn-primary">Save Address</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
