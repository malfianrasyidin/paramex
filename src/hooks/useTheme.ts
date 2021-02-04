import { useEffect } from 'react';
import classNames from 'classnames';

export enum Theme {
  Bbento = 'bbento',
  UobMsig = 'uob-msig',
}

export const useTheme = (name?: Theme) => {
  useEffect(() => {
    document.body.className = classNames(name);
  }, [name]);
};
