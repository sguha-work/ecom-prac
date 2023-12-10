import ProductController from "../controllers/product.controller.js"
const ProductRouter = {
    'post': {
        
    },
    'get': {
        '/product/get': (request, response)=>ProductController.get(request, response),
        '/product/get/trending': (request, response)=>ProductController.getTrending(request, response)
    }
    
}
export default ProductRouter;