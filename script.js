/*chapter 6- q(1,2,3)

let age = prompt("enter your age:")
con = Number.parseInt(age)

if (con >= 18) {
    alert("you can drive.")
}
else if (con<18 && con>0) {
    alert("you can't drive.")

}
else{
    console.error("Invalid input");
    
}
check= true;
while (check) {
   res = confirm("Do you want to try again?")

    if (res==true) {

        let age = prompt("enter your age:")
        con = Number.parseInt(age)

        if (con >= 18) {
            alert("you can drive.")
        }
        else if (con<18 && con>0) {
            alert("you can't drive.")

        }
        else{
            console.error("Invalid input");
            
        }
    }
    else if(res==false){
        break;
    }

    else {
        alert("invalid input")

    }
}*/

// que-2
// let num = prompt("Enter a number:");
// num = Number.parseInt(num);

// if (num>4) {
//     location.href = "https://google.com"

// } else {
//     alert("Please enter a valid number greater than 4.");
// }

// Que-3

// let color = prompt("enter color.")
// document.body.style.background = color

// Array of jokes

// Array of jokes


const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why don’t eggs tell jokes? They’d crack each other up.",
    "I don’t trust stairs. They’re always up to something.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why can't you hear a pterodactyl go to the bathroom? Because the 'P' is silent.",
    "Why did the bicycle fall over? It was two-tired!",
    "I'm reading a book about anti-gravity. It's impossible to put down.",
    "I would avoid the sushi if I was you. It’s a little fishy.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "Want to hear a joke about construction? I’m still working on it.",
    "I used to play piano by ear, but now I use my hands.",
    "Why don’t ants get sick? Because they have tiny ant-bodies.",
    "I only know 25 letters of the alphabet. I don’t know y.",
    "How does a penguin build its house? Igloos it together.",
    "Why don’t you ever see elephants hiding in trees? Because they’re so good at it.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "I'm on a seafood diet. I see food and I eat it.",
    "How do you organize a space party? You planet.",
    "Why did the chicken join a band? Because it had the drumsticks.",
    "What kind of shoes do ninjas wear? Sneakers.",
    "Why can't you give Elsa a balloon? Because she’ll let it go.",
    "I'm afraid for the calendar. Its days are numbered.",
    "How do you make a tissue dance? Put a little boogie in it!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call a belt made of watches? A waist of time.",
    "Why are skeletons so calm? Because nothing gets under their skin.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "How does a cucumber become a pickle? It goes through a jarring experience.",
    "I'm terrified of elevators, so I'm going to start taking steps to avoid them.",
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
    "Why can't you trust an atom? Because they make up everything.",
    "Why did the coffee file a police report? It got mugged.",
    "Why don't crabs give to charity? Because they’re shellfish.",
    "Did you hear about the guy who invented Lifesavers? He made a mint!",
    "I used to be addicted to soap, but I’m clean now.",
    "What do you call a factory that makes good products? A satisfactory.",
    "I’ve just written a song about tortillas; actually, it’s more of a rap.",
    "Why did the computer go to the doctor? It had a virus.",
    "Why do cows wear bells? Because their horns don’t work.",
    "What do you get when you cross a snowman with a dog? Frostbite.",
    "I used to be a baker, but I couldn’t make enough dough.",
    "What do you call a lazy kangaroo? A pouch potato.",
    "How do you make holy water? You boil the hell out of it.",
    "I used to hate facial hair, but then it grew on me.",
    "Why do seagulls fly over the ocean? Because if they flew over the bay, they’d be bagels.",
    "What did one plate say to the other plate? Lunch is on me.",
    "Why don't some couples go to the gym? Because some relationships don’t work out.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "How does Moses make his coffee? Hebrews it.",
    "Why are elevator jokes so classic and good? They work on so many levels.",
    "What kind of car does a sheep drive? A Lamborghini.",
    "Why are ghosts bad at lying? Because they are too transparent.",
    "What did the buffalo say to his son when he dropped him off at school? Bison.",
    "What do you call an alligator in a vest? An investigator.",
    "Why can't a nose be 12 inches long? Because then it would be a foot.",
    "I used to be a banker, but I lost interest.",
    "Why do chickens sit on eggs? Because they don't have chairs.",
    "What did the fish say when it hit the wall? Dam.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "What did the grape do when he got stepped on? Nothing but let out a little wine.",
    "I'm reading a book on anti-gravity. It’s impossible to put down.",
    "How do you make a lemon drop? Just let it fall.",
    "Why did the bicycle collapse? It was two-tired.",
    "What did the zero say to the eight? Nice belt!",
    "What’s brown and sticky? A stick.",
    "Why was the math book sad? It had too many problems.",
    "I got hit in the head with a can of soda, but I’m okay because it was a soft drink.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "Did you hear about the guy who invented the knock-knock joke? He won the ‘no-bell’ prize.",
    "What did the ocean say to the shore? Nothing, it just waved.",
    "Why don’t you ever see elephants hiding in trees? Because they’re so good at it.",
    "What do you call a pile of cats? A meow-tain.",
    "Why do bananas have to put on sunscreen before they go to the beach? Because they might peel.",
    "Why don’t you ever see pigs hiding in trees? Because they can’t climb!",
    "I used to be addicted to the hokey pokey, but I turned myself around.",
    "How do you organize a space party? You planet.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "How many tickles does it take to make an octopus laugh? Ten-tickles.",
    "Why don’t scientists trust atoms? Because they make up everything!",
    "What did the big flower say to the little flower? Hey, bud!",
    "Why did the golfer bring an extra pair of pants? In case he got a hole in one.",
    "Why don’t ants get sick? Because they have tiny ant-bodies.",
    "What do you call a magic dog? A labracadabrador.",
    "What do you call a bear with no teeth? A gummy bear.",
    "How does a penguin build its house? Igloos it together."

];


function showJoke(event) {
    event.preventDefault();
    const jokeElement = document.getElementById('jokeText');
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeElement.textContent = jokes[randomIndex];

}


