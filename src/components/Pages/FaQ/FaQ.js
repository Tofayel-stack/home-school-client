import React from 'react';
import 'animate.css';




const FaQ = () => {
    return (
      <div className=''>
        <div className="card w-3/4 mx-auto mt-8 mb-8 bg-yellow-800 shadow-xl animate__animated animate__flipInX">
          <div className="card-body ">
            <h2 className="card-title text-white underline underline-offset-4">What is CORS ?</h2>
            <p>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request{" "}
              <a
                target="_blank"
                className="underline"
                href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
              >
                learn more
              </a>
              from MDN.
            </p>
          </div>
        </div>
        <div className="card w-3/4 mx-auto mb-8 bg-yellow-800 shadow-xl animate__animated animate__flipInX">
          <div className="card-body">
            <h2 className="card-title text-white underline underline-offset-4">
              Is Firebase a good option to build a web app backend? If not, what
              are the best options?
            </h2>
            <p>
              why is Firebase your perfect solution? It’s supported by google.
              It’s super super easy to use. It’s well documented. Any more
              questions? You can build whatever app (prototype) with Firebase in
              no time. It might not scale, but this is not what’s it about. You
              just want to master front-end stuff, don’t you? Right.ll, if it’s
              going to get “a lot” of traction, you can pay someone to build a
              scalable backend for you. If not, scalability will never be an
              issue. You just don’t have to care about it! Build whatever you
              like. Focus on the things you love to do. Firebase let’s you do
              exactly this. Keep it going, cheers.
              <a
                target="_blank"
                className="underline"
                href="https://www.quora.com/Why-should-I-use-Firebase-and-when"
              >
                learn more
              </a>
              from Quora.
            </p>
          </div>
        </div>
        <div className="card w-3/4 mx-auto mb-8 bg-yellow-800 shadow-xl animate__animated animate__flipInX">
          <div className="card-body">
            <h2 className="card-title text-white underline underline-offset-4">How does the private route work ?</h2>
            <p>
              Private Routes vary based on the Apps, For example, Dashboard,
              User Profile, App Settings, Home etc. In simple words, These
              routes can be accessed only after login. The constraints for
              Public and Private routes are that Public routes should not be
              accessed after login and Private routes should not be accessible
              before login. In this article, we can see. How to create public
              and private routes using react-router for your react apps.
            </p>
          </div>
        </div>
        <div className="card w-3/4 mx-auto mb-8 bg-yellow-800 shadow-xl animate__animated animate__flipInX">
          <div className="card-body">
            <h2 className="card-title text-white underline underline-offset-4">what is node how does node work ?</h2>
            <p>Javascript has existed since 1995 and has since taken over as the dominant language for web development. For much of its life, JavaScript was used mainly for client-side scripting inside tags executing in web browsers. This limitation meant that developers were often working in many different languages and frameworks between the front-end (client-side) and backend (server-side) aspects of a web application.
            </p>
          </div>
        </div>
      </div>
    );
};

export default FaQ;