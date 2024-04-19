import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartProductsCount, selectCartTotalPrice } from './shopHomeSlice';
import { AddLocation, LocationOn, RemoveShoppingCart, ShoppingCartCheckout } from '@mui/icons-material';
import { Box, Modal } from '@mui/material';
import AddAdress from './addAdress';
import { selectUser } from './loginSlice';
import Payment from './payment';

const OrderSummary = () => {
    const user = useSelector(selectUser);

    const { cart } = useSelector((state) => state.products);
    const cartProductsCount = useSelector(selectCartProductsCount);
    const cartTotalPrice = useSelector(selectCartTotalPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const gst = cartTotalPrice * 0.01;
    const discount = cartTotalPrice > 200 ? cartTotalPrice * 0.02 : 0;
    const shipping = cartTotalPrice > 200 ? 0 : 5;
    const FinalPrice = gst + shipping + cartTotalPrice - discount;

    const [showModal1, setShowModal1] = useState(false); 
    const handleCloseModal1 = () => setShowModal1(false); 
    const handleShowModal1 = () => setShowModal1(true); 
    const [showModal2, setShowModal2] = useState(false); 
    const handleCloseModal2 = () => setShowModal2(false); 
    const handleShowModal2 = () => setShowModal2(true); 
    const [showbtn, setShowbtn]=useState(true);
    const handleSelectAdress=()=>{
        window.alert('adress selected')
        setShowbtn(!showbtn)
    }
  return (
    <div className='container'>
    {/* <button className='btn btn-info m-3' onClick={()=>{navigate('/cart')}}>Go to Cart <ShoppingCartCheckout/></button> */}
    <button className='btn btn-info m-3 float-start' onClick={()=>{navigate('/cart')}}>Manage Cart <ShoppingCartCheckout/></button>
    <button className='btn btn-info m-3 float-end ' onClick={()=>{navigate('/home')}}>Home <ShoppingCartCheckout/></button><br/>
    <div className='card bg-info mt-5'>
    <div className='card body'>
    <div className='card-header'>
     <h5 className="card-title">Address Details</h5>
    </div>
    <div className="card-body">
    {user?.address ?

   <div className="card">
             {/* <h6>Select a delivery Address</h6>  */}
      <div className={`card-body text-lg-start ${!showbtn?"text-primary":"text-danger"}`}>
        <h6 className="card-text "> {user?.address?.fullName}</h6>
        <p className="card-text"> {user?.address?.addressLine1}</p>
        <p className="card-text"> {user?.address?.addressLine2}</p>
        <p className="card-text"> {user?.address?.city} , {user?.address?.state}</p>
        <p className="card-text">{user?.address?.postalCode}</p>
        <p className="card-text"> {user?.address?.country}</p>
      </div>
      {showbtn &&
      <div className=" d-flex float-lg-start m-3 ">
      <button className="btn btn-primary me-3" onClick={handleSelectAdress}>
        Select Address
      </button>
      <button className="btn btn-secondary" onClick={handleShowModal1}>
        Edit Address
      </button>
      <Modal   open={showModal1}
        onClose={handleCloseModal1}>
    <div className='card' style={{height:'440px',width:'400px', position: 'absolute',top: '50%',left: '50%',  transform: 'translate(-50%, -50%)',}}>
    <AddAdress/>
    </div>
   </Modal>
      </div>}
    </div>:
    <div>
    <button onClick={handleShowModal1}><LocationOn/> Add location</button>
   <Modal   open={showModal1}
        onClose={handleCloseModal1}>
    <div className='card' style={{height:'440px',width:'400px', position: 'absolute',top: '50%',left: '50%',  transform: 'translate(-50%, -50%)',}}>
    <AddAdress/>
    </div>
   </Modal>
             
    </div>}
    
    </div>
    </div>
    </div>    
    <div>
       {cart.length > 0 ? 
                <div className="card mt-4">
                    <div className="card-body">
                        <h3 className="card-title">Order Summary</h3>
                        <table className="table table-borderless text-lg-start">
                            <tbody>
                                <tr>
                                    <td><h6>Total Items</h6></td>
                                    <td>{cartProductsCount}</td>
                                </tr>
                                <tr>
                                    <td><h6>Value of products</h6></td>
                                    <td>${cartTotalPrice.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td><h6>Discount(-)</h6></td>
                                    {cartTotalPrice > 200 ? (
                                        <td className="text-success">${(cartTotalPrice * 2 / 100).toFixed(2)}</td>
                                    ) : (
                                        <td className='text-danger'>Not Applicable</td>
                                    )}
                                </tr>
                                <tr>
                                    <td><h6>Shipping(+)</h6></td>
                                    {cartTotalPrice > 200 ? (
                                        <td className="text-success">Free</td>
                                    ) : (
                                        <td className='text-danger'>$ 5</td>
                                    )}
                                </tr>
                                <tr>
                                    <td><h6>GST(+)</h6></td>
                                    <td>${(cartTotalPrice * 1 / 100).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table table-success text-lg-start">
                            <tbody>
                                <tr>
                                    <td><h5>Total Price</h5></td>
                                    <td>{FinalPrice.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                       {/* <button className='btn btn-success' onClick={handleShowModal2}>Pay Now</button> */}
                       {user?.address ? (
                       <button className='btn btn-success' onClick={handleShowModal2}>Pay Now</button>
                        ) : (
                       <button className='btn btn-danger disabled' onClick={handleShowModal2} >
                       Pay Now (Add Address First)
                      </button>
                       )}
                       <Modal   open={showModal2}
                        onClose={handleCloseModal2}>
                       <div className='card' style={{height:'400px',width:'400px', position: 'absolute',top: '50%',left: '50%',  transform: 'translate(-50%, -50%)',}}>
                       {user?.address ? (
                    
                       <Payment/>
                       ) : (
                       <h3 className='text-danger'>Please add your address before proceeding with payment.</h3>
                        )}
                       </div>
                      </Modal>
                    </div>
                </div>:<div>
                    <h1 className='text-danger'>No products in cart </h1>
                    <button className='btn btn-info m-3' onClick={()=>{navigate('/cart')}}>Manage Cart <ShoppingCartCheckout/></button>
                    <button className='btn btn-info m-3' onClick={()=>{navigate('/home')}}>Home <ShoppingCartCheckout/></button>
                </div>
            }
            </div>
    </div>
  )
}

export default OrderSummary;