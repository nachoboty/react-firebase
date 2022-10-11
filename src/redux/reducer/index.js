import { combineReducers  } from 'redux';
import clientReducer from './clientReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers ({
  clientReducer,
  dataReducer
})

export default rootReducer;
