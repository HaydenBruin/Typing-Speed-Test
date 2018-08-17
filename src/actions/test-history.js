const ADD_TESTRESULT = 'ADD_TESTRESULT';

export const addTestResult = (correct, wrong) => ({
    type: ADD_TESTRESULT,
    correct: correct,
    wrong: wrong
})
