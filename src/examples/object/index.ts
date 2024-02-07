import { runActionChecks } from "./action"
import { runBehaviourChecks } from "./behaviour"
import { runGetChecks } from "./get"
import { runSetChecks } from "./set"
import { runTagChecks } from "./tags"
import { runTransformChecks } from "./transform"
import { runUIChecks } from "./ui"

export function runExamples(): void {
    print('Object examples')
    runBehaviourChecks()
    runTransformChecks()
    runTagChecks()
    runUIChecks()
    runGetChecks()
    runSetChecks()
    runActionChecks()
}