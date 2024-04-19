import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, setCards } from './paymentSlice';
import { selectUser } from './loginSlice';

const Payment = () => {
    const dispatch=useDispatch()
    const user= useSelector(selectUser)
    // const [formData, setFormData] = useState({
    //     cardType: '',
    //     cardHolderName: '',
    //     cardNumber: '',
    //     expiry: '',
    //     cvv: '',
    //   });
     const cardData= useSelector((state)=>state.payment.cardData)
      const handleChange = (e) => {
        const { name, value } = e.target;
        // setFormData((prevData) => ({
        //   ...prevData,
        //   [name]: value,
        // }));
        dispatch(setCards({ ...cardData, [name]: value }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch addCard action with formData
        // console.log(formData,user.id)
        const { cardType,cardHolderName,cardNumber,expiry,cvv}= cardData;
        const paymentData = { cardType,cardHolderName,cardNumber,expiry,cvv}

    
    /
        dispatch(addCard( { userId: user.id, paymentData  }));
        // Reset form data after submission
        // setFormData({
        //   cardType: '',
        //   cardHolderName: '',
        //   cardNumber: '',
        //   expiry: '',
        //   cvv: '',
        // });
      };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="">
          <h3 className="mb-3 text-center">Payment Details</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="cardType" className="form-label">Card Type:</label>
              <select id="cardType" name="cardType" className="form-select" onChange={handleChange}>
                <option value="">Select Card Type</option>
                <option value="visa">Visa Card</option>
                <option value="mastercard">Mastercard</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="cardHolderName" className="form-label">Cardholder Name:</label>
              <input type="text" id="cardHolderName" name="cardHolderName" className="form-control" onChange={handleChange}/>
            </div>            
            <div className="row mb-3">
              <div className='col-5'>
                <label htmlFor="cardNumber" className="form-label">Card Number:</label>
                <input type="text" id="cardNumber" name="cardNumber" className="form-control" onChange={handleChange} />
              </div>
              <div className="col">
                <label htmlFor="expiry" className="form-label">Expiry(DD/MM):</label>
                <input type="text" id="expiry" name="expiry" className="form-control" onChange={handleChange} />
              </div>
              <div className="col">
                <label htmlFor="cvv" className="form-label">CVV:</label>
                <input type="text" id="cvv" name="cvv" className="form-control" onChange={handleChange}/>
              </div>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Add Card</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
