export const delay = async (timeInMs: number) => {
  await new Promise(r => setTimeout(r, timeInMs))
}

export const writeToTestFile = async (content: unknown) => {
  const path = Bun.file("@tests/test2.json")
  await Bun.write(path, JSON.stringify(content))
}
