import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    let navigate = useNavigate();

    let location = useLocation();

    // const redirect = location.search ? location.search.split("=")[1] : "/";
    const redirect = location.search ? new URLSearchParams(location.search).get('redirect') : ''

    const { isAuthenticated, error, loading } = useSelector(
        (state) => state.auth
    );

    const notify = (message = "") =>
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });


    useEffect(() => {
        if (isAuthenticated && redirect === "shipping") {
            // navigate(redirect.get('redirect'), {replace: true})

            navigate(`/${redirect}`, { replace: true });
        } else if (isAuthenticated) navigate("/");

        if (error) {
            notify(error);

            dispatch(clearErrors());
        }
    }, [dispatch, isAuthenticated, error, navigate, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(login(email, password));
    };

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title={"Login"} />

                    <div className="row wrapper">
                        <div className="col-10 col-lg-5">
                            <form className="shadow-lg" onSubmit={submitHandler}>
                                <h1 className="mb-3">Login</h1>

                                <div className="form-group">
                                    <label htmlFor="email_field">Email</label>

                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password_field">Password</label>

                                    <input
                                        type="password"
                                        id="password_field"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <Link to="/password/forgot" className="float-right mb-4">
                                    Forgot Password?
                                </Link>

                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                >
                                    LOGIN
                                </button>

                                <Link to="/register" className="float-right mt-3">
                                    New User?
                                </Link>
                            </form>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Login;