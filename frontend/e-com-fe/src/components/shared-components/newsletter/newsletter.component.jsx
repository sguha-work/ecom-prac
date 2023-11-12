function NewsletterComponent() {
    return (
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
    )
}

export default NewsletterComponent