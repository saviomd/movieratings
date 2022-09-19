import ReactGA from "react-ga4";

const trackGaPageView = () => {
  ReactGA.initialize([
    { trackingId: import.meta.env.PROD ? "G-JQYYG4Y06V" : "G-N6KHSH4BNY" },
    { trackingId: import.meta.env.PROD ? "UA-22412489-1" : "UA-22412489-2" },
  ]);
  ReactGA.send("pageview");
};

export default trackGaPageView;
