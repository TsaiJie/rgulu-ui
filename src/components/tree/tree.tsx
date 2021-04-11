import React from 'react';
import { scopedClassMaker } from '@/helper/classes';
import './tree.scss';
interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[];
}

interface Props {
  sourceData: SourceDataItem[];
}

const sc = scopedClassMaker('gulu-tree');
const renderItem = (item: SourceDataItem, depth: number = 1) => {
  const classes = {
    ['depth-' + depth]: true,
    item: true,
  };
  return (
    <div
      key={item.text}
      style={{ paddingLeft: (depth - 1) * 10 + 'px' }}
      className={sc(classes)}
    >
      {item.text}
      {item.children?.map(sub => {
        return renderItem(sub, depth + 1);
      })}
    </div>
  );
};
const Tree: React.FC<Props> = props => {
  const { sourceData } = props;
  return (
    <div>
      {sourceData.map(item => {
        return renderItem(item);
      })}
    </div>
  );
};

export default Tree;
