import React, { useEffect, useState, useRef } from "react";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import icon from "../../public/Images/icon.jpg";
import { Accordion } from "react-bootstrap";
import Footer from "../Components/Footer/Footer";
import hat from "../../public/Images/hat-left.png";
import girl from "../../public/Images/sumkali-qiz.jpg";
import studentImg from "../../public/Images/bg-img.png";
import Swal from "sweetalert2";
import { useForm } from "@formspree/react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

const Home = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");
  const [price, setPrice] = useState("");

  const [state, handleSubmit] = useForm("mqakoepl");

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Mesajınız göndərildi!",
      showConfirmButton: false,
      timer: 1500,
    });
    setName("");
    setPhone("");
    setProgram("");
    setPrice("");
    setMessage("");
  };
  const handleFormSubmit = async (e) => {
    await handleSubmit(e);
    handleCustomSubmit(e);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Header />
      <Main />
      <div className="numbers-section">
        <div className="container">
          <div className="numbers">
            <div className="number">
              <h4>6</h4>
              <p>Marafon sayı</p>
            </div>
            <div className="number">
              <h4>60+</h4>
              <p>Tələbə sayı</p>
            </div>
            <div className="number">
              <h4>15+</h4>
              <p>İşə qəbul</p>
            </div>
          </div>
        </div>
      </div>
      <div className="education-section">
        <div className="bck-image">
          <img src={studentImg} alt="" />
        </div>
        <div className="education">
          <div className="container">
            <div className="education-text">
              <h2>Təhsil müəssisələrinə özəl!</h2>
              <p>
                MyMentor təcrübə və inkişaf agentliyi, özəl və dövlət təhsil
                müəsisələrinə özəl xüsusi təklif planı ilə öz siyasətini
                yürüdür. Beləki...
              </p>
              <Link to="/education">Ətraflı</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="marathon-section" id="marathon-section">
        <div className="container">
          <div className="marathon">
            <h2>40 Günlük Marafonlar</h2>

            <div className="marathon-card">
              <h1>Data science</h1>
              <p>
                Data Science, böyük həcmdə məlumatları toplamaq,
                təmizləmək,təhlil etmək və onlardan dəyərli məlumatlar çıxarmaq
                üçün statistika, proqramlaşdırma və maşın öyrənməsini
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
              <h1>Data analytics</h1>
              <p>
                Data Analitikası, məlumatları təhlil etmək, filtrləmək, Pivot
                Table ilə xülasə yaratmaq və qrafiklərlə vizuallaşdırmaqdan
                ibarətdir. Bu üsullarla analitiklər məlumatdan dəyərli nəticələr
                əldə edirlər.
              </p>
            </div>
            <div className="marathon-card-white">
              <h1>UI/UX design</h1>
              <p>
                UI/UX dizayn, istifadəçi interfeysi (UI) və istifadəçi
                təcrübəsini (UX) optimallaşdırmaq üçün vizual görünüşü və
                qarşılıqlı əlaqəni inkişaf etdirir. UI dizayn estetikaya, UX
                dizayn isə istifadə rahatlığına yönəlir, məqsəd isə intuitiv və
                məmnun edici bir təcrübə yaratmaqdır.
              </p>
            </div>
            <div className="marathon-card">
              <h1>Quality Assurance</h1>
              <p>
                Keyfiyyətə Nəzarət (QA), məhsul və xidmətlərin yüksək
                keyfiyyətdə olmasını təmin edən bir prosesdir. Məqsəd, müştəri
                məmnuniyyətini təmin etmək üçün səhvsiz və standartlara uyğun
                məhsullar təqdim etməkdir. Bu, məhsulun etibarlılığını artırır,
                problemləri azaldır və xərcləri optimallaşdırır.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="packets-section">
        <div className="container">
          <div className="packets">
            <div className="packet-text">
              <h4>Marafon Paketləri</h4>
              <p>Bugün seçimini et, Sabah dan gələcəyini qur!</p>
            </div>
            <div className="packet-flex">
              <div className="packet-card">
                <h5>Self-study</h5>
                <div className="card-inner">
                  <div className="card-img">
                    <img src={hat} alt="" />
                  </div>
                  <p>
                    A-Z yə roadmap
                    <br />
                    Hər həftə online görüş
                    <br />
                    Networking qurmaq <br />
                    7/24 mentor dəstəyi <br /> Dərslərin videorecordu <br />{" "}
                    Portolio hazırlanması <br /> Müsahibəyə hazırlıq <br /> 100%
                    online
                  </p>
                  <div className="price-flex">
                    <div className="price old-price">
                      <span>Birdəfəlik</span>
                      <h4 className="price-crossed">150AZN</h4>
                    </div>
                    <div className="price new-price">
                      <span>Birdəfəlik</span>
                      <h4>70AZN</h4>
                    </div>
                  </div>
                  <Link to="#registerForm">Müraciət</Link>
                </div>
              </div>
              <div className="packet-card">
                <h5>Next step job</h5>
                <div className="card-inner">
                  <div className="card-img2">
                    <img src={hat} alt="" />
                  </div>
                  <p>
                    Real proyektlər üzərində inkişaf <br /> Hər həftə online
                    görüş <br />
                    Real iş mühitinə hazırlıq. <br /> 7/24 mentor dəstəyi <br />{" "}
                    Görüşlərin videorecordu <br /> Portfolio hazırlanması <br />{" "}
                    Müsahibəyə hazırlıq <br />
                    Networking qurmaq <br /> 100% online
                  </p>
                  <div className="price-flex">
                    <div className="price old-price">
                      <span>Birdəfəlik</span>
                      <h4 className="price-crossed">150AZN</h4>
                    </div>
                    <div className="price new-price">
                      <span>Birdəfəlik</span>
                      <h4>70AZN</h4>
                    </div>
                  </div>
                  <Link to="#registerForm">Müraciət</Link>
                </div>
              </div>
            </div>
            <h6>40 GÜN</h6>
          </div>
        </div>
      </div>
      <div className="student-section">
        <div className="student">
          <div className="student-flex">
            <h1>Yüzlərlə tələbə bizi seçir!</h1>
            <div className="student-img">
              <img src={girl} alt="" />
            </div>
            <div className="student-comment">
              <h1>Yüzlərlə tələbə bizi seçir!</h1>

              <div className="up">
                <div className="comment-card">
                  <span className="ldquo"> &ldquo;</span>
                  <p>
                    Proqram mənim üçün çox faydalı oldu, müxtəlif layihələrin
                    hazırlanması və təqdim edilməsi, həmçinin komanda ilə
                    işləmək və müəyyən məsələləri araşdırmaq, digər komandaların
                    layihələrini izləmək mənə çox kömək etdi.
                  </p>
                  <h6>Nigar Əlizadə </h6>
                  <h4>Polşa</h4>

                  <span className="rdquo">&rdquo;</span>
                </div>
                <div className="comment-card">
                  <span className="ldquo"> &ldquo;</span>
                  <p>
                    Proqramın Data Science üzrə detallı 4 hissəyə bölünməsi
                    yaxşı faktordur. Proqram vasitəsi ilə də üzrə lazımı olan
                    bilikləri aldığımız düşünürəm. Həm teorik həm də praktiki
                    tərəfdən inkişaf etdirəcək lahiyə idi.
                  </p>
                  <h6>Ruhid Dadaşov </h6>
                  <h4>Macarıstan</h4>
                  <span className="rdquo">&rdquo;</span>
                </div>
              </div>

              <div className="down">
                <div className="comment-card">
                  <span className="ldquo"> &ldquo;</span>
                  <p>
                    Proqram gözlədiyimdən maraqlı və faydalı oldu. Nə qədər
                    sevməsəm də, komanda ilə işləmə bacarığımın da biraz
                    artdığını düşünürəm.{" "}
                  </p>
                  <h6>İlkin Qəmbərli</h6>
                  <h4>Azərbaycan</h4>

                  <span className="rdquo">&rdquo;</span>
                </div>
                <div className="comment-card">
                  <span className="ldquo"> &ldquo;</span>
                  <p>
                    Program, maşın öyrənməsinə dərindən daxil olmaq,praktiki
                    bacarıqları inkişaf etdirmək və istedadlı həmyaşıdları ilə
                    əməkdaşlıq etmək üçün zənginləşdirici və maraqlı fürsət
                    təqdim etdi. Mən bu yenilikçi və dinamik mühitin bir hissəsi
                    olmağı çox sevdim.{" "}
                  </p>
                  <h6>Təbibə İsmayılova </h6>
                  <h4>Azərbaycan</h4>
                  <span className="rdquo">&rdquo;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section" id="about-section">
        <div className="container">
          <div className="about">
            <div className="about-flex">
              <div className="about-left">
                <h2>Haqqımızda</h2>
                <p>
                  MyMentor Agency, fərqli sahələrdə özünü inkişaf etdirmək
                  istəyən şəxslərə 40 günlük marafonlar vasitəsilə dəstək
                  göstərən bir təlim platformasıdır. Bu marafonlar çərçivəsində
                  iştirakçılar hərtərəfli hazırlıq prosesindən keçir, praktiki
                  tapşırıqlar, mentorluq görüşləri və daimi izləmə ilə
                  dəstəklənir. Marafonlar 5 əsas istiqaməti əhatə edir və hər
                  bir iştirakçının fərdi hədəflərinə uyğun təlim proqramı təqdim
                  olunur. Bu platforma, öyrənmə və inkişaf yolunda olanlara
                  güclü bir təkan verərək, onların bacarıqlarını artırmaq və
                  hədəflərinə çatmaq üçün zəruri istiqaməti təmin edir.
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
                <Accordion.Header>Marafonlar kimlər üçündür?</Accordion.Header>
                <Accordion.Body>
                  Marafonda self study məşğul olanlar, fərqli sahədə çalışıb
                  sahəsini dəyişmək istəyənlər, kursu yeni bitirib real iş
                  mühiti ilə tanış olmaq istəyən və gələcəyini yüksək pillələrə
                  daşımaq istəyən hərkəs qoşula bilər.
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
                  texnologiyalar öyrənmək istəyən çalışanlar müraciət edə bilər.
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

      <div className="register-section" id="registerForm">
        <div className="container">
          <div className="register-flex">
            <div className="register-text">
              <h1>Qeydiyyat formu</h1>
            </div>
            <div className="register-form">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="Adı Soyadı"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Ad/Soyad"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="Telefon Nömrəsi"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    placeholder="Mobil (WhatsApp) 0501234567 "
                    required
                  />
                </div>

                <div className="form-group">
                  <select
                    id="program"
                    name="Seçdiyi proqram"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    required
                  >
                    <option value="" disabled selected>
                      Marafon seçin
                    </option>
                    <option value="Datascience">Data science</option>
                    <option value="Frontend proqramlaşdırma">
                      Frontend proqramlaşdırma
                    </option>
                    <option value="Excel ilə Data analitikası">
                      Excel ilə Data analitikası
                    </option>
                    <option value="UI/UX design">UI/UX design</option>
                    <option value="Quality Assurance">Quality Assurance</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    id="price"
                    name="Seçdiyi paket"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  >
                    <option value="" disabled selected>
                      Paket seçin
                    </option>
                    <option value="Self-study">Self-study </option>
                    <option value="Next step job">Next step job </option>
                  </select>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    onSubmit={handleSubmit}
                    disabled={state.submitting}
                  >
                    Göndər
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
