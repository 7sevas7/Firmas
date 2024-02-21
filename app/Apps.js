//Demaciadas dependencias de redux solo para el estado 
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './businness/reducers';
import { Text } from 'react-native';

let middleware = __DEV__
  ? applyMiddleware(thunk, createLogger())
  : applyMiddleware(thunk);

  const store = createStore(reducers,middleware);
export default function Apps(){
    return (

        <Provider store={store}> 
            <Text>Hoall</Text>
        </Provider>
    );
}