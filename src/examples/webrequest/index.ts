import { runInstanceChecks } from "./instance"
import { runManagerChecks } from "./manager"

export function runExamples(): void {
    print('Web request examples')
    // runInstanceChecks()
    runManagerChecks()
}
