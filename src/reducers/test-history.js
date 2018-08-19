const initialState = {
    testHistory: []
}

export default testHistory = (state = initialState, action) => {
    switch(action.type)
    {
        case 'UPDATE_TESTHISTORY':
            return {
                ...state,
                testHistory: [
                    ...state.testHistory,
                    { correct: action.correct, wrong: action.wrong }
                ]
            }
        default:
            return state;
    }
}
