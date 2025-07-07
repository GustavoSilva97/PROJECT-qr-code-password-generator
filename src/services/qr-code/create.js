//import prompt package to file
import prompt from "prompt";
//import prompt configuration to ask what user what to do
import promptQRCode from "../../prompts-schema/prompt-schema-qrcode.js";

import handle from "./handle.js";

//implementing the logic to create qr codes
async function createQRCode(){
    prompt.get(promptQRCode, handle);

    prompt.start();
}

//export function to create qr cods
export default createQRCode;

