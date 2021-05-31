import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Modal from 'components/Modal';
import InputText from 'components/Form/InputText';
import Textarea from 'components/Form/Textarea';
import Button from 'components/Button';

import * as S from './styles';

type NewToolModalProps = {
  display: boolean;
  close: () => void;
};

type InputsProps = {
  title: string;
  link: string;
  description: string;
};

const schema = yup.object().shape({
  title: yup.string().required('Tool name is required'),
  link: yup.string().url('Enter a valid url').required(),
  description: yup.string().required('Tool description is requierd'),
});

const NewToolModal: React.FC<NewToolModalProps> = ({ display, close }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const closeModal = () => {
    reset();
    close();
  };

  const addNewTool: SubmitHandler<InputsProps> = async (data) => {
    console.log(data);
    closeModal();
  };

  return (
    <Modal title="Add new tool" display={display} close={closeModal}>
      <form onSubmit={handleSubmit(addNewTool)}>
        <InputText
          name="title"
          placeholder="Tool name"
          label="Useful tool name"
          register={register}
          required
          error={errors.title}
          errorMessage={errors.title?.message}
        />
        <InputText
          name="link"
          placeholder="http://bossabox.com"
          label="Tool link"
          required
          register={register}
          error={errors.link}
          errorMessage={errors.link?.message}
        />
        <Textarea
          name="description"
          placeholder="Describe this tool in a few words."
          label="Tool description"
          required
          register={register}
          error={errors.description}
          errorMessage={errors.description?.message}
        />
        <S.Actions>
          <Button type="submit">Add new tool</Button>
        </S.Actions>
      </form>
    </Modal>
  );
};

export default NewToolModal;
