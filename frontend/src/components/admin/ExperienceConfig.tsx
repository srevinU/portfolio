import { RxCrossCircled } from "react-icons/rx";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Experience } from "../../utils/entities/Experience";
import { ChangeEvent, MouseEventHandler } from "react";

function WorkExperience({
  workExperience,
  deleteWorkExperience,
  handleExperienceValueChange,
}: {
  workExperience: Experience;
  deleteWorkExperience: Function;
  handleExperienceValueChange: (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    currentExperience: Experience,
  ) => void;
}): JSX.Element {
  return (
    <div className="work_experience_config" data-testid={workExperience._id}>
      <div className="experience_actions">
        <select
          name="status"
          defaultValue={workExperience.status}
          onChange={(event) =>
            handleExperienceValueChange(event, workExperience)
          }
          data-testid={`${workExperience._id}_select`}
        >
          <option value="active" data-testid={`${workExperience._id}_active`}>
            Active
          </option>
          <option
            value="inactive"
            data-testid={`${workExperience._id}_inactive`}
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
          onChange={(event) =>
            handleExperienceValueChange(event, workExperience)
          }
          data-testid={`${workExperience._id}_title`}
        />
        <h3 className="work_experience_description">Company</h3>
        <input
          type="text"
          name="company"
          defaultValue={workExperience.company}
          onChange={(event) =>
            handleExperienceValueChange(event, workExperience)
          }
          data-testid={`${workExperience._id}_company`}
        />
      </div>
      <div className="work_experience_dates">
        <h3 className="work_experience_start_date">Start Date</h3>
        <input
          type="date"
          name="start_date"
          defaultValue={workExperience.start_date}
          onChange={(event) =>
            handleExperienceValueChange(event, workExperience)
          }
          data-testid={`${workExperience._id}_start_date`}
        />
        <h3 className="work_experience_end_date">End Date</h3>
        <input
          type="date"
          name="end_date"
          defaultValue={workExperience.end_date}
          onChange={(event) =>
            handleExperienceValueChange(event, workExperience)
          }
          data-testid={`${workExperience._id}_end_date`}
        />
      </div>
    </div>
  );
}

export default function ExperienceConfig({
  experiences,
  handleAddEperience,
  handleDeleteExperience,
  handleExperienceValueChange,
}: {
  experiences: Array<Experience>;
  handleAddEperience: MouseEventHandler<SVGElement>;
  handleDeleteExperience: Function;
  handleExperienceValueChange: (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    currentExperience: Experience,
  ) => void;
}): JSX.Element {
  return (
    <div>
      <h2 className="section_title">Work experiences</h2>
      {experiences.map((experience) => (
        <WorkExperience
          key={experience._id}
          workExperience={experience}
          deleteWorkExperience={handleDeleteExperience}
          handleExperienceValueChange={handleExperienceValueChange}
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
