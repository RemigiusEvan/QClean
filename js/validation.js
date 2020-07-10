var letters = /^[A-Za-z]+$/;
    var letter = /[a-zA-Z]/;
    var number = /[0-9]/;
    
    var checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    var alphanumeric = /^[a-zA-Z0-9]+$/;

    function validation(){
        
        var fullName = document.getElementById("formdaftar").elements.namedItem("fullName").value;
        
        var email= document.getElementById("formdaftar").elements.namedItem("email").value;
        
        var date= document.getElementById("formdaftar").elements.namedItem("date").value;
        var username = document.getElementById("formdaftar").elements.namedItem("username").value;
        
        var password = document.getElementById("formdaftar").elements.namedItem("password").value;
        
        var gender = document.getElementById("formdaftar").elements.namedItem("gender").value;
        
        var agreement = document.getElementById("formdaftar").elements.namedItem("agreement").checked;
        
        var check = number.test(password) && letter.test(password);
        var check2 = checkEmail.test(email);

        if(fullName ==""){
            window.alert("Insert your name!");
        }else if(!fullName.match(letters)){
            window.alert("Name must be letters only");
        }else if(username.includes(' ')){
			window.alert("Username must not contain space!");
        }else if(username.length<6){
			window.alert("Username must contains 6 or more characters!");     
        }else if(password.length<8){
			window.alert("Password must contains 8 or more characters!");     
        }else if(check==false){
			window.alert("Password must contains number and letters!");
        }else if(gender==""){
			window.alert("Gender is not choosen!");
        }else if(date==""){
			window.alert("Date of birth not chosen!");
        }else if(email == ""){
			window.alert("Insert your email!");
        }else if(!email.includes('@') || !email.includes('.')){
			window.alert("Your email is not correct!");
        }else if(!email.endsWith(".com")){
			window.alert("Your email must end with .com");
        }else if(check2==false){
			window.alert("Your email address format is invalid");
        }else if(agreement==false){
            window.alert("Check the agreement to continue!");
        }else{
            window.alert("Akun anda berhasil terdaftar");
            window.confirm("CONFIRMATION BOX\nNama : "+fullName+"\nUsername : "+username+" \nGender : "+gender+" \nDoB : "+date+" \nEmail : "+email+" ");
            window.location.href='login.html';
        }

    }

    function validation1(){
        var email= document.getElementById("formdaftar").elements.namedItem("email").value;
        var password = document.getElementById("formdaftar").elements.namedItem("password").value;
        var check = number.test(password) && letter.test(password);
        var check2 = checkEmail.test(email);

        if(email == ""){
            window.alert("Insert your email!");
        }else if(!email.includes('@') || !email.includes('.')){
			window.alert("Your email/password is invalid!");
        }else if(!email.endsWith(".com")){
			window.alert("Your email/password is invalid!");
        }else if(password.length<8){
			window.alert("Your email/password is invalid!");     
        }else if(check==false){
            window.alert("Your email/password is invalid!");
        }else{
            window.alert("Welcome to QClean.");
            window.location.href = "index.html";
        }
    }

    function validation2(){
        var ulasan= document.getElementById("formfeedback").elements.namedItem("ulasan").value;

        if(ulasan == ""){
            window.alert("Ulasan tidak boleh kosong");
        }else{
            window.alert("Ulasan anda berhasil tersimpan");
            window.location.href = "feedback.html";
        }
    }
    function validation3(){
        var judul= document.getElementById("form-forum").elements.namedItem("judul").value;
        var deskripsi= document.getElementById("form-forum").elements.namedItem("deskripsi").value;

        if(judul == ""){
            window.alert("Judul thread tidak boleh kosong");
        }else if(deskripsi ==""){
            window.alert("deskripsi thread tidak boleh kosong");
        }
        else{
            window.alert("Thread anda berhasil tersimpan");
            document.getElementById('threads').style.display="grid";
        }
    }
    function validation4(){
        var bintang= document.getElementById("formrating").elements.namedItem("star").value;
        var alasan= document.getElementById("formrating").elements.namedItem("alasan").value;

        if(bintang == ""){
            window.alert("Berikan rating anda");
        }else if(alasan ==""){
            window.alert("Alasan tidak boleh kosong");
        }
        else{
            window.alert("Ulasan anda berhasil tersimpan");
            window.location.href = "rating.html";
        }
    }

    function reply(){
        document.getElementById('reply').style.display="grid";
    }