import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, set } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCvns3OBg8hp_2duPNnE2lrlB0Ber4-afQ",
    authDomain: "fir-dashboard-423b9.firebaseapp.com",
    projectId: "fir-dashboard-423b9",
    storageBucket: "fir-dashboard-423b9.firebasestorage.app",
    messagingSenderId: "709449427118",
    appId: "1:709449427118:web:8ee38c9e2000e7e4b2253f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const creatingdabase = getDatabase(app);
  const collectionaname = ref(creatingdabase,'viewdatas')

  let formname = document.getElementById("nameform");
  let formmobilenotag = document.getElementById("mobileform");
  let formemailtag = document.getElementById("emailform");
  let formcitytag = document.getElementById("cityform");
  let formdetailscase = document.getElementById("detailscaseform");
  let tablecontent= document.getElementById('tablecontent');
  let submitform = document.getElementById('submitform')
  let editid = null

  submitform.addEventListener('click',()=>{
    let namevalidation = formname.value.trim().toLowerCase()
    let formemailtagvalidation = formemailtag.value.trim().toLowerCase()
    let formmobilenotagvalidation = formmobilenotag.value.trim().toLowerCase()
    let formcitytagvalidation = formcitytag.value.trim().toLowerCase()
    let formdetailscasevalidation = formdetailscase.value.trim().toLowerCase()
    const objectcreate = {
        myname : namevalidation,
        mobilenumber :formmobilenotagvalidation,
        emailid:formemailtagvalidation,
        cityname:formcitytagvalidation,
        casedetails:formdetailscasevalidation
    }
    if(editid){
        alert('editid',editid)
        set(ref(creatingdabase,`viewdatas/${editid}`),objectcreate)

    }else{

        push(collectionaname,objectcreate)
    }
  })

  onValue(collectionaname,function (snapshot) {
    if (snapshot.exists()) {
        let alldata = Object.entries(snapshot.val())
        console.log(alldata);  
        tablecontent.innerHTML = ''

        alldata.forEach(particualar=>{
            console.log(particualar[0]);
            const userid = particualar[0];
            const userdata = particualar[1];
            tablecontent.innerHTML+=`
            <tr>
                <td>${userdata.myname}</td>
                <td>${userdata.mobilenumber}</td>
                <td>${userdata.emailid}</td>
                <td>${userdata.cityname}</td>
                <td>${userdata.casedetails}</td>
                <td><button class="formeditbutton" data-id="${userid}">Edit</button><b
                utton class="formdeletebutton" data-id="${userid}">Delete</button></td>
            </tr>
            `           
        })
           
    } else {
        tablecontent.innerHTML = 'no datas';
    }
  })


  document.addEventListener('click',(event)=>{
    if (event.target.classList.contains('formeditbutton')) {
        // alert('editbutton')
        let particularid = event.target.dataset.id;
        let nearesttd = event.target.closest('tr').children;
        formname.value = nearesttd[0].innerHTML;
        formmobilenotag.value = nearesttd[1].innerHTML;
        formemailtag.value = nearesttd[2].innerHTML;
        formcitytag.value = nearesttd[3].innerHTML;
        formdetailscase.value = nearesttd[4].innerHTML;
        editid = particularid

    
        console.log(nearesttd);
        
        alert(particularid)
        
    } else if(event.target.classList.contains('formdeletebutton')) {     
        if(confirm('do you want to delete this data')){
            let particularid = event.target.dataset.id;
            remove(ref(creatingdabase,`viewdatas/${particularid}`))
        }
    }

  })