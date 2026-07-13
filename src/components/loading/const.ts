export const LOADING_TYPE = {
  PULSE: 'pulse',
  SPINNER: 'spinner',
} as const

export type LoadingType = (typeof LOADING_TYPE)[keyof typeof LOADING_TYPE]
