import { atom, selector } from 'recoil';

import { MyCart } from '@customTypes/Product';

const myCartState = atom<MyCart>({
  key: 'myCartState',
  default: {},
});

export const cartLengthSelector = selector({
  key: 'cartLengthSelector',
  get: ({ get }) => Object.keys(get(myCartState)).length,
});

export default myCartState;
