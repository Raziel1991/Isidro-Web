import React from 'react';
import FlipPage from 'react-flip-page';
import './FlipBook.css';

const images = {
  Comics: ['/images/comics1.jpg', '/images/comics2.jpg'],
  'Character Design': ['/images/character1.jpg', '/images/character2.jpg'],
  'FanArt and Commissions': ['/images/fanart1.jpg', '/images/fanart2.jpg'],
  'Story Board': ['/images/storyboard1.jpg', '/images/storyboard2.jpg'],
  WebToon: ['/images/webtoon1.jpg', '/images/webtoon2.jpg'],
  'WebToon-editing': ['/images/webtoonedit1.jpg', '/images/webtoonedit2.jpg'],
  Miscellaneous: ['/images/misc1.jpg', '/images/misc2.jpg'],
};

function FlipBook({ selectedTab }) {
  return (
    <FlipPage>
      {images[selectedTab].map((img, index) => (
        <article key={index}>
          <img src={img} alt={selectedTab} />
        </article>
      ))}
    </FlipPage>
  );
}

export default FlipBook;
