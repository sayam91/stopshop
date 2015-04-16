$(document).ready(function(){

	var Quiz = {
		placeholderData: {
		  "totalquiz": {
		    "title": "How Daring Are You?",
		    "intro": "Are you quick to take on new adventures, or is your first instinct to wait and watch? Take this quiz to see how much you'd dare to do!",
		    "quiz": {
		      "questionset": [
		        {
		          "-num": "0",
		          "question": "You're at a friend's slumber party. Which of the following would you be willing to do?",
		          "choices": {
		            "option": [
		              {
		                "-value": "0",
		                "#text": "sleep with a stuffed animal"
		              },
		              {
		                "-value": "1",
		                "#text": "tell the group about an embarrassing moment"
		              },
		              {
		                "-value": "2",
		                "#text": "sing the alphabet song like an opera singer in front of everyone"
		              }
		            ]
		          }
		        },
		        {
		          "-num": "1",
		          "question": "Your class is on a field trip to the zoo, where you're greeted by three zookeepers with their animals. Which of the following animals would you most want to pet?",
		          "choices": {
		            "option": [
		              {
		                "-value": "0",
		                "#text": "tortoise"
		              },
		              {
		                "-value": "1",
		                "#text": "iguana"
		              },
		              {
		                "-value": "2",
		                "#text": "python"
		              }
		            ]
		          }
		        },
		        {
		          "-num": "2",
		          "question": "If you could go on any of these vacations, which would it be?",
		          "choices": {
		            "option": [
		              {
		                "-value": "0",
		                "#text": "an ocean cruise"
		              },
		              {
		                "-value": "1",
		                "#text": "a river-rafting trip"
		              },
		              {
		                "-value": "2",
		                "#text": "a rain forest safari"
		              }
		            ]
		          }
		        },
		        {
		          "-num": "3",
		          "question": "A friend and her family are going snow skiing. When they ask if you'd like to go along, you",
		          "choices": {
		            "option": [
		              {
		                "-value": "0",
		                "#text": "tell them there's a book you've just got to finish."
		              },
		              {
		                "-value": "1",
		                "#text": "ask if you can watch for a while."
		              },
		              {
		                "-value": "2",
		                "#text": "Ask, 'Where do I sign up for a lesson?'"
		              }
		            ]
		          }
		        },
		        {
		          "-num": "4",
		          "question": "Your best bud's having her birthday dinner at a sushi restaurant, but you've never eaten sushi before. You",
		          "choices": {
		            "option": [
		              {
		                "-value": "0",
		                "#text": "hope they have grilled cheese on the menu."
		              },
		              {
		                "-value": "1",
		                "#text": "decide to try the cucumber roll, since you know what cucumber tastes like."
		              },
		              {
		                "-value": "2",
		                "#text": "go for the raw sashimi tuna because your friend says it's yummy."
		              }
		            ]
		          }
		        },
		        {
		          "-num": "5",
		          "question": "Squeeek. It's the middle of the night, and you hear mouse sounds coming from your bedroom closet. You",
		          "choices": {
		            "option": [
		              {
		                "-value": "0",
		                "#text": "pull the blankets over your head and try to ignore the sounds."
		              },
		              {
		                "-value": "1",
		                "#text": "call for someone to come and turn on the light."
		              },
		              {
		                "-value": "2",
		                "#text": "tiptoe to your closet with a flashlight to try and spot the mouse."
		              }
		            ]
		          }
		        },
		        {
		          "-num": "6",
		          "question": "Which of the following sports would you most want to learn?",
		          "choices": {
		            "option": [
		              {
		                "-value": "0",
		                "#text": "In-line skating"
		              },
		              {
		                "-value": "1",
		                "#text": "snowboarding"
		              },
		              {
		                "-value": "2",
		                "#text": "platform diving"
		              }
		            ]
		          }
		        },
		        {
		          "-num": "7",
		          "question": "You and your friends agree to paint your faces to cheer on the local soccer team, the Rainbows. You",
		          "choices": {
		            "option": [
		              {
		                "-value": "0",
		                "#text": "wear green eye shadow on one eyelid and blue on the other."
		              },
		              {
		                "-value": "1",
		                "#text": "paint a rainbow on each cheek."
		              },
		              {
		                "-value": "2",
		                "#text": "paint rainbow stripes across your entire face and wear a fuzzy rainbow clown wig."
		              }
		            ]
		          }
		        },
		        {
		          "-num": "8",
		          "question": "Your dad has invited a Costa Rican business associate and his family to your home for dinner. Everyone is speaking Spanish. You",
		          "choices": {
		            "option": [
		              {
		                "-value": "0",
		                "#text": "smile a lot but don't say anything."
		              },
		              {
		                "-value": "1",
		                "#text": "talk to the guest in English, hoping they'll understand."
		              },
		              {
		                "-value": "2",
		                "#text": "try to use all the Spanish words that you know."
		              }
		            ]
		          }
		        },
		        {
		          "-num": "9",
		          "question": "If you had to choose, which career has the most appeal for you?",
		          "choices": {
		            "option": [
		              {
		                "-value": "0",
		                "#text": "airline pilot"
		              },
		              {
		                "-value": "1",
		                "#text": "race-car driver"
		              },
		              {
		                "-value": "2",
		                "#text": "trapeze artist"
		              }
		            ]
		          }
		        }
		      ]
		    },
		    "results": {
		      "mostly": [
		        {
		          "-value": "0",
		          "header": "Comfort zoner ",
		          "copy": "You're a levelheaded girl who likes having fun within your own comfort zone. Being adventurous is more likely to happen when you feel supported and sure of the outcome."
		        },
		        {
		          "-value": "1",
		          "header": "Bold but balanced ",
		          "copy": "You're confident enough to go for the gusto—but cautious enough to want to know the risks before you take the plunge. You prefer to be informed, weigh the pros and cons, and maybe even practice ahead of time. Then you'll dive in!"
		        },
		        {
		          "-value": "2",
		          "header": "Dare devil",
		          "copy": "Adventure? Bring it on! You're open and willing to try new things and not afraid to look a little inexperienced. After all, no one starts out as an expert—trying and learning is how you become one!"
		        }
		      ]
		    }
		  }
		},
		currentQuestion: 0,
	    correctTotal   : 0,
	    TotalQuestions : 0,
	    centerOffset   : 800,
	    animateSpeed   : 500,
	    QArray         : Array(),
	    RArray         : Array(),   
	    myReady        : true,
	    random         : true,
	    
	    nextStage      : {opacity: 0,left:'+='+800},
	    onStage        : {opacity: 1,left:'90px'},
	    prevStage      : {opacity: 0,left:'-='+800},
	    
	    loadXml: function(){
	    	var self = this;
		    // $.ajax({
		    //     // type: "GET",
		    //     // url: "js/data.json",
		    //     type: "POST",
		    //     url: "/echo/xml/",
		    //     dataType: "json",
		    //     data: {
		    //         json: self.placeholderData
		    //     },
		    //     success: self.xmlLoaded
		    // });
			self.xmlLoaded(self.placeholderData.totalquiz);
	    },

	    xmlLoaded: function(data){
		    var self = this;
		    self.makeHTML(data);
		    self.reset();
		},
		    
		reset: function(){
		    var self = this;
		    $(".questionSet").animate(self.nextStage, 0);
		    $(".results").animate(self.nextStage, 0);
		    
		    self.currentQuestion = 0;
		    self.correctTotal    = 0;
		    self.answerArray     = new Array();
		    self.nextQuestion();
		},

		nextQuestion: function(){  
  			var self = this;
  			$('.progressBar__progress').width((self.currentQuestion/self.totalQuestions)*100 + '%');
		    if(self.currentQuestion > 0){
	            $(self.QArray[self.currentQuestion-1]).animate(self.prevStage, self.animateSpeed);
		    }

		    if(self.currentQuestion < self.totalQuestions){
		        $(self.QArray[self.currentQuestion]).animate(self.onStage, self.animateSpeed);
		        var optionArray = $(self.QArray[self.currentQuestion]).find("li");
		    }       
		        
		    if(self.currentQuestion == self.totalQuestions){
		        var mostLikely = self.getResults(self.answerArray);
		        $(self.RArray[mostLikely]).animate(self.onStage, self.animateSpeed);
		        $('#container').css('background-image', 'url(img/bgResult.png)');
		    }
		},

	    /////////////////////////////////////////////////////
	    //  Create HTML elements
	    /////////////////////////////////////////////////////
		makeHTML: function(data) {
			var self		  = this,
		    	questionStage = $("<div/>", {id:"questionStage"}),
		    	quiz          = $("<ol/>",  {id:"allQuestions"});
            
		    var questionsetArray = data.quiz.questionset,
		    	Qshuffle         = self.shuffleArray(questionsetArray.length);
		        
		    self.totalQuestions = questionsetArray.length;

		    for (var A = 0; A < questionsetArray.length; A++) {
		        var num = (self.random)? Qshuffle[A]: A;
		        var questionset = $("<li/>",   {class: "questionSet", id: 'QS'+num}),
		        	question    = $("<span/>", {class: "question", text: questionsetArray[num].question}),
		        	choices     = $("<ol/>",   {class: "choices"});

		        var optionArray = questionsetArray[num].choices.option;
		        var Oshuffle    = self.shuffleArray(optionArray.length);
		        for (var B = 0; B < optionArray.length; B++) {
		            
		            var num2   = (self.random)? Oshuffle[B]: B;

		            var link   = $("<a/>",  {class: "option", href: "#"}),
		            	option = $("<li/>", {text: optionArray[num2]['#text']});

		            $(link).append(option);
		            $(choices).append(link);
		            
		            $(link).on('click', {
		            	self: self,
		                choice: optionArray[num2]['-value']
		            }, self.clickHandler);


		        }
		        
		        $(questionset).append(question).append(choices);              
		        $(quiz).append(questionset);
		                
		        self.QArray.push(questionset);
		    }

		    $('#Qstage').append(quiz);

		    var resultsArray = data.results.mostly;

		    for (var C = 0; C < resultsArray.length; C++) {
		    	var caption 	 	  = encodeURIComponent("I'm a "+ resultsArray[C].header +" shopper, what kind of shopper are you ? @stopshop"),
		        	results      	  = $("<div/>", {class: "results"}),
		        	resultsTitle 	  = $("<div/>",{class: "resultsTitle", text: resultsArray[C].header}),
		        	resultsBody 	  = $("<div/>",{class: "resultsBody bloc bloc--rotateLeft"}),
		        	resultsBodyInnner = $("<div/>",{class: "bloc--rotateRight", text: resultsArray[C].copy}), 
		        	shareFb		 	  = $('<a/>',{
	        			class: "shareFb bloc--rotateRight",
	        			text: "share",
	        			href: location.protocol + '//' + location.hostname + location.pathname + '?title='+ encodeURIComponent(resultsArray[C].header) +'&desc='+ encodeURIComponent(resultsArray[C].copy.substring(0,100)+'...'),
	        			click: function(e) {
	        				e.preventDefault();
							// FB.ui({
							// 	method: 'share_open_graph',
							// 	action_type: 'og.shares',
							// 	action_properties: JSON.stringify({
							// 	object: this.href
							// })
							// }, function(response){});
		        			FB.ui({
		        				method: 'share',
		        				href: location.href
		        			},
		        			function(response){});
						}
					}),
					shareTwitter = $('<a/>', {
						class: 'twitter-share-button',
						text: "Tweet",
						href: "https://twitter.com/intent/tweet?text="+caption
					});

				resultsBody.append(resultsBodyInnner).append(shareFb);
		        $(results).append(resultsTitle).append(resultsBody);
		        $('#Qstage').append(results);
		        

		        self.RArray.push(results);
		    }
		      window.fbAsyncInit = function() {
			FB.init({
				appId      : '475565745924741',
				xfbml      : true,
				version    : 'v2.3'
			});

			console.log(FB);
		};

		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return t;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));

		
			},

		clickHandler: function(e) {
            e.preventDefault();
            var self 	  = e.data.self,
            	ChoiceNum = e.data.choice;

		    if (self.answerArray[ChoiceNum] === undefined){
		        self.answerArray[ChoiceNum] = 1;
		    }else{
		        self.answerArray[ChoiceNum]++;
		    }
		            
		    self.currentQuestion ++;
		    self.nextQuestion();
		},

		getResults: function(rArray){
			var self 	   = this,		                
		    	returnNum  = 0,
		    	largestNum = 0;

		    for( var i = 0; i < rArray.length; i++){
		        if(rArray[i] > largestNum){
		            largestNum = rArray[i];
		            returnNum = i;
		        }
		    }
		    return returnNum;
		},
		                
		shuffleArray: function(num) {
		    var self = this,
		    	s = Array(),
		    	i = num;
		    while (i--) s.push(i);
		    return self.arrayShuffle(s);
		},

		arrayShuffle: function(oldArray) {
		    var newArray = oldArray.slice();
		    var len = newArray.length;
		    var i = len;
		    while (i--) {
		        var p = parseInt(Math.random() * len);
		        var t = newArray[i];
		        newArray[i] = newArray[p];
		        newArray[p] = t;
		    }
		    return newArray;
		}
	}

	Quiz.loadXml();
});