import { FilterOptionModel } from '@osu-cass/sb-components';

export const sortHelper = (filter: FilterOptionModel[]) => {
  filter.sort((a, b) => {
    let x: string | number = a.label.toLowerCase();
    let y: string | number = b.label.toLowerCase();
    if (a.label.includes('Target ')) {
      x = parseFloat(
        a.label
          .split(':')[0]
          .split('Target ')[1]
          .replace('a', '.1')
      );
      y = parseFloat(
        b.label
          .split(':')[0]
          .split('Target ')[1]
          .replace('b', '.2')
      );
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
