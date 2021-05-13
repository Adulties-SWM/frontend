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
}) => {
  return (
    <div style={{ height: '100vh' }}>
      <div
        style={{ width: '100%', height: '230px', backgroundColor: '#668AAB' }}
      >
        <Tab
          currentAvailable={currentAvailable}
          setCurrentAvailable={setCurrentAvailable}
          disease={disease}
          setDisease={setDisease}
          maxDistance={maxDistance}
          setMaxDistance={setMaxDistance}
          changeMarkerList={changeMarkerList}
        />
      </div>
      <MedList />
    </div>
  );
};
