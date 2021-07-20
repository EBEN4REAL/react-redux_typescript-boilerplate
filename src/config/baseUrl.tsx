const getBaseUrl = () => {
  const url = window.location.href;
  const base = url.split("#")[0];
  const baseWithoutHttp = base.split("/")[2];
  switch (baseWithoutHttp) {
    case "192.168.0.4":
      return "http://nglosapp07:9090";
    default:
      return "https://jsonplaceholder.typicode.com"
      // return "http://ce041869be32.ngrok.io"
  }
};

const baseUrl = getBaseUrl();
export default baseUrl;
