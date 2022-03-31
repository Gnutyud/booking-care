import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

interface GlobalFilterProps {
  filter: string;
  setFilter: (e: any) => void;
}

const GlobalFilter = ({ filter, setFilter }: GlobalFilterProps) => {
  const [value, setValue] = useState(filter);

  const handleOnChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 300);
  return (
    <span>
      Search: {''}
      <input
        type="text"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          handleOnChange(e.target.value);
        }}
      />
    </span>
  );
};

export default GlobalFilter;
