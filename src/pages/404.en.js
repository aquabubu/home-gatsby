import React from "react";

const ErrorPage = () => {
  // Skip build, Browsers only
  if (typeof window !== 'undefined') {
    window.___history.replace('/en/');
  }

  return (
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  );
}

export default ErrorPage;
