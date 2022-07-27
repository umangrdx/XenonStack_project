import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";
import {Feedback} from "../../services/apicalls";


export default function Contactus(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    function onChangeName(e) {
        setName(e.target.value);
    }
    function onChangeEmail(e) {
        setEmail(e.target.value);
    }
    function onChangeMessage(e) {
        setMessage(e.target.value);
    }

    function SubmitHandler(event) {
        event.preventDefault();
        const resp =Feedback(name, email, message);
        console.log(resp)
        alert("Feedback sent successfully");
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron text-white">
                            <h1 className="display-4 mt-3">Contact Us</h1>
                            <p className="lead">Help Us Grow, Submit Your Feedback/Query Here</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Create a form*/}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" value={name} onChange={onChangeName} placeholder="Enter name"/>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
                                    </div>
                                    <div className="form-group mt-4">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={onChangeEmail} placeholder="Enter email"/>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group mt-4">
                                        <label htmlFor="ConsumerText">Message</label>
                                        <textarea  rows="4" className="form-control" id="ConsumerText" value={message} onChange={onChangeMessage} placeholder="Type Your Message Here"/>
                                    </div>
                                    <Button type="submit" className="btn btn-success mt-3 col-md-6" onClick={SubmitHandler}>Submit</Button>
                                    <Link to={'/'}><Button type="submit" className="btn btn-secondary mt-3 col-md-6">Back</Button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
