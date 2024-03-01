


let myLead = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))
const tabBtn=document.getElementById("tab-btn")


tabBtn.addEventListener("click",function(){
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function (tabs) {
        myLead.push(tabs[0].url)
        localStorage.setItem("myLead", JSON.stringify(myLead))
        render(myLead)
    })
})

if (leadFromLocalStorage) {
    myLead = leadFromLocalStorage
    render(myLead)
}


function render( leads) {

    let listItem = ""
    for (let i = 0; i <leads.length; i++) {
        listItem += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                     ${leads[i]}
                 </a>
            </li>
        `
    }
    ulEL.innerHTML = listItem
}

deleteBtn.addEventListener("dblclick", function () {
    console.log("button clicked")
    localStorage.clear()
    myLead = []
    render(myLead)
})
inputBtn.addEventListener("click", function () {
    // console.log("Saved the data well done !!")
    // we can also use the onclick in the HTML instid of addEventlistener
    myLead.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLead", JSON.stringify(myLead))
    render(myLead)
    // console.log(localStorage.getItem("myLead"))
}
)
