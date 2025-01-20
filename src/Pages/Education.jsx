import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useForm, ValidationError } from "@formspree/react";
import Header from "../Components/Header/Header";
import { useLocation } from "react-router-dom";

const Education = () => {
  const [eduİnstit, setEduİnstit] = useState("");
  const [person, setPerson] = useState("");
  const [applicationText, setApplicationText] = useState("");
  const [state, handleSubmit] = useForm("mwpkzjjz");

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Mesajınız göndərildi!",
      showConfirmButton: false,
      timer: 1500,
    });
    setEduİnstit("");
    setPerson("");
    setApplicationText("");
  };
  const handleFormSubmit = async (e) => {
    await handleSubmit(e);
    handleCustomSubmit(e);
  };
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Header />
      <div className="education-page">
        <div className="container">
          <div className="education-text">
            <h2>Özəl və dövlət ali təhsil müəssisələrinə özəl təklif:</h2>
            <p>
              Özəl və dövlət ali təhsil müəssisələrinə xüsusi olaraq MyMentor
              agentliyi
              <br />
              1 .40 günlük A-dan Z-yə 95% təcrübə və inkişaf proqramı <br />2 .0
              dan başlayanlar üçün Self-Study proqramı təqdim edir.
            </p>
            <p>
              Proqram ərzində tələbələr İT sahəsindəki yeniliklərdən və müraciət
              etdiyi ixtisas üzrə yeni biliklər əldə edəcəklər. Tədris
              onlayn/oflayn formatda həyata keçirilir. Hər bir istiqamət üzrə 1
              qrupa minimum 10-15, maksimum 20-25 müraciət qəbul edilir. Tədris
              keyfiyyətinin ölçülməsi məqsədi ilə marafonun sonunda hər bir
              tələbə şəxsi portfelinə əlavə etmək üçün bir proyekt üzərində
              işləyir və təqdim edir. Marafonu uğurla bitirən hər bir tələbə
              rəsmi sertifikatla təltif edilir.
            </p>
            <p>
              Qəbul prosesi: <br />
              Marafonlar qəbul prosesi ilk olaraq qeydiyyatdan keçməyiniz tələb
              edilir. Qeydiyyatdan keçdikdən sonra müraciət etdiyiniz istiqamət
              üzrə sınaq testi göndərilir. Sınaq testindən uğurla keçən
              namizədlər marafonlarda inkişaf etmək hüququ qazanır.
            </p>
            <p>
              Təqaüd faizləri: <br /> MyMentor hər bir universitetə özəl 100%
              təqaüd faizi təyin edir. Təqaüd sayı hər bir təhsil müəssisəsinin
              rəhbərliyi ilə birgə müzakirə əsasında təyin edilir.
            </p>
            <p>
              Marafon ödənişləri.
              <br />
            1.  Bütün istiqamətlər üzrə ödənişlər 40 günlük təcrübə və inkişaf
              proqramı üçün 150 AZN (birdəfəlik)
              <br />
            2.  0-dan başlayanlar üçün isə aylıq 125 AZN təşkil edir və 2 ay davam
              edir.
            </p>
          </div>

          <div className="partnership-section">
            <h1>Tərəfdaşlıq üçün təklif göndərin</h1>

            <div className="partnership-form">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="eduİnstit"
                    name="Təhsil müəssisəsi"
                    value={eduİnstit}
                    onChange={(e) => setEduİnstit(e.target.value)}
                    required
                    placeholder="Təhsil müəssisəsi"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="person"
                    name="Müraciət edən şəxs"
                    value={person}
                    onChange={(e) => setPerson(e.target.value)}
                    placeholder="Müraciət edən şəxs"
                    required
                  />
                </div>

                <div className="form-group appText">
                  <input
                    type="text"
                    id="Application text"
                    name="Müraciət mətni"
                    value={applicationText}
                    onChange={(e) => setApplicationText(e.target.value)}
                    placeholder="Müraciət mətni"
                    required
                  />
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
    </div>
  );
};

export default Education;
