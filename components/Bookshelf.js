import React from 'react';

const Bookshelf = React.createClass({
  render: function() {
    return (
      <div>
        <div id="shelf">
          <div className="item">
            <div className="type">&#x1F4D6;</div>
            <div className="title-author-container">
              <div className="title-container">
                <div className="title">Station Eleven</div>
              </div>
              <div className="author-container">
                <div className="author">Emily St. John Mandel</div>
              </div>
            </div>
            <div className="year-container">
              <div className="year-published">2014</div>
            </div>
          </div>

          <div className="item">
            <div className="type">&#x1F3AE;</div>
            <div className="title-author-container">
              <div className="title-container">
                <div className="title">NieR: Automata</div>
              </div>
              <div className="author-container">
                <div className="author">Yoko Taro</div>
              </div>
            </div>
            <div className="year-container">
              <div className="year-published">2017</div>
            </div>
          </div>

          <div className="item">
            <div className="type">&#x1F3A5;</div>
            <div className="title-author-container">
              <div className="title-container">
                <div className="title">Dunkirk</div>
              </div>
              <div className="author-container">
                <div className="author">Christopher Nolan</div>
              </div>
            </div>
            <div className="year-container">
              <div className="year-published">2017</div>
            </div>
          </div>

          <div className="item">
            <div className="type">&#x1F4FA;</div>
            <div className="title-author-container">
              <div className="title-container">
                <div className="title">Game of Thrones: Season 7</div>
              </div>
              <div className="author-container">
                <div className="author">David Benioff &amp; D.B. Weiss</div>
              </div>
            </div>
            <div className="year-container">
              <div className="year-published">2017</div>
            </div>
          </div>
        </div>

        <div id="details">
          More details go here &#x1F601;
        </div>
      </div>
    );
  }
});

export default Bookshelf;
