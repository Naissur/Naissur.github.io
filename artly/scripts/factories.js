
var artlyFactories = angular.module('artlyFactories', []);

artlyFactories.factory('painterFactory', 
	function(){
		var factory = {};
		var painters =
[
            {
				id: 0,
			    name: "Leonardo Da Vinci",
				epoch: "Renaissance",
				genre: "High Renaissance",
				bio: " Leonardo di ser Piero da Vinci was an Italian polymath, painter, sculptor, architect, musician, mathematician, engineer, inventor, anatomist, geologist, cartographer, botanist, and writer. He is widely considered to be one of the greatest painters of all time and perhaps the most diversely talented person ever to have lived. His genius, perhaps more than that of any other figure, epitomized the Renaissance humanist ideal.",
				img: "/res/leonardo-self.jpg",
				gallery: [
					"/res/vinci_01.jpg",
					"/res/vinci_02.jpg",
					"/res/vinci_03.jpg"
				]
			},
			{
				id: 1,
				name: "Claude Monet",
				genre: "Impressionism",
				epoch: "Modernism",
				bio: "Oscar-Claude Monet (14 November 1840 – 5 December 1926) was a founder of French Impressionist painting, and the most consistent and prolific practitioner of the movement\"s philosophy of expressing one\"s perceptions before nature, especially as applied to plein-air landscape painting. The term \"Impressionism\" is derived from the title of his painting Impression, soleil levant (Impression, Sunrise), which was exhibited in 1874 in the first of the independent exhibitions mounted by Monet and his associates as an alternative to the Salon de Paris.",
				img: "http://2.bp.blogspot.com/_qcuftpB9Hx8/TGB-JshlhDI/AAAAAAAACHo/92Li6XxfLek/s1600/Claude+Monet.jpg",
				gallery: [
					"http://www.monetalia.com/paintings/large/monet-water-lilies-15.jpg",
					"http://www.printdigital.ru/img/mone/claudemonetp013.jpg",
					"http://i.imgur.com/DuElKfW.jpg"
				]
			} ,
			{
				id: 2,
				genre: "Avant-garde",
				epoch: "Modernism",
				name: "Kazimir Malevich",
				bio: "Kazimir Severinovich Malevich (23 February 1879 – 15 May 1935) was a Russian painter and art theoretician. He was a pioneer of geometric abstract art and the originator of the avant-garde, Suprematist movement.",
				img: "https://robotfication.files.wordpress.com/2014/11/31580f8f4d7cf30b541e3197213d710e.jpg",
				gallery: [
					"https://pbs.twimg.com/media/B8g2wjoCYAIPjd1.jpg:large",
					"http://upload.wikimedia.org/wikipedia/commons/e/e3/%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9_%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82._%D0%9E%D0%BA.1923._%D0%93%D0%A0%D0%9C.png",
					"http://glotime.tv/wp-content/uploads/2014/07/Head_of_a_Peasant_Girl.jpg"
				]
			} ,
			{
				id: 3,
				name: "Lucas Cranach the Elder",
				genre: "Early Renaissance",
				epoch: "Renaissance",
				bio: "Lucas Cranach the Elder  c. 1472 – 16 October 1553) was a German Renaissance painter and printmaker in woodcut and engraving. He was court painter to the Electors of Saxony for most of his career, and is known for his portraits, both of German princes and those of the leaders of the Protestant Reformation, whose cause he embraced with enthusiasm, becoming a close friend of Martin Luther. He also painted religious subjects, first in the Catholic tradition, and later trying to find new ways of conveying Lutheran religious concerns in art.",
				img: "http://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lucas_Cranach_d._%C3%84._063.jpg/760px-Lucas_Cranach_d._%C3%84._063.jpg",
				gallery: [
					"http://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Lucas_Cranach_the_Elder_-_Apoll_und_Diana_in_waldiger_Landschaft_-_Google_Art_Project.jpg/696px-Lucas_Cranach_the_Elder_-_Apoll_und_Diana_in_waldiger_Landschaft_-_Google_Art_Project.jpg",
					"http://im3.kommersant.ru/Issues.photo/CORP/2014/08/21/KMO_121006_00797_1_t210_190828.jpg",
					"http://upload.wikimedia.org/wikipedia/commons/b/bd/AdamEveParadiseCranach.jpg"
				]
			} ,
			{
				id: 4,
				name: "Marcel Duchamp",
				genre: "Anti-art",
				epoch: "Modernism",
				bio: "Marcel Duchamp  (28 July 1887 – 2 October 1968) was a French, naturalized American painter, sculptor, chess player, and writer whose work is associated with Dadaism (anti-art) and conceptual art, although careful about his use of the term Dada and direct association with Dada groups. Duchamp is commonly regarded, along with Pablo Picasso and Henri Matisse, as one of the three artists who helped to define the revolutionary developments in the plastic arts in the opening decades of the twentieth century, responsible for significant developments in painting and sculpture. Duchamp has had an immense impact on twentieth-century and twenty first-century art. By World War I, he had rejected the work of many of his fellow artists (like Henri Matisse) as \"retinal\" art, intended only to please the eye. Instead, Duchamp wanted to put art back in the service of the mind.",
				img: "http://uploads2.wikiart.org/images/marcel-duchamp.jpg",
				gallery: [
					"http://www.artandcointv.com/imageUploads/GreatMasters/FOUNTAIN.jpg",
					"https://artislimited.files.wordpress.com/2013/05/duchamp-mona-lisa-lhooq.jpg?w=652&h=1030",
					"http://1.bp.blogspot.com/-carRQxXAPSI/UmfqIXb8LAI/AAAAAAAAGhw/h8-9j5tZvzg/s1600/3333.jpg"
				]
			},
			{
				id: 5,
				name: "Frida Kahlo",
				genre: "Primitivism",
				epoch: "Modernism",
				bio: "Frida Kahlo de Rivera (July 6, 1907 – July 13, 1954) was a Mexican painter who is best known for her self-portraits. Mexican culture and Amerindian cultural tradition are important in her work, which has been sometimes characterized as naive art or folk art. Her work has also been described as surrealist, and in 1938 André Breton, principal initiator of the surrealist movement, described Kahlo\"s art as a \"ribbon around a bomb\". Frida rejected the \"surrealist\" label; she believed that her work reflected more of her reality than her dreams.",
				img: "http://rupo.ru/i/msg_i/3122/02.jpg",
				gallery: [
					"https://classconnection.s3.amazonaws.com/208/flashcards/1234208/jpg/hale1335520545132.jpg",
					"https://s-media-cache-ak0.pinimg.com/736x/6a/c3/38/6ac338e855dd1d13252af727a0e637d3.jpg",
					"http://www.tuttigliuominidilola.it/wp-content/uploads/2013/01/raices-de-frida-kahlo.jpg"
				]
			},
			{
				id: 6,
				name: "Michelangelo Buonarroti",
				genre: "High Renaissance",
				epoch: "Renaissance",
				bio: "Michelangelo di Lodovico Buonarroti Simoni commonly known as Michelangelo, was an Italian sculptor, painter, architect, poet, and engineer of the High Renaissance who exerted an unparalleled influence on the development of Western art. Considered the greatest living artist in his lifetime, he has since been held as one of the greatest artists of all time. Despite making few forays beyond the arts, his versatility in the disciplines he took up was of such a high order that he is often considered a contender for the title of the archetypal Renaissance man, along with his fellow Italian Leonardo da Vinci.",
				img: "http://i.ytimg.com/vi/7gJN1zuTwlg/maxresdefault.jpg",
				gallery: [
					"http://mmbiz.qpic.cn/mmbiz/ibbjzt4BDBw60kSPaVibia661icRj42kII5LvSeI25b5AypzXzXMib1k77RYXCQTicsicdaWsyoechEdl5MdBlTgMnb9A/0",
					"http://upload.wikimedia.org/wikipedia/en/4/46/Sistine_chapel.jpg",
					"http://4.bp.blogspot.com/-rUj1tJY-CnI/T8PLGsoqyDI/AAAAAAAAI8g/w7Ldh0oRedY/s1600/LuzTrevasMichelangeloWga.jpg"
				]
			},
			{
				id: 7,
				name: "Giotto",
				genre: "Early Renaissance",
				epoch: "Renaissance",
				bio: "Giotto di Bondone, known as Giotto, was an Italian painter and architect from Florence in the late Middle Ages. He is generally considered the first in a line of great artists who contributed to the Italian Renaissance. Giotto\'s contemporary, the banker and chronicler Giovanni Villani, wrote that Giotto was \"the most sovereign master of painting in his time, who drew all his figures and their postures according to nature. And he was given a salary by the Comune of Florence in virtue of his talent and excellence.\"",
				img: "http://www.vestnik.ulsu.ru/img/djotto_otkriv_treh_1.jpg",
				gallery: [
					"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Giotto_di_Bondone_-_Legend_of_St_Francis_-_5._Renunciation_of_Wordly_Goods_-_WGA09123.jpg/800px-Giotto_di_Bondone_-_Legend_of_St_Francis_-_5._Renunciation_of_Wordly_Goods_-_WGA09123.jpg",
					"http://static.klasnaocinka.com.ua/uploads/editor/4185/398224/sitepage_174/images/risunok7.jpg",
					"http://www.chimdocet.it/solido/images3/giotto.gif"
				]
			} ,
			{
				id: 8,
				name: "Pierre-Auguste Renoir",
				genre: "Impressionism",
				epoch: "Renaissance",
				bio: "Pierre-Auguste Renoir, commonly known as Auguste Renoir was a French artist who was a leading painter in the development of the Impressionist style. As a celebrator of beauty, and especially feminine sensuality, it has been said that \"Renoir is the final representative of a tradition which runs directly from Rubens to Watteau.\" He was the father of actor Pierre Renoir (1885–1952), filmmaker Jean Renoir (1894–1979) and ceramic artist Claude Renoir (1901–69). He was the grandfather of the filmmaker Claude Renoir (1913–1993), son of Pierre.",
				img: "https://lh5.googleusercontent.com/-2qT__luHqRs/U8u5RdA0ZnI/AAAAAAAAABc/VFLbCYfJbUE/s640/blogger-image--276144559.jpg",
				gallery: [
					"http://3.bp.blogspot.com/-Y2htv2_nrw0/VJSZEv83ubI/AAAAAAAAk2I/Cz6gVqMNUF0/s1600/x.jpg",
					"http://www.favoritdekor.se/shop/15080/art80/h1411/17861411-origpic-63907a.jpg",
					"https://lh4.googleusercontent.com/-KEMJIyu_Hbw/URgbglR5AjI/AAAAAAAAAvI/gYGhmAx89yE/w824-h1024/00003326.jpg"
				]
			} ,
			{
				id: 9,
				name: "Pablo Picasso",
				genre: "Avant-garde",
				epoch: "Modernism",
				bio: "Pablo Ruiz y Picasso, also known as Pablo Picasso, was a Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet and playwright who spent most of his adult life in France. As one of the greatest and most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore. Among his most famous works are the proto-Cubist Les Demoiselles d'Avignon (1907), and Guernica (1937), a portrayal of the Bombing of Guernica by the German and Italian airforces at the behest of the Spanish nationalist government during the Spanish Civil War.",
				img: "http://media.telemundo47.com/images/tlmd_pablopicasso_wikimedia.jpg",
				gallery: [
					"http://4.bp.blogspot.com/-GzAi6NLFXYM/U_FWM8HtSXI/AAAAAAAAA0Y/K_hRqQtYi90/s1600/Pablo_Picasso,_1901,_Old_Woman_(Woman_with_Gloves,_Woman_With_Jewelery),_oil_on_cardboard,_26_3-8_x_20_1-2_inches_(67_x_52_1_cm),_Philadelphia_Museum_of_Art.jpg",
					"http://loffit.abc.es/wp-content/uploads/2011/11/Picasso-Absinthdrinkster_1.jpg",
					"http://s2.hubimg.com/u/8535629_f520.jpg"
				]
			} , 
			{
				id: 10,
				name: "Henri Rousseau",
				genre: "Primitivism",
				epoch: "Modernism",
				bio: "Henri Julien Félix Rousseau was a French Post-Impressionist painter in the Naïve or Primitive manner. He was also known as Le Douanier (the customs officer), a humorous description of his occupation as a toll collector. Ridiculed during his lifetime by critics, he came to be recognized as a self-taught genius whose works are of high artistic quality. Rousseau's work exerted an extensive influence on several generations of avant-garde artists.",
				img: "http://www.bibliotekar.ru/k-Rousseau/index.files/image001.jpg",
				gallery: [
					"http://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Rousseau-Hungry-Lion.jpg/1024px-Rousseau-Hungry-Lion.jpg",
					"http://img01.taobaocdn.com/imgextra/i1/27984093/T2xXefXftbXXXXXXXX_!!27984093.jpg",
					"https://pbs.twimg.com/media/B4WdbsHCYAAVIWg.jpg:large"
				]
			} , 
			{
				id: 11,
				name: "Hannah Höch",
				genre: "Anti-art",
				epoch: "Modernism",
				bio: "Hannah Höch was a German Dada artist. She is best known for her work of the Weimar period, when she was one of the originators of photomontage.",
				img: "http://upload.wikimedia.org/wikipedia/en/8/85/HannahHoch.jpg",
				gallery: [
					"http://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Hoch-Cut_With_the_Kitchen_Knife.jpg/640px-Hoch-Cut_With_the_Kitchen_Knife.jpg",
					"http://www.exporevue.com/images/magazine/3455hoch_platonischeliebe.jpg",
					"https://venetianred.files.wordpress.com/2010/01/hannah-hoche28094da-dandy-1919.jpg"
				]
			} , 
			{
				id: 12,
				name: "Lauren K. Cannon",
				genre: "Digital Art",
				epoch: "21st Century Art",
				bio: "Lauren K. Cannon born in a small town in New Jersey, USA. She had an overflowing imagination since childhood and she gave life to her imagination through drawing. She describes her style as surreal fantasy and she is fascinated with the beautiful, the strange and the macabre. Lauren made an amazing portrait of the main character from “The Painted Man”, the recently released novel of Peter V. Brett. Lauren also designed the wards that appear on the author’s site and that will be featured on the US cover edition of the novel, which will be released by Del Rey Books in March 2009 with the title \"The Warded Man\".",
				img: "http://fc03.deviantart.net/fs70/f/2014/223/8/e/deviant_id_by_navate-d8jjg4.jpg",
				gallery: [
					"http://s015.radikal.ru/i332/1011/4c/841657ecaf6e.jpg",
					"http://s013.radikal.ru/i324/1011/ed/0f468165a6ed.jpg",
					"http://s010.radikal.ru/i312/1011/0c/61870d7f13db.jpg"
				]
			} , 
			{
				id: 13,
				name: "Banksy",
				genre: "Street Art",
				epoch: "21st Century Art",
				bio: "Banksy is a pseudonymous English graffiti artist, political activist, film director, and painter. Although his identity has not been proven, reliable sources report that he is believed to be Robin Gunningham, a former public schoolboy at Bristol Cathedral Choir School. His satirical street art and subversive epigrams combine dark humour with graffiti executed in a distinctive stencilling technique. His works of political and social commentary have been featured on streets, walls, and bridges of cities throughout the world.",
				img: "http://lurkmore.so/images/2/20/Banksytimes.jpg",
				gallery: [
					"http://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ozone%27s_Angel.jpg/640px-Ozone%27s_Angel.jpg",
					"http://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Banksy-ps.jpg/320px-Banksy-ps.jpg",
					"http://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Mauer-betlehem.jpg/640px-Mauer-betlehem.jpg"
				]
			} , 
			{
				id: 14,
				name: "Shepard Fairey",
				genre: "Street Art",
				epoch: "21st Century Art",
				bio: "Frank Shepard Fairey is an American contemporary street artist, graphic designer, activist and illustrator who emerged from the skateboarding scene. He first became known for his \"Andre the Giant Has a Posse\" (…OBEY…) sticker campaign, in which he appropriated images from the comedic supermarket tabloid Weekly World News.  He became widely known during the 2008 U.S. presidential election for his Barack Obama \"Hope\" poster. The Institute of Contemporary Art, Boston calls him one of today's best known and most influential street artists. His work is included in the collections at The Smithsonian, the Los Angeles County Museum of Art, the Museum of Modern Art in New York City, the Museum of Contemporary Art San Diego, the National Portrait Gallery in Washington, D.C., the Virginia Museum of Fine Arts in Richmond, and the Victoria and Albert Museum in London.",
				img: "http://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Shepard-fairey-2011-westhollywood.jpg/320px-Shepard-fairey-2011-westhollywood.jpg",
				gallery: [
					"http://lurkmore.so/images/8/86/ObeyGigant.jpg",
					"http://mw2.google.com/mw-panoramio/photos/medium/111614689.jpg",
					"http://upload.wikimedia.org/wikipedia/en/5/55/Barack_Obama_Hope_poster.jpg"
				]
			} , 
			{
				id: 15,
				name: "Salvador Dali",
				genre: "Surrealism",
				epoch: "Modernism",
				bio: "Salvador Domingo Felipe Jacinto Dalí i Domènech, 1st Marqués de Dalí de Pubol known as Salvador Dalí was a prominent Spanish surrealist painter born in Figueres, Spain. Dalí was a skilled draftsman, best known for the striking and bizarre images in his surrealist work. His painterly skills are often attributed to the influence of Renaissance masters. His best-known work, The Persistence of Memory, was completed in August 1931. Dalí's expansive artistic repertoire included film, sculpture, and photography, in collaboration with a range of artists in a variety of media.",
				img: "http://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/320px-Salvador_Dal%C3%AD_1939.jpg",
				gallery: [
					"http://thegwoanielmuseum.weebly.com/uploads/4/1/8/2/41822567/9266975.jpg?458",
					"https://c2.staticflickr.com/4/3626/3374071966_420823b51b.jpg",
					"http://www.wm-painting.ru/plugins/p19_image_design/images/4/912.jpg"
				]
			}
		];
		
		factory.getPainters = function(){
			return painters;
		}

		return factory;
	})
