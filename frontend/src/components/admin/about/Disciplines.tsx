import { Discipline } from "../../../utils/entities/Discipline";

export function Disciplines({
  disciplineContent,
  disciplineRef,
  handleDisciplinesSelected,
}: {
  disciplineContent: Array<string>;
  disciplineRef: Array<Discipline>;
  handleDisciplinesSelected: Function;
}): JSX.Element {
  return (
    <div>
      <select
        name="status"
        defaultValue={disciplineRef.map((discipline) =>
          disciplineContent.includes(discipline.uuid) ? discipline.value : "",
        )}
        onChange={(event) => {
          const values = Array.from(event.target.selectedOptions).map(
            ({ id }) => id,
          );
          handleDisciplinesSelected(values);
        }}
        multiple={true}
      >
        {disciplineRef.map((discipline: Discipline) => (
          <option
            id={discipline.uuid}
            value={discipline.value}
            key={discipline.uuid}
          >
            {discipline.label}
          </option>
        ))}
      </select>
    </div>
  );
}
