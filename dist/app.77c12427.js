// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../Florian/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../Florian/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../Florian/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/css/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../Florian/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/one-liner-joke/jokes.json":[function(require,module,exports) {
module.exports = [{
  "body": "A recent study has found that women who carry a little extra weight live longer than the men who mention it.",
  "tags": ["attitude", "life", "men", "women"]
}, {
  "body": "Today a man knocked on my door and asked for a small donation towards the local swimming pool. I gave him a glass of water.",
  "tags": ["life", "sport"]
}, {
  "body": "If i had a dollar for every girl that found me unattractive, they would eventually find me attractive.",
  "tags": ["beauty", "women"]
}, {
  "body": "When wearing a bikini, women reveal 90 % of their body... men are so polite they only look at the covered parts.",
  "tags": ["men", "sarcastic", "women"]
}, {
  "body": "I find it ironic that the colors red, white, and blue stand for freedom until they are flashing behind you.",
  "tags": ["life"]
}, {
  "body": "Just read that 4,153,237 people got married last year, not to cause any trouble but shouldn't that be an even number?",
  "tags": ["life", "marriage", "people"]
}, {
  "body": "I want to die peacefully in my sleep, like my grandfather.. Not screaming and yelling like the passengers in his car.",
  "tags": ["car", "sarcastic"]
}, {
  "body": "Apparently I snore so loudly that it scares everyone in the car I'm driving.",
  "tags": ["car", "life", "sarcastic"]
}, {
  "body": "Life is all about perspective. The sinking of the Titanic was a miracle to the lobsters in the ship's kitchen.",
  "tags": ["animal", "attitude"]
}, {
  "body": "Life is like toilet paper, you're either on a roll or taking shit from some asshole.",
  "tags": ["dirty", "life"]
}, {
  "body": "If I ever need a heart transplant, I'd want my ex's. It's never been used.",
  "tags": ["love", "sarcastic", "women"]
}, {
  "body": "My therapist says I have a preoccupation with vengeance. We'll see about that.",
  "tags": ["attitude", "life"]
}, {
  "body": "My wife and I were happy for twenty years. Then we met.",
  "tags": ["marriage"]
}, {
  "body": "I think my neighbor is stalking me as she's been googling my name on her computer. I saw it through my telescope last night.",
  "tags": ["IT", "sarcastic", "stupid"]
}, {
  "body": "You're not fat, you're just... easier to see.",
  "tags": ["attitude", "life", "motivational"]
}, {
  "body": "Money talks ...but all mine ever says is good-bye.",
  "tags": ["money"]
}, {
  "body": "You know that tingly little feeling you get when you like someone? That's your common sense leaving your body.",
  "tags": ["intelligence", "life", "love"]
}, {
  "body": "Is your ass jealous of the amount of shit that just came out of your mouth?",
  "tags": ["insults"]
}, {
  "body": "Relationships are a lot like algebra.  Have you ever looked at your X and wondered Y?",
  "tags": ["life", "love"]
}, {
  "body": "Strong people don't put others down. They lift them up and slam them on the ground for maximum damage.",
  "tags": ["life", "sarcastic"]
}, {
  "body": "You know you're ugly when it comes to a group picture and they hand you the camera.",
  "tags": ["life", "rude", "ugly"]
}, {
  "body": "Artificial intelligence is no match for natural stupidity.",
  "tags": ["intelligence", "stupid"]
}, {
  "body": "I'm great at multitasking. I can waste time, be unproductive, and procrastinate all at once.",
  "tags": ["life", "time", "work"]
}, {
  "body": "Isn't it great to live in the 21st century? Where deleting history has become more important than making it.",
  "tags": ["attitude"]
}, {
  "body": "That awkward moment when you leave a store without buying anything and all you can think is \"act natural, you're innocent\".",
  "tags": ["life", "money"]
}, {
  "body": "Before I criticize a man, I like to walk a mile in his shoes. That way, when I do criticize him, I'm a mile away and I have his shoes.",
  "tags": ["attitude", "communication", "life"]
}, {
  "body": "I hate when I am about to hug someone really sexy and my face hits the mirror.",
  "tags": ["hate", "life", "sarcastic"]
}, {
  "body": "I changed my password to \"incorrect\". So whenever I forget what it is the computer will say \"Your password is incorrect\".",
  "tags": ["attitude", "IT", "life"]
}, {
  "body": "If you think nobody cares whether you're alive, try missing a couple of payments.",
  "tags": ["life", "money"]
}, {
  "body": "I'm not saying I hate you, but I would unplug your life support to charge my phone.",
  "tags": ["attitude", "hate", "life", "rude", "stupid"]
}, {
  "body": "Childs experience: if a mother is laughing at the fathers jokes, it means they have guests.",
  "tags": ["Father's Day", "marriage"]
}, {
  "body": "Telling a girl to calm down works about as well as trying to baptize a cat.",
  "tags": ["christian", "sarcastic", "women"]
}, {
  "body": "I started out with nothing, and I still have most of it.",
  "tags": ["attitude", "life"]
}, {
  "body": "I asked God for a bike, but I know God doesn't work that way. So I stole a bike and asked for forgiveness.",
  "tags": ["God"]
}, {
  "body": "When I call a family meeting I turn off the house wifi and wait for them all to come running.",
  "tags": ["attitude", "family", "life"]
}, {
  "body": "I used to think I was indecisive, but now I'm not too sure.",
  "tags": ["attitude", "life"]
}, {
  "body": "Going to church doesn't make you a Christian any more than standing in a garage makes you a car.",
  "tags": ["car", "christian"]
}, {
  "body": "A fine is a tax for doing wrong. A tax is a fine for doing well.",
  "tags": ["political"]
}, {
  "body": "Never laugh at your girlfriends choices... your one of them.",
  "tags": ["love", "women"]
}, {
  "body": "Intelligence is like an underwear. It is important that you have it, but not necessary that you show it off.",
  "tags": ["intelligence", "life"]
}, {
  "body": "When my boss asked me who is the stupid one, me or him? I told him everyone knows he doesn't hire stupid people.",
  "tags": ["attitude", "men", "work"]
}, {
  "body": "When an employment application asks who is to be notified in case of emergency, I always write, &quot;A very good doctor&quot;.",
  "tags": ["attitude", "doctor", "life", "work"]
}, {
  "body": "She wanted a puppy. But I didn't want a puppy. So we compromised and got a puppy.",
  "tags": ["animal", "attitude", "women"]
}, {
  "body": "Moses was leading his people through the desert for 40 years. It seems, even in Biblical times men avoided asking the way.",
  "tags": ["christian", "men"]
}, {
  "body": "I haven't spoken to my wife for 18 months- I don't like to interrupt her.",
  "tags": ["marriage", "men", "women"]
}, {
  "body": "I can totally keep secrets. It's the people I tell them to that can't.",
  "tags": ["attitude", "life", "sarcastic"]
}, {
  "body": "If you're not supposed to eat at night, why is there a light bulb in the refrigerator?",
  "tags": ["attitude", "life", "women"]
}, {
  "body": "Love is telling someone to go to hell and worrying about them getting there safely.",
  "tags": ["life", "love"]
}, {
  "body": "Entered what I ate today into my new fitness app and it just sent an ambulance to my house.",
  "tags": ["attitude", "food", "IT", "life"]
}, {
  "body": "My wife is so negative. I remembered the car seat, the stroller, AND the diaper bag. Yet all she can talk about is how I forgot the baby.",
  "tags": ["car", "kids", "men"]
}, {
  "body": "I am a nobody, nobody is perfect, therefore I am perfect.",
  "tags": ["attitude", "motivational"]
}, {
  "body": "Politicians and diapers have one thing in common. They should both be changed regularly, and for the same reason.",
  "tags": ["political"]
}, {
  "body": "If 4 out of 5 people SUFFER from diarrhea ... does that mean that one enjoys it?",
  "tags": ["life", "people"]
}, {
  "body": "The grass may be greener on the other side but at least you don't have to mow it.",
  "tags": ["attitude", "sarcastic"]
}, {
  "body": "I named my hard drive \"dat ass\" so once a month my computer asks if I want to 'back dat ass up'.",
  "tags": ["IT", "life"]
}, {
  "body": "Did you know that dolphins are so smart that within a few weeks of captivity, they can train people to stand on the very edge of the pool and throw them fish?",
  "tags": ["animal", "people"]
}, {
  "body": "A clean house is the sign of a broken computer.",
  "tags": ["IT", "life", "sarcastic"]
}, {
  "body": "What's the difference between your wife and your job? After five years your job will still suck.",
  "tags": ["dirty", "marriage", "women"]
}, {
  "body": "I'd like to see things from your point of view but I can't seem to get my head that far up my ass.",
  "tags": ["attitude", "hate", "insults", "rude"]
}, {
  "body": "Can I have your picture so I can show Santa what I want for Christmas?",
  "tags": ["beauty", "Christmas", "flirty", "love"]
}, {
  "body": "If I wanted to kill myself I'd climb your ego and jump to your IQ.",
  "tags": ["insults", "intelligence", "sarcastic"]
}, {
  "body": "Outvoted 1-1 by my wife again.",
  "tags": ["marriage", "sarcastic", "women"]
}, {
  "body": "Any married man should forget his mistakes, there's no use in two people remembering the same thing.",
  "tags": ["marriage", "men", "mistake", "women"]
}, {
  "body": "I sometimes watch birds and wonder \"If I could fly who would I shit on?\"",
  "tags": ["animal", "attitude", "life"]
}, {
  "body": "What's worse than waking up at a party and finding a penis drawn on your face? Finding out it was traced.",
  "tags": ["dirty", "life"]
}, {
  "body": "If you see me smiling it's because I'm thinking of doing something evil or naughty. If you see me laughing it's because I've already done it.",
  "tags": ["attitude", "sarcastic"]
}, {
  "body": "America is a country which produces citizens who will cross the ocean to fight for democracy but won't cross the street to vote.",
  "tags": ["fighting", "political"]
}, {
  "body": "How do I disable the autocorrect function on my wife?",
  "tags": ["marriage", "women"]
}, {
  "body": "I would give my dad what he really wants on Father's Day, but I can't afford to move out yet.",
  "tags": ["Father's Day", "kids"]
}, {
  "body": "Two wrongs don't make a right, take your parents as an example.",
  "tags": ["family", "insults", "rude", "sarcastic"]
}, {
  "body": "Regular naps prevent old age, especially if you take them while driving.",
  "tags": ["age", "life", "retirement"]
}, {
  "body": "Whoever said nothing is impossible is a liar. I've been doing nothing for years.",
  "tags": ["attitude", "life", "motivational"]
}, {
  "body": "Waking up this morning was an eye-opening experience.",
  "tags": ["attitude", "fighting"]
}, {
  "body": "One day you're the best thing since sliced bread. The next, you're toast.",
  "tags": ["attitude", "food", "life"]
}, {
  "body": "I'm really good at stuff until people watch me do that stuff.",
  "tags": ["life", "sarcastic"]
}, {
  "body": "Thanks for explaining the word &quot;many&quot; to me, it means a lot.",
  "tags": ["intelligence", "mistake", "stupid"]
}, {
  "body": "Is google a woman? Because it won't let you finish your sentence without coming up with other suggestions.",
  "tags": ["life", "women"]
}, {
  "body": "I saw a sign that said &quot;Watch for children&quot; and I thought, &quot;That sounds like a fair trade&quot;.",
  "tags": ["kids", "money"]
}, {
  "body": "There are three kinds of people: Those who can count and those who can't.",
  "tags": ["life", "people"]
}, {
  "body": "People used to laugh at me when I would say &quot;I want to be a comedian&quot;, well nobody's laughing now.",
  "tags": ["communication", "life", "sarcastic", "work"]
}, {
  "body": "Never get on one knee for a girl who won't get on two for you.",
  "tags": ["love", "marriage"]
}, {
  "body": "A good wife always forgives her husband when she's wrong.",
  "tags": ["marriage", "women"]
}, {
  "body": "My favorite mythical creature? The honest politician.",
  "tags": ["political"]
}, {
  "body": "Wife: \"I look fat. Can you give me a compliment?\" Husband: \"You have perfect eyesight.\"",
  "tags": ["insults", "marriage"]
}, {
  "body": "I eat my tacos over a Tortilla. That way when stuff falls out, BOOM, another taco.",
  "tags": ["attitude", "food"]
}, {
  "body": "Take my advice \u2014 I'm not using it.",
  "tags": ["communication", "sarcastic"]
}, {
  "body": "Top 3 situations that require witnesses:    1) Crimes  2) Accidents   3) Marriages    Need I say more?",
  "tags": ["marriage", "sarcastic"]
}, {
  "body": "There are two rules for success: 1) Don't tell all you know.",
  "tags": ["money", "success"]
}, {
  "body": "Time waits for no man, time is obviously a woman.",
  "tags": ["men", "time", "women"]
}, {
  "body": "I hate people who use big words just to make themselves look perspicacious.",
  "tags": ["hate", "sarcastic", "stupid"]
}, {
  "body": "I asked my wife if she ever fantasizes about me, she said yes - about me taking out the trash, mowing the lawn, and doing the dishes.",
  "tags": ["marriage", "men", "women", "work"]
}, {
  "body": "Team work is important; it helps to put the blame on someone else.",
  "tags": ["attitude", "life", "work"]
}, {
  "body": "Friends wave red flags when you have a bad idea.  Real friends pick up a camera.",
  "tags": ["attitude", "friendship"]
}, {
  "body": "My job is secure. No one else wants it.",
  "tags": ["sarcastic", "work"]
}, {
  "body": "Give me ambiguity or give me something else.",
  "tags": []
}, {
  "body": "My wife had her driver's test the other day. She got 8 out of 10. The other 2 guys jumped clear.",
  "tags": ["car", "women"]
}, {
  "body": "If you can smile when things go wrong, you have someone in mind to blame.",
  "tags": ["attitude", "people"]
}, {
  "body": "Why is the day that you do laundry, cook, clean, iron and so on, called a day off?",
  "tags": ["attitude", "motivational", "sarcastic"]
}, {
  "body": "Wifi went down during family dinner tonight. One kid started talking and I didn't know who he was.",
  "tags": ["IT", "kids", "life"]
}, {
  "body": "I've been repeating the same mistakes in life for so long now, I think I'll start calling them traditions.",
  "tags": ["attitude", "life", "mistake"]
}, {
  "body": "Your family tree must be a cactus because everybody on it is a prick.",
  "tags": ["family", "insults"]
}, {
  "body": "For maximum attention, nothing beats a good mistake.",
  "tags": ["attitude", "life", "mistake", "sarcastic"]
}, {
  "body": "When I see ads on TV with smiling, happy housewives using a new cleaning product, the only thing I want to buy are the meds they must be on.",
  "tags": ["attitude", "happiness", "life", "sarcastic"]
}, {
  "body": "Nothing is fool proof to a sufficiently talented fool.",
  "tags": ["motivational"]
}, {
  "body": "The difference between \"Girlfriend\" and \"Girl Friend\" is that little space in between we call the \"Friend Zone\".",
  "tags": ["friendship", "love", "sarcastic"]
}, {
  "body": "I bought a vacuum cleaner six months ago and so far all it's been doing is gathering dust.",
  "tags": ["mistake"]
}, {
  "body": "Women spend more time wondering what men are thinking than men spend thinking.",
  "tags": ["attitude", "men", "women"]
}, {
  "body": "My superpower is making people laugh. Which would be great if I was trying to be funny.",
  "tags": ["attitude", "sarcastic"]
}, {
  "body": "It is much easier to apologize than to ask permission.",
  "tags": ["life", "marriage"]
}, {
  "body": "Isn't it weird how when a cop drives by you feel paranoid instead of protected.",
  "tags": ["car", "life", "motorcycle"]
}, {
  "body": "My ex wrote to me: Can you delete my number? I responded: Who is this?",
  "tags": ["marriage", "men", "women"]
}, {
  "body": "Your birth certificate is an apology letter from the condom factory.",
  "tags": ["insults"]
}, {
  "body": "Dear alcohol, We had a deal where you would make me funnier, smarter, and a better dancer... I saw the video... we need to talk.",
  "tags": ["alcohol"]
}, {
  "body": "Every time you talk to your wife, your mind should remember that... 'This conversation will be recorded for Training and Quality purpose'",
  "tags": ["marriage", "men", "women"]
}, {
  "body": "Escalators don't break down... they just turn into stairs.",
  "tags": ["life"]
}, {
  "body": "The reason grandchildren and grandparents get along so well is because they have a common \"enemy\".",
  "tags": ["kids", "retirement"]
}, {
  "body": "Never tell your problems to anyone...20% don't care and the other 80% are glad you have them...",
  "tags": ["attitude", "life", "people"]
}, {
  "body": "Being a hypochondriac is going to save my life one of these days",
  "tags": ["life", "sarcastic", "success"]
}, {
  "body": "A conclusion is the part where you got tired of thinking.",
  "tags": ["attitude", "intelligence", "sarcastic"]
}, {
  "body": "What makes men chase women they have no intention of marrying? The same urge that makes dogs chase cars they have no intention of driving.",
  "tags": ["animal", "men"]
}, {
  "body": "Yo're so ugly, when your mom dropped you off at school she got a fine for littering.",
  "tags": ["insults", "school", "ugly"]
}, {
  "body": "My son asked me what it's like to be married so I told him to leave me alone and when he did I asked him why he was ignoring me.",
  "tags": ["kids", "marriage", "sarcastic"]
}, {
  "body": "My parents won't say which of their six kids they love the best, but they have told me I finished just out of the top five.",
  "tags": ["family", "kids", "love", "sarcastic"]
}, {
  "body": "Good health is merely the slowest possible rate at which one can die.",
  "tags": ["health", "life"]
}, {
  "body": "My girlfriends dad asked me what I do. Apparently, \"your daughter\" wasn't the right answer.",
  "tags": ["life", "sex"]
}, {
  "body": "Hospitality: making your guests feel like they're at home, even if you wish they were.",
  "tags": ["life"]
}, {
  "body": "Nothing ruins a Friday more than an understanding that today is Tuesday.",
  "tags": ["attitude", "life", "work"]
}, {
  "body": "The lesson of Halloween is that pretending to be something you're not will lead to a sweet reward.",
  "tags": ["attitude", "Halloween", "sarcastic"]
}, {
  "body": "Whatever you do always give 100 %. Unless you are donating blood.",
  "tags": ["life", "motivational", "sarcastic"]
}, {
  "body": "Children in the back seats of cars cause accidents, but accidents in the back seats of cars cause children.",
  "tags": ["car", "kids", "sex"]
}, {
  "body": "My girlfriend told me to go out and get something that makes her look sexy... so I got drunk.",
  "tags": ["alcohol", "men", "sarcastic", "sex", "women"]
}, {
  "body": "I can't believe I got fired from the calendar factory. All I did was take a day off.",
  "tags": ["puns", "work"]
}, {
  "body": "A TV can insult your intelligence, but nothing rubs it in like a computer.",
  "tags": ["intelligence", "IT", "life"]
}, {
  "body": "There are few things I enjoy more than picking an argument with my girlfriend when she has the hiccups.",
  "tags": ["attitude", "friendship", "success"]
}, {
  "body": "You must have been born on a highway because that's where most accidents happen.",
  "tags": ["insults"]
}, {
  "body": "It's better to let someone think you are an Idiot than to open your mouth and prove it.",
  "tags": ["insults", "rude"]
}, {
  "body": "A computer once beat me at chess, but it was no match for me at kick boxing.",
  "tags": ["IT"]
}, {
  "body": "I like birthdays, but I think too many can kill you.",
  "tags": ["birthday"]
}, {
  "body": "How did I escape Iraq? Iran.",
  "tags": ["puns"]
}, {
  "body": "Before having a kid the most important thing to ask yourself is &quot;Am I ready to watch the exact same cartoon on repeat for the next 4 years?&quot;",
  "tags": ["attitude", "kids"]
}, {
  "body": "Why is it everything I love is either unhealthy, addicting or has multiple restraining orders against me?",
  "tags": ["attitude", "life", "love", "sarcastic"]
}, {
  "body": "The only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
  "tags": ["dirty", "insults"]
}, {
  "body": "I wasn't originally going to get a brain transplant, but then I changed my mind.",
  "tags": ["puns"]
}, {
  "body": "I have never understood why women love cats. Cats are independent, they don't listen, they don't come in when you call, they like to stay out all night, and when they're home they like to be left alone and sleep. In other words, every quality that women hate in a man, they love in a cat.",
  "tags": ["animal", "hate", "love", "men", "women"]
}, {
  "body": "Adults are always asking little kids what they want to be when they grow up because they're looking for ideas.",
  "tags": ["kids"]
}, {
  "body": "Dear Couples Who Fight In Public, stop trying to whisper and would it kill you to include some backstory.",
  "tags": ["attitude", "stupid"]
}, {
  "body": "The depressing thing about tennis is that no matter how good I get, I'll never be as good as a wall.",
  "tags": ["life", "sport"]
}, {
  "body": "I married Miss Right. I just didn't know her first name was Always.",
  "tags": ["marriage", "women"]
}, {
  "body": "I'd tell you a chemistry joke but I know I wouldn't get a reaction.",
  "tags": ["puns"]
}, {
  "body": "If I'd shot you sooner, I'd be out of jail by now.",
  "tags": ["rude", "sarcastic"]
}, {
  "body": "Sometimes the first step to forgiveness, is realising the other person was born an idiot.",
  "tags": ["attitude", "rude"]
}, {
  "body": "There is a new trend in our office; everyone is putting names on their food. I saw it today, while I was eating a sandwich named Kevin.",
  "tags": ["life", "work"]
}, {
  "body": "When I told the doctor about my loss of memory, he made me pay in advance.",
  "tags": ["doctor", "life", "sarcastic"]
}, {
  "body": "Change is inevitable, except from a vending machine.",
  "tags": []
}, {
  "body": "I'm glad I know sign language, it's pretty handy.",
  "tags": ["life", "puns"]
}, {
  "body": "I need to start paying closer attention to stuff. Found out today my wife and I have separate names for the cat.",
  "tags": ["animal", "attitude", "marriage"]
}, {
  "body": "Why was Cinderella thrown off the basketball team? She ran away from the ball.",
  "tags": ["puns"]
}, {
  "body": "My wife and I always compromise. I admit I'm wrong and she agrees with me.",
  "tags": ["marriage"]
}, {
  "body": "Behind every great man is a woman rolling her eyes.",
  "tags": ["men", "women"]
}, {
  "body": "I didn't say it was your fault, I said I was blaming you.",
  "tags": ["sarcastic"]
}, {
  "body": "Any room is a panic room if you've lost your phone in it.",
  "tags": ["IT", "sarcastic"]
}, {
  "body": "I'm the kind of guy who stops the microwave at 1 second just to feel like a bomb defuser.",
  "tags": ["life"]
}, {
  "body": "Some people say \"If you can't beat them, join them\". I say \"If you can't beat them, beat them\", because they will be expecting you to join them, so you will have the element of surprise.",
  "tags": ["motivational", "people"]
}, {
  "body": "Where do they get the seeds to plant seedless watermelons?",
  "tags": ["life"]
}, {
  "body": "Hard work never killed anyone, but why take the chance?",
  "tags": ["life"]
}, {
  "body": "I was going to look for my missing watch, but I could never find the time.",
  "tags": ["attitude", "intelligence", "stupid"]
}, {
  "body": "Why is there so much blood in my alcohol system?",
  "tags": ["alcohol", "sarcastic"]
}, {
  "body": "People say money is not the key to happiness, but I always figured if you had enough money, you can have a key made.",
  "tags": ["happiness", "money", "people", "sarcastic"]
}, {
  "body": "Alcohol is a perfect solvent: It dissolves marriages, families and careers.",
  "tags": ["alcohol", "life", "marriage"]
}, {
  "body": "A straight face and a sincere-sounding &quot;Huh?&quot; have gotten me out of more trouble than I can remember.",
  "tags": ["sarcastic"]
}, {
  "body": "The reason a dog has so many friends is that he wags his tail instead of his tongue.",
  "tags": ["animal", "life"]
}, {
  "body": "If at first you don't succeed, we have a lot in common.",
  "tags": ["sarcastic", "success"]
}, {
  "body": "Never break someone's heart because they have only one inside...break their bones because they have 206 of them.",
  "tags": ["love", "sarcastic"]
}, {
  "body": "Everyone has a friend who laughs funnier than he jokes.",
  "tags": ["friendship", "life"]
}, {
  "body": "I bet you I could stop gambling.",
  "tags": ["motivational"]
}, {
  "body": "My internet is so slow, it's just faster to drive to the Google headquarters and ask them shit in person.",
  "tags": ["IT", "sarcastic"]
}, {
  "body": "For once in my life, I'd like to get up in the morning and be as excited about it as my penis.",
  "tags": ["attitude", "men"]
}, {
  "body": "Now what's on the menu? Me-n-u",
  "tags": ["flirty", "food"]
}, {
  "body": "Improve your memory by doing unforgettable things.",
  "tags": ["attitude", "life", "motivational"]
}, {
  "body": "Best friends: Ready to die for each other, but will fight to the death over the last slice of pizza.",
  "tags": ["fighting", "life", "sarcastic"]
}, {
  "body": "If laughter is the best medicine, your face must be curing the world.",
  "tags": ["insults"]
}, {
  "body": "I wasn't born with enough middle fingers to let you know how I feel about you.",
  "tags": ["dirty", "insults"]
}, {
  "body": "It's just a bad day, not a bad life.",
  "tags": ["life", "motivational"]
}, {
  "body": "It must be difficult to post inspirational Tweets when your blood type is B Negative.",
  "tags": ["attitude", "life", "sarcastic"]
}, {
  "body": "Accidentally pooped my pants in the elevator. I'm taking this shit to a whole new level.",
  "tags": ["stupid"]
}, {
  "body": "Congratulations, If you press the elevator button three times it goes into hurry mode \u2013 really...",
  "tags": ["life", "sarcastic"]
}, {
  "body": "Women might be able to fake orgasms. But men can fake a whole relationship.",
  "tags": ["men", "women"]
}, {
  "body": "Don't you love nature, despite what it did to you?",
  "tags": ["insults"]
}, {
  "body": "You know your children are growing up when they stop asking you where they came from and refuse to tell you where they're going.",
  "tags": ["kids"]
}, {
  "body": "According to most studies, people's number one fear is public speaking. Number two is death. Death is number two. Does that sound right? This means to the average person, if you go to a funeral, you're better off in the casket than doing the eulogy.",
  "tags": ["death", "life", "people"]
}, {
  "body": "The best things in life are free *plus shipping and handling*",
  "tags": ["life", "money", "sarcastic"]
}, {
  "body": "You're the reason the gene pool needs a lifeguard.",
  "tags": ["attitude", "dirty", "insults"]
}, {
  "body": "What do you do if a blonde throws a grenade at you? Pull the pin and throw it back.",
  "tags": ["blonde"]
}, {
  "body": "Keep the dream alive: Hit the snooze button.",
  "tags": ["life", "motivational"]
}, {
  "body": "What can strike a blonde without her even knowing it? A thought.",
  "tags": ["blonde"]
}, {
  "body": "If you really want to know about mistakes, you should ask your parents.",
  "tags": ["dirty", "insults", "kids", "mistake"]
}, {
  "body": "Children seldom misquote you. In fact, they usually repeat word for word what you shouldn't have said.",
  "tags": ["kids"]
}, {
  "body": "Eat right. Stay fit. Die anyway.",
  "tags": ["life"]
}, {
  "body": "I don't think you act stupid, I'm sure it's the real thing.",
  "tags": ["rude"]
}, {
  "body": "The trouble with unemployment is that the minute you wake up in the morning you're on the job.",
  "tags": ["life"]
}, {
  "body": "I'm reading a book about anti-gravity. It's impossible to put down.",
  "tags": ["puns"]
}, {
  "body": "Doesn't expecting the unexpected make the unexpected become the expected?",
  "tags": ["life"]
}, {
  "body": "God gave us the brain to work out problems. However, we use it to create more problems.",
  "tags": ["attitude", "God", "life", "motivational"]
}, {
  "body": "People are making end of the world jokes. Like there is no tomorrow.",
  "tags": ["attitude", "people", "sarcastic"]
}, {
  "body": "If time is money are ATM's time machines?",
  "tags": ["money", "time"]
}, {
  "body": "Anyone who has never made a mistake has never tried anything new.",
  "tags": ["mistake", "motivational"]
}, {
  "body": "Women should not have children after 35. Really ... 35 children are enough.",
  "tags": ["kids", "women"]
}, {
  "body": "Did you hear about the guy who got hit in the head with a can of soda? He was lucky it was a soft drink.",
  "tags": ["puns"]
}, {
  "body": "I'm emotionally constipated. I haven't given a shit in days.",
  "tags": ["dirty", "puns"]
}, {
  "body": "If I had a star for every time you brightened my day, I'd have a galaxy in my hand.",
  "tags": ["flirty", "love"]
}, {
  "body": "Your life doesn't get better by chance. It gets better by choice.",
  "tags": ["motivational"]
}, {
  "body": "Hit snooze until the panic sets in.",
  "tags": ["attitude"]
}, {
  "body": "TRUE FRIENDSHIP: Walking into a persons house and your wifi connects automatically.",
  "tags": ["friendship", "life"]
}, {
  "body": "You can easily judge the character of a man by how he treats those who can do nothing for him.",
  "tags": ["men"]
}, {
  "body": "Funny how they say we need to talk when they really mean you need to listen.",
  "tags": ["attitude"]
}, {
  "body": "A woman's mind is cleaner than a man's: She changes it more often.",
  "tags": ["men", "women"]
}, {
  "body": "Why did the blond get fired from the banana plantation? Because she threw out all the bent ones.",
  "tags": ["blonde"]
}, {
  "body": "The hardness of butter is directly proportional to the softness of the bread.",
  "tags": ["life"]
}, {
  "body": "When I get naked in the bathroom, the shower usually gets turned on.",
  "tags": ["puns"]
}, {
  "body": "People who write &quot;u&quot; instead of &quot;you&quot;. What do you do with all the time you save?",
  "tags": ["sarcastic", "time"]
}, {
  "body": "Behind every successful student, there is a deactivated Facebook account.",
  "tags": ["attitude", "success"]
}, {
  "body": "I don't have an attitude; I have a personality you can't handle.",
  "tags": ["attitude"]
}, {
  "body": "Everywhere is walking distance if you have the time.",
  "tags": ["attitude"]
}, {
  "body": "I might drive you crazy, but at least I'll take the scenic route.",
  "tags": ["attitude"]
}, {
  "body": "I'm good at multitasking and procrastinating, which means right now there are at least 28 things that I'm putting off until later.",
  "tags": ["attitude", "intelligence", "success"]
}, {
  "body": "If someone hates you for no reason, give that motherfucker a reason.",
  "tags": ["attitude", "hate"]
}, {
  "body": "Any salad can be a Caesar salad if you stab it enough.",
  "tags": ["food", "health"]
}, {
  "body": "I'm glad to see you're not letting your education get in the way of your ignorance.",
  "tags": ["insults", "stupid"]
}, {
  "body": "You're so fake, Barbie is jealous.",
  "tags": ["insults", "women"]
}, {
  "body": "My mother never saw the irony in calling me a son-of-a-bitch.",
  "tags": ["dirty"]
}, {
  "body": "The deeper the pit you're falling into, the more chance you have to learn how to fly.",
  "tags": ["motivational"]
}, {
  "body": "The light at the end of the tunnel has been turned off due to budget cuts.",
  "tags": ["life", "money"]
}, {
  "body": "We are born naked, wet and hungry. Then things get worse.",
  "tags": ["attitude", "life"]
}, {
  "body": "Turning vegan is a big missed steak.",
  "tags": ["attitude", "food", "mistake"]
}, {
  "body": "The road to success is always under construction.",
  "tags": ["life", "motivational", "success"]
}, {
  "body": "I am known at the gym as the &quot;before picture.&quot;",
  "tags": ["attitude", "sport"]
}, {
  "body": "If God is watching us, the least we can do is be entertaining.",
  "tags": ["christian", "God"]
}, {
  "body": "Hey, you have something on your chin... no, the 3rd one down.",
  "tags": ["insults"]
}, {
  "body": "I like you. You remind me of when I was young and stupid.",
  "tags": ["rude", "sarcastic"]
}, {
  "body": "My first job was working in an orange juice factory, but I got canned: couldn't concentrate.",
  "tags": ["puns"]
}, {
  "body": "Autocorrect just changed &quot;I have so much anxiety I can barely breathe&quot; to &quot;I'm fine.&quot;",
  "tags": ["attitude", "IT"]
}, {
  "body": "An optimist believes that we live in the best world. A pessimist is afraid that it might be true.",
  "tags": ["attitude", "life", "motivational"]
}, {
  "body": "Makeup tip: You're not in the circus.",
  "tags": ["beauty", "women"]
}, {
  "body": "I was born to be a pessimist. My blood type is B Negative.",
  "tags": ["life"]
}, {
  "body": "It's not a relationship until you argue about whose turn it is to apologize.",
  "tags": ["love"]
}, {
  "body": "We come to love not by finding a perfect person... but by learning to see an imperfect person perfectly.",
  "tags": ["love"]
}, {
  "body": "Refusing to go to the gym counts as resistance training, right?",
  "tags": ["attitude", "sarcastic", "sport"]
}, {
  "body": "Keep talking, someday you'll say something intelligent!",
  "tags": ["insults", "intelligence", "stupid"]
}, {
  "body": "Do not argue with an idiot. He will drag you down to his level and beat you with experience.",
  "tags": ["life"]
}, {
  "body": "We are all time travelers moving at the speed of exactly 60 minutes per hour.",
  "tags": ["life", "time", "travel"]
}, {
  "body": "Why does it feel like time slows down during the day when you're at work and rapidly speeds up at night when you get home?",
  "tags": ["life"]
}, {
  "body": "Don't let a man put anything over on you except an umbrella.",
  "tags": ["love", "men"]
}, {
  "body": "Success is like pregnancy. Everybody congratulates you but nobody knows how many times you got fucked to achieve it.",
  "tags": ["life", "motivational", "success"]
}, {
  "body": "If a guy remembers the color of your eyes after the first date, chances are... you have small boobs.",
  "tags": ["dirty", "women"]
}, {
  "body": "I always tell new hires, don't think of me as your boss, think of me as your friend who can fire you.",
  "tags": ["friendship", "sarcastic", "work"]
}, {
  "body": "I work to buy a car to go to work.",
  "tags": ["car", "work"]
}, {
  "body": "There's only one problem with your face, I can see it.",
  "tags": ["insults"]
}, {
  "body": "I asked my North Korean friend how it was there, he said he couldn't complain.",
  "tags": ["attitude", "communication", "life", "political", "sarcastic"]
}, {
  "body": "A clean house is a sign of a misspent life.",
  "tags": ["attitude", "life"]
}, {
  "body": "The only knowledge that can hurt you is the knowledge you don't have.",
  "tags": ["motivational"]
}, {
  "body": "What language are you speaking? Cause it sounds like bullshit.",
  "tags": ["insults"]
}, {
  "body": "You may fall from the sky, you may fall from a tree, but the best way to fall... is in love with me.",
  "tags": ["flirty", "love"]
}, {
  "body": "Do you know what it means to come home to a man who'll give you a little love, a little affection, a little tenderness? It means you're in the wrong house.",
  "tags": ["life", "love", "men"]
}, {
  "body": "That awkward moment when you're in a meeting and your stomach decides to sound like a dying whale.",
  "tags": ["life"]
}, {
  "body": "You are proof that evolution CAN go in reverse.",
  "tags": ["insults"]
}, {
  "body": "Failure is not falling down, it is not getting up again.",
  "tags": ["motivational"]
}, {
  "body": "How do you embarrass an archeologist? Give him a used tampon and ask him which period it came from.",
  "tags": ["dirty", "rude"]
}, {
  "body": "I am on a seafood diet. Every time I see food, I eat it.",
  "tags": ["food", "puns"]
}, {
  "body": "Whenever i have a headache,i take two asprins and keep away the children,like the bottle says",
  "tags": ["stupid"]
}, {
  "body": "You so ugly when who were born the doctor threw you out the window and the window threw you back.",
  "tags": ["doctor", "insults", "ugly"]
}, {
  "body": "Which sexual position produces the ugliest children? Ask your mother.",
  "tags": ["insults", "rude", "ugly"]
}, {
  "body": "What was Forrest Gump's email password? \"1forrest1\"",
  "tags": ["IT", "life", "puns"]
}, {
  "body": "Roses are red violets are blue, God made me pretty, what happened to you?",
  "tags": ["dirty", "God", "insults"]
}, {
  "body": "My doctor told me that jogging could add years to my life. He was right\u2014I feel ten years older already.",
  "tags": ["doctor", "life", "sarcastic"]
}, {
  "body": "Remember, everyone seems normal until you get to know them...",
  "tags": ["attitude", "people"]
}, {
  "body": "I think they picked me for my motivational skills. Everyone always says they have to work twice as hard when I'm around!",
  "tags": ["motivational"]
}, {
  "body": "Don't be irreplaceable - if you cannot be replaced, you cannot be promoted.",
  "tags": ["life", "motivational", "work"]
}, {
  "body": "Depression is merely anger without enthusiasm.",
  "tags": ["attitude", "sarcastic"]
}, {
  "body": "\"Excuse me miss, can I have the time? I'd check my watch but I can't take my eyes off you.\"",
  "tags": ["flirty", "love", "women"]
}, {
  "body": "I have as much authority as the Pope, i just don't have as many people who believe it.",
  "tags": ["christian", "sarcastic"]
}, {
  "body": "I wanna make a joke about sodium, but Na..",
  "tags": ["puns", "school"]
}, {
  "body": "I thought I was just really tired but it's been 5 years so I guess this is how I look now.",
  "tags": ["attitude", "life", "time"]
}, {
  "body": "If love is blind, why is lingerie so popular?",
  "tags": ["love", "Valentines"]
}, {
  "body": "A procrastinator's work is never done.",
  "tags": ["life"]
}, {
  "body": "Letting the cat out of the bag is a whole lot easier than putting it back in.",
  "tags": ["animal", "attitude"]
}, {
  "body": "A friend of mine tried to annoy me with bird puns, but I soon realized that toucan play at that game.",
  "tags": ["animal", "puns"]
}, {
  "body": "Doing things that you are not supposed to do at work makes your vision, hearing and alertness much better.",
  "tags": ["life", "work"]
}, {
  "body": "I'm jealous of all the people that haven't met you!",
  "tags": ["insults"]
}, {
  "body": "Yesterday, I fell down from a 10 meter ladder. Thank God I was on the third step.",
  "tags": ["sarcastic"]
}, {
  "body": "A girl phoned me the other day and said, \"Come on over, there's nobody home.\" I went over. Nobody was home.",
  "tags": ["men", "sex", "stupid", "women"]
}, {
  "body": "Masturbation is like procrastination, it's all good and fun until you realize you are only fucking yourself!",
  "tags": ["sarcastic", "sex"]
}, {
  "body": "If I had a face like yours, I'd sue my parents.",
  "tags": ["insults"]
}, {
  "body": "I'm sorry I wasn't part of your past, can I make it up by being in your future?",
  "tags": ["flirty", "life", "love"]
}, {
  "body": "It looks like your face caught on fire and someone tried to put it out with a hammer.",
  "tags": ["insults"]
}, {
  "body": "What's six inches long, two inches wide, and drives women wild? Money.",
  "tags": ["money", "women"]
}, {
  "body": "Whats the difference between your girlfriend and a walrus? One has a moustache and smells of fish and the other is a walrus.",
  "tags": ["insults", "men", "women"]
}, {
  "body": "Ordinarily people live and learn. You just live.",
  "tags": ["insults"]
}, {
  "body": "Can I borrow a kiss? I promise I'll give it back.",
  "tags": ["attitude", "love", "motivational"]
}, {
  "body": "Wouldn't exercise be more fun if calories screamed while you burned them?",
  "tags": ["life"]
}, {
  "body": "Why did the scientist install a knocker on his door? He wanted to win the No-bell prize!",
  "tags": ["life", "puns"]
}, {
  "body": "You are so ugly when you looked in the mirror your reflection walked away.",
  "tags": ["insults", "ugly"]
}, {
  "body": "When I die, I hope I have enough time to point at a complete stranger and whisper \"You did this.\"",
  "tags": ["attitude", "dirty", "life", "time"]
}, {
  "body": "I love what you've done with your hair. How do you get it to come out of the nostrils like that?",
  "tags": ["insults", "sarcastic"]
}, {
  "body": "What do you call a smart blonde? A golden retriever.",
  "tags": ["blonde"]
}, {
  "body": "Every so often, I like to go to the window, look up, and smile for a satellite picture.",
  "tags": []
}, {
  "body": "We never knew he was a drunk... until he showed up to work sober.",
  "tags": ["alcohol", "life", "work"]
}, {
  "body": "So, a thought crossed your mind? Must have been a long and lonely journey.",
  "tags": ["insults"]
}, {
  "body": "My husband is on the roof - only a few inches away from an insurance claim that could completely change my life.",
  "tags": ["life", "marriage", "sarcastic"]
}, {
  "body": "Aging gracefully is like the nice way of saying you're slowly looking worse.",
  "tags": ["age", "rude"]
}, {
  "body": "I bet you $4,567.89 you can't guess how much I owe my bookie.",
  "tags": ["money", "sarcastic"]
}, {
  "body": "My wife told me to stop impersonating a flamingo. I had to put my foot down.",
  "tags": ["animal", "marriage", "women"]
}, {
  "body": "Laziness is when a person doesn't fake that he's working.",
  "tags": ["life", "work"]
}, {
  "body": "Thieves had broken into my house and stolen everything except my soap, shower gel, towels and deodorant. Dirty Bastards.",
  "tags": ["life", "puns"]
}, {
  "body": "We All KEA! My first day on the job at an IKEA store, I was told by my boss that employees needed to go to the meeting room before every shift. I asked why. He said, \"Assembly required.\"",
  "tags": ["life"]
}, {
  "body": "Three words to ruin a man's ego...? \"Is it in?\"",
  "tags": ["dirty", "men", "sex"]
}, {
  "body": "Why can't you play Uno with a Mexican? They steal all the green cards.",
  "tags": ["dirty", "racist"]
}, {
  "body": "How do you make a blonde's eyes light up? Shine a flashlight in their ear.",
  "tags": ["blonde"]
}, {
  "body": "Why doesn't Mexico have an Olympic team? Because everybody who can run, jump and swim are already in the U.S.",
  "tags": ["racist"]
}, {
  "body": "The last thing I want to do is hurt you. But it's still on the list.",
  "tags": ["love"]
}, {
  "body": "You haven't experienced awkward until you try to tickle someone who isn't ticklish.",
  "tags": ["life"]
}, {
  "body": "I think sex is better than logic, but I can't prove it.",
  "tags": ["sex", "stupid"]
}, {
  "body": "My wife sent her photograph to the Lonely Hearts Club. They sent it back saying they weren't that lonely.",
  "tags": ["marriage", "rude", "sarcastic"]
}, {
  "body": "Having sex in an elevator is wrong on so many levels.",
  "tags": ["life", "puns", "sex"]
}, {
  "body": "Ever stop to think, and forget to start again?",
  "tags": ["attitude", "intelligence", "life"]
}, {
  "body": "Father's day, the most confusing day in the ghetto.",
  "tags": ["black", "life", "racist"]
}, {
  "body": "I'd like to see things from your point of view, but I can't seem to get my head that far up your ass.",
  "tags": ["insults", "rude"]
}, {
  "body": "He doesn't know the meaning of fear... but then again, he doesn't know the meaning of MOST words.",
  "tags": ["men", "rude"]
}, {
  "body": "Time is a great teacher, but unfortunately it kills all its pupils.",
  "tags": ["death", "school", "time"]
}, {
  "body": "As an outsider, what do you think of the human race?",
  "tags": ["insults"]
}, {
  "body": "You do realize makeup isn't going to fix your stupidity?",
  "tags": ["insults", "stupid"]
}, {
  "body": "How is a woman like a condom? Both spend more time in your wallet than on your dick.",
  "tags": ["dirty", "sex", "women"]
}, {
  "body": "Friends are forever. Until they get in a relationship.",
  "tags": ["life", "love"]
}, {
  "body": "I think that if I died and went straight to hell it would take me at least a week to realize I wasn't at work anymore.",
  "tags": ["attitude", "life", "work"]
}, {
  "body": "A book just fell on my head. I've only got myshelf to blame.",
  "tags": ["life", "puns"]
}, {
  "body": "The proper way to use a stress ball is to throw it at the last person to piss you off.",
  "tags": ["health", "work"]
}, {
  "body": "Calling you an idiot would be an insult to all stupid people.",
  "tags": ["insults", "rude"]
}, {
  "body": "What's the difference between a paycheck and a penis? You don't have to beg your wife to blow your paycheck.",
  "tags": ["marriage", "money", "sex"]
}, {
  "body": "What is the difference between \"ooooooh\"and \"aaaaaaah\"? About three inches.",
  "tags": ["dirty", "sex"]
}, {
  "body": "Aha, I see the Fuck-Up Fairy has visited us again!",
  "tags": ["insults"]
}, {
  "body": "What do a nearsighted gynecologist and a puppy have in common? A wet nose.",
  "tags": ["animal", "dirty"]
}, {
  "body": "What's the difference between a northern fairytale and a southern fairytale? A northern fairytale begins \"Once upon a time ...\" A southern fairytale begins \"Y'all ain't gonna believe this shit ...\"",
  "tags": ["black", "racist"]
}, {
  "body": "Remember, it's not what you do... it's what you get away with.",
  "tags": ["attitude", "work"]
}, {
  "body": "In my spare time I like to read, write, and fall in love with unavailable people.",
  "tags": ["life", "love", "people"]
}, {
  "body": "I don't think you are stupid. You just have a bad luck when thinking.",
  "tags": ["insults", "rude"]
}, {
  "body": "One day, a little boy wrote to Santa Clause, \"Please send me a sister.\" Santa Clause wrote him back, \"Ok, send me your mother.\"",
  "tags": ["Christmas", "dirty", "kids", "sport"]
}, {
  "body": "I would ask you how old you are but I know you can't count that high.",
  "tags": ["insults"]
}, {
  "body": "You're so ugly, you scared the crap out of the toilet.",
  "tags": ["insults", "ugly"]
}, {
  "body": "My kids are very optimistic.  Every glass they leave sitting around the house is at least half full.",
  "tags": ["attitude", "kids"]
}, {
  "body": "Somewhere an elderly lady reads a book on how to use the internet, while a young boy googles \"how to read a book\".",
  "tags": ["kids", "retirement"]
}, {
  "body": "Oh... I didn't tell you... Then It must be none of your business...",
  "tags": ["attitude", "communication", "rude", "sarcastic"]
}, {
  "body": "Do I know you? Cause you look a lot like my next girlfriend.",
  "tags": ["attitude", "love", "success"]
}, {
  "body": "I don't know what makes you so stupid, but it really works.",
  "tags": ["insults", "stupid"]
}, {
  "body": "What do the Mafia and a pussy have in common? One slip of the tongue, and you're in deep shit.",
  "tags": ["dirty"]
}, {
  "body": "I remember when Halloween was the scariest night of the year. Now, it's Election night.",
  "tags": ["Halloween", "political", "sarcastic"]
}, {
  "body": "I'm having an introvert party and you're all not invited.",
  "tags": ["attitude", "friendship", "sarcastic", "stupid"]
}, {
  "body": "Imagine being 5 minutes from the end of the longest movie ever &amp; it starts over because it forgot something. That's my kid telling a story.",
  "tags": ["communication", "kids"]
}, {
  "body": "Are you a Nice girl or Good girl?: NICE girls blush when they watch porn, GOOD girls smile cause they know they can do better.",
  "tags": ["dirty", "flirty"]
}, {
  "body": "If bullshit could float...you'd be the Admiral of the fleet!",
  "tags": ["insults"]
}, {
  "body": "3 people having sex is a threesome, 2 is a twosome. So next time someone calls you 'HANDSOME', don't take it as a compliment!",
  "tags": ["attitude", "life", "sex"]
}, {
  "body": "My math teacher called me average. How mean!",
  "tags": ["puns", "school"]
}, {
  "body": "Never underestimate a woman's ability to make anything your fault.",
  "tags": ["life", "women"]
}, {
  "body": "Nobody's perfect. I'm a nobody.",
  "tags": ["life"]
}, {
  "body": "Never trust a dog to watch your food.",
  "tags": ["animal", "attitude"]
}, {
  "body": "What do women and police cars have in common? They both make a lot of noise to let you know they are coming.",
  "tags": ["car", "sex", "women"]
}, {
  "body": "What did the blonde say when she found out she was pregnant? \"Are you sure it's mine?\"",
  "tags": ["blonde", "kids"]
}, {
  "body": "My first child has gone off to college and I feel a great emptiness in my life. Specifically, in my checking account.",
  "tags": ["attitude", "kids", "money", "sarcastic"]
}, {
  "body": "Do you wanna lose ten pounds of ugly fat? Cut off your head.",
  "tags": ["insults", "ugly"]
}, {
  "body": "Karma takes too long, I'd rather beat the shit out of you just now.",
  "tags": ["attitude", "insults"]
}, {
  "body": "But do you know what 6.9 is? A good thing screwed up by a period.",
  "tags": ["dirty", "sex"]
}, {
  "body": "What should you do if your girlfriend starts smoking? Slow down and use a lubricant.",
  "tags": ["rude", "sex"]
}, {
  "body": "All I'm saying is why blame it on being lazy when you can blame it on being old?",
  "tags": ["attitude", "life", "work"]
}, {
  "body": "I was going to give him a nasty look, but he already had one.",
  "tags": ["attitude", "insults", "puns"]
}, {
  "body": "The biggest difference between men and women is what comes to mind when the word 'Facial' is used.",
  "tags": ["men", "sex", "women"]
}, {
  "body": "It doesn't matter how much you work, there will always be an asshole that works less but gets more.",
  "tags": ["life", "motivational", "work"]
}, {
  "body": "There may be no excuse for laziness, but I'm still looking.",
  "tags": ["life"]
}, {
  "body": "Morning is the time when everyone is jealous of unemployed.",
  "tags": ["life", "work"]
}, {
  "body": "Do it tomorrow. You have made enough mistakes for today.",
  "tags": ["attitude", "life", "mistake", "work"]
}, {
  "body": "If you can go to the gym without telling people on the Internet, you are instantly hired by the CIA.",
  "tags": ["attitude", "sport", "work"]
}, {
  "body": "Roses are red, violets are blue, I have 5 fingers, the 3rd ones for you.",
  "tags": ["attitude"]
}, {
  "body": "I'm here for whatever you need me to do from the couch.",
  "tags": ["attitude", "life", "work"]
}, {
  "body": "Anger; the feeling that makes your mouth work faster than your mind.",
  "tags": ["life"]
}, {
  "body": "My resum\xE9 is just a list of things I hope you never ask me to do.",
  "tags": ["life", "work"]
}, {
  "body": "What's the difference between a bowling ball and a blonde? You can only fit three fingers inside a bowling ball!",
  "tags": ["blonde", "dirty"]
}, {
  "body": "I'm no photographer, but I can picture us together.",
  "tags": ["flirty", "puns"]
}, {
  "body": "If you don't care where you are, then you ain't lost.",
  "tags": []
}, {
  "body": "Remember: What dad really wants is a nap. Really.",
  "tags": ["Father's Day", "life"]
}, {
  "body": "I had amnesia once - maybe twice.",
  "tags": ["life"]
}, {
  "body": "For every action, there is a corresponding over-reaction.",
  "tags": ["life"]
}, {
  "body": "Always remember you're unique, just like everyone else.",
  "tags": ["life"]
}, {
  "body": "Sometimes I wake up grumpy; other times I let her sleep.",
  "tags": []
}, {
  "body": "The five most essential words for a healthy, vital relationship \"I apologize\" and \"You are right.\"",
  "tags": ["life", "marriage", "men"]
}, {
  "body": "What do prisoners use to call each other? Cell phones.",
  "tags": ["life", "puns"]
}, {
  "body": "Why do husbands die before their wives? They want to.",
  "tags": ["marriage", "men", "women"]
}, {
  "body": "My IQ came back negative.",
  "tags": ["intelligence", "stupid"]
}, {
  "body": "I feel like I'm diagonally parked in a parallel universe.",
  "tags": ["life"]
}, {
  "body": "Archeologist: someone whose carreer lies in ruins.",
  "tags": []
}, {
  "body": "Every morning is the dawn of a new error.",
  "tags": ["life"]
}, {
  "body": "People say I'm condescending. That means I talk down to people.",
  "tags": ["communication", "people"]
}, {
  "body": "The reward for a job well done is more work.",
  "tags": ["life", "work"]
}, {
  "body": "You have to be flexible to work here. On many occasions, you'll be asked to bend over and grab your ankles.",
  "tags": ["attitude", "stupid", "work"]
}, {
  "body": "What dog can jump higher than a building? Anydog, buildings can't jump!",
  "tags": ["animal"]
}, {
  "body": "Some of us learn from the mistakes of others; the rest of us have to be the others.",
  "tags": ["attitude", "life", "mistake"]
}, {
  "body": "Why dont blacks celibrate thanksgiving? KFC isnt open on holidays.",
  "tags": ["black", "racist"]
}, {
  "body": "The sex was so good that even the neighbors had a cigarette.",
  "tags": ["sex"]
}, {
  "body": "How many times do I have to flush before you go away?",
  "tags": ["dirty", "insults"]
}, {
  "body": "I don't approve of political jokes...I've seen too many of them get elected.",
  "tags": ["political"]
}, {
  "body": "If procrastionation was an Olympic sport, I'd compete in it later.",
  "tags": ["attitude", "sport"]
}, {
  "body": "I refused to believe my road worker father was stealing from his job, but when I got home, all the signs were there.",
  "tags": ["family", "work"]
}, {
  "body": "The 50-50-90 rule: Anytime you have a 50-50 chance of getting something right, there's a 90% probability you'll get it wrong.",
  "tags": ["attitude", "life"]
}, {
  "body": "Diplomacy is the art of sending someone to hell in the way that they are looking forward to it.",
  "tags": ["life"]
}, {
  "body": "He who laughs last thinks slowest.",
  "tags": ["stupid"]
}, {
  "body": "Why do black widow spiders kill their males after mating? To stop the snoring before it starts.",
  "tags": ["animal", "life", "love", "men"]
}, {
  "body": "The last airline I flew charged for everything. Except for the bad service. That was free.",
  "tags": ["life", "sarcastic"]
}, {
  "body": "Why can't blondes count to 70? Because 69 is a bit of a mouthful.",
  "tags": ["blonde", "dirty"]
}, {
  "body": "Why wasn't Jesus born in the USA? Because God couldn't find three wise men and a virgin.",
  "tags": ["christian", "God", "rude"]
}, {
  "body": "You're slower than a herd of turtles stampeding through peanut butter.",
  "tags": ["animal", "sarcastic"]
}, {
  "body": "Boy : I have a pen you have a phone number. Think of the possibilities. Girl : I have a sandal you have a face. Think of Casualties.",
  "tags": ["flirty", "men", "sarcastic", "women"]
}, {
  "body": "Your opinion is very important to me, please remain on the line until it goes to voicemail.",
  "tags": ["attitude", "sarcastic"]
}, {
  "body": "The good Lord didn't create anything without a purpose, but mosquitoes come close.",
  "tags": ["animal", "christian"]
}, {
  "body": "42 percent of statistics are made up!",
  "tags": ["life", "work"]
}, {
  "body": "My grandma told me her joints are getting weaker, so I told her to roll them tighter.",
  "tags": ["health"]
}, {
  "body": "I find a duck's opinion of me is very much influenced by whether or not I have bread.",
  "tags": ["animal", "life"]
}, {
  "body": "Time is what keeps things from happening all at once.",
  "tags": ["attitude"]
}, {
  "body": "Fighting for peace is like fucking for virginity.",
  "tags": ["fighting", "sex"]
}, {
  "body": "Don't judge women by kilos, and you won't be judged by centimeters.",
  "tags": ["life", "men", "sex", "women"]
}, {
  "body": "Brains aren't everything. In your case they're nothing.",
  "tags": ["insults"]
}, {
  "body": "Most men know that women dream of having two men at the same time. But they don't understand that in those fantasies one man is cleaning the house and the other one is cooking.",
  "tags": ["men", "women"]
}, {
  "body": "I may love to shop but I'm not buying your bullshit.",
  "tags": ["insults"]
}, {
  "body": "What's the difference between a G-Spot and a golf ball? A guy will actually search for a golf ball.",
  "tags": ["dirty", "men"]
}, {
  "body": "What's the difference between a tire and 365 used rubbers? One is a Goodyear and the other is a great year.",
  "tags": ["car", "dirty", "sex"]
}, {
  "body": "The last time I was inside a woman was when I went to the Statue of Liberty.",
  "tags": ["dirty", "sex"]
}, {
  "body": "I don't know what your problem is, but I'll bet it's hard to pronounce.",
  "tags": ["insults"]
}, {
  "body": "What do you have when you have two balls in your hand? A man's undivided attention!",
  "tags": ["men", "sex"]
}, {
  "body": "Olympic track makes you feel like you witnesed a crime, because you hear a gunshot and then see a bunch of black guys hauling ass.",
  "tags": ["black", "life"]
}, {
  "body": "What would martin luther king be if he was white? Alive.",
  "tags": ["racist"]
}, {
  "body": "How many of you believe in telekinesis? Raise MY hand!",
  "tags": ["life", "sarcastic"]
}, {
  "body": "If you don't drink, smoke or do drugs you may live long enough to be a real burden to loved ones.  Please pass the wine.",
  "tags": ["alcohol", "attitude", "sarcastic"]
}, {
  "body": "What do you call it when a blonde dies their hair brunette? Artificial intelligence.",
  "tags": ["blonde", "intelligence"]
}, {
  "body": "Women sometimes make fools of men, but most guys are the do-it-yourself type.",
  "tags": ["men", "stupid", "women"]
}, {
  "body": "If I wanted to hear from an asshole, I'd fart.",
  "tags": ["insults", "rude"]
}, {
  "body": "If a turtle doesn't have a shell, is he homeless or naked?",
  "tags": ["animal"]
}, {
  "body": "The light at the end of the tunnel \u2013 are the front lights of a train.",
  "tags": ["motivational", "sarcastic"]
}, {
  "body": "You are so old, when you were a kid rainbows were black and white.",
  "tags": ["insults"]
}, {
  "body": "If ignorance is bliss, you must be the happiest person on earth.",
  "tags": ["insults", "intelligence"]
}, {
  "body": "My wife's not too smart. I told her, our kids were spoiled. She said, \"All kids smell that way.\"",
  "tags": ["kids", "marriage", "women"]
}, {
  "body": "All those years of getting horrible elementary school pictures was just society's way of preparing you for your driver's license photo.",
  "tags": ["life", "school"]
}, {
  "body": "If winning isn't everything why do they keep score?",
  "tags": ["attitude", "life"]
}, {
  "body": "Statistically 6 out of 7 Dwarfs are not Happy.",
  "tags": ["life"]
}, {
  "body": "How can you spot the blind guy at the nudist colony? It's not hard.",
  "tags": ["puns", "rude"]
}, {
  "body": "How come &quot;you're a peach&quot; is a complement but &quot;you're bananas&quot; is an insult? Why are we allowing fruit discrimination to tear society apart?",
  "tags": ["attitude", "insults", "motivational", "sarcastic"]
}, {
  "body": "Why do women close their eyes during sex? They can't stand seeing a man have a good time.",
  "tags": ["men", "sex", "women"]
}, {
  "body": "Only a widow can say exactly where her husband is.",
  "tags": ["love", "marriage", "men"]
}, {
  "body": "Support bacteria - they're the only culture some people have.",
  "tags": ["attitude", "insults", "intelligence", "people"]
}, {
  "body": "Oh, you're straight? Well, so is spaghetti until it gets hot and wet.",
  "tags": ["gay"]
}, {
  "body": "Why is there cotton in pill bottles? To remind black people that they were cotton pickers before drug dealers.",
  "tags": ["black", "drug", "racist"]
}, {
  "body": "Social life? You mean my phone?",
  "tags": ["life", "sarcastic"]
}, {
  "body": "I hate two-faced people. It's so hard to decide which face to slap first.",
  "tags": ["attitude", "hate", "rude"]
}, {
  "body": "I would love to insult you... but that would be beyond the level of your intelligence.",
  "tags": ["insults", "intelligence"]
}, {
  "body": "I grew a beard thinking it would say &quot;Distinguished Gentleman.&quot; Instead, turns out it says, &quot;Senior Discount, Please!&quot;",
  "tags": ["age", "attitude"]
}, {
  "body": "I would like to thank everybody that stuck by my side for those five long minutes my house didn't have internet.",
  "tags": ["IT", "people"]
}, {
  "body": "I think it's wrong that only one company makes the game Monopoly.",
  "tags": ["money"]
}, {
  "body": "Why is \"abbreviation\" such a long word?",
  "tags": ["life"]
}, {
  "body": "Atheism is a non-prophet organization.",
  "tags": ["christian", "puns"]
}, {
  "body": "I have noticed that everyone who is for abortion, has already been born.",
  "tags": ["christian"]
}, {
  "body": "The dinner I was cooking for my family was going to be a surprise but the fire trucks ruined it.",
  "tags": ["family", "food", "life"]
}, {
  "body": "A positive attitude may not solve all your problems, but it will annoy enough people to make it worth the effort.",
  "tags": ["attitude"]
}, {
  "body": "I'm not an alcoholic. Alcoholics need a drink, but I already have one.",
  "tags": ["alcohol", "attitude"]
}, {
  "body": "What would you call a woman who goes out with You? Desperate!",
  "tags": ["insults", "rude", "Valentines"]
}, {
  "body": "How do you make a blonde laugh on Saturday? Tell her a joke on Wednesday!",
  "tags": ["blonde"]
}, {
  "body": "What is the difference between a drug dealer and a hooker? A hooker can wash her crack and sell it again.",
  "tags": ["drug", "sex"]
}, {
  "body": "What's the difference between a slut and a bitch? A slut will have sex with anyone, a bitch will have sex with anyone but you.",
  "tags": ["sex"]
}, {
  "body": "That awkward moment when you're about to hug someone sexy as hell and then you hit the mirror.",
  "tags": ["sarcastic", "sex"]
}, {
  "body": "Why are women like KFC? After you've finished with the thigh and breasts, all you have left is a greasy box to put your bone in.",
  "tags": ["dirty", "women"]
}, {
  "body": "Always identify who to blame in an emergency.",
  "tags": ["attitude", "health", "motivational"]
}, {
  "body": "I am probably single....because i didnt forward those chain messages in 2008",
  "tags": ["love", "stupid"]
}, {
  "body": "A hole was found in the wall of a nudist camp. The police are looking into it.",
  "tags": ["puns"]
}, {
  "body": "Loneliness is when a person always knows where all of his things are.",
  "tags": ["life", "men", "women"]
}, {
  "body": "What did the little Mexican boy get for christmas? My bike.",
  "tags": ["Christmas", "racist"]
}, {
  "body": "I hate insects puns, they really bug me.",
  "tags": ["animal", "puns"]
}, {
  "body": "We all sprang from apes, but you didn't spring far enough.",
  "tags": ["insults"]
}, {
  "body": "Why is it so hard for women to find men that are sensitive, caring, and good-looking? Because those men already have boyfriends.",
  "tags": ["gay", "women"]
}, {
  "body": "Behind every fat woman there is a beautiful woman. No seriously, your in the way.",
  "tags": ["beauty", "fat", "insults", "women"]
}, {
  "body": "Sometimes waking up means the best part of your day is over!",
  "tags": ["life"]
}, {
  "body": "Ever since I saw you in your family tree I've wanted to cut it down.",
  "tags": ["family", "insults"]
}, {
  "body": "Experience is what you get when you didn't get what you wanted.",
  "tags": ["life"]
}, {
  "body": "Republicans &amp; Democrats are like divorced parents who care more about getting the kids to hate the other one than they are their well-being.",
  "tags": ["kids", "life", "political"]
}, {
  "body": "Did Noah include termites on the ark?",
  "tags": ["animal", "christian"]
}, {
  "body": "Cancer cures smoking.",
  "tags": ["attitude", "sarcastic"]
}, {
  "body": "Don't forget that alcohol helps to remove the stress, the bra, the panties and many other problems.",
  "tags": ["alcohol", "life"]
}, {
  "body": "Why did Eve bite the forbidden apple? Because it tasted better than Adam's banana.",
  "tags": ["food", "sex"]
}, {
  "body": "I hate girls that complain about being single every 3 minutes. 90% of my socks are single &amp; you don't see them crying about it.",
  "tags": ["attitude", "hate", "men", "women"]
}, {
  "body": "Sometimes I wish life had subtitles.",
  "tags": ["life"]
}, {
  "body": "Think Im Sarcastic? Watch Me Pretend To Care!",
  "tags": ["attitude", "sarcastic"]
}, {
  "body": "How many alcoholics does it take to change a light bulb? Two. One to hold the bulb, and one to drink until the room starts spinning.",
  "tags": ["life"]
}, {
  "body": "Why did the blonde stare at a frozen orange juice can for 2 hours? Because it said \"concentrate\"!",
  "tags": ["blonde"]
}, {
  "body": "You look like a before picture.",
  "tags": ["insults"]
}, {
  "body": "How can you tell when the Mexicans have moved into your neighborhood? The Blacks get car insurance.",
  "tags": ["car", "racist"]
}, {
  "body": "I never admit or deny anything it makes things more interesting.",
  "tags": ["attitude"]
}, {
  "body": "Talk is cheap. Until you hire a lawyer.",
  "tags": ["life"]
}, {
  "body": "Living on earth may be expensive, but it includes an annual free trip around the sun.",
  "tags": ["attitude", "life", "money"]
}, {
  "body": "Before I tell my wife something important, I take both her hands in mine. That way she can't hit me with them.",
  "tags": ["attitude", "communication", "marriage"]
}, {
  "body": "Feeling stressed out? Make a nice cup of hot tea and then spill it in the lap of whoever's bugging you.",
  "tags": ["attitude", "rude", "work"]
}, {
  "body": "A healthy sleep not only makes your life longer, but also shortens the workday.",
  "tags": ["attitude", "health", "life", "work"]
}, {
  "body": "You're like school in the summertime - no class.",
  "tags": ["insults", "rude", "school"]
}, {
  "body": "Love is the triumph of imagination over intelligence.",
  "tags": ["intelligence", "love"]
}, {
  "body": "Why can't women read maps? Only the male mind can comprehend the concept of one inch equaling a mile.",
  "tags": ["men", "women"]
}, {
  "body": "It takes patience to listen.. it takes skill to pretend you're listening.",
  "tags": ["life"]
}, {
  "body": "It's not often that one gets the opportunity to speak about someone intelligent, respected and admired. Unfortunately tonight I have to talk about (NAME).",
  "tags": ["best man speech", "insults", "intelligence"]
}, {
  "body": "Money isn't everything but it sure keeps you in touch with your children.",
  "tags": ["kids", "money", "retirement"]
}, {
  "body": "Maybe you need a ladder to climb out of my business?",
  "tags": ["life", "sarcastic"]
}, {
  "body": "As the joker said, if you are good at something why do it for free...",
  "tags": ["life", "money", "sarcastic"]
}, {
  "body": "Did you hear about the Italian chef with a terminal illness? He pastaway.",
  "tags": ["puns"]
}, {
  "body": "They say you are what you eat, so lay off the nuts.",
  "tags": ["sarcastic"]
}, {
  "body": "If you dont believe in Oral Sex, keep your mouth shut",
  "tags": ["sex", "women"]
}, {
  "body": "You should need a license to be that ugly.",
  "tags": ["insults", "ugly"]
}, {
  "body": "Shut up, you'll never be the man your mother is.",
  "tags": ["dirty", "insults"]
}, {
  "body": "What do you call people who are afraid of Santa Claus? Claustrophobic",
  "tags": ["Christmas", "puns"]
}, {
  "body": "If you can't say something nice, say it to your husband... he's not listening anyway.",
  "tags": ["life", "marriage", "men"]
}, {
  "body": "My speech today will be like a mini-skirt. Long enough to cover the essentials but short enough to hold your attention!",
  "tags": ["best man speech", "communication"]
}, {
  "body": "I can feel my personality turning a dull shade of grey when I talk to you.",
  "tags": ["insults"]
}, {
  "body": "When your kids are little you're a superhero. When they're teens you're a super villain. After that, your only power is invisibility.",
  "tags": ["kids", "time"]
}, {
  "body": "I always take life with a grain of salt, ...plus a slice of lemon, ...and a shot of tequila.",
  "tags": ["life"]
}, {
  "body": "If you don't like the news, go out and make some.",
  "tags": ["attitude"]
}, {
  "body": "What do electric trains and women's breasts have in common? They were originally intended for children but it's the men who play with them the most.",
  "tags": ["kids", "men", "women"]
}, {
  "body": "\"I'm sorry\" and \"I apologize\" mean the same thing... except when you're at a funeral.",
  "tags": ["life"]
}, {
  "body": "Sex is not the answer. Sex is the question. \"Yes\" is the answer.",
  "tags": ["sex"]
}, {
  "body": "Stupidity is not a crime so you are free to go.",
  "tags": ["insults", "stupid"]
}, {
  "body": "You sound reasonable. It must be time to up my medication!",
  "tags": ["insults", "life", "marriage", "men", "women"]
}, {
  "body": "Waitress: 'Do u have any questions about the menu?' Me: 'What kind of font is this?'",
  "tags": ["intelligence", "IT"]
}, {
  "body": "I like to show my girlfriend who's boss in our house by holding a mirror up to her face.",
  "tags": ["life", "love", "men", "women"]
}, {
  "body": "Which day do chickens hate the most? Friday.",
  "tags": ["animal", "hate", "puns"]
}, {
  "body": "Maybe if we all sit extremely still, Monday won't be able to see us.",
  "tags": ["attitude", "work"]
}, {
  "body": "Early to bed, early to rise makes people suspicious.",
  "tags": ["attitude", "life"]
}, {
  "body": "My psychiatrist told me I was crazy and I said I want a second opinion. He said okay, you're ugly too.",
  "tags": ["insults", "rude", "ugly"]
}, {
  "body": "I'm multi-talented: I can talk and piss you off at the same time.",
  "tags": ["insults", "rude"]
}, {
  "body": "I didn't fight my way to the top of the food chain to be a vegetarian.",
  "tags": ["fighting"]
}, {
  "body": "What do men and mascara have in common? They both run at the first sign of emotion.",
  "tags": ["men"]
}, {
  "body": "Why didn't the man report his stolen credit card? The thief was spending less then his wife.",
  "tags": ["marriage", "money", "women"]
}, {
  "body": "Baby, if you were a fruit you'd be a fineapple.",
  "tags": ["flirty", "food"]
}, {
  "body": "Do you sell hot dogs? Because you know how to make a wiener stand.",
  "tags": ["dirty", "food"]
}, {
  "body": "We can always tell when you are lying. Your lips move.",
  "tags": ["insults"]
}, {
  "body": "However lonely you feel, you're never alone. There are literally millions of bugs, mites and bacteria living in your house. Goodnight.",
  "tags": ["life", "motivational"]
}, {
  "body": "Get married early in the morning. That way, if it doesn't work out, you haven't wasted a whole day.",
  "tags": ["marriage", "Valentines"]
}, {
  "body": "Retirement is the time in your life when time is no longer money.",
  "tags": ["money", "retirement", "time"]
}, {
  "body": "Five Secrets of Successful People:1. Don't 2. Tell 3. Anyone 4. Your 5. Secrets",
  "tags": ["motivational", "people", "success"]
}, {
  "body": "A camel can work 10 days without drinking, I can drink 10 days without working.",
  "tags": ["alcohol", "animal", "work"]
}, {
  "body": "You're so beautiful you made me forget my pick up line.",
  "tags": ["flirty"]
}, {
  "body": "Friendship is unnecessary, like philosophy, like art... It has no survival value; rather it is one of those things that give value to survival.",
  "tags": ["life"]
}, {
  "body": "Turtles think frogs are homeless.",
  "tags": ["animal"]
}, {
  "body": "It's bad luck to be superstitious.",
  "tags": ["life"]
}, {
  "body": "Wife renewed me for another season.",
  "tags": ["marriage"]
}, {
  "body": "If you keep your feet firmly on the ground, you'll have trouble putting on your pants.",
  "tags": ["life"]
}, {
  "body": "A conclusion is the place where you got tired of thinking.",
  "tags": ["attitude", "life"]
}, {
  "body": "In accordance to the Heisenberg's Uncertainty Principle of Quantum Mechanics, we may already be in love right now.",
  "tags": ["love"]
}, {
  "body": "It's so simple to be wise. Just think of something stupid to say and then don't say it.",
  "tags": ["stupid"]
}, {
  "body": "Stupidity comes in all shapes and sizes. Some of them even look like people.",
  "tags": ["life", "people", "rude"]
}, {
  "body": "I need a new bank account. This one has run out of money.",
  "tags": ["money"]
}, {
  "body": "I always wanted to be somebody, but now I realize I should have been more specific.",
  "tags": ["life"]
}, {
  "body": "A study of economics usually reveals that the best time to buy anything was last year.",
  "tags": ["life", "money"]
}, {
  "body": "I'm not a Facebook status, you don't have to like me.",
  "tags": ["friendship", "life"]
}, {
  "body": "Weddings and funerals are the same because I love going but I don't want them to be about me.",
  "tags": ["sarcastic", "wedding"]
}, {
  "body": "Men approve of premarital sex until daughters are born.",
  "tags": ["men", "sex"]
}, {
  "body": "The older I get, the earlier it gets late.",
  "tags": ["age"]
}, {
  "body": "Stop with the blind jokes ... I don\xB4t see the point.",
  "tags": ["attitude", "rude", "stupid"]
}, {
  "body": "Dont be afraid to stand for what you believe in, even if that means standing alone.",
  "tags": ["motivational"]
}, {
  "body": "1 in 5 people in the world are Chinese. There are 5 people in my family, so it must be one of them. It's either my mum or my dad. Or my older brother Colin. Or my younger brother Ho-Cha-Chu. But I think it's Colin.",
  "tags": ["family", "kids", "people"]
}, {
  "body": "Dream carefully, because dreams come true.",
  "tags": ["life", "motivational"]
}, {
  "body": "Life is a comedy for those who think, but a tragedy for those who feel.",
  "tags": ["life", "love"]
}, {
  "body": "Is everything expensive or I'm just poor?",
  "tags": ["life", "money"]
}, {
  "body": "When I was born, the doctor came out to the waiting room and said to my father, &quot;I'm very sorry. We did everything we could. But he pulled through.&quot;",
  "tags": ["doctor", "insults", "kids", "stupid"]
}, {
  "body": "He's a few clowns short of a circus.",
  "tags": ["insults", "men"]
}, {
  "body": "Shock me, say something intelligent.",
  "tags": ["insults", "intelligence"]
}, {
  "body": "Maths and Girls are the most complicated things, but Maths at least has some logic.",
  "tags": ["women"]
}, {
  "body": "Why is it that most nudists are people you don't want to see naked?",
  "tags": ["life", "people"]
}, {
  "body": "Why did the duck go to rehab? Because he was a quack addict!",
  "tags": ["animal"]
}, {
  "body": "Girls are like roads, more the curves, more the dangerous they are.",
  "tags": ["women"]
}, {
  "body": "Childhood is like being drunk, everyone remembers what you did, except you.",
  "tags": ["kids"]
}, {
  "body": "No D\xE9j\xE0 vu please...I Don't want to go through that again",
  "tags": ["attitude", "life"]
}, {
  "body": "I could be a morning person. If morning started around noon.",
  "tags": ["life", "time"]
}, {
  "body": "I don't suffer from insanity. I enjoy every minute of it.",
  "tags": ["attitude", "stupid"]
}, {
  "body": "Some people feel the rain. Others just get wet.",
  "tags": ["life", "people"]
}, {
  "body": "Mostly men lie before the elections, sex and after fishing.",
  "tags": ["attitude", "life", "men"]
}, {
  "body": "Why do blondes wear underwear? To keep their ankles warm.",
  "tags": ["blonde"]
}, {
  "body": "Why do men like masturbation? It's sex with someone they love.",
  "tags": ["men", "sex"]
}, {
  "body": "Are you a computer whiz? it seems you know how to turn my software to hardware.",
  "tags": ["flirty", "IT"]
}, {
  "body": "You are living proof that manure can sprout legs and walk.",
  "tags": ["insults"]
}, {
  "body": "A woman participating in a survey was asked how she felt about condoms. She said, \"Depends on what's in it for me.\"",
  "tags": ["men", "sex", "women"]
}, {
  "body": "For my next trick I need a condom and a volunteer...",
  "tags": ["flirty", "sex"]
}, {
  "body": "I am not a vegetarian because I love animals. I am a vegetarian because I hate plants.",
  "tags": ["animal", "attitude", "hate", "love"]
}, {
  "body": "Failure is not an option\u2014it comes bundled with the software.",
  "tags": ["IT"]
}, {
  "body": "Me: Real women don't care about romantic clich\xE9s. My internal voice: Please buy me flowers, please buy me flowers, please buy me flowers.",
  "tags": ["attitude", "life", "women"]
}, {
  "body": "Coffee, Chocolate, Men. Some things are just better rich.",
  "tags": ["men"]
}, {
  "body": "Did you get those yoga pants on sale? Because at my house they're 100% off,",
  "tags": ["dirty", "flirty", "sex"]
}, {
  "body": "You know what I did before I married? Anything I wanted to.",
  "tags": ["marriage"]
}, {
  "body": "Marriage is the main reason for divorce.",
  "tags": ["life", "marriage"]
}, {
  "body": "The only reason the term 'Ladies first' was invented was for the guy to check out the woman's ass.",
  "tags": ["dirty", "men", "women"]
}, {
  "body": "I was going to quit all my bad habits for the new year, but then I remembered that nobody likes a quitter.",
  "tags": ["attitude", "life", "New Year"]
}, {
  "body": "Every time someone calls me fat I get so depress I cut myself... a piece of cake.",
  "tags": ["attitude", "fat", "insults", "life"]
}, {
  "body": "What's the difference between a blonde and a mosquito? A mosquito stops sucking when you smack it.",
  "tags": ["animal", "blonde", "dirty"]
}, {
  "body": "Why don't we wait for life on other planets to find us? Why do we have to do all the work?",
  "tags": ["attitude", "life", "work"]
}, {
  "body": "A man enters a store and says: \"15 litres of wine please.\" \"Did you bring a container for this?\" \"You're speaking to it.\"",
  "tags": ["alcohol"]
}, {
  "body": "Few women admit their age; few men act it.",
  "tags": ["age", "men", "women"]
}, {
  "body": "Unfortunately, but sometimes a woman can't find herself a man. She doesn't like the drunken ones, and the sober ones doesn't like her.",
  "tags": ["alcohol", "men", "women"]
}, {
  "body": "Even people who are good for nothing can bring smile on your face, when pushed down the stairs...",
  "tags": ["people", "sarcastic"]
}, {
  "body": "I'm not lazy... I'm just on my energy saving mode.",
  "tags": ["attitude"]
}, {
  "body": "The sun is going to go out in 4 billion years, and you sit there and act like everything is fine.",
  "tags": ["attitude", "motivational", "time"]
}, {
  "body": "Identity theft is the most diabolical way someone can compliment you on doing a good job at life.",
  "tags": ["attitude", "life", "success"]
}, {
  "body": "Why kill time when you can make it work for you?",
  "tags": ["motivational", "time", "work"]
}, {
  "body": "Plan ahead - It wasn't raining when Noah built the ark.",
  "tags": ["christian"]
}, {
  "body": "Tell me again how I unloaded the dishwasher too loudly when you were watching golf. Detectives will want to know exactly how this went down.",
  "tags": ["sarcastic", "sport"]
}, {
  "body": "You're so fat, you could sell shade.",
  "tags": ["insults", "sarcastic"]
}, {
  "body": "Why wasnt there any blacks in the flintstones? Because they were still monkeys.",
  "tags": ["black", "racist"]
}, {
  "body": "I get it ladies, I had abs before I had kids too.",
  "tags": ["attitude", "stupid", "women"]
}, {
  "body": "Everything you do you're gonna regret. But if you do nothing \u2013 you will not only regret but will also suffer.",
  "tags": ["attitude", "motivational"]
}, {
  "body": "If you can't remember my name, just say 'donuts'. I'll turn around and look.",
  "tags": ["attitude", "life", "people"]
}, {
  "body": "Me: Siri, why am I alone? Siri: *opens front facing camera*",
  "tags": ["beauty", "sarcastic"]
}, {
  "body": "Tell me what you need, and I'll tell you how to get along without it.",
  "tags": ["attitude", "sarcastic"]
}, {
  "body": "It's scary to think that people like you are graduating from college.",
  "tags": ["insults"]
}, {
  "body": "Handsome, Sweet, Intelligent, spontaneous, good-looking, nice friends, charming, funny, well...Enough about ME! How about you?",
  "tags": ["flirty", "intelligence"]
}, {
  "body": "What's a man's idea of foreplay? A half hour of begging.",
  "tags": ["men", "sex"]
}, {
  "body": "I've put something aside for a rainy day. It's an umbrella.",
  "tags": ["attitude", "life", "money"]
}, {
  "body": "I know milk does a body good, but damn girl, how much have you been drinking?",
  "tags": ["beauty", "food"]
}, {
  "body": "I'll be Burger King and you be McDonald's. I'll have it my way, and you'll be lovin' it.",
  "tags": ["flirty"]
}, {
  "body": "If Mayans could predict the future, why didn't they predict their extinction?",
  "tags": ["sarcastic"]
}, {
  "body": "Did you hear about the guy who died of a Viagra overdose? They couldn't close his casket.",
  "tags": ["dirty", "life", "sex"]
}, {
  "body": "I don't have a Fitbit. But I have a couple of fat bits.",
  "tags": ["sport"]
}, {
  "body": "Never test the depth of the water with both feet.",
  "tags": []
}, {
  "body": "If you think nobody cares if you're alive, try missing a couple of payments.",
  "tags": ["life"]
}, {
  "body": "My opinions may have changed, but not the fact that I am right.",
  "tags": []
}, {
  "body": "Don't tell me I don't know the difference between right & wrong. Wrong is the fun one.",
  "tags": ["life"]
}, {
  "body": "For every action there is an equal and opposite criticism.",
  "tags": ["life"]
}, {
  "body": "If at first you don't succeed, skydiving is not for you!",
  "tags": []
}, {
  "body": "Facts do not cease to exist because they are ignored.",
  "tags": ["life"]
}, {
  "body": "Okay, who stopped the payment on my reality check?",
  "tags": []
}, {
  "body": "Why do we bake cookies and cook bacon?",
  "tags": ["life"]
}, {
  "body": "I am busy contemplating my future. Don't worry, this will only take a minute.",
  "tags": ["life"]
}, {
  "body": "Never do card tricks for the group you play poker with.",
  "tags": []
}, {
  "body": "A memorandum is written not to inform the reader, but to protect the writer.",
  "tags": []
}, {
  "body": "My mind wants to dance but my body is a really awkward white guy.",
  "tags": ["attitude", "sarcastic"]
}, {
  "body": "Those of you who think you know it all are damn annoying to those of us who do!",
  "tags": ["attitude", "sarcastic"]
}, {
  "body": "Everyone has a photographic memory, some don't have film.",
  "tags": ["life"]
}, {
  "body": "I'm as bored as a slut on her period.",
  "tags": ["dirty", "life"]
}, {
  "body": "Life is scary; at least the salary is funny.",
  "tags": ["life", "sarcastic", "work"]
}, {
  "body": "A bus station is where a bus stops. A train station is where a train stops. On my desk, I have a work station..",
  "tags": ["puns"]
}, {
  "body": "What did the blonde say when she saw Cheerios? Donut seeds.",
  "tags": ["blonde"]
}, {
  "body": "Everything becomes 100 times louder when you're trying not to wake someone up.",
  "tags": ["life"]
}, {
  "body": "Sorry, my dog ate your text message.",
  "tags": ["animal", "sarcastic"]
}, {
  "body": "Why do people keep running over a string a dozen times with their vacuum cleaner, then reach down, pick it up, examine it, then put it down to give their vacuum one more chance?",
  "tags": ["people"]
}, {
  "body": "People who make you feel special are keepers.  Anyone with such good taste has to be admired.",
  "tags": ["attitude", "people"]
}, {
  "body": "If you're going through Hell, keep going.",
  "tags": ["attitude", "life", "motivational"]
}, {
  "body": "The end of a relationship isn't the worst thing. It's worse when it doesn't end after the end.",
  "tags": ["life", "love", "men", "women"]
}, {
  "body": "What's a mixed feeling? When you see your mother-in-law backing off a cliff in your new car.",
  "tags": ["car", "dirty"]
}, {
  "body": "Fishermen are reel men.",
  "tags": ["puns"]
}, {
  "body": "The hardest part of any relationship is when it's not your turn to talk.",
  "tags": ["communication", "love"]
}, {
  "body": "Deja Vu \u2013 When you think you're doing something you've done before, it's because God thought it was so funny, he had to rewind it for his friends.",
  "tags": ["christian", "God"]
}, {
  "body": "Your gene pool could use a little chlorine.",
  "tags": ["insults", "puns"]
}, {
  "body": "Virginity is like a soapbubble, one prick and it is gone.",
  "tags": ["flirty", "sex"]
}, {
  "body": "My annual performance review says I lack &quot;passion &amp; intensity&quot;, guess management hasn't seen me alone with a Big Mac.",
  "tags": ["food", "motivational", "work"]
}, {
  "body": "I saw a guy on his motorcycle and the back of his shirt said \"If you can read this the b*tch fell off.\"",
  "tags": ["attitude", "life", "motorcycle"]
}, {
  "body": "Last time I got caught stealing a calendar I got 12 months.",
  "tags": ["puns", "time"]
}, {
  "body": "I'm new in town. Could you give me directions to your apartment?",
  "tags": ["flirty"]
}, {
  "body": "If you are here - who is running hell?",
  "tags": ["attitude", "sarcastic"]
}, {
  "body": "What if there were no hypothetical questions?",
  "tags": ["puns"]
}, {
  "body": "I went to buy some camouflage trousers the other day but I couldn't find any.",
  "tags": ["life"]
}, {
  "body": "It's ok computer, I go to sleep after 20 minutes of inactivity too.",
  "tags": ["IT", "life"]
}, {
  "body": "What did the paper clip say to the magnet? I find you very attractive.",
  "tags": ["Valentines"]
}, {
  "body": "Do you realize that in about 40 years, we'll have thousands of old ladies running around with tattoos?",
  "tags": ["retirement", "women"]
}, {
  "body": "What do you call a magic dog? A Labracadabrador.",
  "tags": ["animal"]
}, {
  "body": "Some people are only alive because it is illegal to shoot them.",
  "tags": ["life", "people"]
}, {
  "body": "I have one of those unlimited cell phone plans. There's no limit to how much they can charge me.",
  "tags": ["life", "money", "sarcastic"]
}, {
  "body": "Fridges should have glass doors.That way i dont have to stand with the fridge door open trying to figure out my next move.",
  "tags": ["life", "women"]
}, {
  "body": "Sometimes, when I close my eyes, I... can't see.",
  "tags": ["stupid"]
}, {
  "body": "Never get into fights with ugly people, they have nothing to lose.",
  "tags": ["fighting", "people", "ugly"]
}, {
  "body": "You're like a candy bar: half sweet and half nuts.",
  "tags": ["attitude", "rude"]
}, {
  "body": "I love being married. It's so great to find that one special person you want to annoy for the rest of your life.",
  "tags": ["marriage"]
}, {
  "body": "It's hard to explain puns to kleptomaniacs because they always take things literally.",
  "tags": ["puns"]
}, {
  "body": "What's the difference between men and government bonds? Bonds mature.",
  "tags": ["men", "money"]
}, {
  "body": "I get plenty of exercise - jumping to conclusions, pushing my luck, and dodging deadlines.",
  "tags": ["attitude", "work"]
}, {
  "body": "How do people lose their kids at the mall? Seriously, any tips would be greatly appreciated.",
  "tags": ["kids", "life"]
}, {
  "body": "It was an emotional wedding. Even the cake was in tiers.",
  "tags": ["wedding"]
}, {
  "body": "I'm never wrong! One time, I thought I was wrong, but I was mistaken!",
  "tags": ["life", "mistake"]
}, {
  "body": "If every day is a gift, I'd like a receipt for Monday. I want to exchange it for another Friday.",
  "tags": ["time", "work"]
}, {
  "body": "Why did the bee get married? Because he found his honey.",
  "tags": ["animal", "marriage", "puns"]
}, {
  "body": "Just because you have one doesn't mean you have to act like one.",
  "tags": ["dirty", "insults", "men"]
}, {
  "body": "Roses are red violets are blue, I'm schizophrenic and so am I.",
  "tags": ["life"]
}, {
  "body": "The trouble with doing something right the first time is that nobody appreciates how difficult it was.",
  "tags": ["life", "time"]
}, {
  "body": "It's not the fall that kills you; it's the sudden stop at the end.",
  "tags": []
}, {
  "body": "A diplomat is someone who can tell you to go to hell in such a way that you will look forward to the trip.",
  "tags": []
}, {
  "body": "Work is for people who don't know how to fish.",
  "tags": ["life"]
}, {
  "body": "Every time I find the meaning of life, they change it.",
  "tags": ["life"]
}, {
  "body": "Comedy is tragedy plus time.",
  "tags": ["life", "time"]
}, {
  "body": "The severity of the itch is inversely proportional to the ability to reach it.",
  "tags": ["life"]
}, {
  "body": "Lottery: A tax on people who are bad at math.",
  "tags": ["life", "people"]
}, {
  "body": "The trouble with being punctual is that nobody's there to appreciate it.",
  "tags": ["life"]
}, {
  "body": "You're just jealous because the voices are talking to me.",
  "tags": ["life"]
}, {
  "body": "I sometimes go to my own little world, but that's okay, they know me there.",
  "tags": []
}, {
  "body": "Better to understand a little than to misunderstand a lot.",
  "tags": ["attitude"]
}, {
  "body": "If I've learned anything in life, it's that not enough people are at a loss for words.",
  "tags": ["life", "people"]
}, {
  "body": "I'm looking at the serving size of Laughing Cow cheese and I see why the cow is laughing.",
  "tags": ["animal", "stupid"]
}, {
  "body": "Why do men like love at first sight? It saves them a lot of time.",
  "tags": ["life", "men"]
}, {
  "body": "By the time you learn the rules of life, you're too old to play the game.",
  "tags": ["life", "time"]
}, {
  "body": "They call it \"pms\" because \"mad cow disease\" was already taken.",
  "tags": ["women"]
}, {
  "body": "Chaos, panic, & disorder - my work here is done.",
  "tags": ["work"]
}, {
  "body": "I'm trying to finish writing a script for a porno movie, but there are just too many holes in the plot.",
  "tags": ["puns", "sarcastic", "sex", "work"]
}, {
  "body": "You've got two brain cells: one is in a wheelchair and the other one is pushing.",
  "tags": ["insults", "rude"]
}, {
  "body": "A garage sale is actually a Garbage sale but the \"b\" is silent.",
  "tags": ["life", "puns"]
}, {
  "body": "Who doesn't eat on Thanksgiving? A turkey because it is always stuffed.",
  "tags": ["animal", "Thanksgiving"]
}, {
  "body": "The key to every relationship is honesty. Honesty. Honesty. Honesty. Honesty. ...Gonna keep typing this until she stops looking over my shoulder.",
  "tags": ["love", "women"]
}, {
  "body": "Sex takes up the least amount of time and causes the most amount of trouble.",
  "tags": ["life", "sex", "time"]
}, {
  "body": "Why do men name their penises? Because they don't like the idea of having a stranger make 90% of their decisions.",
  "tags": ["insults", "men"]
}, {
  "body": "What do sea monsters eat for lunch? Fish and ships.",
  "tags": ["Halloween", "puns"]
}, {
  "body": "On the other hand, you have different fingers.",
  "tags": ["puns"]
}, {
  "body": "Dont stop! I dont usually get to see beauty in motion",
  "tags": ["flirty"]
}, {
  "body": "The most dangerous room in the house really depends on where your wife is at the moment.",
  "tags": ["marriage", "women"]
}, {
  "body": "You're sweeter than 3.14",
  "tags": ["flirty", "intelligence"]
}, {
  "body": "Laughing stock: cattle with a sense of humor.",
  "tags": ["attitude", "money", "sarcastic"]
}, {
  "body": "Everything happens for a reason; unfortunately, sometimes the reason is you.",
  "tags": ["life"]
}, {
  "body": "Having sex is like playing bridge. If you don't have a good partner, you'd better have a good hand.",
  "tags": ["sex"]
}, {
  "body": "If tomatoes are technically a fruit, is ketchup technically a smoothie?",
  "tags": ["life"]
}, {
  "body": "If you were a triangle youd be acute one.",
  "tags": ["attitude", "intelligence", "life"]
}, {
  "body": "Sometimes we expect more from others because we would be willing to do that much more for them.",
  "tags": ["attitude", "friendship", "life"]
}, {
  "body": "Never give yourself a haircut after three margaritas.",
  "tags": ["life"]
}, {
  "body": "Sarcasm is just one more service we offer.",
  "tags": ["sarcastic"]
}, {
  "body": "I swear to drunk I'm not God, but seriously, stay in drugs, eat school, and don't do vegetables.",
  "tags": ["drug", "God", "life", "puns", "school"]
}, {
  "body": "I love every bone in your body, especially mine.",
  "tags": ["dirty", "flirty"]
}, {
  "body": "I put the \"fun\" in dysfunctional.",
  "tags": ["puns"]
}, {
  "body": "It used to be only death and taxes were inevitable. Now, of course, there's shipping and handling, too.",
  "tags": ["death", "life", "money"]
}, {
  "body": "You are not as bad as people say, you are much, much worse.",
  "tags": ["insults", "sarcastic"]
}, {
  "body": "Why does a blond wear a tight skirt? To keep here legs closed.",
  "tags": ["blonde", "rude"]
}, {
  "body": "Never marry a woman who was captain of the debate team.",
  "tags": ["communication", "women"]
}, {
  "body": "For Sale: Parachute. Only used once, never opened.",
  "tags": ["life", "puns"]
}, {
  "body": "According to the second law of thermodynamics, you're supposed to share your hotness with me.",
  "tags": ["flirty"]
}, {
  "body": "Scooters are for men who want to ride motorcycles, but prefer to feel the wind on their vaginas.",
  "tags": ["men", "sarcastic"]
}, {
  "body": "I just want to live in a world where people come with on\/off switches.",
  "tags": ["attitude", "IT", "people", "sarcastic"]
}, {
  "body": "This isn't working out. I think we should start making other people miserable.",
  "tags": ["motivational", "sarcastic"]
}, {
  "body": "What's the difference between a woman having her period and a terrorist? You can negotiate with a terrorist",
  "tags": ["life", "men", "women"]
}, {
  "body": "Oh, what? Sorry. I was trying to imagine you with a personality.",
  "tags": ["insults"]
}, {
  "body": "How do construction workers party? they raise the roof.",
  "tags": ["motivational", "success", "work"]
}, {
  "body": "If at first you don't succeed, blame someone else and seek counseling.",
  "tags": ["life", "motivational", "sarcastic"]
}, {
  "body": "If shit was music, you'd be an orchestra.",
  "tags": ["insults"]
}, {
  "body": "If anything is possible, is it possible for something to be impossible?",
  "tags": ["puns"]
}, {
  "body": "Took my dog to a bonfire and as he sat there staring at it blankly I realized he loves sticks. I was burning a giant pile of his toys.",
  "tags": ["animal", "life"]
}, {
  "body": "What do you get when you cross a joke with a rhetorical question?",
  "tags": ["puns"]
}, {
  "body": "I think I'll tell my kids that the Titanic sunk because Jack and Rose had sex before marriage.",
  "tags": ["attitude", "kids", "sarcastic", "sex"]
}, {
  "body": "What is a blonde's favorite fairy tale? Humpme Dumpme!",
  "tags": ["blonde"]
}, {
  "body": "I said \"no\" to drugs, but they just wouldn't listen.",
  "tags": ["drug", "life"]
}, {
  "body": "If your left leg was thanksgiving, and your right leg is Christmas, can I come visit you between the holidays?",
  "tags": ["Christmas", "dirty", "flirty"]
}, {
  "body": "We can't help everyone, but everyone can help someone.",
  "tags": ["christian", "motivational"]
}, {
  "body": "What did the elephant say to the naked man? How do you breathe through that tiny thing?",
  "tags": ["animal", "men"]
}, {
  "body": "A successful man is one who makes more money that his wife can spend. A successful woman is one who can find such a man.",
  "tags": ["men", "success", "women"]
}, {
  "body": "You'd think that with NSA reading our tweets all the time,  they could star or retweet some of the good ones.",
  "tags": ["IT"]
}, {
  "body": "Start every day off with a smile and get it over with.",
  "tags": ["motivational"]
}, {
  "body": "Latest survey shows that 3 out of 4 people make up 75% of the world's population.",
  "tags": []
}, {
  "body": "Anyone who says &quot;good morning&quot; on a Monday is a sociopath.",
  "tags": ["attitude", "people", "rude"]
}, {
  "body": "Wise people think all they say, fools say all they think.",
  "tags": ["people", "stupid"]
}, {
  "body": "Why do Americans choose from just two people to run for president and 50 for Miss America?",
  "tags": ["people", "political"]
}, {
  "body": "Ask me about my vow of silence.",
  "tags": ["attitude", "life"]
}, {
  "body": "Laugh alone and the world thinks you're an idiot.",
  "tags": ["attitude", "life"]
}, {
  "body": "The trouble with learning from experience is that you never graduate.",
  "tags": ["graduation", "school"]
}, {
  "body": "If you want breakfast in bed, sleep in the kitchen.",
  "tags": ["marriage", "women"]
}, {
  "body": "THANKS TO YOU I have learned that my prayers only get answered if I forward an e-mail to seven of my friends and make a wish within five minutes.",
  "tags": ["attitude", "sarcastic"]
}, {
  "body": "Did you fall from heaven? Cause your face is pretty messed up!",
  "tags": ["flirty", "sarcastic"]
}, {
  "body": "Are you made of beryllium, gold, and titanium? You must be because you are BeAuTi-ful.",
  "tags": ["beauty", "flirty", "intelligence"]
}, {
  "body": "Did you hear about the gay security guard who got fired from his job at the sperm bank? He got caught drinking on the job.",
  "tags": ["dirty", "gay", "rude"]
}, {
  "body": "Barking dog at the back door wanting in and your wife's yelling at the front wanting in. Which one do you let in? The dog, once he's in, he shuts up!",
  "tags": ["animal", "marriage"]
}, {
  "body": "One cigarette shortens your life by two hours, one bottle of vodka by three hours, and a workday \u2013 eight hours.",
  "tags": ["alcohol", "life", "work"]
}, {
  "body": "If a stranger offers you a piece of candy...take two.",
  "tags": ["attitude", "life"]
}, {
  "body": "Wanna dance? I can really put your inertia in motion.",
  "tags": ["flirty"]
}, {
  "body": "Confucius says Love one another. If it doesn't work, just interchange the last two words.",
  "tags": ["attitude", "love"]
}, {
  "body": "Men don't realize that if we're sleeping with them on the first date, we're probably not interested in seeing them again either.",
  "tags": ["love", "men", "women"]
}, {
  "body": "Secret to success is to know who to blame for your failures.",
  "tags": ["attitude", "life", "success", "work"]
}, {
  "body": "Fuck me if I'm wrong, but isn't your name Cindrella?",
  "tags": ["dirty", "flirty"]
}, {
  "body": "Whenever you get mad, just think of a t-rex trying to masturbate.",
  "tags": ["motivational"]
}, {
  "body": "Did you know that your body is made 70% of water? And now I'm thirsty.",
  "tags": ["dirty", "flirty"]
}, {
  "body": "No matter how much you push the envelope, it'll still be stationery.",
  "tags": ["puns"]
}, {
  "body": "Whats long and hard and has cum in it? A cucumber.",
  "tags": ["life", "puns", "sex"]
}, {
  "body": "Sex is like air; its not important unless you arent getting any.",
  "tags": ["life", "sex"]
}, {
  "body": "What is it called when a blonde blows in another blond's ear? Data transfer.",
  "tags": ["blonde"]
}, {
  "body": "No, those pants don't make you look fatter. I mean, how could they?",
  "tags": ["insults", "women"]
}, {
  "body": "Nothing says' I love my dog' quite like spending more money on his haircut than you do your own.",
  "tags": ["animal", "love", "money"]
}, {
  "body": "What did the tree say to autumn? Leaf me alone.",
  "tags": ["autumn", "life", "puns"]
}, {
  "body": "My friends say that I'm gay because I don't like football. What a bunch of idiots. I'm gay because I like cock.",
  "tags": ["gay"]
}, {
  "body": "Save your breath... You'll need it to blow up your date.",
  "tags": ["flirty", "insults"]
}, {
  "body": "Why did the blonde scale the glass wall? To see what was on the other side.",
  "tags": ["blonde"]
}, {
  "body": "I believe in respect for the dead; in fact, I could only respect you if you WERE dead.",
  "tags": ["attitude", "insults"]
}, {
  "body": "Why do blondes have TGIF on their shoes? Toes go in first!",
  "tags": ["blonde"]
}, {
  "body": "&quot;Raccoons&quot;? Oh, you mean garbage pandas?",
  "tags": ["animal", "sarcastic"]
}, {
  "body": "My hope for you is that you someday find the end of your sentence",
  "tags": ["attitude", "stupid"]
}, {
  "body": "Don't feed the animals at the zoo! You should better feed the security guard!",
  "tags": ["animal"]
}, {
  "body": "If Barbie is so popular, why do you have to buy her friends?",
  "tags": ["life"]
}, {
  "body": "Age is an issue of mind over matter. If you don't mind, it doesn't matter.",
  "tags": ["retirement"]
}, {
  "body": "I eat the broken cookies first because I feel bad for them.",
  "tags": ["attitude", "life"]
}, {
  "body": "Crowded elevators smell different to midgets.",
  "tags": ["dirty"]
}, {
  "body": "I think men who have a pierced ear are better prepared for marriage. They've experienced pain and bought jewelry.",
  "tags": ["marriage", "men"]
}, {
  "body": "Is your name Wi-Fi? Because I'm feeling a connection.",
  "tags": ["IT", "love"]
}, {
  "body": "Well, here I am! What are your other two wishes?",
  "tags": ["flirty"]
}, {
  "body": "I don't find it hard to meet expenses. They're everywhere.",
  "tags": ["money"]
}, {
  "body": "What did the duck say when he bought lipstick? \"Put it on my bill.\"",
  "tags": ["animal"]
}, {
  "body": "A woman marries a man expecting he will change, but he doesn't. A man marries a woman expecting that she won't change, and she does.",
  "tags": ["marriage", "men", "women"]
}, {
  "body": "Life without women would be a pain in the ass, literally.",
  "tags": ["gay"]
}, {
  "body": "Forget hydrogen, you're my number one element.",
  "tags": ["flirty"]
}, {
  "body": "I'm the type of person who tries to fall back asleep in the morning, just to finish a dream.",
  "tags": ["life"]
}, {
  "body": "The problem with trouble shooting is that trouble shoots back.",
  "tags": ["attitude", "fighting", "life"]
}, {
  "body": "What did the blonde say when someone blew in her ear? Thanks for the refill.",
  "tags": ["blonde"]
}, {
  "body": "Why do they use sterilized needles for death by lethal injection?",
  "tags": ["death", "life"]
}, {
  "body": "Democracy is three wolves and one sheep voting on what to have for supper.",
  "tags": ["political"]
}, {
  "body": "How long have I been working for this company? Ever since they threatened to fire me.",
  "tags": ["work"]
}, {
  "body": "I'd like to think inside your box.",
  "tags": ["dirty", "flirty", "sex"]
}, {
  "body": "Your cock is so small you could use it to floss teeth.",
  "tags": ["insults", "men"]
}, {
  "body": "I plan to donate my liver to an alcoholic so i'll know it's a match",
  "tags": ["alcohol"]
}, {
  "body": "Diplomacy is the art of letting someone else get your way.",
  "tags": ["life"]
}, {
  "body": "What lies at the bottom of the ocean and twitches? A nervous wreck.",
  "tags": ["life"]
}, {
  "body": "Join The Army, visit exotic places, meet strange people, then kill them.",
  "tags": ["fighting", "life"]
}, {
  "body": "What does a baby computer call its father? Data.",
  "tags": ["IT"]
}, {
  "body": "Love's a lot like a bullet in that the exit usually causes the most damage.",
  "tags": ["fighting", "love"]
}, {
  "body": "Only dead fish go with the flow.",
  "tags": ["life"]
}, {
  "body": "What a lovely surprise to finally discover how unlonely being alone can be.",
  "tags": ["love"]
}, {
  "body": "A little boy asked his father, \"Daddy, how much does it cost to get married?\" Father replied, \"I don't know son, I'm still paying.\"",
  "tags": ["kids", "marriage", "money"]
}, {
  "body": "At what age is it appropriate to tell my dog that he's adopted?",
  "tags": ["age", "animal", "life"]
}, {
  "body": "The difference between true love and dinosaurs: We're sure that dinosaurs once existed on this earth.",
  "tags": ["animal", "love", "sarcastic"]
}, {
  "body": "Don't steal. That's the government's job.",
  "tags": ["political"]
}, {
  "body": "Why does the Law society prohibit sex between lawyers and their clients? To prevent clients from being billed twice for essentially the same service!",
  "tags": ["life", "sex"]
}, {
  "body": "A blonde said, \"I was worried that my mechanic might try to rip me off, I was relieved when he told me all I needed was turn-signal fluid.\"",
  "tags": ["blonde"]
}, {
  "body": "He was in a pub when he proposed. It was very romantic \u2013 he got up on one knee.",
  "tags": ["alcohol", "best man speech"]
}, {
  "body": "What do you call a cheap circumcision? A: a rip off",
  "tags": ["dirty", "sex"]
}, {
  "body": "Depression: A period during which we have to get along without the things our grandparents never dreamed of.",
  "tags": ["life"]
}, {
  "body": "If you do not say it, they can't repeat it.",
  "tags": []
}, {
  "body": "Be careful of your thoughts, they may become words at any moment.",
  "tags": ["life"]
}, {
  "body": "668 \u2013 The neighbour of the beast.",
  "tags": []
}, {
  "body": "Nostalgia isn't what it used to be.",
  "tags": ["life"]
}, {
  "body": "I'm out of bed and dressed. What more do you want?",
  "tags": ["life"]
}, {
  "body": "The difference between an oral thermometer and a rectal thermometer is in the taste.",
  "tags": []
}, {
  "body": "26.8 percent of all statistics are made up on the spot.",
  "tags": ["life"]
}, {
  "body": "Age is important only if you're cheese and wine.",
  "tags": ["life", "men", "women"]
}, {
  "body": "My mind is like a steel trap. Rusty and illegal in 37 states.",
  "tags": ["life"]
}, {
  "body": "Somebody stole my mood ring and I'm not quite sure how I feel about that..",
  "tags": ["life"]
}, {
  "body": "You're not drunk if you can lie on the floor without holding on.",
  "tags": ["life"]
}, {
  "body": "Your smile must be a black hole, nothing can escape its pull.",
  "tags": ["flirty"]
}, {
  "body": "Never answer an anonymous letter.",
  "tags": ["life"]
}, {
  "body": "Sometimes the only way you can feel good about yourself is by making someone else look bad. And I'm tired of making other people feel good about themselves!",
  "tags": ["attitude", "life", "people"]
}, {
  "body": "If a woman is cold as a fish, a man has to be as patient as a fisherman.",
  "tags": ["love", "men", "women"]
}, {
  "body": "What is the difference between men and women? A woman wants one man to satisfy her every need...A man wants every woman to satisfy his one need.",
  "tags": ["life", "men", "women"]
}, {
  "body": "Get a new car for your spouse - it'll be a great trade!",
  "tags": ["car", "life", "marriage"]
}, {
  "body": "If I could rearrange the alphabet, I'd put \"U\" and \"I\" together.",
  "tags": ["flirty", "love"]
}, {
  "body": "If God is your co-pilot - swap seats.",
  "tags": ["christian", "God"]
}, {
  "body": "My wife and I had a two-hour fight about whether or not we were fighting.",
  "tags": ["fighting", "marriage"]
}, {
  "body": "Aww, it's so cute when you try to talk about things you don't understand.",
  "tags": ["insults"]
}, {
  "body": "99% of women say they don't like men who wear leather pants. Which works out perfectly, since 100% of men who wear leather pants don't like women.",
  "tags": ["gay", "women"]
}, {
  "body": "Love is like a machine... sometimes you need a good screw to fix it.",
  "tags": ["love", "puns", "sex"]
}, {
  "body": "Blind man walks into a bar... And a table, and a chair.",
  "tags": ["dirty", "life"]
}, {
  "body": "There are two types of guys: those who pee in the shower and those who don't admit it.",
  "tags": ["men"]
}, {
  "body": "Before I buy a leaf blower I want to make sure I understand the rules. We just blow the leaves at each other's houses, right?",
  "tags": ["attitude", "work"]
}, {
  "body": "Why is it called tourist season if we can't shoot them?",
  "tags": ["rude"]
}, {
  "body": "Nothing brings neighbors together, like a broken elevator.",
  "tags": ["friendship", "life"]
}, {
  "body": "A woman never wakes up her second baby just to see it smile.",
  "tags": ["kids", "women"]
}, {
  "body": "I'm pretty sure I'm going to die without knowing what 95% of a scientific calculator is used for.",
  "tags": ["intelligence", "life"]
}, {
  "body": "Have a girl that everyone else dreams about, but don't dream about a girl that everyone else has.",
  "tags": ["love", "men", "sex", "women"]
}, {
  "body": "We must be subatomic particles, because I feel strong force between us.",
  "tags": ["flirty", "love"]
}, {
  "body": "Because of the disregard towards safety techniques people not only die but are also born.",
  "tags": ["kids", "life", "sex"]
}, {
  "body": "Efficiency is a highly developed form of laziness.",
  "tags": ["life"]
}, {
  "body": "The early bird might get the worm, but the second mouse gets the cheese.",
  "tags": []
}, {
  "body": "What color do Smurfs turn if you choke them?",
  "tags": []
}, {
  "body": "Evening news is where they begin with \u2018Good evening', and then proceed to tell you why it isn't.",
  "tags": ["life"]
}, {
  "body": "Some people are like Slinkies ... not really good for anything, but you can't help smiling when you see one tumble down the stairs.",
  "tags": ["people"]
}, {
  "body": "Always borrow money from a pessimist. He won't expect it back.",
  "tags": ["attitude", "money"]
}, {
  "body": "I'm selling a parachute \u2013 just as new, used only one time, didn't open once.",
  "tags": ["life", "stupid"]
}, {
  "body": "Five days of the week, my body is a temple. The other two, it's an amusement park!",
  "tags": []
}, {
  "body": "A woman has got to love a bad man once or twice in her life, to be thankful for a good one.",
  "tags": ["men", "women"]
}, {
  "body": "Laugh and the world laughs with you. Snore and you sleep alone",
  "tags": ["life"]
}, {
  "body": "Life is an internet. 30 days after you met she wants you to register and begins taking taxes every month.",
  "tags": ["life"]
}, {
  "body": "What is the one thing that all men at singles bars have in common? They're married.",
  "tags": ["marriage", "men"]
}, {
  "body": "A psychiatrist asks a lot of expensive questions which your wife asks for nothing.",
  "tags": ["marriage"]
}, {
  "body": "Consciousness: That annoying time between naps.",
  "tags": ["life", "time"]
}, {
  "body": "I drive way too fast to worry about cholesterol.",
  "tags": ["life"]
}, {
  "body": "If a person told you they were a pathological liar, should you believe them?",
  "tags": ["life"]
}, {
  "body": "I intend to live forever... or die trying.",
  "tags": ["life"]
}, {
  "body": "Don't trust atoms, they make up everything.",
  "tags": []
}, {
  "body": "It is easier to preach ten sermons than it is to live one.",
  "tags": ["christian"]
}, {
  "body": "Dear Week, I'm so over you. I'm leaving you for your best friend, Weekend. Don't try to find us for at least 2 days.",
  "tags": ["attitude", "life"]
}, {
  "body": "Scientists proved that cows don't give us meat and milk. We just take it from them!",
  "tags": ["animal", "life"]
}, {
  "body": "Definition of a teenager? God's punishment for enjoying sex.",
  "tags": ["kids", "sex"]
}, {
  "body": "My love is like communism; everyone gets a share, and it's only good in theory.",
  "tags": ["love", "political"]
}, {
  "body": "Why are birthday's good for you? Statistics show that the people who have the most live the longest!",
  "tags": ["birthday", "life"]
}, {
  "body": "Why do Retirees smile all the time? Because they can't hear a word you're saying!",
  "tags": ["retirement"]
}, {
  "body": "All I ask is a chance to prove money can't make me happy.",
  "tags": ["money"]
}, {
  "body": "Every wife should understand one thing: a dinner will taste better if she cooks it less frequently.",
  "tags": ["marriage", "women", "work"]
}, {
  "body": "I don't have an attitude problem. You have a perception problem.",
  "tags": ["attitude"]
}, {
  "body": "Children in the dark make accidents, but accidents in the dark make children.",
  "tags": ["kids", "sex"]
}, {
  "body": "It's okay Microsoft Excel even my love life is not responding.",
  "tags": ["IT", "life", "love"]
}, {
  "body": "Politics is the art of looking for trouble, finding it, misdiagnosing it and then misapplying the wrong remedies.",
  "tags": ["political"]
}, {
  "body": "Those who have some means think that the most important thing in the world is love; the poor know that it is money.",
  "tags": ["love", "money"]
}, {
  "body": "The human soul weighs 1.2lbs. I know because I've weighed myself before and after I walk into my job.",
  "tags": ["work"]
}, {
  "body": "How Do they say \"F**k You\" in Hollywood? \"Trust Me...\"",
  "tags": ["life"]
}, {
  "body": "Did your parents keep the placenta and throw away the baby?",
  "tags": ["insults"]
}, {
  "body": "Why name hurricanes lame names, like Sandy? Name that shit Hurricane Death Megatron 300 and I guarantee niggas be evacuating like they need to.",
  "tags": ["death", "life"]
}, {
  "body": "One day you will meet someone so amazing in every way who will want absolutely nothing to do with you.",
  "tags": ["love", "sarcastic"]
}, {
  "body": "STRESSED is just DESSERTS spelled backward.",
  "tags": ["Christmas", "puns"]
}, {
  "body": "You have the perfect face for radio.",
  "tags": ["dirty", "insults"]
}, {
  "body": "Television is a medium because anything well done is rare.",
  "tags": ["puns", "sarcastic"]
}, {
  "body": "To be happy with a man, you must understand him a lot and love him a little. To be happy with a woman, you must love her a lot and not try to understand her at all.",
  "tags": ["happiness", "love", "men", "women"]
}, {
  "body": "Men wake up as good-looking as they went to bed. Women somehow deteriorate during the night.",
  "tags": ["men", "women"]
}, {
  "body": "Stop repeat offenders. Don't re-elect them!",
  "tags": ["political"]
}, {
  "body": "Too many freaks, not enough circuses.",
  "tags": ["life", "rude"]
}, {
  "body": "If by free spirits you mean an open bar, then yes I love free spirits.",
  "tags": ["attitude", "love"]
}, {
  "body": "Love is not the number of times you kissed her, but the number of moments you were dying to kiss her.",
  "tags": ["love"]
}, {
  "body": "Love is blind, only marriage opens your eyes.",
  "tags": ["love", "marriage"]
}, {
  "body": "Why is it good to have a blonde passenger? You can park in the handicap zone.",
  "tags": ["blonde", "stupid"]
}, {
  "body": "Are you a keyboard? Because you're my type!",
  "tags": ["flirty", "IT"]
}, {
  "body": "Never go to bed angry, stay awake and plot your revenge.",
  "tags": ["attitude"]
}, {
  "body": "Introducing myself to new boyfriends parents: &quot;Hi, I usually don't make it this far.&quot;",
  "tags": ["communication", "family", "love"]
}, {
  "body": "My wife ran off with my best friend last week. I miss him!",
  "tags": ["marriage", "women"]
}, {
  "body": "I know Jiu-Jitsu, Sambo, Judo, Aikido and lots of other scary words.",
  "tags": ["sport"]
}, {
  "body": "People who live in stone houses shouldn't throw glasses.",
  "tags": ["life", "marriage"]
}, {
  "body": "Only after getting married you realise that those husband-wife jokes were not just jokes.",
  "tags": ["life", "marriage"]
}, {
  "body": "My calling in life went straight to voicemail.",
  "tags": ["life"]
}, {
  "body": "I used to think love() was abstract, until you implemented it in MyHeart.",
  "tags": ["flirty", "IT"]
}, {
  "body": "Tomorrow: The best labor saving device of today.",
  "tags": ["attitude", "life", "motivational"]
}, {
  "body": "You're IQ's lower than your shoe size.",
  "tags": ["insults", "rude"]
}, {
  "body": "I like the sound of you not talking.",
  "tags": ["communication", "friendship", "life", "sarcastic"]
}, {
  "body": "Who is the most popular guy at the nudist colony? The guy who can carry a cup of coffee in each hand and a dozen donuts.",
  "tags": ["men", "rude"]
}, {
  "body": "I'm attracted to you so strongly, scientists will have to develop a fifth fundamental force.",
  "tags": ["flirty"]
}, {
  "body": "You should argue with your wife only when she's not around.",
  "tags": ["attitude", "marriage", "women"]
}, {
  "body": "My wife has to be the worst cook. Her specialty is indigestion.",
  "tags": ["marriage", "women"]
}, {
  "body": "I wish you were a door so I could slam you all day long.",
  "tags": []
}, {
  "body": "How can you tell if a man is sexually excited? He's breathing.",
  "tags": ["men", "sex"]
}, {
  "body": "Girl you're like a car accident, cause I just can't look away.",
  "tags": ["attitude", "beauty", "sarcastic"]
}, {
  "body": "He's as sharp as a bowling ball.",
  "tags": ["insults"]
}, {
  "body": "The less you love a woman, the faster your hand gets tired.",
  "tags": ["love", "men", "sex", "women"]
}, {
  "body": "Marriage is like coffee. First it's really hot. Then it's just right. Then it helps you to get off your ass and do things.",
  "tags": ["marriage"]
}, {
  "body": "If homework goes too easy you are doing it wrong.",
  "tags": ["school", "work"]
}, {
  "body": "The best things in the world are free - and worth every penny of it.",
  "tags": ["money", "sex"]
}, {
  "body": "Ever since I took geometry at school, my life has turned around 360 degrees.",
  "tags": ["life", "school"]
}, {
  "body": "If sex is such a natural phenomenon, how come there are so many books on how to do it?",
  "tags": ["sarcastic", "sex"]
}, {
  "body": "Men are like Bluetooth. When they're close they're connected, when they move further they start looking for new equipment.",
  "tags": ["men", "sex"]
}, {
  "body": "I found out about you from my last nightmare.",
  "tags": ["friendship", "life", "sarcastic"]
}, {
  "body": "Slept like a log last night... Woke up in the fireplace.",
  "tags": ["life"]
}, {
  "body": "How are tornadoes and marriage alike? They both begin with a lot of sucking and blowing, and in the end you lose your house.",
  "tags": ["life", "marriage"]
}, {
  "body": "Don't be nervous if someone is driving ahead of you- the world is round, just think that you're driving first!",
  "tags": ["motivational"]
}, {
  "body": "There's a fine line between cuddling and holding someone down so they can't get away.",
  "tags": ["love"]
}, {
  "body": "I know how to feed a nation\u2026but will she eat it?",
  "tags": ["sarcastic"]
}, {
  "body": "A New Year's resolution is something that goes in one year and out the other.",
  "tags": ["life", "New Year"]
}, {
  "body": "When I look into your eyes, I see straight through to the back of your head.",
  "tags": ["insults", "stupid"]
}, {
  "body": "My girlfriend started smoking, so I slowed down and applied Lubricant.",
  "tags": ["sex", "women"]
}, {
  "body": "Crime doesn't pay... does that mean that my job is a crime?",
  "tags": ["life"]
}, {
  "body": "Take an icecube to the bar, smash it and say: \"Now that I've broken the ice, will you sleep with me?\"",
  "tags": ["flirty", "sarcastic"]
}, {
  "body": "You take away the looks, money, intelligence, charm and success and, really, there's no real difference between me and George Clooney.",
  "tags": ["beauty", "intelligence", "life", "money", "sarcastic"]
}, {
  "body": "Life didn't work out, but everything else is not that bad.",
  "tags": ["life", "sarcastic"]
}, {
  "body": "We have enough gun control. What we need is idiot control.",
  "tags": ["stupid"]
}, {
  "body": "A friend is like a book: you don't need to read all of them, just pick the best ones.",
  "tags": ["friendship"]
}, {
  "body": "You must be a magnetic monopole because all I get from you is attraction.",
  "tags": ["flirty"]
}, {
  "body": "The more people I meet, the more I like my dog.",
  "tags": ["animal", "love"]
}, {
  "body": "Smartphones are pacifiers for adults.",
  "tags": ["IT"]
}, {
  "body": "If we aren't supposed to eat animals, why are they made with meat?",
  "tags": ["animal", "attitude"]
}, {
  "body": "What tea do hockey players drink? Penaltea!",
  "tags": ["puns", "sport"]
}, {
  "body": "Everything always ends well. If not \u2013 it's probably not the end.",
  "tags": ["attitude", "life", "motivational"]
}, {
  "body": "There are a lot of fish in the sea, but you're the only one I'd like to catch and mount back home",
  "tags": ["animal", "flirty"]
}, {
  "body": "White smoke from under my hood means either my starter went out or my car has elected a new Pope.",
  "tags": ["attitude", "sarcastic"]
}, {
  "body": "Inflation: Being broke with a lot of money in your pocket.",
  "tags": ["money"]
}, {
  "body": "Strangers have the best candy.",
  "tags": []
}, {
  "body": "The problem with being in the center of attention is that half of it is always behind your back.",
  "tags": ["life"]
}, {
  "body": "Concerning the absence of toilet paper, there should be complaint books laid out at publicly used places.",
  "tags": ["life"]
}, {
  "body": "Love may be blind, but marriage is a real eye-opener.",
  "tags": ["love", "marriage"]
}, {
  "body": "I wish conversations were like user agreements where I could skip to the end and just agree.",
  "tags": ["attitude", "life"]
}, {
  "body": "Drink coffee! Do stupid things faster with more energy!",
  "tags": ["life", "stupid"]
}, {
  "body": "Always give 100% at work: 12% Monday, 23% Tuesday, 40% Wednesday, 20% Thursday, 5% Friday.",
  "tags": ["attitude"]
}, {
  "body": "Why did God create the orgasm? So women can moan even when they're happy.",
  "tags": ["God", "life", "sex", "women"]
}, {
  "body": "Its girls like u that cause global warming!",
  "tags": ["flirty", "insults"]
}, {
  "body": "Be nice to your kids. They'll choose your nursing home.",
  "tags": ["kids", "retirement"]
}, {
  "body": "Every function without you will always be void of love.",
  "tags": ["flirty", "IT", "love"]
}, {
  "body": "You can consider yourself lucky in life, if the cognac you drink is older than the woman that you're sleeping with.",
  "tags": ["alcohol", "attitude", "life"]
}, {
  "body": "What's a man's idea of a perfect date? A woman who answers the door stark naked holding a six pack.",
  "tags": ["love", "men", "women"]
}, {
  "body": "Why doesn't Santa have any kids? He only comes once a year.",
  "tags": ["Christmas", "dirty", "kids"]
}, {
  "body": "No! for the last time stop asking if i am drunk. I am not drunk! Who would name their kid drunk?",
  "tags": ["alcohol", "kids", "life"]
}, {
  "body": "Sorry I didn't text you back, but my phone recognized your number.",
  "tags": ["attitude", "communication", "rude", "sarcastic"]
}, {
  "body": "What's \"68\"? You do me and I owe you one.",
  "tags": ["sex"]
}, {
  "body": "Sex without love is a meaningless experience, but as far as meaningless experiences go, it's pretty damn good.",
  "tags": ["love", "sex"]
}, {
  "body": "Want to hear a pizza joke... nah, it's too cheesy. What about a construction joke? Oh never mind, I'm still working on that one. Did you hear the one about the rope? Skip it. Have you heard the one about the guy in the wheelchair? Never mind, it's too lame.",
  "tags": ["life", "sarcastic"]
}, {
  "body": "You're not old until a teenager describes you as middle-aged.",
  "tags": ["age", "kids", "life"]
}, {
  "body": "You're more special than relativity.",
  "tags": ["flirty"]
}, {
  "body": "Whenever I find the key to success, someone changes the lock.",
  "tags": ["attitude", "life", "success"]
}, {
  "body": "Credit cards are VERY dangerous. Every time I try to use one somebody starts chasing me with scissors.",
  "tags": ["life", "money"]
}, {
  "body": "I may be dumb, but I'm not stupid.",
  "tags": ["sport", "stupid"]
}, {
  "body": "What is the difference between snowmen and snowwomen? Snowballs.",
  "tags": ["Christmas", "men", "women"]
}, {
  "body": "Screw me if I am wrong, but haven't we met before?",
  "tags": ["flirty", "sex"]
}, {
  "body": "Here's $10. Drink until I am really good looking, then come and talk to me.",
  "tags": ["alcohol", "attitude", "beauty"]
}, {
  "body": "If a church wants a better pastor, It only needs to pray for the one it has.",
  "tags": ["christian"]
}, {
  "body": "Join the Army, meet interesting people, and kill them.",
  "tags": ["attitude", "life", "people", "sarcastic", "stupid"]
}, {
  "body": "Programming is like sex; one mistake and you have to support for a lifetime.",
  "tags": ["IT", "mistake", "sex"]
}, {
  "body": "You still use Internet Explorer? You must like it nice and slow.",
  "tags": ["dirty", "flirty", "sex"]
}, {
  "body": "When you go into court, you are putting your fate into the hands of people who weren't smart enough to get out of jury duty.",
  "tags": ["life", "people"]
}, {
  "body": "A diplomat is a man who always remembers a woman's birthday but never remembers her age.",
  "tags": ["age", "women"]
}, {
  "body": "Football gave me a traumatic brain injury and I was only watching.",
  "tags": ["sarcastic", "sport"]
}, {
  "body": "Dating a single mother is like continuing from somebody else's saved game.",
  "tags": ["kids", "life", "women"]
}, {
  "body": "Never hit a man with glasses. Hit him with a baseball bat.",
  "tags": ["dirty"]
}, {
  "body": "The shinbone is a device for finding furniture in a dark room.",
  "tags": ["life"]
}, {
  "body": "I'd kill for a Nobel Peace Prize.",
  "tags": ["life"]
}, {
  "body": "Some people hear voices.. Some see invisible people.. Others have no imagination whatsoever.",
  "tags": ["life", "people"]
}, {
  "body": "An escalator can never break \u2014 it can only become stairs.",
  "tags": ["life"]
}, {
  "body": "Shin: A device for finding furniture in the dark.",
  "tags": ["life"]
}, {
  "body": "Why do they lock gas station bathrooms? Are they afraid someone will clean them?",
  "tags": ["life"]
}, {
  "body": "If you're looking for the best time to spill things on yourself, might I suggest wearing a white shirt and right before an interview.",
  "tags": ["attitude", "life"]
}, {
  "body": "The difference between in-laws and outlaws? Outlaws are wanted.",
  "tags": []
}, {
  "body": "If you can stay calm while all around you is chaos, then you probably haven't completely understood the situation.",
  "tags": ["life"]
}, {
  "body": "Well aren't you a waste of two billion years of evolution.",
  "tags": []
}, {
  "body": "Oops. My brain just hit a bad sector.",
  "tags": ["life"]
}, {
  "body": "If something goes wrong at the office, blame the guy who can't speak English...",
  "tags": ["work"]
}, {
  "body": "A consensus means that everyone agrees to say collectively what no one believes individually.",
  "tags": ["life"]
}, {
  "body": "I'm the flower, you're the bee. Why don't you suck the sweet pollen right out of me?",
  "tags": ["animal", "dirty", "flirty"]
}, {
  "body": "Are you a singularity? Not only are you attractive, but the closer I get to you, the faster time seems to slip by.",
  "tags": ["beauty", "flirty", "time"]
}, {
  "body": "don't regret doing things, regret getting caught",
  "tags": ["attitude", "life"]
}, {
  "body": "Occasionally, a true friend gives his paw not his hand...",
  "tags": ["animal", "friendship"]
}, {
  "body": "It's better to be the first lover than a third wife.",
  "tags": ["love", "marriage", "women"]
}, {
  "body": "We never really grow up, we only learn how to act in public.",
  "tags": ["kids", "life"]
}, {
  "body": "Kids, just because I don't care doesn't mean I'm not listening.",
  "tags": ["kids"]
}, {
  "body": "I always knew that I could never be a lawyer because of my inability to pass a bar.",
  "tags": ["attitude", "work"]
}, {
  "body": "Do not take life too seriously. You will never get out of it alive.",
  "tags": ["life"]
}, {
  "body": "Some people think that their life experience compensates for their lack of brain.",
  "tags": ["attitude", "life"]
}, {
  "body": "I wish the girls who rejected me in high school could see how many Pok\xE9mon I've caught.",
  "tags": ["life", "love"]
}, {
  "body": "According to the principle of the sandwich, if you put butter on both sides the sandwich will hang in the air.",
  "tags": ["life"]
}, {
  "body": "I think football would become an even better game if someone could invent a ball that kicks back.",
  "tags": ["sport"]
}, {
  "body": "My wife dresses to kill. She cooks the same way.",
  "tags": ["marriage", "women"]
}, {
  "body": "Foreign Aid: The transfer of money from poor people in rich countries to rich people in poor countries.",
  "tags": ["life", "money", "people"]
}, {
  "body": "A good time to keep your mouth shut is when you're in deep water.",
  "tags": ["time"]
}, {
  "body": "The only thing worse than seeing something done wrong is seeing it done slowly.",
  "tags": ["life", "time", "work"]
}, {
  "body": "I don't think it's rude to ask someone in an online dating site to send a picture posing with a copy of today's newspaper.",
  "tags": ["flirty", "love", "rude", "time"]
}, {
  "body": "Where do you find a birthday present for a cat? In a cat-alogue!",
  "tags": ["animal", "birthday", "puns"]
}, {
  "body": "Are you the square root of -1? Because you can't be real.",
  "tags": ["flirty", "intelligence"]
}, {
  "body": "If I throw a stick, will you leave?",
  "tags": ["animal", "sarcastic"]
}, {
  "body": "Behind every successful man is his woman. Behind the fall of a successful man is usually another woman.",
  "tags": ["marriage", "men", "success", "women"]
}, {
  "body": "I love my life, but it just wants to be friends...",
  "tags": ["life", "sarcastic"]
}, {
  "body": "My love for you is like dividing by zero - it cannot be defined.",
  "tags": ["flirty", "love"]
}, {
  "body": "Why should blondes not be given coffee breaks? It takes too long to retrain them.",
  "tags": ["blonde", "work"]
}, {
  "body": "Why did the snowman smile? Because the snowblower is coming.",
  "tags": ["dirty", "puns", "stupid"]
}, {
  "body": "The speed of light is when you take out a bottle of beer out of the fridge before the light comes on.",
  "tags": ["alcohol", "life"]
}, {
  "body": "There is no point of running away form a sniper. You will die from exhaustion.",
  "tags": ["life", "sarcastic"]
}, {
  "body": "I've seen people like you, but I had to pay admission!",
  "tags": ["insults"]
}, {
  "body": "I'm blonde. What's your excuse?",
  "tags": ["blonde", "insults", "rude"]
}, {
  "body": "Life is sexually transmitted.",
  "tags": ["life", "sex"]
}, {
  "body": "When tempted to fight fire with fire, remember that the Fire Department usually uses water.",
  "tags": ["fighting"]
}, {
  "body": "I buy a lot of ringtones for someone who hasn't answered a phone call since 2008.",
  "tags": ["IT", "life", "rude"]
}, {
  "body": "After (M)onday and (T)uesday even the week says WTF!",
  "tags": ["life"]
}, {
  "body": "*wife walks in to see the boys have built a chair fort* Wife: PUT THOSE CHAIRS BACK! Me *climbing out of fort* YOU HEARD YOUR MOTHER!",
  "tags": ["family"]
}, {
  "body": "What do you call a woman who is paralyzed from the waist down? Married.",
  "tags": ["dirty", "marriage", "sex"]
}, {
  "body": "You don't work \u2013 you don't have money to live, you work \u2013 there's no time to live.",
  "tags": ["life", "money", "work"]
}, {
  "body": "Your momma is so mean... she has no standard deviation.",
  "tags": ["insults"]
}, {
  "body": "I've been running as fast as I can, but I still can't catch my breath.",
  "tags": ["life", "sarcastic", "sport"]
}, {
  "body": "I love when I leave work early to surprise my wife at home and she greets me with those three very special words\u2026 &quot;Were you fired?&quot;",
  "tags": ["marriage", "work"]
}, {
  "body": "Are you made of copper and tellurium? Because you're CuTe",
  "tags": ["beauty", "flirty", "intelligence"]
}, {
  "body": "In democracy, it's your vote that counts. In feudalism, it's your count that votes.",
  "tags": ["puns"]
}, {
  "body": "I saw six men kicking and punching the mother-in-law. My neighbour said \u2018Are you going to help?' I said \u2018No, six should be enough.'",
  "tags": ["dirty", "marriage", "rude"]
}, {
  "body": "If your going to be two faced at least make one of them pretty.",
  "tags": ["insults"]
}, {
  "body": "Beauty is in the eye of the beer holder.",
  "tags": ["alcohol", "beauty", "puns"]
}, {
  "body": "I carry a permanent marker just in case someone without a mustache falls asleep.",
  "tags": []
}, {
  "body": "All generalizations are false, including this one.",
  "tags": []
}, {
  "body": "Secret: Something which is told to one person at a time.",
  "tags": ["life"]
}, {
  "body": "Only in America ... do banks leave both doors open and then chain the pens to the counters.",
  "tags": ["life"]
}, {
  "body": "I read recipes the same way I read science fiction. I get to the end and I think, \"Well, that's not going to happen.\"",
  "tags": ["life"]
}, {
  "body": "The only substitute for good manners is fast reflexes.",
  "tags": []
}, {
  "body": "If you jingle my bells ill promise you a white christmas",
  "tags": ["Christmas", "dirty"]
}, {
  "body": "I'm smiling. This should scare you.",
  "tags": ["attitude", "sarcastic"]
}, {
  "body": "Somedays I feel like running away. Then I remember how much I hate running.",
  "tags": ["life", "sport"]
}, {
  "body": "Women will never be equal to men until they can walk down the street with a bald head and a beer gut, and still think they are sexy.",
  "tags": ["men", "women"]
}, {
  "body": "To weigh 50 kilos and say that you're fat, that is so female\u2026",
  "tags": ["attitude", "women"]
}, {
  "body": "I will have enough money for the rest of my life. Of course, if I don't buy and eat anything.",
  "tags": ["life", "money"]
}, {
  "body": "The panic begins with the first one to say \u2018Calm down!'",
  "tags": ["life"]
}, {
  "body": "By the time a man realises that his father was right, he has a son who thinks he's wrong.",
  "tags": ["kids", "men", "time"]
}, {
  "body": "I dont care or think about the people in my past... there is some reason why they didn't make it to my future!",
  "tags": ["attitude", "life", "people"]
}, {
  "body": "When men say &quot;I'm fine&quot; they actually mean it.     Weirdos.",
  "tags": ["men", "rude"]
}, {
  "body": "What happens to a frog's car when it breaks down? It gets toad away.",
  "tags": ["animal"]
}, {
  "body": "You should be wearing a jersey so i dont have to ask for your name or number",
  "tags": ["attitude", "sport"]
}, {
  "body": "\u2018Darling, will you catch me if I jump into the water?' \u2018Darling, if I say yes, will you jump?",
  "tags": ["men", "sarcastic", "women"]
}, {
  "body": "All my dance moves look like i'm trying to tell the guy on first base to steal second..",
  "tags": ["life", "women"]
}, {
  "body": "I can't count how many times I failed maths at school.",
  "tags": ["school"]
}, {
  "body": "Nobody is interested in your sorrow, unless you can make a joke or a poem out of it.",
  "tags": ["sarcastic"]
}, {
  "body": "You don't like her? Drink more.",
  "tags": ["alcohol", "men", "rude"]
}, {
  "body": "If you can't beat the record, you can beat up its owner.",
  "tags": ["attitude", "motivational"]
}, {
  "body": "What are the three words women hate to hear during sex? &quot;Honey, I'm home!&quot;",
  "tags": ["hate", "marriage", "sex", "women"]
}, {
  "body": "Mom: If a boy touches your boobs say \"don't\" and if he touches your pussy say \"stop\"? Girl: But mom, he touched both so I said \"don't stop\".",
  "tags": ["dirty", "men", "puns", "sex"]
}, {
  "body": "We just got a fax. At work. We didn't know we had a fax machine. The entire department just stared at it. I poked it with a stick.",
  "tags": ["intelligence", "IT", "stupid"]
}, {
  "body": "What's the difference between a bitch and a whore? A whore sleeps with everybody at the party, and a bitch sleeps with everybody at the party except you.",
  "tags": ["dirty", "women"]
}, {
  "body": "Lawyers really aren't so bad, it's just ninety-nine percent of lawyers that make the rest look bad.",
  "tags": ["sarcastic", "work"]
}, {
  "body": "How do you get a blonde to marry you? Tell her she's pregnant.",
  "tags": ["blonde"]
}, {
  "body": "Love helps to kill time. And time helps to kill love.",
  "tags": ["life", "love"]
}, {
  "body": "All the problems fade before a hangover",
  "tags": ["alcohol", "life"]
}, {
  "body": "Why do female skydivers wear jock straps? So they don't whistle on the way down.",
  "tags": ["women"]
}, {
  "body": "You know the world is going crazy when the best rapper is a white guy, the best golfer is a black guy, the tallest guy in the NBA is Chinese, the Swiss hold the America's Cup, France is accusing the U.S. of arrogance, Germany doesn't want to go to war, and the three most powerful men in America are named \u2018Bush', \u2018Dick', and \u2018Colon'. Need I say more?",
  "tags": ["life"]
}, {
  "body": "An idea came to the mind, and now she's searching for the brain.",
  "tags": ["life"]
}, {
  "body": "My best toys run on batteries",
  "tags": ["dirty"]
}, {
  "body": "There are two types of people in this world: Those who can extrapolate from incomplete data.",
  "tags": ["life", "people"]
}, {
  "body": "What does a panda ghost eat? Bam-BOO!",
  "tags": ["Halloween"]
}, {
  "body": "On a scale of North Korea to America, how free are you tonight?",
  "tags": ["political", "stupid"]
}, {
  "body": "I wanna hang a map of the world in my house. Then I'm gonna put pins into all the locations that I've traveled to. But first, I'm gonna have to travel to the top two corners of the map so it won't fall down.",
  "tags": ["life", "travel"]
}, {
  "body": "Why did the cannibal break up with his girlfriend? She didn't suit his taste!",
  "tags": ["Valentines"]
}, {
  "body": "We need to look at how the world really works, not just accept the way we are told it works.",
  "tags": ["attitude", "motivational"]
}, {
  "body": "Tequila is a good drink: you drink it and you feel like a cactus; the only problem is that in the morning the thorns grow inward.",
  "tags": ["alcohol", "life", "motivational"]
}, {
  "body": "If the other driver had stopped a few yards behind himself the accident would not have happened.",
  "tags": ["car"]
}, {
  "body": "You're 10 times more likely to die when your girlfriend says, \"I'm fine\" than when you are flying on an airplane.",
  "tags": ["life", "women"]
}, {
  "body": "Seen it all, done it all, can't remember most of it.",
  "tags": ["life"]
}, {
  "body": "I wondered why the Frisbee was getting bigger, and then it hit me.",
  "tags": []
}, {
  "body": "The sole purpose of a child's middle name, is so he can tell when he's really in trouble.",
  "tags": ["kids"]
}, {
  "body": "Why do women always ask questions that have no right answers?",
  "tags": ["women"]
}, {
  "body": "Those who live by the sword get shot by those who don't!",
  "tags": ["life"]
}, {
  "body": "You have the right to remain silent. Anything you say will be misquoted then used against you.",
  "tags": ["life"]
}, {
  "body": "What's the difference between roast beef and pea soup? Anyone can roast beef.",
  "tags": ["life", "stupid"]
}, {
  "body": "Love is the irresistible desire to be irresistibly desired.",
  "tags": ["love"]
}, {
  "body": "There are two kinds of friends : those who are around when you need them, and those who are around when they need you.",
  "tags": ["life"]
}, {
  "body": "Every organisation is perfectly designed to get the results they are getting.",
  "tags": ["life"]
}, {
  "body": "Generally, all generalisations are false.",
  "tags": ["life"]
}, {
  "body": "Just trying to give my kids a few childhood memories they don't have to repress...",
  "tags": ["kids", "life"]
}, {
  "body": "The kiss is a wordless articulation of desire whose object lies in the future, and somewhat to the south.",
  "tags": ["love", "sex"]
}, {
  "body": "True friendship comes when the silence between two people is comfortable.",
  "tags": ["life"]
}, {
  "body": "If we get rid of all the margarine the world will be a butter place.",
  "tags": ["life"]
}, {
  "body": "There are no winners in life ...only survivors.",
  "tags": ["life"]
}, {
  "body": "if a single teacher cant teach us all subjects,how is a student supposed to learn all the fucking subjects?",
  "tags": ["kids", "life"]
}, {
  "body": "A warning shot into the head.",
  "tags": ["sarcastic"]
}, {
  "body": "Some mistakes are too much fun to only make once.",
  "tags": ["life", "love", "mistake"]
}, {
  "body": "My idea of flirting is giving a girl 1 of my 10 tacos.",
  "tags": ["flirty", "food"]
}, {
  "body": "Don't piss me off! I'm running out of places to hide the bodies.",
  "tags": []
}, {
  "body": "Why do they say that eating yogurt and oysters will improve your sex life? Because if you'll eat that stuff, you'll eat anything.",
  "tags": ["sex"]
}, {
  "body": "No woman ever falls in love with a man unless she has a better opinion of him than he deserves.",
  "tags": ["love", "men", "women"]
}, {
  "body": "Avoid arguments about the toilet seat...use the sink...",
  "tags": ["men", "stupid"]
}, {
  "body": "If it is not Valentines day and you see a man in a flower shop, you can probably start up a conversation by asking, 'What did you do?'",
  "tags": ["men", "Valentines", "women"]
}, {
  "body": "A relationship without trust is like a phone without service. And what do you do with a phone without service? You play games.",
  "tags": ["life", "love", "men", "women"]
}, {
  "body": "I recently added squats to my workouts by moving the beer into the bottom shelf of the fridge.",
  "tags": ["attitude", "sarcastic", "sport"]
}, {
  "body": "What does it mean when you see a bunch of blacks running in one direction? Jail break.",
  "tags": ["black", "racist"]
}, {
  "body": "The person who invented the door knock won the No-bell prize.",
  "tags": ["life", "puns"]
}, {
  "body": "&quot;You can't sleep either?&quot; Says a voice from under your bed.",
  "tags": ["life"]
}, {
  "body": "Wanna get together and test the spring potential of my mattress?",
  "tags": ["dirty", "flirty"]
}, {
  "body": "Why is sleeping with a man like a soap opera? Just when it's getting interesting, they're finished until next time.",
  "tags": ["life", "men", "sex"]
}, {
  "body": "My cat's dead, can I play with your pussy instead?",
  "tags": ["dirty", "flirty"]
}, {
  "body": "What do ghosts serve for dessert? I Scream.",
  "tags": ["Halloween", "puns"]
}, {
  "body": "Are you always this stupid or is today a special occasion?",
  "tags": ["insults", "retirement"]
}, {
  "body": "What nationality is Santa Claus? North Polish",
  "tags": ["Christmas", "puns"]
}, {
  "body": "Men are like bank accounts. Without a lot of money, they don't generate much interest.",
  "tags": ["dirty", "men", "money"]
}, {
  "body": "Karma is like 69. You get what you give.",
  "tags": ["life", "sex"]
}, {
  "body": "I found there was only one way to look thin: hang out with fat people.",
  "tags": ["fat", "life", "rude"]
}, {
  "body": "A woman worries about the future until she gets a husband. A man never worries about the future until he gets a wife.",
  "tags": ["marriage", "men"]
}, {
  "body": "I sleep better naked\u2026why can't the flight attendant understand this?",
  "tags": ["attitude", "life"]
}, {
  "body": "At every party there are two kinds of people: those who want to go home and those who don't. The trouble is, they are usually married to each other.",
  "tags": ["marriage", "people"]
}, {
  "body": "I never loved you any more than I do, right this second. And I'll never love you any less than I do, right this second.",
  "tags": ["love", "Valentines"]
}, {
  "body": "If he asks what sort of books you're interested in, tell him check books.",
  "tags": ["men"]
}, {
  "body": "&quot;What else can we think about?&quot;  - Insomnia",
  "tags": ["attitude"]
}, {
  "body": "Think of how stupid the average person is, and realize half of them are stupider than that.",
  "tags": ["stupid"]
}, {
  "body": "Money is the root of all wealth.",
  "tags": ["money"]
}, {
  "body": "Our conscience is clear- we don't use it.",
  "tags": ["attitude", "life"]
}, {
  "body": "Updating your relationship status in public is fine. Updating your relationship problems in public is stupidity.",
  "tags": ["attitude", "love"]
}, {
  "body": "When you don't know, what you are doing, it's best, to do it quickly.",
  "tags": ["attitude", "life"]
}, {
  "body": "Introverts have fun too, we just don't care if you know...",
  "tags": ["attitude", "rude"]
}, {
  "body": "Sex on tv can't hurt unless you fall off.",
  "tags": ["puns", "sex"]
}, {
  "body": "Prayer: Don't give God instructions -- just report for duty!",
  "tags": ["christian", "God"]
}, {
  "body": "Why don't the enemies of the Teenage Mutant Ninja Turtles just flip them on their backs?",
  "tags": ["animal", "fighting"]
}, {
  "body": "What are the worst six years in a blonde's life? Third Grade!",
  "tags": ["blonde"]
}, {
  "body": "I tried phone sex once, but the holes were too small.",
  "tags": ["sex", "stupid"]
}, {
  "body": "Do you wanna play lion tamer? she asks: &quot;What is that?&quot; you say: It's when you get on all fours and I put my head in your mouth.",
  "tags": ["animal", "dirty"]
}, {
  "body": "Do you believe in love at first sight or do i pass by you again.",
  "tags": ["flirty"]
}, {
  "body": "I love the F5 key. It\xB4s just so refreshing.",
  "tags": ["attitude", "IT", "love"]
}, {
  "body": "What do you call a woman who knows where her husband is every night? A widow.",
  "tags": ["marriage", "men", "women"]
}, {
  "body": "Dyslexic, you say? How do you spell that?",
  "tags": ["stupid"]
}, {
  "body": "I'm not crazy; I've just been in a bad mood for the last ten years.",
  "tags": ["attitude", "life"]
}, {
  "body": "What happened when the dog went to the flea circus ? He stole the show !",
  "tags": ["animal"]
}, {
  "body": "Let's emotionally damage each other and call it Love.",
  "tags": ["love"]
}, {
  "body": "What did one autumn leaf say to another? I'm falling for you.",
  "tags": ["autumn"]
}, {
  "body": "No one is listening until you make a mistake.",
  "tags": ["life", "mistake"]
}, {
  "body": "When your only tool is a hammer, all problems start looking like nails.",
  "tags": ["attitude"]
}, {
  "body": "Men are fun to argue with, because even IF they win... they lose.",
  "tags": ["men", "sarcastic"]
}, {
  "body": "I've only been wrong once, and that's when I thought I was wrong.",
  "tags": ["attitude", "life", "motivational"]
}, {
  "body": "I never forget a face, but in your case I'll be glad to make an exception",
  "tags": ["life", "men", "rude", "women"]
}, {
  "body": "I love my FedEx guy cause he's a drug dealer and he doesn't even know it \u2014 and he's always on time.",
  "tags": ["dirty", "drug", "life"]
}, {
  "body": "What do you call a fly buzzing inside a blonde's head? A Space Invader.",
  "tags": ["blonde", "stupid"]
}, {
  "body": "Why is a man's pee yellow, and his sperm white? So he can tell if he's coming or going.",
  "tags": ["dirty", "men"]
}, {
  "body": "In the sentence of life, the devil may be a comma - but never let him be the period.",
  "tags": ["christian"]
}, {
  "body": "If you got tired of living, don't share your thoughts with all your friends \u2013 they might not give you a chance to change your mind\u2026",
  "tags": ["attitude", "friendship", "life"]
}, {
  "body": "What did the sign on the door of the whorehouse say? \"Beat it - we're closed.\"",
  "tags": ["sex"]
}, {
  "body": "To the 20 year old girl who wrote an essay claiming she is too pretty to be allowed to lead a normal life:Same.",
  "tags": ["beauty", "life", "sarcastic"]
}, {
  "body": "What is it when a woman talks dirty to a man? $3.99 a minute.",
  "tags": ["dirty", "men", "women"]
}, {
  "body": "Why is the man who invests all your money called a broker?",
  "tags": ["life", "puns"]
}, {
  "body": "What did the boy bird say to the girl bird on Valentine's Day? Let me call you Tweet heart!",
  "tags": ["animal", "Valentines"]
}, {
  "body": "Kids, don't grow up... it's a trap!",
  "tags": ["kids", "life", "time"]
}, {
  "body": "I asked my wife, \"Where do you want to go for our anniversary?\" She said, \"Somewhere I have never been!\" I told her, \"How about the kitchen?\"",
  "tags": ["marriage", "women"]
}, {
  "body": "It's not how good your work is, it's how well you explain it.",
  "tags": ["motivational"]
}, {
  "body": "What do you call a black priest? Holy Shit.",
  "tags": ["black", "insults", "racist"]
}, {
  "body": "Where does one apply to be a &quot;kept man&quot;?",
  "tags": ["attitude", "men", "stupid", "work"]
}, {
  "body": "Are you a sheep cause your body is unbaaaaalievable",
  "tags": ["animal", "beauty", "flirty"]
}, {
  "body": "I'm busy now. Can I ignore you some other time?",
  "tags": ["rude"]
}, {
  "body": "You are not even beneath my contempt.",
  "tags": ["insults"]
}, {
  "body": "I take my wife everywhere, but she keeps finding her way back.",
  "tags": ["marriage"]
}, {
  "body": "Just asked my wife what she's &quot;burning up for dinner&quot; and it turned out to be all of my personal belongings.",
  "tags": ["food", "marriage", "rude"]
}, {
  "body": "A celebrity is someone who works hard all his life to become known and then wears dark glasses to avoid being recognized.",
  "tags": ["motivational"]
}, {
  "body": "Jesus loves you, but everyone else thinks you're an asshole.",
  "tags": ["christian", "insults", "rude"]
}, {
  "body": "How to lose an argument with a woman: 1) Argue.",
  "tags": ["sarcastic", "women"]
}, {
  "body": "Knowledge is power, and power corrupts. So study hard and be evil.",
  "tags": ["motivational"]
}, {
  "body": "Your clothes would look better accelerating towards the floor at 9.8 m\/s",
  "tags": ["flirty"]
}, {
  "body": "Beauty is only skin deep ...but ugly goes all the way to the bone!",
  "tags": ["beauty", "love", "ugly"]
}, {
  "body": "Marriage advice for dummies: Five worst things you can do    5 Abandon  4 Lie  3 Cheat  2 Abuse  1 Forget to start the dishwasher",
  "tags": ["marriage", "sarcastic"]
}, {
  "body": "Do I play fantasy football? Dude, I'm 46 and married. Most of my life is fantasy.",
  "tags": ["family", "marriage"]
}, {
  "body": "FRIDAY is my second favorite F word.",
  "tags": ["dirty", "life", "sex", "work"]
}, {
  "body": "Excuse me? Do you work at Little Ceasars? Cuz Ur Hot And I'm Ready.",
  "tags": ["beauty", "flirty", "food", "work"]
}, {
  "body": "Don't drink while driving \u2013 you will spill the beer.",
  "tags": ["alcohol", "car", "life"]
}, {
  "body": "How can you be so sad when you are so beautiful?",
  "tags": ["beauty", "flirty", "love"]
}, {
  "body": "Knowledge is knowing a tomato is a fruit; Wisdom is not putting it in a fruit salad.",
  "tags": []
}, {
  "body": "I have to exercise early in the morning before my brain figures out what I'm doing.",
  "tags": ["life"]
}, {
  "body": "I can't get enough minimalism.",
  "tags": []
}, {
  "body": "You ever make fun of someone so much, you think you should thank them for all the good times you've had?",
  "tags": ["attitude"]
}, {
  "body": "A clear conscience is usually the sign of a bad memory.",
  "tags": ["life"]
}, {
  "body": "Laugh at your problems, everybody else does.",
  "tags": ["attitude"]
}, {
  "body": "He who smiles in a crisis has found someone to blame.",
  "tags": ["life"]
}, {
  "body": "What is the only time a man thinks about a candlelight dinner? When the power goes off.",
  "tags": ["men"]
}, {
  "body": "What is the most important thing to learn in chemistry?  Never lick the spoon.",
  "tags": ["life"]
}, {
  "body": "The more vital your research, the less people will understand it.",
  "tags": ["life", "people"]
}, {
  "body": "Upgrade your weekend: Take Monday Off...",
  "tags": ["attitude"]
}, {
  "body": "Talk is cheap because supply exceeds demand.",
  "tags": ["life", "women"]
}, {
  "body": "One tequila, two tequila, three tequila, floor.",
  "tags": []
}, {
  "body": "Hippopotomonstrosesquippedaliophobia: Fear of long words.",
  "tags": []
}, {
  "body": "What do you call an Amish guy with his hand up a horse's ass? A mechanic!",
  "tags": ["rude"]
}, {
  "body": "The Titanic was built to last, let that sink in.",
  "tags": ["dirty", "travel"]
}, {
  "body": "You're so fat that your husband rolled over after sex, rolled over again and was STILL on top of you.",
  "tags": ["fat", "insults", "sex"]
}, {
  "body": "My colleague can no longer attend next weeks Innuendo Seminar so I have to fill her slot instead.",
  "tags": ["puns", "sex"]
}, {
  "body": "What does the Bermuda Triangle and blondes have in common? They've both swallowed a lot of seamen.",
  "tags": ["blonde", "puns"]
}, {
  "body": "What is a blonde's favorite color? Glitter.",
  "tags": ["blonde"]
}, {
  "body": "Sleep is my drug\u2026.my bed is my dealer and my alarm clock is the police.",
  "tags": ["drug", "life"]
}, {
  "body": "What do you call a fish with no eye? FSH",
  "tags": ["puns"]
}, {
  "body": "If it's true that we are here to help others, then what exactly are the others here for?",
  "tags": ["christian"]
}, {
  "body": "Why is divorce so expensive? Because it's worth it!",
  "tags": ["marriage"]
}, {
  "body": "Wine improves with age. I improve with wine.",
  "tags": ["age", "alcohol", "life"]
}, {
  "body": "I may not be getting laid tonight, but I'm definitely banging my snooze button in the morning.",
  "tags": ["attitude", "life", "sex"]
}, {
  "body": "What do squirrels give for Valentine's Day? Forget-me-nuts.",
  "tags": ["puns", "Valentines"]
}, {
  "body": "I got in a fight one time with a really big guy, and he said, \"I'm going to mop the floor with your face.\" I said, \"You'll be sorry.\" He said, \"Oh, yeah? Why?\" I said, \"Well, you won't be able to get into the corners very well.\"",
  "tags": ["fighting", "insults", "sarcastic"]
}, {
  "body": "Do skunks celebrate Valentine's Day? Sure, they're very scent-imental!",
  "tags": ["animal", "puns", "Valentines"]
}, {
  "body": "Doggies just call it style.",
  "tags": ["animal", "sex"]
}, {
  "body": "A bartender is just a pharmacist with a limited inventory.",
  "tags": ["alcohol", "work"]
}, {
  "body": "Some people are kind, polite, and sweet-spirited until you try to sit in their pews.",
  "tags": ["christian"]
}, {
  "body": "Cannibals like to meat people.",
  "tags": ["food", "people", "sarcastic"]
}, {
  "body": "What does a skeleton orders at a restaurant? Spare ribs.",
  "tags": ["Halloween"]
}, {
  "body": "I'd love to go out with you, but my favorite commercial is on TV.",
  "tags": ["insults", "love"]
}, {
  "body": "Did you hear about the guy that lost his left arm and leg in a car crash? He's all right now.",
  "tags": ["car", "dirty", "life"]
}, {
  "body": "He's street smart. Sesame Street smart.",
  "tags": ["insults", "intelligence"]
}, {
  "body": "How is it that I always seem to buy the plants without the will to live?",
  "tags": ["attitude", "death", "sarcastic"]
}, {
  "body": "The best mathematical equation I have ever seen: 1 cross + 3 nails= 4 given.",
  "tags": ["christian"]
}, {
  "body": "When people don't make sense, listen to music. It always does.",
  "tags": ["sarcastic"]
}, {
  "body": "How long does it take a black lady to shit? About 9 months.",
  "tags": ["black", "racist"]
}, {
  "body": "A liberal is just a conservative that hasn't been mugged yet.",
  "tags": ["political"]
}, {
  "body": "If you are not part of the solution, you're probably running for President",
  "tags": ["attitude", "political", "rude"]
}, {
  "body": "Love \u2013 is an extreme sympathy that leads to bed.",
  "tags": ["life", "love", "sex"]
}, {
  "body": "If a woman has fallen \u2013 an idiot will walk by, a gentleman will help her to get up, but a real man will lie down with her.",
  "tags": ["love", "men", "women"]
}, {
  "body": "I wanted to thank you personally for the like. That's why I'm in your house.",
  "tags": ["attitude", "life", "sarcastic"]
}, {
  "body": "HOW DO I TURN OFF CAPS LOCK? I ACCIDENTALLY TURNED IT ON YESTERDAY AND I DON'T KNOW HOW TO TURN IT BACK OFF. ALL MY FRIENDS ARE MAD BECAUSE THEY THINK I AM SHOUTING AT THEM OVER INTERNET. PLEASE HELP!!!",
  "tags": ["IT", "stupid"]
}, {
  "body": "I tried to hang myself with a bungee chord. I kept almost dying",
  "tags": ["life", "stupid"]
}, {
  "body": "When they start getting the 5-day forecast right then maybe I'll listen to their climate change theories.",
  "tags": ["sarcastic"]
}, {
  "body": "The journey of a thousand miles begins with a broken fan belt and a flat tire.",
  "tags": ["life"]
}, {
  "body": "My dream woman has a special combination of inner and outer beauty and is, most importantly, too naive to know she's way out of my league.",
  "tags": ["beauty", "women"]
}, {
  "body": "Men of quality respect women's equality.",
  "tags": ["men"]
}, {
  "body": "I used to be indecisive. Now I'm not sure.",
  "tags": ["life"]
}, {
  "body": "Eagles may soar, but weasels don't get sucked into jet engines. \u2026",
  "tags": ["animal"]
}, {
  "body": "I don't do different things... It's just that I do things differently!",
  "tags": ["attitude"]
}, {
  "body": "Why did the student study in an airplane? He wanted a higher education!",
  "tags": ["kids"]
}, {
  "body": "If he hurts you, cry a river and then drown him in it.",
  "tags": ["attitude", "men"]
}, {
  "body": "2+2=5 for extremely large values of 2.",
  "tags": []
}, {
  "body": "You can't have everything, where would you put it?",
  "tags": ["attitude", "life"]
}, {
  "body": "What did the blanket say to the bed? Don't worry Ive got you covered!",
  "tags": ["life"]
}, {
  "body": "Sex appeal is 50% what you've got and 50% what people think you've got.",
  "tags": ["sex"]
}, {
  "body": "I'm in shape. Round is a shape isn't it",
  "tags": ["life"]
}, {
  "body": "Patient: &quot;Doctor, I get heartburn every time I eat birthday cake.&quot; Doctor: &quot;Next time, take off the candles.&quot;",
  "tags": ["birthday", "doctor"]
}, {
  "body": "A four letter word that every man is afraid of? (More)",
  "tags": ["men", "sex"]
}, {
  "body": "It's a pleasure to see you and another \u2013 not to see.",
  "tags": ["friendship", "life"]
}, {
  "body": "I like kids, but I don't think I could eat a whole one.",
  "tags": ["kids"]
}, {
  "body": "The most beautiful makeup of a woman is passion. But cosmetics are easier to buy.",
  "tags": ["beauty", "life", "women"]
}, {
  "body": "A black guy and a Mexican guy opened a restaurant. It's called Nacho Mama.",
  "tags": ["racist"]
}, {
  "body": "The big difference between sex for money and sex for free is that sex for money usually costs a lot less.",
  "tags": ["love", "sex", "women"]
}, {
  "body": "Don't let your worries get the best of you; remember, Moses started out as a basket case.",
  "tags": ["christian", "motivational"]
}, {
  "body": "My birth certificate was a letter of apology that my dad got from the condom company\u2026",
  "tags": ["birthday", "kids", "sex"]
}, {
  "body": "Temples are free to enter but still empty. Pubs charge to enter, but are full. People ignore inner peace &choose to pay for self destruction",
  "tags": ["alcohol", "christian"]
}, {
  "body": "I've spent the past four years looking for my ex-girlfriend's killer, but no one will do it.",
  "tags": ["death", "sarcastic", "women"]
}, {
  "body": "Photons have mass? I didn't even know they were Catholic.",
  "tags": ["christian"]
}, {
  "body": "Text him again. He probably just forgot that he's in love with you.",
  "tags": ["communication", "love"]
}, {
  "body": "The only one of your children who does not grow up and move away is your husband.",
  "tags": ["kids", "marriage"]
}, {
  "body": "I know that there are people who don't love their fellow man \u2013 I hate those people.",
  "tags": ["hate", "stupid"]
}, {
  "body": "Oxygen is proven to be a toxic gas. Anyone who inhales oxygen will normally dies within 80 years.",
  "tags": ["death", "health", "puns"]
}, {
  "body": "What do you call one black on the moon? Problem. What do you call ten blacks on the moon? Problems. What do you call the entire black population on the moon? Problem solved.",
  "tags": ["black", "racist"]
}, {
  "body": "How is education going to make me smarter?",
  "tags": ["attitude"]
}, {
  "body": "Time is like money, the less we have of it to spare the further we make it go.",
  "tags": ["money"]
}, {
  "body": "Ham and Eggs: A day's work for a chicken, a lifetime commitment for a pig.",
  "tags": ["animal"]
}, {
  "body": "There are 2 times when a man doesn't understand a woman - before marriage and after marriage.",
  "tags": ["marriage"]
}, {
  "body": "He: So then, what's your sign? She: Dollar.",
  "tags": ["women"]
}, {
  "body": "My wife installed a mirror over our bed. She said she likes to watch herself laugh.",
  "tags": ["marriage"]
}, {
  "body": "You shouldn't come back, because later you'll still want to leave.",
  "tags": ["love", "marriage"]
}, {
  "body": "Another World's Oldest Man has died. This is beginning to look suspicious.",
  "tags": ["retirement"]
}, {
  "body": "There are three kinds of people: The ones who learn by reading. The ones who learn by observation. And the rest of them who have to touch the fire to learn it's hot.",
  "tags": ["life", "people"]
}, {
  "body": "What do lawyers and sperm have in common? One in 3,000,000 has a chance of becoming human.",
  "tags": ["life"]
}, {
  "body": "If you must choose between two evils, pick the one you've never tried before.",
  "tags": ["attitude"]
}, {
  "body": "Every day two million Americans play tennis and one million of them lose.",
  "tags": ["sport"]
}, {
  "body": "\"Were any famous men born on your birthday?\" \"No, only little babies.\"",
  "tags": ["birthday", "stupid"]
}, {
  "body": "Everyone has the right to be stupid, but you are abusing the privilege!",
  "tags": ["stupid"]
}, {
  "body": "There are no limits to my perfection \u2013 a monkey was thinking while looking at a human.",
  "tags": ["animal", "attitude"]
}, {
  "body": "I know my limits: if I fell down it means enough.",
  "tags": ["alcohol"]
}, {
  "body": "Spider-man has been unmasked in all his last 4 films. If I was him, I wouldn't even bother dressing up.",
  "tags": ["attitude", "sarcastic"]
}, {
  "body": "Not all men are annoying. Some are dead.",
  "tags": ["love", "men"]
}, {
  "body": "I'd like to start today by telling you how wonderful (NAME) is. I'd like to but...",
  "tags": ["best man speech", "sarcastic"]
}, {
  "body": "If at first you don't succeed: try management.",
  "tags": ["attitude", "life", "money"]
}, {
  "body": "Virginity is curable.",
  "tags": ["attitude", "sex"]
}, {
  "body": "Ladies and gentlemen, if there's anybody here this afternoon who's feeling nervous, apprehensive and queasy at the thought of what lies ahead, it's probably because you have just got married to (NAME).",
  "tags": ["best man speech"]
}, {
  "body": "This must be the 8th castle because I just found my princess.",
  "tags": ["intelligence", "IT", "love"]
}, {
  "body": "Me: let's go this way. Shopping cart: no.",
  "tags": ["attitude", "fighting"]
}, {
  "body": "Roses are #FF0000, violets are #0000FF. All my base are belong to you.",
  "tags": ["flirty", "IT"]
}, {
  "body": "I'm on a whiskey diet. I've lost three days already.",
  "tags": ["alcohol", "life", "puns"]
}, {
  "body": "Why is lettuce the most loving vegetable? Because it's all heart.",
  "tags": ["Valentines"]
}, {
  "body": "Like a flat tire.......how I'm rolling this morning.",
  "tags": ["attitude"]
}, {
  "body": "I downloaded the Pinterest app and now my phone is stuck in a mason jar.",
  "tags": ["food", "IT", "stupid"]
}, {
  "body": "Sometimes the best helping hand you can give is a good, firm push.",
  "tags": ["motivational"]
}, {
  "body": "I haven't slept for three days, because that would be too long.",
  "tags": ["time"]
}, {
  "body": "The first time I got a universal remote control, I thought to myself &quot;This changes everything&quot;.",
  "tags": ["IT", "life"]
}, {
  "body": "We have all heard that a million monkeys banging on a million typewriters will eventually reproduce the entire works of Shakespeare. Now, thanks to the Internet, we know this is not true.",
  "tags": ["life"]
}, {
  "body": "Egotist: A person who is usually me-deep in conversation.",
  "tags": []
}, {
  "body": "When my friends are sad, i send them a long ass paragraph, but when I'm sad, they only say \"Oh sorry\" or \"Well that sucks\".",
  "tags": ["life"]
}, {
  "body": "I have a friend. He keeps trying to convince me he's a compulsive liar, but I don't believe him.",
  "tags": []
}, {
  "body": "Why was six scared of seven? Because seven \"ate\" nine.",
  "tags": ["life"]
}, {
  "body": "Even paranoids have enemies.",
  "tags": []
}, {
  "body": "The consumption of alcohol is a major factor in dancing like a retard.",
  "tags": []
}, {
  "body": "If the speed of light is 186,000 miles\/sec., what's the speed of darkness?",
  "tags": ["life"]
}, {
  "body": "I own the erasers for all the miniature golf pencils.",
  "tags": []
}, {
  "body": "You can't be a real country unless you have a BEER and an airline - it helps if you have some kind of a football team, or some nuclear weapons, but at the very least you need a BEER.",
  "tags": ["attitude", "stupid"]
}, {
  "body": "I just read a book about Stockholm Syndrome. It was pretty bad at first, but by the end I kinda liked it.",
  "tags": ["life"]
}, {
  "body": "The get rich or die trying philosophy on life is going terribly one sided for me.",
  "tags": ["attitude", "life"]
}, {
  "body": "Burglar gently waking me... &quot;you live like this?&quot;",
  "tags": ["attitude", "life"]
}, {
  "body": "Salary is like a period \u2013 you wait for it a whole month and it ends in a week.",
  "tags": ["women", "work"]
}, {
  "body": "I don't care how funny you are, if I don't like you, I won't laugh.",
  "tags": ["insults"]
}, {
  "body": "See, the problem is that God gives men a brain and a penis, and only enough blood to run one at a time.",
  "tags": ["God", "men"]
}, {
  "body": "Santa's elves are just a bunch of subordinate Clauses.",
  "tags": ["Christmas", "puns"]
}, {
  "body": "It takes two to lie... One to lie and one to listen...",
  "tags": ["life", "people", "sarcastic"]
}, {
  "body": "Did something bad happen to you or are you just naturally ugly.",
  "tags": ["rude", "sarcastic", "ugly"]
}, {
  "body": "Learn from your parents' mistakes: use birth control.",
  "tags": ["family", "mistake", "sarcastic"]
}, {
  "body": "If you weigh 99 pounds and eat 1 pound of nachos you will be 1% nachos!",
  "tags": ["attitude", "food", "life"]
}, {
  "body": "What is the difference between a clever midget and a venereal disease? One is a cunning runt, and the other is a running c*nt.",
  "tags": ["dirty", "sex"]
}, {
  "body": "If you feel a bit lonely, forgotten, or just need someone to cheer you up remember...You can always change your birthday on facebook!",
  "tags": ["birthday"]
}, {
  "body": "Which of Santa's reindeers needs to mind his manners the most? \"Rude\"olph",
  "tags": ["Christmas", "puns"]
}, {
  "body": "Hey, I'm not saying Hitler was a great guy, but he really saved the Histoy channel.",
  "tags": ["dirty", "racist", "sarcastic"]
}, {
  "body": "Men should be like coffee: strong, hot and not letting you sleep for the whole night. However, most of them are like copy machines: suitable only for reproduction.",
  "tags": ["men", "sarcastic", "sex"]
}, {
  "body": "Are your parents siblings?",
  "tags": ["insults", "rude"]
}, {
  "body": "The value of money in a relationship: the 10 bucks that the wife and the tax inspection don't know about are worth more than the 100 that both know about.",
  "tags": ["life", "marriage", "money", "women"]
}, {
  "body": "When you want to marry a beautiful, a smart and a rich woman \u2013 marry three times.",
  "tags": ["beauty", "intelligence", "marriage", "money", "women"]
}, {
  "body": "Suicide: Mans way of telling God - &quot;You can't fire me, I quit&quot;.",
  "tags": ["God", "people"]
}, {
  "body": "100,000 sperm and you were the fastest?",
  "tags": ["motivational", "sex"]
}, {
  "body": "What does a gay man and an ambulance have in common? They both get loaded from the rear and go whoo-whoo!",
  "tags": ["gay"]
}, {
  "body": "Do you raise chickens? Because you raise my cock.",
  "tags": ["flirty", "sex", "women"]
}, {
  "body": "Why did God create alcohol? So ugly people would have a chance to have sex.",
  "tags": ["God", "people", "sex", "ugly"]
}, {
  "body": "Why do blacks wear white gloves? So they don't bite their fingers eating tootsie rolls.",
  "tags": ["black", "racist"]
}, {
  "body": "Men mostly hate two words: 'not' and 'enough'\u2026 unless you say them together.",
  "tags": ["hate", "life", "men", "sex"]
}, {
  "body": "What's long, black and smelly? The unemployment line.",
  "tags": ["dirty", "racist"]
}, {
  "body": "War is God's way of teaching Americans geography.",
  "tags": ["fighting", "God", "rude", "sarcastic"]
}, {
  "body": "Let's convert our potential energy into kinetic energy.",
  "tags": ["flirty"]
}, {
  "body": "Young riders pick a destination and go... Old riders pick a direction and go.",
  "tags": ["motorcycle", "travel"]
}, {
  "body": "Heading out for drinks, bail money's on top of the fridge.",
  "tags": ["alcohol", "money"]
}, {
  "body": "Why do blacks smell? So blind people can hate them too.",
  "tags": ["black", "hate", "racist", "rude"]
}, {
  "body": "If you see me with a water bottle, there's probably vodka in it",
  "tags": ["alcohol"]
}, {
  "body": "Transitional age is when during a hot day you don't know what you want \u2013 ice cream or beer.",
  "tags": ["age", "alcohol", "attitude", "life", "men"]
}, {
  "body": "Why is Christmas just like a day at the office? You do all the work and the fat guy with the suit gets all the credit.",
  "tags": ["Christmas", "fat"]
}, {
  "body": "I run faster horny than you do scared.",
  "tags": ["dirty", "sex"]
}, {
  "body": "My New Years resolution is 1080p.",
  "tags": ["IT", "New Year"]
}, {
  "body": "The question isn't at what age I want to retire, it's at what income.",
  "tags": ["age", "money", "retirement"]
}, {
  "body": "I'm trying to get on your good side, but I haven't found it yet.",
  "tags": ["attitude", "rude"]
}, {
  "body": "Babe, your cuter than a puppy at an animal shelter, Cuz i want to take you home!",
  "tags": ["animal", "beauty", "flirty"]
}, {
  "body": "Baby, you make my floppy disk turn into a hard drive",
  "tags": ["IT", "love"]
}, {
  "body": "How many more times are my kids going to ask me if I know where something is before they realize they're asking the wrong parent?",
  "tags": ["attitude", "family", "kids", "life"]
}, {
  "body": "If what you don't know can't hurt you, you're invulnerable.",
  "tags": ["insults", "stupid"]
}, {
  "body": "Marriage is the alliance of two people, one of whom never remembers birthdays and the other never forgets them.",
  "tags": ["birthday", "marriage"]
}, {
  "body": "If I promise to miss you, will you go away?",
  "tags": ["rude"]
}, {
  "body": "What's the first thing a blonde does in the morning? Introduces themself.",
  "tags": ["blonde"]
}, {
  "body": "Why is 68 the maximum speed for blondes? Because at 69 they blow a rod.",
  "tags": ["blonde"]
}, {
  "body": "I think the only time my ex didn't fake an orgasm was when the judge signed the divorce papers.",
  "tags": ["marriage", "sex"]
}, {
  "body": "If you get in the mood to do some work, someone will always wake you up.",
  "tags": ["attitude", "work"]
}, {
  "body": "Would you send your son to a school run by someone who insisted on being called \"Headmaster?\"",
  "tags": ["kids", "life", "school"]
}, {
  "body": "Nice perfume. Must you marinate in it?",
  "tags": ["flirty", "sarcastic"]
}, {
  "body": "The device will work much better, if you turn it on.",
  "tags": ["life", "work"]
}, {
  "body": "If Bill Gates had a penny for every time I had to reboot my computer ...oh wait, he does.",
  "tags": ["IT", "life", "time"]
}, {
  "body": "If the music's too loud you're too old.",
  "tags": ["life", "retirement"]
}, {
  "body": "Well, this day was a total waste of makeup.",
  "tags": ["women"]
}, {
  "body": "People who wait 4 hours to reply to my text with \"lol\" should be shot.",
  "tags": ["life", "people"]
}, {
  "body": "Why did God give men penises? So they'd have at least one way to shut a woman up.",
  "tags": ["dirty", "God", "men", "women"]
}, {
  "body": "The best way to remember your wife's birthday is to forget it once.",
  "tags": ["birthday", "marriage"]
}, {
  "body": "How can you tell soap operas are fictional? In real life, men aren't affectionate out of bed.",
  "tags": ["marriage", "sex"]
}, {
  "body": "A man came up with a new invention, a vibrating tampon. That way a woman can be at her best when she is at her worst.",
  "tags": ["sex", "women"]
}, {
  "body": "How is being at a singles bar different from going to the circus? At the circus, the clowns don't talk.",
  "tags": ["life"]
}, {
  "body": "Every 60 seconds in Africa, a minute passes.",
  "tags": []
}, {
  "body": "Here's to alcohol, the cause of \u2013 and solution to \u2013 all life's problems.",
  "tags": ["life"]
}, {
  "body": "I've been waiting for the bus so long, someone just stapled a lost cat flyer to my chest.",
  "tags": ["life"]
}, {
  "body": "The last chapter of every book should just be all the characters acting completely terrified because their world is about to end.",
  "tags": ["life"]
}, {
  "body": "The farther away the future is, the better it looks.",
  "tags": ["life"]
}, {
  "body": "War does not determine who is right \u2013 only who is left.",
  "tags": []
}, {
  "body": "Better to remain silent and be thought a fool, than to speak and remove all doubt.",
  "tags": []
}, {
  "body": "Never, under any circumstances, take a sleeping pill and a laxative on the same night.",
  "tags": []
}, {
  "body": "How is it one careless match can start a forest fire, but it takes a whole box to start a campfire?",
  "tags": []
}, {
  "body": "The voices in my head may not be real, but they have some good ideas!",
  "tags": ["life"]
}, {
  "body": "How do you get holy water? Boil the hell out of it.",
  "tags": []
}, {
  "body": "Sometimes when I reflect back on all the beer I drink I feel shamed. Then I look into the glass and think about the workers in the brewery and all of their hopes and dreams. If I didn't drink this beer, they might be out of work and their dreams would be shattered. Then I say to myself, \"It is better that I drink this beer and let their dreams come true than be selfish and worry about my liver.",
  "tags": ["life"]
}, {
  "body": "Darling, what are you thinking about right now? If I would want you to know, I would say it not think about it.",
  "tags": ["life", "men", "women"]
}, {
  "body": "Worrying works! 90% of the things I worry about never happen.",
  "tags": ["life"]
}, {
  "body": "If good things come in small packages, then more good things can come in large packages.",
  "tags": ["life"]
}, {
  "body": "Despite the cost of living, have you noticed how it remains so popular?",
  "tags": ["life"]
}, {
  "body": "What is a zebra? 26 sizes larger than an \"A\" bra.",
  "tags": ["animal", "women"]
}, {
  "body": "Life's a bitch, 'cause if it was a slut, it'd be easy.",
  "tags": ["life"]
}, {
  "body": "It's amazing that the amount of news that happens in the world everyday always just exactly fits the newspaper.",
  "tags": ["life"]
}, {
  "body": "Ninety-nine percent of lawyers give the rest a bad name.",
  "tags": []
}, {
  "body": "Adult: Someone who has stopped growing at both ends and now grows in the middle.",
  "tags": ["life"]
}, {
  "body": "It matters not whether you win or lose: what matters is whether I win or lose.",
  "tags": ["life"]
}, {
  "body": "If you can't convince them, confuse them.",
  "tags": ["life"]
}, {
  "body": "Cleavage: The best popcorn catcher.",
  "tags": ["life", "women"]
}, {
  "body": "Stress is when you wake up screaming and you realize you haven't fallen asleep yet.",
  "tags": ["life"]
}, {
  "body": "Lite: the new way to spell \"Light,\" now with 20% fewer letters!",
  "tags": []
}, {
  "body": "I asked my wife if she enjoys a cigarette after sex and she said, \"No, one drag is enough.\"",
  "tags": ["sex"]
}, {
  "body": "A conscience is what hurts when all your other parts feel so good.",
  "tags": ["life"]
}, {
  "body": "They were the type of children who would kill both parents and make you feel sorry for them because they were orphans.",
  "tags": []
}, {
  "body": "It's not that I'm afraid to die, I just don't want to be there when it happens.",
  "tags": ["life"]
}, {
  "body": "Do they have reserved parking for non-handicapped people at the Special Olympics?",
  "tags": ["life"]
}, {
  "body": "I childproofed the house\u2026 but they still get in!",
  "tags": ["kids", "life"]
}, {
  "body": "The more pregnant I get, the more often strangers smile at me. Why? \"Cause you're fatter than they are.\"",
  "tags": ["kids", "women"]
}, {
  "body": "If I get interviewed by a police sketch artists, my only goal will be to see how far I get before he realizes I'm making him draw a pirate.",
  "tags": ["life"]
}, {
  "body": "Alcoholism is the only disease that tries to convince you that you don't have it.",
  "tags": ["life"]
}, {
  "body": "Kids, you tried your best and you failed miserably. The lesson is, never try.",
  "tags": ["kids", "sarcastic"]
}, {
  "body": "Einstein used science to get laid; that guy is a genius... I've been using money.",
  "tags": ["dirty", "money", "sex"]
}, {
  "body": "Dad always thought laughter was the best medicine, which I guess is why several of us died of tuberculosis.",
  "tags": ["dirty"]
}, {
  "body": "Donated his brain to science before he was done using it.",
  "tags": ["rude"]
}, {
  "body": "I'm rich; what am I supposed to do, hide it?",
  "tags": ["money"]
}, {
  "body": "One head is ok, but a whole body is much better.",
  "tags": ["life", "sarcastic"]
}, {
  "body": "Did Adam and Eve ever have a date? No, but they had an Apple.",
  "tags": ["life", "love", "Valentines"]
}, {
  "body": "My voicemail message is just instructions on how to send a text message with brief pauses filled with heavy sighing.",
  "tags": ["IT", "stupid"]
}, {
  "body": "It is said that, a way to a man's heart goes through a stomach. Aha\u2026you might think that men go to their lovers to eat some soup.",
  "tags": ["men", "sex"]
}, {
  "body": "According to a new survey, women say they feel more comfortable undressing in front of men than they do undressing in front of other women. They say that women are too judgmental, where, of course, men are just grateful.",
  "tags": ["men", "women"]
}, {
  "body": "That awesome moment when you open the fridge and the first thing you see is the thing you wanted to eat.",
  "tags": ["attitude", "life"]
}, {
  "body": "Middle age is when work is a lot less fun and fun a lot more work.",
  "tags": ["age", "life", "work"]
}, {
  "body": "During sex, my girlfriend always wants to talk to me. Just the other night she called me from a hotel.",
  "tags": ["sex", "women"]
}, {
  "body": "You don't notice the air, until someone spoils it.",
  "tags": ["attitude", "life"]
}, {
  "body": "I bet the worst part about being a birthday cake is when you're set on fire, and then eaten by the hero that saved you.",
  "tags": ["birthday", "food"]
}, {
  "body": "How did Burger King get Dairy Queen Pregnant? He forgot to wrap his whopper!",
  "tags": ["dirty", "food"]
}, {
  "body": "Why do vegetarians give good head? Because they are used to eating nuts!",
  "tags": ["dirty"]
}, {
  "body": "Don't hate me because I'm beautiful. Hate me because your boyfriend thinks so.",
  "tags": ["flirty", "hate", "love", "men", "women"]
}, {
  "body": "Whiteboards are remarkable.",
  "tags": ["communication"]
}, {
  "body": "Crap. Something is wrong with my cell phone. {Oh Really. What is that?} Its just that...your numbers not in it.",
  "tags": ["attitude", "rude", "sarcastic"]
}, {
  "body": "I am not an alcoholic. I simply enjoy living in liquid medium.",
  "tags": ["alcohol", "attitude"]
}, {
  "body": "Impotence: Nature's way of saying \"No hard feelings\".",
  "tags": ["sex"]
}, {
  "body": "Guy: Wanna go out? Girl: I have a boyfriend. Guy: It's just like soccer, just because theres a goalie doesnt mean you cant score.",
  "tags": ["attitude", "flirty", "sport"]
}, {
  "body": "Women are cursed, and men are the proof.",
  "tags": ["men", "women"]
}, {
  "body": "If you live to be a hundred, I want to live to be a hundred minus one day, so I never have to live without you.",
  "tags": ["love"]
}, {
  "body": "Two antennas met on a roof, fell in love and got married. The ceremony wasn't much, but the reception was excellent.",
  "tags": ["love", "marriage"]
}, {
  "body": "Haikus are easy. But sometimes they don't make sense. Refrigerator.",
  "tags": []
}, {
  "body": "The poor wish to be rich, the rich wish to be happy, the single wish to be married, and the married wish to be dead.",
  "tags": ["marriage", "money"]
}, {
  "body": "You and Me = Grand Unification",
  "tags": ["flirty"]
}, {
  "body": "How do we not know what women want yet? There are tons of conflicting lists all over the internet.",
  "tags": ["IT", "women"]
}, {
  "body": "Sit down, give your mind a rest - it obviously needs it.",
  "tags": ["rude", "stupid"]
}, {
  "body": "Girl: My GrandFather Lived For 96 Years & He Never Used Glasses. Boy: Yeah I Know, Few People Drink Directly From Bottle.",
  "tags": ["retirement"]
}, {
  "body": "Materialism: buying things we don't need with money we don't have to impress people that don't matter.",
  "tags": ["money"]
}, {
  "body": "If another woman steals your man, there's no better revenge than to let her keep him. Real men can't be stolen.",
  "tags": ["men", "women"]
}, {
  "body": "The dogs bark but the caravan moves on.",
  "tags": ["life"]
}, {
  "body": "No matter how bad you are playing, it is always possible to play worse.",
  "tags": ["sport"]
}, {
  "body": "The main reason Santa is so jolly is because he knows where all the bad girls live.",
  "tags": ["Christmas"]
}, {
  "body": "An iron rule of a leader \u2013 make love to your wife in the morning and you will be the first.",
  "tags": ["love", "marriage", "men", "sex", "women"]
}, {
  "body": "Without nipples, breasts would be pointless.",
  "tags": ["sex"]
}, {
  "body": "It's uncomfortable when the neighbor's kids look like you.",
  "tags": ["kids", "marriage", "men"]
}, {
  "body": "Whatever kind of look you were going for, you missed.",
  "tags": ["insults", "rude"]
}, {
  "body": "What does tightrope walking and getting a blowjob from Grandma have in common? You don't look down.",
  "tags": ["dirty", "retirement", "rude"]
}, {
  "body": "Lets unzip our genes and see if we can share codes together.",
  "tags": ["dirty", "love"]
}, {
  "body": "A sports expert is the guy who writes the best alibis for being wrong.",
  "tags": ["sport"]
}, {
  "body": "There are all types of love in this world but never the same love twice.",
  "tags": ["life", "love"]
}, {
  "body": "Don't worry honey, they call it my dual-channel RAM.",
  "tags": ["IT", "stupid"]
}, {
  "body": "We live in a society where pizza gets to your house before the police.",
  "tags": ["life"]
}, {
  "body": "A man's idea of serious commitment is usually, \"Oh alright, I'll stay the night.\"",
  "tags": ["attitude", "men"]
}, {
  "body": "I use artificial sweetener at work. I add it to everything I say to my boss.",
  "tags": ["work"]
}, {
  "body": "Alcohol won't mend a broken heart.But that doesn't mean I won't try it again tonight.",
  "tags": ["alcohol", "love"]
}, {
  "body": "Sorry, I'm out of my mind at the moment, please leave a message and I'll get back to you as soon as possible.",
  "tags": ["life"]
}, {
  "body": "If a mute kid swears does his mother wash his hands with soap?",
  "tags": ["kids"]
}, {
  "body": "Keep your eyes wide open before marriage, half shut afterwards.",
  "tags": ["marriage"]
}, {
  "body": "I discovered I scream the same way whether I'm about to be devoured by a great white shark or if a piece of seaweed touches my foot.",
  "tags": ["animal", "life"]
}, {
  "body": "With sufficient thrust, pigs fly just fine.",
  "tags": []
}, {
  "body": "What did the light bulb say to the switch? \"You turn me on.\"",
  "tags": ["life", "Valentines"]
}, {
  "body": "Whoever coined the phrase \"Quiet as a mouse\" has never stepped on one.",
  "tags": ["animal"]
}, {
  "body": "What did the painter say to her boyfriend? \"I love you with all my art!\"",
  "tags": ["Valentines"]
}, {
  "body": "What do you call a very small valentine? A valentiny.",
  "tags": ["Valentines"]
}, {
  "body": "Glad I'm not a general, because auto-correct just changed &quot;lunch order&quot; to &quot;launch order.&quot;",
  "tags": ["work"]
}, {
  "body": "Multitasking: screwing up several things at once.",
  "tags": ["life"]
}, {
  "body": "An angry woman can pack everything she owns in an hour, but it will take her a week to pack for vacation? Women...",
  "tags": ["women"]
}, {
  "body": "Progress is made by lazy men looking for an easier way to do things.",
  "tags": ["men"]
}, {
  "body": "I am more pissed off than a dragon trying to blow out candles.",
  "tags": ["life"]
}, {
  "body": "Women will drive miles out of their way to avoid the possibility of getting lost using a shortcut.",
  "tags": ["women"]
}, {
  "body": "If mummies are from egypt, then where are daddies from?",
  "tags": ["life"]
}, {
  "body": "The best way to lie is to tell the truth, carefully edited truth.",
  "tags": ["life"]
}, {
  "body": "IRS: We've got what it takes to take what you've got.",
  "tags": ["life"]
}, {
  "body": "\"Tired\" isn't even a temporary state for me anymore it's more like a part of my personality at this point.",
  "tags": ["life"]
}, {
  "body": "Water is composed of two gins, Oxygin and Hydrogin. Oxygin is pure gin. Hydrogin is gin and water.",
  "tags": []
}, {
  "body": "He can't decide whether to have his visor half open or half closed.",
  "tags": ["sport"]
}, {
  "body": "I saw a man yesterday who was so bald I could see what he was thinking.",
  "tags": ["men"]
}, {
  "body": "I took a course in speed waiting. Now I can wait an hour in only ten minutes.",
  "tags": ["life"]
}, {
  "body": "The best contraceptive for old people is nudity.",
  "tags": ["retirement"]
}, {
  "body": "Mattel has a campaign urging girls to pursue their limitless potential. It's called You Can Be Anything Except A Woman With Barbie's Body.",
  "tags": ["beauty", "motivational", "sarcastic"]
}, {
  "body": "Brains are wonderful, I wish everyone had one.",
  "tags": ["life"]
}, {
  "body": "I pretend to work as long as they pretend to pay me.",
  "tags": ["life"]
}, {
  "body": "The human brain is a wonderful thing. It starts working the moment you are born, and never stops until you stand up to speak in public.",
  "tags": ["life"]
}, {
  "body": "A woman has the last word in any argument. Anything a man says after that is the beginning of a new argument.",
  "tags": ["life", "men", "women"]
}, {
  "body": "I ran into my ex the other day, hit reverse, and ran into him again.",
  "tags": ["love"]
}, {
  "body": "It ain't the jeans that make your butt look fat.",
  "tags": ["women"]
}, {
  "body": "It's not the bullet that kills you, it's the hole.",
  "tags": ["life"]
}, {
  "body": "Thanks honey for rolling over at 3am and telling me I should get some sleep.    In my insomnia stupor that hadn't crossed my mind.",
  "tags": ["marriage", "stupid"]
}, {
  "body": "Actually, I don't think you're dyslexic; just really, really stupid.",
  "tags": ["rude"]
}, {
  "body": "If the answer to all questions is yes, so why not?",
  "tags": ["life", "sarcastic"]
}, {
  "body": "What's a man's definition of a romantic evening? Sex.",
  "tags": ["men", "sex"]
}, {
  "body": "I just let my mind wander, and it didn't come back.",
  "tags": ["stupid"]
}, {
  "body": "Who was the first to see a cow and think \"I wonder what will happen if I squeeze these dangly things and drink whatever comes out?\"",
  "tags": ["animal"]
}, {
  "body": "Real men don't cry\u2026tears for real men are only unnecessary liquids in the body.",
  "tags": ["men"]
}, {
  "body": "If people could read my mind, I'd get punched in the face a lot.",
  "tags": ["life"]
}, {
  "body": "What happened to the egg when he was tickled too much? He cracked up.",
  "tags": ["Easter"]
}, {
  "body": "I'd advise you graduates to keep your graduation gown. It's the only outfit you might not outgrow.",
  "tags": ["graduation"]
}, {
  "body": "A friend is someone who will help you move. A GOOD friend is someone who will help you move a dead body.",
  "tags": ["life"]
}, {
  "body": "Sex is a misdemeanor; the more I miss, the meaner I get!",
  "tags": ["sex"]
}, {
  "body": "There's a pigeon walking up the driveway. I don't care what he wants. I'm not answering the door.",
  "tags": ["animal"]
}, {
  "body": "Everything is edible, some things are only edible once.",
  "tags": ["life"]
}, {
  "body": "Girl, if you were a dinosaur, you'd be a Gorgeousaurus",
  "tags": ["animal", "beauty", "dirty"]
}, {
  "body": "Smoking is a slow death! But we're not in a hurry\u2026",
  "tags": ["attitude", "death", "life"]
}, {
  "body": "Don't put a question mark where God put a period.",
  "tags": ["christian", "God", "sex"]
}, {
  "body": "What do blondes do after they comb their hair? They pull up their pants.",
  "tags": ["blonde", "sex"]
}, {
  "body": "What's the difference between oral sex and anal sex? Oral sex makes your day, anal sex makes your hole weak.",
  "tags": ["sex"]
}, {
  "body": "Want to dance? Or should I go to hell again?",
  "tags": ["attitude", "friendship", "rude"]
}, {
  "body": "Love is a matter of chemistry, sex is a matter of physics.",
  "tags": ["love", "sex"]
}, {
  "body": "When you try to prove to someone that something doesn't work, it will.",
  "tags": ["life"]
}, {
  "body": "Why did God put men on the Earth? Becuase a vibrator can't mow the lawn.",
  "tags": ["God", "men"]
}, {
  "body": "Men will brag that there are women waiting by the phone at this very moment for their call. Who are these women? Women working at 900 numbers.",
  "tags": ["men", "sarcastic", "sex", "women"]
}, {
  "body": "What travels around the world but stays in one corner? A stamp.",
  "tags": ["travel", "Valentines"]
}, {
  "body": "I thought you'd be flattered that my dog found your leg so attractive.",
  "tags": ["animal", "flirty"]
}, {
  "body": "Life's a jungle let's go to your place and fuck like animals!",
  "tags": ["animal", "dirty", "flirty", "sex"]
}, {
  "body": "What's the best way to get a man to remember your anniversary? Get married on his birthday.",
  "tags": ["marriage", "men"]
}, {
  "body": "When he proposed to her. She found it very engaging.",
  "tags": ["sarcastic", "wedding"]
}, {
  "body": "Kids asked if they could do something &amp; I said yes so my wife lowered my security clearance &amp; now I'm not authorized to make those decisions",
  "tags": ["kids", "marriage"]
}, {
  "body": "If it ain't broke, I haven't borrowed it yet.",
  "tags": ["attitude", "stupid"]
}, {
  "body": "That one liner 'i'm not drinking too much tonight' never goes as planned...",
  "tags": ["alcohol", "life"]
}, {
  "body": "A person has to have a warm heart and a cold beer.",
  "tags": ["alcohol", "life", "men"]
}, {
  "body": "Marriage is like a coffin and each kid is another nail.",
  "tags": ["kids", "marriage", "sarcastic"]
}, {
  "body": "How many men does it take to open a beer? None. It should be opened by the time she brings it.",
  "tags": ["dirty", "men"]
}, {
  "body": "I wanted to lose 10 pounds this year. Only 13 to go.",
  "tags": ["attitude", "fat", "motivational"]
}, {
  "body": "Why does a blonde wear green lipstick? Because red means Stop.",
  "tags": ["blonde", "flirty"]
}, {
  "body": "Remember, children. The best way to get a puppy for Christmas is to beg for a baby brother.",
  "tags": ["Christmas", "family", "kids"]
}, {
  "body": "Missionary Impossible: When 2 fat people try to have sex.",
  "tags": ["fat", "insults", "life", "sex"]
}, {
  "body": "Sex at age 90 is like trying to shoot pool with a rope.",
  "tags": ["age", "retirement", "sex"]
}, {
  "body": "Do you know what the square root of 69 is? Ate something. (8.xxxxxxx....)",
  "tags": ["dirty", "sex"]
}, {
  "body": "What is the difference betwen a blonde and a Lamborghini? You don't let your friends borrow your Lamborghini.",
  "tags": ["blonde", "dirty"]
}, {
  "body": "As best man it is my job to tell you about the groom, and all the embarrassing things that have happened to him in the 28 years leading up to what was the happiest day of his life until i started this speech.",
  "tags": ["best man speech", "happiness"]
}, {
  "body": "I really lack the words to compliment myself today.",
  "tags": ["motivational", "sport"]
}, {
  "body": "Why is air a lot like sex? Because it's no big deal unless you're not getting any.",
  "tags": ["sex"]
}, {
  "body": "Never give up, for that is just the place and time that the tide will turn.",
  "tags": ["motivational", "time"]
}, {
  "body": "Baby you're so cute you made my page 404.",
  "tags": ["flirty", "IT"]
}, {
  "body": "I saw a woman wearing a sweat shirt with \"Guess\" on it ...so I said \"Implants?\"",
  "tags": ["flirty", "women"]
}, {
  "body": "The Buddhist Mafia is called Karma.",
  "tags": ["God"]
}, {
  "body": "Why did the students eat their homework? Because the teacher said that it was a piece of cake.",
  "tags": ["food", "school"]
}, {
  "body": "Dear Lord: The gods have been good to me. For the first time in my life, everything is absolutely perfect just the way it is. So here's the deal: You freeze everything the way it is, and I won't ask for anything more. If that is OK, please give me absolutely no sign. OK, deal. In gratitude, I present you this offering of cookies and milk. If you want me to eat them for you, give me no sign. Thy will be done.",
  "tags": ["God", "life"]
}, {
  "body": "You know, it's not the length of the vector that counts... it's how you apply the force.",
  "tags": ["dirty"]
}, {
  "body": "Why do the Scottish wear kilts? Because a sheep can hear a zipper from like a mile away.",
  "tags": ["retirement", "stupid"]
}, {
  "body": "Monday is an awful way to spend 1\/7th of your life.",
  "tags": ["attitude", "life", "work"]
}, {
  "body": "How can you tell that you're getting old? You go to an antique auction and three people bid on you!",
  "tags": ["birthday", "retirement"]
}, {
  "body": "If your wife wants to learn to drive, don't stand in her way.",
  "tags": ["dirty", "marriage", "women"]
}, {
  "body": "Miss Anders... I didn't recognise you with your clothes on.",
  "tags": ["dirty", "sarcastic", "women"]
}, {
  "body": "Can I buy you a drink, or do you just want the money?",
  "tags": ["attitude", "flirty", "stupid"]
}, {
  "body": "How does a man take a bubble bath? He eats beans for dinner.",
  "tags": ["dirty", "men"]
}, {
  "body": "How does a man show he's planning for the future? He buys two cases of beer instead of one.",
  "tags": ["dirty", "men"]
}, {
  "body": "If someone notices you with an open zipper, answer proudly: professional habit.",
  "tags": ["flirty", "men", "sex"]
}, {
  "body": "Are my undies showing? [&quot;No.&quot;] &quot;Would you like them to?&quot;",
  "tags": ["attitude", "dirty", "flirty"]
}, {
  "body": "Me: *sneaks out of the house* *drives to another state* *hides in a cave* *quietly opens a bag of chips* My kids: Can we have some?",
  "tags": ["family", "food", "kids"]
}, {
  "body": "Why do men become smarter during sex? Because they are plugged into a genius.",
  "tags": ["men", "sex"]
}, {
  "body": "Girl: Why are you so ugly? Boy: I'm you from the future.",
  "tags": ["flirty", "insults", "ugly"]
}, {
  "body": "What is the difference between a battery and a woman? A battery has a positive side.",
  "tags": ["marriage", "women"]
}, {
  "body": "Hi there, I'm a human being! What are you?",
  "tags": ["rude", "sarcastic"]
}, {
  "body": "Why are there 5 syllables in the word \"monosyllabic\"?",
  "tags": ["puns"]
}, {
  "body": "It's not what man can create it's what man can become.",
  "tags": ["motivational"]
}, {
  "body": "A priest, a rabbi and a vicar walk into a bar. The barman says, \"Is this some kind of joke?\"",
  "tags": ["sarcastic"]
}, {
  "body": "Nowadays, most of the children dream about an IPhone, when I was a child \u2013 I wanted a dog.",
  "tags": ["animal", "life"]
}, {
  "body": "Just got a booty call from life, apparently it still wants to keep fucking me.",
  "tags": ["life"]
}, {
  "body": "If you have worked and didn't get anything, it means someone else got it.",
  "tags": ["life", "work"]
}, {
  "body": "If you can't buy a person, you can always sell him.",
  "tags": ["attitude", "life"]
}, {
  "body": "My five year plan? I don't even have a five minute plan.",
  "tags": ["attitude", "time"]
}, {
  "body": "Are you sitting on the F5 key? Because your backside is refreshing.",
  "tags": ["flirty", "IT"]
}, {
  "body": "Which part of the Bible won't you find a black man? The Book of Job.",
  "tags": ["christian", "racist"]
}, {
  "body": "Do you love me because I am beautiful or I am I beautiful because you love me?",
  "tags": ["beauty", "flirty", "love", "Valentines"]
}, {
  "body": "Only an ass can be divided in half.",
  "tags": ["life", "sarcastic"]
}, {
  "body": "There are smart men, handsome men, rich men, sexy men and sweet men and then there is the combination of all. We call that one a &quot;unicorn&quot;",
  "tags": ["beauty", "intelligence", "men"]
}, {
  "body": "Hey baby, I'm a power source, and you're the kind of resistor i'd like to deliver my load to.",
  "tags": ["flirty", "IT"]
}, {
  "body": "I feel like Tampax \u2013 at a good place, but wrong time\u2026",
  "tags": ["life"]
}, {
  "body": "Why does someone who runs marathons make a good student? Because education pays off in the long run!",
  "tags": ["sport"]
}, {
  "body": "The only time a woman wishes that she were a year older is when she is expecting a baby.",
  "tags": ["kids", "time", "women"]
}, {
  "body": "What's the difference between a blonde and a guy? The blonde has the higher sperm count.",
  "tags": ["blonde", "rude"]
}, {
  "body": "Please, keep talking. I always yawn when I am interested.",
  "tags": ["communication", "insults"]
}, {
  "body": "Why'd the semen cross the road? I wore the wrong pair of socks.",
  "tags": ["dirty"]
}, {
  "body": "Why doesn't a blonde talk during sex? Because her mother told her never to talk to strangers.",
  "tags": ["blonde", "communication", "sex"]
}, {
  "body": "If God hadn't meant the pussy to be eaten, he wouldn't have made it look like a taco.",
  "tags": ["dirty", "God", "sex"]
}, {
  "body": "Why is a bra singular and panties plural?",
  "tags": ["puns", "women"]
}, {
  "body": "How do you make a black nervous? Take him to an auction.",
  "tags": ["black"]
}, {
  "body": "What do you call a blonde between two brunettes? A mental block.",
  "tags": ["blonde"]
}, {
  "body": "The only thing more important than your happiness is mine so get on it.",
  "tags": ["happiness", "rude"]
}, {
  "body": "\"Hi, I'm writing a phone book, can I have your number?\"",
  "tags": ["flirty", "love"]
}, {
  "body": "I think I married someone else's soulmate. I wish they'd come get him.",
  "tags": ["love", "marriage", "sarcastic"]
}, {
  "body": "If someone is spitting behind you, it means you're in front.",
  "tags": ["life", "motivational"]
}, {
  "body": "What is the thinnest book in the world? \"What Men Know About Women\"",
  "tags": ["men", "women"]
}, {
  "body": "After the weekend the most difficult task is to remember names\u2026",
  "tags": ["alcohol"]
}, {
  "body": "You won't drink away the alcoholism.",
  "tags": ["alcohol", "life"]
}, {
  "body": "In principle, I can stop drinking, the thing is \u2013 I don't have such a principle.",
  "tags": ["alcohol", "attitude"]
}, {
  "body": "Time does'nt exist. Clocks exists.",
  "tags": ["life", "time"]
}, {
  "body": "I became a vegetarian \u2013 switched to weed.",
  "tags": ["attitude"]
}, {
  "body": "People tend to make rules for others and exceptions for themselves.",
  "tags": ["life", "people"]
}, {
  "body": "I took an IQ test and the results were negative.",
  "tags": []
}, {
  "body": "Wanna measure the coefficient of static friction between us?",
  "tags": ["flirty", "intelligence"]
}, {
  "body": "Never attribute to malice what can be adequately explained by stupidity.",
  "tags": ["stupid"]
}, {
  "body": "If corn oil comes from corn, where does baby oil come from?",
  "tags": ["kids"]
}, {
  "body": "We've heard that ignorance of maths is growing geometrically, whatever that means.",
  "tags": ["stupid"]
}, {
  "body": "If someone ever intimidates you, remember that they're 70% water. Are you scared of water? Well you should be. 400,000 people drown per year.",
  "tags": ["people"]
}, {
  "body": "Whats the difference between a jeweler and a jailer? One sells watches and one watches cells.",
  "tags": ["life", "work"]
}, {
  "body": "Please don't eat me! I have a wife and kids... ... ...Eat them!",
  "tags": ["family", "stupid"]
}, {
  "body": "What's six inches long that women love? Folding money.",
  "tags": ["money", "women"]
}, {
  "body": "She's so fat, she's got more chins than a Chinese phone book.",
  "tags": ["insults", "rude"]
}, {
  "body": "Two years ago I married a lovely young virgin, and if that doesn't change soon, I'm gonna divorce her.",
  "tags": ["marriage", "sex", "women"]
}, {
  "body": "Why does the bride always wear white? Because it is good for the dishwasher to match the stove and refrigerator.",
  "tags": ["dirty", "marriage", "women"]
}, {
  "body": "What did the chocolate syrup say to the ice cream? \"I'm sweet on you!\"",
  "tags": ["flirty", "Valentines"]
}, {
  "body": "You can do more with a kind word and a gun than with just a kind word.",
  "tags": ["attitude", "communication", "motivational"]
}, {
  "body": "Have you heard about the new supersensitive condoms? They hang around after the man leaves and talk to the woman.",
  "tags": ["men", "sex"]
}, {
  "body": "Everyone can find one person or three cats waiting for him.",
  "tags": ["animal", "life", "love"]
}, {
  "body": "It's so cold outside, I actually saw a gangster pull his pants up.",
  "tags": ["life"]
}, {
  "body": "Some cause happiness wherever they go. Others whenever they go.",
  "tags": ["happiness", "life"]
}, {
  "body": "A girl has to get in bed before 8 p.m. so she can come home at 11.",
  "tags": ["sex", "women"]
}, {
  "body": "Why is sex like a bridge game? You don't need a partner if you have a good hand.",
  "tags": ["sex", "sport"]
}, {
  "body": "Magician: I need a volunteer. [man stands] Not you. [woman stands] Not you. GARY GET UP HERE! [Gary goes up] We've never met before, right?",
  "tags": ["attitude", "work"]
}, {
  "body": "A flashlight is a case for holding dead batteries.",
  "tags": ["sarcastic", "work"]
}, {
  "body": "I used to drink all brands of beer. Now, I am older Budweiser!",
  "tags": ["alcohol"]
}, {
  "body": "Hard work is simply the refuge of people who have nothing whatever to do.",
  "tags": ["life", "people", "sarcastic", "work"]
}, {
  "body": "I like long walks, especially when they are taken by people who annoy me.",
  "tags": ["attitude"]
}, {
  "body": "My mother-in-law fell down a wishing well, I was amazed, I never knew they worked.",
  "tags": []
}, {
  "body": "If I agreed with you we'd both be wrong.",
  "tags": []
}, {
  "body": "Honesty is the best policy but insanity is the best defense.",
  "tags": ["attitude", "life"]
}, {
  "body": "I've learned that the people you care most about in life are taken from you too soon and all the less important ones just never go away.",
  "tags": ["life"]
}, {
  "body": "My \"it's cold outside\" post just went viral on Facebook.",
  "tags": ["life"]
}, {
  "body": "Haven't seen any UFOs lately. Wondering if the galaxy is downsizing their space programs too.",
  "tags": ["life"]
}, {
  "body": "Where the woman's neck ends the infinity begins.",
  "tags": ["women"]
}, {
  "body": "\u2018A pedigree bulldog missing. Founders \u2013 rest in peace.'",
  "tags": ["animal"]
}, {
  "body": "The right to be heard does not automatically include the right to be taken seriously.",
  "tags": ["life"]
}, {
  "body": "To err is human, to blame it on somebody else shows management potential.",
  "tags": ["life"]
}, {
  "body": "The difference between fiction and reality? Fiction has to make sense.",
  "tags": ["life"]
}, {
  "body": "The truth is out there; it just hasn't been indexed well.",
  "tags": []
}, {
  "body": "Why does night fall but never break and day break but never fall?",
  "tags": ["life"]
}, {
  "body": "A nice box of chocolates provide your total daily intake of calories in one place. Isn't that handy?",
  "tags": []
}, {
  "body": "If you have a shitty job, you probably shouldn't lick your fingers at lunch time.",
  "tags": ["life"]
}, {
  "body": "Errors have been made. Others will be blamed.",
  "tags": ["attitude"]
}, {
  "body": "Did you hear about the nearsighted porcupine? He fell in love with a pincushion!",
  "tags": ["animal", "love"]
}, {
  "body": "Children: You spend the first 2 years of their life teaching them to walk and talk. Then you spend the next 16 years telling them to sit down and shut-up.",
  "tags": ["kids"]
}, {
  "body": "Insanity is defined as doing the same thing over and over again, expecting different results.",
  "tags": ["stupid"]
}, {
  "body": "You're never too old to learn something stupid.",
  "tags": ["stupid"]
}, {
  "body": "Never argue with a woman when she's tired...or when she's rested.",
  "tags": ["women"]
}, {
  "body": "Married men live longer than single men, but they're a lot more willing to die.",
  "tags": ["men"]
}, {
  "body": "You're so pretty, you could be in a beer commercial.",
  "tags": ["attitude", "beauty", "women"]
}, {
  "body": "What's the difference between a female lawyer and a pitbull terrier? Lipstick!",
  "tags": ["animal", "women"]
}, {
  "body": "Everybody lies, but it doesn't matter since nobody listens.",
  "tags": ["attitude", "life"]
}, {
  "body": "I bet we can get into some serious Treble together.",
  "tags": ["flirty", "intelligence"]
}, {
  "body": "The Miss Universe pageant is fixed. All the winners are from Earth.",
  "tags": ["women"]
}, {
  "body": "What's a man's idea of a balanced diet? Beer in each hand!",
  "tags": ["men"]
}, {
  "body": "If Wal-Mart is lowering prices every day, why isn't anything in the store is free yet?",
  "tags": ["life"]
}, {
  "body": "A doctor tells a woman she can no longer touch anything alcoholic. So she gets a divorce.",
  "tags": ["alcohol", "doctor", "marriage", "men"]
}, {
  "body": "Men live better than women. First of all, they get married later and secondly, they die earlier.",
  "tags": ["life", "marriage", "men", "women"]
}, {
  "body": "It's better to be a worldwide alcoholic, than an Alcoholic Anonymous.",
  "tags": ["alcohol"]
}, {
  "body": "I tried to be polite and hold the door open for a woman, but she kept screaming, \"I'm peeing in here!\" Fucking b*tch.",
  "tags": ["attitude", "men", "women"]
}, {
  "body": "I can't stand being in a wheelchair.",
  "tags": ["health"]
}, {
  "body": "You cannot play with me unless you blow me. -Balloon",
  "tags": ["flirty", "life", "sex"]
}, {
  "body": "The best curve on a girl is her smile...  Naw just kiddin, look at dat ass.",
  "tags": ["dirty", "women"]
}, {
  "body": "Give a man a fish, and you'll feed him for a day; give him a religion, and he'll starve to death while praying for a fish.",
  "tags": ["animal", "attitude", "christian", "death"]
}, {
  "body": "Before the wedding I have loved all the women on earth, after the wedding one woman less.",
  "tags": ["marriage", "men", "wedding", "women"]
}, {
  "body": "When you get to your wit's end, You'll find God lives there.",
  "tags": ["christian", "God"]
}, {
  "body": "What's the difference between a blonde and a computer? You only have to punch information into a computer once.",
  "tags": ["blonde", "IT"]
}, {
  "body": "I recently decided to sell my vacuum cleaner, all it was doing was gathering dust.",
  "tags": ["intelligence"]
}, {
  "body": "\u2018Do you know if pigs have periods?' \u2018Are you kidding me? What idiot would keep a pig until she's 14?'",
  "tags": ["animal"]
}, {
  "body": "What happens when you fall in love with a french chef? You get buttered up.",
  "tags": ["life", "love", "Valentines"]
}, {
  "body": "A genius lives in every one of us. Each day more and more heavily\u2026",
  "tags": ["attitude", "life", "motivational"]
}, {
  "body": "Does time fly when you're having sex or was it really just one minute?",
  "tags": ["sex", "time"]
}, {
  "body": "Im not saying I'm number one, uh sorry I lied I'm number one two three four and five.",
  "tags": ["stupid"]
}, {
  "body": "A clean desk is a sign of a cluttered desk drawer.",
  "tags": ["attitude", "rude", "sarcastic", "work"]
}, {
  "body": "What's your amplitude for charm-strange mixing?",
  "tags": ["flirty"]
}, {
  "body": "If you were a browser, you'd be called FireFoxy.",
  "tags": ["flirty", "IT"]
}, {
  "body": "You're wrong! I touched second base. I missed third\u2026 but I touched second.",
  "tags": ["sport"]
}, {
  "body": "Getting a red heart instead of a yellow star makes me feel like things are moving a little too fast between us.",
  "tags": ["IT", "love", "sarcastic"]
}, {
  "body": "Diplomacy is saying \"nice doggy\" until you find a big rock.",
  "tags": ["life"]
}, {
  "body": "There are two kinds of people who don't say much: those who are quiet and those who talk a lot.",
  "tags": ["life", "people"]
}, {
  "body": "You may have a heart of gold, but so does a hard-boiled egg.",
  "tags": []
}, {
  "body": "Dear ladies, if you want to have more free time and have fun on the weekends, teach your men fishing!",
  "tags": ["animal", "marriage", "men", "women", "work"]
}, {
  "body": "What kind of flowers do you never give on Valentine's Day? Cauliflowers!",
  "tags": ["Valentines"]
}, {
  "body": "Why do men like love at first sight? Because he knows it's all over as soon as she opens her mouth.",
  "tags": ["love", "men", "women"]
}, {
  "body": "Build a man a fire, and he'll be warm for a day. Set a man on fire, and he'll be warm for the rest of his life.",
  "tags": []
}, {
  "body": "I recently read that love is entirely a matter of chemistry. That must be why my wife treats me like toxic waste.",
  "tags": ["marriage", "women"]
}, {
  "body": "Life's like a bird, it's pretty cute until it shits on your head.",
  "tags": ["life"]
}, {
  "body": "Insanity is hereditary. You get it from your kids.",
  "tags": ["kids"]
}, {
  "body": "RSVP: \u26AA\uFE0Fyes         \u26AA\uFE0Fno                      \u26AB\uFE0Fyes now but then no later on",
  "tags": ["attitude", "life"]
}, {
  "body": "They keep saying the right person will come along, I think mine got hit by a truck.",
  "tags": ["love"]
}, {
  "body": "Time is at once the most valuable and most perishable of all our possessions.",
  "tags": ["life", "time"]
}, {
  "body": "Being an ugly girl is like being a man......you have to work",
  "tags": ["men", "ugly", "women", "work"]
}, {
  "body": "Can you say three two-letter words that mean small? Is it in?",
  "tags": ["men", "sex"]
}, {
  "body": "What goes up and never comes down? Your age!",
  "tags": ["age", "birthday", "life"]
}, {
  "body": "What do farmers give their wives on Valentine's Day? Hog and kisses!",
  "tags": ["Valentines"]
}, {
  "body": "I'm a prince in Lagos, Nigeria and I want you to help me move $500 million out of the country.",
  "tags": ["money", "sarcastic"]
}, {
  "body": "It's two in the morning.  Do you know where your blankets are?",
  "tags": ["attitude", "life"]
}, {
  "body": "Facebook is telling me to &quot;reconnect&quot; with my brother...hmmm, I see him everyday",
  "tags": ["attitude", "IT"]
}, {
  "body": "Why does someone believe you when you say there are four billion stars, but check when you say the paint is wet?",
  "tags": ["life"]
}, {
  "body": "Good girls are bad girls that never get caught.",
  "tags": ["women"]
}, {
  "body": "WARNING: The consumption of alcohol may cause you to think you can sing.",
  "tags": []
}, {
  "body": "All my party planning skills revolve around exit strategies.",
  "tags": ["attitude"]
}, {
  "body": "I love waking up to the sound of birds arguing with their spouses.",
  "tags": ["animal", "marriage"]
}, {
  "body": "Twitter is just LinkedIn for the chronically unemployed.",
  "tags": ["IT", "stupid"]
}, {
  "body": "To be sure of hitting the target, shoot first and call whatever you hit the target.",
  "tags": []
}, {
  "body": "You are such a good friend that if we were on a sinking ship together and there was only one life jacket ... I'd miss you heaps and think of you often.",
  "tags": []
}, {
  "body": "What is a ram's favorite song on February 14th? I only have eyes for ewe, dear",
  "tags": ["Valentines"]
}, {
  "body": "Life is too complicated in the morning.",
  "tags": ["life"]
}, {
  "body": "I say no to alcohol, it just doesn't listen.",
  "tags": ["attitude", "life"]
}, {
  "body": "What do men and women have in common? They both distrust men.",
  "tags": ["men"]
}, {
  "body": "Muy Picante: What does a nosey pepper do? Gets jalape\xF1o business!",
  "tags": []
}, {
  "body": "What's the difference between purple and pink? The grip.",
  "tags": []
}, {
  "body": "He may have a nice car but I have a fast sleigh",
  "tags": ["fighting", "men"]
}, {
  "body": "Wanna go on a picnic? Alpaca lunch.",
  "tags": ["animal"]
}, {
  "body": "What has a head, a tail, and no body? A coin!",
  "tags": ["life"]
}, {
  "body": "Don't get me wrong, I'm grateful to have a job. I just wish it wasn't THIS job.",
  "tags": ["life"]
}, {
  "body": "This isn't an office. It's hell with fluorescent lighting.",
  "tags": ["life"]
}, {
  "body": "Ninety two percent of cross-eyed teachers have difficulty controlling their pupils.",
  "tags": ["life"]
}, {
  "body": "The knack of flying is learning how to throw yourself at the ground and miss.",
  "tags": []
}, {
  "body": "The best way to remember your 21st birthday, is not at all. Have fun blacking out.",
  "tags": ["birthday"]
}, {
  "body": "Where were you i have been waiting for half an hour. Said No Girl Ever.",
  "tags": ["sarcastic", "women"]
}, {
  "body": "The same people who laugh at gypsy fortune tellers take economists seriously.",
  "tags": ["attitude", "money", "people"]
}, {
  "body": "What do you call it when a 90 year old man masturbates successfully? Miracle whip.",
  "tags": ["retirement", "sex"]
}, {
  "body": "It is better to be on seventh heaven, rather than on the seventh month.",
  "tags": ["kids", "life", "love"]
}, {
  "body": "I'm not racist, my shadow is black.",
  "tags": ["racist"]
}, {
  "body": "Error, no keyboard. Press F1 to continue.",
  "tags": ["life", "sarcastic"]
}, {
  "body": "My room + internet connection + music + food \u2013 homework = perfect day.",
  "tags": ["life", "school"]
}, {
  "body": "Why does it take 100 million sperms to fertilize one egg? Because they won't stop to ask directions.",
  "tags": ["men"]
}, {
  "body": "You stare at frozen juice cans because they say, \"concentrate\".",
  "tags": ["insults"]
}, {
  "body": "I hate Russian dolls, they're so full of themselves.",
  "tags": ["racist"]
}, {
  "body": "She is not my reword, I am her punishment.",
  "tags": ["life", "love", "marriage", "men", "women"]
}, {
  "body": "Whats long and hard on a nigger? First grade.",
  "tags": ["racist", "sex"]
}, {
  "body": "I didn't know angels could fly so low.",
  "tags": ["flirty", "Valentines"]
}, {
  "body": "How do you confuse a blonde? You don't. They're born that way!",
  "tags": ["blonde"]
}, {
  "body": "Love is an ocean of emotions entirely surrounded by expenses.",
  "tags": ["love", "money"]
}, {
  "body": "Do you need space? Join NASA!",
  "tags": ["attitude", "life", "marriage", "sarcastic"]
}, {
  "body": "Instead of getting married again, I'm going to find a woman I don't like and give her a house.",
  "tags": ["marriage", "money", "women"]
}, {
  "body": "The hardest part of getting a girls phone number is working up the courage to go through her trash and get it.",
  "tags": ["attitude", "life", "sarcastic"]
}, {
  "body": "How are airplanes and women alike? They both have cockpits.",
  "tags": ["women"]
}, {
  "body": "There's a reason it's called \"girls gone wild\" and not \"women gone wild\". When girls go wild, they show their tits. When women go wild, they kill men and drown their kids in a tub.",
  "tags": ["women"]
}, {
  "body": "All men are idiots...and I married their king.",
  "tags": ["marriage", "men"]
}, {
  "body": "I was such an ugly kid. When I played in the sandbox the cat kept covering me up.",
  "tags": ["kids", "ugly"]
}, {
  "body": "If your dog is barking at the back door and your wife is yelling at the front door, who do you let in first? The dog, of course. He'll shut up once you let him in.",
  "tags": ["animal", "marriage", "women"]
}, {
  "body": "Cake: the answer, no matter the question.",
  "tags": ["life"]
}, {
  "body": "If you force sex on a prostitute is it rape or shoplifting?",
  "tags": ["dirty", "sex"]
}, {
  "body": "What does NAACP stand for? National Association of Apes Called People.",
  "tags": ["black", "racist"]
}, {
  "body": "[man] Excuse me, would you like to dance? [women] NO! [man] Maybe u didn't hear me.... I said u look really fat in those pants!",
  "tags": ["flirty", "rude", "sarcastic"]
}, {
  "body": "Even if you were twice as smart, you'd still be stupid!",
  "tags": ["insults", "intelligence"]
}, {
  "body": "My ex-girlfriend told me nothing shocks her anymore so I switched her digital scale from Lbs to Kg.",
  "tags": ["fat", "stupid", "women"]
}, {
  "body": "A real Don Juan has to dress not only tasteful but also very quickly.",
  "tags": ["love", "men", "sarcastic", "sex"]
}, {
  "body": "What's the definition of a Yankee? Same thing as a \"quickie\", only you do it yourself.",
  "tags": ["life", "sex"]
}, {
  "body": "Silence doesn't mean your sexual performance left her speechless.",
  "tags": ["men", "sex", "women"]
}, {
  "body": "A beautiful girl looks good in the background of her smart friend.",
  "tags": ["attitude", "beauty", "friendship", "women"]
}, {
  "body": "Are you a cat because you're purrrrrrfect.",
  "tags": ["animal", "flirty"]
}, {
  "body": "If you say &quot;I knew you were going to say that&quot; enough. You can start billing people for psychic readings.",
  "tags": ["attitude", "communication", "people", "rude"]
}, {
  "body": "The big difference between sex for money and sex for free is that sex for money usually costs a lot less.",
  "tags": ["money", "sex"]
}, {
  "body": "The only reason I've been going out with  this guy all summer is because I have no idea how to operate my gas grill.",
  "tags": ["attitude", "intelligence", "stupid", "women"]
}, {
  "body": "A woman is like a suitcase: both hard to carry and a pity to throw away.",
  "tags": ["love", "women"]
}, {
  "body": "I park in the farthest spot possible at the gym for the added benefit of eating my croissan'wich without being judged by people walking by.",
  "tags": ["attitude", "health", "sport"]
}, {
  "body": "You have the nicest syntax I've ever seen.",
  "tags": ["flirty", "intelligence", "IT"]
}, {
  "body": "May you never leave your marriage alive.",
  "tags": ["marriage"]
}, {
  "body": "Oh... Sorry... Did you mistake me for someone who cares?",
  "tags": ["attitude", "mistake", "people"]
}, {
  "body": "Alcohol not only expands the blood vessels but also communications.",
  "tags": ["alcohol", "communication"]
}, {
  "body": "If I wanted to get trapped in a scary maze, I'd just go into my kid's bedroom.",
  "tags": ["family", "kids", "sarcastic"]
}, {
  "body": "Dear men, if you stopped seeing your wife as a woman, it doesn't mean that all men are blind.",
  "tags": ["life", "love", "marriage", "men"]
}, {
  "body": "*Puts down phone* OH MY GOD I HAVE ANOTHER HAND!",
  "tags": ["IT", "stupid"]
}, {
  "body": "How do you know when Santa's in the room? You can sense his presents.",
  "tags": ["Christmas"]
}, {
  "body": "Mothers with teenagers know why animals eat their young.",
  "tags": ["animal", "kids", "Mother's Day"]
}, {
  "body": "Did you hear about the blind prostitute? Well, you got to hand it to her.",
  "tags": ["dirty", "sex", "women"]
}, {
  "body": "Money can't buy happiness, but it can help you look for it quicker, in a convertible.",
  "tags": ["happiness", "life", "money"]
}, {
  "body": "Who can make more money in a week, a drug dealer or a prostitute? The prostitute because she can wash and resell her crack.",
  "tags": ["dirty", "drug"]
}, {
  "body": "What do you call a black with no arms? Trustworthy.",
  "tags": ["black"]
}, {
  "body": "How can you tell if your wife is dead? The sex is the same but the dishes pile up.",
  "tags": ["marriage", "rude"]
}, {
  "body": "How does a black chick tell if she's pregnant? When she pulls the tampon out, all the cotton is already picked.",
  "tags": ["black", "dirty"]
}, {
  "body": "Hey in my nursing class we just learned how to bathe people can I practice on you?",
  "tags": ["attitude", "flirty"]
}, {
  "body": "What do Lifesavers do that a man can't? Come in eight flavors.",
  "tags": ["life"]
}, {
  "body": "Marrying a divorced man is ecologically responsible. In a world where there are more women than men, it pays to recycle.",
  "tags": ["marriage", "men"]
}, {
  "body": "What did the hurricane say to the palm tree? Better hold onto your nuts because this is no ordinary blowjob.",
  "tags": ["life"]
}, {
  "body": "You never lose by loving. You always lose by holding back.",
  "tags": ["love"]
}, {
  "body": "Remember: You can eat your way out of almost any problem.",
  "tags": ["attitude", "food"]
}, {
  "body": "Why do men find it difficult to make eye contact? Breasts don't have eyes.",
  "tags": ["men"]
}, {
  "body": "Sports do not build character. They reveal it.",
  "tags": ["sport"]
}, {
  "body": "Don't tell a lot about yourself, behind your back will tell more interestingly about you.",
  "tags": ["friendship", "life"]
}, {
  "body": "Girls wanting giant ass teddy bears, & VS bags, and bouquets of underwear for valentines day. Just give me some pizza & I'll love u forever.",
  "tags": ["Valentines"]
}, {
  "body": "Being a great father is like shaving. No matter how good you shaved today, you have to do it again tomorrow.",
  "tags": ["Father's Day"]
}, {
  "body": "Why do women pierce their bellybutton? Place to hang their air freshener.",
  "tags": ["dirty", "women"]
}, {
  "body": "Why are men like cars? Because they always pull out before they check to see if anyone else is cumming.",
  "tags": ["car", "men", "sex"]
}, {
  "body": "Why don't bunnies make noise when they have sex? Because they have cotton balls.",
  "tags": ["animal", "sex"]
}, {
  "body": "&quot;Because it would be hilarious,&quot; is probably not a good reason to elect someone to be president.",
  "tags": ["life", "political"]
}, {
  "body": "I'm not being rude, you're just insignificant.",
  "tags": ["insults", "rude"]
}, {
  "body": "God must love stupid people. He made SO many.",
  "tags": ["christian", "God", "people"]
}, {
  "body": "What do you get when you cross a Mexican and a nigger? Someone who is too lazy to steal.",
  "tags": ["racist", "rude"]
}, {
  "body": "Accept it. Your parents HAVE had sex before.",
  "tags": ["sex"]
}, {
  "body": "Where is the best place to hide a nigger's food stamps? Under his work boots.",
  "tags": ["racist"]
}, {
  "body": "That moment when you laugh so much about your friends joke you end up farting accidently.",
  "tags": ["life"]
}, {
  "body": "Never agree to plastic surgery if the doctor's office is full of portraits by Picasso.",
  "tags": ["doctor", "life"]
}, {
  "body": "&quot;Could you take a couple steps back. I have a nut allergy.&quot;",
  "tags": ["food", "rude"]
}, {
  "body": "Some people are so poor, all they have is money.",
  "tags": ["attitude", "money", "people"]
}, {
  "body": "In my experience there's two ways to get things done, the right way and the drunk way.",
  "tags": ["alcohol", "attitude", "work"]
}, {
  "body": "I accidentally took an extra step when I reached the top of the stairs and now I'm in a marching band.",
  "tags": ["mistake", "sarcastic", "success"]
}, {
  "body": "How many golfers does it take to change a light bulb? FORE!",
  "tags": ["sport"]
}, {
  "body": "If i was the Grinch, I wouldn't steal Christmas. I'd steal you.",
  "tags": ["Christmas", "flirty"]
}, {
  "body": "Why didn't Noah swat those two mosquitoes?",
  "tags": ["animal", "christian"]
}, {
  "body": "If the fortune has turned her back on you, you can do whatever you want behind her back.",
  "tags": ["attitude", "happiness", "motivational", "sarcastic"]
}, {
  "body": "I heard the next Steve Jobs movie will be on IMAX. It's the same movie, just on a bigger screen.",
  "tags": ["attitude", "intelligence", "sarcastic"]
}, {
  "body": "You must work at subway...cause you`re givin` me a foot long.",
  "tags": ["dirty", "food"]
}, {
  "body": "Are you the energizer bunny cause you just keep going and going through my mind.",
  "tags": ["flirty", "love"]
}, {
  "body": "Some people only gets called by their nicknames. Usually it sounds weird to even say their real name.",
  "tags": ["friendship", "life", "people"]
}, {
  "body": "Life is tough enough without having someone kick you from the inside.",
  "tags": ["kids", "life", "sarcastic", "women"]
}, {
  "body": "How did they invent break dancing? Trying to steal the hubcaps off a moving car.",
  "tags": ["black"]
}, {
  "body": "If you don't like my opinion of you \u2013 improve yourself!",
  "tags": ["insults", "motivational"]
}, {
  "body": "When we were together, you always said you'd die for me. Now that we've broke up, I think it's time you kept your promise!",
  "tags": ["dirty", "rude"]
}, {
  "body": "What u call 10 black people in the back of a truck? A good days hunting.",
  "tags": ["black", "racist"]
}, {
  "body": "Do you wanna see a magic trick? Watch me pull something out of my pants!",
  "tags": ["dirty", "flirty", "stupid"]
}, {
  "body": "Appreciate how some people don't come out of ATM till they find the meaning of life right there.",
  "tags": ["attitude", "life", "money"]
}, {
  "body": "Discretion is being able to raise your eyebrow instead of your voice.",
  "tags": ["life"]
}, {
  "body": "Be safety conscious. 80% of people are caused by accidents.",
  "tags": ["life", "people", "sex"]
}, {
  "body": "You have two choices in life: You can stay single and be miserable, or get married and wish you were dead.",
  "tags": ["life", "marriage"]
}, {
  "body": "Women with pasts interest men... they hope history will repeat itself.",
  "tags": ["men", "women"]
}, {
  "body": "Why is being in the military like a blow-job? The closer you get to discharge, the better you feel.",
  "tags": ["life", "sex"]
}, {
  "body": "Women may not hit harder, but they hit lower.",
  "tags": ["women"]
}, {
  "body": "I ran three miles today. Finally I said, \"Lady take your purse.\"",
  "tags": ["life"]
}, {
  "body": "A cat, by any other name, is still a sneaky little furball that barfs on the furniture.",
  "tags": ["animal"]
}, {
  "body": "If life hands you lemons, break out the tequila!",
  "tags": ["life"]
}, {
  "body": "You can't buy love, but you pay heavily for it.",
  "tags": ["love", "money"]
}, {
  "body": "Why do bachelors like smart women? Because they're so rare.",
  "tags": ["life", "men", "women"]
}, {
  "body": "Why do men find it difficult to make eye contact? They're trying not to attract any more undue blame then they already have.",
  "tags": ["life", "men"]
}, {
  "body": "Why are men like blenders? You need one, but you're not quite sure why.",
  "tags": ["men"]
}, {
  "body": "If this bar is a meat market, you must be the prime rib!",
  "tags": ["food", "sarcastic"]
}, {
  "body": "Love is one long sweet dream... and marriage is the alarm clock.",
  "tags": ["love", "marriage"]
}, {
  "body": "Women dream of world peace, a safe environment, and eliminating hunger. What do men dream of? Being stuck in an elevator with the Doublemint twins.",
  "tags": ["life", "men", "women"]
}, {
  "body": "Are you a shark, cause I got some swimmers for you to swallow.",
  "tags": ["animal", "stupid"]
}, {
  "body": "I have all the money I'll ever need \u2013 if I die by 4:00 p.m. today.",
  "tags": ["money"]
}, {
  "body": "There is no I in Team, but there's always one big A... if you know what I mean.",
  "tags": ["work"]
}, {
  "body": "Isn't it odd the way everyone automatically assumes that the goo in soap dispensers is always soap? I like to fill mine with mustard, just to teach people a lesson in trust.",
  "tags": ["attitude"]
}, {
  "body": "What has four legs but can't walk? A chair.",
  "tags": []
}, {
  "body": "Keep honking. I'm reloading.",
  "tags": ["IT", "stupid"]
}, {
  "body": "Dance Dance Revolution is an intense game but an even more intense to-do list",
  "tags": ["attitude", "work"]
}, {
  "body": "If at first you don't succeed, destroy all evidence that you tried.",
  "tags": ["attitude"]
}, {
  "body": "Just about the time when you think you can make ends meet, somebody moves the ends.",
  "tags": ["life"]
}, {
  "body": "How do they say \"fuck you\" in Los Angeles? \"Trust me.\"",
  "tags": ["life"]
}, {
  "body": "My drinking team has a bowling problem.",
  "tags": ["attitude", "life"]
}, {
  "body": "Hey gurl, how about you make the Patriots and deflate these balls.",
  "tags": ["dirty", "sport"]
}, {
  "body": "For those who never forget a face, you are an exception.",
  "tags": ["insults"]
}, {
  "body": "A woman's favorite position is CEO.",
  "tags": ["money", "sex", "women", "work"]
}, {
  "body": "What did one candle say to the other? \"Don't birthdays burn you up?\"",
  "tags": ["birthday"]
}, {
  "body": "Let's both be naughty this year and save Santa the trip.",
  "tags": ["Christmas", "dirty", "flirty"]
}, {
  "body": "Me: I don't scare easily. Pregnant wife: All four of our daughters will be teenagers at the same time. Me: *never stops screaming*",
  "tags": ["family", "kids"]
}, {
  "body": "Whenever I fill out an application, in the part that says &quot;If an emergency, notify:&quot; I put &quot;DOCTOR&quot;. What's my mother going to do?",
  "tags": ["attitude", "doctor"]
}, {
  "body": "My grandfather has the heart of a lion and a lifetime ban from local zoo.",
  "tags": ["animal", "dirty", "family", "retirement"]
}, {
  "body": "I don't want you to feel like you can't express yourself, but I do want you to stop talking.",
  "tags": ["attitude", "communication", "rude"]
}, {
  "body": "Back in my day, we didn't watch TV while we ate dinner. We actually talked to each other. It was awful.",
  "tags": ["communication", "life", "retirement"]
}, {
  "body": "If a man goes cheats for four times, according to the rules of geometry, he will come home.",
  "tags": ["marriage", "men", "sex"]
}, {
  "body": "Why do they call it PMS? Because Mad Cow Disease was already taken.",
  "tags": ["dirty", "rude", "women"]
}, {
  "body": "How do men define a \"50\/50\" relationship? We cook-they eat; we clean-they dirty; we iron-they wrinkle.",
  "tags": ["men", "women"]
}, {
  "body": "I worked myself up from nothing to a state of extreme poverty.",
  "tags": ["money"]
}, {
  "body": "I don't worry about terrorism. I was married for two years.",
  "tags": ["marriage", "sarcastic", "women"]
}, {
  "body": "A wife is like a boomerang \u2013 the harder you throw the faster she comes back.",
  "tags": ["life", "marriage", "women"]
}, {
  "body": "Hey baby, if I supply the voltage and you some resistance, imagine the current we can make together.",
  "tags": ["flirty"]
}, {
  "body": "What did the stamp say to the envelope on Valentine's Day? \"I'm stuck on you!\"",
  "tags": ["Valentines"]
}, {
  "body": "3-year-old: What's a swear word?    Me: A bad word moms and dads only say when they're mad.    3:    Me:    3: Is my middle name a swear word?",
  "tags": ["attitude", "kids"]
}, {
  "body": "How does a farmer count cows? with a cow-calculator.",
  "tags": ["animal", "intelligence", "stupid"]
}, {
  "body": "If love is the answer, could you rephrase the question?",
  "tags": ["love"]
}, {
  "body": "I never could bring a woman into my house. At first, because of the parents. Later, because of the wife.",
  "tags": ["life", "marriage", "men"]
}, {
  "body": "You are one well-defined function!",
  "tags": ["IT", "love"]
}, {
  "body": "I tried eharmony. They kept matching me up with women who look like me in a wig. I'd be too intimidated to date someone that attractive.",
  "tags": ["beauty", "rude", "women"]
}, {
  "body": "How do you get a sweet little 80-year-old lady to say the F word? Get another sweet little 80-year-old lady to yell *BINGO*!",
  "tags": ["retirement"]
}, {
  "body": "How do I stay humble? Well, it's not easy, but I start by being generally bad at almost all things.",
  "tags": ["attitude", "life"]
}, {
  "body": "30 seconds left on the microwave. Women: set table, pour drinks, tweet, talk on the phone. Men: do the space shuttle countdown.",
  "tags": ["life", "men", "women"]
}, {
  "body": "And in her smile I see something more beautiful than the stars.",
  "tags": ["beauty", "love", "Valentines"]
}, {
  "body": "How do you stop a fish from smelling? Cut its nose off.",
  "tags": ["animal", "stupid"]
}, {
  "body": "You can never lose a homing pigeon - if your homing pigeon doesn't come back, what you've lost is a pigeon.",
  "tags": ["animal"]
}, {
  "body": "I went to a peanut factory last week. It was nuts!",
  "tags": ["food", "stupid"]
}, {
  "body": "Men, if you have met your dream girl, materialize her.",
  "tags": ["love", "men"]
}, {
  "body": "What's the speed limit of sex? 68; at 69 you have to turn around.",
  "tags": ["sex", "sport"]
}, {
  "body": "There were plenty of lookers-on but no witnesses.",
  "tags": ["car", "life"]
}, {
  "body": "What do you call a blonde skeleton in the closet? Hide-and-go-seek winner from last year.",
  "tags": ["blonde"]
}, {
  "body": "What's got four legs and one arm? A Rottweiler.",
  "tags": ["animal", "dirty"]
}, {
  "body": "It was love at first sight. Then I took a second look!",
  "tags": ["flirty", "love"]
}, {
  "body": "Tomorrow is April Fools Day. Believe nothing, and trust no one. \"So it's like any other day.\"",
  "tags": ["April Fools Day"]
}, {
  "body": "Why is it that in the US: If you take off all your clothes and walk down the street waving a machete and firing an Uzi, terrified citizens will phone the police and report: \"There's a naked person outside!\"",
  "tags": ["life"]
}, {
  "body": "Do you know why beer goes through your system so fast? Because it does not have to stop to change color.",
  "tags": ["rude"]
}, {
  "body": "If the facts don't fit the theory, change the facts.",
  "tags": []
}, {
  "body": "Rap is to music as Etch-A-Sketch is to art.",
  "tags": []
}, {
  "body": "You do not need a parachute to skydive. You only need a parachute to skydive twice.",
  "tags": ["life"]
}, {
  "body": "What do you get from a pampered cow? Spoiled milk.",
  "tags": ["animal"]
}, {
  "body": "How is a man like the weather? Nothing can be done to change either one of them.",
  "tags": ["men"]
}, {
  "body": "What do you call a man who expects to have sex on the second date? Slow.",
  "tags": ["men"]
}, {
  "body": "You know, they got a luggage store in the airport? A place to buy a piece of luggage? How late do you have to be for a flight where you're like, \u2018Fuck it \u2013 just grab a pile of shit. We'll get a bag at the airport'.",
  "tags": ["life"]
}, {
  "body": "I want you more then a Hagen-Daas on a hot summer day.",
  "tags": ["flirty", "food"]
}, {
  "body": "What's the difference between a boyfriend and a husband? 45 minutes.",
  "tags": ["marriage", "men"]
}, {
  "body": "Why do we press harder on a remote control when we know the batteries are getting weak?",
  "tags": ["life"]
}, {
  "body": "The qualities that most attract a woman to a man are usually the same ones she can't stand years later.",
  "tags": ["men", "women"]
}, {
  "body": "Trying to understand women is like trying to smell color 9.",
  "tags": ["women"]
}, {
  "body": "Why do only 10% of men make it to heaven? Because if they all went, it would be Hell.",
  "tags": ["men", "rude"]
}, {
  "body": "What's the difference between men and pigs? Pigs don't turn into men when they drink.",
  "tags": ["alcohol", "animal", "men"]
}, {
  "body": "What has four legs and an arm? A happy pit bull.",
  "tags": ["animal", "rude"]
}, {
  "body": "There are a lot of female hormones in beer. When I drink five bottles I also can't drive a car and start behaving illogically.",
  "tags": ["alcohol", "car", "rude", "women"]
}, {
  "body": "Politics is just show business for ugly people.",
  "tags": ["political", "ugly"]
}, {
  "body": "I'm already visualising the duct tape across your mouth.",
  "tags": ["insults", "rude"]
}, {
  "body": "I flirted with disaster last night. Now disaster won't stop texting me.",
  "tags": ["dirty", "flirty", "women"]
}, {
  "body": "What do you call a Mexican with a vasectomy? A dry Martinez.",
  "tags": ["dirty", "racist"]
}, {
  "body": "Hi, I'm bisexual. I'd like to BUY you a drink...and then get sexual.",
  "tags": ["dirty", "flirty", "sex"]
}, {
  "body": "What do you give the blonde that has everything? Penicillin.",
  "tags": ["blonde"]
}, {
  "body": "I come from a stupid family. During the civil war my great uncle fought for the West.",
  "tags": ["family", "retirement", "stupid"]
}, {
  "body": "Diet tip: If you think you're hungry, you might just be thirsty. Have a bottle of wine first and then see how you feel.",
  "tags": ["alcohol", "attitude", "food"]
}, {
  "body": "My diet always starts on a Monday morning and ends at the donuts somebody brings into the office later that morning.",
  "tags": ["food", "stupid"]
}, {
  "body": "I think I've discovered my supersymmetric partner.",
  "tags": ["flirty", "friendship"]
}, {
  "body": "I may not be the best-looking guy in here, but I'm the only one talking to you.",
  "tags": ["flirty", "men", "women"]
}, {
  "body": "You owe me a drink, you're so ugly I dropped mine when I saw you.",
  "tags": ["flirty", "rude", "sarcastic"]
}, {
  "body": "What has a whole bunch of little balls and screws old ladies? A bingo machine.",
  "tags": ["retirement", "sex", "women"]
}, {
  "body": "You're so beautiful that last night you made me forget my pickup line.",
  "tags": ["beauty", "flirty"]
}, {
  "body": "What did the cannibal do after he dumped his girlfriend? Wiped his ass.",
  "tags": ["rude"]
}, {
  "body": "Why are aspirins white? Because they work.",
  "tags": ["black"]
}, {
  "body": "If you want to hide your face, go out naked.",
  "tags": ["flirty", "life"]
}, {
  "body": "My love for you is like a fart. Everything about it is powered by my heart.",
  "tags": ["dirty", "flirty", "love"]
}, {
  "body": "Wow, this article looks awesome.    *clicks link*    *finds out it's a slideshow*    *throws computer out the window*",
  "tags": ["hate", "IT", "sarcastic"]
}, {
  "body": "My wife set a limit on how much we can spend on each other for Christmas. It's $100 on me and $500 on her.",
  "tags": ["Christmas", "marriage", "money"]
}, {
  "body": "How do you tell if a chick's too fat to f*ck? When you pull her pants down and her ass is still in them.",
  "tags": ["dirty", "fat", "women"]
}, {
  "body": "Are you Christmas, because I want to Merry you.",
  "tags": ["Christmas", "marriage"]
}, {
  "body": "Why is psychoanalysis a lot quicker for men than for women? When it's time to go back to his childhood, he's already there.",
  "tags": ["men"]
}, {
  "body": "Age is just the number of hours I'm hungover for.",
  "tags": ["time"]
}, {
  "body": "If a dog sniffs your ass, you're probably a bitch.",
  "tags": ["animal", "women"]
}, {
  "body": "Currently the flower business is blooming.",
  "tags": ["beauty", "spring", "success", "work"]
}, {
  "body": "The longer you sleep \u2013 the more sleep you need. The more you eat \u2013 the bigger is your appetite.",
  "tags": ["attitude", "life"]
}, {
  "body": "Why do midgets laugh while running through the yard? The grass tickles their nuts.",
  "tags": ["life", "rude"]
}, {
  "body": "The best reason to divorce or break-up with a man is for health reasons you're sick of him.",
  "tags": ["men"]
}, {
  "body": "A woman about sex has to know \u2018why?' and a man \u2018where?'",
  "tags": ["men", "sex", "women"]
}, {
  "body": "Constipated people don't give a crap.",
  "tags": ["life"]
}, {
  "body": "I was thinking about how people seem to read the Bible a whole lot more as they get older. Then it dawned on me ... they were cramming for their finals.",
  "tags": ["retirement"]
}, {
  "body": "If the number 2 pencil is the most popular, why is it still number 2?",
  "tags": ["attitude"]
}, {
  "body": "Marriage is like a bar of soap. It smells delicious until you take a bite out of it!",
  "tags": ["marriage"]
}, {
  "body": "If a wife is silent and not arguing \u2013 it means she's sleeping.",
  "tags": ["life", "marriage", "women"]
}, {
  "body": "You can't know a person well until you live with them. You can't know them really well until you divorce them.",
  "tags": ["life", "marriage"]
}, {
  "body": "Man's appearance is not the most important thing. There are worse flows.",
  "tags": ["life", "men"]
}, {
  "body": "When I was a kid my mother stopped breast feeding me. I asked her why and she says \"hey, I just wanna be friends.\"",
  "tags": ["kids", "life", "women"]
}, {
  "body": "I'm a humble person, really. I'm actually much greater than I think I am.",
  "tags": ["attitude"]
}, {
  "body": "You might not be a Bulls fan, but I know you felt it when this D rose.",
  "tags": ["sport"]
}, {
  "body": "Time may be a great healer but it's also a lousy beautician.",
  "tags": ["beauty", "life"]
}, {
  "body": "I used to be in a band, we were called 'lost dog'. You probably saw our posters.",
  "tags": ["life", "stupid"]
}, {
  "body": "Is pikachu called pikachu because he always say pikachu or is he saying pikachu because he is pikachu?",
  "tags": ["life"]
}, {
  "body": "What's one of the worst things about giving a man a blow job? The view.",
  "tags": ["dirty", "men", "sex"]
}, {
  "body": "Why are blondes so easy to get into bed? Who cares?",
  "tags": ["blonde"]
}, {
  "body": "If a leper gives you the finger, do you have to give it back?",
  "tags": []
}, {
  "body": "To steal ideas from one person is plagiarism. To steal from many is research.",
  "tags": ["life"]
}, {
  "body": "Why do you need a driver's license to buy liquor when you can't drink and drive?",
  "tags": ["life"]
}, {
  "body": "When in doubt, mumble.",
  "tags": ["life"]
}, {
  "body": "Just remember ...if the world didn't suck, we'd all fall off.",
  "tags": ["life"]
}, {
  "body": "I think I'm agnostic, but I haven't decided.",
  "tags": ["life"]
}, {
  "body": "I like work. It fascinates me. I sit and look at it for hours.",
  "tags": ["life"]
}, {
  "body": "Hallmark Card: \"I'm so miserable without you, it's almost like you're still here.\"",
  "tags": []
}, {
  "body": "The last thing on earth you want to do will be the last thing you do.",
  "tags": ["life"]
}, {
  "body": "Why is Valentine's Day the best day for a celebration? Because you can really party hearty!",
  "tags": ["Valentines"]
}, {
  "body": "Those that forget the pasta are doomed to reheat it.",
  "tags": ["attitude", "life"]
}, {
  "body": "Why is the book \"Women Who Love Too Much\" a disappointment for many men? No phone numbers.",
  "tags": ["men"]
}, {
  "body": "How does a woman show she's planning for the future? Plastic Surgery.",
  "tags": ["life", "women"]
}, {
  "body": "What do you call a boomerang that doesn't work? A stick.",
  "tags": ["life"]
}, {
  "body": "I don't have a beer gut, I have a protective covering for my rock hard abs.",
  "tags": ["men"]
}, {
  "body": "Next time you wave, use all your fingers.",
  "tags": ["life"]
}, {
  "body": "Friends may come and go, but enemies accumulate.",
  "tags": ["life"]
}, {
  "body": "Hi, Can I domesticate you?",
  "tags": ["animal", "stupid"]
}, {
  "body": "I've been thinking about you...Owl night long.",
  "tags": ["animal"]
}, {
  "body": "Incompetence knows no barriers of time or place.",
  "tags": ["life"]
}, {
  "body": "I disapprove of every conspiracy of which I am not a part.",
  "tags": ["attitude", "life"]
}, {
  "body": "There is no &quot;me&quot; in team. No, wait, yes there is!",
  "tags": ["attitude", "sport", "stupid"]
}, {
  "body": "A committee is twelve men doing the work of one.",
  "tags": ["life"]
}, {
  "body": "When decorating your tween daughter's room, don't forget to leave ample space for half the glasses in your kitchen.",
  "tags": ["kids", "life"]
}, {
  "body": "Why are most politicans in the closet or gay? Because they can only mandate.",
  "tags": ["gay", "political", "puns"]
}, {
  "body": "My five-year-old: &quot;I don't want to be your daughter anymore. I QUIT!&quot; No two-week notice or anything. She'd better not expect a reference.",
  "tags": ["family", "kids"]
}, {
  "body": "Drinking too much coffee can cause a latte problems.",
  "tags": ["dirty", "intelligence"]
}, {
  "body": "I sent an angel to watch over you last night but he came back saying he can't watch porn...",
  "tags": ["flirty", "love", "sex"]
}, {
  "body": "Your baby looks the same as it did yesterday. *Me, commenting on a Facebook picture.*",
  "tags": ["attitude", "kids"]
}, {
  "body": "Knock, knock. \"Who's there?\" \"Annie.\" \"Annie who?\" \"Annie body home?\"",
  "tags": ["Halloween"]
}, {
  "body": "It is said that, you can't buy happiness. You only need to know the right places...",
  "tags": ["happiness"]
}, {
  "body": "Judging by the size of these chicken fingers, the chicken was somewhere between 8' to 11' tall.",
  "tags": ["animal", "dirty"]
}, {
  "body": "Don't let an extra chromosome get you down.",
  "tags": ["dirty", "sex"]
}, {
  "body": "Men read Playboy for the articles, women go to malls for the music.",
  "tags": ["men"]
}, {
  "body": "I'm an adult. I don't cry over spilt milk unless it has coffee in it.",
  "tags": ["attitude"]
}, {
  "body": "You're like a fat stump, I'm always falling over you.",
  "tags": ["rude"]
}, {
  "body": "Smith & Wesson: The original point and click interface.",
  "tags": []
}, {
  "body": "Honk all you want, but if I don't eat these donuts at this green light I'll have to share them at home.",
  "tags": ["attitude"]
}, {
  "body": "The difference between the Pope and your boss. The Pope only expects you to kiss his ring.",
  "tags": ["christian", "life"]
}, {
  "body": "How do you turn a fox into an elephant? Marry it!",
  "tags": ["animal", "marriage"]
}, {
  "body": "A man can be happy with any woman as long as he doesn't love her.",
  "tags": ["love", "men", "women"]
}, {
  "body": "A wife in big doses is poison, in small doses \u2013 medicine.",
  "tags": ["love", "men", "women"]
}, {
  "body": "What's the difference between love, true love and showing off? Spitting, swallowing, and gargling.",
  "tags": ["love", "rude"]
}, {
  "body": "I'm so introverted I won't even talk to myself.",
  "tags": ["communication", "life"]
}, {
  "body": "A retired husband is often a wife's full-time job.",
  "tags": ["marriage", "men", "retirement", "women"]
}, {
  "body": "A woman is like a shadow: when you walk from behind she runs away. When you run from her \u2013 follows you behind.",
  "tags": ["life", "love", "women"]
}, {
  "body": "What is a vampires favourite type of ship? A blood vessel.",
  "tags": ["Halloween"]
}, {
  "body": "We must pay for the mistakes of our youth\u2026 at the drugstore.",
  "tags": ["attitude", "mistake", "stupid"]
}, {
  "body": "Old Chinese proverb: Rape impossible! Woman with skirt up run faster than man with trousers down!",
  "tags": ["life", "sex"]
}, {
  "body": "The last time someone listened to a Bush, a bunch of people wandered in the desert for 40 years!",
  "tags": ["political"]
}, {
  "body": "The wife of my friend is not a woman to me. But if she's pretty he's not my friend.",
  "tags": ["friendship", "men", "sex"]
}, {
  "body": "To avoid a collision I ran into the other car.",
  "tags": ["car"]
}, {
  "body": "What is the difference between acne and a catholic priest? Acne usually comes on a boys face after he turns 12.",
  "tags": ["christian", "puns", "rude"]
}, {
  "body": "The national debt isn't the only thing that's rising.",
  "tags": ["dirty", "political"]
}, {
  "body": "I was at a restaurant and I noticed my waitress had a black eye. So I ordered very sloooowly because obviously she doesn't listen.",
  "tags": ["attitude", "dirty", "rude", "women"]
}, {
  "body": "The three words most hated by men during sex? &quot;Are you In?&quot; or &quot;Is It In?&quot;",
  "tags": ["hate", "men", "rude", "sex"]
}, {
  "body": "I don't care how old I am, I will see Finding Dory.",
  "tags": ["attitude", "life"]
}, {
  "body": "Careful! Angry dog in the backyard! Please do not crush him.",
  "tags": ["animal"]
}, {
  "body": "A man walks into a bar with a roll of tarmac under his arm and says: \"Pint please, and one for the road.\"",
  "tags": ["alcohol", "life"]
}, {
  "body": "Losing a husband can be hard: in my case it was almost impossible.",
  "tags": ["marriage", "men"]
}, {
  "body": "Great big polar bear(she says what?) It broke the ice!",
  "tags": ["animal"]
}, {
  "body": "Why are Scientology and Proctology alike? It's all a load of shit.",
  "tags": ["life"]
}, {
  "body": "A wife can enjoy anything, until it's not my salary.",
  "tags": ["marriage", "men", "money"]
}, {
  "body": "What is a vampire's sweetheart called? His ghoul-friend.",
  "tags": ["Valentines"]
}, {
  "body": "The less skilled the player, the more likely he is to share his ideas about the golf swing.",
  "tags": ["sport"]
}, {
  "body": "What did God say when he saw the first black person? Ooops, I burnt one!",
  "tags": ["God", "insults", "racist", "rude"]
}, {
  "body": "What's the most popular pick up line in a gay bar? Can I push your stool in?",
  "tags": ["flirty", "gay", "rude"]
}, {
  "body": "How do you get a nun pregnant? Dress her up as an alter boy.",
  "tags": ["christian", "dirty", "insults"]
}, {
  "body": "What goes \"oh oh oh\"? Santa walking backwards.",
  "tags": ["Christmas"]
}, {
  "body": "God grades on the cross, not the curve.",
  "tags": ["christian", "God"]
}, {
  "body": "Sex is one of the nine reasons for reincarnation; the other eight are unimportant.",
  "tags": ["attitude", "life", "sex"]
}, {
  "body": "You know youre fifty when your chiropractor sends you birthday cards.",
  "tags": ["birthday", "retirement"]
}, {
  "body": "Paid love costs less.",
  "tags": ["life", "love", "sex"]
}, {
  "body": "What kind of motorbike does Santa ride? A Holly Davidson!",
  "tags": ["Christmas"]
}, {
  "body": "Always wear high heels, it makes it easier to look down on him.",
  "tags": ["dirty", "men"]
}, {
  "body": "What's the difference between your job and a dead prostitute? Your job still sucks!",
  "tags": ["dirty", "sex", "work"]
}, {
  "body": "What does a woman and Kentucky Fried Chicken have in common? By the time you're finished with the breast and thighs, all you have left is the greasy box to put your bone in.",
  "tags": ["rude", "sex", "women"]
}, {
  "body": "You never have to worry about love at first sight if you steadfastly keep looking at your phone.",
  "tags": ["attitude", "love"]
}, {
  "body": "To a young housewife: remember that a small bottle of vodka not only will decorate the table but also will hide your cooking mistakes.",
  "tags": ["alcohol", "marriage", "mistake", "women"]
}, {
  "body": "I fell in love at first sight. I should have looked twice.",
  "tags": ["flirty"]
}, {
  "body": "April Fools' Day is like a huge open mic night in which millions of people go out of their way to demonstrate how unfunny they are.",
  "tags": ["April Fools Day"]
}, {
  "body": "Hear about the new gay sitcom? \"Leave it, it's Beaver.\"",
  "tags": ["gay"]
}, {
  "body": "Why can't men get mad cow disease? Because they're all pigs.",
  "tags": ["dirty", "men"]
}, {
  "body": "How do 5 gay men walk? One Direction!",
  "tags": ["gay"]
}, {
  "body": "Why do women prefer old gynecologists? Their shaky hands!",
  "tags": ["dirty", "women"]
}, {
  "body": "How can you make a gay man scream twice? Fudge him real hard. Then wipe your dick off on his curtains.",
  "tags": ["dirty", "gay"]
}, {
  "body": "Some people have skeletons in their closet. I have a whole graveyard!",
  "tags": ["black", "life", "people", "sarcastic"]
}, {
  "body": "No matter what has happened. No matter what you've done. No matter what you will do. I will always love you. I swear it.",
  "tags": ["love", "Valentines"]
}, {
  "body": "How does a blonde high-five? She smacks herself in the forehead.",
  "tags": ["blonde"]
}, {
  "body": "How is a woman like a condom? Both spend more time in your wallet than on your pecker.",
  "tags": ["men", "sex", "women"]
}, {
  "body": "If you love a woman, you shouldn't be ashamed to show her to your wife.",
  "tags": ["love", "marriage", "men", "women"]
}, {
  "body": "Why are black guys eyes red after sex? From the pepper spray.",
  "tags": ["black", "sex"]
}, {
  "body": "A lot of people are afraid of heights. Not me, I'm afraid of widths.",
  "tags": ["attitude", "life", "people"]
}, {
  "body": "Squirrels \u2013 nature's speed bumps.",
  "tags": ["animal"]
}, {
  "body": "Hey baby, I heard that rabbits, can make 150 babies a year, how many do you think we can make in an hour?",
  "tags": ["animal", "dirty"]
}, {
  "body": "Can I borrow your cellphone? I need to call animal control cause I just saw a fox!",
  "tags": ["animal", "dirty", "flirty"]
}, {
  "body": "I love the way you move...like butter on a bald monkey.",
  "tags": ["animal", "beauty", "food"]
}, {
  "body": "What's the difference between a new husband and a new dog? After a year, the dog is still excited to see you.",
  "tags": ["animal", "marriage", "men"]
}, {
  "body": "You must be peanut butter because you're making my legs feel like jelly.",
  "tags": ["flirty", "food"]
}, {
  "body": "What do you call a black guy who goes to college? A Basketball player.",
  "tags": ["black"]
}, {
  "body": "What are the 2 reasons the girl broke up with her boyfriend? Because he was a cheetah and because he was lion too much to her.",
  "tags": ["animal", "love", "puns", "sex"]
}, {
  "body": "Anal intercourse is for assholes.",
  "tags": ["gay", "sex"]
}, {
  "body": "You were beautiful in my dreams, but a fucking nightmare in reality.",
  "tags": ["beauty", "flirty", "insults"]
}, {
  "body": "What do bees do with their honey? They cell it.",
  "tags": ["animal", "puns"]
}, {
  "body": "What part of a football ground is never the same? The changing rooms.",
  "tags": ["puns", "sport"]
}, {
  "body": "My dad used to always warn me about anal. He would say \"Now son, this may hurt a bit\".",
  "tags": ["dirty", "gay", "sex"]
}, {
  "body": "What's the difference between Tiger Woods and Santa? Santa stopped at 3 ho's.",
  "tags": ["Christmas", "sport"]
}, {
  "body": "Do you know what a Timberwolf is? No. Thats a guy that chases a girl up a tree and kisses her inbetween the limbs.",
  "tags": ["animal", "dirty", "sex"]
}, {
  "body": "Hey baby, there's an OverflowException in my pants, care to handle it for me?",
  "tags": ["flirty", "IT", "stupid"]
}, {
  "body": "If you want to change your life significantly just walk to the Mercedes-Benz 600 standing at the junction, take a brick and throw it into the windshield.",
  "tags": ["attitude", "car", "life"]
}, {
  "body": "I bought a new Japanese car. I turned on the radio... I don't understand a word they're saying.",
  "tags": ["car"]
}, {
  "body": "New Year's is just a holiday created by calendar companies who don't want you reusing last year's calendar.",
  "tags": ["New Year"]
}, {
  "body": "What\xB4s the difference between a goodyear and a fucking good year? 365 condoms.",
  "tags": ["life", "sex"]
}, {
  "body": "You are the reason Santa even has a naughty list.",
  "tags": ["Christmas", "flirty"]
}, {
  "body": "Twitter is my 'serious' account. My Bank account is the 'joke' one.",
  "tags": ["life", "money"]
}, {
  "body": "The difference between divorce and legal separation is that a legal separation gives a husband time to hide his money.",
  "tags": ["marriage", "money"]
}, {
  "body": "Everybody is somebody else's weirdo.",
  "tags": ["life"]
}, {
  "body": "I think, therefore I'm single.",
  "tags": ["love"]
}, {
  "body": "If she says, &quot;I'm OK,&quot; you're fine. If she says, &quot;I'm Fine,&quot; You're not OK.",
  "tags": ["communication", "women"]
}, {
  "body": "Why did the banana go out with the prune? Because it couldn't get a date.",
  "tags": ["Valentines"]
}, {
  "body": "Remember, if you smoke after sex you're doing it too fast.",
  "tags": ["sex"]
}, {
  "body": "You're not sure \u2013 outrun and make sure.",
  "tags": ["attitude", "motivational"]
}, {
  "body": "What happened when the man fell in love with his garden? It made him wed his plants!",
  "tags": ["men", "Valentines"]
}, {
  "body": "What did one ghost say to another ghost? \"Do you believe in people?\"",
  "tags": ["life", "people"]
}, {
  "body": "Why do women rub their eyes when they get up in the morning? They don't have balls to scratch!",
  "tags": ["women"]
}, {
  "body": "The probability of someone watching you is proportional to the stupidity of your action.",
  "tags": ["stupid"]
}, {
  "body": "Why is it called Alcoholics ANONYMOUS when the first thing you do is stand up and say, \u2018My name is Peter and I am an alcoholic'",
  "tags": ["life"]
}, {
  "body": "I wish you were on the football team because I'd love to see your backfield in motion.",
  "tags": ["flirty", "sport"]
}, {
  "body": "No one is listening until you fart.",
  "tags": ["life"]
}, {
  "body": "Why do men get their great ideas in bed? Because their plugged into a genius!",
  "tags": ["men", "women"]
}, {
  "body": "If I was an operating system, your process would have top priority.",
  "tags": ["flirty", "IT"]
}, {
  "body": "If everything seems to be coming your way, you're probably in the wrong lane.",
  "tags": ["life"]
}, {
  "body": "She said she was approaching forty, and I couldn't help wondering from what direction.",
  "tags": ["women"]
}, {
  "body": "Take time to relax especially when you don't have time for it.",
  "tags": ["attitude", "time"]
}, {
  "body": "I bet Egyptians were all like &quot;Yo, nobody in history will ever worship and revere cats like we do&quot; and then came the internet.",
  "tags": ["animal"]
}, {
  "body": "Approach a woman in a bar and whisper \"Hey, wanna get out of here?\" If she says yes, you can sit where she was.",
  "tags": ["flirty", "women"]
}, {
  "body": "S.I.N.G.L.E...sexy! innocent! naughty! gorgeous! lustful! exciting!",
  "tags": ["flirty", "men", "women"]
}, {
  "body": "Anyone have any sex laying around they're not using I could borrow?",
  "tags": ["flirty", "sex"]
}, {
  "body": "It's gonna be ok.",
  "tags": ["attitude"]
}, {
  "body": "Without ME, it's just AWESO.",
  "tags": []
}, {
  "body": "What did the banana say to the vibrator? What are you shaking for? She's going to eat me!",
  "tags": ["women"]
}, {
  "body": "I intend to live forever. So far, so good.",
  "tags": ["life"]
}, {
  "body": "Who invented the brush they put next to the toilet? That thing hurts!",
  "tags": []
}, {
  "body": "Out of my mind. Back in five minutes.",
  "tags": ["life"]
}, {
  "body": "When you go to the drugstore, why are the condoms not in with the other party supplies?",
  "tags": ["life"]
}, {
  "body": "Friends are like condoms: They protect you when things get hard.",
  "tags": ["life"]
}, {
  "body": "I wasn't lying, I was just writing fiction with my mouth.",
  "tags": ["life"]
}, {
  "body": "Save the whales. Collect the whole set.",
  "tags": ["animal"]
}, {
  "body": "He who hesitates is boss.",
  "tags": ["life"]
}, {
  "body": "Beer: It's not just for breakfast anymore.",
  "tags": ["attitude", "life"]
}, {
  "body": "Why do gorillas have big nostrils? Because they have big fingers.",
  "tags": ["animal"]
}, {
  "body": "\"Why don't you trust me?\", she texted both the guys simultaneously.",
  "tags": ["love", "women"]
}, {
  "body": "Unless you're the lead dog, the view never changes.",
  "tags": []
}, {
  "body": "You are so tall in my eyes that they can't rise higher than your waist.",
  "tags": ["sex", "women"]
}, {
  "body": "I was never a photogenic person, because when everyone said cheese I said &quot;WHERE&quot;?",
  "tags": ["attitude", "food"]
}, {
  "body": "Why don't men have mid-life crises? They stay stuck in adolescence.",
  "tags": ["life", "men"]
}, {
  "body": "Change your Facebook Status to \"I'm Pregnant\" or \"I'm Engaged\" and watch the April Fools LIKE & Comment away.",
  "tags": ["April Fools Day"]
}, {
  "body": "Nutella: A reason to buy bread.",
  "tags": ["food"]
}, {
  "body": "Becoming a father is easy enough, but being one can be very rough.",
  "tags": ["family", "Father's Day"]
}, {
  "body": "(NAME) is a terrific athlete. He recently ran the London Marathon \u2013 he was aiming for 3 hours but just missed it! he made it in 3 hrs 150 minutes",
  "tags": ["best man speech"]
}, {
  "body": "You should know, that no one understood it was an April fool's joke because no one expected you have a sense of humor.",
  "tags": ["April Fools Day"]
}, {
  "body": "Do not walk behind me, for I may not lead. Do not walk ahead of me, for I may not follow. Do not walk beside me either. Just pretty much leave me the hell alone.",
  "tags": ["flirty", "love"]
}, {
  "body": "Looking at you is getting my dick harder than Chuck Norris",
  "tags": ["dirty", "flirty"]
}, {
  "body": "If Eve wore a fig leaf, what did Adam wear? A hole in it.",
  "tags": ["christian", "sex"]
}, {
  "body": "How do you keep black people out of your back yard? Hang one in the front!",
  "tags": ["black", "racist"]
}, {
  "body": "You have the right to remain silent because whatever you say will probably be stupid anyway.",
  "tags": ["insults", "stupid"]
}, {
  "body": "I don't date older women because it takes too long to listen to their life story.",
  "tags": ["attitude", "communication", "retirement", "women"]
}, {
  "body": "Shouldn't you be on top of the tree, Angel?",
  "tags": ["beauty", "Christmas"]
}, {
  "body": "What is better than a cold Bud? A warm bush.",
  "tags": ["dirty"]
}, {
  "body": "When his I.Q. reaches 50, he should sell.",
  "tags": ["insults", "work"]
}, {
  "body": "What do elves learn in school? The Elf-abet!",
  "tags": ["Christmas", "puns", "school"]
}, {
  "body": "You smell like trash..... Can I take you out?",
  "tags": ["flirty"]
}, {
  "body": "How do you fix a woman's watch? Why should you? There's a clock on the oven.",
  "tags": ["dirty", "women"]
}, {
  "body": "I wanted to tell you that wherever I am, whatever happens, I'll always think of you, and the time we spent together, as my happiest time. I'd do it all over again, if I had the choice. No regrets.",
  "tags": ["love", "Valentines"]
}, {
  "body": "Your kid may be an honors student, but you're still an idiot.",
  "tags": ["kids", "stupid"]
}, {
  "body": "How do Rednecks celebrate Halloween? Pump kin!",
  "tags": ["Halloween"]
}, {
  "body": "What is the best evidence that Microsoft has a monopoly? Santa Claus had to switch from Chimneys to Windows.",
  "tags": ["Christmas"]
}, {
  "body": "What should you do if you see your ex-husband rolling around in pain on the ground? Shoot him again.",
  "tags": ["life", "marriage", "men"]
}, {
  "body": "What's the difference between a jew and a pizza? A pizza doesn't scream when you put it in the oven!",
  "tags": ["racist"]
}, {
  "body": "Santa's lap isn't the only place wishes come true.",
  "tags": ["Christmas", "flirty", "Valentines"]
}, {
  "body": "Boy: Have u ever been fishing before Girl: Why? Boy: I think we should hook up!",
  "tags": ["animal", "dirty", "flirty", "sport"]
}, {
  "body": "George washington said \"We would have a black president when pigs fly!\" ... well, swine flu.",
  "tags": ["black"]
}, {
  "body": "What do u do when your sitting in the dark and your TV starts to float? You turn on the lights and shoot the black guy stealing it.",
  "tags": ["black"]
}, {
  "body": "There are 364 days until Christmas and people already have their Christmas lights up. Unbelievable...",
  "tags": ["Christmas", "people"]
}, {
  "body": "My favorite sexual position: The Chilean miner. That's where you go down on me and stay there till Christmas.",
  "tags": ["Christmas", "flirty", "sex"]
}, {
  "body": "What's yellow and black and makes you laugh: A bus full of niggers going over a cliff.",
  "tags": ["racist", "rude"]
}, {
  "body": "I'm in love with you, and I'm not in the business of denying myself the simple pleasure of saying true things. I'm in love with you, and I know that love is just a shout into the void, and that oblivion is inevitable, and that we're all doomed and that there will come a day when all our labor has been returned to dust, and I know the sun will swallow the only earth we'll ever have, and I am in love with you.",
  "tags": ["love"]
}, {
  "body": "By the cup of Nescaf\xE9 even the most secret thoughts turn into words, and by the bottle of vodka \u2013 into actions.",
  "tags": ["alcohol", "life"]
}, {
  "body": "I got drunk last night and my house wasn't where I left it.",
  "tags": ["alcohol", "life"]
}, {
  "body": "If I was a squirrel I'd chuck my nuts in your hole!",
  "tags": ["animal", "rude"]
}, {
  "body": "A healthy male organism is the one, which wakes up in the morning before the man.",
  "tags": ["health", "men"]
}, {
  "body": "They lie about marijuana: \"Marijuana makes you unmotivated.\" Lie. When you're high, you can do anything you normally do just as well. You just realize it's not worth the fucking effort. There's a difference.",
  "tags": ["attitude", "life"]
}, {
  "body": "What did the egg say to the boiling water? It will take a minute for me to get hard I just got laid by a chick",
  "tags": ["animal"]
}, {
  "body": "If breaks are meant to be slow... then why do they call it \"breakfast\"?",
  "tags": ["life"]
}, {
  "body": "I don't have a solution, but I do admire the problem.",
  "tags": ["love"]
}, {
  "body": "The easiest job in the world has to be coroner. Surgery on dead people. What's the worst thing that could happen? If everything went wrong, maybe you'd get a pulse.",
  "tags": ["life"]
}, {
  "body": "What do you say we make this a Not-so-Silent Night?",
  "tags": ["Christmas", "dirty"]
}, {
  "body": "Does this rag smell like chloroform to you?",
  "tags": ["flirty", "life"]
}, {
  "body": "You would never be able to live down to your reputation, but I see you're doing your best.",
  "tags": ["insults", "rude"]
}, {
  "body": "How can you tell which is the head nurse? The one with the dirty knees.",
  "tags": ["rude", "women"]
}, {
  "body": "They call me the cat whisperer, cause I know exactly what the pussy needs.",
  "tags": ["animal", "flirty", "stupid"]
}, {
  "body": "When you stop believing in Santa Claus is when you start getting clothes for Christmas!",
  "tags": ["Christmas", "kids"]
}, {
  "body": "What's a monster's favorite bean? A human bean.",
  "tags": ["Halloween"]
}, {
  "body": "How can you tell a black person is lying? His lips are moving.",
  "tags": ["black"]
}, {
  "body": "What's the difference between a girlfriend and a wife? 45 pounds.",
  "tags": ["dirty", "marriage", "women"]
}, {
  "body": "How do you know Adam and Eve weren't black? Ever try and take a rib from a black.",
  "tags": ["black"]
}, {
  "body": "Excuse me, but do you like whales? (yeah, why) Cause I was thinking that we could &quot;humpback&quot; at my place.",
  "tags": ["animal", "dirty"]
}, {
  "body": "Is that shirt (those pants) mad of camel skin? (No, why?) Cause I noticed the humps!",
  "tags": ["animal", "dirty"]
}, {
  "body": "It's funny how one person can make you never trust anybody...",
  "tags": ["attitude"]
}, {
  "body": "Money can't buy happiness, but it sure makes misery easier to live with.",
  "tags": ["happiness", "money"]
}, {
  "body": "How can you tell if a man is happy? Who Cares?",
  "tags": ["men", "rude"]
}, {
  "body": "Loneliness is when you get an e-mail but it's from the newsgroup server.",
  "tags": ["friendship", "life"]
}, {
  "body": "Evolution: True science fiction.",
  "tags": ["life"]
}, {
  "body": "You're like milk, I want to make you a part of my complete breakfast.",
  "tags": ["flirty", "food"]
}, {
  "body": "Excuse me, I'm a little short on cash. Mind if we shared a cab home?",
  "tags": ["flirty"]
}, {
  "body": "Do you play volleyball? Because you look like your good on ur knees!",
  "tags": ["dirty", "sport"]
}, {
  "body": "Hear the slogan for the Stealth Condom? \"They'll never see you coming.\"",
  "tags": ["sex"]
}, {
  "body": "Is your name Summer? \u2018Coz you're HOT!",
  "tags": ["flirty", "summer"]
}, {
  "body": "Your pussy is in more danger than a seal during Shark Week.",
  "tags": ["animal", "stupid"]
}, {
  "body": "A bank is a place that will lend you money, if you can prove that you don't need it.",
  "tags": ["money"]
}, {
  "body": "The more beautiful the woman is who loves you, the easier it is to leave her with no hard feelings.",
  "tags": ["beauty", "love", "women"]
}, {
  "body": "What do you get if you cross an owl with a witch? A bird that's ugly but doesn't give a hoot!",
  "tags": ["animal", "attitude", "ugly"]
}, {
  "body": "I should've known it wasn't going to work out between my ex-wife and me. After all, I'm a Libra and she's a bitch.",
  "tags": ["women"]
}, {
  "body": "Computer does what you command him to do but not what you want from him.",
  "tags": ["IT", "life"]
}, {
  "body": "A bargain is something you don't need at a price you can't resist.",
  "tags": ["life", "money"]
}, {
  "body": "A bus is a vehicle that runs twice as fast when you are after it as when you are in it.",
  "tags": ["life"]
}, {
  "body": "I've been on so many blind dates, I should get a free dog.",
  "tags": ["animal", "love"]
}, {
  "body": "A hard thing about a business is minding your own.",
  "tags": ["life"]
}, {
  "body": "If a woman gave in very fast it's not because of the man but the men that came before him.",
  "tags": ["sex", "women"]
}, {
  "body": "What has four legs, is big, green, fuzzy, and if it fell out of a tree would kill you? A pool table.",
  "tags": ["sport"]
}, {
  "body": "You had me at cello.",
  "tags": ["intelligence"]
}, {
  "body": "Did you know that there are 71.9 acres of nipple tissue in the U.S.?",
  "tags": ["women"]
}, {
  "body": "Do you know any bird that can write? Pen-guine.",
  "tags": ["animal"]
}, {
  "body": "We are all part of the ultimate statistic \u2013 ten out of ten die.",
  "tags": ["life"]
}, {
  "body": "Women who seek to be equal to men...LACK AMBITION!",
  "tags": ["women"]
}, {
  "body": "Don't feel sad, don't feel blue, Frankenstein was ugly too.",
  "tags": ["insults", "ugly"]
}, {
  "body": "What do you call a prostitute with a runny nose? Full.",
  "tags": ["dirty"]
}, {
  "body": "If we were stranded in a desert and a snake bit my penis, would you suck the poison out?",
  "tags": ["dirty", "flirty"]
}, {
  "body": "Nothing spoils the target more than a hit.",
  "tags": ["life"]
}, {
  "body": "Throwing acid is wrong, in some people's eyes.",
  "tags": ["fighting", "sarcastic"]
}, {
  "body": "Do ten millipedes equal one centipede?",
  "tags": []
}, {
  "body": "He's not dead; he's electroencephalographically challenged.",
  "tags": []
}, {
  "body": "Hey baby, what's your resonance frequency?",
  "tags": ["flirty"]
}, {
  "body": "Do you want to speak to the manager or someone who know's what's going on?",
  "tags": ["life"]
}, {
  "body": "What's the difference between wife and a blue whale? About 10 pounds.",
  "tags": ["marriage", "rude", "women"]
}, {
  "body": "I am an agent of Satan, but my duties are largely ceremonial.",
  "tags": ["death"]
}, {
  "body": "(NAME) spent most of his university days single But it was by choice. Woman chose not to date him.",
  "tags": ["best man speech", "love", "women"]
}, {
  "body": "Girls are like internet domain names... the ones I like are already taken.",
  "tags": ["flirty", "women"]
}, {
  "body": "My mother + my father \u2013 condom = MOST AWESOME PERSON ALIVE!",
  "tags": ["sex"]
}, {
  "body": "Why do blacks raise chickens? To teach their kids how to walk.",
  "tags": ["black", "racist"]
}, {
  "body": "When you choke a smurf, what color does it turn?",
  "tags": ["dirty"]
}, {
  "body": "If you are supposed to learn from your mistakes, why do some people have more than one child.",
  "tags": ["kids", "mistake", "people"]
}, {
  "body": "Sugar - Honey - Iced - Tea ... Guess what it means.",
  "tags": ["rude"]
}, {
  "body": "What's the difference between a blonde and a washing machine? They both drip when they're fucked.",
  "tags": ["blonde", "sex"]
}, {
  "body": "Men have two emotions: Hungry and Horny. If you see him without an erection, make him a sandwich.",
  "tags": ["men", "sex"]
}, {
  "body": "Me: And the award for the most awesome daddy goes to...? *6 blinks M: The most awesome daddy award goes to...? *6 blinks M:  6: Luke's dad?",
  "tags": ["family", "kids"]
}, {
  "body": "A woman is like a well-served table at which a man looks one way before he eats and differently after he ate.",
  "tags": ["men", "rude", "women"]
}, {
  "body": "Why didn't the dog want to play football? It was a boxer!",
  "tags": ["animal", "sport"]
}, {
  "body": "What did God say after creating man? I must be able to do better than that.",
  "tags": ["God", "men"]
}, {
  "body": "If I followed you home, would you keep me?",
  "tags": ["flirty"]
}, {
  "body": "How about we do some peer-to-peer sharing? Your domain or mine?",
  "tags": ["flirty", "IT"]
}, {
  "body": "You have enough fat to make another human.",
  "tags": ["fat", "insults"]
}, {
  "body": "You're so poor I saw you kicking a can across the street I asked you what you were doing you said moving.",
  "tags": ["insults"]
}, {
  "body": "Your so dense, light must bend around you.",
  "tags": ["insults"]
}, {
  "body": "Why do men need instant replay on TV sports? Because after 30 seconds they forget what happened.",
  "tags": ["dirty", "men"]
}, {
  "body": "Any skirt looks good on the back of the chair.",
  "tags": ["sex", "women"]
}, {
  "body": "Do you think they named April Fool's Day in your honor?",
  "tags": ["April Fools Day"]
}, {
  "body": "It's not a flaw to have a husband, but an essential drawback to have a wife.",
  "tags": ["marriage", "men", "women"]
}, {
  "body": "Any woman deserves sex, but not every woman a second time.",
  "tags": ["sex", "women"]
}, {
  "body": "Why do men like smart women? Opposites attract.",
  "tags": ["men"]
}, {
  "body": "How do blonde braincells die? Alone.",
  "tags": ["blonde"]
}, {
  "body": "He always finds himself lost in thought; it's unfamiliar territory.",
  "tags": ["insults", "stupid"]
}, {
  "body": "What is live? Life is love. Whats love? Love is kissing. Whats kissing? Come here and I show you.",
  "tags": ["flirty"]
}, {
  "body": "You are my methods. I am nothing without you.",
  "tags": ["flirty", "IT"]
}, {
  "body": "I have three kids, one of each.",
  "tags": ["retirement"]
}, {
  "body": "What did the elephant say to his girlfriend? \"I love you a ton!\"",
  "tags": ["animal", "Valentines"]
}, {
  "body": "Want to meet up so I can excite your natural frequency?",
  "tags": ["flirty", "love"]
}, {
  "body": "It is hard to understand how a cemetery raised its burial cost and blamed it on the cost of living.",
  "tags": ["life"]
}, {
  "body": "What's the difference between light and hard? You can sleep with a light on.",
  "tags": ["life", "sex"]
}, {
  "body": "Legends don't die... I am a living example!",
  "tags": ["attitude"]
}, {
  "body": "What's a nice ghoul like you doing in a crypt like this?",
  "tags": ["beauty", "Halloween"]
}, {
  "body": "A women's work that is never done is the stuff that she asked her husband to do.",
  "tags": ["women"]
}, {
  "body": "Why did the snowman call his dog Frost ? Because frost bites !",
  "tags": ["animal"]
}, {
  "body": "I am the ghost of Christmas Future Perfect Subjunctive: I will show you what would have happened were you not to have changed your ways!",
  "tags": ["Christmas", "puns"]
}, {
  "body": "If you are what you eat, then my dog is a calculator.",
  "tags": ["animal"]
}, {
  "body": "What makes you think this is my first time?",
  "tags": ["love", "sarcastic"]
}, {
  "body": "Say what you want about deaf people...",
  "tags": ["communication", "people", "sarcastic"]
}, {
  "body": "Believe me if you ever saw it, you would even say it glows!",
  "tags": ["Christmas"]
}, {
  "body": "Do you know karate? Cause your body's kickin!",
  "tags": ["sarcastic", "sport"]
}, {
  "body": "What do a Christmas tree and priest have in common? Their balls are just for decoration.",
  "tags": ["christian", "Christmas"]
}, {
  "body": "Why do women have smaller feet than men? It's one of those \"evolutionary things\" that allows them to stand closer to the kitchen sink.",
  "tags": ["dirty", "women"]
}, {
  "body": "Everything has to be related in a woman: if the mouth shuts, the legs open.",
  "tags": ["love", "sex", "women"]
}, {
  "body": "There are drunk bikers. There are old bikers. There are NO old, drunk bikers.",
  "tags": ["alcohol", "motorcycle"]
}, {
  "body": "Lets role play I'll be Osama, You be a cave, and I'll hide up inside you",
  "tags": ["political", "sarcastic"]
}, {
  "body": "What is the difference between frustration and satisfaction? &quot;What the Fuck!&quot; and &quot;What a Fuck!&quot;",
  "tags": ["puns", "sex"]
}, {
  "body": "Why don't women blink during foreplay? They don't have time.",
  "tags": ["men", "sex"]
}, {
  "body": "Gurl, you remind me of a box of chocolates.....(Why?) Cause I want to take your top off.",
  "tags": ["flirty", "food"]
}, {
  "body": "Nobody puts Baby in a corner.",
  "tags": ["love"]
}, {
  "body": "What's the height of conceit? Having an orgasm and calling out your own name.",
  "tags": ["rude"]
}, {
  "body": "In my bed, it's perpetual motion all night long, baby.",
  "tags": ["dirty"]
}, {
  "body": "Why don't you slip into something more comfortable ...like a coma.",
  "tags": ["life"]
}, {
  "body": "Did you know that Santa's not allowed to go down chimneys this year? It was declared unsafe by the Elf and Safety Commission.",
  "tags": ["Christmas"]
}, {
  "body": "Are you a termite? Cause you're about to have a mouth full of wood.",
  "tags": ["animal"]
}, {
  "body": "Did you hear about the dyslexic Satanist? He sold his soul to Santa.",
  "tags": ["Christmas", "stupid"]
}, {
  "body": "Wanna meet Santa's little helper?",
  "tags": ["Christmas", "dirty"]
}, {
  "body": "I know its not Christmas, but Santa's lap is always ready.",
  "tags": ["Christmas", "dirty"]
}, {
  "body": "How do you know that Santa is a man? No woman wears the same attire every year.",
  "tags": ["Christmas", "women"]
}, {
  "body": "I rang up British Telecom, I said, \"I want to report a nuisance caller\", he said \"Not you again\".",
  "tags": ["life"]
}, {
  "body": "An ad at the zoo: \u2018Don't scare the ostriches! The floors are concrete!'",
  "tags": ["animal"]
}, {
  "body": "I am a virtuous woman, that's why I cost more!",
  "tags": []
}, {
  "body": "Even if you were eaten, there will still be a two way out.",
  "tags": ["attitude", "life"]
}, {
  "body": "I'm not a bad guy! I work hard, and I love my kids. So why should I spend half my Sunday hearing about how I'm going to Hell?",
  "tags": ["christian", "kids", "men"]
}, {
  "body": "He's a recovering alcoholic: recovering from last night!",
  "tags": ["insults"]
}, {
  "body": "I've had so much to drink that you're beginning to look good.",
  "tags": ["attitude", "flirty", "sarcastic"]
}, {
  "body": "I saw weird stuff in that place last night. Weird, strange, sick, twisted, gross, godless, evil stuff... and I want it (:",
  "tags": ["attitude", "stupid"]
}, {
  "body": "Do you know how much a polar bear weighs? (no) me neither but enough to break the ice, hi my name is .....",
  "tags": ["animal", "stupid"]
}, {
  "body": "My dog is completely exhausted from destroying everything in my house",
  "tags": ["animal", "attitude"]
}, {
  "body": "When there are no volunteers, they get appointed.",
  "tags": ["work"]
}, {
  "body": "What do Eskimos get from sitting on the ice too long? Polaroids.",
  "tags": ["life"]
}, {
  "body": "Why didn't Cupid shoot his arrow at the lawyer's heart? Because even Cupid can't hit a target that small.",
  "tags": ["Valentines"]
}, {
  "body": "If you're looking for sympathy, you'll find it in the dictionary between \"shit\" and \"syphilis\"",
  "tags": ["life"]
}, {
  "body": "Like arguing with a forest fire.",
  "tags": ["women"]
}, {
  "body": "Sex to a man is like hunger. If he can't get into an expensive French restaurant, he will go to McDonalds.",
  "tags": []
}, {
  "body": "What will it take to reunite Nirvana? Two more bullets.",
  "tags": []
}, {
  "body": "Is that a bat in your pocket, or does my costume excite you?",
  "tags": ["dirty", "Halloween"]
}, {
  "body": "Definition of a bachelor: A man who has missed the opportunity to make some woman miserable.",
  "tags": ["dirty", "men"]
}, {
  "body": "Why don't witches wear panties? They get a better grip on their brooms!",
  "tags": ["Halloween", "women"]
}, {
  "body": "Screw the nice list, I've got you on my &quot;nice and naughty list!",
  "tags": ["Christmas", "dirty", "flirty"]
}, {
  "body": "Why did God create stock analysts? In order to make weather forecasters look good.",
  "tags": ["christian", "God", "life"]
}, {
  "body": "Why don't women have men's brains?  Because they don't have penises to put them in.",
  "tags": ["dirty", "men"]
}, {
  "body": "Sacred cows make the best hamburgers.",
  "tags": ["animal", "dirty"]
}, {
  "body": "Wanna play guns? Bend over and I'll cock you.",
  "tags": ["dirty", "sport"]
}, {
  "body": "5 y.o.: Why do people congratulate you when Mom is the one making the baby? Me: I helped 5: How? Me: 5: Me: I read her the instructions",
  "tags": ["family", "kids"]
}, {
  "body": "When a newly married woman smiles, all know why, but when a ten-years married woman smiles, all wonder why.",
  "tags": ["marriage", "men", "women"]
}, {
  "body": "What did the boy octopus say to the girl octopus? Can I hold your hand, hand, hand, hand, hand, hand, hand, hand, hand, hand?",
  "tags": ["animal", "Valentines"]
}, {
  "body": "I don't trust anything that bleeds for five days and doesn't die.",
  "tags": ["women"]
}, {
  "body": "Everything is rightly confused.",
  "tags": ["attitude", "life", "motivational"]
}, {
  "body": "How do crazy people go through the forest? They take the psycho path.",
  "tags": ["life", "rude"]
}, {
  "body": "A woman is like a parachute \u2013 can refuse at any time, that's why you need to have a spare one.",
  "tags": ["men", "women"]
}, {
  "body": "Who's your friend?",
  "tags": ["attitude", "life", "rude"]
}, {
  "body": "Might I integrate your curves tonight?",
  "tags": ["dirty", "flirty"]
}, {
  "body": "What do toys and boobs have in common? Both are made for children but it's the fathers who play with them most.",
  "tags": ["Father's Day"]
}, {
  "body": "I need more than 140 characters to tell you how beautiful you are.",
  "tags": ["beauty", "flirty", "IT"]
}, {
  "body": "Why are men are like public toilets? The good ones are taken, the rest are full of shit.",
  "tags": ["insults", "life", "men"]
}, {
  "body": "Why don\xB4t women have men\xB4s brains? Because they don't have penises to put them in",
  "tags": ["insults", "men", "rude", "women"]
}, {
  "body": "How can you tell a Sumo wrestler from a feminist? A Sumo wrestler shaves his legs.",
  "tags": ["dirty", "women"]
}, {
  "body": "You don't sweat much for a fat chick.",
  "tags": ["fat", "rude"]
}, {
  "body": "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
  "tags": ["people"]
}, {
  "body": "My mom's favorite part of my birthday is describing my birth in detail to an 18 year old waitress who is just there to get our drink order.",
  "tags": ["birthday", "life", "stupid"]
}, {
  "body": "How good are you at powerpoint? I Excel at it!",
  "tags": ["attitude", "IT"]
}, {
  "body": "\u2018Who the hell allowed me to be born in this stupid head?' a Thought said and killed herself\u2026",
  "tags": ["life", "stupid"]
}, {
  "body": "Brain cells come and go but fat cells live forever.",
  "tags": ["fat", "life", "women"]
}, {
  "body": "What do you say to a blonde with no arms and no legs? Nice tits!",
  "tags": ["blonde", "dirty", "rude"]
}, {
  "body": "I'm not a doctor but I know adding cheese to anything makes it an antidepressant.",
  "tags": ["doctor", "food"]
}, {
  "body": "Why did God create black men? So fat white girls could dance (and get laid).",
  "tags": ["black", "fat", "God", "racist", "women"]
}, {
  "body": "If you were a pole I would dance all over you.",
  "tags": ["attitude", "dirty", "flirty"]
}, {
  "body": "Your name must be Coca Cola, because you're so-da-licious",
  "tags": ["beauty", "flirty", "food"]
}, {
  "body": "What is the difference between a dog and a fox? About 5 drinks",
  "tags": ["alcohol", "animal"]
}, {
  "body": "Why are Fathers like parking spaces? The good ones are already taken!",
  "tags": ["family", "Father's Day"]
}, {
  "body": "How many men does it take to screw in a light bulb? One. He just holds it up there and waits for the world to revolve around him.",
  "tags": ["men"]
}, {
  "body": "Please, Lady, come home with me. You never know what I'll turn into, at midnight!",
  "tags": ["flirty", "Halloween"]
}, {
  "body": "Two snowmen in a field, one turned to the other and said \"I don't know about you but I can smell carrots!\"",
  "tags": ["Christmas"]
}, {
  "body": "If I freeze, it's not a computer virus. I was just stunned by your beauty.",
  "tags": ["beauty", "flirty", "IT"]
}, {
  "body": "What happens when you drop a whale on thin ice? Her: What? You: It breaks the ice. Hi, i'm (your name)",
  "tags": ["animal", "attitude", "flirty"]
}, {
  "body": "If sex is a pain in the ass, then you're doing it wrong ...",
  "tags": ["dirty", "gay", "sex"]
}, {
  "body": "You need some more fuel for that fire? Cause I got some wood for you right here.",
  "tags": ["dirty", "flirty", "stupid"]
}, {
  "body": "How are husbands like lawn mowers? They're hard to get started, they emit noxious odors, and half the time they don't work.",
  "tags": ["dirty", "marriage", "men"]
}, {
  "body": "I'm taking Viagra and drinking prune juice - I don't know if I'm coming or going.",
  "tags": ["retirement"]
}, {
  "body": "What do men and beer bottles have in common? They are both empty from the neck up.",
  "tags": ["men", "rude"]
}, {
  "body": "I had to stop drinking, cause I got tired of waking up in my car driving 90.",
  "tags": ["car", "life"]
}, {
  "body": "Baby, let's configure our hard drives in master and slave position.",
  "tags": ["dirty", "IT"]
}, {
  "body": "The best thing about living at the beach is that you only have assholes on three sides of you.",
  "tags": ["life"]
}, {
  "body": "Is your name country crock, cause you can spread for me anytime.",
  "tags": ["dirty"]
}, {
  "body": "Did you hear about the guy whose whole left side was cut off? He's all right now.",
  "tags": []
}, {
  "body": "I wonder where my brother is, his lunch is getting all cold ... ... ... and eaten..",
  "tags": ["family"]
}, {
  "body": "I may not be Dairy Queen, baby, but I'll treat you right!",
  "tags": ["attitude", "flirty"]
}, {
  "body": "You need to carry women in your arms; they will climb on your back by themselves.",
  "tags": ["life", "love", "men", "women"]
}, {
  "body": "I like two kinds of men: domestic and imported.",
  "tags": ["men"]
}, {
  "body": "I love defenseless animals, especially in a good gravy.",
  "tags": ["animal", "attitude"]
}, {
  "body": "The only difference between the people I've dated and Charles Manson is that Manson has the decency to look like a nut case when you first meet him.",
  "tags": ["love"]
}, {
  "body": "Does your skin feel burnt? Because I think you must have just fallen down from heaven, and re-entry gave you a tan.",
  "tags": ["beauty", "flirty"]
}, {
  "body": "Vegetarian: Native American definition for \"lousy hunter\".",
  "tags": ["life"]
}, {
  "body": "Every day, man is making bigger and better fool-proof things, and every day, nature is making bigger and better fools. So far, I think nature is winning.",
  "tags": ["stupid"]
}, {
  "body": "3-year-old: *stares at the baby* What does it do? Me: Nothing yet. She's not here to entertain you. 3: Me: 3: Can we get one that is?",
  "tags": ["family", "kids"]
}, {
  "body": "Why did the referees stop the leper hockey game? There was a face-off in the corner.",
  "tags": ["sport"]
}, {
  "body": "Ready for the only way to enjoy Instagram? Follow zero people. Follow every dog.",
  "tags": ["IT", "stupid"]
}, {
  "body": "I hate when I'm singing along to the Beastie Boys and they mess up the lyrics.",
  "tags": ["attitude", "stupid"]
}, {
  "body": "What's the definition of a male chauvinist pig? A man who hates every bone in a woman's body, except his own.",
  "tags": ["dirty", "men", "rude", "women"]
}, {
  "body": "Dear Lord, there is a bug in your software...it's called #Monday, please fix it...",
  "tags": ["God", "mistake"]
}, {
  "body": "What's the difference between a Catholic wife and a Jewish wife? A Catholic wife has real orgasms and fake jewelry.",
  "tags": ["christian", "rude", "women"]
}, {
  "body": "Why don't vampires go south of the border? Because every time they suck a Mexican's blood, they get the vshits for a month.",
  "tags": ["racist"]
}, {
  "body": "Girl, if you were a camel, I'd hump you!",
  "tags": ["animal", "dirty", "flirty", "stupid"]
}, {
  "body": "Being in a nudist colony probably takes all the fun out of Halloween.",
  "tags": ["Halloween"]
}, {
  "body": "Be nice to your kids. They'll choose your nursing home.",
  "tags": ["family", "kids", "life", "retirement"]
}, {
  "body": "Why did God make man before woman? You need a rough draft before you have a final copy.",
  "tags": ["God", "men", "rude"]
}, {
  "body": "Do people who go to the gym to &quot;feel the burn&quot; know nothing of Mexican food?",
  "tags": ["food", "sport"]
}, {
  "body": "We all have one ginger friend that claims to be \"strawberry blonde\".",
  "tags": ["blonde"]
}, {
  "body": "How does one know a man is going to say something smart?..His senentences start with \"A woman once told me..\"",
  "tags": ["dirty", "men"]
}, {
  "body": "I want to ask you out, but I've got butterflies in my stomach. And worms. And maggots. And..",
  "tags": ["flirty", "Halloween"]
}, {
  "body": "Why do only 20 percent of blonde chicks lay Easter eggs? The rest are hunting peckers.",
  "tags": ["blonde", "Easter"]
}, {
  "body": "A waist is a terrible thing to mind.",
  "tags": ["puns"]
}, {
  "body": "Should crematoriums give discounts for burn victims?",
  "tags": ["dirty", "rude"]
}, {
  "body": "Come to my 127.0.0.1 and I'll give you sudo access.",
  "tags": ["flirty", "IT"]
}, {
  "body": "To the question \u2018What are you doing here?' 72% answered negative.",
  "tags": ["attitude", "life"]
}, {
  "body": "What do you instantly know about a well-dressed man? His wife is good at picking out clothes.",
  "tags": ["men"]
}, {
  "body": "Dogs have masters. Cats have staff.",
  "tags": ["animal"]
}, {
  "body": "Better at sex than anyone; now all he needs is a partner.",
  "tags": ["sex"]
}, {
  "body": "Pardon me for drooling, but without my jaw, I can't help myself.",
  "tags": ["Halloween"]
}, {
  "body": "I am one bottle of shower gel away from being able to open my own Christmas gift shop in my shower.",
  "tags": ["Christmas"]
}, {
  "body": "If I can't buy you a drink, at least let me fix your laptop.",
  "tags": ["flirty", "IT"]
}, {
  "body": "What is a runner's favourite subject in school? Jog-raphy!",
  "tags": ["puns", "school", "sport"]
}, {
  "body": "How many gays does it take to screw in a lightbulb? Two. One to screw it in and another to stand around and say 'FABULOUS!'",
  "tags": ["gay"]
}, {
  "body": "Why do women pay more attention to their appearance than improving their minds? Because most men are stupid, but few are blind.",
  "tags": ["men", "women"]
}, {
  "body": "With a calendar, your days are numbered.",
  "tags": ["life"]
}, {
  "body": "A man is running after a woman, just until she catches him.",
  "tags": ["love", "men", "women"]
}, {
  "body": "Most women don't know where to look when they're eating a banana.",
  "tags": ["women"]
}, {
  "body": "I'm glad he's single because I'm going to climb that like a tree.",
  "tags": ["love", "women"]
}, {
  "body": "How do you start a black parade? Roll a 40 down the street.",
  "tags": ["black"]
}, {
  "body": "What are two reasons why men don't mind their own business? 1. No mind. 2. No business.",
  "tags": ["dirty", "men"]
}, {
  "body": "How do you get a black man out of a tree? Cut the rope.",
  "tags": ["black"]
}, {
  "body": "Why do women have vaginas? So men will talk to them.",
  "tags": ["communication", "dirty", "men", "women"]
}, {
  "body": "Why are teachers happy at Halloween parties? Because there is lots of school spirit!",
  "tags": ["Halloween", "people", "school"]
}, {
  "body": "What do most men consider a gourmet restaurant? Any place without a drive-up window.",
  "tags": ["dirty", "men"]
}, {
  "body": "I bet even your farts smell good.",
  "tags": ["dirty", "sarcastic"]
}, {
  "body": "I'll bet your parents hit the JERKpot!",
  "tags": ["insults"]
}, {
  "body": "I want to do to your body what Mitt Romney does to poor people.",
  "tags": ["dirty", "political"]
}, {
  "body": "What is the definition of \"making love\"? Something a woman does while a guy is screwing her.",
  "tags": ["love", "sex"]
}, {
  "body": "Darling, you are the most beautiful woman in this party! Did you invite these guests on purpose?",
  "tags": ["beauty", "flirty", "marriage", "men", "women"]
}, {
  "body": "Pakistan army will never try to win the war against India, someone told them winner has to speak English on live television.",
  "tags": ["racist"]
}, {
  "body": "I'll get you wetter than a Scottish summer.",
  "tags": ["dirty", "flirty", "summer"]
}, {
  "body": "That whole &quot;letting go&quot; of your ex is always more satisfying when they're dangling over an abyss.",
  "tags": ["attitude"]
}, {
  "body": "I don't work here. I'm a consultant.",
  "tags": ["life"]
}, {
  "body": "You cannot eat me unless you spread me. -Butter",
  "tags": ["life"]
}, {
  "body": "If anything is used to its full potential, it will break.",
  "tags": []
}, {
  "body": "How do you get a man to stop biting his nails? Make him wear shoes.",
  "tags": ["men", "rude"]
}, {
  "body": "Are you an exception? I bet I can catch you.",
  "tags": ["flirty", "intelligence", "IT"]
}, {
  "body": "Did you hear about Ku Klux Knievel? He tried to jump over 8 blacks with a steam roller.",
  "tags": ["black"]
}, {
  "body": "Most of the people dream of not working and having lots of money. During an economic crisis 50 % of those dreams came true.",
  "tags": ["life", "money", "work"]
}, {
  "body": "Hey Cutie ever do it in a sleigh?",
  "tags": ["Christmas", "dirty", "flirty"]
}, {
  "body": "Sex discriminates against the shy and the ugly.",
  "tags": ["life", "sex", "ugly"]
}, {
  "body": "I love oral sex... it's the phone bill I hate.",
  "tags": ["hate", "sex"]
}, {
  "body": "Why did God give Black guy's big dicks? He felt sorry for putting pubes on their heads.",
  "tags": ["black", "dirty", "God"]
}, {
  "body": "What is Dracula's favorite fruit? A nectarine.",
  "tags": ["Halloween"]
}, {
  "body": "Why don't you remove those barriers to imports? It will ease my inflation and the benefits will trickle down.",
  "tags": ["political"]
}, {
  "body": "People come and go but birthdays do accrue.",
  "tags": ["birthday", "people"]
}, {
  "body": "The 3 stages of man: He believes in Santa Claus. He doesn't believe in Santa Claus. He is Santa Claus.",
  "tags": ["Christmas", "men"]
}, {
  "body": "Where does Dracula keep his valuables? In a blood bank.",
  "tags": ["Halloween"]
}, {
  "body": "Is that a Higgs boson in your pocket, or are you just happy to see me?",
  "tags": ["happiness", "intelligence"]
}, {
  "body": "What does Santa suffer from if he gets stuck in a chimney? Claustrophobia!",
  "tags": ["Christmas"]
}, {
  "body": "What does a hockey player and a magician have in common? Both do hat tricks!",
  "tags": ["puns", "sport"]
}, {
  "body": "I always wanted to be just like my mother. Today I'm working on dramatically clutching my throat when I'm told the price of anything.",
  "tags": ["family", "Mother's Day", "sarcastic"]
}, {
  "body": "What pants do ghosts wear? BOO jeans.",
  "tags": ["Halloween"]
}, {
  "body": "Why do men masturbate? it is sex with someone they love",
  "tags": ["men", "sex"]
}, {
  "body": "How do you starve a black man? Put his food stamps in his work boots.",
  "tags": ["insults", "racist"]
}, {
  "body": "Want to take a look at my benefit package?",
  "tags": ["dirty", "flirty"]
}, {
  "body": "Men? On the whole, I'd rather buy new batteries.",
  "tags": ["dirty", "men"]
}, {
  "body": "A day without sunshine is like, well, night.",
  "tags": ["flirty", "life"]
}, {
  "body": "Why can't single women fart? They don't get an asshole till they get married.",
  "tags": ["dirty", "marriage", "men", "women"]
}, {
  "body": "Your eyes are as blue as my toilet water at home.",
  "tags": ["dirty", "friendship", "stupid"]
}, {
  "body": "What did the caveman give his wife on Valentine's Day? Ughs and kisses!",
  "tags": []
}, {
  "body": "You are depriving some poor village of its idiot.",
  "tags": []
}, {
  "body": "You must be an angel, because your texture mapping is so divine!",
  "tags": ["beauty", "IT"]
}, {
  "body": "Once we had Clinton, Johnny Cash and Bob Hope. Now we have Bush, no Cash and no Hope.",
  "tags": ["life"]
}, {
  "body": "Are your other donkeys jealous because that's one fine ass",
  "tags": ["animal", "stupid"]
}, {
  "body": "Apparently, saying \"Wow, you've grown since I last saw you\" isn't deemed socially acceptable when said to adults.",
  "tags": ["life"]
}, {
  "body": "Macho Law prohibits me from admitting I'm wrong.",
  "tags": ["attitude", "life"]
}, {
  "body": "If you were a basketball, could I drive you, and lay you up?",
  "tags": ["flirty", "sport"]
}, {
  "body": "Did it hurt when you fell down from Heaven?",
  "tags": ["flirty"]
}, {
  "body": "Does your train of thought have a caboose?",
  "tags": ["insults", "life"]
}, {
  "body": "She's so ugly, the fell out of the ugly tree and hit every branch on the way down.",
  "tags": ["insults", "ugly"]
}, {
  "body": "You know I would love to show you the toys my elves make for adults.",
  "tags": ["Christmas", "dirty"]
}, {
  "body": "How about I slip down your chimney, at half past midnight?",
  "tags": ["Christmas", "dirty", "flirty"]
}, {
  "body": "That's not a candy cane in my pocket. I'm just glad to see you!",
  "tags": ["Christmas", "flirty"]
}, {
  "body": "What do u call 1,000 black people on a plane back to Africa? A good start.",
  "tags": ["black", "rude"]
}, {
  "body": "What are the three words that men hate to hear during sex? &quot;Are you done?&quot;",
  "tags": ["hate", "men", "sex"]
}, {
  "body": "So I hear you like snakes...I have one its called a &quot;trouser snake&quot;",
  "tags": ["animal", "dirty", "stupid"]
}, {
  "body": "Don't make me use UPPERCASE.",
  "tags": ["attitude", "life"]
}, {
  "body": "Never trust a man that says, &quot;Trust me.&quot; and never trust a woman that says &quot;It's fine.&quot;",
  "tags": ["men", "women"]
}, {
  "body": "How do men exercise on the beach? By sucking in their stomachs every time they see a bikini.",
  "tags": ["men"]
}, {
  "body": "So many boys, such little minds.",
  "tags": ["men"]
}, {
  "body": "What's the worthless piece of skin hanging off the end of a penis? A man.",
  "tags": ["men"]
}, {
  "body": "I've got my ion you, baby!",
  "tags": ["flirty"]
}, {
  "body": "Anyone can sit here and buy you drinks. I want to buy you dinner!",
  "tags": ["food"]
}, {
  "body": "Men are like placemats, they only show up when there's food on the table.",
  "tags": ["men"]
}, {
  "body": "It is true that you may fool all of the people some of the time; you can even fool some the people all of the time; but you can't fool all of the people all of the time.",
  "tags": ["christian"]
}, {
  "body": "Whats the difference between the Christmas alphabet and the ordinary alphabet? The Christmas alphabet has Noel.",
  "tags": ["Christmas"]
}, {
  "body": "It's better to have business with a drunk professional than a sober idiot.",
  "tags": ["alcohol", "stupid", "work"]
}, {
  "body": "What does Santa say when he is sick? OH OH NO!",
  "tags": ["Christmas"]
}, {
  "body": "What day does an Easter egg hate the most? Fry-days.",
  "tags": ["Easter", "puns"]
}, {
  "body": "Where do you find a no-legged dog? Right where you left him.",
  "tags": ["animal", "dirty"]
}, {
  "body": "Winter's coming so I'm knitting you a muffler. What size is your mouth?",
  "tags": ["life", "winter"]
}, {
  "body": "What does a penis and an ego have in common? All men have one!",
  "tags": ["men"]
}, {
  "body": "Are your pants from outer space or is your butt just out of this world?",
  "tags": ["flirty"]
}, {
  "body": "What is the difference between a black and a bucket of shit? The bucket.",
  "tags": ["black", "rude"]
}, {
  "body": "I'm Only Here For The Free Food",
  "tags": ["attitude", "food"]
}, {
  "body": "Every day I spend a few hours on a running track. Next week I might even turn it on.",
  "tags": ["sport"]
}, {
  "body": "A cheap shot is a terrible thing to waste.",
  "tags": ["life"]
}, {
  "body": "What did the turkeys sing on Thanksgiving Day? God save the kin.",
  "tags": ["Thanksgiving"]
}, {
  "body": "Why do volleyball player want to join the armed forces? For the chance to gain some experience in the service.",
  "tags": ["sport"]
}, {
  "body": "What does a man who loves his car do on February 14? He gives it a valenshine!",
  "tags": ["men", "Valentines"]
}, {
  "body": "What do you call Santa's helpers? Subordinate Clauses.",
  "tags": ["Christmas"]
}, {
  "body": "My love for you is like diarrhea, I just cant hold it in!",
  "tags": ["love", "rude", "sarcastic"]
}, {
  "body": "Canadians are more polite when they are being rude than Americans are when they are being friendly.",
  "tags": ["rude"]
}, {
  "body": "Men are like mascara, they usually run at the first sign of emotion.",
  "tags": ["men"]
}, {
  "body": "How do you keep your husband from reading your e-mail? Rename the mail folder \"Instruction Manuals.\"",
  "tags": ["men"]
}, {
  "body": "Why the chicken cross the road? To look for his cock.",
  "tags": ["animal"]
}, {
  "body": "Why did the pig give his girlfriend a box of candy? It was Valenswine's Day.",
  "tags": ["animal", "Valentines"]
}, {
  "body": "Sounds like its time to get that Enterprise built!",
  "tags": ["life", "sarcastic"]
}, {
  "body": "Do fish get thirsty?",
  "tags": ["animal"]
}, {
  "body": "Who lit the fuse on your tampon?",
  "tags": ["women"]
}, {
  "body": "At school he used to enjoy streaking. On it's own, not a particularly interesting fact, until you consider he was at an ALL BOYS boarding school.",
  "tags": ["best man speech"]
}, {
  "body": "Ever notice that people who spend money on beer, cigarettes, and lottery tickets are always complaining about being broke and not feeling well?",
  "tags": ["life", "people"]
}, {
  "body": "Wanna expand my polynomial?",
  "tags": ["dirty"]
}, {
  "body": "What kind of key opens a casket? A skeleton key.",
  "tags": ["Halloween"]
}, {
  "body": "What has eight arms and an IQ of 80? Four girlfriends drinking on St Patricks Day!",
  "tags": ["St. Patrick's Day", "women"]
}, {
  "body": "I don't want your candy, what I really want is your number.",
  "tags": ["flirty", "Halloween"]
}, {
  "body": "Being asked to be best man is like being asked to make love to the queen. On the one hand it is a great honour, but you dread the moment when you have to rise to perform.",
  "tags": ["best man speech"]
}, {
  "body": "I have no business with you, unless behind the bushes.",
  "tags": ["attitude", "sex"]
}, {
  "body": "What is the difference between a single 40-year-old woman and a single 40-year-old man? The 40-year-old woman thinks often of having children and the man thinks often about dating them.",
  "tags": ["men", "women"]
}, {
  "body": "The hardest thing to learn in life is which bridge to cross and which to burn.",
  "tags": ["life"]
}, {
  "body": "What's the most common sleeping position of a man? Around.",
  "tags": ["men"]
}, {
  "body": "Girl, we can play zoo..and you can tame my monkey",
  "tags": ["animal", "dirty"]
}, {
  "body": "Panties not best thing on earth, but next to it.",
  "tags": ["flirty", "sex"]
}, {
  "body": "I haven't been ignoring you; I've been prioritizing you.",
  "tags": ["insults"]
}, {
  "body": "Remember a sense of humor does not mean that you tell him jokes, it means you laugh at his.",
  "tags": ["men", "rude", "sarcastic"]
}, {
  "body": "If I were a dog would you help me bury my bone?",
  "tags": ["animal", "black"]
}, {
  "body": "He is known as a miracle comic. If he's funny, it's a miracle!",
  "tags": ["insults", "men"]
}, {
  "body": "New Years Eve forecast: Mostly drunk with a slight chance of passing out.",
  "tags": ["New Year"]
}, {
  "body": "If a giraffe had a sore throat, how many lozenges would it need to make it better?",
  "tags": ["animal", "sarcastic"]
}, {
  "body": "What does a black person get for Christmas? Your bike.",
  "tags": ["black", "Christmas"]
}, {
  "body": "Bills travel through the mail at twice the speed.",
  "tags": ["money", "travel"]
}, {
  "body": "It's a sin to love another's wife and a punishment to love yours.",
  "tags": ["love", "marriage", "women"]
}, {
  "body": "It is always the wrong time of month.",
  "tags": ["sex"]
}, {
  "body": "I organized a threesome for (NAME)'s last night of freedom. There were a couple of no-shows, but he still had fun.",
  "tags": ["best man speech"]
}, {
  "body": "What's the diffrence between a black guy and a pizza? A pizza can feed a family of four.",
  "tags": ["black", "family"]
}, {
  "body": "What do you call always having a date for New Year's Eve? Social Security.",
  "tags": ["New Year"]
}, {
  "body": "I'll show you where easter eggs come from -- you may be surprised!",
  "tags": ["dirty", "Easter"]
}, {
  "body": "How are women and linoleum floors alike? You lay them right the first time and you can walk all over them for the next 20 years.",
  "tags": ["dirty", "sex", "women"]
}, {
  "body": "Men are like frogs, the most important thing is to jump on faster.",
  "tags": ["animal", "men", "sex"]
}, {
  "body": "It's hunting season and fox like you shouldnt be out in the open!",
  "tags": ["flirty"]
}, {
  "body": "Hey Babe, when was the last time you did it in a sleigh?",
  "tags": ["Christmas", "dirty"]
}, {
  "body": "What's the definition of \"Tender Love?\" Two gays with hemorrhoids.",
  "tags": ["gay", "sex", "stupid"]
}, {
  "body": "What did the boy cat say to the girl cat on Valentine's Day? You're purrr-fect for me!",
  "tags": ["animal", "love", "puns", "Valentines"]
}, {
  "body": "How about a month filled with stress and obligation? - Pitch for December",
  "tags": ["Christmas"]
}, {
  "body": "What's a monsters favorite desert? I-Scream!",
  "tags": ["Halloween"]
}, {
  "body": "Why do doctors slap babies' butts right after they're born? To knock the penises off the smart ones.",
  "tags": ["doctor", "kids", "men", "rude"]
}, {
  "body": "A cauliflower is a plant explosion in extremely slow motion.",
  "tags": ["food"]
}, {
  "body": "Men and women were created equal, but women continued to improve.",
  "tags": ["men", "women"]
}, {
  "body": "For all the advances in medicine, there is still no cure for the common birthday.",
  "tags": ["birthday"]
}, {
  "body": "All I'm saying is there's a reason all the best love songs have the word crazy in them...",
  "tags": ["love"]
}, {
  "body": "Black magic.... It doesn't work.",
  "tags": ["puns", "racist"]
}, {
  "body": "Who is never hungry at Christmas? The turkey - he's always stuffed!",
  "tags": ["Christmas"]
}, {
  "body": "Did you hear about the homosexual letter? Only came in male boxes.",
  "tags": ["gay"]
}, {
  "body": "There's something actionable in your pants.",
  "tags": ["flirty", "sex"]
}, {
  "body": "If I got a penny for everyone I've met who is as beautiful as you, I'd have all the money in the world.",
  "tags": ["beauty", "insults", "money"]
}, {
  "body": "Trust but verify.",
  "tags": ["life"]
}, {
  "body": "A woman of 35 thinks of having children. What does a man of 35 think of? Dating children.",
  "tags": ["attitude", "men", "women"]
}, {
  "body": "See no evil, hear no evil, date no evil.",
  "tags": ["life", "sarcastic"]
}, {
  "body": "There's good climate in heaven, but a better company in hell.",
  "tags": ["attitude", "christian", "life"]
}, {
  "body": "If pink and glitter were vitamins blondes would be the healthiest people alive.",
  "tags": ["blonde", "health", "people"]
}, {
  "body": "The Big Bang Theory: God Spoke and BANG! it happened.",
  "tags": ["God"]
}, {
  "body": "You know, you're not that bad looking -- for a fat-ass.",
  "tags": ["flirty", "insults", "rude"]
}, {
  "body": "Those days I only knew six words if you count muther fucker as two.",
  "tags": ["dirty"]
}, {
  "body": "What do you call a man with half a brain? Gifted.",
  "tags": ["men"]
}, {
  "body": "What should you give a man who has everything? A woman to show him how to work it.",
  "tags": ["men", "women"]
}, {
  "body": "What food describes most men? Jerky.",
  "tags": ["men"]
}, {
  "body": "Son asking father. Why are niggers so black daddy? Well son, whip this one while I think about it.",
  "tags": ["black", "racist"]
}, {
  "body": "If you go to sleep with a itching ass you will wake up with a stinking finger...",
  "tags": ["dirty"]
}, {
  "body": "I'm not dumb, I just have a lot of blonde moments.",
  "tags": ["attitude", "blonde"]
}, {
  "body": "Lets play railroad I'll be the train and ur the tunnel",
  "tags": ["sport", "stupid"]
}, {
  "body": "Do you like the internet? Cause I can put you on there if you come back to my place.",
  "tags": ["attitude", "flirty", "IT"]
}, {
  "body": "Why do black widow spiders kill their males after mating? Penis envy.",
  "tags": ["animal", "men", "women"]
}, {
  "body": "What did Bacon say to Tomato? Lettuce get together!",
  "tags": ["food"]
}, {
  "body": "Hi, I'm a zombie, can I eat you out?",
  "tags": ["flirty", "Halloween"]
}, {
  "body": "Next time you order coffee at Starbucks tell them your name is Bueller and then leave the store.",
  "tags": ["life"]
}, {
  "body": "I'm in the mood to multiply",
  "tags": ["attitude"]
}, {
  "body": "Why did the stupid boy put clothes on the valentines he was sending? Because they needed to be ad-dressed!",
  "tags": ["Valentines"]
}, {
  "body": "Why, yes, I am dressed for the weather.I am wearing a house.",
  "tags": ["attitude", "stupid"]
}, {
  "body": "Shut up, will you?&quot; &quot;Oh, I'm sorry, Your Highness, should I go get you your coffee and tea now?",
  "tags": ["attitude", "rude"]
}, {
  "body": "Loltard: Someone who uses 'lol' too much.",
  "tags": ["insults", "life"]
}, {
  "body": "I'm trying to imagine you with a personality.",
  "tags": ["insults", "life"]
}, {
  "body": "There's a lot of pretty woman at spring because during other seasons you appreciate them with your brain.",
  "tags": ["life", "men", "spring"]
}, {
  "body": "Why is a Laundromat a really bad place to pick up a woman? Because a woman who can't even afford a washing machine will probably never be able to support you.",
  "tags": ["flirty", "men", "women"]
}, {
  "body": "Are you Greek (If No) are you sure cause you look like a goddess to me?",
  "tags": ["flirty", "political"]
}, {
  "body": "Leading up to the wedding (NAME) has been on a whiskey diet. His lost three days already.",
  "tags": ["best man speech", "wedding"]
}, {
  "body": "I didn't do it, nobody saw me do it, you can't prove anything.",
  "tags": ["stupid"]
}, {
  "body": "You're the reason why women earn 75 cents to the dollar.",
  "tags": ["insults", "women"]
}, {
  "body": "Why wasn't the vampire working? He was on his coffin break.",
  "tags": ["Halloween"]
}, {
  "body": "What do you call a gay Ginger? Flaming.",
  "tags": ["gay"]
}, {
  "body": "No checks (Czechs are welcome).",
  "tags": ["money", "puns"]
}, {
  "body": "I have good looking kids. Thank goodness my wife cheats on me.",
  "tags": ["retirement", "rude"]
}, {
  "body": "Interested in seeing the &quot;North Pole&quot;? (Well, that's what the Mrs. calls it)",
  "tags": ["Christmas", "dirty"]
}, {
  "body": "If you're going to ride my ass at least pull my hair and make me scream!",
  "tags": ["life"]
}, {
  "body": "How do you scare a snowman? You get a hairdryer!",
  "tags": ["Christmas"]
}, {
  "body": "Where do you get virgin wool from? Ugly sheep.",
  "tags": ["animal", "sex", "stupid", "ugly"]
}, {
  "body": "Clinton lied. A man might forget where he parks or where he lives, but he never forgets oral sex, no matter how bad it is.",
  "tags": ["men", "sex"]
}, {
  "body": "Why did the woman cross the road? Never mind that, what the fuck is she doing out of the kitchen?",
  "tags": ["dirty", "women"]
}, {
  "body": "New Year's Day: Now is the accepted time to make your regular annual good resolutions. Next week you can begin paving hell with them as usual.",
  "tags": ["New Year"]
}, {
  "body": "What do you call a black guy with a fan? Antique air conditioner.",
  "tags": ["black"]
}, {
  "body": "If you win three games of Twister in a row you're automatically a yoga instructor.",
  "tags": ["sport"]
}, {
  "body": "Do you have 11 protons? Cause your sodium fine.",
  "tags": ["intelligence"]
}, {
  "body": "I live in a hutch filled with vibrating cedar chips",
  "tags": ["dirty", "Easter"]
}, {
  "body": "What kind of tie does a ghost wear to a formal party? A boo-tie.",
  "tags": ["Halloween"]
}, {
  "body": "You better hope you marry rich.",
  "tags": ["insults", "money"]
}, {
  "body": "I asked Barack Obama if we could get together later, and he said Yes We Can!",
  "tags": ["political"]
}, {
  "body": "Why was Jesus a virgin when he died? Every time he touched a \"wound\" it closed.",
  "tags": ["christian", "dirty", "rude"]
}, {
  "body": "I was at an ATM and this old lady asked me to help check her balance, so I pushed her over.",
  "tags": ["communication", "money", "retirement"]
}, {
  "body": "What happened when the two angels got married? They lived harpily ever after!",
  "tags": ["marriage", "Valentines"]
}, {
  "body": "Why do people wear shamrocks on St. Patrick's Day? Regular rocks are too heavy.",
  "tags": ["St. Patrick's Day"]
}, {
  "body": "There's a easter parade in my pants...wanna go?",
  "tags": ["dirty", "Easter", "flirty"]
}, {
  "body": "Why is Stevey Wonder Smiling all the time? He doesn't know he's black.",
  "tags": ["black"]
}, {
  "body": "She's so wrinkled, her mother was a Shar Pei.",
  "tags": ["animal", "insults"]
}, {
  "body": "If I buy a soccer ball, will you kick it with me?",
  "tags": ["sport", "stupid"]
}, {
  "body": "Why don't blacks like Tylenol? They have to pick cotton to get to them.",
  "tags": ["black"]
}, {
  "body": "I thought I wanted a career, turns out I just wanted paychecks.",
  "tags": ["money"]
}, {
  "body": "Are you a mum? I am not a dad! Maybe you could help me with that!",
  "tags": ["flirty"]
}, {
  "body": "Why do men snore when they lay on their backs? Because their balls fall over their assholes and they vapor.",
  "tags": ["dirty", "men"]
}, {
  "body": "One good thing about graduation is that you get to wear a funny hat that makes your brain look larger than it actually is.",
  "tags": ["graduation"]
}, {
  "body": "From all the butts, ours is the most important.",
  "tags": ["life"]
}, {
  "body": "You're riding the crest of a slump?",
  "tags": ["insults"]
}, {
  "body": "Girl:want to have a good time Guy:sure Girl:for you its free",
  "tags": ["attitude", "men", "women"]
}, {
  "body": "Is your name Jingle Bells, cause you look like you go all the way",
  "tags": ["Christmas"]
}, {
  "body": "Hey there, mind if I take a bite? Cause your decomposing in ALL the right places.",
  "tags": ["Halloween"]
}, {
  "body": "You give me Epsilon, I give you Delta. Together, we find limits.",
  "tags": ["flirty", "friendship", "love"]
}, {
  "body": "What do you do when your dishwasher stops working? Yell at her.",
  "tags": ["dirty", "life", "marriage"]
}, {
  "body": "How do you get off a non-stop flight?",
  "tags": ["puns"]
}, {
  "body": "You must be from Pearl Harbor, 'cause baby, you're the bomb.",
  "tags": ["flirty", "political"]
}, {
  "body": "Did you hear Vaseline is coming out with new labels for its petroleum jelly? They're going to have a picture of missing gerbils on it.",
  "tags": ["gay"]
}, {
  "body": "I require three things in a man. He must be handsome, ruthless and stupid.",
  "tags": ["Valentines", "women"]
}, {
  "body": "Why do men whistle when they're sitting on the toilet? Because it helps them remember which end they need to wipe.",
  "tags": ["men"]
}, {
  "body": "Hey baby, wanna play lion? OK. You go kneel right there and I'll throw you my meat.",
  "tags": ["animal", "dirty"]
}, {
  "body": "Love is like peeing yourself \u2013 everyone can see but only you feel the warmth.",
  "tags": ["love"]
}, {
  "body": "Why can't Jesus play hockey? A: He keeps getting nailed to the boards.",
  "tags": ["christian", "sport", "stupid"]
}, {
  "body": "Girl, you got more legs than a bucket of chicken!",
  "tags": ["animal", "stupid", "women"]
}, {
  "body": "I have more talent in my smallest fart than you have in your entire body.",
  "tags": ["insults"]
}, {
  "body": "What do you call a black man in a tree? A branch manager.",
  "tags": ["black"]
}, {
  "body": "I'm being managed by Don King again",
  "tags": ["animal", "dirty", "flirty"]
}, {
  "body": "If you and I were squirrels, could I bust a nut in your hole?",
  "tags": ["animal", "dirty", "stupid"]
}, {
  "body": "Is yur name Atilla cuz you can be my hun anytime!",
  "tags": ["attitude", "political"]
}, {
  "body": "A 'Jim's Dozen' is 11, because I take one for myself.",
  "tags": ["intelligence"]
}, {
  "body": "Baby, you've bought yourself a cruise on the Love Boat. I'll be your captain.",
  "tags": ["flirty", "love", "sport"]
}, {
  "body": "What's the definition of black foreplay? Don't scream or I'll kill you.",
  "tags": ["black", "dirty"]
}, {
  "body": "Winter is natures way of telling you to polish.",
  "tags": ["motorcycle", "winter"]
}, {
  "body": "She's as smart as bait.",
  "tags": ["insults", "women"]
}, {
  "body": "Why did God create gay men? So fat girls could dance.",
  "tags": ["dirty", "fat", "gay", "God", "women"]
}, {
  "body": "Her love makes my world go round.",
  "tags": ["Mother's Day"]
}, {
  "body": "Can I trade this job for what's behind door number 1?",
  "tags": ["work"]
}, {
  "body": "Weak men have a lover, strong men \u2013 three.",
  "tags": ["men", "sex"]
}, {
  "body": "I came inside of her not because of the fame but because of the human life on earth.",
  "tags": ["men", "sex"]
}, {
  "body": "Why should you send your sweetie a valentine? Because you always heart the one you love.",
  "tags": ["life", "Valentines"]
}, {
  "body": "Hey baby, wanna violate the Pauli Exclusion Principle with me?",
  "tags": ["flirty", "intelligence"]
}, {
  "body": "What has got two legs and bleeds? Half a dog!",
  "tags": ["animal", "rude", "women"]
}, {
  "body": "The main thing I want this holiday season is for someone to wake me when it's over.",
  "tags": ["attitude", "Christmas", "summer"]
}, {
  "body": "In the competition of female logics, a random number generator won.",
  "tags": ["sarcastic", "women"]
}, {
  "body": "How did they improve the transportation in Harlem? Moved the trees closer together.",
  "tags": ["black"]
}, {
  "body": "You grow on people....so does cancer.",
  "tags": ["dirty", "rude"]
}, {
  "body": "There is 1 thing 2 do 3 words 4 you I LOVE YOU.",
  "tags": ["love", "puns"]
}, {
  "body": "What's black and white and red all over? Santa covered with chimney soot.",
  "tags": ["Christmas"]
}, {
  "body": "A cubicle is just a padded cell without a door.",
  "tags": []
}, {
  "body": "A beautiful woman delights a man's eye, an ugly \u2013 woman's eye.",
  "tags": ["beauty", "life", "men", "ugly", "women"]
}, {
  "body": "What did the black women get for getting an abortion? Fat cash from crime stoppers.",
  "tags": ["black"]
}, {
  "body": "How do you keep a Jew out of a canoe? With chips.",
  "tags": ["racist"]
}, {
  "body": "Why can't the Christmas tree stand up? It doesn't have legs.",
  "tags": ["Christmas"]
}, {
  "body": "Promising thread. Keep them cumming!",
  "tags": ["gay"]
}, {
  "body": "A girl never comments on another unless she's jealous.",
  "tags": ["women"]
}, {
  "body": "Why are black peoples nostrils so big? Because that's what God held them by when he was painting them.",
  "tags": ["black", "christian", "God", "rude"]
}, {
  "body": "What do you tell someone you didn't see at New Year's Eve? I haven't seen you for a year!",
  "tags": ["New Year"]
}, {
  "body": "My foot isn't the only part of me that's lucky",
  "tags": ["dirty", "Easter"]
}, {
  "body": "Are you from Pennsylvania cause I want to stick my pen in your sylvania",
  "tags": ["dirty", "political"]
}, {
  "body": "Some people prefer their women young and tender; I prefer mine ten and younger.",
  "tags": ["dirty", "people", "women"]
}, {
  "body": "What do you call 100 niggers on the bottom of the sea? A good start.",
  "tags": ["black"]
}, {
  "body": "What is the world's biggest oxymoron. Black People.",
  "tags": ["black", "dirty"]
}, {
  "body": "I can feel the gluons being exchanged between us.",
  "tags": ["flirty"]
}, {
  "body": "Your eyes have a perfect wavelength of 563.4 nm.",
  "tags": ["flirty"]
}, {
  "body": "My friend's friend is my friend. My friend's girlfriend is my friend. My friend's boyfriend is just a scum.",
  "tags": ["friendship", "gay", "insults", "rude"]
}, {
  "body": "Ever done it on a pile of artificial grass?",
  "tags": ["dirty", "Easter"]
}, {
  "body": "Women were born to WOO MEN but why do they WOE MEN?",
  "tags": ["puns", "women"]
}, {
  "body": "God sees everything. Neighbors \u2013 even more... Tell me who I am and I will tell you who you are...",
  "tags": ["God", "life"]
}, {
  "body": "What travels at 200km's a hour? A black man hearing a dollar drop to the ground.",
  "tags": ["black", "rude", "travel"]
}, {
  "body": "What did the black girl say while having sex? Dad get off me your crushing my ciggies.",
  "tags": ["black", "dirty", "sex"]
}, {
  "body": "Did you hear about the child with AIDS? it never gets old. I own an abortion clinic called \"Don't Kid Yourself\"",
  "tags": ["kids", "life"]
}, {
  "body": "If we're all God's children, what's so special about Jesus? This Guy is a goldmine.",
  "tags": ["christian", "God"]
}, {
  "body": "If you wet your feet your throat will reject. If you \u2018wet' your throat your feet will reject.",
  "tags": ["alcohol"]
}, {
  "body": "WHY GOD? WHY ONLY ME? WHY YOU ARE DOING THIS TO ME... Didn't we had a deal that I never get old :'(",
  "tags": ["beauty", "God", "stupid"]
}, {
  "body": "Top quark or bottom quark?",
  "tags": ["dirty"]
}, {
  "body": "Why do black women where high heels? So their knuckles don't drag.",
  "tags": ["black"]
}, {
  "body": "A woman is like canned food: one opens and everyone eats.",
  "tags": []
}, {
  "body": "What's the difference between sand and menstrual blood? You can't gargle sand.",
  "tags": ["dirty"]
}, {
  "body": "What do they do with blacks after they die? Gut them and use them as wetsuits.",
  "tags": ["black", "dirty", "rude"]
}, {
  "body": "Hey baby...I can suck the chrome off a trailer hitch?",
  "tags": ["dirty"]
}, {
  "body": "Ever get it on with a rodent?",
  "tags": ["Easter"]
}];
},{}],"node_modules/one-liner-joke/index.js":[function(require,module,exports) {
var jokes = require('./jokes.json');
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

exclude_tags_default = ['racist', 'dirty', 'sex'];

function getRandomJoke() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    'exclude_tags': exclude_tags_default
  };
  var min = 0;
  var max = jokes.length - 1;
  var exclude_tags = options['exclude_tags'];

  while (true) {
    var idx = getRandomInt(min, max);
    var joke = jokes[idx];
    var flagged = 0;

    for (var i = 0; i < exclude_tags.length; i++) {
      if (joke.tags.indexOf(exclude_tags[i]) > -1) {
        flagged = 1;
      }
    }

    if (flagged === 0) {
      return joke;
    }
  }

  return null;
}

function getAllJokesWithTag(tag) {
  var jokesWithTag = [];
  jokes.forEach(function (joke) {
    if (joke.tags.indexOf(tag) != -1) {
      jokesWithTag.push(joke);
    }
  });
  return jokesWithTag;
}

function getRandomJokeWithTag(tag) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    'exclude_tags': exclude_tags_default
  };
  var jokesWithTag = getAllJokesWithTag(tag);
  var exclude_tags = options['exclude_tags'];

  if (jokesWithTag.length == 0) {
    return {
      'body': '',
      'tags': []
    };
  }

  var min = 0;
  var max = jokesWithTag.length - 1;

  while (true) {
    var idx = getRandomInt(min, max);
    var joke = jokesWithTag[idx];
    var flagged = 0;

    for (var i = 0; i < exclude_tags.length; i++) {
      if (joke.tags.indexOf(exclude_tags[i]) > -1) {
        flagged = 1;
      }
    }

    if (flagged === 0) {
      return joke;
    }
  }

  return null;
}

module.exports = {
  getRandomJoke: getRandomJoke,
  getAllJokesWithTag: getAllJokesWithTag,
  getRandomJokeWithTag: getRandomJokeWithTag
};
},{"./jokes.json":"node_modules/one-liner-joke/jokes.json"}],"src/js/function/joke.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var joking = function joking() {
  var but = document.querySelector('button');
  var finder = document.querySelector('.finder');
  var title = document.querySelector('h2');
  but.addEventListener('click', function () {
    finder.style.display = 'block';
    finder.style.padding = '2rem';

    var oneLinerJoke = require('one-liner-joke');

    var getRandomJoke = oneLinerJoke.getRandomJoke();
    title.textContent = getRandomJoke.body;
  });
};

var _default = joking;
exports.default = _default;
},{"one-liner-joke":"node_modules/one-liner-joke/index.js"}],"src/js/app.js":[function(require,module,exports) {
"use strict";

require("../css/style.scss");

var _joke = _interopRequireDefault(require("./function/joke"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _joke.default)();
console.log('It works!');
},{"../css/style.scss":"src/css/style.scss","./function/joke":"src/js/function/joke.js"}],"../../../Florian/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "1032" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../Florian/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/app.js"], null)
//# sourceMappingURL=/app.77c12427.js.map