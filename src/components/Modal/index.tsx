import { IconClose } from 'components/Icons';
import * as S from './styles';

type ModalProps = {
  size?: 'small' | 'medium' | 'large' | 'huge';
  title: string;
  display: boolean;
  close: () => void;
};

const Modal: React.FC<ModalProps> = ({ size, title, children, display, close }) => {
  if (display) {
    return (
      <S.Overlay>
        <S.Content size={size ? size : 'medium'}>
          <S.CloseModal onClick={close}>
            <IconClose />
          </S.CloseModal>
          <S.Title>{title}</S.Title>
          {children}
        </S.Content>
      </S.Overlay>
    );
  } else {
    return <></>;
  }
};

export default Modal;
