import { Redirect } from "..";
import { Project } from "../project.data";
import "./../styles/CardTimeline.css";

interface Props {
  cardData: Project;
}

function CardTimeline({ cardData }: Props) {
  return (
    <div className="cardTimeline">
      <span className="cardTimeline-title">{cardData.date}</span>
      <span>{cardData.title}</span>
      <span>{cardData.content}</span>
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
