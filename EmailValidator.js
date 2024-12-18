const EMAIL_PATTERN = RegExp("^((((abc)[a-zA-Z0-9]*)||(abc[_\\+\\-\\.][a-zA-Z0-9]*))+(?<!\\.)@([0-9a-zA-Z]{1,}))\\.(([a-zA-Z]{2,}\\.[a-zA-Z]{2})||([a-zA-Z\\,]{2,}))+(?<!\\.)$");


class EmailValidator {

    vaildateEmail(emailValue) {
        if (EMAIL_PATTERN.test(emailValue)) {
            console.log(("Email: " + emailValue + " is valid"));
        }
        else {
            console.log(("Email: " + emailValue + " is not valid"));
        }
    }
}


let emailValidator = new EmailValidator();

let allMails = ["abc@yahoo.com", "abc-100@yahoo.com", "abc.100@yahoo.com", "abc111@abc.com", "abc-100@abc.net",
    "abc.100@abc.com.au", "abc@1.com", "abc+100@gmail.com", "abc", "abc@gmail.com.com", "abc@.com.my", "abc123@gmail.a", "abc123@.com.com", ".abc@abc.com", "abc()*@gmail.com", "abc@%*.com", "abc..2002@gmail.com"
    , "abc.@gmail.com", "abc@abc@gmail.com", "abc@gmail.com.1a", ".abc@gmail.com.aa.au"];

allMails.forEach(email => {
    emailValidator.vaildateEmail(email)
});