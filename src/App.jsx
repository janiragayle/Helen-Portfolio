import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import WritingListPage from "./pages/WritingListPage.jsx";
import DesignsGrid from "./pages/DesignsGrid.jsx";
import DesignDetail from "./pages/DesignDetails.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prose" element={<WritingListPage kind="prose" />} />
      <Route path="/poems" element={<WritingListPage kind="poems" />} />
      <Route path="/journalism" element={<WritingListPage kind="journalism" />} />
      <Route path="/designs" element={<DesignsGrid />} />
      <Route path="/designs/:id" element={<DesignDetail />} />
    </Routes>
  );
}
