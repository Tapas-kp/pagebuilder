// import React from 'react'
// import PageBuilder from './components/PageBuilder'

// const App = () => {
//   return (
//     <div>
//       <PageBuilder/>
//     </div>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageBuilder from "./components/PageBuilder"; // Import your PageBuilder
import PublishedPage from "./components/PublishedPage"; // Create this new PublishedPage component

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for PageBuilder */}
        <Route path="/" element={<PageBuilder />} />

        {/* Route for the PublishedPage */}
        <Route path="/published" element={<PublishedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
