import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { toast } from 'react-toastify';

import Navbar from '../Components/Navbar';
import SignUp from '../Components/SignUp';
import Sidebar from '../Components/Sidebar';
import UserSidebar from '../Components/UserSidebar';
import CartSidebar from '../Components/CartSidebar';
import ReviewCarousel from '../Components/ReviewCarousel';
import ShopMediNova from '../Components/ShopMediNova';
import Admin from '../Components/Admin';
import RestBody from '../Components/RestBody';
import PrivateRoute from '../Components/PrivateRoute';

function CompleteRoutes() {
    const [showPopup, setShowPopup] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userSidebarOpen, setUserSidebarOpen] = useState(false);
    const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const openSidebar = () => setSidebarOpen(true);
    const closeSidebar = () => setSidebarOpen(false);

    const openUserSidebar = () => setUserSidebarOpen(true);
    const closeUserSidebar = () => setUserSidebarOpen(false);

    const openCartSidebar = () => setCartSidebarOpen(true);
    const closeCartSidebar = () => setCartSidebarOpen(false);

    const handleSignupClick = () => {
        setShowPopup(true);
    };

    const handleSignupClose = () => {
        setShowPopup(false);
    };

    const handleAddToCart = (product) => {
        setCartItems((prevItems) => {
            const exists = prevItems.find((item) => item._id === product._id);
            if (exists) {
                toast.success(`${product.name} quantity updated in cart!`);
                return prevItems.map((item) =>
                    item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            toast.success(`${product.name} added to cart!`);
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const handleRemoveFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item._id !== productId));
        toast.info('Product removed from cart.');
    };

    const handleIncrementQty = async (productId) => {
        const product = cartItems.find((item) => item._id === productId);
        if (!product) return;

        try {
            const res = await fetch(`http://localhost:5000/api/checkstock/${productId}`);
            const data = await res.json();

            if (product.quantity < data.available) {
                setCartItems((prev) =>
                    prev.map((item) =>
                        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
                    )
                );
            } else {
                toast.warn('No more stock available');
            }
        } catch (err) {
            console.error(err);
            toast.error('Error checking stock');
        }
    };

    const handleDecrementQty = (productId) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item._id === productId && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    return (
        <>
            <div>
                <Navbar onMenuClick={openSidebar} onUserClick={openUserSidebar} onCartClick={openCartSidebar} />
                <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
                <UserSidebar isOpen={userSidebarOpen} onClose={closeUserSidebar} onSignupClick={handleSignupClick} />
                <SignUp isOpen={showPopup} onClose={handleSignupClose} />
                <CartSidebar
                    isOpen={cartSidebarOpen}
                    onClose={closeCartSidebar}
                    cartItems={cartItems}
                    onRemoveFromCart={handleRemoveFromCart}
                    onIncrementQty={handleIncrementQty}
                    onDecrementQty={handleDecrementQty}
                    setCartItems={setCartItems}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ReviewCarousel />
                                <ShopMediNova onAddToCart={handleAddToCart} />
                                <RestBody />
                            </>
                        }
                    />
                    <Route path="/admin" element={<PrivateRoute element={Admin} />} />
                </Routes>
            </div>
        </>
    )
};

export default CompleteRoutes;