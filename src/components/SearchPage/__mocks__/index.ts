import { SearchPageProps } from '..';
import { filterOptionsGS, filterOptionsGSC, filterOptionsGSCT } from '../../Filter/__mocks__';
import { FilterItemProps } from '../../FilterItem';

export const filterItems: FilterItemProps[] = [
  {
    subject: 'Lorem',
    grade: 'Ipsum',
    claim: 'Dolor',
    targetName: 'Donec aliquet, risus sed auctor sagittis',
    targetBodyText:
      'Curabitur gravida pretium metus, in malesuada nunc fringilla quis. Phasellus tincidunt, ligula ut commodo varius, mi nunc luctus mauris, sed dapibus dui mauris ac tortor. Praesent tincidunt id leo et feugiat. Etiam ut risus libero. Nullam tincidunt suscipit sem ac vestibulum. Donec at tortor ac metus pharetra blandit ut a diam. Nullam id tortor eu ligula malesuada feugiat. Etiam quis erat pharetra, eleifend risus sit amet, tempus nunc. Nunc commodo tincidunt nunc, viverra accumsan urna suscipit ut. Sed a porttitor quam. Morbi gravida dignissim nulla, at commodo felis ultrices quis.',
    link: ''
  },
  {
    subject: 'Integer',
    grade: 'Elementum',
    claim: 'Acru',
    targetName: 'Vitae suscipit lacus commodo sed',
    targetBodyText:
      'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tempus tellus ut tempus luctus. Nullam nec nunc mi. Duis volutpat ultricies aliquet. Aliquam commodo efficitur odio, ut vehicula quam aliquet sed. Ut at ligula sit amet arcu varius rhoncus. Curabitur accumsan sit amet magna eget efficitur. Pellentesque eleifend ipsum sed nibh pellentesque finibus. Donec ut mauris luctus, congue ante ac, cursus libero. Curabitur dolor ligula, aliquam vel ex eu, ornare tincidunt turpis. Quisque id ornare felis. Phasellus quis molestie ante. In eleifend posuere orci sagittis scelerisque.',
    link: ''
  },
  {
    subject: 'Duis',
    grade: 'Pretium',
    claim: 'Nisl',
    targetName: 'Quis libero cursus',
    targetBodyText:
      'Sed ut orci eget orci imperdiet bibendum. Aliquam rhoncus, justo a ullamcorper elementum, urna dolor commodo ligula, efficitur sollicitudin arcu tellus nec tellus. Aenean pharetra, urna et imperdiet auctor, velit tellus iaculis eros, nec laoreet elit dui quis mauris. Quisque dictum ligula eget gravida porttitor. Aliquam rhoncus turpis id pharetra congue. Pellentesque non tristique diam. Nam feugiat euismod nibh in lobortis. Morbi facilisis diam est, ac pharetra est pellentesque vitae. Aliquam erat volutpat.',
    link: ''
  }
];

interface MockParams {
  subject: string;
  claim: string;
}

export const searchPageMockProps: SearchPageProps = {
  getFilterOptions: async (params: MockParams, options) => {
    if (!params.subject) {
      return filterOptionsGS;
    }
    if (!params.claim) {
      return filterOptionsGSC;
    }

    return filterOptionsGSCT;
  },
  paramsFromUrl: { grades: [] },
  searchClient: async () => filterItems
};
