import "./Logo.css";

interface Props {
  text?: string;
}

function Logo({ text }: Props) {
  return (
    <div className="logo">
      <figure className="logo-img">
        <img src="./public/images/logo.png" alt="logo" />
      </figure>
      <span>{text}</span>
    </div>
  );
}
export default Logo;
