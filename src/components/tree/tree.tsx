import React from 'react';

interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[];
}

interface Props {
  sourceData: SourceDataItem[];
}

const Tree: React.FC<Props> = props => {
  const { sourceData } = props;
  return (
    <div>
      {sourceData.map(item => {
        return (
          <div key={item.text}>
            {item.text}
            {item.children?.map(item2 => {
              return <div key={item2.text}>{item2.text}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Tree;
