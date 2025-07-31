import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

const CartSidebar = ({ isOpen, onClose, cartItems = [], onRemoveFromCart, onIncrementQty, onDecrementQty, setCartItems }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (showCheckout) {
      const total = cartItems.reduce(
        (sum, item) => sum + item.discountedprice * item.quantity,
        0
      );
      setTotalAmount(total);
    }
  }, [showCheckout, cartItems]);

  const handlePayment = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || 'Payment successful!');
        setCartItems([]);
        setShowCheckout(false);
      } else {
        toast.error(data.message || 'Payment failed');
      }
    } catch (err) {
      toast.error('Server error during payment');
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 flex justify-end transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        className={`bg-white max-w-md w-full h-full flex flex-col transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <div className="absolute top-6 right-6 cursor-pointer" onClick={onClose}>
          <IoClose className="h-6 w-6 text-gray-600" />
        </div>

        {/* Cart Header */}
        <div className="border-b border-gray-200 p-4 text-center uppercase font-bold text-sm text-gray-800">
          Your Cart
        </div>

        <div className="overflow-y-auto flex-1">
          {/* Add Note */}
          <div className="px-5 py-4">
            <span className="text-sm text-gray-600 font-light">Add a note (optional)</span>
          </div>

          {cartItems.length === 0 ? (
            <div className="px-5 py-10 border-b border-gray-200 text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Your cart is empty</h3>
              <div className="text-sm text-gray-500 mb-6">
                Add your favorite items to your cart.
              </div>
            </div>
          ) : (
            <div className="divide-y">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={`http://localhost:5000${item.imageUrl}`}
                      alt={item.name}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">Rs. {item.discountedprice}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => onDecrementQty(item._id)}
                          className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => onIncrementQty(item._id)}
                          className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="text-red-500 text-sm hover:underline"
                    onClick={() => onRemoveFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="p-4 border-t border-gray-200">
              {!showCheckout ? (
                <button
                  className="bg-black text-white w-full py-2 rounded"
                  onClick={() => setShowCheckout(true)}
                >
                  Checkout
                </button>
              ) : (
                <>
                  <div className="text-lg font-medium mb-2 text-center">
                    Total: Rs. {totalAmount}
                  </div>
                  <button
                    className="bg-green-600 text-white w-full py-2 rounded"
                    onClick={handlePayment}
                  >
                    Proceed to Payment
                  </button>
                </>
              )}
            </div>
          )}

          {/* Cart Footer Suggestions */}
          <div className="bg-gray-100 p-5">
            <h4 className="text-center text-sm text-gray-800 mb-4 font-medium">
              Customers who bought this item also bought
            </h4>

            {[1, 2, 3].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-4 border-b border-gray-200 py-5"
              >
                <div className="w-28 flex-shrink-0">
                  <img src={`/${item}.png`} alt={`product-${item}`} className="w-full" />
                </div>

                <div className="flex-1 px-4">
                  <div className="text-sm font-medium text-gray-800">
                    {item === 1
                      ? "Strong Bones: Bone Base & Joint Support"
                      : item === 2
                        ? "Renew: Mood & Mental Clarity Formula (Liquid)"
                        : "Glow: Lavendal 260g"}
                  </div>

                  <div className="flex text-xs mt-2 items-center text-gray-500">
                    <span className="text-green-500 font-semibold">
                      {item === 3 ? "$24.49 USD" : "$15.99 USD"}
                    </span>
                    {item !== 2 && (
                      <span className="pl-4 line-through">${item === 1 ? "30.95" : "29.95"} USD</span>
                    )}
                  </div>
                </div>

                <button className="bg-black rounded-md w-24 h-10 text-white text-xs overflow-hidden whitespace-nowrap text-ellipsis">
                  <a href="#" className="block px-2 pt-2">
                    {item === 2 ? "Options" : "Add"}
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
