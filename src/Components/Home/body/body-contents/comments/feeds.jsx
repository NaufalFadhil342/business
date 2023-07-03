import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BsQuote } from 'react-icons/bs';

export const Feeds = ({ comments }) => {
  const [curIndex, setCurIndex] = useState(0);
  const timerRef = useRef(null);

  const next = useCallback(() => {
    const isLastSlide = curIndex === comments.length - 1;
    const newIndex = isLastSlide ? 0 : curIndex + 1;
    setCurIndex(newIndex);
  }, [comments, curIndex]);

  const goToSlide = (newId) => {
    setCurIndex(newId);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      next();
    }, 3000);

    return () => clearTimeout(timerRef.current);
  }, [next]);

  const feedsItem = (
    <div className="item">
      <div className="text">"{comments[curIndex].text}"</div>
      <div className="user">
        <h3>{comments[curIndex].name}</h3>
        <div>{comments[curIndex].office}</div>
      </div>
    </div>
  );

  const dots = comments.map((dot, id) => {
    return (
      <div className="dot" key={dot.id} onClick={() => goToSlide(id)}>
        <div className={curIndex === id ? 'active' : ''} />
      </div>
    );
  });

  return (
    <div className="feeds">
      <i>
        <BsQuote />
      </i>
      <div className="feeds-item">{feedsItem}</div>
      <div className="dots">{dots}</div>
    </div>
  );
};
