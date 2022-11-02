import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import Head from 'next/head'


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
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <>
        <Head>
            <title>Online Markdown Editor | isalman.dev</title>
            <meta name="description" content="Online Markdown editor with live privew" />
            <meta name="author" content="isalman.dev, hotheadhacker, Salman Quresi" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Hello</h1>
        <div data-color-mode="dark">
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