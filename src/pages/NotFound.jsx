import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Soller - Page Not Found</title>
        <meta name="description" content="404 page not found." />
      </Helmet>
      <div
        style={{
          height: "calc(100vh - 20px)",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Helmet>
          <title>404 - Page Not Found</title>
          <meta
            name="description"
            content="Sorry, the page you are looking for does not exist."
          />
        </Helmet>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </>
  );
}

export default NotFound;
