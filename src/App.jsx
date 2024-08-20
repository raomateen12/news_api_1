

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import profilePic from './assets/img.png'; 

import React, { useState, useEffect } from 'react';

const App = () => {
  const [value, setValue] = useState([]);

  const api = async () => {
    try {
      let response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=2fa1039c7cbe45baa0f93b35233a6252");
      let result = await response.json();
      setValue(result.articles);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-white text-xl font-bold">News App</div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-l bg-white text-black"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
            Search
          </button>
          <img
            src={profilePic}
        
  
            className="rounded-full ml-4 w-10 h-10"
          />
        </div>
      </nav>

      <div className="grid gap-2 lg:grid-cols-4 p-4">
        {value?.map((a, key) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
            <img
              className="object-cover w-full h-48"
              src={a.urlToImage}
              alt="News"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600">
                {a.title}
              </h4>
              <p className="mb-2 leading-normal">
                {a.content}
              </p>
              <a href={a.url} className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>

 
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          
          </div>
        
        <div className=" bg-gray-800">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 Mateen —
              <a href="mailto:raomateen2851@gmail.com" className="text-gray-600 ml-1">raomateen2851@gmail.com</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href="https://github.com/raomateen12" className="text-gray-500" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/rao-mateen-8a0574252/" className="ml-3 text-gray-500" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/raomateen2851?igsh=dWI2N3AxNHJjaHNn" className="ml-3 text-gray-500" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="mailto:raomateen2851@gmail.com" className="ml-3 text-gray-500" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="w-5 h-5" />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
export default App