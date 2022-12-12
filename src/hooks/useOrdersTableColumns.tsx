import { Fragment, useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';

import type { Order } from 'types/Order';
import { TextButton } from '@components/TextButton';
import { FlexRow } from '@components/Flex';
import { Spacer } from '@components/Spacer';

export function useOrdersTableColumns() {
  return useMemo<ColumnDef<Order>[]>(() => {
    return [
      {
        id: 'id',
        header: 'Item ID',
        accessorKey: 'id',
        cell: info => info.getValue(),
      },
      {
        id: 'address',
        header: 'Address',
        accessorKey: 'address',
        cell: info => info.getValue(),
      },
      {
        id: 'time',
        header: 'Ordered Time',
        accessorKey: 'time',
        cell: info => info.getValue(),
      },
      {
        id: 'status',
        header: 'Status / Action',
        accessorKey: 'status',
        cell: info => {
          const status = info.getValue() as Order['status'];
          return (
            <FlexRow>
              {status === 'Pending' && (
                <Fragment>
                  <TextButton status="success">Accept</TextButton>
                  <Spacer width={30} />
                  <TextButton status="danger">Cancel</TextButton>
                </Fragment>
              )}
              {status !== 'Pending' && (
                <div
                  style={{ color: status === 'Cancelled' ? '#f00' : undefined }}
                >
                  {status}
                </div>
              )}
              <Spacer width={30} />
              {(status === 'Accepted' || status === 'In-Transit') && (
                <TextButton>Mark as Completed</TextButton>
              )}
            </FlexRow>
          );
        },
      },
    ];
  }, []);
}
