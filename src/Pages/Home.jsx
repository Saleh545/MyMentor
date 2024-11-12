import React from "react";
import Header from "../Components/Header/Header";
import mainImage from "../../public/Images/MainImage.png";
import icon from "../../public/Images/MyMentor.jpg";
import { Accordion } from "react-bootstrap";
import Footer from "../Components/Footer/Footer";

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
                <h2>95% Praktika!</h2>
              </div>
              <div className="main-right">
                <div className="main-box">
                  <img src={mainImage} alt="" />
                  <div className="main-text">
                    <p className="mymentor">MyMentorda </p>
                    <p className="career">Karyera imkanı!</p>
                    <p className="remote">Full remote </p>
                    {/* <p className="hour">Əməkhaqqı - hər saat üçün</p> */}
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
                  çıxarmaq üçün statistika, proqramlaşdırma və maşın öyrənməsini
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
              <div className="marathon-card">
                <h1>Quality Assurance</h1>
                <p>
                  Keyfiyyətə Nəzarət (QA), məhsul və xidmətlərin yüksək
                  keyfiyyətdə olmasını təmin edən bir prosesdir. Məqsəd, müştəri
                  məmnuniyyətini təmin etmək üçün səhvsiz və standartlara uyğun
                  məhsullar təqdim etməkdir. Bu, məhsulun etibarlılığını
                  artırır, problemləri azaldır və xərcləri optimallaşdırır.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-section">
          <div className="container">
            <div className="about">
              <h2>Haqqımızda</h2>

              <div className="about-flex">
                <div className="about-left">
                  <p>
                    MyMentor Agency, fərqli sahələrdə özünü inkişaf etdirmək
                    istəyən şəxslərə 40 günlük marafonlar vasitəsilə dəstək
                    göstərən bir təlim platformasıdır. Bu marafonlar
                    çərçivəsində iştirakçılar hərtərəfli hazırlıq prosesindən
                    keçir, praktiki tapşırıqlar, mentorluq görüşləri və daimi
                    izləmə ilə dəstəklənir. Marafonlar 5 əsas istiqaməti əhatə
                    edir və hər bir iştirakçının fərdi hədəflərinə uyğun təlim
                    proqramı təqdim olunur. Bu platforma, öyrənmə və inkişaf
                    yolunda olanlara güclü bir təkan verərək, onların
                    bacarıqlarını artırmaq və hədəflərinə çatmaq üçün zəruri
                    istiqaməti təmin edir.
                  </p>
                </div>
                <div className="about-right">
                  <div className="about-img">
                    <img src={icon} alt="" />
                  </div>
                  <p>
                    MyMentor Internship &<br /> Development Agency
                  </p>
                </div>
              </div>
              <div className="about-flags">
                <div className="flag-img">
                  <img
                    src="https://media-public.canva.com/aZIQA/MAEEUuaZIQA/1/t.jpg"
                    alt=""
                  />
                </div>
                <div className="flag-img">
                  <img
                    src="https://media-public.canva.com/jo8eo/MAEErEjo8eo/1/t.jpg"
                    alt=""
                  />
                </div>
                <div className="flag-img">
                  <img
                    src="https://media-public.canva.com/EGep4/MAEE5ZEGep4/1/t.jpg"
                    alt=""
                  />
                </div>
                <div className="flag-img">
                  <img
                    src="https://media-public.canva.com/MADBrU7ZTEM/1/thumbnail-1.jpg"
                    alt=""
                  />
                </div>
                <div className="flag-img">
                  <img
                    src="https://media-public.canva.com/MAC70Ixyhto/1/thumbnail-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="questions-section">
          <div className="container">
            <div className="questions">
              <h1>Tez-Tez verilən suallar</h1>

              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Marafonlar kimlər üçündür?
                  </Accordion.Header>
                  <Accordion.Body>
                    Marafonda self study məşğul olanlar, fərqli sahədə çalışıb
                    sahəsini dəyişmək istəyənlər, kursu yeni bitirib real iş
                    mühiti ilə tanış olmaq istəyən və gələcəyini yüksək
                    pillələrə daşımaq istəyən hərkəs qoşula bilər.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Online iştirak etmək mümkündür?
                  </Accordion.Header>
                  <Accordion.Body>
                    Bəli, marafonlar 100% online təşkil edilir.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Hal-hazırda işləyən biri müraciət edə bilər?
                  </Accordion.Header>
                  <Accordion.Body>
                    Bəli, işləyən, ixtisasını dəyişmək istəyən və ya daha yeni
                    texnologiyalar öyrənmək istəyən çalışanlar müraciət edə
                    bilər.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Proqramlarda təqaüd mövcuddur?
                  </Accordion.Header>
                  <Accordion.Body>
                    Bəli, təyin edilmiş zamanlar və partnyorluqlar çərçivəsində
                    hər bir marafon üzrə təqaüdlü inkişaf imkanı təmin edilir.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
