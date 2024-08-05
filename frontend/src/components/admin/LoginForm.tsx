
import "../../style/components/loginForm.css";
import useLoginFormHooks from "../../hooks/loginForm";

function LoginForm({handlePopin}: {handlePopin: Function}): JSX.Element {
  const { handleChange, loading, handleSubmit } = useLoginFormHooks(handlePopin);

  return (
    <div className="login_content">
      <form className="login_form">
        <h2 className="login_title">Login</h2>
        <input
          className="input_form"
          type="email"
          id="email"
          name="email"
          data-testid="email"
          onChange={handleChange}
          placeholder="Email"
          required
          disabled={loading}
        />
        <input
          className="input_form"
          type="password"
          id="password"
          name="password"
          data-testid="password"
          onChange={handleChange}
          placeholder="Password"
          required
          disabled={loading}
        />
        <button
          className="button_form"
          type="submit"
          data-testid="submit"
          onClick={handleSubmit}
          disabled={loading}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
