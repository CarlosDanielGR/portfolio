import "./../styles/Tags.css";

function Tags() {
  const TAGS = ["TypeScript", "Angular", "SASS", "HTML", "Rxjs", "Ngrx"];
  return (
    <div className="tag-content">
      {TAGS.map((tag, index) => (
        <span className="tag" key={index}>
          {tag}
        </span>
      ))}
    </div>
  );
}
export default Tags;
