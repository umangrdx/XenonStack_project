import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function SignupPage(props) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    function onchangeName  (e){
        setName(e.target.value);
    }
    function onchangePassword (e){
        setPassword(e.target.value);
    }
    function onchangeEmail (e){
        setEmail(e.target.value);
    }
    function onchangePhone (e){
        setPhone(e.target.value);
    }
    function submit (e){
        e.preventDefault();
        console.log(name, password, email, phone);
        setName("");
        setPassword("");
        setEmail("");
        setPhone("");
    }
return(
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron text-white">
                        <h1 className="display-4 mt-3">Signup</h1>
                        <p className="lead">Signup to your account</p>
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
                                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" value={name} onChange={onchangeName} placeholder="Enter name"/>
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" aria-describedby="emailHelp" value={password} onChange={onchangePassword} placeholder="Enter password"/>
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={onchangeEmail} placeholder="Enter email"/>
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" className="form-control" id="phone" aria-describedby="emailHelp" value={phone} onChange={onchangePhone} placeholder="Enter phone"/>
                                </div>
                                <div className="form-group mt-4">
                                    <Button className="col-md-6" variant="primary" type="submit" onClick={submit}>Signup</Button>
                                    <Link to={'/'}><Button type="submit" className="btn btn-secondary col-md-6">Back</Button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
