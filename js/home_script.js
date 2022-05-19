const add_ann = document.getElementById("add_ann");
const ann_list = document.getElementById("annList");



add_ann.addEventListener("click", function myfunction() {
    let announcement = document.createElement("li");
    let announcement_p = document.createElement("p");
    announcement_p.innerHTML = prompt("Enter the announcement ");
    announcement.append(announcement_p);
    ann_list.append(announcement);
})
/*announcement.setAttribute('class','announcement');*/
