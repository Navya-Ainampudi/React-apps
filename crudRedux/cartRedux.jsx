import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart, selectCartProductsCount, selectCartTotalPrice } from './shopHomeSlice';
import { ArrowBack, Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CartRedux = () => {
    const { cart } = useSelector((state) => state.products);
    // const cartProductsCount = useSelector(selectCartProductsCount);
    // const cartTotalPrice = useSelector(selectCartTotalPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const removeCart = (id) => {
        dispatch(removeFromCart(id));
        console.log(cart);
    };

    const incrementItem = (id) => {
        dispatch(incrementQuantity(id));
    };

    const decrementItem = (id) => {
        dispatch(decrementQuantity(id));
    };

   
    return (
        <div className="container">
            <div className="card border">
                <div className='d-flex bg-info'>
                    <h4 className="card-title mb-4 col-10">Your shopping cart</h4>
                    <button className='btn btn-outline-primary float-end' style={{}} onClick={() => { navigate('/home') }}><ArrowBack /><Home /></button>
                </div>
                {cart.length === 0 ? (
                    <div className='text-danger'>
                     <h4>No products in cart, Go <button className='btn btn-light text-primary' onClick={()=>{navigate('/home')}}>Home </button> continue shopping</h4>
                     </div>
                ) : (
                    <div>
                        
                            {cart.map((item, index) => (
                                <div className="row m-4 card-body" key={item.id}>
                                    <div>
                                        <div className="me-lg-5 d-flex align-items-between justify-content-around ">
                                            <img src={item.image} className="border rounded me-3 card-img" style={{ width: '96px', height: '96px' }} alt={item.title} />
                                            <h6 className="card-body mt-2">{item.title}</h6>
                                            <div className='btn-group d-flex'>
                                                <button onClick={() => decrementItem(item.id)} style={{ height: '40px' }} className="btn btn-outline-primary mt-3">-</button>
                                                <h6 className="card-body mt-2">{item.quantity}</h6>
                                                <button onClick={() => incrementItem(item.id)} style={{ height: '40px' }} className="btn btn-outline-primary mt-3">+</button>
                                            </div>
                                            <h6 className="card-body mt-2">${item.totalprice}</h6>
                                            <button onClick={() => removeCart(item.id)} className="btn btn-outline-danger mt-3" style={{ height: '40px' }}>Remove</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            ))}
                            <button onClick={() => { navigate('/ordersummary') }} className="btn btn-success m-2">Buy Now</button>
                    </div>
                )}
            </div>
           
        </div>
    );
};

export default CartRedux;
