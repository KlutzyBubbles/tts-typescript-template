export function runExamples(): void {
    print('Background checks')
    print(Backgrounds.getBackground())
    print(Backgrounds.getCustomURL())
    // print(Backgrounds.setBackground('exist?')) // sending the wrong value here breaks the save file :/
    print(Backgrounds.setCustomURL('https://fastly.picsum.photos/id/806/1280/720.jpg?grayscale&hmac=UOTHP4ZsyFnESdM0HzCIQJaUd9HHLc-Er2ZKvj5AU_Y'))
}
