//import prompt package to file
import prompt from "prompt";
//import prompt configuration to ask user what to do
import mainPrompt from "./prompts-schema/prompt-schema-main.js"
//import function to generate qrcodes
import createQRCode from "./services/qr-code/create.js";
//import function to generate passwords
import createPassword from "./services/password/create.js";

//CHOOSING ACTIONS (GENERATE QRCODE OR PASSWORD)
async function main(){
    /*this is the function to get the user entry with the prompt. we specify the prompt configuration (imported
    from mainPrompt) and a function to work with the user entry data
    a) if the user enter "1", it will call the createQRCode funtion to generate qrcodes
    b) if the usar enter "2", so createPassword is called to generate passwords*/
    prompt.get(mainPrompt, async (err, choice) => {
        if(err) console.log(err);

        if(choice.select == 1) await createQRCode();
        if(choice.select == 2) await createPassword();
    });  

    //here we call the prompt
    prompt.start();
}

main();

/*project architecture: all prompts are concentrated in "prompts" inside "src" and all
services (generate qrcodes and generate password) are concentrated in "services", also insite "src"
and there's also index.js, our main file, in "src"*/