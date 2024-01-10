import React from "react";
import "../styles/ServiceItem.css";
import admin from "../assets/admin.png";
import kelompok from "../assets/kelompok.jpeg";
import pelanggan from "../assets/pelanggan.png";

function WorkExperience({ imageSrc, altText, description }) {
  return (
    <div className="col-md-4">
      <img className="img-fluid mb-3 gambarku" src={imageSrc} alt={altText} />
      <p>{description}</p>
    </div>
  );
}

function RecentWork() {
  return (
    <section className="section">
      <div className="container text-center">
        <h1 className="mb-4">Pengalaman Kerja Dan Hasil Karya</h1>

        <div className="row mt-4">
          <WorkExperience
            imageSrc="https://lh5.googleusercontent.com/p/AF1QipN85X3bdPoqvzJgfnvage8ZL97g1JEbLkqCv7sc=w426-h240-k-no"
            altText="Work Experience 1"
            description="-Kantor satlantas polres Jember"
          />

          <WorkExperience
            imageSrc="https://bangsapedia.com/storage/posts/August2023/nqURide7Q4xEy4dvCWfb.jpg"
            altText="Work Experience 2"
            description="-Lapangan praktek roda dua"
          />

          <WorkExperience
            imageSrc="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/06/20/Aturan-Baru-Pembuatan-SIM-Harus-Miliki-Sertifikat-Mengemudi-1788605085.jpg"
            altText="Work Experience 3"
            description="-Sim yang sudah dicetak"
          />
        </div>

        <div className="row mt-4">
          <WorkExperience
            imageSrc={pelanggan}
            altText="Work Experience 1"
            description="-Tampilan halaman pelanggan"
          />

          <WorkExperience
            imageSrc={kelompok}
            altText="Work Experience 2"
            description="-Gelar hasil karya"
          />

          <WorkExperience
            imageSrc={admin}
            altText="Work Experience 3"
            description="-Tampilan halaman admin"
          />
        </div>
      </div>
    </section>
  );
}

export default RecentWork;
