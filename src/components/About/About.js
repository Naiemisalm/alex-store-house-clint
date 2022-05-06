import React from 'react';

const About = () => {
    return (
        <div className='container mt-3'>
            <h2>1: Difference between javascript and nodejs</h2>
            <h3> what is javascript</h3>
            <p>Answer:<p>JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. On the other hand, Node.js usually represents a list of objects and methods accessible to JavaScript code when run in the V8 engine or via the node interpreter.
            </p></p>
            <h3>what is nodejs </h3>
            <p>Answer <p>is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server. Node.js enables JavaScript code to run outside of the browser. Node.js comes with a large number of modules and is mostly used in web creation. It may run on various platforms including, Windows, Linux, Mac OS, etc. It provides a cross-platform runtime environment with event-driven, non-blocking (asynchronous) I/O for creating highly scalable server-side JavaScript applications.</p></p>


            <h2>2: When should you use nodejs and when should you use mongodb</h2>
            <p>Answer<p>MongoDB and Node.js have a long history of working well together and are paired in many popular tech stacks, including the MEAN stack (MongoDB, Express.js, AngularJS, and Node.js) and and, more recently, the MERN stack (MongoDB, Express.js, React.js, and Node.js).
                The MongoDB Node.js driver makes working with MongoDB from inside a Node.js script simple and intuitive for developers—saving time and increasing productivity.</p></p>

            <h2> 3 : Differences between sql and nosql databases.</h2>
            <h3> SQL Database </h3>
            <p>Answer: <p>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. SQL databases are also commonly used for legacy systems that were built around a relational structure. Free and open-source ,Available for all major platforms</p></p>


            <h3>No SQL Database </h3>
            <p>Answer: <p>MongoDB is by far the most popular NoSQL database, and for good reason. Its features and benefits include:Free to use ,Dynamic schema,Horizontally scalable</p></p>

            <h2> 4: What is the purpose of jwt and how does it work</h2>
            <p>Answer: <p>JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.
                JWT authentication is a token-based stateless authentication mechanism. It is popularly used as a client-side-based stateless session, this means the server doesn’t have to completely rely on a data store (or) database to save session information.
                JWTs can be encrypted, but they are typically encoded & signed.  We will be focusing on Signed JWTs. The purpose of Signed JWT is not to hide the data but to ensure the authenticity of the data. And that is why it’s highly recommended to use HTTPS with Signed JWTs.</p></p>
        </div>
    );
};

export default About;