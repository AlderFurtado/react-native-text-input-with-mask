interface formatteStringCelResult {
    valueFormatted: string
    valueJustNumber: string
}
export default function formatteStringCel(valueChange: string, value: string | undefined):formatteStringCelResult  {
    if(value == undefined) return {valueFormatted: "", valueJustNumber: ""}
    const isWriting = valueChange > (value as string);
    const lengthValue = valueChange.length
    let valueFormatted = valueChange
    let valueJustNumber = valueChange.replace(/[^\w\-]+/g,"")

    if(lengthValue === 15){
        return {valueFormatted: value, valueJustNumber}
    }
    if(isWriting){
        if(lengthValue === 1){
            valueFormatted = `(${valueChange}`
        }
        if(lengthValue === 3){
            valueFormatted = `${valueChange})`
        }
        if(lengthValue === 9){
            valueFormatted = `${valueChange}-`
        }
        
    }
    return {valueFormatted, valueJustNumber}
}