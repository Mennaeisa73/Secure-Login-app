let signinEmail = document.querySelector("#signinEmail");
let signinPassword = document.querySelector("#signinPassword");

let signupName = document.querySelector("#signupName");
let signupEmail = document.querySelector("#signupEmail");
let signupPassword = document.querySelector("#signupPassword");

var loginBtn = document.getElementById("loginBtn");

var wrongMsg = document.querySelector("#wrongMsg");

let userInfo = [];


if (localStorage.getItem("UsersDetails") ==null) {
     userInfo =[];
}else{
    userInfo =JSON.parse(localStorage.getItem("UsersDetails"));
}



function signUp(){
userInputValidation();
IsExist();

if (userInputValidation()==true && IsExist() ==false) {
    var user ={

        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value
        };

        userInfo.push(user);
        localStorage.setItem("UsersDetails",JSON.stringify(userInfo));
        
        var confirmMsg =document.querySelector("#confirmMsg");
        confirmMsg.classList.replace("d-none","d-block");
        var signIn = document.querySelector("#signIn");
     
       
}else{
       var tryAgainMsg =document.querySelector("#tryAgainMsg");
       tryAgainMsg.classList.replace("d-none","d-block");
       signIn.classList.replace("d-block","d-none");

}

  
};


function usernameValidation(){
    let usernameAlert = document.querySelector("#usernameAlert");
    let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;
    if (regex.test(signupName.value) == true && signupName.value != '') {
        signupName.classList.add ("is-valid");
        signupName.classList.remove ("is-invalid");
        usernameAlert.classList.replace("d-block","d-none")
        return true;
}else{
    signupName.classList.add ("is-invalid");
    signupName.classList.remove ("is-valid");
    usernameAlert.classList.replace("d-none","d-block")
    return false;

}
}


function passwordValidation(){
    let passwordAlert= document.querySelector("#passwordAlert");
    let regex = /^.{5,15}$/;
    if (regex.test(signupPassword.value) == true && signupPassword != '') {
        signupPassword.classList.add ("is-valid");
        signupPassword.classList.remove ("is-invalid");
        passwordAlert.classList.replace("d-block","d-none")
        return true;
}else{
    signupPassword.classList.add ("is-invalid");
    signupPassword.classList.remove ("is-valid");
    passwordAlert.classList.replace("d-none","d-block")
    return false;

}
}


function userEmailValidation(){
    let useremailAlert= document.querySelector("#useremailAlert");
    let regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(signupEmail.value) == true && signupEmail != '') {
        signupEmail.classList.add ("is-valid");
        signupEmail.classList.remove ("is-invalid");
        useremailAlert.classList.replace("d-block","d-none")
        return true;
}else{
    signupEmail.classList.add ("is-invalid");
    signupEmail.classList.remove ("is-valid");
    useremailAlert.classList.replace("d-none","d-block")
    return false;

}
};



function userInputValidation(){
    usernameValidation();
    passwordValidation();
    userEmailValidation();
    if(usernameValidation()==true && passwordValidation()==true &&  userEmailValidation()==true  ){
return true
    }else{
        return false
    }


};

function IsExist(){
  var accountExistMsg =document.querySelector("#accountExistMsg");
  for (let index = 0; index < userInfo.length; index++) {
    if(userInfo[index].name.toLowerCase() == signupName.value.toLowerCase()||
    userInfo[index].email.toLowerCase() == signupEmail.value.toLowerCase()){
    signupName.classList.remove("is-valid");
    signupEmail.classList.remove("is-valid");
    accountExistMsg.classList.replace("d-none","d-block");
    return true;
    }
  }
  return false;
};

var userName = localStorage.getItem("userInfo")

if (userName && document.getElementById('username')) {
    document.getElementById('username').innerHTML = "Welcome " + userName
}



function login(){

if(signinEmail.value =="" || signinPassword.value == "" ){

    var fillMsg =document.querySelector("#fillMsg");
    fillMsg.classList.replace("d-none","d-block");
    return false;
    };

for(var i=0;i<userInfo.length;i++){

if (
    userInfo[i].email.toLowerCase() == signinEmail.value.toLowerCase() && 
userInfo[i].password.toLowerCase() == signinPassword.value.toLowerCase()
)
{
localStorage.setItem("userInfo", userInfo[i].name);
location.href = "./Welcome.html";
break;

}
else
{
 wrongMsg.classList.replace("d-none","d-block");
}


};


}




function logout() {
    localStorage.removeItem('sessionUsername')
}