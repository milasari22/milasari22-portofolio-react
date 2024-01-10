import logo from "../assets/logo.jpeg";
function Intro() {
  return (
    <div className="section text-light intro">
      <div className="container text-center">
        <img src={logo} />
        <h1>MILA SARI</h1>
        <p>Web Developer</p>
        <a target="_blank" href="#" className="media_social">
          <i class="bi bi-facebook"></i>
        </a>
        <a target="_blank" href="#" className="media_social">
          <i class="bi bi-whatsapp"></i>
        </a>
        <a target="_blank" href="#" className="media_social">
          <i class="bi bi-github"></i>
        </a>
        <a target="_blank" href="#" className="media_social">
          <i class="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default Intro;
