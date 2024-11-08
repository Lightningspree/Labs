let name1 = "Jarvis Murray";
let name2 = "Grand Chirpus"
let name3 = "Lorem Ipsum";

if (name1.length > name2.length) {
    if (name1.length > name3.length) {
        console.log(name1 + " has the longest name");
    } else if (name1.length < name3.length) {
        console.log(name3 + " has the longest name");
    } else {
        console.log(name1 + " and " + name3 + "  tie for the longest name.");
    }
}
else if (name1.length < name2.length) {
    if (name2.length > name3.length) {
        console.log(name2 + " has the longest name");
    } else if (name2.length < name3.length) {
        console.log(name3 + " has the longest name");
    } else {
        console.log(name2 + " and " + name3 + "  tie for the longest name.");
    }
} else {
    if (name1 === name3) {
        console.log("All names are same length.");
    } else {
    console.log(name1 + " and " + name2 + "  tie for the longest name.");
    }
}