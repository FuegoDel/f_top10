let data


window.addEventListener('message', function (event) {
    if (event.data.display == true) {
        data = event.data
        document.getElementById('body').style.background = `url(images/bg.png), linear-gradient(190.9deg, rgba(${event.data.color}, 0.36) 0%, rgba(202, 24, 24, 0) 36.02%, rgba(26, 25, 25, 0.9) 84.1%, rgba(26, 25, 25, 0.9) 100%, rgba(128, 128, 128, 1) 100%)rgba(26, 25, 25, 0.9)`//Background
        document.getElementById('name').innerHTML = `TOP 10 <span id="ncolor">${event.data.name}</span>` //Change the title
        document.getElementById('body').style.backgroundRepeat = 'no-repeat'
        document.getElementById('ncolor').style.color = `rgb(${event.data.color})` //Change the title color
        document.getElementById('tbody').innerHTML = ` 
              <tr>
              <td class="no">No.</td>
              <td class="name">Name</td>
              <td class="points">${event.data.type}</td>
            </tr>`
        for (let i = 0; i < event.data.object.length; i++) {
            if (i == 0) {
                document.getElementById('tbody').innerHTML += `<tr>
                   <td class="no" id="gold"><i class="fa-solid fa-trophy"></i> 1.</td>
                   <td class="name" id="gold">${event.data.object[i].name}</td>
                   <td class="points" id="gold">${event.data.object[i].points}</td>
                 </tr>`
            }
            if (i == 1) {
                document.getElementById('tbody').innerHTML += `<tr>
                 <td class="no" id="silver"><i class="fa-solid fa-trophy"></i> 2.</td>
                 <td class="name" id="silver">${event.data.object[i].name}</td>
                 <td class="points" id="silver">${event.data.object[i].points}</td>
               </tr>`
            }
            if (i == 2) {
                document.getElementById('tbody').innerHTML += `
                   <tr>
                   <td class="no" id="bronze"><i class="fa-solid fa-trophy"></i> 3.</td>
                   <td class="name" id="bronze">${event.data.object[i].name}</td>
                   <td class="points" id="bronze">${event.data.object[i].points}</td>
                 </tr>`
            } else if (i > 2) {

                document.getElementById('tbody').innerHTML += `
              <tr>
                <td class="no">${i + 1}</td>
                <td class="name">${event.data.object[i].name}</td>
                <td class="points">${event.data.object[i].points}</td>
              </tr>`

            }
        } //Build the leaderboard then open the ui
        $('#body').fadeIn()
    }
});

document.onkeyup = function (event) {
    if (event.key == 'Escape') {
        $('#body').fadeOut()
        $.post('http://f_top10/closeNUI'); //Close NUI and reload page
        setTimeout(function () {
            window.location.reload()
        }, 1000);
    }
};

