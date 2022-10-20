// 提示规则
type Rule = {
  required?: boolean;
  range?: Array<any>;
  format?: "string" | "number" | "boolean" | "object" | "array";
  pattern?: RegExp;
  errorMessage?: string;
  validateFunction?: (
    rule?: Rule,
    value?: any,
    data?: Record<string, any>,
    callbacks?: () => void
  ) => any;
};
declare namespace FormRule {
  export type RuleItem = Rule;
}
