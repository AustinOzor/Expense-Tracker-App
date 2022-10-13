
let initialState = {
 expenses: [
    {id:'1',
    item: "Groceries", datePurchased:"22-09-2022", amountPaid: "100", category:"Food"
    }
    
  
  ]}


let expenseReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_NEW_EXPENSE":
      return {
        ...state, expenses: [...state.expenses, action.payload]
      };
    case "DELETE_EXPENSE":
      const unDeletedExpenses = state.expenses.filter((expense) => 
        expense.id!==action.payload)
      return {
        ...state, expenses:unDeletedExpenses
      }    
    
    case "EDIT_EXPENSE":
      const expenseUpdated = state.expenses.map((expense)=>{
        if(expense.id===action.payload.updatedExpense.id){
          return action.payload.updatedExpense;
        }
        else {return expense}
      })
      return {...state, expenses:expenseUpdated}
    
     default:
    return state
      };    
  }

export default expenseReducer;