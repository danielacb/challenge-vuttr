import * as S from './styles';

type ToolCardProps = {
  tool: ToolProps;
};

type ToolProps = {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: Array<string>;
};

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { title, description, link, tags } = tool;

  return (
    <S.Container>
      <S.Tool href={link} target="_blank" rel="noopener noreferrer">
        <h4>{title}</h4>
        <S.Description>{description}</S.Description>
        <S.Tags className="small">
          {tags.map((tag, i) => (
            <span key={i}>#{tag} </span>
          ))}
        </S.Tags>
      </S.Tool>
    </S.Container>
  );
};

export default ToolCard;
