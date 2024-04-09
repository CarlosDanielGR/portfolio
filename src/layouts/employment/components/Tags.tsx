import "./../styles/Tags.css";

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="tag-content">
      {tags.map((tag, index) => (
        <span className="tag" key={index}>
          {tag}
        </span>
      ))}
    </div>
  );
}
export default Tags;
