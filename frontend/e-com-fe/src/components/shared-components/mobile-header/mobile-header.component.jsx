function MobileHeaderComponent() {
    return (
        <header className="header-mobile">
            <div className="header-mobile__outer">
                <div className="header-mobile__inner fixed-header">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-4">
                                <a href="index.html" className="logo-box">
                                    <figure className="logo--normal">
                                        <img src="./src/assets/img/logo/logo.svg" alt="Logo" />
                                    </figure>
                                </a>
                            </div>
                            <div className="col-8">
                                <ul className="header-toolbar text-right">
                                    <li className="header-toolbar__item user-info-menu-btn">
                                        <a href="#">
                                            <i className="fa fa-user-circle-o" />
                                        </a>
                                        <ul className="user-info-menu">
                                            <li>
                                                <a href="my-account.html">My Account</a>
                                            </li>
                                            <li>
                                                <a href="cart.html">Shopping Cart</a>
                                            </li>
                                            <li>
                                                <a href="checkout.html">Check Out</a>
                                            </li>
                                            <li>
                                                <a href="wishlist.html">Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="order-tracking.html">Order tracking</a>
                                            </li>
                                            <li>
                                                <a href="compare.html">compare</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="header-toolbar__item">
                                        <a href="#miniCart" className="mini-cart-btn toolbar-btn">
                                            <i className="dl-icon-cart4" />
                                            <sup className="mini-cart-count">2</sup>
                                        </a>
                                    </li>
                                    <li className="header-toolbar__item">
                                        <a href="#searchForm" className="search-btn toolbar-btn">
                                            <i className="dl-icon-search1" />
                                        </a>
                                    </li>
                                    <li className="header-toolbar__item d-lg-none">
                                        <a href="#" className="menu-btn" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {/* Mobile Navigation Start Here */}
                                <div className="mobile-navigation dl-menuwrapper" id="dl-menu">
                                    <button className="dl-trigger">Open Menu</button>
                                    <ul className="dl-menu">
                                        <li>
                                            <a href="index.html">
                                                Home
                                            </a>
                                            <ul className="dl-submenu">
                                                <li>
                                                    <a className="megamenu-title" href="#">
                                                        Demo Group 01
                                                    </a>
                                                    <ul className="dl-submenu">
                                                        <li>
                                                            <a href="index.html">
                                                                Demo 01
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-02.html">
                                                                Demo 02
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-03.html">
                                                                Demo 03
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-04.html">
                                                                Demo 04
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-05.html">
                                                                Demo 05
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="megamenu-title" href="#">
                                                        Demo Group 02
                                                    </a>
                                                    <ul className="dl-submenu">
                                                        <li>
                                                            <a href="index-06.html">
                                                                Demo 06
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-07.html">
                                                                Demo 07
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-08.html">
                                                                Demo 08
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-09.html">
                                                                Demo 09
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-10.html">
                                                                Demo 10
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="megamenu-title" href="#">
                                                        Demo Group 03
                                                    </a>
                                                    <ul className="dl-submenu">
                                                        <li>
                                                            <a href="index-11.html">
                                                                Demo 11
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-12.html">
                                                                Demo 12
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-13.html">
                                                                Demo 13
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-14.html">
                                                                Demo 14
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-15.html">
                                                                Demo 15
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="megamenu-title" href="#">
                                                        Demo Group 04
                                                    </a>
                                                    <ul className="dl-submenu">
                                                        <li>
                                                            <a href="index-16.html">
                                                                Demo 16
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-17.html">
                                                                Demo 17
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-18.html">
                                                                Demo 18
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-19.html">
                                                                Demo 19
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-20.html">
                                                                Demo 20
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="shop-sidebar.html">
                                                Shop
                                                <span className="tip">Hot</span>
                                            </a>
                                            <ul className="dl-submenu">
                                                <li>
                                                    <a className="megamenu-title" href="#">
                                                        Shop Layout
                                                    </a>
                                                    <ul className="dl-submenu">
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
                                                        Single Product
                                                    </a>
                                                    <ul className="dl-submenu">
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
                                                        Shop Pages
                                                    </a>
                                                    <ul className="dl-submenu">
                                                        <li>
                                                            <a href="my-account.html">
                                                                My Account
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="cart.html">
                                                                Shopping Cart
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="checkout.html">
                                                                Check Out
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">
                                                                Wishlist
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="order-tracking.html">
                                                                Order tracking
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="compare.html">
                                                                compare
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
                                        <li>
                                            <a href="shop-sidebar.html">
                                                Collections
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog.html">
                                                Pages
                                            </a>
                                            <ul className="dl-submenu">
                                                <li>
                                                    <a href="about-us.html">
                                                        About Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="team.html">
                                                        Our teams
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="contact-us.html">
                                                        Contact us 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="contact-us-02.html">
                                                        Contact us 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="404.html">
                                                        404 page
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="faqs-page.html">
                                                        FAQs page
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="coming-soon.html">
                                                        Coming Soon
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="blog.html">
                                                Blog
                                            </a>
                                            <ul className="dl-submenu">
                                                <li>
                                                    <a href="#">
                                                        Blog Grid
                                                    </a>
                                                    <ul className="dl-submenu">
                                                        <li>
                                                            <a href="blog-02-columns.html">
                                                                <span className="mm-text">Blog 02 Column</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-03-columns.html">
                                                                <span className="mm-text">Blog 02 Column</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Blog List
                                                    </a>
                                                    <ul className="dl-submenu">
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
                                                        Blog Masonary
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Blog Details
                                                    </a>
                                                    <ul className="dl-submenu">
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
                                        <li>
                                            <a href="shop-instagram.html">
                                                New Look
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Mobile Navigation End Here */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-sticky-header-height" />
            </div>
        </header>
    )
}

export default MobileHeaderComponent