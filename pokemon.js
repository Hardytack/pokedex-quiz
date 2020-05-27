const pokemon = [
    {
        name: 'abomasnow',
        categories: ['Gen 4', 'Grass', 'Ice', 'Dual Type', 'Gym Leader Ace', 'Mega Evolution'],
        pokedex: { text: 'It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.' }
    },
    {
        name: 'absol',
        categories: ['Gen 3', 'Dark', 'Single Type', 'Elite Four Ace', 'Mega Evolution'],
        pokedex: { text: 'It appears when it senses an impending natural disaster. As a result, it was mistaken as a doom bringer.' }
    },
    {
        name: 'aegislash',
        categories: ['Gen 6', 'Steel', 'Ghost', 'Dual Type', 'Elite Four Ace', 'Stone Evolution'],
        pokedex: { text: 'Apparently, it can detect the innate qualities of leadership. According to legend, whoever it recognizes is destined to become king.' }
    },
    {
        name: 'aerodactyl',
        categories: ['Gen 1', 'Rock', 'Flying', 'Dual Type', 'Champions Pokemon', 'Fossil Pokemon', 'Mega Evolution'],
        pokedex: { text: 'A Pokémon that roamed the skies in the dinosaur era. Its teeth are like saw blades.' }
    },
    {
        name: 'alakazam',
        categories: ['Gen 1', 'Psychic', 'Single Type', 'Gym Leader Ace', 'Trade Evolution', 'Champions Pokemon'],
        pokedex: { text: 'Its highly developed brain is on par with a supercomputer. It can use all forms of psychic abilities.' }
    },
    {
        name: 'alolan exeggutor',
        categories: ['Gen 7', 'Grass', 'Dragon', 'Dual Type', 'Stone Evolution', 'Regional Form'],
        pokedex: { text: 'As it grew taller and taller, it outgrew its reliance on psychic powers, while within it awakened the power of the sleeping dragon.' }
    },
    {
        name: 'alolan marowak',
        categories: ['Gen 7', 'Ghost', 'Fire', 'Dual Type', 'Regional Form'],
        pokedex: { text: 'When it beats opponents with its bone, the cursed flames spread to them. No amount of water will stop those flames from burning.' }
    },
    {
        name: 'alolan meowth',
        categories: ['Gen 7', 'Dark', 'Single Type', 'Regional Form'],
        pokedex: { text: 'Highly intelligent and prideful, it\'s famously difficult to handle–but that\'s also a reason for its popularity.' }
    },
    {
        name: 'alolan rattata',
        categories: ['Gen 7', 'Normal', 'Dark', 'Dual Type', 'Regional Form', 'Route 1 Pokemon'],
        pokedex: { text: 'Night after night, they sneak into people\'s homes seeking food. A massive outbreak of them has become an issue of public concern.' }
    },
    {
        name: 'altaria',
        categories: ['Gen 3', 'Flying', 'Dragon', 'Dual Type', 'Gym Leader Ace', 'Mega Evolution'],
        pokedex: { text: 'It flies gracefully through the sky. Its melodic humming makes you feel like you\'re in a dream.' }
    },
    {
        name: 'amaura',
        categories: ['Gen 6', 'Rock', 'Ice', 'Dual Type', 'Fossil Pokemon'],
        pokedex: { text: 'This ancient Pokémon was restored from part of its body that had been frozen in ice for over 100 million years.' }
    },
    {
        name: 'anorith',
        categories: ['Gen 3', 'Rock', 'Bug', 'Dual Type', 'Fossil Pokemon'],
        pokedex: { text: 'This is one kind of primeval bug Pokémon. With eight wings, it could apparently swim a lot faster than you\'d expect.' }
    },
    {
        name: 'arbok',
        categories: ['Gen 1', 'Poison', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'The latest research has determined that there are over 20 possible arrangements of the patterns on its stomach.' }
    },
    {
        name: 'arcanine',
        categories: ['Gen 1', 'Fire', 'Single Type', 'Gym Leader Ace', 'Stone Evolution'],
        pokedex: { text: 'A Pokemon that has been admired since the past for its beauty. It runs agilely as if on wings.' }
    },
    {
        name: 'aron',
        categories: ['Gen 3', 'Rock', 'Steel', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'It usually lives deep in mountains. However, hunger may drive it to eat railroad tracks and cars.' }
    },
    {
        name: 'azelf',
        categories: ['Gen 4', 'Psychic', 'Single Type', 'Legendary Pokemon', 'Legendary Trio Pokemon'],
        pokedex: { text: 'Known as "The Being of Willpower." It sleeps at the bottom of a lake to keep the world in balance.' }
    },
    {
        name: 'azumarill',
        categories: ['Gen 2', 'Water', 'Fairy', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'The bubble-like pattern on its stomach helps it camouflage itself when it\'s in the water.' }
    },
    {
        name: 'azurill',
        categories: ['Gen 3', 'Normal', 'Fairy', 'Dual Type', 'Baby Pokemon'],
        pokedex: { text: 'Its tail, which is packed with nutrition, is very bouncy like a rubber ball. On sunny days they gather at the edge of water and splash about for fun.' }
    },
    {
        name: 'barbacle',
        categories: ['Gen 6', 'Rock', 'Water', 'Dual Type', 'Elite Four Ace'],
        pokedex: { text: 'Having an eye on each palm allows it to keep watch in all directions. In a pinch, its limbs start to act on their own to ensure the enemy\'s defeat.' }
    },
    {
        name: 'barboach',
        categories: ['Gen 3', 'Water', 'Rock', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'It probes muddy riverbeds with its two long whiskers. A slimy film protects its body.' }
    },
    {
        name: 'bastiodon',
        categories: ['Gen 4', 'Rock', 'Steel', 'Dual Type', 'Gym Leader Ace', 'Fossil Pokemon'],
        pokedex: { text: 'The bones of its face are huge and hard, so they were mistaken for its spine until after this Pokemon was successfully restored.' }
    },
    {
        name: 'bisharp',
        categories: ['Gen 5', 'Dark', 'Steel', 'Dual Type', 'Elite Four Ace'],
        pokedex: { text: 'It leads a group of Pawniard. It battles to become the boss, but will be driven from the group if it loses.' }
    },
    {
        name: 'blastoise',
        categories: ['Gen 1', 'Water', 'Single Type', 'Champions Pokemon', 'Mega Evolution'],
        pokedex: { text: 'It deliberately makes itself heavy so it can withstand the recoil of the water jets it fires.' }
    },
    {
        name: 'bonsly',
        categories: ['Gen 4', 'Rock', 'Single Type', 'Baby Pokemon'],
        pokedex: { text: 'In order to adjust the level of fluids in its body, it exudes water from its eyes. This makes it appear to be crying.' }
    },
    {
        name: 'bronzong',
        categories: ['Gen 4', 'Psychic', 'Steel', 'Dual Type', 'Elite Four Ace'],
        pokedex: { text: 'In ages past, this Pokemon was revered as a bringer of rain. It was found buried in the ground.' }
    },
    {
        name: 'budew',
        categories: ['Gen 4', 'Grass', 'Poison', 'Dual Type', 'Baby Pokemon'],
        pokedex: { text: 'It lives alongside clear ponds. It scatters pollen that induces harsh sneezing and runny noses.' }
    },
    {
        name: 'bulbasaur',
        categories: ['Gen 1', 'Grass', 'Poison', 'Dual Type', 'Starter Pokemon', 'Ashs Pokemon'],
        pokedex: { text: 'It is very agile. Before going to sleep, it extinguishes the flame on its tail to prevent fires.' }
    },
    {
        name: 'caterpie',
        categories: ['Gen 1', 'Bug', 'Single Type', 'Route 1 Pokemon', 'Ashs Pokemon'],
        pokedex: { text: 'For protection, it releases a horrible stench from the antennae on its head to drive away enemies.' }
    },
    {
        name: 'chandelure',
        categories: ['Gen 5', 'Fire', 'Ghost', 'Dual Type', 'Elite Four Ace', 'Stone Evolution'],
        pokedex: { text: 'It absorbs a spirit, which it then burns. By waving the flames on its arms, it puts its foes into a hypnotic trance.' }
    },
    {
        name: 'chansey',
        categories: ['Gen 1', 'Normal', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'Being few in number and difficult to capture, it is said to bring happiness to the Trainer who catches it.' }
    },
    {
        name: 'charizard',
        categories: ['Gen 1', 'Fire', 'Flying', 'Dual Type', 'Champions Pokemon', 'Gigantamax Pokemon', 'Mega Evolution', 'Ashs Pokemon'],
        pokedex: { text: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.' }
    },
    {
        name: 'chimchar',
        categories: ['Gen 4', 'Fire', 'Single Type', 'Starter Pokemon', 'Ashs Pokemon'],
        pokedex: { text: 'It is very agile. Before going to sleep, it extinguishes the flame on its tail to prevent fires.' }
    },
    {
        name: 'chingling',
        categories: ['Gen 4', 'Psychic', 'Single Type', 'Baby Pokemon'],
        pokedex: { text: 'It lives alongside clear ponds. It scatters pollen that induces harsh sneezing and runny noses.' }
    },
    {
        name: 'cleffa',
        categories: ['Gen 2', 'Fairy', 'Single Type', 'Baby Pokemon'],
        pokedex: { text: 'Many appear when the night skies are filled with shooting stars. They disappear with sunrise.' }
    },
    {
        name: 'conkeldurr',
        categories: ['Gen 5', 'Fighting', 'Elite Four Ace', 'Single Type', 'Trade Evolution'],
        pokedex: { text: 'Rather than rely on force, they master moves that utilize the centrifugal force of spinning concrete.' }
    },
    {
        name: 'crabominable',
        categories: ['Gen 7', 'Ice', 'Fighting', 'Dual Type', 'Elite Four Ace'],
        pokedex: { text: 'Before it stops to think, it just starts pummeling. There are records of its turning back avalanches with a flurry of punches.' }
    },
    {
        name: 'cranidos',
        categories: ['Gen 4', 'Rock', 'Single Type', 'Gym Leader Ace', 'Fossil Pokemon'],
        pokedex: { text: 'It lived in jungles around 100 million years ago. Its skull is as hard as iron.' }
    },
    {
        name: 'crobat',
        categories: ['Gen 2', 'Flying', 'Poison', 'Dual Type', 'Elite Four Ace', 'Happiness Evolution'],
        pokedex: { text: 'It flies so silently through the dark on its four wings that it may not be noticed even when nearby.' }
    },
    {
        name: 'donphan',
        categories: ['Gen 1', 'Ground', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'It attacks by curling up, then rolling into its foe. It can blow apart a house in one hit.' }
    },
    {
        name: 'dragapult',
        categories: ['Gen 8', 'Ghost', 'Dragon', 'Dual Type', 'Pseudo Legendary'],
        pokedex: { text: 'When it isn\'t battling, it keeps Dreepy in the holes on its horns. Once a fight starts, it launches the Dreepy like supersonic missiles.' }
    },
    {
        name: 'dragonite',
        categories: ['Gen 1', 'Dragon', 'Flying', 'Dual Type', 'Champions Pokemon', 'Elite Four Ace', 'Pseudo Legendary', 'Ashs Pokemon'],
        pokedex: { text: 'It can fly in spite of its big and bulky physique. It circles the globe in just 16 hours.' }
    },
    {
        name: 'drapion',
        categories: ['Gen 4', 'Dark', 'Poison', 'Dual Type', 'Elite Four Ace'],
        pokedex: { text: 'It takes pride in its strength. Even though it can tear foes apart, it finishes them off with powerful poison.' }
    },
    {
        name: 'dusclops',
        categories: ['Gen 3', 'Ghost', 'Single Type', 'Elite Four Ace'],
        pokedex: { text: 'It is thought that its body is hollow with only a spectral ball of fire burning inside. However, no one has been able to confirm this theory as fact.' }
    },
    {
        name: 'electivire',
        categories: ['Gen 4', 'Electric', 'Single Type', 'Gym Leader Ace', 'Trade Evolution'],
        pokedex: { text: 'It pushes the tips of its two tails against the foe, then lets loose with over 20,000 volts of power.' }
    },
    {
        name: 'elekid',
        categories: ['Gen 2', 'Electric', 'Single Type', 'Baby Pokemon'],
        pokedex: { text: 'It rotates its arms to generate electricity, but it tires easily, so it charges up only a little bit.' }
    },
    {
        name: 'exeggutor',
        categories: ['Gen 1', 'Grass', 'Psychic', 'Dual Type', 'Champions Pokemon', 'Stone Evolution'],
        pokedex: { text: 'Its three heads think independently. However, they are friendly and never appear to squabble.' }
    },
    {
        name: 'floatzel',
        categories: ['Gen 4', 'Water', 'Victory Road Pokemon', 'Single Type', 'Gym Leader Ace'],
        pokedex: { text: 'It floats using its well-developed flotation sac. It assists in the rescues of drowning people.' }
    },
    {
        name: 'fraxure',
        categories: ['Gen 5', 'Dragon', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'A broken tusk will not grow back, so it diligently sharpens its tusks on river rocks after the end of a battle.' }
    },
    {
        name: 'froslass',
        categories: ['Gen 4', 'Ghost', 'Ice', 'Dual Type', 'Gym Leader Ace', 'Stone Evolution'],
        pokedex: { text: 'After a woman met her end on a snowy mountain, her regrets lingered on. From them, this Pokemon was born. Its favorite food is frozen souls.' }
    },
    {
        name: 'gabite',
        categories: ['Gen 4', 'Ground', 'Dragon', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'It sheds its skin and gradually grows larger. Its scales can be ground into a powder and used as raw materials for traditional medicine.' }
    },
    {
        name: 'galarian meowth',
        categories: ['Gen 8', 'Steel', 'Single Type', 'Regional Form'],
        pokedex: { text: 'Living with a savage, seafaring people has toughened this Pokemon\'s body so much that parts of it have turned to iron.' }
    },
    {
        name: 'galarian ponyta',
        categories: ['Gen 8', 'Psychic', 'Single Type', 'Regional Form'],
        pokedex: { text: 'Its small horn hides a healing power. With a few rubs from this Pokemon\'s horn, any slight wound you have will be healed.' }
    },
    {
        name: 'gallade',
        categories: ['Gen 4', 'Psychic', 'Fighting', 'Dual Type', 'Elite Four Ace', 'Stone Evolution', 'Mega Evolution'],
        pokedex: { text: 'When protecting someone, it extends its elbows as if they were swords and fights savagely.' }
    },
    {
        name: 'garchomp',
        categories: ['Gen 4', 'Ground', 'Dragon', 'Dual Type', 'Champions Pokemon', 'Pseudo Legendary', 'Mega Evolution'],
        pokedex: { text: 'It flies at speeds equal to a jet fighter plane. It never allows its prey to escape.' }
    },
    {
        name: 'gengar',
        categories: ['Gym Leader Ace', 'Gen 1', 'Ghost', 'Poison', 'Dual Type', 'Trade Evolution', 'Mega Evolution', 'Elite Four Ace', 'Gigantamax Pokemon'],
        pokedex: { text: 'Lurking in the shadowy corners of rooms, it awaits chances to steal its prey\'s life force.' }
    },
    {
        name: 'geodude',
        categories: ['Gen 1', 'Ground', 'Rock', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'Commonly found near mountain trails, etc. If you step on one by accident, it gets angry.' }
    },
    {
        name: 'golbat',
        categories: ['Gen 1', 'Flying', 'Poison', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'It attacks in a stealthy manner, without warning. Its sharp fangs are used to bite and suck blood.' }
    },
    {
        name: 'goldeen',
        categories: ['Gen 1', 'Water', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'Though it appears very elegant when swimming with fins unfurled, it can jab powerfully with its horn.' }
    },
    {
        name: 'goodra',
        categories: ['Gen 6', 'Dragon', 'Single Type', 'Pseudo Legendary', 'Ashs Pokemon'],
        pokedex: { text: 'Sometimes it misunderstands instructions and appears dazed or bewildered. Many Trainers don\'t mind, finding this behavior to be adorable.' }
    },
    {
        name: 'gothitelle',
        categories: ['Gen 5', 'Psychic', 'Elite Four Ace', 'Single Type'],
        pokedex: { text: 'They can predict the future from the placement and movement of the stars. They can see Trainers\' life spans.' }
    },
    {
        name: 'graveler',
        categories: ['Gen 1', 'Ground', 'Rock', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'With a free and uncaring nature, it doesn\'t mind if pieces break off while it rolls down mountains.' }
    },
    {
        name: 'grookey',
        categories: ['Gen 8', 'Grass', 'Single Type', 'Starter Pokemon'],
        pokedex: { text: 'It attacks with rapid beats of its stick. As it strikes with amazing speed, it gets more and more pumped.' }
    },
    {
        name: 'gyarados',
        categories: ['Gen 1', 'Water', 'Flying', 'Victory Road Pokemon', 'Dual Type', 'Champions Pokemon'],
        pokedex: { text: 'It fires hyper beams in all directions, burning the surrounding area to ash. There are some regions where it\'s called “the deity of destruction.”' }
    },
    {
        name: 'happiny',
        categories: ['Gen 4', 'Normal', 'Single Type', 'Baby Pokemon'],
        pokedex: { text: 'It likes to carry around a small rock. It may wander around others\' feet and cause them to stumble.' }
    },
    {
        name: 'hariyama',
        categories: ['Gen 3', 'Fighting', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'Although they enjoy comparing their strength, they\'re also kind. They value etiquette, praising opponents they battle.' }
    },
    {
        name: 'hatterene',
        categories: ['Gen 8', 'Fairy', 'Psychic', 'Dual Type', 'Gigantamax Pokemon'],
        pokedex: { text: 'If you\'re too loud around it, you risk being torn apart by the claws on its tentacle. This Pokémon is also known as the Forest Witch.' }
    },
    {
        name: 'hippowdon',
        categories: ['Gen 4', 'Ground', 'Single Type', 'Elite Four Ace'],
        pokedex: { text: 'It blasts internally stored sand from ports on its body to create a towering twister for attack.' }
    },
    {
        name: 'hitmonchan',
        categories: ['Gen 1', 'Fighting', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.' }
    },
    {
        name: 'hitmonlee',
        categories: ['Gen 1', 'Fighting', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'When kicking, the sole of its foot turns as hard as a diamond on impact and destroys its enemy.' }
    },
    {
        name: 'houndoom',
        categories: ['Gen 2', 'Fire', 'Dark', 'Dual Type', 'Elite Four Ace', 'Mega Evolution'],
        pokedex: { text: 'They spew flames mixed with poison to finish off their opponents. They divvy up their prey evenly among the members of their pack.' }
    },
    {
        name: 'hydreigon',
        categories: ['Gen 5', 'Dark', 'Dragon', 'Dual Type', 'Pseudo Legendary'],
        pokedex: { text: 'This brutal Pokemon travels the skies on its six wings. Anything that moves seems like a foe to it, triggering its attack.' }
    },
    {
        name: 'igglybuff',
        categories: ['Gen 2', 'Fairy', 'Normal', 'Dual Type', 'Baby Pokemon'],
        pokedex: { text: 'Its extremely flexible and elastic body makes it bounce continuously—anytime, anywhere.' }
    },
    {
        name: 'impdimp',
        categories: ['Gen 8', 'Fairy', 'Dark', 'Dual Type'],
        pokedex: { text: 'It sneaks into people\'s homes, stealing things and feasting on the negative energy of the frustrated occupants.' }
    },
    {
        name: 'infernape',
        categories: ['Gen 4', 'Fire', 'Fighting', 'Dual Type', 'Elite Four Ace'],
        pokedex: { text: 'It uses unique fighting moves with fire on its hands and feet. It will take on any opponent.' }
    },
    {
        name: 'jigglypuff',
        categories: ['Gen 1', 'Normal', 'Single Type', 'Route 1 Pokemon', 'Happiness Evolution'],
        pokedex: { text: 'It hugely inflates its stomach and sings a mysterious melody. If you hear this melody, you\'ll become sleepy right away.' }
    },
    {
        name: 'kadabra',
        categories: ['Gen 1', 'Psychic', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'It emits special alpha waves from its body that induce headaches just by being close.' }
    },
    {
        name: 'kingdra',
        categories: ['Gym Leader Ace', 'Gen 2', 'Water', 'Dragon', 'Dual Type', 'Trade Evolution'],
        pokedex: { text: 'It sleeps quietly, deep on the seafloor. When it comes up to the surface, it creates a huge whirlpool that can swallow even ships.' }
    },
    {
        name: 'kommo-o',
        categories: ['Gen 7', 'Fighting', 'Dragon', 'Dual Type', 'Pseudo Legendary'],
        pokedex: { text: 'When it spots enemies, it threatens them by jingling the scales on its tail. Weak opponents will crack and flee in panic.' }
    },
    {
        name: 'lairon',
        categories: ['Gen 3', 'Rock', 'Steel', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'It loves iron ore. Groups of them fight for territory by bashing one another with their steel bodies.' }
    },
    {
        name: 'lapras',
        categories: ['Elite Four Ace', 'Gen 1', 'Water', 'Ice', 'Dual Type', 'Gigantamax Pokemon', 'Ashs Pokemon'],
        pokedex: { text: 'These Pokemon were once near extinction due to poaching. Following protective regulations, there is now an overabundance of them.' }
    },
    {
        name: 'loudred',
        categories: ['Gen 3', 'Normal', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'When it stomps its feet and bellows, it generates ultrasonic waves that can blow apart a house.' }
    },
    {
        name: 'lucario',
        categories: ['Gen 4', 'Fighting', 'Steel', 'Dual Type', 'Gym Leader Ace', 'Happiness Evolution', 'Champions Pokemon'],
        pokedex: { text: 'It can discern the physical and emotional states of people, Pokémon, and other natural things from the shape of their aura waves.' }
    },
    {
        name: 'lunatone',
        categories: ['Gen 3', 'Rock', 'Psychic', 'Dual Type', 'Gym Leader Ace'],
        pokedex: { text: 'It becomes very active on the night of a full moon. This Pokemon was first discovered 40 years ago at the site of a meteor strike.' }
    },
    {
        name: 'luvdisc',
        categories: ['Gen 3', 'Water', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'It lives in warm seas. It is said that a couple finding this Pokemon will be blessed with eternal love.' }
    },
    {
        name: 'luxray',
        categories: ['Gen 4', 'Electric', 'Single Type', 'Gym Leader Ace'],
        pokedex: { text: 'When its eyes gleam gold, it can spot hiding prey--even those taking shelter behind a wall.' }
    },
    {
        name: 'lycanroc',
        categories: ['Gen 7', 'Rock', 'Elite Four Ace', 'Single Type', 'Ashs Pokemon'],
        pokedex: { text: 'Its quick movements confuse its enemies. Well equipped with claws and fangs, it also uses the sharp rocks in its mane as weapons.' }
    },
    {
        name: 'machamp',
        categories: ['Gen 1', 'Fighting', 'Elite Four Ace', 'Single Type', 'Trade Evolution', 'Gigantamax Pokemon'],
        pokedex: { text: 'With four arms, it can attack and defend simultaneously. It\'s said to have mastered every martial art in the world.' }
    },
    {
        name: 'machoke',
        categories: ['Gen 1', 'Fighting', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'It happily carries heavy cargo to toughen up. It willingly does hard work for people.' }
    },
    {
        name: 'machop',
        categories: ['Gen 1', 'Fighting', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'Very powerful in spite of its small size. Its mastery of many types of martial arts makes it very tough.' }
    },
    {
        name: 'magby',
        categories: ['Gen 2', 'Fire', 'Single Type', 'Baby Pokemon'],
        pokedex: { text: 'Its magma-like blood circulates throughout its body. Its body\'s heat can top 1,100 degrees F.' }
    },
    {
        name: 'magikarp',
        categories: ['Gen 1', 'Water', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'It is virtually worthless in terms of both power and speed. It is the most weak and pathetic Pokemon in the world.' }
    },
    {
        name: 'magmortar',
        categories: ['Gen 4', 'Fire', 'Elite Four Ace', 'Single Type', 'Trade Evolution'],
        pokedex: { text: 'It blasts fireballs of over 3,600 degrees Fahrenheit from the ends of its arms. It lives in volcanic craters.' }
    },
    {
        name: 'magneton',
        categories: ['Gen 1', 'Electric', 'Steel', 'Victory Road Pokemon', 'Dual Type', 'Gym Leader Ace'],
        pokedex: { text: 'Generates strange radio signals. It raises the temperature by 3.6 degrees Fahrenheit within 3,300 feet.' }
    },
    {
        name: 'makuhita',
        categories: ['Gen 3', 'Fighting', 'Victory Road Pokemon', 'Single Type', 'Gym Leader Ace'],
        pokedex: { text: 'It toughens its body by slamming into thick trees. Many snapped trees can be found near its nest.' }
    },
    {
        name: 'manectric',
        categories: ['Gen 3', 'Electric', 'Single Type', 'Gym Leader Ace', 'Mega Evolution'],
        pokedex: { text: 'It discharges electricity from its mane. It creates a thundercloud overhead to drop lightning bolts.' }
    },
    {
        name: 'mantyke',
        categories: ['Gen 4', 'Flying', 'Water', 'Dual Type', 'Baby Pokemon'],
        pokedex: { text: 'When it swims close to the surface of the ocean, people aboard ships are able to observe the pattern on its back.' }
    },
    {
        name: 'marill',
        categories: ['Gen 2', 'Water', 'Fairy', 'Dual Type', 'Happiness Evolution'],
        pokedex: { text: 'The tip of its tail, which contains oil that is lighter than water, lets it swim without drowning.' }
    },
    {
        name: 'marowak',
        categories: ['Gen 1', 'Ground', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'Originally, it was weak and timid. After evolution, its temperament becomes violent, and it begins to wield bones as weapons.' }
    },
    {
        name: 'mawile',
        categories: ['Gen 3', 'Steel', 'Victory Road Pokemon', 'Single Type', 'Mega Evolves'],
        pokedex: { text: 'A cunning and terrifying Pokemon, its cuteness makes opponents let down their guard—and then it swallows them whole with its huge jaws.' }
    },
    {
        name: 'medicham',
        categories: ['Gen 3', 'Fighting', 'Psychic', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'Through crushingly harsh yoga training, it gained the power to foretell its foe\'s actions. It battles with elegant, dance-like movement.' }
    },
    {
        name: 'meditite',
        categories: ['Gen 3', 'Fighting', 'Psychic', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'It always trains deep in mountains. It levitates when it heightens its spiritual power through meditation.' }
    },
    {
        name: 'meowth',
        categories: ['Gen 1', 'Normal', 'Single Type', 'Gigantamax Pokemon'],
        pokedex: { text: 'Highly intelligent and prideful, it\'s famously difficult to handle–but that\'s also a reason for its popularity.' }
    },
    {
        name: 'mesprit',
        categories: ['Gen 4', 'Psychic', 'Single Type', 'Legendary Trio Pokemon', 'Legendary Pokemon'],
        pokedex: { text: 'This Pokémon is said to have endowed the human heart with emotions, such as sorrow and joy.' }
    },
    {
        name: 'metagross',
        categories: ['Gen 3', 'Psychic', 'Steel', 'Dual Type', 'Champions Pokemon', 'Pseudo Legendary', 'Mega Evolution'],
        pokedex: { text: 'It firmly pins its prey using its four claws and large body. Then the teeth in the mouth on its stomach chew the prey to bits.' }
    },
    {
        name: 'milcery',
        categories: ['Gen 8', 'Fairy', 'Single Type'],
        pokedex: { text: 'This Pokemon was born from sweet-smelling particles in the air. Its body is made of cream.' }
    },
    {
        name: 'milotic',
        categories: ['Gen 3', 'Water', 'Single Type', 'Gym Leader Ace'],
        pokedex: { text: 'It is said to live at the bottom of large lakes. Considered to be the most beautiful of all Pokemon, it has been depicted in paintings and statues.' }
    },
    {
        name: 'miltank',
        categories: ['Gen 2', 'Normal', 'Single Type', 'Gym Leader Ace'],
        pokedex: { text: 'Its milk is delicious and chock-full of nutrients. However, if you drink too much, it could make your stomach hurt, so be careful.' }
    },
    {
        name: 'mime jr',
        categories: ['Gen 4', 'Psychic', 'Fairy', 'Dual Type', 'Baby Pokemon'],
        pokedex: { text: 'It likes places where people gather. It mimics foes to confuse them, then makes its getaway.' }
    },
    {
        name: 'mismagius',
        categories: ['Gen 4', 'Ghost', 'Single Type', 'Gym Leader Ace', 'Stone Evolution'],
        pokedex: { text: 'Its cries sound like incantations to torment the foe. It appears where you least expect it.' }
    },
    {
        name: 'moltres',
        categories: ['Gen 1', 'Fire', 'Flying', 'Victory Road Pokemon', 'Dual Type', 'Legendary Pokemon', 'Legendary Trio Pokemon'],
        pokedex: { text: 'One of the legendary bird Pokemon. It is said that its appearance indicates the coming of spring.' }
    },
    {
        name: 'mudkip',
        categories: ['Gen 3', 'Water', 'Single Type', 'Starter Pokemon'],
        pokedex: { text: 'Its large tail fin propels it through water with powerful acceleration. It is strong in spite of its size.' }
    },
    {
        name: 'munchlax',
        categories: ['Gen 4', 'Normal', 'Single Type', 'Baby Pokemon', 'Route 1 Pokemon'],
        pokedex: { text: 'It wolfs down its weight in food once a day, swallowing food whole with almost no chewing.' }
    },
    {
        name: 'noivern',
        categories: ['Gen 6', 'Dragon', 'Flying', 'Dual Type', 'Elite Four Ace', 'Ashs Pokemon'],
        pokedex: { text: 'Flying through the darkness, it weakens enemies with ultrasonic waves that could crush stone. Its fangs finish the fight.' }
    },
    {
        name: 'nosepass',
        categories: ['Gym Leader Ace', 'Gen 3', 'Rock', 'Single Type'],
        pokedex: { text: 'When endangered, it may protect itself by raising its magnetism and drawing iron objects to its body.' }
    },
    {
        name: 'onix',
        categories: ['Gym Leader Ace', 'Gen 1', 'Rock', 'Ground', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body.' }
    },
    {
        name: 'palossand',
        categories: ['Gen 7', 'Ghost', 'Ground', 'Dual Type', 'Elite Four Ace'],
        pokedex: { text: 'Once it has whipped up a sandstorm to halt its opponents in their tracks, this terrifying Pokemon snatches away their vitality.' }
    },
    {
        name: 'pichu',
        categories: ['Gen 2', 'Electric', 'Single Type', 'Baby Pokemon'],
        pokedex: { text: 'It is not yet skilled at storing electricity. It may send out a jolt if amused or startled.' }
    },
    {
        name: 'pidgeot',
        categories: ['Gen 1', 'Flying', 'Normal', 'Dual Type', 'Gym Leader Ace', 'Mega Evolution', 'Ashs Pokemon', 'Champions Pokemon'],
        pokedex: { text: 'It spreads its gorgeous wings widely to intimidate enemies. It races through the skies at Mach-2 speed.' }
    },
    {
        name: 'pidgeotto',
        categories: ['Gen 1', 'Flying', 'Normal', 'Victory Road Pokemon', 'Dual Type', 'Gym Leader Ace', 'Ashs Pokemon'],
        pokedex: { text: 'It has outstanding vision. However high it flies, it is able to distinguish the movements of its prey.' }
    },
    {
        name: 'pikachu',
        categories: ['Gen 1', 'Electric', 'Single Type', 'Gigantamax Pokemon', 'Happiness Evolution', 'Starter Pokemon', 'Ashs Pokemon'],
        pokedex: { text: 'Highly intelligent and prideful, it\'s famously difficult to handle–but that\'s also a reason for its popularity.' }
    },
    {
        name: 'piloswine',
        categories: ['Gym Leader Ace', 'Gen 2', 'Ground', 'Ice', 'Dual Type'],
        pokedex: { text: 'With its excellent sense of smell, it\'s even able to find mushrooms that are buried under frozen ground.' }
    },
    {
        name: 'poliwrath',
        categories: ['Gym Leader Ace', 'Gen 1', 'Water', 'Fighting', 'Dual Type', 'Stone Evolution'],
        pokedex: { text: 'This strong and skilled swimmer is even capable of crossing the Pacific Ocean just by kicking.' }
    },
    {
        name: 'primeape',
        categories: ['Gen 1', 'Fighting', 'Victory Road Pokemon', 'Single Type', 'Ashs Pokemon'],
        pokedex: { text: 'It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare.' }
    },
    {
        name: 'raichu',
        categories: ['Gym Leader Ace', 'Gen 1', 'Electric', 'Single Type', 'Stone Evolution'],
        pokedex: { text: 'When electricity builds up inside its body, it becomes feisty. It also glows in the dark.' }
    },
    {
        name: 'regice',
        categories: ['Gen 3', 'Ice', 'Single Type', 'Legendary Pokemon', 'Legendary Trio Pokemon'],
        pokedex: { text: 'It is said to have slept in a glacier for thousands of years. Its body can\'t be melted, even by magma.' }
    },
    {
        name: 'regirock',
        categories: ['Gen 3', 'Rock', 'Single Type', 'Legendary Pokemon', 'Legendary Trio Pokemon'],
        pokedex: { text: 'It is entirely composed of rocks with no sign of a brain or heart. It is a mystery even to modern scientists.' }
    },
    {
        name: 'registeel',
        categories: ['Gen 3', 'Steel', 'Single Type', 'Legendary Pokemon', 'Legendary Trio Pokemon'],
        pokedex: { text: 'Tempered by pressure underground over tens of thousands of years, its body cannot be scratched.' }
    },
    {
        name: 'remoraid',
        categories: ['Gen 2', 'Water', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'It has superb accuracy. The water it shoots out can strike even moving prey from more than 300 feet.' }
    },
    {
        name: 'rhydon',
        categories: ['Gym Leader Ace', 'Gen 1', 'Rock', 'Ground', 'Victory Road Pokemon', 'Dual Type', 'Champions Pokemon'],
        pokedex: { text: 'Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees Fahrenheit.' }
    },
    {
        name: 'rhyhorn',
        categories: ['Gym Leader Ace', 'Gen 1', 'Rock', 'Ground', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'Once it starts running, it doesn\'t stop. Its tiny brain makes it so stupid that it can\'t remember why it started running in the first place.' }
    },
    {
        name: 'rhyperior',
        categories: ['Gen 4', 'Rock', 'Ground', 'Trade Evolution', 'Dual Type', 'Elite Four Ace'],
        pokedex: { text: 'It can launch a rock held in its hand like a missile by tightening then expanding its muscles instantly.' }
    },
    {
        name: 'riolu',
        categories: ['Gen 4', 'Fighting', 'Single Type', 'Baby Pokemon', 'Ashs Pokemon'],
        pokedex: { text: 'The aura that emanates from its body intensifies to alert others if it is afraid or sad.' }
    },
    {
        name: 'roserade',
        categories: ['Gen 4', 'Grass', 'Poison', 'Dual Type', 'Gym Leader Ace', 'Stone Evolution'],
        pokedex: { text: 'Each of its hands contains different toxins, but both hands can jab with near-fatal power.' }
    },
    {
        name: 'sableye',
        categories: ['Gen 3', 'Ghost', 'Dark', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'It digs through the ground with its hard claws and crunches down gems with its thick pointy teeth. Carbink is its favorite food.' }
    },
    {
        name: 'salamence',
        categories: ['Gen 3', 'Dragon', 'Flying', 'Dual Type', 'Elite Four Ace', 'Pseudo Legendary', 'Mega Evolution'],
        pokedex: { text: 'Overjoyed at finally being able to fly, it flies all over the place and usually doesn\'t land until it\'s completely exhausted and needs to sleep.' }
    },
    {
        name: 'sandslash',
        categories: ['Gen 1', 'Ground', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'It uses its claws to climb trees and then curls its body into a spiny ball, ready to drop onto any prey that appears.' }
    },
    {
        name: 'scyther',
        categories: ['Gen 1', 'Bug', 'Flying', 'Dual Type', 'Gym Leader Ace'],
        pokedex: { text: 'It is nearly impossible to parry its attacking scythes. Its movements are like a ninja\'s.' }
    },
    {
        name: 'slaking',
        categories: ['Gen 3', 'Normal', 'Single Type', 'Gym Leader Ace'],
        pokedex: { text: 'The world\'s laziest Pokemon. It moves to another spot when there\'s no food left within its reach.' }
    },
    {
        name: 'smoochum',
        categories: ['Gen 2', 'Ice', 'Psychic', 'Dual Type', 'Baby Pokemon'],
        pokedex: { text: 'It actively runs about, but also falls often. Whenever it falls, it will check its reflection on a lake\'s surface to make sure its face hasn\'t become dirty.' }
    },
    {
        name: 'snivy',
        categories: ['Gen 5', 'Grass', 'Single Type', 'Starter Pokemon', 'Ashs Pokemon'],
        pokedex: { text: 'Being exposed to sunlight makes its movements swifter. It uses vines more adeptly than its hands.' }
    },
    {
        name: 'snorlax',
        categories: ['Gen 1', 'Normal', 'Single Type', 'Gigantamax Pokemon', 'Ashs Pokemon', 'Happiness Evolution'],
        pokedex: { text: 'This Pokemon\'s stomach is so strong, even eating moldy or rotten food will not affect it.' }
    },
    {
        name: 'solrock',
        categories: ['Gen 3', 'Rock', 'Psychic', 'Dual Type', 'Gym Leader Ace'],
        pokedex: { text: 'It absorbs solar energy during the day. Always expressionless, it can sense what its foe is thinking.' }
    },
    {
        name: 'starmie',
        categories: ['Gym Leader Ace', 'Gen 1', 'Water', 'Psychic', 'Dual Type', 'Stone Evolution'],
        pokedex: { text: 'Its unusual body shape, reminiscent of abstract art, led local people to spread rumors that this Pokemon may be an invader from outer space.' }
    },
    {
        name: 'steelix',
        categories: ['Gen 2', 'Ground', 'Steel', 'Victory Road Pokemon', 'Dual Type', 'Gym Leader Ace', 'Trade Evolution', 'Mega Evolution'],
        pokedex: { text: 'Its body has been compressed deep under the ground. As a result, it is even harder than a diamond.' }
    },
    {
        name: 'talonflame',
        categories: ['Gen 6', 'Flying', 'Fire', 'Dual Type', 'Elite Four Ace', 'Ashs Pokemon'],
        pokedex: { text: 'It attacks in a stealthy manner, without warning. Its sharp fangs are used to bite and suck blood.' }
    },
    {
        name: 'tentacool',
        categories: ['Gen 1', 'Water', 'Poison', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'It drifts aimlessly in waves. Very difficult to see in water, it may not be noticed until it stings.' }
    },
    {
        name: 'tentacruel',
        categories: ['Gen 1', 'Water', 'Poison', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'It fires off ultrasonic waves from its red orbs to weaken its prey, and then it wraps them up in its 80 tentacles.' }
    },
    {
        name: 'togepi',
        categories: ['Gen 2', 'Normal', 'Fairy', 'Dual Type', 'Baby Pokemon'],
        pokedex: { text: 'It is considered to be a symbol of good luck. Its shell is said to be filled with happiness.' }
    },
    {
        name: 'torkoal',
        categories: ['Gen 3', 'Fire', 'Single Type', 'Gym Leader Ace', 'Ashs Pokemon'],
        pokedex: { text: 'It battles using energy it gets from burning coal. When loosing smoke from its nostrils, it lets off a sound that is similar to a locomotive\'s horn.' }
    },
    {
        name: 'toucannon',
        categories: ['Gen 7', 'Flying', 'Normal', 'Dual Type', 'Elite Four Ace'],
        pokedex: { text: 'Known for forming harmonious couples, this Pokemon is brought to wedding ceremonies as a good luck charm.' }
    },
    {
        name: 'toxel',
        categories: ['Gen 8', 'Poison', 'Electric', 'Dual Type', 'Baby Pokemon'],
        pokedex: { text: 'It manipulates the chemical makeup of its poison to produce electricity. The voltage is weak, but it can cause a tingling paralysis.' }
    },
    {
        name: 'tyranitar',
        categories: ['Gen 2', 'Rock', 'Dark', 'Dual Type', 'Champions Pokemon', 'Pseudo Legendary', 'Mega Evolution'],
        pokedex: { text: 'This Pokemon is a mobile disaster, leaving mountains crumbled and houses destroyed in its wake.' }
    },
    {
        name: 'tyrogue',
        categories: ['Gen 2', 'Fighting', 'Single Type', 'Baby Pokemon'],
        pokedex: { text: 'It is always bursting with energy. To make itself stronger, it keeps on fighting even if it loses.' }
    },
    {
        name: 'ursaring',
        categories: ['Gen 2', 'Normal', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'Although it is a good climber, it prefers to snap trees with its forelegs and eat fallen Berries.' }
    },
    {
        name: 'uxie',
        categories: ['Gen 4', 'Psychic', 'Single Type', 'Legendary Trio Pokemon', 'Legendary Pokemon'],
        pokedex: { text: 'It is said that its emergence gave humans the intelligence to improve their quality of life.' }
    },
    {
        name: 'vivillon',
        categories: ['Gym Leader Ace', 'Gen 6', 'Flying', 'Bug', 'Dual Type'],
        pokedex: { text: 'The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust.' }
    },
    {
        name: 'venusaur',
        categories: ['Gen 1', 'Grass', 'Poison', 'Single Type', 'Champions Pokemon', 'Mega Evolution'],
        pokedex: { text: 'By spreading the broad petals of its flower and catching the sun\'s rays, it fills its body with power.' }
    },
    {
        name: 'venomoth',
        categories: ['Gym Leader Ace', 'Gen 1', 'Poison', 'Bug', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust.' }
    },
    {
        name: 'vileplume',
        categories: ['Gym Leader Ace', 'Gen 1', 'Poison', 'Grass', 'Dual Type', 'Stone Evolution'],
        pokedex: { text: 'The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.' }
    },
    {
        name: 'walrein',
        categories: ['Elite Four Ace', 'Gen 3', 'Water', 'Ice', 'Dual Type'],
        pokedex: { text: 'It swims through icy seas while shattering ice floes with its large tusks. It is protected by its thick blubber.' }
    },
    {
        name: 'wailmer',
        categories: ['Gen 3', 'Water', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'It swims along with its mouth open and swallows down seawater along with its food. It sprays excess water out of its nostrils.' }
    },
    {
        name: 'weezing',
        categories: ['Gen 1', 'Poison', 'Single Type', 'Gym Leader Ace'],
        pokedex: { text: 'This Pokemon lives and grows by absorbing poison gas, dust, and germs that exist inside garbage.' }
    },
    {
        name: 'whiscash',
        categories: ['Gen 3', 'Water', 'Rock', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'Mysteriously, it can foretell earthquakes. In the daytime, it sleeps in mud at the bottom of a pond. When it awakens, it continually feeds throughout the night.' }
    },
    {
        name: 'whismur',
        categories: ['Gen 3', 'Normal', 'Victory Road Pokemon', 'Single Type'],
        pokedex: { text: 'It usually murmurs, but starts crying loudly if it senses danger. It stops when its ear covers are shut.' }
    },
    {
        name: 'wynaut',
        categories: ['Gen 3', 'Psychic', 'Single Type', 'Baby Pokemon'],
        pokedex: { text: 'It tends to move in a pack. Individuals squash against one another to toughen their spirits.' }
    },
    {
        name: 'xatu',
        categories: ['Gen 2', 'Flying', 'Psychic', 'Dual Type', 'Elite Four Ace'],
        pokedex: { text: 'Once it begins to meditate at sunrise, the entire day will pass before it will move again.' }
    },
    {
        name: 'zacian',
        categories: ['Gen 8', 'Fairy', 'Legendary Pokemon', 'Single Type'],
        pokedex: { text: 'Known as a legendary hero, this Pokemon absorbs metal particles, transforming them into a weapon it uses to battle.' }
    },
    {
        name: 'zubat',
        categories: ['Gen 1', 'Flying', 'Poison', 'Victory Road Pokemon', 'Dual Type'],
        pokedex: { text: 'Capable of flying safely in dark places, it emits ultrasonic cries to check for any obstacles.' }
    },
]
