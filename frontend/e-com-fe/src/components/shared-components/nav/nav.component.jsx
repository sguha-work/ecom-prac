import { Link } from "react-router-dom";
function NavComponent() {
  return (
    <nav className="main-navigation">
      <ul className="mainmenu">
        <li className="mainmenu__item menu-item-has-children megamenu-holder">
        <Link to="/" className="mainmenu__link">
            <span className="mm-text">Home</span>
          </Link>
        </li>
        <li className="mainmenu__item menu-item-has-children">
          <a href="shop-sidebar.html" className="mainmenu__link">
            <span className="mm-text">Shop</span>
            <span className="tip">Hot</span>
          </a>
          <ul className="megamenu four-column">
            <li>
              <a className="megamenu-title" href="#">
                <span className="mm-text">Shop Layout</span>
              </a>
              <ul>
                <li>
                  <a href="shop-fullwidth.html">
                    <span className="mm-text">FullWidth</span>
                  </a>
                </li>
                <li>
                  <a href="shop-sidebar.html">
                    <span className="mm-text">with Sidebar</span>
                  </a>
                </li>
                <li>
                  <a href="shop-two-column.html">
                    <span className="mm-text">Two columns</span>
                  </a>
                </li>
                <li>
                  <a href="shop-three-column.html">
                    <span className="mm-text">Three columns</span>
                  </a>
                </li>
                <li>
                  <a href="shop-no-gutter.html">
                    <span className="mm-text">Shop No Gutter</span>
                  </a>
                </li>
                <li>
                  <a href="shop-list.html">
                    <span className="mm-text">Shop List</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="megamenu-title" href="#">
                <span className="mm-text">Single Product</span>
              </a>
              <ul>
                <li>
                  <a href="product-details.html">
                    <span className="mm-text">Simple 01</span>
                  </a>
                </li>
                <li>
                  <a href="product-details-02.html">
                    <span className="mm-text">Simple 02</span>
                  </a>
                </li>
                <li>
                  <a href="product-details-sticky.html">
                    <span className="mm-text">Sticky Info</span>
                  </a>
                </li>
                <li>
                  <a href="product-details-gallery.html">
                    <span className="mm-text">Thumbnail Gallery</span>
                  </a>
                </li>
                <li>
                  <a href="product-details-sidebar.html">
                    <span className="mm-text">Sidebar</span>
                  </a>
                </li>
                <li>
                  <a href="product-details-grouped.html">
                    <span className="mm-text">Grouped</span>
                  </a>
                </li>
                <li>
                  <a href="product-details-affiliate.html">
                    <span className="mm-text">Affiliate</span>
                  </a>
                </li>
                <li>
                  <a href="product-details-configurable.html">
                    <span className="mm-text">Configurable</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="megamenu-title" href="#">
                <span className="mm-text">Shop Pages</span>
              </a>
              <ul>
                <li>
                  <a href="my-account.html">
                    <span className="mm-text">My Account</span>
                  </a>
                </li>
                <li>
                  <a href="cart.html">
                    <span className="mm-text">Shopping Cart</span>
                  </a>
                </li>
                <li>
                  <a href="checkout.html">
                    <span className="mm-text">Check Out</span>
                  </a>
                </li>
                <li>
                  <a href="wishlist.html">
                    <span className="mm-text">Wishlist</span>
                  </a>
                </li>
                <li>
                  <a href="order-tracking.html">
                    <span className="mm-text">Order tracking</span>
                  </a>
                </li>
                <li>
                  <a href="compare.html">
                    <span className="mm-text">compare</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="d-none d-lg-block banner-holder">
              <div className="megamenu-banner">
                <div className="megamenu-banner-image" />
                <div className="megamenu-banner-info">
                  <span>
                    <a href="shop-sidebar.html">woman</a>
                    <a href="shop-sidebar.html">shoes</a>
                  </span>
                  <h3>new <strong>season</strong></h3>
                </div>
                <a href="shop-sidebar.html" className="megamenu-banner-link" />
              </div>
            </li>
          </ul>
        </li>
        <li className="mainmenu__item">
          <Link to="/collection" className="mainmenu__link">
            <span className="mm-text">Collections</span>
          </Link>
          {/* <a href="shop-collections.html" className="mainmenu__link">
            <span className="mm-text">Collections</span>
          </a> */}
        </li>
        <li className="mainmenu__item menu-item-has-children has-children">
          <a href="#" className="mainmenu__link">
            <span className="mm-text">Pages</span>
          </a>
          <ul className="sub-menu">
            <li>
              <a href="about-us.html">
                <span className="mm-text">About Us</span>
              </a>
            </li>
            <li>
              <a href="team.html">
                <span className="mm-text">Our teams</span>
              </a>
            </li>
            <li>
              <a href="contact-us.html">
                <span className="mm-text">Contact us 1</span>
              </a>
            </li>
            <li>
              <a href="contact-us-02.html">
                <span className="mm-text">Contact us 2</span>
              </a>
            </li>
            <li>
              <a href="404.html">
                <span className="mm-text">404 page</span>
              </a>
            </li>
            <li>
              <a href="faqs-page.html">
                <span className="mm-text">FAQs page</span>
              </a>
            </li>
            <li>
              <a href="coming-soon.html">
                <span className="mm-text">Coming Soon</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="mainmenu__item menu-item-has-children has-children">
          <a href="blog.html" className="mainmenu__link">
            <span className="mm-text">Blog</span>
          </a>
          <ul className="sub-menu">
            <li className="menu-item-has-children has-children">
              <a href="#">
                <span className="mm-text">Blog Grid</span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="blog-02-columns.html">
                    <span className="mm-text">Blog 02 Columns</span>
                  </a>
                </li>
                <li>
                  <a href="blog-03-columns.html">
                    <span className="mm-text">Blog 03 Columns</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children has-children">
              <a href="#">
                <span className="mm-text">Blog List</span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="blog.html">
                    <span className="mm-text">Blog Sidebar</span>
                  </a>
                </li>
                <li>
                  <a href="blog-standard.html">
                    <span className="mm-text">Blog Standard</span>
                  </a>
                </li>
                <li>
                  <a href="blog-no-sidebar.html">
                    <span className="mm-text">Blog No Sidebar</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="blog-masonary.html">
                <span className="mm-text">Blog Masonary</span>
              </a>
            </li>
            <li className="menu-item-has-children has-children">
              <a href="#">
                <span className="mm-text">Blog Details</span>
              </a>
              <ul className="sub-menu">
                <li>
                  <a href="single-post.html">
                    <span className="mm-text">Single Post</span>
                  </a>
                </li>
                <li>
                  <a href="single-post-sidebar.html">
                    <span className="mm-text">Single Post Sidebar</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mainmenu__item">
          <a href="shop-instagram.html" className="mainmenu__link">
            <span className="mm-text">New Look</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavComponent