import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { AuthContext } from "../../../core/contexts/Authentication";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login({ data });
    alert("Logged in successfully!");
    navigate("/");
  };

  return (
    <StyledWrapper>
      <div className="content">
        <div className="text">Login</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <input
              type="email"
              className="input"
              {...register("email", { required: "Email is required" })}
              required
            />
            <span className="span">
              <svg
                viewBox="0 0 512 512"
                height={20}
                width={50}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    fill="#595959"
                    d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"
                  />
                </g>
              </svg>
            </span>
            <label className="label">Email</label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="field">
            <input
              type="password"
              className="input"
              {...register("password", { required: "Password is required" })}
              required
            />
            <span className="span">
              <svg
                viewBox="0 0 512 512"
                height={20}
                width={50}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    fill="#595959"
                    d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668z"
                  />
                </g>
              </svg>
            </span>
            <label className="label">Password</label>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button type="submit" className="button">
            Log In
          </button>
          <div className="sign-up">
            Doesn't have an account? <Link to="/register">Signup</Link>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  min-height: 100vh;
  background-color: #3e5f52;

  .content {
    width: 360px;
    padding: 40px 30px;
    background: #f1f5f4;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .text {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #3e5f52;
    text-align: center;
  }

  .field {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
  }

  .field .input {
    width: 100%;
    padding: 12px 15px 12px 50px;
    font-size: 16px;
    border: none;
    outline: none;
    border-radius: 25px;
    background: #e0eae5;
    color: #3e5f52;
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.05);
  }

  .field .input:focus {
    box-shadow: 0 0 0 2px #3e5f52;
    background: #e7eee9;
  }

  .field .span {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
  }

  .field .span svg {
    height: 20px;
    width: 20px;
    fill: #3e5f52;
  }

  .field .label {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 14px;
    color: #3e5f52;
    transition: 0.2s;
  }

  .field .input:focus ~ .label,
  .field .input:valid ~ .label {
    opacity: 0;
  }

  .forgot-pass {
    text-align: left;
    margin: 10px 0;
  }

  .forgot-pass a {
    font-size: 14px;
    color: #3e5f52;
    text-decoration: none;
  }

  .forgot-pass a:hover {
    text-decoration: underline;
  }

  .button {
    margin: 15px 0;
    width: 100%;
    height: 50px;
    font-size: 18px;
    font-weight: 600;
    background: #3e5f52;
    border-radius: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #ffffff;
    transition: 0.3s ease;
  }

  .button:hover {
    background: #324d43;
  }

  .sign-up {
    margin-top: 10px;
    color: #3e5f52;
    font-size: 16px;
    text-align: center;
  }

  .sign-up a {
    color: #3e5f52;
    text-decoration: none;
    font-weight: 500;
  }

  .sign-up a:hover {
    text-decoration: underline;
  }

  .text-red-500 {
    color: red;
    font-size: 14px;
    margin-top: 4px;
  }
`;

export default Login;
