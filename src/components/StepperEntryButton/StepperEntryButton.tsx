import { ButtonHTMLAttributes } from 'react';

import { CART } from '@assets/index';

const StepperEntryButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { onClick } = props;

  return (
    <button onClick={onClick} aria-label="장바구니에 상품 추가하기">
      <CART />
    </button>
  );
};

export default StepperEntryButton;
