export function runExamples(): void {
    print('Lighting examples')
    print(Lighting.ambient_intensity)
    print(Lighting.ambient_type)
    print(Lighting.light_intensity)
    print(Lighting.lut_contribution)
    print(Lighting.lut_index)
    print(Lighting.lut_url)
    print(Lighting.reflection_intensity)
    print(Lighting.getAmbientEquatorColor())
    print(Lighting.getAmbientGroundColor())
    print(Lighting.getAmbientSkyColor())
    print(Lighting.getLightColor())
    
    Lighting.ambient_intensity = 2
    Lighting.ambient_type = 2
    Lighting.ambient_type = LightSource.Background
    Lighting.light_intensity = 2
    print('1--')
    Lighting.lut_contribution = 1
    Lighting.lut_index = 0
    Lighting.lut_url = ""
    Lighting.lut_url = undefined
    Lighting.reflection_intensity = 0.5
    print('2--')
    print(Lighting.setAmbientEquatorColor(Color.White))
    print(Lighting.setAmbientEquatorColor({ r: 1, g: 1, b: 1 }))
    print(Lighting.setAmbientEquatorColor(Color([0, 0, 0])))
    print(Lighting.setAmbientGroundColor(Color.White))
    print(Lighting.setAmbientGroundColor({ r: 1, g: 1, b: 1 }))
    print(Lighting.setAmbientGroundColor(Color([0, 0, 0])))
    print('3--')
    print(Lighting.setAmbientSkyColor(Color.White))
    print(Lighting.setAmbientSkyColor({ r: 1, g: 1, b: 1 }))
    print(Lighting.setAmbientSkyColor(Color([0, 0, 0])))
    print(Lighting.setLightColor(Color.White))
    print(Lighting.setLightColor({ r: 1, g: 1, b: 1 }))
    print(Lighting.setLightColor(Color([0, 0, 0])))
    print('4--')
}
