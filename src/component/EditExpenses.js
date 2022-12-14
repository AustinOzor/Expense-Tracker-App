import React from "react";
import { Form, Button } from "react-bootstrap"
import { useState } from "react";
import { connect } from "react-redux"
import { reduxEditExpense} from "../Actions/ExpensesAction";
    
    
const EditExpenses = (props) => {
    const [item, setItem] = useState(props.expenseData.item)
    const [datePurchased, setDate] = useState(props.expenseData.datePurchased)
    const [amountPaid, setAmountPaid] = useState(props.expenseData.amountPaid)
    const [category, setCategory] = useState(props.expenseData.category)

   
     const handleEdit = (e) => {
         e.preventDefault()
         
         let newInfo = { id: props.expenseData.id, item, datePurchased, amountPaid, category };
         props.reduxEditExpense(newInfo)
      //   props.editUser(props.userData.id, { name, contact, location });

         setItem("");
         setDate("");     
         setAmountPaid("");
         setCategory("");
         props.hide()
     }
   return (
        
           <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Item</Form.Label>
               <Form.Control type="text" placeholder="item" value={item}
                   onChange={(e) => {
                   setItem(e.target.value)
                       console.log(item)
                    }} />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Date Purchased</Form.Label>
               <Form.Control type="date" placeholder="date" value={datePurchased} onChange={(e) => {
                   setDate(e.target.value);
                }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Amount</Form.Label>
               <Form.Control type="text" placeholder="Location" value={amountPaid}
                   onChange={(e) => {
                       setAmountPaid(e.target.value);
                       console.log(amountPaid)
               }} />
            </Form.Group>
              <Form.Group style={{width: "300px", marginLeft:"50px"}} className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Category</strong></Form.Label> 
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

            <Button variant="primary" type="submit" onClick={handleEdit}>
                Save
            </Button>
         </Form>    
        
    );
}
const mapStateToProps = {
    reduxEditExpense : reduxEditExpense
}
export default connect(null, mapStateToProps) (EditExpenses);
