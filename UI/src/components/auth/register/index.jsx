import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Registration Data:", data);
    alert("Registered successfully!");
    navigate("/");
  };

  return (
    <StyledWrapper>
      <div className="content">
        <div className="text">Sign Up</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <input
              type="text"
              className="input"
              {...register("firstName", { required: "First name is required" })}
              required
            />
            <label className="label">First Name</label>
            {errors.firstName && (
              <p className="error">{errors.firstName.message}</p>
            )}
          </div>

          <div className="field">
            <input
              type="text"
              className="input"
              {...register("lastName", { required: "Last name is required" })}
              required
            />
            <label className="label">Last Name</label>
            {errors.lastName && (
              <p className="error">{errors.lastName.message}</p>
            )}
          </div>
          <div className="field">
            <input
              type="email"
              className="input"
              {...register("email", { required: "Email is required" })}
              required
            />
            <label className="label">Email</label>
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="field">
            <input
              type="password"
              className="input"
              {...register("password", { required: "Password is required" })}
              required
            />
            <label className="label">Password</label>
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
          <button type="submit" className="button">
            Sign Up
          </button>
          <div className="sign-up">
            Already have an account? <Link to="/login">Login</Link>
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

  .input {
    width: 100%;
    padding: 12px 15px;
    font-size: 16px;
    border: none;
    outline: none;
    border-radius: 25px;
    background: #e0eae5;
    color: #3e5f52;
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.05);
  }

  .input:focus {
    box-shadow: 0 0 0 2px #3e5f52;
    background: #e7eee9;
  }

  .label {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    font-size: 14px;
    color: #3e5f52;
    pointer-events: none;
    transition: 0.2s;
  }

  .input:focus ~ .label,
  .input:valid ~ .label {
    opacity: 0;
  }

  .button {
    margin-top: 10px;
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
    margin-top: 15px;
    text-align: center;
    font-size: 16px;
    color: #3e5f52;
  }

  .sign-up a {
    color: #3e5f52;
    text-decoration: none;
    font-weight: 500;
  }

  .sign-up a:hover {
    text-decoration: underline;
  }

  .error {
    color: red;
    font-size: 14px;
    margin-top: 5px;
  }
`;

export default Register;
