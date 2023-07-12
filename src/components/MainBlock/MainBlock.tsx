import React, { CSSProperties, FC } from 'react';

import clsx from 'clsx';

import styles from './MainBlock.module.scss';

import CounterItem from '@/components/CounterItem/CounterItem';
import Wrapper from '@/containers/Wrapper/Wrapper';

interface IMainBlock {
  title: string;
  list?: string[];
  type?: 'white' | 'blue';
  children?: React.ReactNode;
}

const MainBlock: FC<IMainBlock> = ({ title, list, type = 'white', children }) => {
  const wrapperStyle: CSSProperties =
    type === 'white'
      ? { backgroundImage: 'none' }
      : {
          backgroundImage:
            'linear-gradient(90deg, #E3EAFA 0%, rgba(245, 248, 255, 0.50) 85.87%)',
        };

  return (
    <Wrapper style={wrapperStyle}>
      <div className={clsx(styles.mainBlock, styles[type])}>
        <div className={styles.mainBlock__title}>{title}</div>
        <div className={styles.mainBlock__content}>
          {children}
          {list?.map((el, index) => (
            <CounterItem str={el} id={index + 1} key={`${el}_${index + 1}`} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default MainBlock;
