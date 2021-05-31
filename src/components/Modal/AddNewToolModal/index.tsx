import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { api } from 'services/api';
import Modal from 'components/Modal';
import InputText from 'components/Form/InputText';
import Textarea from 'components/Form/Textarea';
import InputTag from 'components/Form/InputTag';
import Button from 'components/Button';

import * as S from './styles';

type NewToolModalProps = {
  display: boolean;
  close: () => void;
  getTools: () => void;
};

type InputsProps = {
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
};

const schema = yup.object().shape({
  title: yup.string().required('Tool name is required'),
  link: yup.string().url('Enter a valid url').required(),
  description: yup.string().required('Tool description is requierd'),
  tags: yup.array().min(1, 'Add at least one tag').required(),
});

const NewToolModal: React.FC<NewToolModalProps> = ({ display, close, getTools }) => {
  const {
    register,
    reset,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const closeModal = () => {
    reset();
    close();
  };

  const addNewTool: SubmitHandler<InputsProps> = async (data) => {
    await api.post('tools', data);
    toast.success(`${data.title} was added successfully!`);
    getTools();
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
        <InputTag
          name="tags"
          label="Tags"
          setValue={setValue}
          register={register}
          placeholder="Type and press enter"
          error={errors.tags && watch('tags')?.length === 0}
          errorMessage={errors.tags?.message}
        />
        <S.Actions>
          <Button type="submit">Add new tool</Button>
        </S.Actions>
      </form>
    </Modal>
  );
};

export default NewToolModal;
