import { MedListItem } from './MedListItem';

export const MedList = ({ medicals }) => {
  return (
    <div
      style={{
        overflow: 'auto',
        height: '100%',
      }}
    >
      {medicals.map(medical => (
        <MedListItem key={medical.hpid} data={medical} />
      ))}
    </div>
  );
};
