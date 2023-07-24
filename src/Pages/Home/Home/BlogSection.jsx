import React, { useState } from "react";

const BlogSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questionsAndAnswers = [
    {
      question: "What is the MERN Stack?",
      answer: "The MERN Stack is a popular web development technology stack that includes MongoDB, Express.js, React, and Node.js.",
    },
    {
      question: "Explain the role of each component in the MERN Stack?",
      answer: "MongoDB: A NoSQL database used to store and retrieve data.\n" +
        "Express.js: A Node.js framework that simplifies server-side development and handles routing and middleware.\n" +
        "React: A JavaScript library for building user interfaces and front-end components.\n" +
        "Node.js: A server-side JavaScript runtime that enables server-side development.",
    },
    {
      question: "What is the main advantage of using a NoSQL database like MongoDB in the MERN Stack?",
      answer: "NoSQL databases like MongoDB are schema-less and offer flexibility in data structure, making it easier to handle changing data requirements in agile development environments.",
    },
    {
      question: "How do you connect MongoDB with Node.js in a MERN application?",
      answer: "By using the mongodb package, you can establish a connection to MongoDB in a Node.js application and perform CRUD operations on the database.",
    },
    {
      question: "What is Express.js middleware?",
      answer:"Middleware in Express.js is a series of functions that have access to the request and response objects and can execute code before the final request handler is invoked. It's used for tasks like logging, authentication, error handling, etc.",
    },
    {
      question: "Explain the virtual DOM in React.",
      answer: "The virtual DOM is a lightweight copy of the actual DOM. React uses it to perform efficient updates and minimize direct manipulation of the real DOM, making UI rendering faster and more efficient.",
    },
    {
      question: "How can you handle state management in a React application?",
      answer:"React has built-in state management, but for more complex applications, you can use state management libraries like Redux or MobX.",
    },
    {
      question: "What are React hooks?",
      answer:"React hooks are functions that allow you to use state and other React features in functional components. Examples include useState, useEffect, useContext, etc.",
    },
    // Add more questions and answers here
  ];
  

  const handleQuestionClick = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className=" px-3 md:px-[150px]  pt-8 pb-3" style={{backgroundImage: 'url(https://img.freepik.com/free-vector/v915_53876-174949.jpg?w=1380&t=st=1690180100~exp=1690180700~hmac=507e80d5e051d715917dc0b31ecbe9e54aa51945cb6bb64c05f084ac62b639f3)'}}>
      <h2 className="text-xl font-semibold text-slate-500 mb-4 ">
        Recent Blogs
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center text-black gap-6">
        <div >
        {questionsAndAnswers.map((qa, index) => (
        <div key={index} className="p-2 border rounded">
          <div
            className="flex items-center justify-between cursor-pointer "
            onClick={() => handleQuestionClick(index)}
          >
            <h3 className="text-lg font-semibold ">{qa.question}</h3>
            <div className="transform transition-transform">
              {selectedQuestion === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </div>
          </div>
          {selectedQuestion === index && <p className="mt-2">{qa.answer}</p>}
        </div>
      ))}
     
        </div>
      <div >
        <img src="https://img.freepik.com/free-vector/curiosity-search-concept-illustration_114360-11031.jpg?w=826&t=st=1690179444~exp=1690180044~hmac=966041e26b5b53c9cb19833d2f883243cedf5b09f789de7411955cb3956e076a" alt="" />
      </div>
      </div>
    </div>
  );
};

export default BlogSection;
