## Tree

```tsx
import React, { useState } from 'react';
import { Tree, SourceDataItem } from 'rgulu-ui';

export default () => {
  const [array, setArray] = useState([
    {
      text: '1',
      value: '1',
      children: [
        {
          text: '1.1',
          value: '1.1',
          children: [
            { text: '1.1.1', value: '1.1.1' },
            { text: '1.1.2', value: '1.1.2' },
          ],
        },
        { text: '1.2', value: '1.2' },
      ],
    },
    {
      text: '2',
      value: '2',
      children: [
        { text: '2.1', value: '2.1' },
        { text: '2.2', value: '2.2' },
      ],
    },
  ]);
  const [selectedValues, setSelectedValues] = useState(['1.1.1', '1.1.2']);
  const onChange = (item: SourceDataItem, bool: boolean) => {
    console.log(item, bool);
    if (bool) {
      setSelectedValues([...selectedValues, item.value]);
    } else {
      setSelectedValues(selectedValues.filter(value => value !== item.value));
    }
  };
  return (
    <div>
      <Tree
        sourceData={array}
        onChange={onChange}
        selectedValues={selectedValues}
      />
    </div>
  );
};
```
