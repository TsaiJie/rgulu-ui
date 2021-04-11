import React from 'react';
import { scopedClassMaker } from '@/helper/classes';
import './tree.scss';

export interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[];
}

interface Props {
  sourceData: SourceDataItem[];
  selectedValues: string[];
  onChange: (item: SourceDataItem, bool: boolean) => void;
}

const sc = scopedClassMaker('gulu-tree');
const renderItem = (
  item: SourceDataItem,
  selectedValues: string[],
  onChange: (item: SourceDataItem, bool: boolean) => void,
  depth: number = 1,
) => {
  const classes = {
    ['depth-' + depth]: true,
    item: true,
  };
  return (
    <div key={item.text} className={sc(classes)}>
      <div className={sc('text')}>
        <input
          type="checkbox"
          checked={selectedValues.indexOf(item.value) >= 0}
          onChange={e => onChange(item, e.target.checked)}
        />
        {item.text}
      </div>
      {item.children?.map(sub => {
        return renderItem(sub, selectedValues, onChange, depth + 1);
      })}
    </div>
  );
};
const Tree: React.FC<Props> = props => {
  const { sourceData, selectedValues, onChange } = props;
  return (
    <div>
      {sourceData.map(item => {
        return renderItem(item, selectedValues, onChange);
      })}
    </div>
  );
};

export default Tree;
