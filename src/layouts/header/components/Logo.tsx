import "./../styles/Logo.css";

function Logo() {
  const onInit = () => () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="logo" onClick={onInit()}>
      <figure className="logo-img">
        <img src="./public/images/logo.png" alt="logo" />
      </figure>
      <span>Carlos Guzmán</span>
    </div>
  );
}
export default Logo;
