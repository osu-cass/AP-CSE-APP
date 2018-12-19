import { DocumentProps } from '../DocumentModels';
import ELAG3ClaimMock from '../../../../../mock_api_data/E.G3.C1';

export const elaDocumentFull: DocumentProps = {
  claim: ELAG3ClaimMock,
  taskModels: ELAG3ClaimMock.target[0].taskModels,
  renderEntireTarget: true
};

export const elaDocumentPartial: DocumentProps = {
  claim: ELAG3ClaimMock,
  taskModels: ELAG3ClaimMock.target[0].taskModels.filter((t, i) => i % 2 === 0)
};
