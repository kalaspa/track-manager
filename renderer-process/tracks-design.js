const {icons} = require('./icons')

exports.produceHtml = function(track){

    var date = new Date(track.date)
    var duration = new Date()
    duration.setTime(track.duration*1000)

    return `
    <div class="demo-wrapper">
      <button class="demo-toggle-button" data-id="${track.id}"> ${track.location || track.sport}
        <div class="demo-meta"><img height='16' src=${icons[track.sport]}/><span class="demo-meta-divider">|</span> ${date.getDate()}/${1+date.getMonth()}/${date.getFullYear()} <span class="demo-meta-divider">|</span> ${track.totalDistance} km</div>
      </button>
      <div class="demo-box">
        <table>
        <tbody>
            <tr><td>Duration :</td> <td> ${duration.getUTCHours()}:${duration.getMinutes()}:${duration.getSeconds()}</td></tr>
            <tr><td>Average speed :</td> <td> ${track.averageSpeed|| 0} km/h</td></tr>
            <tr><td>Max speed :</td> <td> ${track.maxSpeed|| 0} km/h</td></tr>
            <tr><td>Calories :</td> <td> ${track.calories|| 0} kcal</td></tr>
            <tr><td>Average HR :</td> <td> ${track.averageHeartRate || 0} bpm/min</td></tr>
            <tr><td>Ascent :</td> <td> ${track.ascent || 0} m</td></tr>
            <tr><td>Descent :</td> <td> ${track.descent || 0} m</td></tr>
        </tbody>
        </table>
      </div>
    </div>
    `

}