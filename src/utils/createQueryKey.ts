const createQueryKey = (mainKey: string, subKeys: any[]) => {
  return [mainKey, ...subKeys.map((key) => key ?? null)];
};

export default createQueryKey;
