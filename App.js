import { Provider } from 'react-redux';
import BottomNavBar from './Components/NavComponents/BottonNavBar';
import store from './ReduxCode/Store';


const App=()=> {
  
  return (
   <Provider store={store}>
     <BottomNavBar/>
   </Provider>
    
  );
}

export default App;
