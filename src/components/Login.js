import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );

            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            {success ? (

                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>{<a href="#">Go to Home</a>}</p>
                </section>
            ) : (
                <section>
                    <div className={"form_header"}>
                        <p
                            ref={errRef}
                            className={errMsg ? 'errmsg' : 'offscreen'}
                            aria-live="assertive"
                        >
                            {errMsg}
                        </p>
                        <h1 className={"form_header_welcome"}> Chao mung den Cuoidi Cuoidi</h1>
                        <p> Hay tan huong dam cuoi cua ban</p>
                        <h1 className={"form_header_register-text"}>Đăng nhập</h1>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <label >Tên đầy đủ:</label>
                        <div className={"inputForm"}>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        </div>

                        <label htmlFor="password">Mật khẩu:</label>
                        <div className={"inputForm"}>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        </div>
                        <button>Đăng nhập</button>
                    </form>
                    <p>
                        <br />
                        <span className="line">
							<a href="/">Đăng ký</a>
						</span>
                    </p>

                </section>
            )}
        </>
    );
};

export default Login;
