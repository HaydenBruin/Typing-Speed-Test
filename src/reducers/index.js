import { combineReducers } from 'redux';

import testHistory from "./test-history";

const rootReducer = combineReducers({
    testHistory: testHistory
});

export default rootReducer;