import { MedListItem } from './MedListItem';

export const MedList = ({ medicals }) => {
  return (
    <div
      style={{
        overflow: 'auto',
        height: 'calc(100vh - 230px)',
      }}
    >
      {medicals.map(medical => (
        <MedListItem key={medical.hpid} data={medical} />
      ))}
    </div>
  );
};
