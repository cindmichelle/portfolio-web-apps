import React, { useLayoutEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import onLayout from '../../helpers/onLayout';

import './About.css';
import Card from './Card';

export default function About() {
  let [showTitle, doShowTitle] = useState(false);
  let [showDesc, doShowDesc] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const onScroll = () => {
      if (!showTitle) {
        let relativePos = onLayout<HTMLDivElement>(ref);
        let topElPosition = (relativePos?.top ?? 0) + window.scrollY;
        let bottomElPosition = (relativePos?.bottom ?? 0) + window.scrollY;

        let topWindowPosition = window.pageYOffset;
        let bottomWindowPosition = window.pageYOffset + innerHeight;

        if (topWindowPosition < topElPosition) {
          if (bottomWindowPosition >= topElPosition) {
            doShowTitle(true);
            setTimeout(() => {
              doShowDesc(true);
            }, 500);
            window.removeEventListener('scroll', onScroll);
          }
        } else if (topWindowPosition <= bottomElPosition) {
          doShowTitle(true);
          setTimeout(() => {
            doShowDesc(true);
          }, 500);
          window.removeEventListener('scroll', onScroll);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [showTitle, showDesc]);

  return (
    <div className="about-container">
      <TitleDiv animate={showTitle} ref={ref} className="about-title-container">
        <div className="about-title-container-inside">
          <h2 className="about-title">About Me</h2>
        </div>
      </TitleDiv>
      <DescDiv animate={showDesc} className="card-container">
        <Card />
      </DescDiv>
    </div>
  );
}

const TitleDiv = styled.div`
  transform: translateX(
    ${({ animate }: { animate: boolean }) => (animate ? '0' : '-100vw')}
  );
  transition: transform 1s;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const DescDiv = styled.div`
  visibility: ${({ animate }: { animate: boolean }) =>
    animate ? 'visible' : 'hidden'};
  animation: ${({ animate }: { animate: boolean }) =>
      animate ? fadeIn : undefined}
    1s linear;
  display: flex;
  align-items: center;
`;
