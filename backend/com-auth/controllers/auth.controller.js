import CommonController from './common.controller.js';
import AuthService from '../services/auth.service.js';

const commonController = CommonController.CommonControllerInstance;

class AuthController {
  static async login(request, response) {
    return await commonController.handleRequest(request, AuthService.login, response);
  };
}
export default AuthController;
