import { ExportFileFormat } from 'src/app/constants/export.constants';

export interface ExportOptions {
  format: ExportFileFormat;
  projectName: string;
}

export interface ExportResult {
  success: boolean;
  error?: Error;
}

export interface ExportStrategy {
  supports(requirementType: string): boolean;
  export(data: any[], options: ExportOptions): Promise<ExportResult>;
}
