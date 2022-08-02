import Layout from "./InfiniteScroller";
import FileUploadForm from "./FileUploadForm";
import FunctionalScroll from "./fuctionalHook";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Layout />
      <FileUploadForm />
      <FunctionalScroll />
    </div>
  );
}

export default App;
