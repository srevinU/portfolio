import { RxCrossCircled } from "react-icons/rx";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Experience } from "../../utils/data/aboutContent";
import {
  useExperienceConfigHooks,
  useExperienceHooks,
} from "../../hooks/admin/experienceConfig";

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
    <div className="work_experience_config">
      <div className="experience_actions">
        <select
          name="status"
          defaultValue={workExperience.status}
          onChange={handleValueChange}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
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
        />
        <h3 className="work_experience_description">Company</h3>
        <input
          type="text"
          name="company"
          defaultValue={workExperience.company}
          onChange={handleValueChange}
        />
      </div>
      <div className="work_experience_dates">
        <h3 className="work_experience_start_date">Start Date</h3>
        <input
          type="date"
          name="start_date"
          defaultValue={workExperience.start_date}
          onChange={handleValueChange}
        />
        <h3 className="work_experience_end_date">End Date</h3>
        <input
          type="date"
          name="end_date"
          defaultValue={workExperience.end_date}
          onChange={handleValueChange}
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
