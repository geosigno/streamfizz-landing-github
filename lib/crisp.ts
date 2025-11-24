export const assignCrispSegment = (segmentId: string) => {
  if (typeof window !== 'undefined' && window.$crisp) {
    window.$crisp.push(['set', 'session:segments', [[segmentId]]])
  }
}
