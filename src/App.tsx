import { Routes, Route, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"; // Importing the back arrow icon from react-icons
import DataSetState from "./components/data-set/DataSetState";
import DataSetDisplay from "./components/data-set/DataSetDisplay";
import SortAnimator from "./components/sort/SortAnimator";
import Toolbar from "./components/Toolbar";
import InfoBox from "./components/info-box/InfoBox";
import InfoBoxState from "./components/info-box/InfoBoxState";
import { PathfindingProvider } from "./context/PathfindingContext";
import { TileProvider } from "./context/TileContext";
import { SpeedProvider } from "./context/SpeedContext";
import { useRef } from "react";
import { Grid } from "./components/Grid";
import { Nav } from "./components/Nav";
import Home from "./components/Home";

const App = () => {
  const isVisualizationRunningRef = useRef(false);
  const dataState = DataSetState(100, 45);
  const animState = SortAnimator(dataState.dataSet);
  const infoState = InfoBoxState();
  const navigate = useNavigate(); // useNavigate hook for navigation

  dataState.functions.setResetSorted(animState.functions.resetSorted);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sorting-visualizer"
          element={
            <div id="app" className="relative">
              {/* Back button on top-left corner */}
              <button
                className="absolute top-4 left-4 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-200 shadow-md"
                onClick={() => navigate("/")} // Navigate back to Home
              >
                <FiArrowLeft className="w-6 h-6" /> {/* Icon instead of text */}
              </button>
              <DataSetDisplay
                dataSet={dataState.dataSet}
                statistics={animState.properties.statistics}
              />
              <Toolbar
                dataState={dataState}
                animState={animState}
                infoState={infoState}
              />
              <InfoBox infoState={infoState} />
            </div>
          }
        />
        <Route
          path="/path-visualizer"
          element={
            <PathfindingProvider>
              <TileProvider>
                <SpeedProvider>
                  <div className="relative h-screen w-screen flex flex-row-reverse bg-[#131416]">
                    {/* Back button on top-right corner */}
                    <button
                      className="absolute top-4 right-4 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-200 shadow-md"
                      onClick={() => navigate("/")} // Navigate back to Home
                    >
                      <FiArrowLeft className="w-6 h-6" />{" "}
                      {/* Icon instead of text */}
                    </button>
                    <Nav
                      isVisualizationRunningRef={isVisualizationRunningRef}
                    />
                    <Grid
                      isVisualizationRunningRef={isVisualizationRunningRef}
                    />
                  </div>
                </SpeedProvider>
              </TileProvider>
            </PathfindingProvider>
          }
        />
      </Routes>
    </>
  );
};

export default App;
