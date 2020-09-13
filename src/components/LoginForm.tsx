import React, { ReactElement, useState } from "react";
import styles from "../Main.module.css";

interface Props {
  loading: boolean;
  onLoginClick: (userName: string, password: string) => void | undefined;
  onRegisterClick: (
    email: string,
    userName: string,
    password: string
  ) => void | undefined;
}

export default function LoginForm({
  onLoginClick,
  onRegisterClick,
  loading,
}: Props): ReactElement {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <div className={styles.header}>
        <ul className={styles.headerList}>
          <li className={styles.headerLogo}>
            <a>Financial Freedom</a>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <form className={styles.loginForm}>
          {showRegister ? (
            <h1 style={{ paddingBottom: "20px" }}>Register</h1>
          ) : (
            <h1 style={{ paddingBottom: "20px" }}>Login</h1>
          )}
          {showRegister ? <label>Email</label> : null}
          {showRegister ? (
            <input
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              className={styles.inputStyle}
            />
          ) : null}
          <label>User Name</label>
          <input
            value={userName}
            onChange={(e: any) => setUserName(e.target.value)}
            className={styles.inputStyle}
          />
          <label>Password</label>
          <input
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            className={styles.inputStyle}
            style={{ marginBottom: "40px" }}
            type="password"
          />
          <button
            onClick={(e) => {
              if (!showRegister) {
                e.preventDefault();
                onLoginClick(userName, password);
              } else {
                setShowRegister(false);
              }
            }}
            className={styles.buttonStyle}
            style={{ backgroundColor: "#aaaaaa" }}
          >
            Login
          </button>
          <button
            className={styles.buttonStyle}
            onClick={(e) => {
              if (
                (!showRegister || email.length,
                userName.length,
                password.length === 0)
              ) {
                e.preventDefault();
                setShowRegister(true);
              } else {
                e.preventDefault();
                onRegisterClick(email, userName, password);
              }
            }}
          >
            Register
          </button>
          <button
            className={styles.buttonStyle}
            style={{ backgroundColor: "#eeeeee" }}
            onClick={(e) => {
              e.preventDefault();
              onLoginClick("testUser", "testUserPass");
            }}
          >
            Login As Guest
          </button>
          {loading ? (
            <p style={{ marginTop: "10px" }}>Content Is Loading...</p>
          ) : null}
        </form>
        <div className={styles.loginForm} style={{width: "400px"}}>
          <h1>About</h1>
          <p style={{ marginTop: "20px" }}>
            A budgeting app that was built to develop my skills in 
            full-stack web development. It is built using:
          </p>
          <li style={{ marginTop: "10px" }}>React</li>
          <li>TypeScript</li>
          <li>Custom CSS</li>
          <li>Netlify</li>
          <li>Python</li>
          <li>Django</li>
          <li>SQLite</li>
          <li>Heroku</li>
          <p style={{ marginTop: "10px" }}>
            You can either log in as guest, register yourself, or use 
            some existing users like:
          </p>
          <table style={{ marginTop: "20px", width: "100px" }}>   
            <thead>
              <tr>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>user1</td>
                <td>pass</td>
              </tr>
              <tr>
                <td>user2</td>
                <td>pass</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
