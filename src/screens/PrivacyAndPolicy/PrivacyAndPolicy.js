import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import SEO from "../../common/SEO";
import Header from "../Header/Header";
import DarkLogo from "../../components/logo/DarkLogo";
import Footer from "../../screens/Footer/Footer";

const PrivacyAndPolicy = () => {
  return (
    <>
      <SEO title="Magazine" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small" HeaderSTyle="header-not-transparent" />
        <div className="slider-area slider-style-3 height-850">
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                <div className="inner text-left">
                  <h1 className="title theme-gradient">Privacy and policy</h1>
                  <p className="description">Үйлчилгээний нөхцөл</p>
                </div>
              </div>
              <div className="order-1 order-lg-2 col-lg-5">
                <div className="thumbnail">
                  <DarkLogo
                    image={`${process.env.PUBLIC_URL}/images/ihelplogo/magazineW1.png`}
                    image2={`${process.env.PUBLIC_URL}/images/ihelplogo/magazineB1.png`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rn-splite-style">
          <div className="split-wrapper">
            <div className="row no-gutters radius-10 align-items-center">
              <div className="col-lg-12 col-xl-6 col-12">
                <div className="thumbnail">
                  <img
                    src="./images/ihelpimage/bgnewMag.png"
                    alt="split Images"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              {/* 1 */}
              <div className="col-lg-12 col-xl-6 col-12">
                <div className="split-inner">
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}
                  >
                    <div className="">
                      <h1 className="title">
                        {/* ihelp Magazine */}
                        <strong style={{ color: "#059dff" }}>
                          Нэг. Нийтлэг зүйл
                        </strong>{" "}
                        {/* сэтгүүл */}
                      </h1>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}
                  >
                    <p className="description">
                      1. “ihelp Magazine” гэж дотоод болон гадаадын шинэ
                      шинэлэг, оюуны хөрөнгө оруулалт болж буй хувь хүн болон
                      карьер хөгжлийн бүхий л төрлийн мэдээллийг тогтмол
                      хуваарийн дагуу цахим болон хэвлэмлээр хүргэж буй сэтгүүл
                      юм. <br />
                      2. “ihelp Magazine” нь хараат бусаар өөрийн цахим платформ
                      болон хэвлэмэл сэтгүүлд мэдээ, мэдээлэл, зар сурталчилгааг
                      байршуулна.
                      <br />
                      3. Хэрэглэгч “ihelp Magazine” платформын үйлчилгээний
                      энэхүү нөхцөлийг хүлээн зөвшөөрөөгүй бол бүртгүүлэхгүй
                      байх, платформыг ашиглахаа зогсоох, аппликейшнийг устгахыг
                      зөвлөж байна.
                      <br />
                      4. “ihelp Magazine”-ийн үйлчилгээг авах явцад “ihelp”
                      болон Хэрэглэгчийн хувийн мэдээллийг хүний нөөцийн
                      мэдээлэл бэлтгэх зорилгоор хадгалах, боловсруулахыг
                      зөвшөөрсөн болно.
                      <br />
                      5. Хэрэглэгчийг таньж мэдэх, баталгаажуулах зорилгоор
                      “ihelp Magazine”-ийн хүсэлтээр өөрийн хувийн мэдээллийг
                      өгөх, имэйл хаяг зэрэг Хэрэглэгчийн мэдээллийг авч,
                      баталгаажуулахыг хүлээн зөвшөөрсөн болно. <br />
                      6. “ihelp Magazine” нь залилан мэхлэх үйлдлийг шалгах,
                      Үйлчилгээний нөхцөл, Нууцын бодлогын хэрэгжилтийг хангах,
                      эрсдэлээс урьдчилан сэргийлэх зорилгоор “ihelp Magazine”
                      дэх Хэрэглэгчдийн мэдээллийг татан авч үзэх, шалгах эрхтэй
                      байна.
                      <br />
                    </p>
                  </ScrollAnimation>
                </div>
              </div>
              {/* 2 */}
              <div className="rn-splite-style pt--100 pb--100">
                <div className="split-wrapper">
                  <div className="row no-gutters radius-10 align-items-center">
                    <div className="col-lg-12 col-xl-6 col-12">
                      <div className="split-inner">
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          animateOut="fadeInOut"
                          animateOnce={true}
                        >
                          <h4 className="title">
                            <strong style={{ color: "#059dff" }}>
                              Хоёр. Хэрэглэгчийн эрх, үүрэг
                            </strong>{" "}
                            {/* /хүний нөөц бүрдүүлэлт/ */}
                          </h4>
                        </ScrollAnimation>
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          animateOut="fadeInOut"
                          animateOnce={true}
                        >
                          <p className="description">
                            1. Үйлчилгээний нөхцөлийг хүлээн зөвшөөрөөгүй
                            тохиолдолд ihelp-д бүртгэл үүсгэхгүй, үйлчилгээ
                            авахгүй байх эрхтэй.
                            <br />
                            2. Хэрэглэгч хэдийд ч “ihelp Magazine”-ийг ашиглахаа
                            болих, бүртгэлээ устгуулах эрхтэй.
                            <br />
                            3. Хэрэглэгч нь “ihelp Magazine”-ийн талаар санал,
                            гомдол, хүсэлт зэргийг ihelp-ийн сошиал хаягуудаар
                            болон info@ihelp.mn цахим хаягаар чөлөөтэй
                            илэрхийлэх, илгээх эрхтэй.
                            <br />
                            4. Хэрэглэгч “ihelp Magazine”-д нэвтрэх нэр, цахим
                            шуудан болон нууц үгийг нууцлах үүрэгтэй ба бусдад
                            өөрийн аккаунтаар нэвтрэх, ашиглах боломж олгохгүй
                            байж, хувийн мэдээллийн аюулгүй байдлыг хангах
                            үүрэгтэй.
                            <br />
                            5. Хэрэглэгч нь “ihelp Magazine”-ээс олж авсан
                            мэдээллээ аливаа нэг шийдвэр гаргах зэрэг хувьдаа
                            ашиглахдаа тохиолдолд үр дүнг нь өөрөө хариуцах
                            үүрэгтэй.
                          </p>
                        </ScrollAnimation>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6 col-12">
                      <div className="thumbnail image-left-content">
                        <img
                          src="./images/ihelp/bgmagazine.png"
                          alt="split Images"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3,4 */}
              <div className="rn-splite-style pt--100 pb--100">
                <div className="split-wrapper">
                  <div className="row no-gutters radius-10 align-items-center">
                    <div className="col-lg-12 col-xl-6 col-12">
                      <div className="thumbnail image-left-content">
                        <img
                          src="./images/ihelpimage/magazine3.png"
                          alt="split Images"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6 col-12">
                      <div className="split-inner">
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          animateOut="fadeInOut"
                          animateOnce={true}
                        >
                          <h4 className="title">
                            <strong style={{ color: "#059dff" }}>
                              Гурав. Төлбөрийн нөхцөл
                            </strong>{" "}
                          </h4>
                        </ScrollAnimation>
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          animateOut="fadeInOut"
                          animateOnce={true}
                        >
                          <p className="description">
                            1. “ihelp Magazine” нь үнэ төлбөргүйгээр цахим
                            сүлжээнд байршина.
                            <br />
                            2. “ihelp Magazine”-ийг бэлэн сэтгүүл хэлбэрээр
                            хүргүүлж авах тохиолдолд дугаар бүрийн үнэ ...
                            төгрөг байна.
                            <br />
                            <h4 className="title">
                              <strong style={{ color: "#059dff" }}>
                                Дөрөв. Өмчлөх эрх
                              </strong>{" "}
                            </h4>
                            <br />
                            1. “ihelp Magazine” нийтлэгдэж байгаа мэдээ,
                            мэдээллүүд нь “Новелист” ХХК-ийн өмч болно.
                            <br />
                            2. “ihelp Magazine”-д нийтлэгдсэн мэдээ, мэдээллийг
                            зөвшөөрөлгүйгээр бусдад дамжуулах, хуулбарлан
                            түгээхийг хориглоно.
                            <br />
                            3. “ihelp Magazine” нь “Новелист” ХХК-ийн өмч бөгөөд
                            энэхүү платформын лого, нэр, бүтэц, загвар, схем,
                            програмчлал, дизайн, шийдэл, видео, зураг,
                            хөдөлгөөнт зураг, контент, үйлчилгээ, тэмдэглэгээг
                            хуулах, олшруулах, дуурайх, бусад хэлбэрээр ашиглах
                            болон бусад этгээдийн зүгээс ашиг олох зорилгоор
                            ашиглахыг хориглоно.
                          </p>
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 5 */}
              <div className="rn-splite-style pt--100 pb--100">
                <div className="split-wrapper">
                  <div className="row no-gutters radius-10 align-items-center">
                    <div className="col-lg-12 col-xl-6 col-12">
                      <div className="split-inner">
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          animateOut="fadeInOut"
                          animateOnce={true}
                        >
                          <h4 className="title">
                            <strong style={{ color: "#059dff" }}>
                              Тав. Хариуцлага
                            </strong>{" "}
                          </h4>
                        </ScrollAnimation>
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          animateOut="fadeInOut"
                          animateOnce={true}
                        >
                          <p className="description">
                            1. Хэрэглэгч өөрийн үүргээ үл биелүүлж Үйлчилгээний
                            нөхцөлтэй танилцаагүй нь Үйлчилгээний нөхцөл, түүний
                            аливаа заалтыг танилцаагүй, мэдээгүй, ойлгоогүй гэж
                            үзэх үндэслэл болохгүй бөгөөд хэрэглэгчийг аливаа
                            үүрэг, хариуцлагаас чөлөөлөх үндэслэл болохгүй.
                            <br />
                            2. “ihelp Magazine” сэтгүүл дээрх мэдээллүүд нь
                            хэрэглэгчийн аливаа шийдвэр, хувийн амьдралд
                            нөлөөлөх, өөрчлөлт оруулах зэрэгт “Новелист ХХК”
                            хариуцлага хүлээхгүй болно.
                            <br />
                            3. Энэхүү Үйлчилгээний нөхцөл болон Монгол улсад
                            хүчин төгөлдөр үйлчилж буй хууль тогтоомжийг зөрчсөн
                            тохиолдолд ihelp нь тухайн хэрэглэгчийн эрхийг
                            хасах, бүртгэлийг устгах, цаашлаад үйлчилгээ
                            үзүүлэхээ зогсоох эрхтэй бөгөөд тухайн хэрэглэгчтэй
                            холбоотой мэдээллийг хуулийн байгууллагын зүгээс
                            шаардсан тохиолдолд холбогдох байгууллагад шилжүүлэх
                            эрхтэй байна.
                            <br />
                            4. “Новелист” ХХК-ийн оюуны өмчийн эрх зөрчигдсөн
                            тохиолдолд холбогдох этгээдэд Оюуны өмчийн тухай
                            хууль, Зөрчлийн тухай хууль, Эрүүгийн тухай хууль
                            болон бусад хуульд заасан хариуцлага хүлээлгэнэ.
                          </p>
                        </ScrollAnimation>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6 col-12">
                      <div className="thumbnail image-left-content">
                        <img
                          src="./images/ihelpimage/magazine5.png"
                          alt="split Images"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 6 */}
              <div className="rn-splite-style pt--100 pb--100">
                <div className="split-wrapper">
                  <div className="row no-gutters radius-10 align-items-center">
                    <div className="col-lg-12 col-xl-6 col-12">
                      <div className="thumbnail image-left-content">
                        <img
                          src="./images/ihelpimage/magazine4.png"
                          alt="split Images"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6 col-12">
                      <div className="split-inner">
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          animateOut="fadeInOut"
                          animateOnce={true}
                        >
                          <h4 className="title">
                            <strong style={{ color: "#059dff" }}>
                              Зургаа. Бусад нөхцөл
                            </strong>{" "}
                          </h4>
                        </ScrollAnimation>
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          animateOut="fadeInOut"
                          animateOnce={true}
                        >
                          <p className="description">
                            1. “ihelp Magazine”-ийн хэвийн ажиллагаа, түүний
                            аюулгүй байдал, мэдээллийн нууцлалыг “Новелист” ХХК
                            бүрэн хариуцна.
                            <br />
                            2. “ihelp Magazine”-д доголдол, гэмтэл, тасалдал
                            гарсан тохиолдолд бид доголдлыг боломжит богино
                            хугацаанд хурдан засварлах арга хэмжээг авна.
                            <br />
                            3. “ihelp Magazine” нь нэг талын санаачилгаар
                            үйлчилгээний нөхцөлдөө бүхлээр буюу хэсэгчлэн
                            нэмэлт, өөрчлөлт оруулах эрхтэй бөгөөд шаардлагатай
                            тохиолдолд энэ талаараа мэдэгдэл гаргана.
                            <br />
                            4. Хэрэглэгч нь энэ зүйлийн “2.3.1”-д заасан нэмэлт,
                            өөрчлөлтийг хүлээн зөвшөөрөөгүй тохиолдолд өөрийн
                            бүртгэлийг устгаж, ihelp.mn-ээс авч буй үйлчилгээгээ
                            зогсоох эрхтэй.
                            <br />
                            5. Хэрэглэгч бүртгэлээ устгаагүй тохиолдолд энэ
                            зүйлийн “2.3.1”-д заасан нэмэлт, өөрчлөлтийг хүлээн
                            зөвшөөрсөн гэж үзнэ.
                            <br />
                            6. Хэрэглэгч нь ihelp.mn-ийг цаашид ашиглахгүй
                            тохиолдолд өөрийн бүртгэл/аккаунтыг хэдийд ч хаах
                            эрхтэй. Хэрэглэгч өөрийн аккаунтыг хаах нь “ihelp”-д
                            хадгалагдаж буй бүх мэдээллийг устгах үндэслэл
                            болохгүй. <br />
                            7. “ihelp Magazine” нь үйлчилгээгээ бүхэлд нь, эсхүл
                            хэсэгчлэн түдгэлзүүлэх, зогсоох, өөрчлөх эрхтэй
                            байна. <br />
                            8. “ihelp Magazine”-ийн үйлчилгээний талаар худал,
                            гүтгэсэн, доромжилсон, тэдний нэр хүндэд халдсан
                            агуулгатай мэдээлэл оруулах, тараахыг хориглоно.
                          </p>
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* footer */}
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <div
                  style={{
                    alignSelf: "center",
                    paddingRight: "300px",
                    paddingLeft: "300px",
                  }}
                >
                  <h4 className="title ">
                    {/* <strong style={{ color: "#059dff" }}> */}
                    <br />
                    Үйлчилгээний нөхцөлийг зөрчсөн аливаа нэг зөрчил илэрсэн
                    тохиолдолд Үйлчилгээний нөхцөлийн арав дахь хэсэгт заасан
                    хариуцлага болон Монгол улсын хүчин төгөлдөр үйлчилж буй
                    хууль тогтоомжоор шийдвэрлэнэ.
                    <br />
                    {/* </strong>{" "} */}
                  </h4>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default PrivacyAndPolicy;
