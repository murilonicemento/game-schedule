function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="assets/img/icon-${player1}.svg" alt="Bandeira do ${player2}" />
        <strong>${hour}</strong>
        <img src="assets/img/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
`
}
let delay = -.3
function createCard(date, day, games) {
    delay += .8
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
           ${games}
        </ul>
    </div>
`
}
document.querySelector("#cards").innerHTML =
    createCard("24/11", "quinta", createGame("switzerland", "07:00", "cameron") + createGame("portugal", "13:00", "ghana") + createGame("brazil", "16:00", "serbia")) +
    createCard("28/11", "segunda", createGame("south-korea", "10:00", "ghana") + createGame("brazil", "13:00", "switzerland") + createGame("portugal", "16:00", "uruguai"))

