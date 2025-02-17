// App.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, fetchProducts, selectCartProductsCount } from './shopHomeSlice';
import CartRedux from './cartRedux';
import { AddShoppingCart, ShoppingBag } from '@mui/icons-material';

function App() {
  const dispatch = useDispatch();
  const { products, status, error,} = useSelector((state) => state.products);
 
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const cartHandler = (product) => {
    // Add logic to handle adding product to cart
    // console.log('Added to cart:', product);
    dispatch(addToCart(product))
    // console.log(cart)
  };
//   console.log(cart,'outside')
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <input
      className='form-control mt-4'
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="card m-5 col-md-3" style={{}} key={product.id}>
            <img src={product.image} className="card-img" style={{height:'199px',width:'300px'}} alt={product.title} />
            <div className="card-body">
              <h6 className="card-title">{product.title}</h6>
              <h4 className="card-text">{product.price}$</h4>
              <button className="btn btn-primary" onClick={() => cartHandler(product)}>
                Add to cart <AddShoppingCart/>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <CartRedux/> */}
    </div>
  );
}

export default App;
