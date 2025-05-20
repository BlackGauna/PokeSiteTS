export const delay = async (timeInMs: number) => {
  await timer(timeInMs)
}

export const timer = (timeInMs: number) => {
  return new Promise(r => setTimeout(r, timeInMs))
}
export const writeToTestFile = async (content: unknown) => {
  const path = Bun.file("@tests/testNew.json")
  await Bun.write(path, JSON.stringify(content))
}
