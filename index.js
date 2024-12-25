let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
let stageEl=document.getElementById("stage")
//let fightButton=document.getElementById("fightButton")
const pickFighters=()=>{
    let index1=Math.floor(Math.random()*fighters.length)
    console.log(index1)
    let index2=Math.floor(Math.random()*fighters.length)
    console.log(index2)
    stageEl.textContent=fighters[index1]+" vs "+ fighters[index2]
}