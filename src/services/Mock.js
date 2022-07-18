export function mockAverageSessions(response, setAverageSessions) {
    const averageSessionArray = [];
    const data = response.data.data;

    for(let index = 0; index < data.sessions.length; index++) {
        const averageSessionObject = {
            day: data.sessions[index].day,
            sessionLength: data.sessions[index].sessionLength,
        };
        averageSessionArray.push(averageSessionObject);
    }
    return setAverageSessions(averageSessionArray);
};


export function mockPerformancesData(response, setPerformance) {
    const performanceArray = [];
    const data = response.data.data;

    for(let index = 0; index < data.data.length; index++) {
        const performanceObject = {
            value: data.data[index].value,
            kind: data.kind[index+1],
        };
        performanceArray.push(performanceObject);
    };
    return setPerformance(performanceArray);
};