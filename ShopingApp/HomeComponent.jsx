import axios from 'axios'
import React, { useEffect, useState } from 'react'
import logo from '../ShopingApp/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import AddToCart from './cart/AddToCart'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 




export default function HomeComponent() {

  const [select, setSelect] = useState([])
  const selectHandler = (e) => {
    setSelect(Apidata.filter((s) => (s.category) === e.target.value))
  }
  console.log(select)

  const [Apidata, setApidata] = useState([])
  useEffect((s) => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setApidata(res.data))
      .catch()
  }, [select])

  const profileName = localStorage.getItem('name');
  const navigate = useNavigate()
  const SignoutClickHandler = (e) => {
    navigate('/')
    localStorage.removeItem('name')
  }
  const [isToogle,setToogle]=useState(true);
  const toogleProfile=()=>{
    setToogle(!isToogle)
  }
 const [search,setSearch]=useState('')
 const searchChangeHandler=(e)=>{
  setSearch( e.target.value)
 };

// const cartNavigat= useNavigate()
// const cartClikhandler=()=>{
//   cartNavigat('/Cart')
// }
  return (

    <div className='container-fluid product'>

      <div className='col-12'>

        <section className='hero-navbar-section'>
          <div className='navbar-sec'>

            <nav className='navbar1 cardnav'>
              <img src={logo} className='nav-img-logo' />
              <ul className='navright'>
                <div>
                  <select onChange={selectHandler}>
                    <option>search by category</option>
                    <option>men's clothing</option>
                    <option>women's clothing</option>
                    <option>jewelery</option>
                    <option>electronics</option>
                  </select>
                </div>


                  <Link to='/cart'>
                  <span className='bi bi-cart' style={{color:'blue',fontSize:'40px'}}>    </span>
                  </Link>
            
                
                {isToogle?<span className='bi bi-person-circle' style={{color:'blue',fontSize:'40px'}} onClick={toogleProfile}>             
                </span>: <span>
                  <p>{profileName}</p>
                  <button className='btn btn-xs' onClick={SignoutClickHandler}>signout</button>
                  </span>}
              </ul>
            </nav>
          </div>

        </section>

        <>
        <input type='search' value={search} placeholder='search' onChange={searchChangeHandler}></input>
        <button><span className='fa fa-search'> search </span></button>
        </>

        <div>
          {select.length ? <>
            {select.map((s) =>
              <div className="card mt-4 offset-1 product-card" key={s.id} >
                <img src={s.image} className="card-img-top img-card" alt={s.category} />
                <div className="card-body">
                  <h6 className="card-title">{s.category}</h6>
                  <h4 className="card-text">{s.price}</h4>
                  <AddToCart/>
                </div>
              </div>
            )}
          </> : <>
            {Apidata. filter(s=>(s.category).toLowerCase().includes(search.toLowerCase())|| (s.description).toLowerCase().includes(search.toLowerCase()) ). map((s) =>
              <div className="card mt-4 offset-1 product-card" key={s.id} >
                <img src={s.image} className="card-img-top img-card" alt={s.category} />
                <div className="card-body">
                  <h6 className="card-title">{s.id} {s.category}</h6>
                  <h4 className="card-text">{s.price}$</h4>
                  <AddToCart/>
                </div>
              </div>
            )}
          </>
          }
        </div>
      </div>
    </div>
  )
}


