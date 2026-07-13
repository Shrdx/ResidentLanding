export const gtag_report_conversion = (url?: string) => {
  const callback = function () {
    if (typeof url !== 'undefined') {
      window.location.href = url;
    }
  };
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-11002663060/UxbCCOSTmpUZEJShvf4o',
      'event_callback': callback
    });
  }
  return false;
};
