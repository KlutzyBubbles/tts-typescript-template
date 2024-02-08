import { Objects } from "../../utils/constants"

export function runUIChecks(): void {
    let object = getObjectFromGUID(Objects.square)
    if (object !== undefined) {
        print('UI functions')
        print(object.clearButtons())
        print(object.clearInputs())
        //print(object.createButton({})) // Should be error
        print(object.createButton({
            click_function: 'exampleButtonClick'
        }))
        print(object.createButton({
            click_function: 'exampleButtonClick',
            label: 'Label ooo',
            position: Vector(10, 5, 10),
            scale: Vector(2, 2, 2),
            width: 300,
            height: 200,
            font_size: 20,
            color: Color(1, 0, 0),
            hover_color: Color(0, 1, 0),
            press_color: Color(0, 0, 0),
            font_color: Color(0, 0, 1),
            tooltip: 'Tooltip babeee'
        }))
        print(object.removeButton(0))
        print(object.editButton({
            index: 0,
            label: 'Label 1111',
            tooltip: 'Tooltip again'
        }))
        print(object.getButtons())
        //print(object.createInput({})) // Should be error
        print(object.createInput({
            input_function: 'exampleInputInput'
        }))
        print(object.createInput({
            input_function: 'exampleInputInput',
            label: 'Label ooo',
            position: Vector(10, 5, 10),
            scale: Vector(2, 2, 2),
            width: 300,
            height: 200,
            font_size: 20,
            color: Color(1, 0, 0),
            font_color: Color(0, 0, 1),
            tooltip: 'Tooltip babeee',
            //alignment: Alignment.Automatic,
            value: 'value',
            //validation: Validation.None,
            //tab: TabAction.Indent
        }))
        print(object.removeInput(0))
        print(object.editInput({
            index: 0,
            label: 'Label 1111',
            tooltip: 'Tooltip again',
            alignment: 2,
            value: 'another',
            validation: 4,
            tab: 1
        }))
        print(object.editInput({
            index: 0,
            label: 'Label 1111',
            tooltip: 'Tooltip again',
            alignment: Alignment.Center,
            value: 'another',
            validation: Validation.Username,
            tab: TabAction.Indent
        }))
        print(object.getInputs())
    }
}

(_G as any).exampleButtonClick = (object: GObject, color: ColorLiteral, alt: boolean) => {
    print(`click function ${object.guid}, ${color}, ${alt}`)
}

(_G as any).exampleInputInput = (object: GObject, color: ColorLiteral, value: string, selected: boolean) => {
    print(`input function ${object.guid}, ${color}, ${value}, ${selected}`)
}