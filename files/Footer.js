import React, { Component } from "react";
import "/home/mnoroozi/final-project/news/backend/client/src/App.css";
import googleplaydark from "/home/mnoroozi/final-project/news/backend/client/src/img/googleplaydark.png";
import sibappdark from "/home/mnoroozi/final-project/news/backend/client/src/img/sibappdark.png";
import cafebazaardark from "/home/mnoroozi/final-project/news/backend/client/src/img/cafebazaardark.png";
import logo2 from "/home/mnoroozi/final-project/news/backend/client/src/img/logo2.png";
import logo1 from "/home/mnoroozi/final-project/news/backend/client/src/img/logo1.png";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="bottombar">
          <div className="bottom-grid">
            <div className="bottomitem bottomitem2">
              <h4>پشتیبانی </h4>
              <a href=" ">درخواست همکاری</a>
              <a href=" ">قوانین و مقررات</a>
            </div>
            <div className="bottomitem bottomitem3">
              <h4>سایت های خبری</h4>
              <a href=" ">ثبت سایت شما</a>
            </div>
            <div className="bottomitem bottomitem4">
              <h4>ارتباط با ما</h4>
              <a href=" ">درباره پروژه</a>
              <a href=" ">تماس با ما</a>
            </div>
            <div className="bottomitem bottomitem5">
              <p>
                اخبار به طور اتوماتیک از سایت های خبری جمع آوری میشوند و ما
                هیچگونه مسئولیتی در قبال اخبار منتشر شده نداریم
              </p>
              <a href=" ">لیست سایت های خبری</a>
            </div>
          </div>
          <div className="logobar">
            <div className="logo">
              <img src={logo2} alt="ah" />
            </div>
            <div className="logo">
              <img src={logo1} alt="ah" />
            </div>
          </div>
        </div>
        <div className="socialmedia">
          <div className="icons">
            <a href=" ">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href=" ">
              <i className="fab fa-instagram" />
            </a>
            <a href=" ">
              <i className="fab fa-twitter" />
            </a>
            <a href=" ">
              <i className="fab fa-facebook-f" />
            </a>
            <a href=" ">
              <i className="fab fa-telegram-plane" />
            </a>
          </div>
          <div className="socialtext">
            © 2020, NLP LAB AUT, All Rights Reserved.
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
