import { useState } from "react";

import HeaderSection from "./components/pages/HeaderSection";
import BottomSection from "./components/pages/BottomSection";
import ImagesGrid from "./components/pages/ImagesGrid";

const App = () => {
  const [activeTab, setActiveTab] = useState(true);

  return (
    <>
      <HeaderSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <BottomSection activeTab={activeTab} />
      <ImagesGrid activeTab={activeTab} />
    </>
  );
};

export default App;
