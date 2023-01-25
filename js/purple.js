const form = document.querySelector('#testDataForm')


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let percent = document.querySelector('#purp2');
    let numb = document.querySelector('#purp3')
    let percent_chance = percent.value
    let number_of_raids = numb.value
    

    const a = "Lightbearer";
    const b = "Osmumten's fang";
    const c = "Elidinis' ward";
    const d = "Masori mask";
    const e = "Masori body";
    const f = "Masori legs";
    const g = "Tumeken's shadow";
    var raids = 1;


    const drops = [a,a,a,a,a,a,a,b,b,b,b,b,b,b,c,c,c,d,d,e,e,f,f,g];

    const summary = [];
    var sum = 0;

    while (raids < number_of_raids) {
        
        const purple = Math.floor(Math.random() * 100)

        if (purple/100 <= percent_chance/100) {
            const drawing = Math.floor(Math.random() * 23);
            const prize = drops[drawing];
            summary.push(prize + " - Raid " + raids);
            sum += 1;
            } else {
            raids += 1;
            }   
        
    }

    // console.log(summary);
    // console.log(sum);
    // <p id="summary">${summary} </p>
    // <p id="summary">${sum} purples obtained</p>

    const results = document.getElementById("results")
    let html = `<div class="col-12 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${sum} purples obtained</h5>
            <h6 class="card-subtitle mb-2 text-muted">${summary}</h6>
            <p class="card-text"></p>
        </div>
    </div>`
    results.insertAdjacentHTML("afterend", html)

    
})


const adding_this = document.form
adding_this.append("hello world")


const clear_data = () => {
    window.location.reload()
}