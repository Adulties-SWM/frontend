import { MedList } from './MedList';
import Tab from './Tab';

export const Sidebar = ({
  currentAvailable,
  setCurrentAvailable,
  disease,
  setDisease,
  maxDistance,
  setMaxDistance,
  changeMarkerList,
  medicals,
  setCurrentTab,
}) => {
  return (
    <div style={{ height: '100vh', maxHeight: '100vh' }}>
      <Tab
        setCurrentTab={setCurrentTab}
        currentAvailable={currentAvailable}
        setCurrentAvailable={setCurrentAvailable}
        disease={disease}
        setDisease={setDisease}
        maxDistance={maxDistance}
        setMaxDistance={setMaxDistance}
        changeMarkerList={changeMarkerList}
      />
      <MedList medicals={medicals} />
    </div>
  );
};
