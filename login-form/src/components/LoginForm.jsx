 export function LoginForm() {
        return (
          <>
            <div>
              <input
                placeholder="Email"
                className="login-input"
              />
            </div>
            <div>
              <input
                placeholder="Password"
                type="password"
                className="login-input"
              />
            </div>
            <button className="login-button">Login</button>
            <button className="login-button">Sign up</button>
          </>
        );
      }