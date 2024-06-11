import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { IoTrashBinOutline } from "react-icons/io5";
import "../../style/components/Panel.css";
import {
  AdminMessageT,
  AdminMessagesT,
  SearchT,
} from "../../utils/types/Messages";
import AuthService from "../../webServices/Auth";
import { messages as messagesData } from "../../utils/data/messages";
import { search as searchData } from "../../utils/data/search";
import { Navigate } from "react-router-dom";

const Panel = () => {
  const Auth = new AuthService();
  // const user = Auth.getCurrentUser();
  const user = { username: "admin" };
  const [search, setSearch] = useState<SearchT>(searchData);
  const [messages, setMessages] = useState<AdminMessagesT>(messagesData);
  const [saveActive, setSaveActive] = useState<boolean>(false);
  const [messagesToDelete, setmessagesToDelete] = useState<Array<number>>([]);
  const [messagesToSave, setmessagesToSave] = useState<AdminMessagesT>([]);

  useEffect((): void => {
    setMessages(filterMessages(messagesData, search));
  }, [search]);

  useEffect((): void => {
    setSaveActive(messagesToSave.length > 0 || messagesToDelete.length > 0);
  }, [messagesToSave, messagesToDelete]);

  const handleOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    message: AdminMessageT,
  ): void => {
    message.state = e.target.value;
    message.modified = !message.modified;
    if (message.modified) {
      setmessagesToSave([...messagesToSave, message]);
    } else {
      setmessagesToSave(messagesToSave.filter((m) => m.id !== message.id));
    }
  };

  const handleDeleteChange = (message: AdminMessageT): void => {
    message.delete = !message.delete;
    if (message.delete) {
      setmessagesToDelete([...messagesToDelete, message.id]);
    } else {
      setmessagesToDelete(messagesToDelete.filter((id) => id !== message.id));
    }
  };

  const filterMessages = (
    messages: AdminMessagesT,
    search: any,
  ): AdminMessagesT => {
    return messages.filter((message: AdminMessageT) => {
      return (
        message.name.toLowerCase().includes(search.name.toLowerCase()) &&
        message.email.toLowerCase().includes(search.email.toLowerCase()) &&
        message.message.toLowerCase().includes(search.message.toLowerCase()) &&
        message.state.toLowerCase().includes(search.state.toLowerCase())
      );
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (): void => {
    if (messagesToSave.length) {
      console.log("messages to save", messagesToSave);
    }
    if (messagesToDelete.length) {
      console.log("messages to delete", messagesToDelete);
    }
  };

  if (!user) {
    Navigate({ to: "/login" });
  }

  return (
    <>
      <div className="panel">
        <h2>Welcome, {user.username}</h2>
        <table>
          <thead>
            <tr>
              <th>
                Name
                <input
                  data-testid="name-col"
                  name="name"
                  onChange={handleSearch}
                />
              </th>
              <th>
                Email
                <input
                  data-testid="email-col"
                  name="email"
                  onChange={handleSearch}
                />
              </th>
              <th>
                Message
                <input
                  data-testid="message-col"
                  name="message"
                  onChange={handleSearch}
                />
              </th>
              <th>
                State
                <input
                  data-testid="state-col"
                  name="state"
                  onChange={handleSearch}
                />
              </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message: AdminMessageT) => (
              <tr key={message.id}>
                <td data-testid={`name_${message.id}`}>{message.name}</td>
                <td data-testid={`email_${message.id}`}></td>
                <td data-testid={`message_${message.id}`}></td>
                <td>
                  <select
                    data-testid={`state_${message.id}`}
                    value={message.state}
                    onChange={(e) => handleOptionChange(e, message)}
                  >
                    <option value="unread" data-testid={`unread_${message.id}`}>
                      Unread
                    </option>
                    <option value="read" data-testid={`read_${message.id}`}>
                      Read
                    </option>
                  </select>
                </td>
                <td>
                  <IconContext.Provider
                    value={
                      message.delete ? { color: "red" } : { color: "white" }
                    }
                  >
                    <IoTrashBinOutline
                      data-testid={`delete_${message.id}`}
                      onClick={() => handleDeleteChange(message)}
                    />
                  </IconContext.Provider>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="btn_section">
        <button data-testid="save" disabled={!saveActive} onClick={handleSave}>
          Save
        </button>
        <button data-testid="logout" onClick={Auth.logout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Panel;
