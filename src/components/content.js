
function Content() {
    return (
      <div>
        {/* Represents the content of the component */}
        <h1>Hello World?</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  // Exporting the 'Content' component to make it available for other parts of the application
  export default Content;
  