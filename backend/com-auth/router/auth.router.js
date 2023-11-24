import AuthController from "../controllers/auth.controller"
const AuthRouter = {
    'post': {
        '/login': (request, response)=>AuthController.login(request, response)
    },
    'get': {

    }
    
}
export default AuthRouter;