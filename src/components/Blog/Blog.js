import React from "react";
import './Blog.css'
const Blog = () => {
  return (
    <div className="blog-bg">
      <div className="ans">
          <h1 className="text-color">What is context API?</h1>
          <p className="text-color">A React app may use the React Context API to generate global variables that can be passed around. This is an alternative to "prop drilling," which entails passing props from grandma to kid to parent and so on. Context is also marketed as a simpler, lighter way to Redux state management. Context API is a  new feature in React 16.3 that allows you to easily and lightly communicate state across the entire project.React.create All you need is Context(). It will provide you a customer and a provider. Provider is a component that supplies the state to its children, as its name indicates. It will contain the "store" and serve as the parent of any components that may require it. A component that consumes and utilizes the state is known as a consumer.</p>
      </div>
      <div className="ans">
          <h1 className="text-color">What is symantic tag?</h1>
          <p className="text-color">In programming, Semantics refers to the meaning of a piece of code .HTML tags are (primarily) used to format material and instruct the browser how to display the content on the website if we know a little HTML. They provide no indication of the sort of material or the importance that content plays on the page.
Semantic tags overcomes this deficiency by adding particular tags that explicitly explain what role the content included in those elements plays. By including semantic HTML tags on our sites, you provide Google and Bing more information about the functions and relative significance of the various elements on our website. </p>
      </div>
    </div>
  );
};

export default Blog;
