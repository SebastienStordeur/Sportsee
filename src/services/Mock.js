export function mockAverageSessions(response, setAverageSessions) {
    const averageSessionArray = [];
    const data = response.data.data;

    console.log('data average sessions', data)
}


export function mockPerformancesData(response, setPerformance) {
    const performanceArray = []; //new Array ?
    const data = response.data.data

    for(let index = 0; index < data.data.length; index++) {
        // eslint-disable-next-line no-new-object
        const performanceObject = new Object({
            value: "",
            kind: "",
        });
        performanceObject.value = data.data[index].value
        performanceObject.kind = data.kind[index+1]
        performanceArray.push(performanceObject)
    }
    return setPerformance(performanceArray)
}