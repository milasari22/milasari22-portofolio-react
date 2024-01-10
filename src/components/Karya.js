import "../styles/ServiceItem.css";
import admin from "../assets/admin.png";
import kelompok from "../assets/kelompok.jpeg";
import pelanggan from "../assets/pelanggan.png";

function Karya() {
  return (
    <div className="section">
      <div className="container">
        <h1>Pengalaman Kerja</h1>
        <div className="row mt-4">
          <div className="col-md-4">
            <img
              className="img-fluid mb-3 gambarku"
              src="https://lh5.googleusercontent.com/p/AF1QipN85X3bdPoqvzJgfnvage8ZL97g1JEbLkqCv7sc=w426-h240-k-no"
              alt="Work Experience 1"
            />
            <p>-Kantor satlantas polres Jember</p>
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid mb-3 gambarku"
              src="https://bangsapedia.com/storage/posts/August2023/nqURide7Q4xEy4dvCWfb.jpg"
              alt="Work Experience 2"
            />
            <p>-Lapangan praktek roda dua</p>
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid mb-3 gambarku"
              src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/06/20/Aturan-Baru-Pembuatan-SIM-Harus-Miliki-Sertifikat-Mengemudi-1788605085.jpg"
              alt="Work Experience 3"
            />
            <p>-Sim yang sudah dicetak</p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <img
              className="img-fluid mb-3 gambarku"
              src={pelanggan}
              alt="Work Experience 1"
            />
            <p>-Tampilan halaman pelanggan</p>
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid mb-3 gambarku"
              src={kelompok}
              alt="Work Experience 2"
            />
            <p>-Gelar hasil karya</p>
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid mb-3 gambarku"
              src={admin}
              alt="Work Experience 3"
            />
            <p>-Tampilan halaman admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Karya;
