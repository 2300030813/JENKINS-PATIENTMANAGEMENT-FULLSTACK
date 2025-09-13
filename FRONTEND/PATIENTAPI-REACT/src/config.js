const config = {
  DEV_API_URL: "http://localhost:2010/patientapi",
  TOMCAT_API_URL: "http://localhost:2030/springbootpatientapi"
};

// Auto-select correct backend based on environment
const API_URL =
  window.location.hostname === "localhost" && window.location.port === "5173"
    ? config.DEV_API_URL
    : config.TOMCAT_API_URL;

export default API_URL;