.factory('searchFactory', 
	function(){
		var factory = {};

		var searchParams = [
			{
				name: 'Epoch',
				options: [
					'Renaissance',
					'Modernism',
					'21st Century Art'
				]
			},
			{
				name: 'Genre',
				options: [
					'High Renaissance',
					'Early Renaissance',
					'Avant-garde',
					'Primitivism',
					'Anti-art',
					'Digital Art',
					'Street Art'
				],
			}
		];

		factory.getParams = function(){
			return searchParams;
		}

		return factory;
	}
)
.factory('epochFactory',
	function(){
		factory = {};
		
		var epochs = [
			{
				name: 'Renaissance',
				images: [
					'http://img0.liveinternet.ru/images/attach/c/6/92/522/92522590_zhenschinazhemchuzhina.jpg',
					'http://files.adme.ru/files/news/part_28/283055/2.jpg',
					'http://files.adme.ru/files/news/part_28/283055/3.jpg'
				],
				desc: 'The Renaissance marks the period of European history at the close of the Middle Ages and the rise of the Modern world. It represents a cultural rebirth from the 14th through the middle of the 17th centuries. Early Renaissance, mostly in Italy, bridges the art period during the fifteenth century, between the Middle Ages and the High Renaissance in Italy. It is generally known that Renaissance matured in Northern Europe later, in the 16th century.[49] One of the distinguishing features of Renaissance art was its development of highly realistic linear perspective.'
			},
			{
				name: 'Modernism',
				images: [
					'http://affordableartfair.com/hampstead/files/2013/03/the-starry-night-18891-460x287.jpg',
					'http://webstarco.narod.ru/painting/images/petrov5.jpg',
					'https://dg19s6hp6ufoh.cloudfront.net/pictures/612359965/large/bather-1928.jpeg'
				],
				desc: 'Modernism is a philosophical movement that, along with cultural trends and changes, arose from wide-scale and far-reaching transformations in Western society in the late 19th and early 20th centuries. Among the factors that shaped Modernism were the development of modern industrial societies and the rapid growth of cities, followed then by the horror of World War I. Modernism also rejected the certainty of Enlightenment thinking, and many modernists rejected religious belief.'
			},
			{
				name: '21st Century Art',
				images: [
					'http://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Dombis_1687.jpg/640px-Dombis_1687.jpg',
					'http://s009.radikal.ru/i310/1011/f5/9d5e86ae8e44.jpg',
					'http://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/DaVinci_MonaLisa1b.jpg/320px-DaVinci_MonaLisa1b.jpg',
					'http://upload.wikimedia.org/wikipedia/commons/d/d6/Wattts_street_art_paris.jpg',
					'http://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/2007_011_CES_Schelling_Monsters.jpg/640px-2007_011_CES_Schelling_Monsters.jpg',
					'http://kak-ya.ru/images/photos/2936_13317153_ca353f3462.jpg'
				],
				desc: '21st Century Art is a mixture of different styles, fresh looks on art, and new technologies. As such an epoch does\'t actually exist, this is a product of Digital Art and Street Art genres, because Modern Art in classical meaning doesn\'t reach these movements. Unfortunately, most painters remain anonymous — that\'s why we\'ve included only some of the most well-known.  '
			}
		];

		factory.getEpochs = function(){
			return epochs;
		}

		return factory;
	}
).factory('galleryFactory', function(){
	factory = {};
	function getGallery(){
		var gallery = [
			{
				name: 'The Renaissance', //without The?
				images: [
					'http://upload.wikimedia.org/wikipedia/commons/c/c0/Dirck_Hals_-_Banquet_Scene_in_a_Renaissance_Hall_-_WGA11035.jpg',
					'http://www.oxfordartonline.com/public/media/Bzt_Renaissance2_Tintoretto.jpg',
					'http://cs3.livemaster.ru/zhurnalfoto/6/4/d/130801214128.jpg',
					'http://www.walkaboutflorence.com/sites/default/files/styles/news_detail/public/Renaissance_Florence_Italy.jpg?itok=ZdFpppqy',
					'http://static.tumblr.com/8dd59a0efc01be16efb4fd530d888654/xtebxly/lI8mhb9tk/tumblr_static_tumblr_mh7uf2fte41s4qflio1_400.jpg',
					'http://www.oxfordartonline.com/public/media/Bzt_Renaissance2_Titian.jpg',
					'http://www.nationalgallery.org.uk/upload/img/monet-water-lily-pond-NG4240-r-half.jpg',
					'http://www.osnatfineart.com/images/Madame-Monet-and-Her-Son.gif',
					'http://www.ibiblio.org/wm/paint/auth/monet/first/impression/impression.jpg',
					'http://www.nosnana.org/media/k2/items/cache/21615ff211c60b43d866a2b2bca320da_XL.jpg'
				]
			},
			{
				name: 'Modernism',
				images: [
					'http://mediasubs.ru/group//uploads/mi/mir-iskusstva-tvorchestva-i-krasotyi/image2/UtZjdiOS0.jpg',
					'http://jivopismaslom.ru/wp-content/uploads/2012/09/Pol-Gogen-Dve-taityanki.jpg',
					'http://art-assorty.ru/uploads/posts/2012-01/1325754078_modernizm.jpg',
					'http://files.smallbay.ru/images9/munch03.jpg',
					'http://img-fotki.yandex.ru/get/2708/innalove.5/0_7f7a_693f34f4_XL.jpg',
					'http://www.wm-painting.ru/images/Books/ru31.jpg',
					'http://www.wm-painting.ru/images/Books/ru16.jpg',
					'http://skillsup.ru/assets/images/photos/400/432-osnovnyie-napravleniya-izobrazitelnogo-iskusstva-xx-veka/01.jpg',
					'http://p-ivlin.ru/wp-content/uploads/2013/03/Modern1.jpg',
					'http://www.infrance.su/gallery/data/media/36/delaunay_2.jpg'
				]
			},
			{
				name: '21st Century Art',
				images: [
					'http://www.hdwallpapersinn.com/wp-content/uploads/2014/11/Virtuos-Concept-Art-Services-2.jpg',
					'http://illusion.scene360.com/wp-content/themes/sahara-10/submissions/2013/10/martinakis-06.jpg',
					'http://www.bitdesign.ca/gallery/illustration/digital/bouquet500.jpg',
					'https://m1.behance.net/rendition/modules/7607065/disp/73d3d5406a6c7b80b0e4924400faed3c.jpg',
					'https://s-media-cache-ak0.pinimg.com/originals/a1/fc/02/a1fc02c9b4df067c2fa132bed80bdf44.jpg',
					'http://photographyideas.info/wp-content/uploads/2014/10/Landscape-Silhouette-Digital-Photography1.jpg',
					'http://www.synthetik.com/wp-content/uploads/2011/05/StudioArtistScreenSnapz2308.jpg.scaled1000.jpg',
					'http://static1.squarespace.com/static/53ffad1fe4b0bf4098a0d211/t/5400142ee4b0c3314cbc8ea9/1409291310561/',
					'http://fc03.deviantart.net/fs71/i/2011/336/d/9/insignia___fractal_art_by_ikill_animation-d4i01zh.png',
					'https://www.nodebox.net/code/data/media/workshop_helsinki5.jpg',
					'http://cdn.trendhunterstatic.com/thumbs/super-nature.jpeg',
					'http://cs3-1.4pda.to/2397281.gif',
					'http://www.ozartsetc.com/wp-content/uploads/2013/12/22-ozartsetc_nuxuno-xan_street-art_fort-de-france_martinique_2013_00-e1363115219907.jpg',
					'http://streetartlondon.co.uk/tours/files/2014/01/23-Street-Art-London-Street-Art-Tour.jpg',
					'http://streetartlondon.co.uk/artists/files/2010/11/Boxi-street-artist-2.jpg',
					'http://41.media.tumblr.com/9ed595d632162d0cd087f9dbc1764af3/tumblr_mxk3qgoasp1rte5gyo4_1280.jpg',
					'http://oddstuffmagazine.com/wp-content/uploads/2012/06/0271.jpg',
					'http://wordlesstech.com/wp-content/uploads/2012/08/Street-Art-for-July-3.jpg',
					'http://cdn.visualnews.com/wp-content/uploads/2013/08/1-Street-Art-by-DALeast-600x399.jpg',
					'http://www.ufunk.net/wp-content/uploads/2013/05/MTO-street-art-25.jpg',
					'http://cdn.europosters.eu/image/1300/posters/banksy-street-art-graffiti-soldier-and-girl-i18594.jpg',
					'http://www.pariszigzag.fr/wp-content/uploads/2013/05/street-arts-paris-75.jpg'
				]
			}
		];

		return gallery;
	}

	factory.getGallery = getGallery;

	return factory;
});
