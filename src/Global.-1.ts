import { exampleFunction, increase, test } from './lib/functions'
import MyClass from './lib/class'
import runExamples from './examples';

let c = new MyClass();

(_G as any).onLoad = () => {
    print('On Load')
    // print(exampleFunction(5))
    print(`Class Load: ${c.value}`)
    c.increment(1)
    print(`Class Increment: ${c.value}`)
    runExamples()
}

(_G as any).onBlindfold = (player: Player, blindfolded: boolean): void => {
    print(`Blindfolded ${player.color} : ${blindfolded} : ${test}`)
    increase()
    print(`Class blind: ${c.value}`)
    c.increment(1)
    print(`Class blind Increment: ${c.value}`)
}