import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import styles from './ScrollContainer.module.scss';

interface ScrollContainerProps {
  children: React.ReactNode;
  navigable?: boolean;
  countBy?: number;
  style?: CSSProperties;
}
const ScrollContainer: FC<ScrollContainerProps> = ({
  children,
  navigable,
  countBy = 3,
  style,
}) => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const [translate, setTranslate] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const childLength = (containerRef.current?.children.length as number) || 0;

  const itemWidth = (containerRef.current?.firstElementChild?.clientWidth as number) || 0;

  const dotClick = (count: number) => {
    setActiveItem(count);
  };

  // Задаёт всем элементам контейнера ширину равную оношению ширины контейнера к количеству показываемых элементов
  useEffect(() => {
    if (!containerRef.current) return;

    Array.prototype.slice
      .call(containerRef.current.children)
      .forEach(item => item.setAttribute('style', `min-width: ${100 / countBy}%`));
  }, []);

  useEffect(() => {
    setTranslate(activeItem * itemWidth);
  }, [activeItem]);

  // Перемещает элементы внутри блока с помощью transform
  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.setAttribute('style', `transform: translateX(-${translate}px)`);
  }, [translate]);

  const dotsArr = childLength
    ? Array(childLength - countBy + 1).fill('')
    : Array(countBy).fill('');

  return navigable ? (
    <div className={styles.navScrollContainer} style={style}>
      <div className={styles.slider}>
        <div className={styles.container} ref={containerRef}>
          {children}
        </div>
      </div>

      <div className={styles.dots}>
        {dotsArr.map((el, index) => (
          <button
            className={
              activeItem === index ? clsx(styles.dot, styles.dot__active) : styles.dot
            }
            onClick={() => dotClick(index)}
            key={`dot_${index + 1}`}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className={styles.scrollContainer} style={style}>
      {children}
    </div>
  );
};

export default ScrollContainer;
