import { FilterOptionModel } from '@osu-cass/sb-components';

export const sortHelper = (filter: FilterOptionModel[]) => {
  filter.sort((a, b) => {
    let x: string | number = a.label.toLowerCase();
    let y: string | number = b.label.toLowerCase();
    if (a.label.includes('Target ')) {
      ({ x, y } = handleTargetSort([a, b]));
    }
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }

    return 0;
  });
};
function handleTargetSort(filters: FilterOptionModel[]) {
  const res: number[] = [];
  filters.forEach(f =>
    res.push(
      parseFloat(
        f.label
          .split(':')[0]
          .split('Target ')[1]
          .replace('a', '.1')
          .replace('b', '.2')
      )
    )
  );
  const x = res[0];
  const y = res[1];

  return { x, y };
}
