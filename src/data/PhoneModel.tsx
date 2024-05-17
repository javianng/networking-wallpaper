export type PhoneDimensions = {
  width: number;
  height: number;
};

export const phoneModels: Record<string, PhoneDimensions> = {
  iPhone13: { width: 390, height: 844 },
  iPhone12: { width: 390, height: 844 },
  SamsungS21: { width: 360, height: 800 },
  GooglePixel5: { width: 393, height: 851 },
};
