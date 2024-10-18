import { useState } from "react";
import { Project } from "../project.data";
import { Redirect, ProjectModal } from "..";
import "./../styles/CardTimeline.css";

interface Props {
  cardData: Project;
}

function CardTimeline({ cardData }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="cardTimeline">
      <span className="cardTimeline-date">{cardData.date}</span>
      <span className="cardTimeline-title">{cardData.title}</span>
      <span className="cardTimeline-description">
        {cardData.description}
        <a onClick={handleOpen}>...ver más</a>
      </span>
      {cardData.repositoryLink ? (
        <div className="cardTimeline-redirect">
          <Redirect link={cardData.repositoryLink} />
        </div>
      ) : (
        <></>
      )}
      <ProjectModal data={cardData} open={open} handleClose={handleClose} />
    </div>
  );
}
export default CardTimeline;
