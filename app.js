function attachGradientEvents() {

    let gradientBoxElement = document.getElementById('gradient-box');
    let resultElement = document.getElementById('result');

    gradientBoxElement.addEventListener('mousemove', function (e) {

        let percent = Math.floor((e.offsetX / (e.target.clientWidth)) * 100);

        resultElement.textContent = `${percent}%`;
    }

    );
    gradientBoxElement.addEventListener('mouseout', () => {
        document.getElementById('result').textContent = "";


    })


}

// function attachGradientEvents() {

//     let gradient = document.getElementById('gradient');

//     gradient.addEventListener('mousemove', gradientMove);

//     gradient.addEventListener('mouseout', gradientOut);

//     function gradientMove(event) {

//         let power = event.offsetX / (event.target.clientWidth - 1);

//         power = Math.trunc(power * 100);

//         document.getElementById('result').textContent = power + "%";

//     }

//     function gradientOut(event) {

//         document.getElementById('result').textContent = "";

//     }

// };