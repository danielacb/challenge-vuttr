import { IconClose } from 'components/Icons';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import * as S from './styles';

const Toast: React.FC = () => {
  return (
    <S.Container>
      <ToastContainer closeButton={IconClose} />
    </S.Container>
  );
};

export default Toast;
