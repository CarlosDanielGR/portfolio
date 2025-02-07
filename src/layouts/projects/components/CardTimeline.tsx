import { useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Project } from "../project.data";
import { ProjectModal } from "..";
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
      <span className="cardTimeline-description">{cardData.description}</span>
      <div className="cardTimeline-redirect">
        {cardData.pageLink ? (
          <a href={cardData.pageLink} target="_blank">
            <OpenInNewIcon />
          </a>
        ) : (
          <></>
        )}
        <a onClick={handleOpen}>View more</a>
      </div>
      <ProjectModal data={cardData} open={open} handleClose={handleClose} />
    </div>
  );
}
export default CardTimeline;
