import { useEffect, useState } from "react";
import styles from "./Input.module.css";

export const EmailInput = () => {
  const [focus, setFocus] = useState(true);
  const [valueError, setValueError] = useState(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // focus 유무 감지
  const handleFocusIn = () => {
    setFocus(true);
  };
  const handleFocusOut = (e) => {
    setFocus(false);
    const inputValue = e.target.value;

    if (!inputValue) {
      // 값이 없으면
      setValueError("noValue");
    } else if (!emailRegex.test(inputValue)) {
      // 값이 이메일 형식이 아니면
      setValueError("notEmail");
    } else {
      setValueError(null);
    }
  };

  return (
    <>
      <div className={`${styles.input}`}>
        <label className={`${styles.label}`} htmlFor="passwordInput">
          이메일
        </label>
        <input
          className={
            valueError
              ? `${styles.signInput} ${styles.errorInput}`
              : `${styles.signInput}`
          }
          id="emailInput"
          name="email"
          type="email"
          placeholder="이메일 입력"
          onFocus={handleFocusIn}
          onBlur={handleFocusOut}
        />

        {focus ? null : (
          <>
            {valueError === "noValue" ? (
              <p className={`${styles.errorMessage}`} id="noValue">
                이메일을 입력해주세요.
              </p>
            ) : null}
            {valueError === "notEmail" ? (
              <p className={`${styles.errorMessage}`} id="wrongEmail">
                올바른 이메일 주소가 아닙니다.
              </p>
            ) : null}
            {/* <p className={`${styles.errorMessage}`} id="checkValue">
              이메일을 확인해주세요.
            </p> */}
          </>
        )}
      </div>
    </>
  );
};

export const PasswordInput = () => {
  const [eye, setEye] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [focus, setFocus] = useState(true);
  const [valueError, setValueError] = useState(null);

  // focus 유무 감지
  const handleFocusIn = () => {
    setFocus(true);
  };
  const handleFocusOut = (e) => {
    setFocus(false);
    const inputValue = e.target.value;

    if (!inputValue) {
      // 값이 없으면
      setValueError("noValue");
    } else {
      setValueError(null);
    }
  };

  // 눈 버튼 클릭으로 변환 (비밀번호만 해당)
  const handleEyeButton = () => {
    setEye(!eye);
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <>
      <div className={`${styles.input}`}>
        <label className={`${styles.label}`} htmlFor="passwordInput">
          비밀번호
        </label>
        <input
          className={
            valueError
              ? `${styles.signInput} ${styles.errorInput}`
              : `${styles.signInput}`
          }
          id="passwordInput"
          type={inputType}
          name="password"
          placeholder="비밀번호 입력"
          onFocus={handleFocusIn}
          onBlur={handleFocusOut}
        />
        <button
          className={`${styles.eyeButton}`}
          type="button"
          onClick={handleEyeButton}
        >
          {eye ? (
            <img src="./images/eye-on.svg" id="eye-on" alt="eye-on" />
          ) : (
            <img src="./images/eye-off.svg" id="eye-off" alt="eye-off" />
          )}
        </button>

        {focus ? null : (
          <>
            {valueError === "noValue" ? (
              <p className={`${styles.errorMessage}`} id="noValue">
                비밀번호를 입력해주세요.
              </p>
            ) : null}
            {/* <p className={`${styles.errorMessage}`} id="checkValue">
              비밀번호를 확인해주세요.
            </p> */}
          </>
        )}
      </div>
    </>
  );
};

export const PasswordCheckInput = ({ check }) => {
  const [eye, setEye] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [focus, setFocus] = useState(true);
  const [valueError, setValueError] = useState(null);
  const [checkRequired, setcheckRequired] = useState(check);

  // focus 유무 감지
  const handleFocusIn = () => {
    setFocus(true);
  };
  const handleFocusOut = (e) => {
    setFocus(false);
    const inputValue = e.target.value;

    if (!inputValue) {
      // 값이 없으면
      setValueError("noValue");
    } else {
      setValueError(null);
    }
  };

  // 눈 버튼 클릭으로 변환 (비밀번호만 해당)
  const handleEyeButton = () => {
    setEye(!eye);
    setInputType(inputType === "password" ? "text" : "password");
  };

  useEffect(() => {
    setcheckRequired(check);
  }, [check]);

  return (
    <>
      <div className={`${styles.input}`}>
        <label className={`${styles.label}`} htmlFor="passwordInput">
          비밀번호
        </label>
        <input
          className={
            valueError
              ? `${styles.signInput} ${styles.errorInput}`
              : `${styles.signInput}`
          }
          id="passwordCheckInput"
          type={inputType}
          name="passwordCheck"
          placeholder="비밀번호 재입력"
          onFocus={handleFocusIn}
          onBlur={handleFocusOut}
        />
        <button
          className={`${styles.eyeButton}`}
          type="button"
          onClick={handleEyeButton}
        >
          {eye ? (
            <img src="./images/eye-on.svg" id="eye-on" alt="eye-on" />
          ) : (
            <img src="./images/eye-off.svg" id="eye-off" alt="eye-off" />
          )}
        </button>

        {focus ? null : (
          <>
            {valueError === "noValue" ? (
              <p className={`${styles.errorMessage}`} id="noValue">
                비밀번호를 입력해주세요.
              </p>
            ) : null}
            {checkRequired ? (
              <p className={`${styles.errorMessage}`} id="wrongPassword">
                비밀번호가 다릅니다.
              </p>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};
