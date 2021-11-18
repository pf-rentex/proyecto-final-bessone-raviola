export const genId = (prefix: string) =>
  `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
