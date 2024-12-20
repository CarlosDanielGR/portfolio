import { ReactNode } from "react";
import "../styles/Job.css";

interface Props {
  date: string;
  role: string;
  company: string;
  children: ReactNode;
}

function Job({ date, company, role, children }: Props) {
  return (
    <>
      <p className="job-date">{date}</p>
      <div className="job-content">
        <div className="job-title">
          <span className="job-name">{role}</span>
          <span>{company}</span>
        </div>
        <div className="job-description">{children}</div>
      </div>
    </>
  );
}

export default Job;
