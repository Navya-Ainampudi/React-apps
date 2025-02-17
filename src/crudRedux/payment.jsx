import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, setCards } from './paymentSlice';
import { selectUser } from './loginSlice';
import { Modal } from '@mui/material';
import { Carousel } from 'react-bootstrap';
import { Check, CheckCircle } from '@mui/icons-material';
import { Navigate, useNavigate } from 'react-router-dom';

const Payment = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const [showModal, setModal] = useState(false)
  const [formErrors, setFormErrors] = useState({
    cardType: '',
    cardHolderName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const cardData = useSelector((state) => state.payment.cardData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    switch (name) {
      case 'cardNumber':
        if (!/^\d{16}$/.test(value)) {
          error = 'Card number should be a 16-digit number';
        }
        break;
      case 'expiry':
        if (!/^(0[1-9]|1[0-2])\/20\d{2}$/.test(value)) {
          error = 'Expiry should be in the format MM/YYYY';
        } else {
          const today = new Date();
          const currentMonth = today.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
          const currentYear = today.getFullYear();

          const [expiryMonth, expiryYear] = value.split('/').map((part) => parseInt(part, 10));

          if (
            expiryYear < currentYear ||
            (expiryYear === currentYear && expiryMonth < currentMonth)
          ) {
            error = 'Expiry should be greater than the current month and year';
          }
        }

        break;
      case 'cvv':
        if (!/^\d{3}$/.test(value)) {
          error = 'CVV should be a 3-digit number';
        }
        break;
      default:
        break;
    }

    setFormErrors({ ...formErrors, [name]: error });
    dispatch(setCards({ ...cardData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { cardType, cardHolderName, cardNumber, expiry, cvv } = cardData;
    const paymentData = { cardType, cardHolderName, cardNumber, expiry, cvv }

    console.log(cardData)

    dispatch(addCard({ userId: user.id, paymentData }));

  };
  const handleCardModal = () => {
    setModal(true)
  }
  const handleCloseCard = () => {
    setModal(false)
  }
  const [index, setIndex] = useState(0);


  const images = [
    "https://1000logos.net/wp-content/uploads/2020/04/Apple-Pay-Logo-tumb.jpg",
    'https://1000logos.net/wp-content/uploads/2020/04/Google-Pay-Logo-tumb.png',
    'https://1000logos.net/wp-content/uploads/2021/03/paytm_tumb-1.jpg',
    "https://1000logos.net/wp-content/uploads/2022/11/PhonePe-Emblem.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 1500);

    return () => clearInterval(interval);
  }, [images.length]);

  const [selectedPayment, setSelectPayment] = useState(null)

  const handleselctPayment = (paymentMethod) => {
    setSelectPayment(paymentMethod)
    // window.alert(paymentMethod)
  }
  useEffect(() => {
    if (selectedPayment !== null) {
      window.alert(selectedPayment + " selected for payment");
    }
  }, [selectedPayment]);

  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handlePaynow=()=>{
    setShowSuccessModal(true)
  }
const navigate= useNavigate()
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h3 className="mb-3 text-center">Select payment Method</h3>
        <div className="">

          <div className='d-flex card flex-row p-2 mt-1'>
            <input type="radio" name="paymentMethod" value="COD" onChange={() => handleselctPayment('COD')} checked={selectedPayment === 'COD'} />
            <div style={{ marginLeft: '30px' }}>
              <h6> Cash on Delivery/ Pay on Delivery </h6>
              <p>Cash,UPI and Cards accepted</p>
            </div>
          </div>
          {/* <hr></hr> */}
          {user?.card ? (
            <div className='d-flex card flex-lg-row p-2 mt-2'>
              <input type="radio" name="paymentMethod" value={user?.card?.cardType} onChange={() => handleselctPayment(user?.card?.cardType)} checked={selectedPayment === user?.card?.cardType} />
              <img src='https://static-00.iconduck.com/assets.00/visa-icon-2048x1313-o6hi8q5l.png' alt='visa logo' height='50px' width='90px' style={{ marginLeft: '30px' }}></img>
              <div style={{ marginLeft: '20px' }}>
                <h6>{user?.card?.cardHolderName} </h6>
                <h6>{user?.card?.cardNumber}</h6>
              </div>
            </div>
          ) : (
            <button className='btn btn-info border-0' onClick={handleCardModal}>Add Card Details</button>
          )}
          <Modal open={showModal} onClose={handleCloseCard} >
            <div className='card' style={{ height: '360px', width: '440px', backgroundColor: 'lightblue', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', }}>
              <form className='m-3' onSubmit={handleSubmit}>
                <h4 className="text-center"> Add Card Details</h4>
                <div className="mb-3">
                  <label htmlFor="cardType" className="form-label">Card Type:</label>
                  <select id="cardType" name="cardType" className="form-select" onChange={handleChange} required>
                    <option value="">Select Card Type</option>
                    <option value="visa">Visa Card</option>
                    <option value="mastercard">Mastercard</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="cardHolderName" className="form-label">Cardholder Name:</label>
                  <input type="text" id="cardHolderName" required name="cardHolderName" className="form-control" onChange={handleChange} />
                </div>
                <div className="row mb-3">
                  <div className='col-5'>
                    <label htmlFor="cardNumber" className="form-label">Card Number:</label>
                    <input type="text" id="cardNumber" required name="cardNumber" className="form-control" onChange={handleChange} />
                  </div>
                  {formErrors.cardNumber && <span className="text-danger">{formErrors.cardNumber}</span>}
                  <div className="col">
                    <label htmlFor="expiry" className="form-label">Expiry(MM/YYYY):</label>
                    <input type="text" id="expiry" required name="expiry" className="form-control" onChange={handleChange} />
                  </div>
                  {formErrors.expiry && <span className="text-danger">{formErrors.expiry}</span>}
                  <div className="col">
                    <label htmlFor="cvv" className="form-label">CVV:</label>
                    <input type="text" id="cvv" name="cvv" required className="form-control" onChange={handleChange} />
                  </div>
                  {formErrors.cvv && <span className="text-danger">{formErrors.cvv}</span>}
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">Add Card</button>
                </div>
              </form>
            </div>
          </Modal>

          <div className='d-flex card flex-lg-row p-2 mt-2'>
            <input type="radio" name="paymentMethod" value="UPI method" onChange={() => handleselctPayment("UPI method")} checked={selectedPayment === "UPI method"} />
            <div className='d-flex' style={{ marginLeft: '15px' }}>
              <h6 className='m-3'>Other UPI Apps</h6>
              <Carousel style={{ marginLeft: '20px' }} activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)} interval={null}>
                {images.map((image, idx) => (
                  <Carousel.Item key={idx}>
                    <img height='50px' width="80px" src={image} alt={`Slide ${idx + 1}`} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
          {!selectedPayment? ( 
            <div className=" mt-4 d-flex justify-content-center">
              <button type="button" className="btn btn-danger" disabled onClick={handlePaynow}>Pay Now (select payment option)</button>
            </div>
          ):(
            <div className=" mt-4 d-flex justify-content-center">

            <button type='button' className='btn btn-success' onClick={handlePaynow}>Pay Now</button>
            </div>
          )}

          <Modal open={showSuccessModal} onClose={() => setShowSuccessModal(false)} >
            <div className="card p-3 text-center" style={{height:'100vh'}} >
           
              <h2 className="text-success">  <Check sx={{fontSize:'4rem'}}></Check> Payment Successful!</h2>
              <h4 className="text-info">Thank you for your payment.</h4>
              <button className="btn btn-danger" onClick={() => setShowSuccessModal(false)}   style={{ position: 'absolute', top: '10px', right: '10px' }}>X</button>
              <button className="btn btn-primary" onClick={() => navigate('/home')}   style={{ position: 'absolute', top: '10px', left: '10px' }}>Shop Again</button>
          
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Payment;
