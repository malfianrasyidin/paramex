import { useEffect } from 'react';
import classNames from 'classnames';

export const useTheme = (name: string) => {
  useEffect(() => {
    document.body.className = classNames(name);
  }, [name]);
};
