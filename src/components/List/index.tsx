import { memo } from "react";

interface ListProps<T> {
  role?: string;
  style?: string;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

const List = <T extends {}>({
  role,
  style,
  data,
  renderItem,
}: ListProps<T>) => {
  return (
    <div role={role} className={style}>
      {data.map((item) => renderItem(item))}
    </div>
  );
};

export default memo(List) as typeof List;
