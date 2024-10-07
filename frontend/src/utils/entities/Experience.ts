export class Experience {
  _id: string;
  status: string;
  title: string;
  company: string;
  duration: string;
  responsibilities: string;
  start_date: string;
  end_date: string;

  constructor() {
    this._id = "";
    this.status = "";
    this.title = "";
    this.company = "";
    this.duration = "";
    this.responsibilities = "";
    this.start_date = "";
    this.end_date = "";
  }
}
