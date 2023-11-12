function HomepageVideoComponent() {
    return (
        <div className="video-section-area pt--80 pb--40 pt-md--60 pb-md--30">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="text-block">
                            <figure className="mb--30 mb-md--20 max-w-60">
                                <img src="./src/assets/img/logo/m01-logo.png" alt="logo" />
                            </figure>
                            <p className="font-2 heading-color font-size-16 mb--30 mb-md--20">Integer ut ligula quis
                                lectus fringilla elementum porttitor sed est. Fringilla efficitur ligula sed
                                lobortis. Sed tempus faucibus mi, quis fringilla mauris lacinia sed. Integer
                                vehicula egestas nunc ac facilisis. Nam bibendum non faucibus libero eu. Curabitur
                                posuere to ullamcorper</p>
                            <a href="shop-sidebar.html" className="heading-button mb-sm--30">Shop Now</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <figure className="image-box image-box-w-video-btn">
                            <a href="https://www.youtube.com/watch?v=Rp19QD2XIGM" className="video-popup">
                                <img src="./src/assets/img/banner/m01-img1.jpg" alt="banner" />
                                <span className="video-btn" />
                            </a>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomepageVideoComponent