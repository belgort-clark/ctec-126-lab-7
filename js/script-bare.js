// script.js
// lab no. 7

// The displayQuotesPanel function is used to display a random quote from the array in the HTML element that has the ID of 'quotesPanel'
function displayQuotesPanel() {
    console.log('Quotes function called');
    // Call the clear() function with 'quotesPanel' as a paremeter 
    // your code goes here (remove this prior to submission)

    // Create a variable named 'quotesPanel' that is a hanlde to the element with the ID of 'quotesPanel'
    // your code goes here (remove this prior to submission)

    // This is the array of quotes that you are to use
    var quotes = ["Nothing is as easy as it looks","Everything takes longer than you think","Anything that can go wrong will go wrong", "If there is a possibility of several things going wrong, the one that will cause the most damage will be the one to go wrong", "If there is a worse time for something to go wrong, it will happen then.","If anything simply cannot go wrong, it will anyway","If everything seems to be going well, you have obviously overlooked something.", "Nature always sides with the hidden flaw", "It is impossible to make anything foolproof because fools are so ingenious.", "Whenever you set out to do something, something else must be done first", "Every solution breeds new problems.", "Trust everybody ... then cut the cards", "Two wrongs are only the beginning", "If at first you don't succeed, destroy all evidence that you tried", "To succeed in politics, it is often necessary to rise above your principles", "Exceptions prove the rule ... and wreck the budget", "Success always occurs in private, and failure in full view"];

    // Create a variable named 'random' and assign it a random number. This number will be used to index into the quotes array
    // your code goes here (remove this prior to submission)

    // Set the innerHTML of the quotesPanel to the quote and also include <p> tags around it
    // your code goes here (remove this prior to submission)

}

function displayNewsPanel() {
    var newsItems = document.getElementById('newsPanel');
	var news = [['May 22, 2018','Really Big News','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum iusto provident sit vero, eius fugiat autem laboriosam, molestiae, quidem incidunt ducimus reiciendis fugit illo quisquam. Autem, veniam voluptas officia incidunt.','http://clark.edu'],['May 30, 2018','OK News','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum iusto provident sit vero, eius fugiat autem laboriosam, molestiae, quidem incidunt ducimus reiciendis fugit illo quisquam. Autem, veniam voluptas officia incidunt.','http://clark.edu'],['June 14, 2018','GREAT NEWS!','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum iusto provident sit vero, eius fugiat autem laboriosam, molestiae, quidem incidunt ducimus reiciendis fugit illo quisquam. Autem, veniam voluptas officia incidunt.','http://clark.edu'],['July 2, 2018','Welcome Back','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum iusto provident sit vero, eius fugiat autem laboriosam, molestiae, quidem incidunt ducimus reiciendis fugit illo quisquam. Autem, veniam voluptas officia incidunt.','http://clark.edu']];

    var output = '';

	for (var i = 0; i < news.length; i++) {
		 output += '<p><h3>' + news[i][1] + ' - ' + news[i][0] + '</h3>' + '<br>' + news[i][2] + '</p>';
         output += '<p><a href="' + news[i][3] + '">Read more ></a></p>';
    }

    newsItems.innerHTML = output;
}

function displayFeaturedStudentPanel() {
    clear('featuredStudentPanel');
    var featuredStudent = document.getElementById('featuredStudentPanel');
    var featuredStudents = [
        ['Tommy Henriksen','Tommy Henriksen (born February 21, 1964) is an American musician from Port Jefferson, New York best known for his work as a guitarist, bassist and songwriter with Alice Cooper, Hollywood Vampires and German metal band Warlock. He has also fronted punk rockers P.O.L. and released several albums as a solo artist. In addition, Henriksen is a sought-after songwriter, arranger, producer and mixer who has worked with artists such as Lady Gaga, Meat Loaf, Lou Reed, Halestorm, Kesha, and Daughtry. Henriksen is currently based out of Zurich, Switzerland where he lives with his family.','img/student1.jpg'],
        ['John Bonham','John Henry Bonham (31 May 1948 – 25 September 1980) was an English musician and songwriter, best known as the drummer for the British rock band Led Zeppelin. Bonham was esteemed for his speed, power, fast bass drumming, distinctive sound, and "feel" for the groove. He is regarded as the greatest and most influential rock drummer of all time. Rolling Stone magazine ranked him number 1 in their list of the "100 Greatest Drummers of All Time."','img/student2.jpg'],
        ['Dave Matthews','David John Matthews (born January 9, 1967) is a South African-born American singer-songwriter, musician and actor, best known as the lead vocalist, songwriter, and guitarist for the Dave Matthews Band. Matthews was born in Johannesburg, and moved frequently between South Africa, the United Kingdom, and the United States while growing up. Matthews mainly plays acoustic guitar, which he started playing at the age of nine.','img/student3.jpg'],
        ['Alice Cooper','Alice Cooper (born Vincent Damon Furnier; February 4, 1948)is an American singer, songwriter, and actor whose career spans over fifty years. With his distinctive raspy voice and a stage show that features guillotines, electric chairs, fake blood, deadly snakes, baby dolls, and dueling swords, Cooper is considered by music journalists and peers alike to be "The Godfather of Shock Rock". He has drawn equally from horror films, vaudeville, and garage rock to pioneer a macabre and theatrical brand of rock designed to shock people.','img/student4.jpg']
        ];

        var output = '';

        var randomStudent = Math.floor(Math.random() * featuredStudents.length);
        output += '<img src="' + featuredStudents[randomStudent][2] + '"/>';
        output += '<div class="studentpic rounded mx-auto d-block">' + featuredStudents[randomStudent][0] + '</div>';
        output += '<p>' + featuredStudents[randomStudent][1] + '</p>';

        featuredStudent.innerHTML = output;
}

function clear(panelID) {
    console.log('clear!');
    var panel = document.getElementById(panelID);
    panel.innerHTML = '';
}

function stopIntervals(timer1, timer2) {
    console.log('Stopping intervals...');
	clearInterval(timer1);
	clearInterval(timer2);
	console.log('All intervals have been stopped');
}

window.onload = function() {
    displayQuotesPanel();
	displayNewsPanel();
	displayFeaturedStudentPanel();

	var quotesTimer = setInterval(displayQuotesPanel,15000);
	var featuredStudentTimer = setInterval(displayFeaturedStudentPanel,10000);

    var theLogo = document.getElementById('theLogo');
    theLogo.addEventListener('click', function() {
        stopIntervals(quotesTimer,featuredStudentTimer);
    });
}