import React from 'react';

import HeaderImg from '../../../../public/header.png';

export const HeaderImage: React.FC = () => {
  return (
        <div className={'header-container'}>
          <img
            className={'header-image'}
            src={HeaderImg}
            alt={'form header image'}
          />
        </div>
  );
};
