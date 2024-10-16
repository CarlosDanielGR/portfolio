import { Redirect } from "..";
import { Project } from "../project.data";
import "./../styles/CardTimeline.css";

interface Props {
  cardData: Project;
}

function CardTimeline({ cardData }: Props) {
  return (
    <div className="cardTimeline">
      <span className="cardTimeline-date">{cardData.date}</span>
      <span className="cardTimeline-title">{cardData.title}</span>
      <span className="cardTimeline-description">
        {cardData.description} <a>...ver más</a>{" "}
      </span>
      {cardData.repositoryLink ? (
        <div className="cardTimeline-redirect">
          <Redirect link={cardData.repositoryLink} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default CardTimeline;
