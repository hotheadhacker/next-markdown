import dynamic from "next/dynamic";
import { useState } from "react";
import Head from 'next/head';
import Switch from "react-switch";
import { useRouter } from 'next/router';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "../styles/Editor.module.css";


const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);
const EditerMarkdown = dynamic(
  () =>
    import("@uiw/react-md-editor").then((mod) => {
      return mod.default.Markdown;
    }),
  { ssr: false }
);

function HomePage() {
  const [value, setValue] = useState("**Hello world!!!**" as any);
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

  return (
    <>
        <Head>
            <title>Online Markdown Editor | isalman.dev</title>
            <meta name="description" content="Online Markdown editor with live privew" />
            <meta name="author" content="isalman.dev, hotheadhacker, Salman Quresi" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav className="flex justify-between">
            <div >
                <button className="m-4 font-mono font-bold hover:underline text-2xl text-blue-400 hover:text-purple-400" onClick={()=> router.push('/')}> Home</button>
            </div>
            <div className="m-3">
                <label>
                    <span>Dark Mode </span>
                    <Switch onChange={() => {setDarkMode(!darkMode)}} checked={darkMode} />
                </label>
            </div>
            
        </nav>
        <div data-color-mode={darkMode ? 'dark' : 'light'}>
        <MDEditor value={value} 
        onChange={setValue}
        fullscreen = {false}
        height = {700}
        />
        {/* <div style={{ paddingTop: 50 }}>
            <EditerMarkdown source={value} />
        </div> */}
        </div>
    </>
  );
}

export default HomePage;