import { parseClaimSummaryData } from '.';
import { parsedClaimTargetSummaryMock } from './mocks';
import ELAG3ClaimMock from '../../../mock_api_data/E.G3.C1';

describe('Claim summary parser', () => {
  it('Returns claim and target titles and descriptions', () => {
    const parsedMobileData = parseClaimSummaryData(ELAG3ClaimMock);

    expect(parsedMobileData).toEqual(parsedClaimTargetSummaryMock);
  });
});
