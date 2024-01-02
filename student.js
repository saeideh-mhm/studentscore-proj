let btnadd = document.getElementById("btnadd")

let nameinput = document.getElementById("nameinput")

let scoreinput = document.getElementById("scoreinput")

let finally1 = document.getElementById("finally")






btnadd.addEventListener("click", addbutton)

function addbutton() {
    let nameinputvalue = nameinput.value

    let scoreinputvalue = scoreinput.value


    if (scoreinputvalue <= 20 && scoreinputvalue >= 0 && nameinputvalue) {
        let ndiv = document.createElement("div")

        let scorediv = document.createElement("div")

        scorediv.innerHTML = scoreinputvalue

        let namediv = document.createElement("div")

        namediv.innerHTML = nameinputvalue

        if (scoreinputvalue >= 12 && scoreinputvalue <= 20) {
            ndiv.innerHTML = "succsee"
            ndiv.style.color = "green"
            ndiv.style.fontWeight = "bold"
            scorediv.style.color = "green"

        } else {
            ndiv.innerHTML = "failed"
            ndiv.style.color = "red"
            ndiv.style.fontWeight = "bold"
            scorediv.style.color = "red"

        }
        let thirddiv = document.createElement("div")

        thirddiv.className = "d-flex justify-content-between container "

        thirddiv.append(namediv, scorediv, ndiv)

        let seconddiv = document.createElement("div")

        seconddiv.className = "col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 rounded-2 "
        seconddiv.style.backgroundColor = "pink"
        seconddiv.style.margintop = "5px"
        seconddiv.style.marginBottom = "5px"
        seconddiv.style.padding = "10px 5px 10px 5px"


        seconddiv.append(thirddiv)

        finally1.append(seconddiv)





    } else {
        alert("please check input and enter correct ")
    }

}

finally1.addEventListener("contextmenu", con)

function con() {
    console.log("d")
}

