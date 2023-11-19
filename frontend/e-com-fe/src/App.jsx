import './App.css';
import RoutesComponent from './components/shared-components/routes/routes.component';
import {BrowserRouter} from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <RoutesComponent></RoutesComponent>
    </BrowserRouter>
  )
}

export default App;
