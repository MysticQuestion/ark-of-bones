import { useEffect } from 'react';
import DominoLoader from './DominoLoader';

export default function ExternalRedirect({ to }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return <DominoLoader />;
}
