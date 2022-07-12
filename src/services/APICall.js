import axios from "axios";

export function getUserInfos() {
    axios("http://localhost:3000/user/18")
    .then((res) => console.log(res))
}

