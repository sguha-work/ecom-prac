import './App.css';
import HeaderComponent from './components/shared-components/header/header.component';
import HompageSliderComponent from './components/shared-components/homepage-slider/hompage-slider.component';
import HomepageVideoComponent from './components/shared-components/homepage-video/homepage-video.component';
import MobileHeaderComponent from './components/shared-components/mobile-header/mobile-header.component';
import TopCollectionsComponent from './components/shared-components/top-collections/top-collections.component';
import TrendingProductsComponent from './components/shared-components/trending-products/trending-products.component';
function App() {

  return (
    <>
      <div>
        <div className="ai-preloader active">
          <div className="ai-preloader-inner h-100 d-flex align-items-center justify-content-center">
            <div className="ai-child ai-bounce1" />
            <div className="ai-child ai-bounce2" />
            <div className="ai-child ai-bounce3" />
          </div>
        </div>
        {/* Main Wrapper Start */}
        <div className="wrapper enable-header-transparent">
          {/* Header Area Start */}
          <HeaderComponent></HeaderComponent>
          {/* Header Area End */}
          {/* Mobile Header area Start */}
          <MobileHeaderComponent></MobileHeaderComponent>
          {/* Mobile Header area End */}
          {/* Main Content Wrapper Start */}
          <div id="content" className="main-content-wrapper">
            <HompageSliderComponent></HompageSliderComponent>
            {/* Video section Start Here */}
            <HomepageVideoComponent></HomepageVideoComponent>
            {/* Video section End Here */}
            {/* Trending Products area Start Here */}
            <TrendingProductsComponent></TrendingProductsComponent>
            {/* Trending Products area End Here */}
            {/* partners area Start Here */}
            <div className="partners-area ptb--40 ptb-md--30 bg--gray">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="airi-element-carousel partner-carousel" data-slick-options="{
                              &quot;slidesToShow&quot;: 6,
                              &quot;slidesToScroll&quot;: 1
                          }" data-slick-responsive="[
                              {&quot;breakpoint&quot;:1200, &quot;settings&quot;: {&quot;slidesToShow&quot;: 5} },
                              {&quot;breakpoint&quot;:991, &quot;settings&quot;: {&quot;slidesToShow&quot;: 4} },
                              {&quot;breakpoint&quot;:767, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3} },
                              {&quot;breakpoint&quot;:575, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                              {&quot;breakpoint&quot;:380, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                          ]">
                      <div className="item">
                        <div className="single-partner">
                          <img src="./src/assets/img/partner/logo-partner1.png" alt="Partner" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="single-partner">
                          <img src="./src/assets/img/partner/logo-partner2.png" alt="Partner" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="single-partner">
                          <img src="./src/assets/img/partner/logo-partner3.png" alt="Partner" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="single-partner">
                          <img src="./src/assets/img/partner/logo-partner4.png" alt="Partner" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="single-partner">
                          <img src="./src/assets/img/partner/logo-partner5.png" alt="Partner" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="single-partner">
                          <img src="./src/assets/img/partner/logo-partner6.png" alt="Partner" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="single-partner">
                          <img src="./src/assets/img/partner/logo-partner1.png" alt="Partner" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="single-partner">
                          <img src="./src/assets/img/partner/logo-partner2.png" alt="Partner" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="single-partner">
                          <img src="./src/assets/img/partner/logo-partner3.png" alt="Partner" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="single-partner">
                          <img src="./src/assets/img/partner/logo-partner4.png" alt="Partner" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="single-partner">
                          <img src="./src/assets/img/partner/logo-partner5.png" alt="Partner" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="single-partner">
                          <img src="./src/assets/img/partner/logo-partner6.png" alt="Partner" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* partners area End Here */}
            {/* Top Collections area Start Here */}
            <TopCollectionsComponent></TopCollectionsComponent>
            {/* Top Collections area End Here */}
            {/* Newsletter area Start Here */}
            <section className="newsletter-area bg--gray pt--30 pt-md--25 pb--40 pb-md--30">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-md-10">
                    <div className="newsletter-box text-center">
                      <h2 className="heading-secondary mb--20">Join Our Newsletter</h2>
                      <p className="heading-color font-size-16 font-bold lts-2 mb--30">GET 15% OFF YOUR FIRST
                        ORDER</p>
                      <form action="https://company.us19.list-manage.com/subscribe/post?u=2f2631cacbe4767192d339ef2&id=24db23e68a" className="newsletter-form mc-form" method="post" target="_blank">
                        <input type="email" name="newsletter_email" id="newsletter_email" placeholder="Enter your email address.." required="required" className="newsletter-form__input" />
                        <button type="submit" className="newsletter-form__submit">Subscribe</button>
                      </form>
                      {/* mailchimp-alerts Start */}
                      <div className="mailchimp-alerts">
                        <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
                        <div className="mailchimp-success" />{/* mailchimp-success end */}
                        <div className="mailchimp-error" />{/* mailchimp-error end */}
                      </div>
                      {/* mailchimp-alerts end */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Newsletter area End Here */}
            {/* Blog area Start Here */}
            <div className="blog-area ptb--80 ptb-sm--60">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="airi-element-carousel blog-carousel dot-style-1" data-slick-options="{
                              &quot;spaceBetween&quot;: 30,
                              &quot;slidesToShow&quot;: 3,
                              &quot;slidesToScroll&quot;: 1,
                              &quot;dots&quot;: true,
                              &quot;infinite&quot;: true
                          }" data-slick-responsive="[
                              {&quot;breakpoint&quot;:991, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
                              {&quot;breakpoint&quot;:767, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
                          ]">
                      <div className="item">
                        <article className="blog">
                          <div className="blog-media">
                            <div className="image">
                              <a href="single-post.html">
                                <img src="./src/assets/img/blog/image-545x363.jpg" alt="Blog Thumb" />
                              </a>
                            </div>
                          </div>
                          <div className="blog-info">
                            <div className="blog-entry-meta">
                              <span className="blog-category">
                                <a href="blog.html">Trends</a>
                              </span>
                            </div>
                            <h3 className="blog-title">
                              <a href="single-post.html">Monday to Sunday</a>
                            </h3>
                            <div className="blog-footer-meta">
                              <a href="blog.html" className="posted-on">September 16, 2018</a>
                              <span className="meta-separator">-</span>
                              <a href="blog.html" className="posted-by">By John Snow</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="item">
                        <article className="blog">
                          <div className="blog-media">
                            <div className="image">
                              <a href="single-post.html">
                                <img src="./src/assets/img/blog/blog-12-545x363.jpg" alt="Blog Thumb" />
                              </a>
                            </div>
                          </div>
                          <div className="blog-info">
                            <div className="blog-entry-meta">
                              <span className="blog-category">
                                <a href="blog.html">Trends</a>
                              </span>
                            </div>
                            <h3 className="blog-title">
                              <a href="single-post.html">Dress Time</a>
                            </h3>
                            <div className="blog-footer-meta">
                              <a href="blog.html" className="posted-on">September 16, 2018</a>
                              <span className="meta-separator">-</span>
                              <a href="blog.html" className="posted-by">By Arya Stark</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="item">
                        <article className="blog">
                          <div className="blog-media">
                            <div className="image">
                              <a href="single-post.html">
                                <img src="./src/assets/img/blog/blog-13-545x363.jpg" alt="Blog Thumb" />
                              </a>
                            </div>
                          </div>
                          <div className="blog-info">
                            <div className="blog-entry-meta">
                              <span className="blog-category">
                                <a href="blog.html">Trends</a>
                              </span>
                            </div>
                            <h3 className="blog-title">
                              <a href="single-post.html">Fashion Vintage</a>
                            </h3>
                            <div className="blog-footer-meta">
                              <a href="blog.html" className="posted-on">September 16, 2018</a>
                              <span className="meta-separator">-</span>
                              <a href="blog.html" className="posted-by">By Robb Stark</a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="item">
                        <article className="blog">
                          <div className="blog-media">
                            <div className="image">
                              <a href="single-post.html">
                                <img src="./src/assets/img/blog/blog-11-545x363.jpg" alt="Blog Thumb" />
                              </a>
                            </div>
                          </div>
                          <div className="blog-info">
                            <div className="blog-entry-meta">
                              <span className="blog-category">
                                <a href="blog.html">Trends</a>
                              </span>
                            </div>
                            <h3 className="blog-title">
                              <a href="single-post.html">Fashion Vintage</a>
                            </h3>
                            <div className="blog-footer-meta">
                              <a href="blog.html" className="posted-on">September 16, 2018</a>
                              <span className="meta-separator">-</span>
                              <a href="blog.html" className="posted-by">By Brandon Stark</a>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog area End Here */}
          </div>
          {/* Main Content Wrapper Start */}
          {/* Footer Start */}
          <footer className="footer footer-1 bg--black ptb--40">
            <div className="footer-top pb--40 pb-md--30">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-8 mb-md--30">
                    <div className="footer-widget">
                      <div className="textwidget">
                        <img src="./src/assets/img/logo/logo-white.png" alt="Logo" className="mb--10" />
                        <p className="font-size-16 font-2 mb--20">Integer ut ligula quis lectus fringilla
                          elementum porttitor sed est. Duis fringilla efficitur ligula sed lobortis.</p>
                        {/* Social Icons Start Here */}
                        <ul className="social">
                          <li className="social__item">
                            <a href="https://twitter.com/" className="social__link color--white">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="social__item">
                            <a href="https://plus.google.com/" className="social__link color--white">
                              <i className="fa fa-google-plus" />
                            </a>
                          </li>
                          <li className="social__item">
                            <a href="https://facebook.com/" className="social__link color--white">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="social__item">
                            <a href="https://youtube.com/" className="social__link color--white">
                              <i className="fa fa-youtube" />
                            </a>
                          </li>
                          <li className="social__item">
                            <a href="https://instagram.com/" className="social__link color--white">
                              <i className="fa fa-instagram" />
                            </a>
                          </li>
                        </ul>
                        {/* Social Icons End Here */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 mb-md--30">
                    <div className="footer-widget">
                      <h3 className="widget-title">Company</h3>
                      <ul className="widget-menu">
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Affiliate Program</a></li>
                        <li><a href="#">Work for Airi</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 mb-sm--30">
                    <div className="footer-widget">
                      <h3 className="widget-title">USEFUL LINKS</h3>
                      <ul className="widget-menu">
                        <li><a href="shop-collections.html">The Collections</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">Return Policiy</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 mb-sm--30">
                    <div className="footer-widget">
                      <h3 className="widget-title">SHOPPING</h3>
                      <ul className="widget-menu">
                        <li><a href="shop-instagram.html">Look Book</a></li>
                        <li><a href="shop-sidebar.html">Shop Sidebar</a></li>
                        <li><a href="shop-fullwidth.html">Shop Fullwidth</a></li>
                        <li><a href="shop-no-gutter.html">Man &amp; Woman</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="footer-widget">
                      <h4 className="widget-title">CONTACT INFO</h4>
                      <ul className="contact-info">
                        <li className="contact-info__item">
                          <i className="fa fa-phone" />
                          <span><a href="#" className="contact-info__link">(+612) 2531 5600</a></span>
                        </li>
                        <li className="contact-info__item">
                          <i className="fa fa-envelope" />
                          <span><a href="#" className="contact-info__link">info@la-studioweb.com</a></span>
                        </li>
                        <li className="contact-info__item">
                          <i className="fa fa-map-marker" />
                          <span>PO Box 1622 Colins Street West Victoria 8077 Australia</span>
                        </li>
                      </ul>
                      <div className="textwidget">
                        <img src="./src/assets/img/others/payments.png" alt="Payment" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-middle pb--40 pb-md--30">
              <div className="container">
                <div className="row method-box-wrapper">
                  <div className="col-lg-3 col-md-6 mb-md--10">
                    <div className="method-box">
                      <h4>FREESHIPPING WORLD WIDE</h4>
                      <p>Freeship over oder $100</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-md--10">
                    <div className="method-box">
                      <h4>30 DAYS MONEY BACK</h4>
                      <p>You can back money any times</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-sm--10">
                    <div className="method-box">
                      <h4>PROFESSIONAL SUPPORT 24/7</h4>
                      <p>info@la-studioweb.com</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="method-box">
                      <h4>100% SECURE CHECKOUT</h4>
                      <p>Protect buyer &amp; clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <p className="copyright-text">©2018 AIRI All rights reserved. Designed by HasTech</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
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
          {/* Newsletter Popup Start */}
          <div className="ai-newsletter-popup" id="subscribe-popup">
            <div className="ai-newsletter-popup-modal">
              <a className="custom-close popup-close">
                <i className="dl-icon-close" />
              </a>
              <div className="ai-newsletter-popup-content">
                <div className="ai-newsletter-popup-body">
                  <h5>Man Autumn Winter 2019</h5>
                  <h3 className="heading-tertiary mb--10">Join our newsletter and get 20% per sale</h3>
                  <form action="https://company.us19.list-manage.com/subscribe/post?u=2f2631cacbe4767192d339ef2&id=24db23e68a" className="popup-newsletter-form mc-form mb--30" target="_blank">
                    <input type="email" name="popup-newsletter_email" id="popup-newsletter_email" className="popup-newsletter-form__input" placeholder="Enter Your Email Address ...." />
                    <button type="submit" className="btn btn-small btn-style-1 subscribe-btn">Submit</button>
                  </form>
                  {/* mailchimp-alerts Start */}
                  <div className="mailchimp-alerts">
                    <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
                    <div className="mailchimp-success" />{/* mailchimp-success end */}
                    <div className="mailchimp-error" />{/* mailchimp-error end */}
                  </div>
                  {/* mailchimp-alerts end */}
                  <label htmlFor="popup-hide" className="dont-show-popup">
                    <input type="checkbox" name="popup-hide" id="popup-hide" />
                    Do not show popup anymore
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Newsletter Popup End */}
        </div>
      </div>
    </>
  )
}

export default App;
