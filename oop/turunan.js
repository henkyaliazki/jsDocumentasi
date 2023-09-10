//terdapat superClass dan subClass

//superclas
class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    //mathod
    sendMassage(masagge, reciver) {
        console.log(`${this.sender} send ${masagge} to ${reciver}`)
    }
}

//subclas
class WhatsAppService extends MailService {
    sendBroadcastMasagge(masagge, recivers) {
        for (const reciver of recivers) {
            this.sendMassage(masagge, reciver)
        }
    }
}
//subclass n overiidng
class WhatsAppBisnis extends MailService {
    //overiding
    constructor(sender, isBisnis, norek) {
        super(sender)
        this.isBisnis = isBisnis;
        this.norek = norek
    }
    //overiding mathod
    sendMassage(message, reciver, address) {
        //memanggil mathod pada superclas
        super.sendMassage(message, reciver, address)
        console.log(`${address} Via WhatsApp`)
    }
}

//subclas
class EmailService extends MailService {
    sendDelayedMessage(message, reciver, delay) {
        setTimeout(() => {
            this.sendMassage(message, reciver)
        }, delay)
    }
}
const whatsApp = new WhatsAppService(+621122211)
const email = new EmailService('ali@gmail.com')
//overiding
const whatsAppBisnis = new WhatsAppBisnis('085156255', true)
whatsAppBisnis.sendMassage('bisnis', '0888881', 'jkt')
console.log('=======overiding======')

const sendWa = whatsApp.sendMassage('hallo', +6211298)
const broadcastWa = whatsApp.sendBroadcastMasagge('hai', [+6200999, +62119933])
const emailSend = email.sendMassage('kuy email', 'azki@gmail.com')
const emailDelay = email.sendDelayedMessage('delay', 'hi@gmail.com', 1000)

class Car {
    constructor(merk) {
        this.merk = merk;
    }

    drive(name, speed) {
        console.log(`${this.merk} ${name}, kecepatan ${speed} km/jam`)
    }
}

class CarSport extends Car {
    maxSpeed(name, maxSpeed) {
        this.drive(name, maxSpeed)
    }
}
class Bus extends Car {
    sleepingBus(name, maxSpeed, twosheat) {
        this.drive(name, maxSpeed, twosheat)
    }
}

const sportCar = new CarSport('Ferrari')
const busSleep = new Bus('Sinar Jaya')
sportCar.maxSpeed('Ayla', 400)
busSleep.sleepingBus('AKAP', 200, true)

//Object Composion 

class Developer {
    constructor(name) {
        this.name = name;

    }
    commitChanges() {
        console.log(`${this.name} is commit changes `)
    }
}

function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI `)
        }
    }
}
function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} is building API`)
        }
    }
}
function canDeploy(developer) {
    return {
        deployApp: () => {
            console.log(`${developer.name} is Deploying app`)
        }
    }
}

function createFrontEndDeveloper(name) {
    const developer = new Developer(name)
    return Object.assign(developer, canBuildUI(developer))
}

function createBackEndDeveloper(name) {
    const developer = new Developer(name)
    return Object.assign(developer, canBuildAPI(developer))
}

function createDevOpsDeveloper(name) {
    const developer = new Developer(name)
    return Object.assign(developer, canDeploy(developer))
}

function createFullStackDeveloper(name) {
    const developer = new Developer(name)
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeploy(developer))
}

const frontEndDev = createFrontEndDeveloper('Zaki')
frontEndDev.commitChanges();
frontEndDev.buildUI()
console.log(`is ${frontEndDev.name} developer ? `, frontEndDev instanceof Developer)

const fullStackDev = createFullStackDeveloper('Henky')
fullStackDev.commitChanges();
fullStackDev.buildUI();
fullStackDev.buildAPI();
fullStackDev.deployApp();
console.log(`is ${fullStackDev.name} developer ?`, fullStackDev instanceof Developer)