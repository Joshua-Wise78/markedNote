import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./App.css";

const defaultMarkdown = " # Hello from Markdown";

function App() {
  const [markdownText, setmMarkdownText] = useState(defaultMarkdown);

  return (
    <main className="app-container">
      <textarea
        className="editor-pane"
        value={markdownText}
        onChange={(e) => setmMarkdownText(e.target.value)}
        arial-label="Markdown Editor"
      />
      <section className="preview-pane" aria-label="Markdown Preview">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdownText}
        </ReactMarkdown>
      </section>
    </main>
  );
}

export default App;
