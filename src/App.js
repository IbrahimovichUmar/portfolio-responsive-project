import "./App.scss";
import React, { useState } from "react";
import { Card } from "./components/project-examples";
import { Info } from "./components/product-info";
import bannerImg from "./assets/images/banner/banner.png";
import bannerSm from "./assets/images/banner/banner-small.png";
import projectInfo from "./assets/images/project-info/project-info.png";
import projectSm from "./assets/images/project-info/project-info-small.png";
import productImg1 from "./assets/images/lower-project-info/lower-project-info-star.png";
import productImg2 from "./assets/images/lower-project-info/lower-project-info-lg.png";
import productImgSm from "./assets/images/lower-project-info/lower-project-info-small.png";
import { BsLinkedin } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { AiFillHtml5 } from "react-icons/ai";
import { SiPython } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaFigma } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <div className={`App ${isDark && "AppDark"}`}>
      <div className={`header ${isDark && "headerDark"}`}>
        <div className="header__content">
          <ul>
            <li>Sobre Mim</li>
            <li>Projetos</li>
            <li>Skills</li>
            <li>Educação</li>
          </ul>
          <button
            className={`lightButton ${isDark && "darkButton"}`}
            onClick={toggleDarkMode}
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
          <div className="menu">
            <HiMenu />
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="banner__content">
          <div className={`banner__left ${isDark && "banner__leftDark"}`}>
            <span>Meu nome é</span>
            <h1>ALUNO TRILHAS</h1>
            <p>Desenvolvedor fullstack em formacao</p>
            <button>FALE COMIGO</button>
          </div>
          <div className="banner__right">
            <picture>
              <source srcset={bannerSm} media="(max-width: 430px)" />
              <img src={bannerImg} alt="/" />
            </picture>
          </div>
        </div>
      </div>

      <div
        className={`profile__information ${
          isDark && "profile__informationDark"
        }`}
      >
        <div className="content">
          <div className="profile__left">
            <div className="profile__user"></div>
          </div>
          <div className="profile__right">
            <h1>Sobre Mim</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              id lacus egestas, luctus enim ut, porttitor neque. Aliquam dapibus
              sapien molestie, dictum turpis quis, euismod felis. Duis hendrerit
              lacus eu quam pharetra, a hendrerit massa sodales. Curabitur
              lacinia leo nisl, sit amet suscipit turpis mollis in.{" "}
            </p>
            <p>
              Pellentesque nulla arcu, fermentum ultrices ipsum at, suscipit
              fermentum mauris. Suspendisse potenti. Aenean vel sagittis velit.
              Ut et facilisis tellus, eu ornare leo.
            </p>
            <div className="content__buttons">
              <button>
                <span>
                  <BsLinkedin />
                </span>
                Linkedin
              </button>
              <button>
                <span>
                  <HiLink />
                </span>
                Currículo
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="project__examples">
        <div
          className={`project__examples__content ${
            isDark && "project__examples__contentDark"
          }`}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="project__img">
          <picture>
            <source srcset={projectSm} media="(max-width: 430px)" />
            <img src={projectInfo} alt="/" />
          </picture>
        </div>
      </div>

      <div className="languages__section">
        <div className="languages__section__content">
          <div className="description">
            <h1>Habilidadades</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              id lacus egestas, luctus enim ut, porttitor neque. Aliquam dapibus
              sapien molestie, dictum turpis quis, euismod felis. Duis hendrerit
              lacus eu quam pharetra, a hendrerit massa sodales. Curabitur
              lacinia leo nisl, sit amet suscipit turpis mollis in.
            </p>
          </div>
          <div className="languages__view">
            <div>
              <AiFillHtml5 />
            </div>
            <div>
              <SiPython />
            </div>
            <div>
              <SiJavascript />
            </div>
            <div>
              <IoLogoCss3 />
            </div>
            <div>
              <FaFigma />
            </div>
          </div>
        </div>
      </div>

      <div className="product__info">
        <div className="product__info__content">
          <div className="top__content">
            <div className="star__img">
              <img src={productImg1} />
            </div>
            <h1 className="product__header">Educação e Experiencias</h1>
            <Info />
          </div>
          <div className="bottom__content">
            <Info />
            <div className="programmer__img">
              <picture>
                <source srcset={productImgSm} media="(max-width: 430px)" />
                <img src={productImg2} alt="/" />
              </picture>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer__icons">
          <a href="https://github.com/IbrahimovichUmar" target="blanck">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/login/ru" target="blanck">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/" target="blanck">
            <FaInstagramSquare />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
