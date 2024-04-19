import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './loginSlice';
import { fetchHomeTableData, editUserData, deleteUserData } from './homeTableSlice';
import { Edit, ShoppingCart, ShoppingCartCheckout, ShoppingCartCheckoutTwoTone } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { tooglState } from './toogleSlice';
import ShopHome from './shop';
import CartRedux from './cartRedux';
import { selectCartProductsCount } from './shopHomeSlice';

const HomeTable = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.homeTable);
    const {cart} = useSelector
    const navigate = useNavigate();
    const [editableItemId, setEditableItemId] = useState(null);
    const [editableItemData, setEditableItemData] = useState({});
    const isToggled = useSelector((state) => state.toogle.isToogle);

    useEffect(() => {
        dispatch(fetchHomeTableData());
    }, []);

    const goToLogin = () => {
        navigate('/');
    };

    const handleEditClick = (item) => {
        setEditableItemId(item.id);
        setEditableItemData(item);
    };

    const handleEditSave = () => {
        dispatch(editUserData(editableItemData));
        setEditableItemId(null);
    };

    const handleEditCancel = () => {
        setEditableItemId(null);
    };

    const handleDelete = (itemId) => {
        dispatch(deleteUserData(itemId));
    };

    const handleInputChange = (e, fieldName) => {
        const newValue = e.target.value;
        setEditableItemData(prevState => ({
            ...prevState,
            [fieldName]: newValue
        }));
    };

    console.log(data);
    const toggleTable= ()=>{
      dispatch(tooglState())
    }
    const cartHandler=()=>{
        navigate('/cart')
    }
    const cartProductsCount = useSelector(selectCartProductsCount);
    return (
        <div>
            {user ?
            <div>
                <div className='navbar bg-info'>
                    <h2>Welcome, {user.username}</h2>
                    <button className='btn-btn-info' onClick={cartHandler}> <ShoppingCartCheckoutTwoTone/>{cartProductsCount}</button>
                   
                    <button className='btn btn-info' onClick={toggleTable}>
                        {isToggled ? 'Hide users' : 'Show users'}
                    </button>
                   {isToggled &&
                    <table className='table table-bordered table-light'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>
                                        {editableItemId === item.id ? (
                                            <input type="text" value={editableItemData.username} onChange={(e) => handleInputChange(e, "username")} />
                                        ) : (
                                            item.username
                                        )}
                                    </td>
                                    <td>
                                        {editableItemId === item.id ? (
                                            <input type="text" value={editableItemData.Email} onChange={(e) => handleInputChange(e, "Email")} />
                                        ) : (
                                            item.Email
                                        )}
                                    </td>
                                    <td>
                                        {editableItemId === item.id ? (
                                            <>
                                                <button onClick={handleEditSave}>Save</button>
                                                <button onClick={handleEditCancel}>Cancel</button>
                                            </>
                                        ) : (
                                            <>
                                                <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                                                <button className='btn btn-success m-2' onClick={() => handleEditClick(item)}>Edit</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                   }

              
                </div>
                <ShopHome/>
                </div>
                :
                <div>
                    <h1>Log in again</h1>
                    <button onClick={goToLogin}>Go to Log in</button>
                </div>
                
            }
         
        </div>
    );
};

export default HomeTable;
