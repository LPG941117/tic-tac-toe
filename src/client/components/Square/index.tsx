import { Wrapper } from './index.styles';
type Props = {
  value: string;
  onClick: () => void;
}

const Square:React.FC<Props> = ({ value, onClick }) => {
  return (  
      <Wrapper onClick={onClick}>
        {value}
      </Wrapper>
  );
};

export default Square;