function Books(props) {
    return props.myBooks.map(
        ()=>{
            return <BookItem></BookItem>
        }
    );
  }
  
  // Exporting the 'Books' component to make it available for other parts of the application
  export default Books;
  