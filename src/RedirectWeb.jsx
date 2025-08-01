import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function RedirectWebmail() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/webmail") {
      window.location.href = "https://bluebirdconsultltd.com:2096";
    }
  }, [location]);

  return null;
}

export default RedirectWebmail;
