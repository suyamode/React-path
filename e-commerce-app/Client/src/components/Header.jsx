import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, Store } from "lucide-react";
function Header({
  cartItemCount = 0,
  searchQuery = "",
  setSearchQuery = () => {},
}) {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo and brand name */}
          <Link
            to="/"
            className="flex items-center gap-2 text-indigo-600 hover:opacity-90 transition-opacity"
          >
            <Store className="w-7 h-7" />
            <span className="font-bold text-xl tracking-tight text-gray-900">
              Swift<span className="text-indigo-600">Shop</span>
            </span>
          </Link>
          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products..."
                // value={SearchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-50 focus:bg-white transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
              <Link to="/" className="hover:text-indigo-600 transition-colors">
                Shop
              </Link>
            </nav>

            {/* Cart Button */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors focus:outline-none"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartItemCount > 99 ? "99+" : cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
