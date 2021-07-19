import Square from "../Square";
import { Wrapper } from './index.styles';

type Props = {
  squares: string[];
  onClick: (i: number) => void;
};
const Board: React.FC<Props> = ({ squares, onClick }) => (
  <Wrapper>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </Wrapper>
);

export default Board;