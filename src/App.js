import Layout from "./InfiniteScroller";
import FileUploadForm from "./FileUploadForm";

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
    </div>
  );
}

export default App;
