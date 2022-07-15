



export function mockAverageSessions(setAverageSessions, averageSession) {

}


export function mockPerformancesData(setPerformance, performance) {
    const performanceArray = new Array();

    for(let index = 0; index < performance.data.length; index++) {
        // eslint-disable-next-line no-new-object
        const performanceObject = new Object({
            value: "",
            kind: "",
        });
        performanceObject.value = performance.data[index].value
        performanceObject.kind = performance.kind[index+1]
        performanceArray.push(performanceObject)
    }
    return setPerformance(performanceArray)
}

/* 
{userId: 12, kind: {…}, data: Array(6)}
data: Array(6)
0: {value: 80, kind: 1}
1: {value: 120, kind: 2}
2: {value: 140, kind: 3}
3: {value: 50, kind: 4}
4: {value: 200, kind: 5}
5: {value: 90, kind: 6}
length: 6
[[Prototype]]: Array(0)
kind: {1: 'cardio', 2: 'energy', 3: 'endurance', 4: 'strength', 5: 'speed', 6: 'intensity'}
userId: 12

*/

/*
    data.map(test => {

    })



*/