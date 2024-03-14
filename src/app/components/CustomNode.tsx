// "use client";

import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Person } from '../types/Person';

type Props = {
  person: Person,
}

const CustomNode: React.FC<Props> = ({person}) => {

  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
    <div className="flex">
      <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
        {person.name}
      </div>
      <div className="ml-2">
        <div className="text-lg font-bold">{person.name}</div>
        <div className="text-gray-500">{person.birth_year}</div>
      </div>
    </div>

    <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
    <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />
  </div>
  );
};

export default memo(CustomNode);
