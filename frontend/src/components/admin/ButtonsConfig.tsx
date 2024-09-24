import "../../style/components/admin/ButtonsConfig.css";

export default function ButtonsConfig({
  handleSubmit,
  handleReset,
}: {
  handleSubmit: Function;
  handleReset: Function;
}): JSX.Element {
  return (
    <div className="buttons_config">
      <button
        className="button_form"
        onClick={(e) => handleSubmit(e)}
        type="submit"
        data-testid="submit"
      >
        Submit
      </button>
      <button
        className="button_form"
        onClick={(e) => handleReset(e)}
        type="reset"
        data-testid="reset"
      >
        Reset
      </button>
    </div>
  );
}
