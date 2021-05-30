import { useState } from 'react';

import { IconClose } from 'components/Icons';
import RemoveToolModal from 'components/Modal/RemoveToolModal';

import * as S from './styles';

type ToolCardProps = {
  tool: ToolProps;
  getTools: () => void;
};

type ToolProps = {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: Array<string>;
};

const ToolCard: React.FC<ToolCardProps> = ({ tool, getTools }) => {
  const { title, description, link, tags, id } = tool;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <S.Container>
      <S.RemoveButton onClick={() => setIsModalOpen(true)}>
        <IconClose /> Remove
      </S.RemoveButton>
      <S.Tool href={link} target="_blank" rel="noopener noreferrer">
        <h4>{title}</h4>
        <S.Description>{description}</S.Description>
        <S.Tags className="small">
          {tags.map((tag, i) => (
            <span key={i}>#{tag} </span>
          ))}
        </S.Tags>
      </S.Tool>

      <RemoveToolModal
        display={isModalOpen}
        close={() => setIsModalOpen(false)}
        toolName={title}
        getTools={getTools}
        id={id}
      />
    </S.Container>
  );
};

export default ToolCard;
