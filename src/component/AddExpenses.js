import React from "react";
import { Form, Button } from "react-bootstrap"
import { useState } from "react";
import { reduxNewExpense } from "../Actions/ExpensesAction";
import { connect } from "react-redux"
import { v4 as uuid } from 'uuid';

const AddExpenses = (props) => {
    const [item, setItem] = useState("")
    const [datePurchased, setDatePurchased] = useState("")
    const [amountPaid, setAmountPaid] = useState("")
    const [category, setCategory] = useState("")

    
     const handleSubmit = (e) => {
         e.preventDefault()
         props.reduxNewExpense({ id: uuid(), item, datePurchased, amountPaid, category })
         console.log({ id: uuid(), item, datePurchased, amountPaid, category })
     }
   return (
        
       <Form><h3 style={{backgroundColor:"#012169", textAlign:"center", color:"white",padding:"10px"}}>Add New Expenses Here</h3>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Item</Form.Label>
               <Form.Control type="text" placeholder="Item" value={item}
                   onChange={(e) => {
                   setItem(e.target.value)
                       console.log(item)
                    }} />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date Purchased</Form.Label>
               <Form.Control type="date" placeholder="Date" value={datePurchased}
                   onChange={(e) => {
                       setDatePurchased(e.target.value)
                       console.log(datePurchased)
                   }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Amount $</Form.Label>
               <Form.Control type="text" placeholder="amount ($)" value={amountPaid}
                   onChange={(e) => {
                       setAmountPaid(e.target.value);
                       console.log(amountPaid)
               }} />
            </Form.Group>
              <Form.Group style={{width: "300px", marginLeft:"50px"}} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category</Form.Label> 
               <Form.Select aria-label="Select Category" type="text" placeholder="Category"
                   value={category} onChange={(e => {
                       setCategory(e.target.value)
                   })}>
              <option>Select Category</option>
              <option>Food</option>
              <option>Drink</option>
              <option>Accomodation</option>
              <option>Transportation</option>
              <option>Housing</option>
              <option>Rent</option>
              <option>Miscellaneous</option>
            </Form.Select>
          </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Add Expenses
            </Button>
         </Form>    
        
    );
}
const mapDispatchToProps = {
reduxNewExpense: reduxNewExpense,
}

export default connect(null, mapDispatchToProps) (AddExpenses);
