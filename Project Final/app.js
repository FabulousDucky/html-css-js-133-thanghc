function showInfo() {
    console.log("Start call API")
    let fetchRes = fetch("https://api.opendota.com/api/heroes");
    console.log("End call API")
    fetchRes.then(res =>
        res.json()).then(d => {
            const div = document.createElement("div");
            div.innerHTML = `
            <table>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                    <tr>
                        <td>${d[0].localized_name}</td>
                        <td>${d[0].roles}</td>
                    </tr>
                    <tr>
                        <td>${d[1].localized_name}</td>
                        <td>${d[1].roles}</td>
                    </tr>
                </table>
            `;
            document.querySelector("body").appendChild(div);
        })
}

  
       