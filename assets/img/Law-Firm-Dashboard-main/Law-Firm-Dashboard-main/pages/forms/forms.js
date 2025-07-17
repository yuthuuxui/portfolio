let formname = document.getElementById("nameform");
let formmobilenotag = document.getElementById("mobileform");
let formemailtag = document.getElementById("emailform");
let formcitytag = document.getElementById("cityform");
let formdetailscase = document.getElementById("detailscaseform");



let submittagcall = document.getElementById("submitform");
let tablecontent = document.getElementById("tablecontent");

submittagcall.addEventListener("click", () => {
    let newtablebody = document.createElement("tr");
    tablecontent.appendChild(newtablebody);

    let newtabledata = document.createElement("td");
    let newinputtag = document.createElement("input");
    newtabledata.appendChild(newinputtag);
    // newinputtag.innerHTML = newtabledata.value;
    newinputtag.classList.add("formborder")
    newinputtag.value = formname.value;
    newinputtag.setAttribute("readonly","readonly");
    newtablebody.appendChild(newtabledata);

    let newtabledatas = document.createElement("td");
    let newinputtags = document.createElement("input");
    newtabledatas.appendChild(newinputtags);
    // newinputtags.innerHTML = newtabledatas.value;
    newinputtags.classList.add("formborder")
    newinputtags.value = formmobilenotag.value;
    newinputtags.setAttribute("readonly","readonly");
    newtablebody.appendChild(newtabledatas);

    let newtabledataes = document.createElement("td");
    let newinputtages = document.createElement("input");
    newtabledataes.appendChild(newinputtages);
    // newinputtages.innerHTML = newtabledataes.value;
    newinputtages.classList.add("formborder")
    newinputtages.value = formemailtag.value;
    newinputtages.setAttribute("readonly","readonly");
    newtablebody.appendChild(newtabledataes);

    let newtabledataess = document.createElement("td");
    let newinputtagess = document.createElement("input");
    newtabledataess.appendChild(newinputtagess);
    // newinputtagess.innerHTML = newtabledataess.value;
    newinputtagess.classList.add("formborder")
    newinputtagess.value = formcitytag.value;
    newinputtagess.setAttribute("readonly","readonly");
    newtablebody.appendChild(newtabledataess);

    let newtabledataees = document.createElement("td");
    let newinputtagees = document.createElement("input");
    newtabledataees.appendChild(newinputtagees);
    // newinputtagees.innerHTML = newtabledataees.value;
    newinputtagees.classList.add("formborder")
    newinputtagees.value = formdetailscase.value;
    newinputtagees.setAttribute("readonly","readonly");
    newtablebody.appendChild(newtabledataees);
    





    
    
    let newtabledataeesf = document.createElement("td");
    let editthetag = document.createElement("button");
    editthetag.innerHTML = "Edit";
    editthetag.classList.add("formeditbutton")
    newtabledataeesf.appendChild(editthetag);

    let savethetag = document.createElement("button");
    savethetag.innerHTML = "Save";
    savethetag.classList.add("formsavebutton")
    newtabledataeesf.appendChild(savethetag)

    let deletethetag = document.createElement("button");
    deletethetag.innerHTML = "Delete";
    deletethetag.classList.add("formdeletebutton")
    newtabledataeesf.appendChild(deletethetag)

    newtablebody.appendChild(newtabledataeesf);
    editthetag.addEventListener("click", function (params) {
        newinputtag.removeAttribute("readonly","readonly");
        newinputtags.removeAttribute("readonly","readonly");
        newinputtages.removeAttribute("readonly","readonly");
        newinputtagees.removeAttribute("readonly","readonly");
        newinputtagess.removeAttribute("readonly","readonly");

    })

    // let newtabledataeesfs = document.createElement("td");
    // newtablebody.appendChild(newtabledataeesf);
    savethetag.addEventListener("click", function (params) {
        newinputtag.setAttribute("readonly","readonly");
        newinputtags.setAttribute("readonly","readonly");
        newinputtages.setAttribute("readonly","readonly");
        newinputtagess.setAttribute("readonly","readonly");
        newinputtagees.setAttribute("readonly","readonly");

    })

    deletethetag.addEventListener("click", function (params) {
        newtablebody.style.display="none";
    })




    
    // let newtabledataes = document.createElement("td");
    // newtabledataes.innerHTML = formemailtag.value;
    // newtabledataes.setAttribute("readonly","readonly");
    // newtablebody.appendChild(newtabledataes);

    // let newtabledataess = document.createElement("td");
    // newtabledataess.innerHTML = formcitytag.value;
    // newtabledataess.setAttribute("readonly","readonly");
    // newtablebody.appendChild(newtabledataess);

    // let newtabledataees = document.createElement("td");
    // newtabledataees.innerHTML = formdetailscase.value;
    // newtabledataees.setAttribute("readonly","readonly");
    // newtablebody.appendChild(newtabledataees);
    // let newtabledataeesf = document.createElement("td");
    // let editthetag = document.createElement("button");
    

    


    // let insertrow = tablecontent.insertRow(tablecontent.rows.length);

    // let formnamedata = insertrow.insertCell(0);
    // let formmobileno = insertrow.insertCell(1);
    // let formemail = insertrow.insertCell(2);
    // let formcity = insertrow.insertCell(3);
    // let formdetails = insertrow.insertCell(4);
    // let editbtn = insertrow.insertCell(5)

    // formnamedata.innerHTML = formname.value;
    // formmobileno.innerHTML = formmobilenotag.value;
    // formemail.innerHTML = formemailtag.value;
    // formcity.innerHTML = formcitytag.value;
    // formdetails.innerHTML = formdetailscase.value; 
    // editbtn.innerHTML = '<button type="submit" onclick={removefunction(this)} class="btn btn-primary me-2">Remove</button>' 



})

// function removefunction(params) {
//     // console.log(params);
//     let rowdata = params.parentNode.parentNode;
//     // console.log(rowdata);
//     let removeddata = rowdata.parentNode.removeChild(rowdata);
//     // console.log(removeddata); 
//     }