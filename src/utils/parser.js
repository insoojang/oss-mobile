const jsonParser = (value) => {
    let originData = typeof value === 'object' ? value : JSON.parse(value)
    return typeof originData === 'object' ? originData : JSON.parse(originData)
}
const sensorDataParser = (value) => {
    const {
        proximitySensor_l,
        proximitySensor_c,
        proximitySensor_r,
        proximity_sensor,
    } = value
    let sensorData = []
    if (proximity_sensor > 8000) {
        sensorData.push('1')
    } else {
        sensorData.push('0')
    }
    sensorData.push(1)
    return sensorData.join('')
}
const sensorTitleParser = (value) => {
    if (value !== null && value !== undefined && typeof value === 'string') {
        return value?.split(':').join('').toUpperCase()
    } else {
        const e = new Error('Value is Empty or not String ')
        e.name = 'sensorTitleParser error'
        throw e
    }
}
export { jsonParser, sensorDataParser, sensorTitleParser }
