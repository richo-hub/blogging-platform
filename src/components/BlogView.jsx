import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import mockData from "../../mock-data";
import "../styles/BlogView.css";

function BlogView() {
//   const { blogs, dispatch } = useContext(BlogsContext);
  const { id } = useParams();

  const selectedBlog = mockData.filter((el) => {
    return el.id == id;
  })[0]

  console.log(selectedBlog)

  const dateVal = new Date().toLocaleDateString()

  return (
    <div className="blogview-complete-page">
      <div className="blogview-container">
            <div className="indiv-blog">
              <div className="blog-header-img-cont">
                <img
                  alt="Dummy scene"
                  className="blog-header-img"
                  src={`${selectedBlog.img}`}
                />
              </div>

              <section>
                <div className="blog-author-info">
                  <img src="https://picsum.photos/id/237/40" alt="avatar" />
                  <div>
                    <p className="author-name">
                            {selectedBlog.first_name}
                    </p>
                    <p className="posted-date">{dateVal}</p>
                  </div>
                </div>

                <h1 className="blog-title">{selectedBlog.title}</h1>
                <p className="font-normal text-sm leading-6" >{selectedBlog.content}</p>

                <h1 className="text-2xl font-bold mt-3 mb-2" >How it works</h1>
                <p className="font-normal text-sm leading-6" >At the core of React's design philosophy is the concept of declarative programming. Unlike traditional imperative programming, where developers specify step-by-step instructions for how to achieve a particular outcome, declarative programming focuses on describing what the outcome should be. React components, the building blocks of React applications, are written in a declarative manner, making it easier to understand, debug, and maintain code.</p>
                <p className="font-normal text-sm leading-6 mt-3" >React applications are constructed using components. Components are with functional components becoming more popular due to the introduction of hooks in React 16.8, which allows functional components to manage state and side effects.</p>

              </section>
            </div>
      </div>
    </div>
  );
}

export default BlogView;
