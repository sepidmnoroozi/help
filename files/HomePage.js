import React, { Component } from "react";
import "/home/mnoroozi/final-project/news/backend/client/src/App.css";
// import homepic from "/home/mnoroozi/final-project/news/backend/client/src/img/bg3.jpg";
class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      news_list: [],
    };
  }
  async componentDidMount() {}

  render() {
    return (
      <div className="main">
        {/* <div className="innerintro">
          <img src={homepic} id="homepic" alt="home" />
        </div> */}
        <div className="introbar">
          <p className="intro">
            در خبریاب فارسی فلان به همه ی اخبار منتشر شده در یک سایت دسترسی
            دارید
          </p>
          <p></p>

          <p className="intro">
            با استفاده از لینک های زیر میتوانید به مشاهده دسته بندی اخبار و جست
            و جو بپردازید
          </p>
          <button className="introlist">
            <a href="/w2v">W2V دسته بندی اخبار به روش</a>
          </button>
          <button className="introlist">
            <a href="/tfidf">TF-IDF دسته بندی اخبار به روش</a>
          </button>
          <button className="introlist">
            <a href="/oldsearch">جست و جوی اخبار با استفاده از شباهت متون</a>
          </button>
          <button className="introlist">
            <a href="/search">جست و جوی سریع با استفاده از موتور جست و جو</a>
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
