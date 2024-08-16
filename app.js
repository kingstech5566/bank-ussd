let choice = Number(prompt("Input the bank Code 316"))

let code = choice = Number(prompt("Welocme to Kings Bank.\n1. Create an Account\n2. Make a Transfer\n3. Buy Recharge\n4. Quickteller"))

switch(code){
    case 1:
        alert("Welcome let create an account for you today.")
        let account = prompt("Please fill your Names here.")
        let age = Number(prompt("Enter your age here."))
        let phone = Number(prompt("Please enter your Phone number."))

        let see = account + age + phone

        switch(see){
            default:
                alert("Thanks for Joining our Bank today!!")
                break;
        }
        case 2:
            alert("Let make a transfer!!")
            let transfer = Number(prompt("Welcome to Kings Bank\n1. Make an Internal transfer\n2. Make an External transfer"))

            switch(transfer){
                case 1:
                    let inter = Number(prompt("Enter account number here"))
                    let internal = Number(prompt("Enter amount"))
                    alert("Transfer successful✔.")
                    break;

                    case 2:
                        let trans = Number(prompt("Select bank\n1. Access\n2. GTBank\n3. Opay\n4. Palmpay"))
                        switch(trans){
                            case 1:
                                let inn = Number(prompt("Enter account number"))
                                let nin = Number(prompt("Enter Amount"))
                                        alert("Transfer Successful✔")
                                        break;
                                
                            case 2:
                                let non = Number(prompt("Enter account number"))
                                let nno = Number(prompt("Enter Amount"))
                                        alert("Transfer Successful✔")
                                        break;
                                
                            case 3:
                                let ini = Number(prompt("Enter account number"))
                                let nni = Number(prompt("Enter Amount"))
                                        alert("Transfer Successful✔")
                                        break;
                                
                            case 4:
                                let nnn = Number(prompt("Enter account number"))
                                let iii = Number(prompt("Enter Amount"))
                                        alert("Transfer Successful✔")
                                        break;
                        }
                        default:
                            alert("Thank You")
            }

            case 3:
                alert("Recharge your phone..")
                let recharge = Number(prompt("Select your Network\n1. MTN\n2. Airtel\n3. GLO\n4. 9mobile"))

                switch(recharge){
                    case 1:
                        let mtn = Number(prompt("Enter Number"))
                        alert("Recharge Successful.")
                        break;

                        case 2:
                        let air = Number(prompt("Enter Number"))
                        alert("Recharge Successful.")
                        break;

                        case 3:
                        let glo = Number(prompt("Enter Number"))
                        alert("Recharge Successful.")
                        break;

                        case 4:
                        let mobile = Number(prompt("Enter Number"))
                        alert("Recharge Successful.")
                        break;
                }
            case 4:
                alert("QuickTeller")
                let tell = Number(prompt("Welcome\n1. Recharge your Ikedec or Ekedec\n2. Recharge TV\n3. Water Bills\n4. Pay4aChild"))
                
                switch(tell){
                    case 1:
                        let light = Number(prompt("Enter your Ikedec or Ekedec meter Number"))
                        alert("Your recharge was successful pls check your sms for your token")
                        break;

                        case 2:
                            let tv = Number(prompt("Please enter your iuc number for DSTV or GOTV or StarTimes"))
                            alert("Your Subscription is successful..")
                            break;

                            case 3:
                                let water = Number(prompt("Enter the waterbill number here"))
                                alert("Successful.")
                                break;

                                case 4:
                                    let child = Number(prompt("Enter the School number here"))
                                    alert("Fees Updated Successfully.")
                                    break;
                }
}

switch(choice){
    default:
        alert("Please select an input")
}