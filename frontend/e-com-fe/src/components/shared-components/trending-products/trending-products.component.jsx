import { useState, useEffect } from "react";
import API from "../../../services/api.service";
import Subject_TrendingProduct$ from "../../../subjects/trending-product.subject";
function TrendingProductsComponent() {
  const [trendingProductList, setTrendingProductList] = useState([]);
  useEffect(() => {
    API.ajax('http://localhost:3000/product/get/trending?page=1&limit=10', "get", Subject_TrendingProduct$);
    Subject_TrendingProduct$.subscribe((data) => {
      setTrendingProductList(data);
      console.log({data})
    });
  }, []);
  return (
    <section className="trending-products-area pt--30 pb--80 pt-md--20 pb-md--60">
      <div className="container-fluid">
        <div className="row mb--40 mb-md--30">
          <div className="col-12">
            <h2 className="heading-secondary text-center">Trending</h2>
          </div>
        </div>
        <div className="row">
          {trendingProductList.map((product, index)=>(
            <div key={index} className="col-xl-3 col-lg-4 col-sm-6 mb--40 mb-md--30">
            <div className="airi-product">
              <div className="product-inner">
                <figure className="product-image">
                  <div className="product-image--holder">
                    <a href="product-details.html">
                      <img src={`./src/assets/img/products/`+product.image[0]} alt="Product Image" className="primary-image" />
                      <img src={`./src/assets/img/products/`+product.image[1]} alt="Product Image" className="secondary-image" />
                    </a>
                  </div>
                  <div className="airi-product-action">
                    <div className="product-action">
                      <a className="quickview-btn action-btn" data-toggle="tooltip" data-placement="top" title="Quick Shop">
                        <span data-toggle="modal" data-target="#productModal">
                          <i className="dl-icon-view" />
                        </span>
                      </a>
                      <a className="add_to_cart_btn action-btn" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add to Cart">
                        <i className="dl-icon-cart29" />
                      </a>
                      <a className="add_wishlist action-btn" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add to Wishlist">
                        <i className="dl-icon-heart4" />
                      </a>
                      <a className="add_compare action-btn" href="compare.html" data-toggle="tooltip" data-placement="top" title="Add to Compare">
                        <i className="dl-icon-compare" />
                      </a>
                    </div>
                  </div>
                </figure>
                <div className="product-info">
                  <h3 className="product-title">
                    <a href="product-details.html">{product.title}</a>
                  </h3>
                  <span className="product-price-wrapper">
                    <span className="money">{product.price}</span>
                    <span className="product-price-old">
                      <span className="money">{product.oldPrice}</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          ))}
          
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <a href="shop-sidebar.html" className="heading-button">Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrendingProductsComponent;