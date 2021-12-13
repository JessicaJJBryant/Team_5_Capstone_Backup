/*
JAVASCRIPT TABLE OF CONTENTS:
Lines 10-57 deedsArray
58-59 deed1 & deed2 constants
63 getRandomDeed function
71 event listener
80 Button-&-Form functions

*/

// ARRAY of DEEDS
/* Note: if we decide to go with a multiple random result with different categories, we could put it in an object like this:
const deeds = {
    'general': ['deed0', 'deed1', 'deed3', etc],
    'crazy': ['deed0', 'deed1', 'deed3', etc],
    'fancy': ['deed0', 'deed1', 'deed3', etc]
};
For now, though, I'm going to put them all in one array. We can either do just one random card or multiple random cards from the same array.
*/
const deedsArray = [
    'Volunteer for an hour at an organization of your choice. This good deed brought to you from Boys and Girls Club of America, help us serve more kids and teens more often.',
    'Take a short walk today. When you are outside, stop and look around you. Take time to appreciate nature. This moment of reflection brought to you by the Nature Conservancy Project, join us in protecting our natural world by becoming a member today.',
    'Today is a great day to donate blood! This good deed brought to you by the American Red Cross, each pint of blood you donate can save THREE lives, find your nearest donation site at redcrossblood.org/give.html/find-drive.',
    'Turn the water tap off when you’re shaving, brushing your teeth, or scrubbing the dishes – every drop counts. This good deed brought to you by the Save the Water Foundation, helping us save the water around the world one home at a time.',
    'Hold the door open for a stranger. This good deed brought to you today from Walmart, Save Money. Live Better.',
    'Traffic can get the best of us all. Allow a fellow driver to merge into your lane. This good deed brought to you today from KY Department of Transportation, remember It’s not a race, leave some space.',
    'Tell someone today he/she/they look nice. This good deed brought to you from Armchair Experts Podcast, give it a listen.',
    'Hand someone a penny heads up today and say, “Here. I think this good luck belongs to you.” This good deed brought to you today from Animal Care of Stanford, your hometown vet for hometown pets.',
    'Compliment someone who waits on you today and then ask if you can tell their manager or supervisor the same thing. This good deed brought to you today from Blockbuster, still open in Alaska.',
    'Compliment someone’s nice feature (pretty eyes, beautiful hair, cool hat, “love the boots”, etc.) today. This good deed brought to you by Atari, the favorite gift of the ‘80s.',
    'Stop by a school and sponsor a treat for a student or class (whichever you can afford). This good deed nominated by Jim A. from New Jersey and brought to you by Crayola Crayons, making the sky blue and grass green since 1885.',
    'Go by a laundromat and leave a basket at the front with detergent, fabric softener, and as many quarters you can spare. This good deed brought to you by Downy, smells like a meadow all up in here.',
    'Write a letter or card to a family member or someone who is like family and tell this person all the good things you like about them and then give it to the person. This good deed brought to you today by Hallmark, give a card every day.',
    'When a telemarketer calls you today, instead of yelling at them or hanging up immediately, tell the person nicely that you do not want whatever they’re selling but that you hope they have a good day. This good deed brought to you by AT&T, yes, we still have phone plans.',
    'Donate your lightly worn old clothes or provide a clothes’ gift card (whichever you can afford) to a shelter in your area along with a card that says, “Our past does not determine our future.” This good task brought to you by TJMaxx; we have gift cards.',
    'Today is take your pet to work day. (If your employer will not go for this, take your pet somewhere fun that it’s never been before). (If you don’t have a pet, find a rock outside to draw a face on and take your pet rock to work. Introduce it to everyone.) This DailyDeed brought to you by grass, something all pets agree is pretty cool.',
    'The next time you’re shopping in a store where the cashier must also bag purchases, you bag. This DailyDeed brought to you by plastic bags, please don’t use us.',
    'Look for a person in a group that others don’t always support like you think they should. Go out of your way to say thank you to at least one person in this group. This DailyDeed brought to you by Snoop Dog and Martha Stewart (BFF; nuff said).',
    'Take your best talent (reading, fixing, or spending time is a talent if you’re not artsy-craftsy) to a nursing home. This DailyDeed driven by Time, making us all old if we stick around that long.',
    'Tell family/friends fun messages that you say your pets, small children, or famous person wanted you to tell the family/friend. Keep this going for at least 10 minutes. This good deed brought to you by pets and babies, no judgment since the beginning of time.',
    'If you have family/friends who tend to bring up bad memories even when the conversation starts off about a good memory (people with some very bad memories tend to do this a lot due to their trauma), be mindful and pull them back to the good memory. This DailyDeed brought by stories, we go where you drive us.',
    'Two day task: On day one, ask a loved one tell you of a favorite day. Ask questions and pay special attention to where the day occurred. Then find pictures that show or represent that special day for your loved one and make an art project or photo display for your loved one. This DailyDeed by school glue, for cool projects and for a satisfying peel-off after slathering all over your hands.',
    'Sneak a question in conversation with someone you love about a topic you know they like and listen for as long as the person wants to talk, with follow up questions if necessary. This DailyDeed driven by moms everywhere, and sure, we want to hear the entire plot of book you read when you were nine, Mom, or the latest Hallmark movie. We love you.',
    'If you have a loved one who tells you stories over and over again, it could be because they just need to tell you again (to remember, to learn, or just because). Next time, don’t lose patience; just listen to them. This good deed brought to you by your friends and family, just listen to us.',
    'Read this Dolly Parton quote and live it: “You’re allowed your own beliefs and your own faith, but you don’t have to use it like a weapon when it could be a tool….Make the good grow.” People Magazine Dec.13, 2021 pages 58 & 59. This DailyDeed brought by Dolly’s Imagination Library, a program that mails free, high-quality books to children from ages birth-5, no matter their family’s income.',
    'Reach out to a foster care non-profit and see how you can help the foster parents. Give what you can afford (time if nothing else; they’d probably love someone to mow the lawn or run an errand). This DailyDeed brought to you by the Child Welfare Information Gateway (Protecting Children; Strengthening Families). https://www.childwelfare.gov/',
    'Let a loved one (maybe a child or someone with child-like wonder) decide your plans to do together for the day (or as much time as you can spare). This DailyDeed brought by Kentucky State Parks, visit us today.',
    'Let a loved one (maybe a child or someone with child-like wonder) decide the menu for a meal you cook together. This DailyDeed brought to you by Hamburger Helper, yum with hamburger or tofu-burgers.',
    'Attend a charity event (a fancy event or any event really, including a virtual event) and make whatever donation you can afford. This DailyDeed thrown at you by confetti, throw us and celebrate today.',
    'Go shopping either online or in person at a store that donates to a cause. This DailyDeed brought to you by Goodwill, we are a cause.',
    'Donate donuts or pizzas to a public servant group of your choice. This DailyDeed sponsored by apples, a healthy option.',
    'Offer to do a chore for a younger or older person in your family or neighborhood. This DailyDeed sprayed at you by glass cleaners, you know some windows who want to be sprayed today.',
    'Let someone close to you teach you how to do something that they know how to do well (in their opinion) but you do not (in their opinion). (Optional: for extra laughs, pretend to be horrible at it.) This DailyDeed brought to you by skipping, the fun way to get from point A to point B.',
    'You know those store receipt surveys that we never fill out. Fill one out with all great scores AND positive comments. This DailyDeed brought to you by all customer service workers, give us praise please for our thankless job.',
    'Think of a time that someone did something nice for you, perhaps from years ago. Send that person a long note of gratitude. This good deed brought to you by cats & dogs, the 1 & 2 of pets.',
    'Go onto social media and make 10 kind comments. This DailyDeed brought to you by the Consortium of Extinct Cliches. (“Be kind. Rewind.”)',
    'Go onto social media and find one person who did something kind for you in the past (even years and years ago). Send that person a message (private or public) expressing how kind their actions were and how thankful you are. This DailyDeed punched at you by the schoolyard bully, who’s crying on the inside.'
];
const deed1 = document.querySelector('#deed1');
const deed2 = document.querySelector('#deed2');
// const button = document.querySelector('#showDeedButton');
// Since the button was loading the deedCard page, it refused to load up the random deeds too. Switching to a load event listener worked.

getRandomDeed = (array) => {
    const randomDeed1 = Math.floor(Math.random() * array.length);
    const randomDeed2 = Math.floor(Math.random() * array.length);
    deed1.innerText = array[randomDeed1];
    deed2.innerHTML= `<p>${array[randomDeed2]}</p><b>If these two DailyDeed options are not for you, refresh the webpage for two more options.</b>`;
}
// button.addEventListener("click", () =>
// getRandomTask(deedsArray));
window.addEventListener("load", () =>
getRandomDeed(deedsArray));


// deedCard Button-&-Form Code
const formButton = document.querySelector(`.open-form-button`);
const theForm = document.querySelector(`#the-form`)

formButton.onclick = function openForm() {
    theForm.style.display = "block";
    formButton.style.display = "none";
}
