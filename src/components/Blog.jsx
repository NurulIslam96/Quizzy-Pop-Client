import React from "react";
import blogs from "../assets/blogs.gif";
const Blog = () => {
  return (
    <div className="mt-5">
      <div className="flex md:flex-row flex-col container mx-auto justify-center items-center">
        <p className="md:text-5xl text-3xl font-bold text-slate-600">Welcome to Blogs</p>
        <img src={blogs} className="md:w-1/4 w-full md:mt-0 mt-2 " alt="" />
      </div>
      <div className="container my-5 md:mx-auto px-2 md:w-1/2">
        <div className="border-double border-4 border-slate-500 rounded-md p-5">
          <p className="text-3xl text-sky-600 my-5 font-semibold">What is the purpose of React Router?</p>
          <p className="text-2xl text-slate-600"><span className="font-semibold text-slate-700">Ans:</span> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. More importantly, it allows us to prevent a page refresh.</p>
        </div>
      </div>
      <div className="container my-5 md:mx-auto px-2 md:w-1/2">
        <div className="border-double border-4 border-slate-500 rounded-md p-5">
          <p className="text-3xl text-sky-600 my-5 font-semibold">How does Context Api work?</p>
          <p className="text-2xl text-slate-600"><span className="font-semibold text-slate-700">Ans:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
        </div>
      </div>
      <div className="container my-5 md:mx-auto px-2 md:w-1/2">
        <div className="border-double border-4 border-slate-500 rounded-md p-5">
          <p className="text-3xl text-sky-600 my-5 font-semibold">What is the use of useRef in react</p>
          <p className="text-2xl text-slate-600"><span className="font-semibold text-slate-700">Ans:</span> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. useRef is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you'd use instance fields in classes.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
