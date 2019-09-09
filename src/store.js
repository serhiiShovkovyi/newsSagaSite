import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunkMiddleware from 'redux-thunk'
import reducer from "./reducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, thunkMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
