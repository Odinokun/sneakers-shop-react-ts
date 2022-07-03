import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={170}
      height={245}
      viewBox="0 0 170 245"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="170" height="150"/>
      <rect x="0" y="164" rx="5" ry="5" width="170" height="14"/>
      <rect x="0" y="185" rx="5" ry="5" width="130" height="14"/>
      <rect x="0" y="220" rx="5" ry="5" width="90" height="24"/>
      <rect x="140" y="212" rx="5" ry="5" width="32" height="32"/>
    </ContentLoader>
  )
}