import React, { useLayoutEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import onLayout from '../../helpers/onLayout';

import './Progress.css';
type Props = {
  value: number; // value between 0-100
  label: string;
};

export default function Progress(props: Props) {
  let { label, value } = props;

  let [show, doShow] = useState(false);
  let [showBar, doShowBar] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const onScroll = () => {
      if (!show) {
        let relativePos = onLayout<HTMLDivElement>(ref);
        let topElPosition = (relativePos?.top ?? 0) + window.scrollY;
        let bottomElPosition = (relativePos?.bottom ?? 0) + window.scrollY;

        let topWindowPosition = window.pageYOffset;
        let bottomWindowPosition = window.pageYOffset + innerHeight;

        if (topWindowPosition < topElPosition) {
          if (bottomWindowPosition >= topElPosition) {
            doShow(true);
            setTimeout(() => {
              doShowBar(true);
            }, 1500);
            window.removeEventListener('scroll', onScroll);
          }
        } else if (topWindowPosition <= bottomElPosition) {
          doShow(true);
          setTimeout(() => {
            doShowBar(true);
          }, 1500);
          window.removeEventListener('scroll', onScroll);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [show]);

  return (
    <div className="progress-cont" ref={ref}>
      <Div animate={show}>
        <h2 className="progress-label">{label}</h2>
        <div className="progress-init-bar" />
      </Div>
      <div className="bar-container">
        <Bar show={showBar} value={value} />
      </div>
    </div>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const span = (value: number) => keyframes`
  from {
    width:0%;
  }

  to {
    width: ${value}%;
  }
`;

const Div = styled.div`
  visibility: ${({ animate }: { animate: boolean }) =>
    animate ? 'visible' : 'hidden'};
  animation: ${({ animate }: { animate: boolean }) =>
      animate ? fadeIn : undefined}
    1s linear;
  display: flex;
  align-items: center;
`;

const Bar = styled.div`
  animation: ${({ value, show }: { value: number; show: boolean }) =>
      show ? span(value) : undefined}
    1s linear;
  width: ${({ value, show }: { value: number; show: boolean }) =>
    show ? value : 0}%;
  background-color: #f57b51;
  height: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
