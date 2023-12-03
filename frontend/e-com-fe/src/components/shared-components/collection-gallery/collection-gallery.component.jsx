import API from "../../../services/api.service";
import { useEffect, useState } from "react";
import Subject_Collection$ from "../../../subjects/collection.subject";

function CollectionGalleryComponent() {
    const [galleryItem, setGalleryItem] = useState([]);
    useEffect(() => {
        // this useEffect will be called only once at component load
        // API.ajax("http://localhost:3000/product/get?page=1&limit=10").then((data)=>{
        //     console.log({data});
        // }).catch((error)=>{
        //     console.error(error);
        // });
        // no name function. self invoking function
        // this function is required because we cannot made the useEffect an async function directly
        // (async () => {
        //     try {
        //         const data = await API.ajax("http://localhost:3000/product/get?page=1&limit=10");
        //         console.log({ data });
        //         setGalleryItem(data);
        //     } catch (error) {
        //         console.log(error);
        //         console.error(error.custom_message);
        //     }
        // })();
        Subject_Collection$.subscribe((data) => {
            console.log({ data });
            data && setGalleryItem(data);
        });
        API.ajax('http://localhost:3000/product/get?page=1&limit=10', "get");
    }, []);
    return (
        <>
            {
                galleryItem.map((item, index) =>
                (
                    <div className="col-md-4" key={index}>
                        <div className="banner-box banner-type-3 banner-type-3-1 banner-hover-1">
                            <div className="banner-inner">
                                <div className="banner-image">
                                    <img src={`./src/assets/img/banner/${item.image}`} alt="Banner" />
                                </div>
                                <div className="banner-info">
                                    <p className="banner-title-1 lts-13 lts-lg-4 text-uppercase">{item.sub_title}</p>
                                    <h2 className="banner-title-2">{item.title.split(' ')[0]} <strong>{item.title.split(' ')[1]}</strong></h2>
                                </div>
                                <a className="banner-link banner-overlay" href="shop-sidebar.html">Shop Now</a>
                            </div>
                        </div>
                    </div>
                )
                )
            }

            {/* <div className="col-md-4">
                <div className="banner-box banner-type-3 banner-type-3-1 banner-hover-1">
                    <div className="banner-inner">
                        <div className="banner-image">
                            <img src="./src/assets/img/banner/m07-banner2.jpg" alt="Banner" />
                        </div>
                        <div className="banner-info">
                            <p className="banner-title-1 lts-13 lts-lg-4 text-uppercase">New Men</p>
                            <h2 className="banner-title-2">Autumn <strong>Winter</strong></h2>
                        </div>
                        <a className="banner-link banner-overlay" href="shop-sidebar.html">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="banner-box banner-type-3 banner-type-3-1 banner-hover-1">
                    <div className="banner-inner">
                        <div className="banner-image">
                            <img src="./src/assets/img/banner/m07-banner3.jpg" alt="Banner" />
                        </div>
                        <div className="banner-info">
                            <p className="banner-title-1 lts-13 lts-lg-4 text-uppercase">Hello</p>
                            <h2 className="banner-title-2">Woman <strong>2019</strong></h2>
                        </div>
                        <a className="banner-link banner-overlay" href="shop-sidebar.html">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="banner-box banner-type-3 banner-type-3-1 banner-hover-1">
                    <div className="banner-inner">
                        <div className="banner-image">
                            <img src="./src/assets/img/banner/m07-banner4.jpg" alt="Banner" />
                        </div>
                        <div className="banner-info">
                            <p className="banner-title-1 lts-13 lts-lg-4 text-uppercase">New Season</p>
                            <h2 className="banner-title-2">Man <strong>T-Shirt</strong></h2>
                        </div>
                        <a className="banner-link banner-overlay" href="shop-sidebar.html">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="banner-box banner-type-3 banner-type-3-1 banner-hover-1">
                    <div className="banner-inner">
                        <div className="banner-image">
                            <img src="./src/assets/img/banner/m07-banner5.jpg" alt="Banner" />
                        </div>
                        <div className="banner-info">
                            <p className="banner-title-1 lts-13 lts-lg-4 text-uppercase">Woman 2019</p>
                            <h2 className="banner-title-2">Floral <strong>Dress</strong></h2>
                        </div>
                        <a className="banner-link banner-overlay" href="shop-sidebar.html">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="banner-box banner-type-3 banner-type-3-1 banner-hover-1">
                    <div className="banner-inner">
                        <div className="banner-image">
                            <img src="./src/assets/img/banner/m07-banner6.jpg" alt="Banner" />
                        </div>
                        <div className="banner-info">
                            <p className="banner-title-1 lts-13 lts-lg-4 text-uppercase">Jacket</p>
                            <h2 className="banner-title-2">Man <strong>2019</strong></h2>
                        </div>
                        <a className="banner-link banner-overlay" href="shop-sidebar.html">Shop Now</a>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default CollectionGalleryComponent