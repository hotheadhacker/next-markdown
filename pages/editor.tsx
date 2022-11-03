import dynamic from "next/dynamic";
import { useState } from "react";
import Head from 'next/head';
import Switch from "react-switch";
import { useRouter } from 'next/router';
import Image from 'next/image'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "../styles/Editor.module.css";
import {uncheckedIcon, checkedIcon} from '../src/svg';


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
  let navBackground = {
        dark: 'flex justify-between bg-gradient-to-r from-slate-700 via-neutral-700 to-gray-800',
        light: 'flex justify-between bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-200'
  }

  return (
    <>
        <Head>
            <title>Online Markdown Editor | isalman.dev</title>
            <meta name="description" content="Online Markdown editor with live privew" />
            <meta name="author" content="isalman.dev, hotheadhacker, Salman Quresi" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav className={darkMode ? navBackground.dark : navBackground.light}>
            <div >
                <button type="button" className="m-4 px-8 py-2 font-medium border-double border-4 border-indigo-600 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" onClick={()=> router.push('/')}> Home</button>
            </div>
            <div className="m-3">
                <label>
                   {/* <span> <Image src='/theme-icon.svg' alt='icon' height={10} width={10} /> </span> */}
                    <Switch
                    uncheckedIcon = {uncheckedIcon}
                    checkedIcon = {checkedIcon}
                    onChange={() => {setDarkMode(!darkMode)}} checked={darkMode} />
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