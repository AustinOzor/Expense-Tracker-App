import React, { useState } from 'react';
import { Container, Row, Col,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllExpenses from './component/AllExpenses'
import AddExpenses from './component/AddExpenses';

function App() {
  const [expenses, setExpense] = useState([
    
  ])
  const addNewExpense = (expense) => {
    expense.id=Math.random().toString()
    setExpense([...expenses, expense])

  }
  const deleteExpense = (id) => {
    setExpense(expenses.filter((expense)=> {
      if (expense.id !== id) {
        return deleteExpense
      }
      return expense
    }));
  };
  const editExpense = (id, updatedExpense) => {
    setExpense(expenses.map((expense) => {
      if (expense.id === id) {
        return updatedExpense
      }
      return expense
    }))
  };
  return (
     <Container fluid style={{fontFamily:"Times New Roman"}}>
        <Row style={{ marginTop: '1rem' }}>
      
          <Col md={4}>
            <AddExpenses addExpense={addNewExpense} />
          </Col>
          <Col md={8}>
            <AllExpenses expenseData={expenses} deleteExpense={deleteExpense} editExpense={editExpense} />
          </Col>
        </Row>
         </Container>
  );
}

export default App;
