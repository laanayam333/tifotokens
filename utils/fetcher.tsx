import { IAPIToken } from '@/types/index'

export const fetcher = (
  ...args: Parameters<typeof fetch>
): Promise<IAPIToken> => fetch(...args).then((res) => res.json())
