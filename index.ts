import inquirer from "inquirer";

type wordCount = (str: string) => void;

const wordCount: wordCount =(string) => {
    const words = string.trim().split(/\s+/g);

    console.log("Total Words In the para Are: " + words.length);
    
}

const getinput =async () => {
    const userInput = await inquirer.prompt([
        {
            type: "input",
            name: "para",
            message: "Enter your para: "
        }
    ]);
    await wordCount(userInput.para);
}

await getinput();
