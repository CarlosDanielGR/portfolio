import "./About-Me.css";

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <img
        className="about-me-img"
        src="./images/about-me.jpg"
        alt="about-me"
      />
      <div className="about-me-texts">
        <h3 className="subtitle">About me</h3>
        <p>
          Hello! I am a frontend developer with over 3 years of experience
          specializing in Angular. I focus on building modern, scalable, and
          high-performance interfaces, applying best practices and efficient
          design patterns.
        </p>
        <p>
          Additionally, I have experience in backend development with NestJS,
          which enables me to tackle full-stack projects by integrating robust
          functionalities such as file handling and complete CRUD operations. I
          am passionate about technological innovation and enjoy building
          creative solutions that enhance user experience.
        </p>
        <p>
          Currently, I am looking to join a team that faces complex challenges,
          where I can continue growing professionally and contribute with clean
          and efficient code.
        </p>
      </div>
    </section>
  );
}
export default AboutMe;
