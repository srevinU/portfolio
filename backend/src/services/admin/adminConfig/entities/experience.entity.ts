export default class Experience {
  _id: string;
  status: 'active' | 'inactive' | 'in_progress';
  title: string;
  company: string;
  duration: string;
  responsibilities: string;
  start_date: string;
  end_date: string;
}
