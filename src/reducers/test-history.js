import { TESTHISTORY_UPDATE } from "../actions/test-history";

const initialState = {
    
}

export default (state = initialState, action) => {
    switch (action.type) {

        case TESTHISTORY_UPDATE:
            return { ...state }

        default:
            return state
    }
}