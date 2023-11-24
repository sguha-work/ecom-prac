import AuthController from "../controllers/auth.controller.js"
const AuthRouter = {
    'post': {
        '/login': (request)=>AuthController.login(request)
    },
    'get': {

    }
    
}
export default AuthRouter;