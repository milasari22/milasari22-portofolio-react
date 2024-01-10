import image from "../assets/image.jpeg";
function Intro() {
  return (
    <div className="section text-light intro">
      <div className="container text-center">
        <img className="image" src={image} />
        <h1>MILA SARI</h1>
        <p>Web Developer</p>
        <a target="_blank" href="#" className="media_social">
          <i class="bi bi-facebook"></i>
        </a>
        <a
          target="_blank"
          href=" https://wa.me/6282336855778"
          className="media_social"
        >
          <i class="bi bi-whatsapp"></i>
        </a>
        <a
          target="_blank"
          href="https://github.com/milasari22"
          className="media_social"
        >
          <i class="bi bi-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/wilka_wil_0987?igsh=anhveXNpOTB5aG9i"
          className="media_social"
        >
          <i class="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default Intro;
