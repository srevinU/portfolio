export type ContactInputsFormT = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormT = {
  title: string;
  message: string;
  name: string;
  email: string;
  message_placeholder: string;
  submit: string;
};

export type ContactsFormT = {
  FR: ContactFormT;
  EN: ContactFormT;
};
