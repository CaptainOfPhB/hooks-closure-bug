import React from 'react';
import { Button, Table } from 'antd';
import { useEffect, useState } from 'react';
import { ColumnProps } from 'antd/lib/table';

export default function App1() {
  const [flag, setFlag] = useState(false);

  const columns: ColumnProps<{}>[] = [
    { dataIndex: 'id', title: 'ID' },
    {
      key: 'action',
      title: 'Action',
      render: () => {
        return <Button onClick={onClick}>Click</Button>;
      },
    },
  ];

  function onClick() {
    console.log(flag);
  }

  useEffect(() => setFlag(true), []);

  return <Table rowKey='id' dataSource={[{ id: '123' }]} columns={columns} />;
}

