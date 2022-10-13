 export const reduxNewExpense = (newExpense) => {
    return {
        type: "ADD_NEW_EXPENSE",
        payload: newExpense
    }
}

export const reduxDeleteExpense = (id) => {
    return {
        type: "DELETE_EXPENSE",
        payload:id
    }
};
export const reduxEditExpense = (updatedExpense) => {
    return {
        type: "EDIT_EXPENSE",
        payload: { updatedExpense }
    };
}