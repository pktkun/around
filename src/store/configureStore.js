import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import threadsReducer from 'src/reducers/threads'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      threads: threadsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
