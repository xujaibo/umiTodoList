import { IndexModelState, Loading, connect, ConnectRC } from 'umi';
import { useEffect } from 'react';
import { Cell } from '@rokku/design';
import '@rokku/design/lib/cell/style';

interface PageProps {
  index: IndexModelState;
  loading: boolean;
}

const IndexPage: ConnectRC<PageProps> = (props) => {
  console.log(props);
  const { index, dispatch } = props;
  useEffect(() => {}, []);
  return (
    <div>
      <div>
        <Cell title="热门话题" isLink value="更多话题PK" />
      </div>
    </div>
  );
};

export default connect(({ index }: { index: IndexModelState }) => ({
  index,
}))(IndexPage);
