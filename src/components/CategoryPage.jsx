import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slice";
import { fetchProducts } from "../redux/productSlice";
import { useLocation } from "react-router-dom";

function CategoryPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const cartSelector = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productSelector = useSelector((state) => state.products.items);

  
  const path = location.pathname;
  const category = path.replace(/^\//, ""); 

  
  const categoryMap = {
    men: "men's clothing",
    women: "women's clothing",
    others: "jewelery", 
  };

  const apiCategory = categoryMap[category] || "";
  const filteredProducts = productSelector.filter(
    (item) => item.category === apiCategory
  );

  const categoryTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "";

  return (
    <div className="category-page">
      <div className="category-header">
        <h1 className="category-title">
          {categoryTitle === "Others" ? "Others Collection" : `${categoryTitle}'s Collection`}
        </h1>
        <p className="category-subtitle">
          {categoryTitle === "Others" 
            ? "Explore our diverse collection of other products"
            : `Discover our curated selection of ${categoryTitle.toLowerCase()}'s fashion`}
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="loading-container">
          <p>Loading products...</p>
        </div>
      ) : (
        <div className="product-container">
          {filteredProducts.map((item) => (
            <div key={item.id} className="product-card">
              <img
                src={item.image}
                alt={item.title}
                className="product-image"
              />

              <h3 className="product-title">{item.title}</h3>

              <p className="product-price">₹ {(item.price * 83).toFixed(2)}</p>

              <p className="product-category">{item.category}</p>

              <p className="product-description">
                {item.description.substring(0, 80)}...
              </p>

              <div className="button-group">
                {cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                  <button
                    className="add-to-cart btn-disabled"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(addItem(item))}
                    className="add-to-cart"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;

