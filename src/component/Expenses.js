import React, {useState} from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import EditExpenses from './EditExpenses';
import { connect } from 'react-redux';
import { reduxDeleteExpense } from '../Actions/ExpensesAction';


const Expenses = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 

     const handleDelete = (e) => {
        e.preventDefault()
    //    dispatch(reduxDeleteUser(props.userData.id))
        props.reduxDeleteExpense(props.expenseData.id)
    }
    return (
        <>
        <Modal show={show} onHide={handleClose}>
                <Modal.Title>
                    Edit Expenses
                    
          </Modal.Title>
                <Modal.Body>
                    <EditExpenses
                        expenseData={props.expenseData}
                        editExpense={props.editExpense}
                        hide={handleClose}
                    />
                </Modal.Body>
        
            </Modal>
             <Col md={4}>
                <Card style={{margin:'0.5rem', backgroundColor:"#3E8EDE", }} className="  text-white">
                   <Card.Body>
            <Card.Title>Item & Services:{props.expenseData.name}</Card.Title>
            <Card.Text>
            <p>Date Purchased: {props.expenseData.contact}</p>
            <p>Amount Paid: { props.expenseData.location}</p>
            <p>Category: { props.expenseData.location}</p>
            </Card.Text>
             <Button onClick={handleShow} href="#"
                style={{
                    width: "100px", marginRight: "5px",
                    marginLeft: "10px", fontSize: "15px"
                }} variant="success" size="sm">Edit</Button>
                        
            <Button onClick={handleDelete} href="#" style={{
                width: "100px",
                marginRight: "5px", marginLeft: "10px", fontSize: "15px"
            }} variant="danger" size="sm">Delete</Button>
                  </Card.Body>
                </Card>
            </Col>
        </>
    )
}
const mapDispatchToProps = {
    reduxDeleteExpense: reduxDeleteExpense,
}
export default connect(null, mapDispatchToProps) (Expenses);