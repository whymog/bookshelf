import React from 'react';
import LIBRARY from '../library';

console.log(LIBRARY);

const Bookshelf = React.createClass({
  render: function() {
    return (
      <div>
        <Display />
        <Details />
      </div>
    );
  }
});

const Display = React.createClass ({
  getInitialState: function() {
    return LIBRARY;
  },

  render: function() {
    return (
      <div id="shelf">
        {this.state.items.map(function(item, index) {
          return (
            <Item
              key={item.id}
              title={item.title}
              author={item.author}
              type={item.type}
              yearPublished={item.yearPublished}
            />
          );
        })}
      </div>
    );
  }
});

function Item(props) {
  return (
    <div className="item">
      <div className="type">{getEmoji(props.type)}</div>
      <div className="title-author-container">
        <div className="title-container">
          <div className="title">{props.title}</div>
        </div>
        <div className="author-container">
          <div className="author">{props.author}</div>
        </div>
      </div>
      <div className="year-container">
        <div className="year-published">{props.yearPublished}</div>
      </div>
    </div>
  );
}

function Details(props) {
  return (
    <div id="details">
      More details go here &#x1F601;
    </div>
  );
};

function getEmoji(name) {
  const typeToEmoji = {
    book: '\u{1F4D6}',
    game: '\u{1F3AE}',
    movie: '\u{1F3A5}',
    tv: '\u{1F4FA}'
  };

  for (let type in typeToEmoji) {
    if (name === type) return typeToEmoji[type];
  }

  return '\u{2753}';
}

export default Bookshelf;
