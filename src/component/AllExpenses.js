import React from 'react';
import { Row,  } from 'react-bootstrap';
import { connect } from 'react-redux';
import Expenses from './Expenses';


const AllExpenses = (props) => {
    return (
        <Row>
            
            <h3 
                style={{
                    backgroundColor: "#012169", textAlign: "center",
                    color: "white", padding: "10px"
                }} >All Expenses</h3>
         
                {props.expenses.map((item, index) => {
                    return <Expenses
                        expenseData={item}
                        key={item.id}
                        deleteExpense={props.deleteExpense}
                        editExpense={props.editExpense}
                    />
                        
                }
                )}
            
           
        </Row>
    );
}


const mapStateToProps = (state) => {
    return {
     expenses:state.expenses   
    }
}
export default connect(mapStateToProps) (AllExpenses);
