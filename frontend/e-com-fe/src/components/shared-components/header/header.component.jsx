import NavComponent from "../nav/nav.component"

function HeaderComponent() {
  return (
    <header className="header header-transparent header-fullwidth header-style-1">
      <div className="header-outer">
        <div className="header-inner fixed-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-5 col-lg-6">
                {/* Main Navigation Start Here */}
                <NavComponent></NavComponent>
                {/* Main Navigation End Here */}
              </div>
              <div className="col-lg-2 col-md-3 col-4 text-lg-center">
                {/* Logo Start Here */}
                <a href="index.html" className="logo-box">
                  <figure className="logo--normal">
                    <img src="./src/assets/img/logo/logo.svg" alt="Logo" />
                  </figure>
                  <figure className="logo--transparency">
                    <img src="./src/assets/img/logo/logo.svg" alt="Logo" />
                  </figure>
                </a>
                {/* Logo End Here */}
              </div>
              <div className="col-xl-5 col-lg-4 col-md-9 col-8">
                {/* Header Toolbar Start Here */}
                <ul className="header-toolbar text-right">
                  <li className="header-toolbar__item d-none d-lg-block">
                    <a href="#sideNav" className="toolbar-btn">
                      <i className="dl-icon-menu2" />
                    </a>
                  </li>
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
          </div>
        </div>
        <div className="main-sticky-header-height" />
      </div>
    </header>
  )
}

export default HeaderComponent