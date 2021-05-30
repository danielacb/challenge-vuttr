import Button from 'components/Button';
import Modal from 'components/Modal';
import { api } from 'services/api';
import { toast } from 'react-toastify';

import * as S from './styles';

type RemoveToolModalProps = {
  toolName: string;
  id: string;
  display: boolean;
  close: () => void;
  getTools: () => void;
};

const RemoveToolModal: React.FC<RemoveToolModalProps> = ({
  toolName,
  id,
  display,
  close,
  getTools,
}) => {
  const notify = () => toast.success(`${toolName} was removed!`);

  const deleteTool = async () => {
    await api.delete(`tools/${id}`);
    notify();
    getTools();
  };

  return (
    <Modal title="Remove Tool" display={display} close={close}>
      <p>Are you sure you want to remove {toolName}?</p>
      <S.Actions>
        <Button variant="secondary" onClick={close}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => deleteTool()}>
          Yes, remove
        </Button>
      </S.Actions>
    </Modal>
  );
};

export default RemoveToolModal;
