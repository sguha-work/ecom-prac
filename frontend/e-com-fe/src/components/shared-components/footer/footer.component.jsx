function FooterComponent() {
    return (
        <footer className="footer footer-3 bg--white">
            <div className="container">
                <div className="row pt--40 pt-md--30 mb--40 mb-sm--30">
                    <div className="col-12 text-md-center">
                        <div className="footer-widget">
                            <div className="textwidget">
                                <a href="index.html" className="footer-logo">
                                    <img src="./src/assets/img/logo/logo.svg" alt="Logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb--15 mb-sm--20">
                    <div className="col-xl-2 col-md-4 mb-lg--30">
                        <div className="footer-widget">
                            <h3 className="widget-title widget-title--2">Company</h3>
                            <ul className="widget-menu widget-menu--2">
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Affiliate Program</a></li>
                                <li><a href="#">Work for Airi</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-4 mb-lg--30">
                        <div className="footer-widget">
                            <h3 className="widget-title widget-title--2">USEFUL LINKS</h3>
                            <ul className="widget-menu widget-menu--2">
                                <li><a href="shop-collections.html">The Collections</a></li>
                                <li><a href="#">Size Guide</a></li>
                                <li><a href="#">Return Policiy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-4 mb-lg--30">
                        <div className="footer-widget">
                            <h3 className="widget-title widget-title--2">SHOPPING</h3>
                            <ul className="widget-menu widget-menu--2">
                                <li><a href="shop-instagram.html">Look Book</a></li>
                                <li><a href="shop-sidebar.html">Shop Sidebar</a></li>
                                <li><a href="shop-fullwidth.html">Shop Fullwidth</a></li>
                                <li><a href="shop-no-gutter.html">Man &amp; Woman</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                        <div className="footer-widget">
                            <h3 className="widget-title widget-title--2 widget-title--icon">Subscribe now and get 10% off
                                new collection</h3>
                            <form action="https://company.us19.list-manage.com/subscribe/post?u=2f2631cacbe4767192d339ef2&id=24db23e68a" className="newsletter-form newsletter-form--3 mc-form" method="post" target="_blank">
                                <input type="email" name="newsletter-email" id="newsletter-email" className="newsletter-form__input" placeholder="Enter Your Email Address.." />
                                <button type="submit" className="newsletter-form__submit">
                                    <i className="dl-icon-right" />
                                </button>
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
                <div className="row align-items-center pt--10 pb--30">
                    <div className="col-md-4">
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
                    <div className="col-md-4 text-md-center">
                        <p className="copyright-text">©2018 AIRI. Designed by HasTech</p>
                    </div>
                    <div className="col-md-4 text-md-right">
                        <img src="./src/assets/img/others/payments-2.png" alt="Payment" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent