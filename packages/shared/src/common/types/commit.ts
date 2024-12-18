import { Result } from "neverthrow";

export type CommitData = {
  title: string;
  body?: string;
  extra?: any;
};
export type GenerateCommitResult = Result<CommitData, string>;