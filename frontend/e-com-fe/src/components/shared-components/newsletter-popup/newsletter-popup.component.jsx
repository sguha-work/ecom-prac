function NewsletterPopupComponent() {
    return (
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
    )
}

export default NewsletterPopupComponent