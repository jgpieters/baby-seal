export const textEllipsis = (text: string, cap: number): string => {
  if (text.length >= cap) {
    return text.substring(0, cap) + "...";
  }
  return text;
};
