class ProductService {
    static async get() {
        try{
            const productList = [{
                title: 'The Interview',
                sub_title:'New season',
                image: 'm07-banner1.jpg',
                link: 'shop-sidebar.html'
            },
            {
                title: 'Autumn Winter',
                sub_title:'New men',
                image: 'm07-banner2.jpg',
                link: 'shop-sidebar.html'
            },
            {
                title: 'The Interview',
                sub_title:'New season',
                image: 'm07-banner3.jpg',
                link: 'shop-sidebar.html'
            },
            {
                title: 'The Interview',
                sub_title:'New season',
                image: 'm07-banner4.jpg',
                link: 'shop-sidebar.html'
            },
            {
                title: 'The Interview',
                sub_title:'New season',
                image: 'm07-banner5.jpg',
                link: 'shop-sidebar.html'
            },
            {
                title: 'The Interview',
                sub_title:'New season',
                image: 'm07-banner6.jpg',
                link: 'shop-sidebar.html'
            }
        ];
            return Promise.resolve(productList);
        } catch(error) {
            return Promise.reject(error);
        }
    }
}
export default ProductService;