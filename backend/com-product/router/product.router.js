import ProductController from "../controllers/product.controller.js"
const ProductRouter = {
    'post': {
        
    },
    'get': {
        '/product/get': (request, response)=>ProductController.get(request, response)
    }
    
}
export default ProductRouter;