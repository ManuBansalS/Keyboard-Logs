const insert  = document.getElementById('insert')
let keyHistory = new Array()

function renderData(){
    insert.innerHTML = 
    `
    Press any Key and see the Magic
    <div class = "table">
        <table>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            ${keyHistory.map(event => `
                    <tr>
                        <td>${event.key === " " ? "Space" : event.key}</td>
                        <td>${event.keyCode}</td>
                        <td>${event.code}</td>
                    </tr>
                `).join('')}
        </table>
    </div>
    `
}

window.addEventListener('keydown', (e) => {
    keyHistory.push({key: e.key, keyCode: e.keyCode, code: e.code})
    renderData()
})
