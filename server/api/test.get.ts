export default defineEventHandler((event) => {
  const isError = true
  if (isError) {
    return null
  }
  return {
    id: 1
  }
})
