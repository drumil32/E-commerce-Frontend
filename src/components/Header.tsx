import React, { useState } from 'react';
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const user = { _id: "adg", role: 'admin' }

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const logoutHandler = () => {
        setIsOpen(false);
    }
    return (
        <nav className='header'>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/search" onClick={() => setIsOpen(false)}><FaSearch /></Link>
            <Link to="/cart" onClick={() => setIsOpen(false)}><FaShoppingBag /></Link>
            {user._id ? (
                <>
                    <button onClick={() => setIsOpen(prevState => !prevState)}><FaUser /></button>
                    <dialog open={isOpen} onClose={() => setIsOpen(false)}>
                        <div>
                            {user.role === "admin" && (
                                <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">Admin</Link>
                            )}
                            <Link onClick={() => setIsOpen(false)} to='/orders'>Orders</Link>
                            <button onClick={logoutHandler}><FaSignOutAlt /></button>
                        </div>
                    </dialog>
                </>
            ) : (
                <Link to="/login" onClick={() => setIsOpen(false)}><FaSignInAlt /></Link>
            )}
        </nav>
    );
};

export default Header;