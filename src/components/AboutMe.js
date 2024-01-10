import logo from "../assets/logo.jpeg";
function AboutMe() {
  return (
    <div className="section">
      <div className="row align-items-center">
        <div className="col-6 text-center">
          <img src={logo} />
        </div>
        <div className="col-6">
          <h1>About Me</h1>
          <p>
            "Dengan nama lengkap Mila SARI, saya adalah seorang siswi kelas 12
            di jurusan Rekayasa Perangkat Lunak (RPL) di SMK Negeri 6 Jember.
            Lahir pada tanggal 29 September 2005 di Jember, identitas pendidikan
            saya mencerminkan komitmen pada pengembangan keterampilan teknis di
            bidang perangkat lunak.
          </p>
          <p>
            "Selamat menikmati penjelajahan melalui portofolio saya yang dapat
            merincikan riwayat hidup saya dan pengalaman dalam dunia rekayasa
            perangkat lunak."
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
