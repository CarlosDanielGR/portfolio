import { Project } from "../interfaces/cardTimeline.interface";
import { Redirect } from "..";
import "./../styles/CardTimeline.css";

interface Props {
  cardData: Project;
}

function CardTimeline({ cardData }: Props) {
  return (
    <div className="cardTimeline">
      <span className="cardTimeline-title">{cardData.title}</span>
      <span>{cardData.content}</span>
      <Redirect url={cardData.url} />
    </div>
  );
}
export default CardTimeline;
