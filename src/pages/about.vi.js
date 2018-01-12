import React from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

const AboutPage = () => {
  return (
    <div className="about-container">
      <Helmet>
        <title>{`About | ${config.siteTitle}`}</title>
        <link rel="canonical" href={`${config.siteUrl}/about/`} />
      </Helmet>
      <About>
        <p>
          <h3>Aqua</h3>
          Aqua thích đi du lịch và khám phá những nơi tuyệt vời, gặp gỡ mọi người và thưởng thức các món ăn ngon. Cô ấy muốn chia sẻ kinh nghiệm của mình với mọi người và muốn tận hưởng mọi khoảnh khắc ý nghĩa của cuộc sống.
        </p>
        <p>
          <h3>BuBu</h3>
          BuBu là một lập trình viên siêng năng. Anh ấy thích đi du lịch, chơi nhiều loại nhạc cụ khác nhau (dù chơi không hay^^), nâng cao và phát triển các kỹ năng. Anh ấy chỉ Aqua code trang blog này và hy vọng sẽ không phải sửa lỗi cho cô ấy.
        </p>
      </About>
    </div>
  );
}

export default AboutPage;
