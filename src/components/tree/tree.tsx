import React from 'react';

interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[];
}

interface Props {
  sourceData: SourceDataItem[];
}

const x = (item: SourceDataItem) => {
  return (
    <div key={item.text}>
      {item.text}
      {item.children?.map(sub => {
        return x(sub);
      })}
    </div>
  );
};
const Tree: React.FC<Props> = props => {
  const { sourceData } = props;
  return (
    <div>
      {sourceData.map(item => {
        return x(item);
      })}
    </div>
  );
};

export default Tree;
