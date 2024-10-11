import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Head from 'next/head';
import { useRouter } from 'next/router';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "../styles/Editor.module.css";
import Quotes from '../src/mdQuotes';

// Dynamic import for the markdown editor
const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

// WordCounter Component
const WordCounter = ({ text, darkMode }: { text: string; darkMode: boolean }) => {
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0; // Count words
  const characterCount = text.length; // Count characters

  return (
    <div className={`fixed bottom-0 left-0 right-0 p-2 shadow-md text-sm ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-600'}`}>
      Words: {wordCount} | Characters: {characterCount}
    </div>
  );
};

function HomePage() {
  const [value, setValue] = useState<string>(""); // Initialize with an empty string
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  // Load saved content from localStorage when the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") { // Check if running in the browser
      const savedContent = localStorage.getItem('markdownContent');
      if (savedContent) {
        setValue(savedContent);
      } else {
        // Set initial content if nothing is saved
        const randomnumber = Math.floor(Math.random() * Quotes.quotes.length);
        setValue(`
## A quote you may need for today 😊
> ${Quotes.quotes[randomnumber].quote}

                                       ${Quotes.quotes[randomnumber].author}

---
### Getting started 😎
- Delete this template before starting.
- This editor supports all markdown functionalities.
- Fully open-source.
- We don't store your data, anything you type remains in your local browser (_Once we move to cloud, we will encrypt all of your data before saving them on servers_).
- Want any improvements or contribute @ [GitHub](https://github.com/hotheadhacker/next-markdown).
                                                    `);
      }
    }
  }, []);

  // Save content to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") { // Check if running in the browser
      localStorage.setItem('markdownContent', value);
    }
  }, [value]);

  // Wrapper function for onChange
  const handleEditorChange = (value?: string) => {
    setValue(value || ""); // Update state with the new value
  };

  return (
    <>
      <Head>
        <title>Online Markdown Editor | isalman.dev</title>
        <meta name="description" content="Online Markdown editor with live preview" />
        <meta name="author" content="isalman.dev, hotheadhacker, Salman Quresi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={`flex justify-between items-center p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <button 
          className="px-6 py-2 font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  rounded transition duration-300"
          onClick={() => router.push('/')}
        >
          Home
        </button>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
        >
          {darkMode ? (
            <span role="img" aria-label="Sun">☀️</span>
          ) : (
            <span role="img" aria-label="Moon">🌙</span>
          )}
        </button>
      </nav>
      <div data-color-mode={darkMode ? 'dark' : 'light'} className="relative" style={{ paddingBottom: '50px' }}>
        <MDEditor 
          value={value} 
          onChange={handleEditorChange} // Use the wrapper function here
          fullscreen={false}
          height={700}
        />
        <WordCounter text={value} darkMode={darkMode} /> {/* Pass darkMode to WordCounter */}
      </div>
    </>
  );
}

export default HomePage;