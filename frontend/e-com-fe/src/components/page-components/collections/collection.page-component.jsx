import FooterComponent from "../../shared-components/footer/footer.component"
import HeaderComponent from "../../shared-components/header/header.component"
import MobileHeaderComponent from "../../shared-components/mobile-header/mobile-header.component"
import PreLoaderComponent from "../../shared-components/pre-loader/pre-loader.component"
import { useEffect } from "react";
import hideLoaderSubject from "../../../services/loader.service";
import CollectionGalleryComponent from "../../shared-components/collection-gallery/collection-gallery.component";
function CollectionPageComponent() {
    useEffect(()=>{
        // this useEffect gets called when the component load is complete
        hideLoaderSubject.next(true);
    },[]);
    // useEffect(function(){
    //     return function() {

    //     }
    // })
    useEffect(()=>()=>{
        // this section gets called when component is being destroyed
    });
    return (
        <>
            <div>
               <PreLoaderComponent></PreLoaderComponent>
                {/* Main Wrapper Start */}
                <div className="wrapper">
                    {/* Header Area Start */}
                    <HeaderComponent></HeaderComponent>
                    {/* Header Area End */}
                    {/* Mobile Header area Start */}
                    <MobileHeaderComponent></MobileHeaderComponent>
                    {/* Mobile Header area End */}
                    {/* Breadcrumb area Start */}
                    <div className="breadcrumb-area bg--white-6 pt--60 pb--70 pt-lg--40 pb-lg--50 pt-md--30 pb-md--40">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="page-title">Shop Collections</h1>
                                    <ul className="breadcrumb justify-content-center">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="shop-sidebar.html">Shop Pages</a></li>
                                        <li className="current"><span>Shop Collections</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Breadcrumb area End */}
                    {/* Main Content Wrapper Start */}
                    <div id="content" className="main-content-wrapper">
                        <div className="shop-page-wrapper">
                            <div className="container-fluid p-0">
                                <div className="row no-gutters">
                                    <CollectionGalleryComponent></CollectionGalleryComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Main Content Wrapper Start */}
                    {/* Footer Start */}
                    <FooterComponent></FooterComponent>
                    {/* Footer End */}
                    {/* Search from Start */}
                    <div className="searchform__popup" id="searchForm">
                        <a href="#" className="btn-close"><i className="dl-icon-close" /></a>
                        <div className="searchform__body">
                            <p>Start typing and press Enter to search</p>
                            <form className="searchform">
                                <input type="text" name="search" id="search" className="searchform__input" placeholder="Search Entire Store..." />
                                <button type="submit" className="searchform__submit"><i className="dl-icon-search10" /></button>
                            </form>
                        </div>
                    </div>
                    {/* Search from End */}
                    {/* Side Navigation Start */}
                    <aside className="side-navigation" id="sideNav">
                        <div className="side-navigation-wrapper">
                            <a href="#" className="btn-close"><i className="dl-icon-close" /></a>
                            <div className="side-navigation-inner">
                                <div className="widget">
                                    <ul className="sidenav-menu">
                                        <li><a href="about-us.html">About Airi Shop</a></li>
                                        <li><a href="about-us.html">Help Center</a></li>
                                        <li><a href="shop-collections.html">Portfolio</a></li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="shop-instagram.html">New Look</a></li>
                                    </ul>
                                </div>
                                <div className="widget pt--30 pr--20">
                                    <div className="text-widget">
                                        <p>
                                            <img src="./src/assets/img/others/payments.png" alt="payment" />
                                        </p>
                                        <p>Pellentesque mollis nec orci id tincidunt. Sed mollis risus eu nisi aliquet, sit amet
                                            fermentum justo dapibus.</p>
                                    </div>
                                </div>
                                <div className="widget">
                                    <div className="text-widget">
                                        <p>
                                            <a href="#">(+612) 2531 5600</a>
                                            <a href="mailto:info@la-studioweb.com">info@la-studioweb.com</a>
                                            PO Box 1622 Colins Street West
                                        </p>
                                    </div>
                                </div>
                                <div className="widget">
                                    <div className="text-widget google-map-link">
                                        <p>
                                            <a href="https://www.google.com/maps" rel="noreferrer" target="_blank">Google Maps</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="widget">
                                    <div className="text-widget">
                                        {/* Social Icons Start Here */}
                                        <ul className="social social-small">
                                            <li className="social__item">
                                                <a href="https://twitter.com/" className="social__link">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li className="social__item">
                                                <a href="https://plus.google.com/" className="social__link">
                                                    <i className="fa fa-google-plus" />
                                                </a>
                                            </li>
                                            <li className="social__item">
                                                <a href="https://facebook.com/" className="social__link">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li className="social__item">
                                                <a href="https://youtube.com/" className="social__link">
                                                    <i className="fa fa-youtube" />
                                                </a>
                                            </li>
                                            <li className="social__item">
                                                <a href="https://instagram.com/" className="social__link">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                            </li>
                                        </ul>
                                        {/* Social Icons End Here */}
                                    </div>
                                </div>
                                <div className="widget">
                                    <div className="text-widget">
                                        <p className="copyright-text">© 2018 Airi All rights reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    {/* Side Navigation End */}
                    {/* Mini Cart Start */}
                    <aside className="mini-cart" id="miniCart">
                        <div className="mini-cart-wrapper">
                            <a href="#" className="btn-close"><i className="dl-icon-close" /></a>
                            <div className="mini-cart-inner">
                                <h5 className="mini-cart__heading mb--40 mb-lg--30">Shopping Cart</h5>
                                <div className="mini-cart__content">
                                    <ul className="mini-cart__list">
                                        <li className="mini-cart__product">
                                            <a href="#" className="remove-from-cart remove">
                                                <i className="dl-icon-close" />
                                            </a>
                                            <div className="mini-cart__product__image">
                                                <img src="./src/assets/img/products/prod-17-1-70x91.jpg" alt="products" />
                                            </div>
                                            <div className="mini-cart__product__content">
                                                <a className="mini-cart__product__title" href="product-details.html">Chain print bermuda
                                                    shorts </a>
                                                <span className="mini-cart__product__quantity">1 x $49.00</span>
                                            </div>
                                        </li>
                                        <li className="mini-cart__product">
                                            <a href="#" className="remove-from-cart remove">
                                                <i className="dl-icon-close" />
                                            </a>
                                            <div className="mini-cart__product__image">
                                                <img src="./src/assets/img/products/prod-18-1-70x91.jpg" alt="products" />
                                            </div>
                                            <div className="mini-cart__product__content">
                                                <a className="mini-cart__product__title" href="product-details.html">Waxed-effect
                                                    pleated skirt</a>
                                                <span className="mini-cart__product__quantity">1 x $49.00</span>
                                            </div>
                                        </li>
                                        <li className="mini-cart__product">
                                            <a href="#" className="remove-from-cart remove">
                                                <i className="dl-icon-close" />
                                            </a>
                                            <div className="mini-cart__product__image">
                                                <img src="./src/assets/img/products/prod-19-1-70x91.jpg" alt="products" />
                                            </div>
                                            <div className="mini-cart__product__content">
                                                <a className="mini-cart__product__title" href="product-details.html">Waxed-effect
                                                    pleated skirt</a>
                                                <span className="mini-cart__product__quantity">1 x $49.00</span>
                                            </div>
                                        </li>
                                        <li className="mini-cart__product">
                                            <a href="#" className="remove-from-cart remove">
                                                <i className="dl-icon-close" />
                                            </a>
                                            <div className="mini-cart__product__image">
                                                <img src="./src/assets/img/products/prod-2-1-70x91.jpg" alt="products" />
                                            </div>
                                            <div className="mini-cart__product__content">
                                                <a className="mini-cart__product__title" href="product-details.html">Waxed-effect
                                                    pleated skirt</a>
                                                <span className="mini-cart__product__quantity">1 x $49.00</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="mini-cart__total">
                                        <span>Subtotal</span>
                                        <span className="ammount">$98.00</span>
                                    </div>
                                    <div className="mini-cart__buttons">
                                        <a href="cart.html" className="btn btn-fullwidth btn-style-1">View Cart</a>
                                        <a href="checkout.html" className="btn btn-fullwidth btn-style-1">Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    {/* Mini Cart End */}
                    {/* Global Overlay Start */}
                    <div className="ai-global-overlay" />
                    {/* Global Overlay End */}
                    {/* Modal Start */}
                    <div className="modal fade product-modal" id="productModal" tabIndex={-1} role="dialog" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <button type="button" className="close custom-close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true"><i className="dl-icon-close" /></span>
                                    </button>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="airi-element-carousel product-image-carousel nav-vertical-center nav-style-1" data-slick-options="{
                              &quot;slidesToShow&quot;: 1,
                              &quot;slidesToScroll&quot;: 1,
                              &quot;arrows&quot;: true,
                              &quot;prevArrow&quot;: {&quot;buttonClass&quot;: &quot;slick-btn slick-prev&quot;, &quot;iconClass&quot;: &quot;dl-icon-left&quot; },
                              &quot;nextArrow&quot;: {&quot;buttonClass&quot;: &quot;slick-btn slick-next&quot;, &quot;iconClass&quot;: &quot;dl-icon-right&quot; }
                          }">
                                                <div className="product-image">
                                                    <div className="product-image--holder">
                                                        <a href="product-details.html">
                                                            <img src="./src/assets/img/products/prod-9-1.jpg" alt="Product Image" className="primary-image" />
                                                        </a>
                                                    </div>
                                                    <span className="product-badge sale">sale</span>
                                                </div>
                                                <div className="product-image">
                                                    <div className="product-image--holder">
                                                        <a href="product-details.html">
                                                            <img src="./src/assets/img/products/prod-10-1.jpg" alt="Product Image" className="primary-image" />
                                                        </a>
                                                    </div>
                                                    <span className="product-badge new">new</span>
                                                </div>
                                                <div className="product-image">
                                                    <div className="product-image--holder">
                                                        <a href="product-details.html">
                                                            <img src="./src/assets/img/products/prod-11-1.jpg" alt="Product Image" className="primary-image" />
                                                        </a>
                                                    </div>
                                                    <span className="product-badge hot">hot</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="modal-box product-summary">
                                                <div className="product-navigation mb--10">
                                                    <a href="#" className="prev"><i className="dl-icon-left" /></a>
                                                    <a href="#" className="next"><i className="dl-icon-right" /></a>
                                                </div>
                                                <h3 className="product-title mb--15">Waxed-effect pleated skirt</h3>
                                                <span className="product-price-wrapper mb--20">
                                                    <span className="money">$49.00</span>
                                                    <span className="product-price-old">
                                                        <span className="money">$60.00</span>
                                                    </span>
                                                </span>
                                                <p className="product-short-description mb--25 mb-md--20">Donec accumsan auctor iaculis.
                                                    Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus,
                                                    ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in
                                                    vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at,
                                                    hendrerit arcu.</p>
                                                <div className="product-action d-flex flex-row align-items-center mb--30 mb-md--20">
                                                    <div className="quantity">
                                                        <input type="number" className="quantity-input" name="qty" id="quick-qty" defaultValue={1} min={1} />
                                                    </div>
                                                    <button type="button" className="btn btn-style-1 btn-semi-large add-to-cart">
                                                        Add To Cart
                                                    </button>
                                                    <a href="wishlist.html"><i className="dl-icon-heart2" /></a>
                                                    <a href="compare.html"><i className="dl-icon-compare2" /></a>
                                                </div>
                                                <div className="product-extra mb--30 mb-md--20">
                                                    <a href="#" className="font-size-12"><i className="fa fa-map-marker" />Find store near
                                                        you</a>
                                                    <a href="#" className="font-size-12"><i className="fa fa-exchange" />Delivery and
                                                        return</a>
                                                </div>
                                                <div className="product-summary-footer d-flex justify-content-between flex-sm-row flex-column flex-sm-row flex-column">
                                                    <div className="product-meta">
                                                        <span className="sku_wrapper font-size-12">SKU: <span className="sku">REF.
                                                            LA-887</span></span>
                                                        <span className="posted_in font-size-12">Categories: <a href="shop-sidebar.html" rel="tag">Fashions</a></span>
                                                    </div>
                                                    <div className="product-share-box">
                                                        <span className="font-size-12">Share With</span>
                                                        {/* Social Icons Start Here */}
                                                        <ul className="social social-small">
                                                            <li className="social__item">
                                                                <a href="https://facebook.com/" className="social__link">
                                                                    <i className="fa fa-facebook" />
                                                                </a>
                                                            </li>
                                                            <li className="social__item">
                                                                <a href="https://twitter.com/" className="social__link">
                                                                    <i className="fa fa-twitter" />
                                                                </a>
                                                            </li>
                                                            <li className="social__item">
                                                                <a href="https://plus.google.com/" className="social__link">
                                                                    <i className="fa fa-google-plus" />
                                                                </a>
                                                            </li>
                                                            <li className="social__item">
                                                                <a href="https://plus.google.com/" className="social__link">
                                                                    <i className="fa fa-pinterest-p" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        {/* Social Icons End Here */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Modal End */}
                </div>
            </div>
        </>
    )
}

export default CollectionPageComponent