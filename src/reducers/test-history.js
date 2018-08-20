const initialState = {
    tests: []
}

export default (state = initialState, action) => {
    switch(action.type)
    {
        case 'UPDATE_TESTHISTORY':
            return {
                ...state,
                tests: [
                    ...state.tests,
                    { correct: action.correct, wrong: action.wrong }
                ]
            }
        default:
            return state;
    }
}