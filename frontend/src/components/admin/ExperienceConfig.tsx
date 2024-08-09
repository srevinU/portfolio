import { RxCrossCircled } from "react-icons/rx";
import { IoIosAddCircleOutline } from "react-icons/io";

import {
  useExperienceConfigHooks,
  useExperienceHooks,
} from "../../hooks/admin/experienceConfig";
import { Experience } from "../../entities/Experience";

function WorkExperience({
  workExperience,
  deleteWorkExperience,
}: {
  workExperience: Experience;
  deleteWorkExperience: Function;
}): JSX.Element {
  const { handleValueChange } = useExperienceHooks({
    workExperience,
  });

  return (
    <div className="work_experience_config" data-testid={workExperience.uuid}>
      <div className="experience_actions">
        <select
          name="status"
          defaultValue={workExperience.status}
          onChange={handleValueChange}
          data-testid={`${workExperience.uuid}_select`}
        >
          <option value="active" data-testid={`${workExperience.uuid}_active`}>
            Active
          </option>
          <option
            value="inactive"
            data-testid={`${workExperience.uuid}_inactive`}
          >
            Inactive
          </option>
        </select>
        <RxCrossCircled
          color="red"
          size={"20px"}
          onClick={() => deleteWorkExperience(workExperience)}
        />
      </div>
      <div className="work_experience_inputs">
        <h3 className="work_experience_title">Title</h3>
        <input
          type="text"
          name="title"
          defaultValue={workExperience.title}
          onChange={handleValueChange}
          data-testid={`${workExperience.uuid}_title`}
        />
        <h3 className="work_experience_description">Company</h3>
        <input
          type="text"
          name="company"
          defaultValue={workExperience.company}
          onChange={handleValueChange}
          data-testid={`${workExperience.uuid}_company`}
        />
      </div>
      <div className="work_experience_dates">
        <h3 className="work_experience_start_date">Start Date</h3>
        <input
          type="date"
          name="start_date"
          defaultValue={workExperience.start_date}
          onChange={handleValueChange}
          data-testid={`${workExperience.uuid}_start_date`}
        />
        <h3 className="work_experience_end_date">End Date</h3>
        <input
          type="date"
          name="end_date"
          defaultValue={workExperience.end_date}
          onChange={handleValueChange}
          data-testid={`${workExperience.uuid}_end_date`}
        />
      </div>
    </div>
  );
}

export default function ExperienceConfig({
  experiences,
  setExperiences,
}: {
  experiences: Array<Experience>;
  setExperiences: Function;
}): JSX.Element {
  const { handleAddEperience, handleDeleteExperience } =
    useExperienceConfigHooks(experiences, setExperiences);

  return (
    <div>
      <h2 className="section_title">Work experience</h2>
      {experiences.map((experience) => (
        <WorkExperience
          workExperience={experience}
          deleteWorkExperience={handleDeleteExperience}
          key={experience.uuid}
        />
      ))}
      <IoIosAddCircleOutline
        color="green"
        size={"30px"}
        onClick={handleAddEperience}
      />
    </div>
  );
}
