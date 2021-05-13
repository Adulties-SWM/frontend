import { MedList } from './MedList';
import Tab from './Tab';

export const Sidebar = () => {
  return (
    <div style={{ height: '100vh' }}>
      <div
        style={{ width: '100%', height: '230px', backgroundColor: '#668AAB' }}
      >
        <Tab />
      </div>
      <MedList />
    </div>
  );
};
