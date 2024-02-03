import { increase, test } from "./lib/functions"

(_G as any).onHover = (color: ColorLiteral): void => {
    print(`Hovered up by ${color} : ${test}`)
    increase()
}