import { Skill } from "@shared/skills.data";
import { Tooltip } from "@mui/material";
import "./Tags.css";

function Tags({ tags }: { tags: Skill[] }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <Tooltip key={index} title={tag.name} placement="top">
          <div className="tag-content">
            <img src={tag.src} alt={tag.alt} />
          </div>
        </Tooltip>
      ))}
    </div>
  );
}
export default Tags;
