import { runActionChecks } from "./action"
import { runBehaviourChecks } from "./behaviour"
import { runComponentChecks } from "./component"
import { runGetChecks } from "./get"
import { runGlobalChecks } from "./global"
import { runHideChecks } from "./hide"
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
    runComponentChecks()
    runHideChecks()
    runGlobalChecks()
}