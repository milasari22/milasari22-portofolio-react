import ServiceItem from "./ServiceItem";
function Services() {
  return (
    <div className="section bg-dark text-light">
      <div className="container">
        <h1>Riwayat Hidup</h1>
        <div className="row">
          <ServiceItem
            judul="Taman Kanak-kanak (TK)"
            deskripsi=" Sekolah TK di RA. MIFTAHUL ULUM Masa sekolah selama 2thn Diterima Pada thn 2010 dan lulus pada thn 2012. "
          />
          <ServiceItem
            judul="Sekolah Dasar (SD)"
            deskripsi=" Sekolah di SD NEGERI MANGGISAN 4 Masa sekolah selama 6thn Diterima Pada thn 2012 dan lulus pada thn 2018. "
          />
          <ServiceItem
            judul="Sekolah Menengah Pertama (SMP)"
            deskripsi=" Sekolah di SMP ISLAM MIFTAHUL ULUM Masa sekolah selama 3thn Diterima Pada thn 2018 dan lulus pada thn 2021. "
          />
          <ServiceItem
            judul="Sekolah Menengah Kejuruan (SMK)"
            deskripsi=" Sekolah di SMK NEGERI 6 JEMBER Masa sekolah selama 3thn Diterima Pada thn 2021 dan lulus pada thn -. "
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
