import { increase, test } from "./lib/functions"

(_G as any).onHover = (color: ColorLiteral): void => {
    print(`Hovered up by ${color} : ${test}`)
    increase()
}

(_G as any).redSquareFunc = (value: { value: string }): undefined => {
    print(`custom function called ${value?.value ?? 'undefined'}`)
    return undefined
}