import { AdminForm } from "../entities/AdminForm";

const adminFormContent: AdminForm = {
  _id: "26627210-c7ea-49c4-9432-f1b33d895240",
  home: {
    _id: "cd73642b-76c2-4192-88aa-f3e838e3060e",
    EN: {
      title: "Title test",
      subtitle: "subtitle test",
    },
    FR: {
      title: "Titre test",
      subtitle: "Sous-titre test",
    },
  },
  about: {
    _id: "22a6dc22-0ae9-4f5c-86d4-61ddf3203d5c",
    EN: {
      title: "English test",
      description: "English test",
    },
    FR: {
      title: "French test",
      description: "French test",
    },
    technos: [
      // "6565b3f4-a15d-459c-9c8a-e72070ccc865",
      // "7e6f0cdf-4d96-46a4-ac14-5a8023aea0e4",
      "1eb3877a-ec89-40f9-9ffa-22444afbe8fe",
      "33c115bd-e8b6-43b1-bd4b-a19dd4486c7a",
      "666aa4d0-9821-46e8-898b-1989bc7e9602",
      "6b81c392-7b83-49a8-a33c-9dbc0b64882f",
      // "c7e1cb13-3857-40ea-b30c-cd01488a0b32",
      // "d06fc304-74e2-4263-b111-9884dfbb8be0",
      // "6cb9e514-1dde-425d-99ea-11a1e3ec3cbf",
    ],
    languages: [
      // "2f2dc42d-b951-446c-85e4-7436ba03f4c5",
      // "de3233a3-3134-4215-9d3c-921ddcce86c2",
      // "0fd63c52-8a17-4b00-b7f8-7e809ff14985",
      "e1233d0b-0db7-44e8-a8f0-9245e03d5330",
      "d850c1dd-681a-4264-a826-51a477190c29",
      "4bb9a07c-79bc-430a-bd8e-b241292efbb3",
    ],
    disciplines: [
      // "780cab68-12f6-442c-b37b-6fecf527627f",
      "6ffa80a1-ece1-40a8-b03e-352f669f7a36",
      // "b987180a-2092-4778-9bf2-4a0de9ad21e1",
      "f0717575-7f24-4601-933c-b79a812aaa27",
    ],
  },
  experiences: [
    {
      _id: "1f0679af-ad8d-4b72-a084-dbee051fcdc2",
      status: "inactive",
      title: "test title",
      company: "test company",
      duration: "",
      responsibilities: "",
      start_date: "2024-06-06",
      end_date: "2024-11-23",
    },
  ],
  projects: [
    {
      _id: "f6b3722d-e7d7-4fa2-b372-f80093f01b2f",
      src: "",
      technos: [
        "6b81c392-7b83-49a8-a33c-9dbc0b64882f",
        "666aa4d0-9821-46e8-898b-1989bc7e9602",
        "6565b3f4-a15d-459c-9c8a-e72070ccc865",
      ],
      href: "",
      FR: {
        label_link: "url test",
        title: "titre test",
      },
      EN: {
        label_link: "url test",
        title: "title test",
      },
      status: "inactive",
    },
  ],
};

export default adminFormContent;
