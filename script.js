// var ele=document.querySelector('#form_submission')
// ele.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     console.log("form submitted")   
// })
var form_submit=document.querySelector('#form_submission')
form_submit.addEventListener('submit',normal_func)
    
    function normal_func(event){
    event.preventDefault();
    var form_status=document.querySelector('#after_submission') 
    var form_status1=document.querySelector('#after_filling')
    var fname=document.querySelector('[placeholder="FirstName"]')
    var lname=document.querySelector('[placeholder="LastName"]')
    var address=document.querySelector('[placeholder="Address"]')
    var pincode=document.querySelector('[placeholder="pincode"]')
    var gender=document.querySelector('[for="choosegender"]')
    var country=document.querySelector('[for="choosecountry"]')
    var state=document.querySelector('[for="choosestate"]')
    let checkboxes= document.querySelectorAll('input[name="food"]:checked');
    var datas=[fname,lname,address,pincode,gender,country,state,checkboxes]
    let output= [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);

    });

    if(fname!="" && lname!="" && address!="" && country!="" && state!="" && pincode!="" && gender!="" && output!=""){
        form_status1.innerText = 'you have successfully Submitted'
        form_status1.style.display="block"

    
    var creating_tr=document.createElement('tr')

    // for(i=0;i<=7;i++){
    //     var creating_td=document.createElement('td')
    //     creating_td.innerText=datas[i];
    //     creating_tr.append(creating_td)
    // }

    var creating_td_fname=document.createElement('td')
    var creating_td_lname=document.createElement('td')
    var creating_td_address=document.createElement('td')
    var creating_td_pincode=document.createElement('td')
    var creating_td_gender=document.createElement('td')
    var creating_td_food=document.createElement('td')
    var creating_td_country=document.createElement('td')
    var creating_td_state=document.createElement('td')

    creating_td_fname.innerText=fname.value
    creating_td_lname.innerText=lname.value
    creating_td_address.innerText=address.value
    creating_td_pincode.innerText=pincode.value
    creating_td_gender.innerText=gender.value
    creating_td_food.innerHTML=output
    creating_td_country.innerHTML=country.value
    creating_td_state.innerText=state.value


    creating_tr.append(creating_td_fname)
    creating_tr.append(creating_td_lname)
    creating_tr.append(creating_td_address)
    creating_tr.append(creating_td_pincode)
    creating_tr.append(creating_td_gender)
    creating_tr.append(creating_td_food)
    creating_tr.append(creating_td_country)
    creating_tr.append(creating_td_state)

    


    document.querySelector('tbody').append(creating_tr)

    fname.value=""
    lname.value=""
    address.value=""
    pincode.value=""
    gender.value=""
    country.value=""
    state.value=""




  

    }

    else{
        form_status.innerText="please fill all the fields"
        form_status.style.display="block"
        
        console.log("please fill all the fields")
    }
    
}



    // if(fname!="" && lname!="" ){
    //     console.log("form submitted")
    // var adding_fname=document.querySelector("#table_fname")
    // adding_fname.innerText=fname
    // adding_lname
    


    






