import CommonController from './common.controller.js';
import ProductService from '../services/product.service.js';
import {GetProductValidatorSchema} from '../schemas/validator.schema.js';
const commonController = CommonController.CommonControllerInstance;

class ProductController {
  static async get(request, response) {
    return await commonController.handleRequest(request, ProductService.get, response, GetProductValidatorSchema);
  };
  static async getTrending(request, response) {
    return await commonController.handleRequest(request, ProductService.getTrending, response, GetProductValidatorSchema);
  };
}
export default ProductController;
