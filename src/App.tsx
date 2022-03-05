import React from 'react';
import { Button, Table } from 'antd';
import { useEffect, useState } from 'react';
import { ColumnProps } from 'antd/lib/table';

export default function App() {
  const [flag, setFlag] = useState(false);
  const [columns, setColumns] = useState<ColumnProps<{}>[]>([]);

  function onClick() {
    // how to print right value
    console.log(flag);
  }

  function init() {
    setFlag(true);
    setColumns([
      { dataIndex: 'id', title: 'ID' },
      {
        key: 'action',
        title: 'Action',
        render: () => {
          return <Button onClick={onClick}>Click</Button>;
        },
      },
    ]);
  }

  // eslint-disable-next-line
  useEffect(() => init(), []);

  return <Table rowKey='id' dataSource={[{ id: '123' }]} columns={columns} />;
}

