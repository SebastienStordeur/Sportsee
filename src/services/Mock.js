export function mockUserDatas(response, setScore) {
    const userArray = [];
    const data = response.data.data;


}




export function mockUserActivity(response, setActivity) {
    const userActivityArray = [];
    const data = response.data.data;

    for(let index = 0; index < data.sessions.length; index++) {
        var day = data.sessions[index].day.split('-')[2];
        if(day[0] === '0') day = day.split(0)[1];

        const userActivityObject = {
            day: day,
            'Poids (kg)' : data.sessions[index].kilogram,
            'Calories brûlées (kCal)' : data.sessions[index].calories
        };
        userActivityArray.push(userActivityObject);
    };
    return setActivity(userActivityArray);
};


export function mockAverageSessions(response, setAverageSessions) {
    const averageSessionArray = [];
    const data = response.data.data;

    for(let index = 0; index < data.sessions.length; index++) {
        const averageSessionObject = {
            day: data.sessions[index].day,
            'Durée moyenne des sessions': data.sessions[index].sessionLength,
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