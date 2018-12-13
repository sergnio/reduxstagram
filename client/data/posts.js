const posts = [
   {
      'code':'BAcyDyQwcXX',
      'caption':'Arguably the greatest player of all time',
      'likes':56,
      'id':'1161022966406956503',
      'display_src':'https://usatftw.files.wordpress.com/2014/06/usp-nba_-los-angeles-lakers-at-sacramento-kings.jpg?w=1000&h=600&crop=1'
   },
   {
      'code':'BAcJeJrQca9',
      'caption':'An inspiration to those around the world',
      'likes':59,
      'id':'1160844458347054781',
      'display_src':'https://amp.businessinsider.com/images/5a3821da4aa6b5a01a8b5886-750-563.jpg'
   },
   {
      'code':'BAF_KY4wcRY',
      'caption':'Arguably one of the top 3 players that have ever existed',
      'likes':79,
      'id':'1154606670337393752',
      'display_src':'https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Flakeshowlife.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F08%2F521050156-utah-jazz-v-los-angeles-lakers.jpg.jpg&c=sc&w=850&h=560'
   },
   {
      'code':'BAPIPRjQce9',
      'caption':'KOBE BYRANT - A LIVING LEGEND',
      'likes':47,
      'id':'1157179863266871229',
      'display_src':'https://www.denverpost.com/wp-content/uploads/2017/12/kobe-bryant.jpg?w=541'
   },
   {
      'code':'-hZh6IQcfN',
      'caption':'Gets up at 4:00 when nobody else wants to',
      'likes':66,
      'id':'1126293663140399053',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'-B3eiIwcYV',
      'caption':'Trains like there\'s no day tomorrow',
      'likes':33,
      'id':'1117418173361145365',
      'display_src':'https://www.gannett-cdn.com/-mm-/291e52edd84d9d29b36b8843c4162bd667257e75/c=0-116-1325-1883/local/-/media/2017/09/12/USATODAY/usatsports/814e510e9b204a338ea1ec098783e739.jpg?width=534&height=712&fit=crop'
   },
   {
      'code':'BAhvZrRwcfu',
      'caption':'CHANGE ME',
      'likes':30,
      'id':'1162418651480049646',
      'display_src':'https://www.gannett-cdn.com/-mm-/291e52edd84d9d29b36b8843c4162bd667257e75/c=0-116-1325-1883/local/-/media/2017/09/12/USATODAY/usatsports/814e510e9b204a338ea1ec098783e739.jpg?width=534&height=712&fit=crop'
   },
   {
      'code':'BAAJqbOQcW5',
      'caption':'Brunchin\'',
      'likes':40,
      'id':'1152964002473690553',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'_4jHytwcUA',
      'caption':'2015 can be summed up with one baby and a many lines of code. And sometimes a coding baby. 👶🏼⌨',
      'likes':62,
      'id':'1150824171912152320',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'_zbaOlQcbn',
      'caption':'Lekker Chocoladeletter',
      'likes':52,
      'id':'1149382879529256679',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'_rmvQfQce8',
      'caption':'Just discovered the #hamont farmers market has a new ramen place! 🍜',
      'likes':35,
      'id':'1147180903383025596',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'_ep9kiQcVy',
      'caption':'⛄️',
      'likes':64,
      'id':'1143535906423162226',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'_XpJcrwcSn',
      'caption':'6 page spread on flexbox in this months netmag!',
      'likes':74,
      'id':'1141561999742846119',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'_KnU7MwceA',
      'caption':'Hanging out in my office waiting for 5:00 beers to come around.',
      'likes':54,
      'id':'1137894817632733056',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'_HMejJQcY5',
      'caption':'Today I learned that a long pull espresso is called a \'lungo\'',
      'likes':18,
      'id':'1136932306813044281',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'_Fq2zmwcaz',
      'caption':'Awesome hand lettered gift from @eunibae and the HackerYou crew.',
      'likes':48,
      'id':'1136502965197194931',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'_A2r0aQcfD',
      'caption':'Some serious hardware meet JavaScript hacks going down this week at hackeryou. Excited for demo day!',
      'likes':57,
      'id':'1135147611821557699',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'-1rhFawccs',
      'caption':'Some major audio upgrades coming to my next videos 😍',
      'likes':39,
      'id':'1132002270913873708',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'-pjx-gQcVi',
      'caption':'My baby and me. Thanks to @bearandsparrow for this one.',
      'likes':81,
      'id':'1128590547628442978',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'-oTZ0zQcWt',
      'caption':'It\'s too early. Send coffee.',
      'likes':81,
      'id':'1128237044221461933',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'-mxKQoQcQh',
      'caption':'They both have figured it out. #lifewithsnickers',
      'likes':47,
      'id':'1127804966031967265',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'-fasqlQceO',
      'caption':'Kaitlin decorated the house for the Christmas. So gezellig! #casabos',
      'likes':46,
      'id':'1125735850454402958',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'-VBgtGQcSf',
      'caption':'Trying the new Hamilton Brewery beer. Big fan.',
      'likes':27,
      'id':'1122810327591928991',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   },
   {
      'code':'-FpTyHQcau',
      'caption':'I\'m in Austin for a conference and doing some training. Enjoying some local brew with my baby.',
      'likes':82,
      'id':'1118481761857291950',
      'display_src':'https://static.vibe.com/files/article_teaser_images/Kobe-Bryant-compressed.jpg'
   }
];


export default posts;
