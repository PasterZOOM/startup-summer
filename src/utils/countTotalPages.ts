export const countTotalPages = (totalItems: number, pageCount: number): number => {
  return Math.ceil(totalItems / pageCount)
}
