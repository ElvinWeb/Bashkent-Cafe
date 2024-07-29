import React from "react";
import { Link } from "react-router-dom";

 const AboutContent = () => {
  return (
    <div className="col-12 col-lg-6">
      <div className="about-side-content">
        <div className="text">
          <p>
            Başkent Restoran və Şiriniyyat Evi 2004-cü ildən dəyərli
            müştərilərinin xidmətindədir. Bakı şəhərində Memar Əcəmi, Nəriman
            Nərimanov, 28 May şöbələri olmaqla 3 restoran və İnşaatçılar
            şöbəsində isə şiriniyyat evi olaraq fəaliyyət göstərir. Restoran
            üçün qonaqların məmnuniyyəti ən vacib pirinsiplərdən olduğu üçün
            daim xidmət keyfiyyətinin artırılması üzərində çalışır. İş
            fəaliyyəti boyu daim ixtisas təlimləri keçmiş personal ilə
            müştərilərin həm istirahət edəcəyi, həm də damaq dadına uyğun yemək
            çeşidləri ilə zəngin məkanlardan biri olmaqda iddialıdır.
            Restoranlar şəbəkəsində həftə içi və həftə sonu olmaqla səhər
            yeməyi, biznes görüşlərinizin, təqdimatların keçirilməsi üçün ayrıca
            otaqlar, dostlarınızla, həmkarlarınızla çay-kofe guşəsində
            rahatlıqla söhbət etmə imkanı, həmçinin iştən sonra günün
            gərginliyini üzərinizdən atmağa kömək edəcək canlı musiqi mövcuddur.
            Dostlarınız, doğmalarınızla zəngin milli, türk və avropa mətbəxinə
            aid dadlı təamlardan dada, ailənizlə birliktə rahat şəkildə əylənə
            və istirahət edə bilərsiniz. Restoranların hər birində hər zövqə
            uyğun menyudan istifadə etməklə hər qonağa özəl yanaşmanı hiss etmək
            mümkündür.
            <br />
            BAŞKENT - " Hər gün eyni sevgi və həyəcanla xidmətinizdəyik. Gəlin,
            qonağımız olun! "
          </p>
        </div>
        <Link to="/" className="btn-about">
          Ətraflı
        </Link>
      </div>
    </div>
  );
};
export default AboutContent;
