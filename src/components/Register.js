
import { useRef, useState, useEffect } from 'react';
import {
    faCheck,
    faTimes,
    faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from "../components/Login"
import axios from "../api/axios";
import "../assets/css/Register.css";
import {FormInput} from "./base";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PHONE_REGEX = /^0[0-9]{8,12}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState("");
    const [isPhoneValid, setIsPhoneValid] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg('Invalid Entry');
            return;
        }
        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data));
            setSuccess(true);
            //clear state and controlled inputs
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed');
            }
            errRef.current.focus();
        }
    };

    return (
        <div className={"container-register"}>
        <>
            {success ? (
                <Login />
            ) : (
                <section className={"register-section"}>
                        <div className={"form_header"}>
                            <p
                                ref={errRef}
                                className={errMsg ? 'errmsg' : 'offscreen'}
                                aria-live="assertive"
                            >
                                {errMsg}
                            </p>
                            <h1 className={"form_header_welcome"}> Chào mừng đến Cuoidi Cuoidi</h1>
                            <p> Hãy tận hưởng đám cưới của bạn</p>
                            <h1 className={"form_header_register-text"}>Đăng ký</h1>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <FormInput
                                value={user}
                                label={"Tên đầy đủ"}
                                type={"text"}
                                onChange={setUser}
                                validationMessage={
                                   () =>
                                    <>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        4 đến 24 ký tự
                                        <br />
                                        Phải bắt đầu bằng một chữ cái và không cách
                                        <br />
                                        Cho phép chữ cái, số, dấu gạch dưới, dấu gạch nối.
                                    </>
                                }
                                isValid={isNameValid}
                                onValidate={() => {
                                        setIsNameValid(USER_REGEX.test(user));
                                    }
                                }
                            />
                            <FormInput
                                value={phoneNumber}
                                label={"Số điện thoại"}
                                type={"text"}
                                onChange={setPhoneNumber}
                                validationMessage={
                                    () =>
                                        <>
                                            <FontAwesomeIcon icon={faInfoCircle} />
                                            Điền số bắt đầu bằng số 0
                                            <br />
                                            Phải là các chữ số
                                            <br />
                                            Tối đa 12 chữ số và không được nhập chữ cái hoặc bất cứ ký tự nào khác
                                        </>
                                }
                                isValid={isPhoneValid}
                                onValidate={() => {
                                    setIsPhoneValid(PHONE_REGEX.test(phoneNumber));
                                }
                                }
                            />

                                <label htmlFor="email">
                                    Email:
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className={validMatch && matchPwd ? 'valid' : 'hide'}
                                    />
                                    <FontAwesomeIcon
                                        icon={faTimes}
                                        className={validMatch || !matchPwd ? 'hide' : 'invalid'}
                                    />
                                </label>
                            <div className={"inputForm"}>
                                <input
                                    name = "email"
                                    type="text"
                                    id="email"

                                />
                            </div>

                            <label className={"register-login-label"}>
                                Mật khẩu:
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className={validPwd ? 'valid' : 'hide'}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className={validPwd || !pwd ? 'hide' : 'invalid'}
                                />
                            </label>
                            <div className={"inputForm"}>
                                <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                                aria-invalid={validPwd ? 'false' : 'true'}
                                aria-describedby="pwdnote"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                            />
                            <p
                                id="pwdnote"
                                className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
                            >
                                <FontAwesomeIcon icon={faInfoCircle} />
                                8 đến 24 ký tự
                                <br />
                                Phải bao gồm chữ hoa và chữ thường, số và một
                                ký tự đặc biệt.
                                <br />
                                Các ký tự đặc biệt được phép:{' '}
                                <span aria-label="exclamation mark">!</span>{' '}
                                <span aria-label="at symbol">@</span>{' '}
                                <span aria-label="hashtag">#</span>{' '}
                                <span aria-label="dollar sign">$</span>{' '}
                                <span aria-label="percent">%</span>
                            </p>
                            </div>
                            <label className={"register-login-label"}>
                                Xác nhận mật khẩu:
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className={validMatch && matchPwd ? 'valid' : 'hide'}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className={validMatch || !matchPwd ? 'hide' : 'invalid'}
                                />
                            </label>

                            <div className={"inputForm"}>
                            <input
                                type="password"
                                id="confirm_pwd"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                value={matchPwd}
                                required
                                aria-invalid={validMatch ? 'false' : 'true'}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                            />
                            <p
                                id="confirmnote"
                                className={
                                    matchFocus && !validMatch ? 'instructions' : 'offscreen'
                                }
                            >
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Must match the first password input field.
                            </p>
                            </div>
                            <button
                                disabled={!isNameValid || !validPwd || !validMatch ? true : false}
                            >
                                Đăng ký ngay
                            </button>
                        </form>
                        <p>

                            <br />
                            <span className="line"><a href="/login">Đăng nhập</a></span>
                        </p>
                </section>
            )}
        </>
        </div>
    );
};

export default Register;
