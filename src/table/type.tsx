export const BlockChainStatus = [
  'none',
  'queued',
  'processing',
  'minted',
  'transferred'
] as const;

export type BlockChainStatusType = typeof BlockChainStatus[number]

export type Tag = {
  tokenId: string
  batchId: string
  batchSerialNumber: number
  blockchainStatus: BlockChainStatusType
  uid: string | null
  isScanningAllow: boolean
}