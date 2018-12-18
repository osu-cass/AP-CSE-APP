import { FilterOptionModel } from '@osu-cass/sb-components';

export const sortHelper = (filter: FilterOptionModel[]) => {
  filter.sort((a, b) => {
    let x: string | number;
    let y: string | number;
    ({ x, y } = handleTargetSort([a, b]));
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
  if (filters[0].label.includes('Target ')) {
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
  const x = filters[0].label.toLowerCase();
  const y = filters[1].label.toLowerCase();

  return { x, y };
}
