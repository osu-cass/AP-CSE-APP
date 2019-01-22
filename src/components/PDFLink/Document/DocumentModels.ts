import { IClaim } from '../../../models/claim';
import { ITaskModel, IStem } from '../../../models/target';

export interface DocumentStyles {
  page: object;
  flexContainer: object;
  pageNumber: object;
  numberContainer: object;
  flexImage: object;
  header: object;
  border: object;
}

export interface TaskModelComponentProps {
  claim: IClaim;
  taskModels: ITaskModel[];
  stems?: IStem[];
}

export interface DocumentProps {
  claim: IClaim;
  taskModels: ITaskModel[] | undefined;
  renderOverview?: boolean;
  renderEntireTarget?: boolean;
}

export interface PageMeta {
  pageNumber: number;
  totalPages: number;
}

export interface OverviewProps {
  claim: IClaim;
}

export interface PageProps {
  verticalRuler: Boolean;
}
