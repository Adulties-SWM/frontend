import { MedList } from './MedList';
import Tab from './Tab';

export const Sidebar = ({
  currentAvailable,
  setCurrentAvailable,
  disease,
  setDisease,
  maxDistance,
  setMaxDistance,
  medicals,
  setCurrentTab,
}) => {
  return (
    <div style={{ height: '100vh' }}>
      <div
        style={{ width: '100%', height: '230px', backgroundColor: '#668AAB' }}
      >
        <Tab
          setCurrentTab={setCurrentTab}
          currentAvailable={currentAvailable}
          setCurrentAvailable={setCurrentAvailable}
          disease={disease}
          setDisease={setDisease}
          maxDistance={maxDistance}
          setMaxDistance={setMaxDistance}
        />
      </div>
      <MedList medicals={medicals} />
    </div>
  );
};
