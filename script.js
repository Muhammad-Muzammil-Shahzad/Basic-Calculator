let output = document.getElementById("textinput")
function display(action) {
    output.value += action
}

function calculation() {
    try {
        output.value = math.evaluate(output.value)
    } catch (err) {
        alert("given input is wrong")
    }
}

function clearall() {
    output.value = ""
}


function del() {
    output.value = output.value.slice(0, -1)
}

output.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        calculation()
    }
})
