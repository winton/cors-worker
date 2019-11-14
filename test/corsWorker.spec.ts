import expect from "./expect"
import { CorsWorker } from "../src"

describe("corsWorker", () => {
  it("should instantiate", () => {
    new CorsWorker()
  })

  it("should assert", () => {
    expect(true).toBe(true)
  })
})
