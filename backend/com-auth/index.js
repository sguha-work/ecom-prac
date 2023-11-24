import express from 'express';
import cors from 'cors';
import AuthRouter from './router/auth.router';

const app = express();

// Define the port
const port = process.env.PORT || 3000;

// Enable CORS for cross-origin requests
app.use(cors());

Object.keys(AuthRouter).forEach((method)=>{
    Object.keys(AuthRouter[method]).forEach((path)=>{
        app[method](path, async (reqest, response)=>{
            try {
                const result = await AuthRouter.post[path](request, response);
                response.status(201).json(result);
            } catch(error) {
                console.error(error);
                response.status(500).json({ message: 'Error creating user',error });
            }
        })
    });
    
});

app.post('/users', async (req, res) => {
    try {
      // Create a new user instance from the request body
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
  
      // Save the user to the database
      await user.save();
  
      // Send a success response with a status code of 201 (Created)
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating user' });
    }
  });
  app.listen(port, () => console.log(`Server started on port ${port}`));