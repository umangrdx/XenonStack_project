import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function LoginPage(props) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    function onChangeName(e) {
        setName(e.target.value);
    }
    function onChangePassword(e) {
        setPassword(e.target.value);
    }
    function submmit(e) {
        e.preventDefault();
        console.log(name, password);
        setName("");
        setPassword("");
    }
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron text-white">
                            <h1 className="display-4 mt-3">Login</h1>
                            <p className="lead">Login to your account</p>
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
                                    </div>
                                    <div className="form-group mt-4">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password" aria-describedby="emailHelp" value={password} onChange={onChangePassword} placeholder="Enter password"/>
                                    </div>
                                    <div className="form-group mt-4">
                                        <Button className="col-md-6" variant="primary" type="submit" onClick={submmit} href={"/"}>Login</Button>
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