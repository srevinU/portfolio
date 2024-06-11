import { IoTrashBinOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { AdminMessageT } from "../../utils/types/Messages";

function Message({
  message,
  optionChange,
  deleteChange,
}: {
  message: AdminMessageT;
  optionChange: Function;
  deleteChange: Function;
}): JSX.Element {
  return (
    <>
      {
        <tr key={message.id}>
          <td>{message.name}</td>
          <td>{message.email}</td>
          <td>{message.message}</td>
          <td>
            <select
              value={message.state}
              onChange={(e) => optionChange(e, message)}
            >
              <option value="unread">Unread</option>
              <option value="read">Read</option>
            </select>
          </td>
          <td>
            <IconContext.Provider
              value={message.delete ? { color: "red" } : { color: "white" }}
            >
              <IoTrashBinOutline onClick={() => deleteChange(message)} />
            </IconContext.Provider>
          </td>
        </tr>
      }
    </>
  );
}

export default Message;
