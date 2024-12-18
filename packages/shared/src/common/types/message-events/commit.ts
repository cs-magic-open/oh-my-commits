import {
  BaseClientMessageEvent,
  BaseServerMessageEvent,
  GenerateCommitResult,
} from "@/common";
import { Result } from "neverthrow";
import { DiffResult } from "simple-git";

export type ClientMessageEvent =
  | BaseClientMessageEvent
  | {
      type: "init";
    }
  // 3. 用户挑选文件
  | {
      type: "selected-files";
      data?: string[];
    }
  // 4. 用户执行提交
  | {
      type: "commit";
    };
export type ServerMessageEvent =
  | BaseServerMessageEvent
  // 1. 用户打开 commit 界面， server --> client
  | {
      type: "diff-result";
      data: DiffResult;
    }
  // 2. 异步生成的 commits，无论是初次，还是等用户挑选文件后的结果
  | {
      type: "commit-message";
      data: GenerateCommitResult;
    }

  // 5. 提交结果
  | {
      type: "commit-result";
      data: Result<any, string>;
    };