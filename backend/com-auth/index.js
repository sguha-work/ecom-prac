import express from 'express';
import cors from 'cors';
import AuthRouter from './router/auth.router.js';
import StatusCode from './constants/status-codes.constant.js';
import Logger from './handlers/logger.handler.js';
const app = express();

// Define the port
const port = process.env.PORT || 3000;

// Enable CORS for cross-origin requests
app.use(cors());
let index = 0;
Object.keys(AuthRouter).forEach((method) => {
  Object.keys(AuthRouter[method]).forEach((path) => {
    Logger.log(`<${index}>  ${method}  http://localhost:${port}${path}`, 'warn');
    index+=1;
    app[method](path, async (request, response) => {
      try {
        const result = await AuthRouter.post[path](request, response);
        response.status(StatusCode[method][result.status ? result.status : (method == "post" ? "created" : "ok")]).json(result);
      } catch (error) {
        Logger.log(JSON.stringify(error), 'error');
        response.status(500).json({ message: 'Error in server request', error });
      }
    })
  });

});


app.listen(port, () => console.log(`Server started on port ${port}`));