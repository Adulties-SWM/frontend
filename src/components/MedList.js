import { MedListItem } from './MedListItem';

export const MedList = ({ medicals }) => {
  return (
    <div>
      {medicals.map(medical => (
        <MedListItem key={medical.hpid} data={medical} />
      ))}
    </div>
  );
};
