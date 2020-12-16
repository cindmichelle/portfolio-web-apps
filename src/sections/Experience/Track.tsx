import React, { useLayoutEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import onLayout from '../../helpers/onLayout';

type Datum = {
  timeRange: string;
  company: string;
  position: string;
  desc?: string;
};

type TrackProps = Datum & {
  showDivider: boolean;
  idx: number;
};

export default function Track({
  company,
  position,
  showDivider,
  timeRange,
  desc,
  idx,
}: TrackProps) {
  let [showStone, doShowStone] = useState(false);
  let [showTimerange, doShowTimerange] = useState(false);
  let [showCompany, doShowCompany] = useState(false);
  let [showPosition, doShowPosition] = useState(false);
  let [showDesc, doShowDesc] = useState(false);
  const stoneRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const onScroll = () => {
      if (!showStone) {
        let relativePos = onLayout<HTMLDivElement>(stoneRef);
        let topElPosition = (relativePos?.top ?? 0) + window.scrollY;
        let bottomElPosition = (relativePos?.bottom ?? 0) + window.scrollY;

        let topWindowPosition = window.pageYOffset;
        let bottomWindowPosition = window.pageYOffset + innerHeight;

        if (topWindowPosition < topElPosition) {
          if (bottomWindowPosition >= topElPosition) {
            doShowStone(true);
            setTimeout(() => {
              doShowTimerange(true);
              setTimeout(() => {
                doShowCompany(true);
                setTimeout(() => {
                  doShowPosition(true);
                  setTimeout(() => {
                    doShowDesc(true);
                  }, 500);
                }, 500);
              }, 500);
            }, 1000);
            window.removeEventListener('scroll', onScroll);
          }
        } else if (topWindowPosition <= bottomElPosition) {
          doShowStone(true);
          setTimeout(() => {
            doShowTimerange(true);
            setTimeout(() => {
              doShowCompany(true);
              setTimeout(() => {
                doShowPosition(true);
                setTimeout(() => {
                  doShowDesc(true);
                }, 500);
              }, 500);
            }, 500);
          }, 1000);
          window.removeEventListener('scroll', onScroll);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [showStone]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
      }}
    >
      <div className="empty-box" />
      <StoneContDiv ref={stoneRef} animate={showStone} className="stone-cont">
        <Stone />
        {showDivider && <Line />}
      </StoneContDiv>
      <div className={`info-cont ${idx % 2 === 0 ? 'pos-left' : 'pos-right'}`}>
        <Text
          animate={showTimerange}
          position={idx % 2 === 0 ? 'left' : 'right'}
          className="stone-time-range"
        >
          {timeRange}
        </Text>
        <Text
          animate={showCompany}
          className="stone-company"
          position={idx % 2 === 0 ? 'left' : 'right'}
        >
          {company}
        </Text>
        <Text
          animate={showPosition}
          className="stone-position"
          position={idx % 2 === 0 ? 'left' : 'right'}
        >
          {position}
        </Text>
        {desc && (
          <Text
            animate={showDesc}
            className="stone-desc"
            position={idx % 2 === 0 ? 'left' : 'right'}
          >
            {desc}
          </Text>
        )}
      </div>
    </div>
  );
}

function Stone() {
  return <div className="stone" />;
}

function Line() {
  return <div className="line" />;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StoneContDiv = styled.div`
  visibility: ${({ animate }: { animate: boolean }) =>
    animate ? 'visible' : 'hidden'};
  animation: ${({ animate }: { animate: boolean }) =>
      animate ? fadeIn : undefined}
    1s linear;
  display: flex;
  align-items: center;
`;

const Text = styled.h2`
  transform: translateX(
    ${({
      animate,
      position,
    }: {
      animate: boolean;
      position: 'left' | 'right';
    }) => (animate ? '0' : position === 'left' ? '100vw' : '-100vw')}
  );
  transition: transform 1s;
`;
