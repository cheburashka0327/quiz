import React, { useEffect } from "react";

const GATag: React.FC = () => {
  useEffect(() => {
    const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

    if (!GA_TRACKING_ID) {
      console.error("GA_TRACKING_ID not populated.");
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = window.gtag || gtag;

    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID);
  }, []);

  return null;
};

export default GATag;
