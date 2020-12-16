import { RefObject } from 'react';

export default function onLayout<T extends HTMLElement>(
  refObject: RefObject<T>,
) {
  let layoutData = refObject.current?.getBoundingClientRect();

  return {
    top: layoutData?.top,
    bottom: layoutData?.bottom,
    left: layoutData?.left,
    right: layoutData?.right,
    width: layoutData?.width,
    height: layoutData?.height,
    x: layoutData?.x,
    y: layoutData?.y,
  };
}
