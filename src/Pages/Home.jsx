import React from "react";
import Header from "../Components/Header/Header";
import mainImage from "../../public/Images/MainImage.png";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="main-menu">
          <div className="container">
            <div className="main-content">
              <div className="main-left">
                <h1>MyMentor təcrübə və inkişaf agentliyi</h1>
                <p>40 gün ərzində karyeranıza ilk addımı bizimlə atın!</p>
              </div>
              <div className="main-right">
                <div className="main-box">
                  <img src={mainImage} alt="" />
                  <div className="main-text">
                    <p className="mymentor">MyMentorda </p>
                    <p className="career">Karyera imkanı!</p>
                    <p className="remote">Full remote </p>
                    <p className="hour">Əməkhaqqı - hər saat üçün</p>
                    <span>#Gəncistedadlar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="numbers-section">
          <div className="container">
            <div className="numbers">
              <div className="number">
                <h4>4</h4>
                <p>Marafon sayı</p>
              </div>
              <div className="number">
                <h4>50+</h4>
                <p>Tələbə sayı</p>
              </div>
              <div className="number">
                <h4>15+</h4>
                <p>İşə qəbul</p>
              </div>
            </div>
          </div>
        </div>
        <div className="marathon-section">
          <div className="container">
            <div className="marathon">
              <h2>40 Günlük Marafonlar</h2>

              <div className="marathon-card">
                <h1>Data science</h1>
                <p>
                  Data Science, böyük həcmdə məlumatları toplamaq,
                  təmizləmək,təhlil etmək və onlardan dəyərli məlumatlar
                  çıxarmaq üçünstatistika, proqramlaşdırma və maşın öyrənməsini
                  birləşdirən bir sahədir. Məqsəd, proqnozlar vermək və
                  məlumatlara əsaslanan qərarları dəstəkləməkdir.
                </p>
              </div>
              <div className="marathon-card-white">
                <h1>Front-end proqramlaşdırma</h1>
                <p>
                  Front-End proqramlaşdırma, istifadəçinin gördüyü və qarşılıqlı
                  əlaqədə olduğu veb səhifələri HTML, CSS və JavaScript ilə
                  yaratmaqdır. Tərtibatçılar React, Vue və Angular kimi
                  çərçivələrdən istifadə edərək estetik və istifadəsi rahat
                  interfeyslər qurulur.
                </p>
              </div>
              <div className="marathon-card">
                <h1>Excel ilə Data analitikası</h1>
                <p>
                  Excel ilə Data Analitikası, məlumatları təhlil etmək,
                  filtrləmək, Pivot Table ilə xülasə yaratmaq və qrafiklərlə
                  vizuallaşdırmaqdan ibarətdir. Bu üsullarla analitiklər
                  məlumatdan dəyərli nəticələr əldə edirlər.
                </p>
              </div>
              <div className="marathon-card-white">
                <h1>UI/UX design</h1>
                <p>
                  UI/UX dizayn, istifadəçi interfeysi (UI) və istifadəçi
                  təcrübəsini (UX) optimallaşdırmaq üçün vizual görünüşü və
                  qarşılıqlı əlaqəni inkişaf etdirir. UI dizayn estetikaya, UX
                  dizayn isə istifadə rahatlığına yönəlir, məqsəd isə intuitiv
                  və məmnun edici bir təcrübə yaratmaqdır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
