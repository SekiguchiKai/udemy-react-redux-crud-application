// Action とは、jsのobjectのこと
// typeのkeyとそれにひもづくaction
// typeの値はユニークである必要

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// ActionCreatorは、Actionを返す
export const increment = () => (
{
    type: INCREMENT
});

export const decrement = () => ({
    type: DECREMENT
});


