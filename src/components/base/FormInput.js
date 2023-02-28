import "./form-input-style.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faInfoCircle, faTimes} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";

const FormInput = ({value, type, label, onChange, validationMessage, isValid, onValidate}) => {
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        onValidate()
    }, [value]);
    // const
    return (
        <>
            <label className={"register-login-label"}>
                {label}
                <FontAwesomeIcon
                    icon={faCheck}
                    className={isValid ? 'valid' : 'hide'}
                />
                <FontAwesomeIcon
                    icon={faTimes}
                    className={isValid || !value ? 'hide' : 'invalid'}
                />
            </label>
            <div className={"inputForm"}>
                <input
                    type={type}
                    // ref={userRef}
                    autoComplete="off"
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                    required
                    aria-invalid={isValid ? 'false' : 'true'}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <p
                    className={
                        isFocused && value && !isValid ? 'instructions' : 'offscreen'
                    }
                >
                    {validationMessage()}
                </p>
            </div>
        </>
    )
}
export default FormInput;