import React, { Component } from "react";
import "/home/mnoroozi/final-project/news/backend/client/src/App.css";
class Navbar extends Component {
  render() {
    return (
      <div class="topnav">
        <div class="haha">
          <a href="/search">جست و جو</a>
          <a href="/tfidf">TF-IDF</a>
          <a href="/w2v">W2V</a>
          <a href="/">صفحه اصلی</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
