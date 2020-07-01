const pokemon = [
    {
        name: 'abomasnow',
        categories: ['Gym Leader Ace', 'Mega Evolution', 'Smash Ball'],
        pokedex: { text: 'It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.' }
    },
    {
        name: 'absol',
        categories: ['Elite Four Ace', 'Mega Evolution', 'Shadow Pokemon'],
        pokedex: { text: 'It appears when it senses an impending natural disaster. As a result, it was mistaken as a doom bringer.' }
    },
    {
        name: 'accelgor',
        categories: ['Trade Evolution'],
        pokedex: { text: 'Having removed its heavy shell, it becomes very light and can fight with ninja-like movements.' }
    },
    {
        name: 'aegislash',
        categories: ['Elite Four Ace', 'Stone Evolution'],
        pokedex: { text: 'Apparently, it can detect the innate qualities of leadership. According to legend, whoever it recognizes is destined to become king.' }
    },
    {
        name: 'aerodactyl',
        categories: ['Champions Team', 'Fossil Pokemon', 'Mega Evolution'],
        pokedex: { text: 'A Pokemon that roamed the skies in the dinosaur era. Its teeth are like saw blades.' }
    },
    {
        name: 'aggron',
        categories: ['Champions Team', 'Mega Evolution'],
        pokedex: { text: 'It claims a large mountain as its sole territory. It mercilessly thrashes those that violate its space.' }
    },
    {
        name: 'aggron',
        categories: ['Champions Team', 'Mega Evolution'],
        pokedex: { text: 'While seeking iron for food, it digs tunnels by breaking through bedrock with its steel horns.' }
    },
    {
        name: 'aggron',
        categories: ['Champions Team', 'Mega Evolution'],
        pokedex: { text: 'You can tell its age by the length of its iron horns. It claims an entire mountain as its territory.' }
    },
    {
        name: 'alakazam',
        categories: ['Gym Leader Ace', 'Trade Evolution', 'Champions Team', 'Mega Evolution'],
        pokedex: { text: 'Its highly developed brain is on par with a supercomputer. It can use all forms of psychic abilities.' }
    },
    {
        name: 'alcremie',
        categories: ['Gigantamax', 'Gym Leader Ace', 'Girls Only'],
        pokedex: { text: 'When it trusts a Trainer, it will treat them to berries it\'s decorated with cream.' }
    },
    {
        name: 'alolan dugtrio',
        categories: ['Regional Form'],
        pokedex: { text: 'Its metallic whiskers are heavy, so it\'s not very fast, but it has the power to dig through bedrock.' }
    },
    {
        name: 'alolan exeggutor',
        categories: ['Stone Evolution', 'Regional Form', 'Smash Ball'],
        pokedex: { text: 'As it grew taller and taller, it outgrew its reliance on psychic powers, while within it awakened the power of the sleeping dragon.' }
    },
    {
        name: 'alolan golem',
        categories: ['Trade Evolution', 'Regional Form'],
        pokedex: { text: 'It shoots large rocks that are charged with electricity. Tremendous electric shocks are flung out across the whole area of impact.' }
    },
    {
        name: 'alolan marowak',
        categories: ['Regional Form'],
        pokedex: { text: 'When it beats opponents with its bone, the cursed flames spread to them. No amount of water will stop those flames from burning.' }
    },
    {
        name: 'alolan meowth',
        categories: ['Regional Form'],
        pokedex: { text: 'Highly intelligent and prideful, it\'s famously difficult to handle–but that\'s also a reason for its popularity.' }
    },
    {
        name: 'alolan ninetales',
        categories: ['Stone Evolution'],
        pokedex: { text: 'It creates drops of ice in its coat and showers them over its enemies. Anyone who angers it will be frozen stiff in an instant.' }
    },
    {
        name: 'alolan persian',
        categories: ['Happiness Evolution'],
        pokedex: { text: 'Its round face and smooth coat—softer than the most high-class velvet—have made this a very popular Pokemon in Alola.' }
    },
    {
        name: 'alolan raichu',
        categories: ['Regional Form', 'Stone Evolution', 'Smash Ball'],
        pokedex: { text: 'It uses psychokinesis to control electricity. It hops aboard its own tail, using psychic power to lift the tail and move about while riding it.' }
    },
    {
        name: 'alolan raichu',
        categories: ['Regional Form', 'Stone Evolution', 'Smash Ball'],
        pokedex: { text: 'It loves pancakes prepared with a secret Alolan recipe. Some wonder whether that recipe holds the key to this Pokemons evolution.' }
    },
    {
        name: 'alolan rattata',
        categories: ['Regional Form', 'Route 1'],
        pokedex: { text: 'Night after night, they sneak into people\'s homes seeking food. A massive outbreak of them has become an issue of public concern.' }
    },
    {
        name: 'alolan sandslash',
        categories: ['Regional Form', 'Stone Evolution'],
        pokedex: { text: 'This Pokémon\'s steel spikes are sheathed in ice. Stabs from these spikes cause deep wounds and severe frostbite as well.' }
    },
    {
        name: 'alolan sandslash',
        categories: ['Regional Form', 'Stone Evolution'],
        pokedex: { text: 'A long, long time ago, it lived in the desert. With its sharp claws fully extended, it can climb right up an iceberg without slipping.' }
    },
    {
        name: 'altaria',
        categories: ['Gym Leader Ace', 'Mega Evolution'],
        pokedex: { text: 'It flies gracefully through the sky. Its melodic humming makes you feel like you\'re in a dream.' }
    },
    {
        name: 'amaura',
        categories: ['Fossil Pokemon', 'Gym Leader Ace'],
        pokedex: { text: 'This ancient Pokemon was restored from part of its body that had been frozen in ice for over 100 million years.' }
    },
    {
        name: 'ampharos',
        categories: ['Mega Evolution'],
        pokedex: { text: 'The tail\'s tip shines brightly and can be seen from far away. It acts as a beacon for lost people.' }
    },
    {
        name: 'ampharos',
        categories: ['Mega Evolution'],
        pokedex: { text: 'The light from its tail can be seen from space. This is why you can always tell exactly where it is, which is why it usually keeps the light off.' }
    },
    {
        name: 'anorith',
        categories: ['Fossil Pokemon'],
        pokedex: { text: 'This is one kind of primeval bug Pokemon. With eight wings, it could apparently swim a lot faster than you\'d expect.' }
    },
    {
        name: 'appletun',
        categories: ['Gigantamax'],
        pokedex: { text: 'Its body is covered in sweet nectar, and the skin on its back is especially yummy. Children used to have it as a snack.' }
    },
    {
        name: 'arbok',
        categories: ['Victory Road'],
        pokedex: { text: 'The latest research has determined that there are over 20 possible arrangements of the patterns on its stomach.' }
    },
    {
        name: 'arcanine',
        categories: ['Gym Leader Ace', 'Stone Evolution'],
        pokedex: { text: 'A Pokemon that has been admired since the past for its beauty. It runs agilely as if on wings.' }
    },
    {
        name: 'archen',
        categories: ['Fossil Pokemon'],
        pokedex: { text: 'Revived from a fossil, this Pokemon is thought to be the ancestor of all bird Pokemon.' }
    },
    {
        name: 'arctovish',
        categories: ['Fossil Pokemon'],
        pokedex: { text: 'Though it\'s able to capture prey by freezing its surroundings, it has trouble eating the prey afterward because its mouth is on top of its head.' }
    },
    {
        name: 'arctozolt',
        categories: ['Fossil Pokemon'],
        pokedex: { text: 'The shaking of its freezing upper half is what generates its electricity. It has a hard time walking around.' }
    },
    {
        name: 'armaldo',
        categories: ['Champions Team'],
        pokedex: { text: 'Its enormous, retractable claws can cut through most anything. Its entire body is clad in sturdy plates.' }
    },
    {
        name: 'aromatisse',
        categories: ['Trade Evolution'],
        pokedex: { text: 'Its scent is so overpowering that, unless a Trainer happens to really enjoy the smell, he or she will have a hard time walking alongside it.' }
    },
    {
        name: 'aron',
        categories: ['Victory Road'],
        pokedex: { text: 'It usually lives deep in mountains. However, hunger may drive it to eat railroad tracks and cars.' }
    },
    {
        name: 'articuno',
        categories: ['Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'The magnificent seemingly translucent wings of this legendary bird Pokemon are said to be made of ice.' }
    },
    {
        name: 'audino',
        categories: ['Mega Evolution'],
        pokedex: { text: 'Its auditory sense is astounding. It has a radar-like ability to understand its surrounding through slight sounds' }
    },
    {
        name: 'audino',
        categories: ['Mega Evolution'],
        pokedex: { text: 'Using the feelers on its ears, it can tell how someone is feeling or when an egg might hatch.' }
    },
    {
        name: 'azelf',
        categories: ['Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'Known as "The Being of Willpower." It sleeps at the bottom of a lake to keep the world in balance.' }
    },
    {
        name: 'azumarill',
        categories: ['Victory Road'],
        pokedex: { text: 'The bubble-like pattern on its stomach helps it camouflage itself when it\'s in the water.' }
    },
    {
        name: 'azurill',
        categories: ['Baby Pokemon'],
        pokedex: { text: 'Its tail, which is packed with nutrition, is very bouncy like a rubber ball. On sunny days they gather at the edge of water and splash about for fun.' }
    },
    {
        name: 'banette',
        categories: ['Mega Evolution'],
        pokedex: { text: 'Strong feelings of hatred turned a puppet into a Pokémon. If it opens its mouth, its cursed energy escapes.' }
    },
    {
        name: 'barbacle',
        categories: ['Elite Four Ace'],
        pokedex: { text: 'Having an eye on each palm allows it to keep watch in all directions. In a pinch, its limbs start to act on their own to ensure the enemy\'s defeat.' }
    },
    {
        name: 'barboach',
        categories: ['Victory Road'],
        pokedex: { text: 'It probes muddy riverbeds with its two long whiskers. A slimy film protects its body.' }
    },
    {
        name: 'bastiodon',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'The bones of its face are huge and hard, so they were mistaken for its spine until after this Pokemon was successfully restored.' }
    },
    {
        name: 'bayleef',
        categories: ['Ashs Pokemon', 'Shadow Pokemon'],
        pokedex: { text: 'The scent that wafts from the leaves on its neck causes anyone who smells it to become energetic.' }
    },
    {
        name: 'beartic',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'It freezes its breath to create fangs and claws of ice to fight with. Cold northern areas are its habitat.' }
    },
    {
        name: 'beedrill',
        categories: ['Ashs Pokemon', 'Mega Evolution', 'Forest Dweller'],
        pokedex: { text: 'Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.' }
    },
    {
        name: 'bellossom',
        categories: ['Stone Evolution', 'Smash Ball'],
        pokedex: { text: 'Plentiful in the tropics. When it dances, its petals rub together and make a pleasant ringing sound.' }
    },
    {
        name: 'bellossom',
        categories: ['Stone Evolution', 'Smash Ball'],
        pokedex: { text: 'Its flower petals deepen in color through exposure to sunlight. When cloudy weather persists, it does a dance that is thought to be a ritual for summoning the sun.' }
    },
    {
        name: 'bellsprout',
        categories: ['Route 1'],
        pokedex: { text: 'A kind of bug-eating plant that hunts small insects. It uses its roots as feet for walking.' }
    },
    {
        name: 'bidoof',
        categories: ['Route 1'],
        pokedex: { text: 'It constantly gnaws on logs and rocks to whittle down its front teeth. It nests alongside water.' }
    },
    {
        name: 'bisharp',
        categories: ['Elite Four Ace'],
        pokedex: { text: 'It leads a group of Pawniard. It battles to become the boss, but will be driven from the group if it loses.' }
    },
    {
        name: 'blastoise',
        categories: ['Champions Team', 'Mega Evolution'],
        pokedex: { text: 'It deliberately makes itself heavy so it can withstand the recoil of the water jets it fires.' }
    },
    {
        name: 'blaziken',
        categories: ['Mega Evolution'],
        pokedex: { text: 'It can clear a 30-story building in a leap. Its fiery punches scorch its foes.' }
    },
    {
        name: 'blaziken',
        categories: ['Mega Evolution'],
        pokedex: { text: 'It learns martial arts that use punches and kicks. Every several years, its old feathers burn off, and new, supple feathers grow back in their place.' }
    },
    {
        name: 'blipbug',
        categories: ['Route 1'],
        pokedex: { text: 'A constant collector of information, this Pokémon is very smart. Very strong is what it isn\'t.' }
    },
    {
        name: 'blissey',
        categories: ['Happiness Evolution', 'Girls Only'],
        pokedex: { text: 'It has a very compassionate nature. If it sees a sick Pokemon, it will nurse the sufferer back to health.' }
    },
    {
        name: 'bonsly',
        categories: ['Baby Pokemon'],
        pokedex: { text: 'In order to adjust the level of fluids in its body, it exudes water from its eyes. This makes it appear to be crying.' }
    },
    {
        name: 'bounsweet',
        categories: ['Girls Only'],
        pokedex: { text: 'Because of its sweet, delicious aroma, bird Pokémon are always after it, but it\'s not intelligent enough to care' }
    },
    {
        name: 'braviary',
        categories: ['Boys Only'],
        pokedex: { text: 'They fight for their friends without any thought about danger to themselves. One can carry a car while flying.' }
    },
    {
        name: 'braviary',
        categories: ['Boys Only'],
        pokedex: { text: 'Known as “the hero of the skies,” this Pokemon is so proud and so brave that it will never retreat, even when it\'s injured.' }
    },
    {
        name: 'bronzong',
        categories: ['Elite Four Ace', 'Genderless'],
        pokedex: { text: 'In ages past, this Pokemon was revered as a bringer of rain. It was found buried in the ground.' }
    },
    {
        name: 'budew',
        categories: ['Baby Pokemon', 'Forest Dweller'],
        pokedex: { text: 'It lives alongside clear ponds. It scatters pollen that induces harsh sneezing and runny noses.' }
    },
    {
        name: 'bulbasaur',
        categories: ['Starter Pokemon', 'Ashs Pokemon', 'Forest Dweller'],
        pokedex: { text: 'It is very agile. Before going to sleep, it extinguishes the flame on its tail to prevent fires.' }
    },
    {
        name: 'buneary',
        categories: ['Route 1'],
        pokedex: { text: 'When it senses danger, it perks up its ears. On cold nights, it sleeps with its head tucked into its fur.' }
    },
    {
        name: 'bunnelby',
        categories: ['Route 1'],
        pokedex: { text: 'It has ears like shovels. Digging holes strengthens its ears so much that they can sever thick roots effortlessly.' }
    },
    {
        name: 'butterfree',
        categories: ['Ashs Pokemon', 'Gigantamax', 'Forest Dweller'],
        pokedex: { text: 'In battle, it flaps its wings at high speed to release highly toxic dust into the air.' }
    },
    {
        name: 'camerupt',
        categories: ['Mega Evolution', 'Evil Leaders'],
        pokedex: { text: 'It lives in the crater of a volcano. It is well known that the humps on its back erupt every 10 years.' }
    },
    {
        name: 'caterpie',
        categories: ['Route 1', 'Ashs Pokemon', 'Forest Dweller'],
        pokedex: { text: 'For protection, it releases a horrible stench from the antennae on its head to drive away enemies.' }
    },
    {
        name: 'centiskorch',
        categories: ['Gym Leader Ace', 'Gigantamax'],
        pokedex: { text: 'While its burning body is already dangerous on its own, this excessively hostile Pokemon also has large and very sharp fangs.' }
    },
    {
        name: 'chandelure',
        categories: ['Elite Four Ace', 'Stone Evolution'],
        pokedex: { text: 'It absorbs a spirit, which it then burns. By waving the flames on its arms, it puts its foes into a hypnotic trance.' }
    },
    {
        name: 'chansey',
        categories: ['Victory Road', 'Girls Only'],
        pokedex: { text: 'Being few in number and difficult to capture, it is said to bring happiness to the Trainer who catches it.' }
    },
    {
        name: 'charizard',
        categories: ['Champions Team', 'Gigantamax', 'Mega Evolution', 'Ashs Pokemon'],
        pokedex: { text: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.' }
    },
    {
        name: 'charmander',
        categories: ['Ashs Pokemon', 'Starter Pokemon'],
        pokedex: { text: 'Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.' }
    },
    {
        name: 'charmeleon',
        categories: ['Ashs Pokemon'],
        pokedex: { text: 'Without pity, its sharp claws destroy foes. If it encounters a strong enemy, it becomes agitated, and the flame on its tail flares with a bluish white color.' }
    },
    {
        name: 'chikorita',
        categories: ['Starter Pokemon', 'Ashs Pokemon'],
        pokedex: { text: 'It loves to bask in the sunlight. It uses the leaf on its head to seek out warm places.' }
    },
    {
        name: 'chimchar',
        categories: ['Starter Pokemon', 'Ashs Pokemon'],
        pokedex: { text: 'It is very agile. Before going to sleep, it extinguishes the flame on its tail to prevent fires.' }
    },
    {
        name: 'chimecho',
        categories: ['Happiness Evolution'],
        pokedex: { text: 'It travels by riding on winds. It cleverly uses its long tail to pluck nuts and berries, which it loves to eat.' }
    },
    {
        name: 'chingling',
        categories: ['Baby Pokemon'],
        pokedex: { text: 'It emits high-frequency cries that people can\'t hear. Once it starts, it can cry for an awfully long time.' }
    },
    {
        name: 'cinccino',
        categories: ['Stone Evolution'],
        pokedex: { text: 'Their white fur is coated in a special oil that makes it easy for them to deflect attacks.' }
    },
    {
        name: 'cinccino',
        categories: ['Stone Evolution'],
        pokedex: { text: 'Their white fur feels amazing to touch. Their fur repels dust and prevents static electricity from building up.' }
    },
    {
        name: 'cinderace',
        categories: ['Gigantamax'],
        pokedex: { text: 'It\'s skilled at both offense and defense, and it gets pumped up when cheered on. But if it starts showboating, it could put itself in a tough spot.' }
    },
    {
        name: 'clamperl',
        categories: [],
        pokedex: { text: 'It makes a single pearl during its lifetime. The pearl is said to amplify psychic power.' }
    },
    {
        name: 'claydol',
        categories: ['Champions Team', 'Genderless'],
        pokedex: { text: 'An ancient clay figurine that came to life as a Pokemon from exposure to a mysterious ray of light.' }
    },
    {
        name: 'claydol',
        categories: ['Champions Team', 'Genderless'],
        pokedex: { text: 'If it gets wet, its body melts. When rain starts to fall, it wraps its whole body up with its psychic powers to protect itself.' }
    },
    {
        name: 'claydol',
        categories: ['Champions Team', 'Genderless'],
        pokedex: { text: 'This mysterious Pokemon started life as an ancient clay figurine made over 20,000 years ago.' }
    },
    {
        name: 'clefable',
        categories: ['Stone Evolution'],
        pokedex: { text: 'A timid fairy Pokemon that is rarely seen, it will run and hide the moment it senses people.' }
    },
    {
        name: 'clefairy',
        categories: ['Happiness Evolution'],
        pokedex: { text: 'The moonlight that it stores in the wings on its back apparently gives it the ability to float in midair.' }
    },
    {
        name: 'cleffa',
        categories: ['Baby Pokemon'],
        pokedex: { text: 'Many appear when the night skies are filled with shooting stars. They disappear with sunrise.' }
    },
    {
        name: 'cloyster',
        categories: ['Stone Evolution', 'Champions Team'],
        pokedex: { text: 'Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking.' }
    },
    {
        name: 'coalossal',
        categories: ['Gigantamax', 'Gym Leader Ace'],
        pokedex: { text: 'While it\'s engaged in battle, its mountain of coal will burn bright red, sending off sparks that scorch the surrounding area.' }
    },
    {
        name: 'conkeldurr',
        categories: ['Elite Four Ace', 'Trade Evolution'],
        pokedex: { text: 'Rather than rely on force, they master moves that utilize the centrifugal force of spinning concrete.' }
    },
    {
        name: 'copperajah',
        categories: ['Gigantamax'],
        pokedex: { text: 'These Pokemon live in herds. Their trunks have incredible grip strength, strong enough to crush giant rocks into powder.' }
    },
    {
        name: 'corviknight',
        categories: ['Gigantamax'],
        pokedex: { text: 'This Pokemon reigns supreme in the skies of the Galar region. The black luster of its steel body could drive terror into the heart of any foe.' }
    },
    {
        name: 'crabominable',
        categories: ['Elite Four Ace'],
        pokedex: { text: 'Before it stops to think, it just starts pummeling. There are records of its turning back avalanches with a flurry of punches.' }
    },
    {
        name: 'cradily',
        categories: ['Champions Team'],
        pokedex: { text: 'It ensnares prey with its eight tentacles. It then melts the prey with a strong acid before feeding.' }
    },
    {
        name: 'cradily',
        categories: ['Champions Team'],
        pokedex: { text: 'Normally, it lived on shallow sea shoals. When the tide went out, this Pokemon came up on land to search for prey.' }
    },
    {
        name: 'cranidos',
        categories: ['Gym Leader Ace', 'Fossil Pokemon'],
        pokedex: { text: 'It lived in jungles around 100 million years ago. Its skull is as hard as iron.' }
    },
    {
        name: 'cresselia',
        categories: ['Girls Only', 'Legendary Pokemon'],
        pokedex: { text: 'Shiny particles are released from its wings like a veil. It is said to represent the crescent moon.' }
    },
    {
        name: 'crobat',
        categories: ['Elite Four Ace', 'Happiness Evolution', 'Brock and Misty', 'Evil Leaders'],
        pokedex: { text: 'It flies so silently through the dark on its four wings that it may not be noticed even when nearby.' }
    },
    {
        name: 'cyndaquil',
        categories: ['Starter Pokemon', 'Ashs Pokemon'],
        pokedex: { text: 'It usually stays hunched over. If it is angry or surprised, it shoots flames out of its back.' }
    },
    {
        name: 'delcatty',
        categories: ['Stone Evolution'],
        pokedex: { text: 'Rather than keeping a permanent lair, it habitually seeks comfortable spots and sleeps there. It is nocturnal and becomes active at dusk.' }
    },
    {
        name: 'delcatty',
        categories: ['Stone Evolution'],
        pokedex: { text: 'The favorite of trend-conscious female Trainers, they are used in competition for their style and fur.' }
    },
    {
        name: 'delcatty',
        categories: ['Stone Evolution'],
        pokedex: { text: 'The reason it does not have a nest is that it simply searches for a clean, comfortable place then sleeps there' }
    },
    {
        name: 'dialga',
        categories: ['Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.' }
    },
    {
        name: 'diancie',
        categories: ['Mega Evolution', 'Legendary Pokemon'],
        pokedex: { text: 'It can instantly create many diamonds by compressing the carbon in the air between its hands.' }
    },
    {
        name: 'donphan',
        categories: ['Victory Road', 'Ashs Pokemon'],
        pokedex: { text: 'It attacks by curling up, then rolling into its foe. It can blow apart a house in one hit.' }
    },
    {
        name: 'dracovish',
        categories: ['Fossil Pokemon'],
        pokedex: { text: 'Its mighty legs are capable of running at speeds exceeding 40 mph, but this Pokemon can\'t breathe unless it\'s underwater.' }
    },
    {
        name: 'dracozolt',
        categories: ['Fossil Pokemon'],
        pokedex: { text: 'The powerful muscles in its tail generate its electricity. Compared to its lower body, its upper half is entirely too small.' }
    },
    {
        name: 'dragapult',
        categories: [],
        pokedex: { text: 'When it isn\'t battling, it keeps Dreepy in the holes on its horns. Once a fight starts, it launches the Dreepy like supersonic missiles.' }
    },
    {
        name: 'dragonite',
        categories: ['Champions Team', 'Elite Four Ace', 'Ashs Pokemon'],
        pokedex: { text: 'It can fly in spite of its big and bulky physique. It circles the globe in just 16 hours.' }
    },
    {
        name: 'drapion',
        categories: ['Elite Four Ace', 'Evil Leaders'],
        pokedex: { text: 'It takes pride in its strength. Even though it can tear foes apart, it finishes them off with powerful poison.' }
    },
    {
        name: 'drednaw',
        categories: ['Gym Leader Ace', 'Gigantamax'],
        pokedex: { text: 'This Pokemon rapidly extends its retractable neck to sink its sharp fangs into distant enemies and take them down.' }
    },
    {
        name: 'dugtrio',
        categories: ['Evil Leaders'],
        pokedex: { text: 'Its three heads bob separately up and down to loosen the soil nearby, making it easier for it to burrow.' }
    },
    {
        name: 'duraludon',
        categories: ['Gym Leader Ace', 'Gigantamax'],
        pokedex: { text: 'The special metal that composes its body is very light, so this Pokemon has considerable agility. It lives in caves because it dislikes the rain.' }
    },
    {
        name: 'dusclops',
        categories: ['Elite Four Ace'],
        pokedex: { text: 'It is thought that its body is hollow with only a spectral ball of fire burning inside. However, no one has been able to confirm this theory as fact.' }
    },
    {
        name: 'dusknoir',
        categories: ['Trade Evolution'],
        pokedex: { text: 'This feared Pokemon is said to travel to worlds unknown. Some even believe that it takes lost spirits along with it.' }
    },
    {
        name: 'eelektross',
        categories: ['Stone Evolution'],
        pokedex: { text: 'It latches on to prey with its sucker mouth, sinking in its fangs and shocking the prey with powerful electricity.' }
    },
    {
        name: 'eevee',
        categories: ['Starter Pokemon', 'Gigantamax', 'Smash Ball'],
        pokedex: { text: 'Because its genetic makeup is irregular, it quickly changes its form due to a variety of causes.' }
    },
    {
        name: 'eldegoss',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'The seeds attached to its cotton fluff are full of nutrients. It spreads them on the wind so that plants and other Pokemon can benefit from them.' }
    },
    {
        name: 'electivire',
        categories: ['Gym Leader Ace', 'Trade Evolution'],
        pokedex: { text: 'It pushes the tips of its two tails against the foe, then lets loose with over 20,000 volts of power.' }
    },
    {
        name: 'elekid',
        categories: ['Baby Pokemon'],
        pokedex: { text: 'It rotates its arms to generate electricity, but it tires easily, so it charges up only a little bit.' }
    },
    {
        name: 'entei',
        categories: ['Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'A Pokémon that races across the land. It is said that one is born every time a new volcano appears.' }
    },
    {
        name: 'escavalier',
        categories: ['Trade Evolution'],
        pokedex: { text: 'They fly around at high speed, striking with their pointed spears. Even when in trouble, they face opponents bravely.' }
    },
    {
        name: 'espeon',
        categories: ['Happiness Evolution'],
        pokedex: { text: 'Its fur has the look and feel of velvet. The orb on its forehead glows when it uses psycho-power.' }
    },
    {
        name: 'excadrill',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'More than 300 feet below the surface, they build mazelike nests. Their activity can be destructive to subway tunnels.' }
    },
    {
        name: 'excadrill',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'Forming a drill with its steel claws and head, it can bore through a steel plate, no matter how thick it is.' }
    },
    {
        name: 'exeggutor',
        categories: ['Champions Team', 'Stone Evolution'],
        pokedex: { text: 'Its three heads think independently. However, they are friendly and never appear to squabble.' }
    },
    {
        name: 'flabebe',
        categories: ['Girls Only'],
        pokedex: { text: 'When it finds a flower it likes, it dwells on that flower its whole life long. It floats in the wind\'s embrace with an untroubled heart.' }
    },
    {
        name: 'flapple',
        categories: ['Gigantamax'],
        pokedex: { text: 'It flies on wings of apple skin and spits a powerful acid. It can also change its shape into that of an apple.' }
    },
    {
        name: 'flareon',
        categories: ['Stone Evolution', 'Champions Team'],
        pokedex: { text: 'It has a flame bag inside its body. After inhaling deeply, it blows out flames of nearly 3,100 degrees Fahrenheit.' }
    },
    {
        name: 'fletchling',
        categories: ['Route 1'],
        pokedex: { text: 'These friendly Pokémon send signals to one another with beautiful chirps and tail-feather movements.' }
    },
    {
        name: 'floatzel',
        categories: ['Victory Road', 'Gym Leader Ace'],
        pokedex: { text: 'It floats using its well-developed flotation sac. It assists in the rescues of drowning people.' }
    },
    {
        name: 'floette',
        categories: ['Girls Only'],
        pokedex: { text: 'It flutters around fields of flowers and cares for flowers that are starting to wilt. It draws out the power of flowers to battle.' }
    },
    {
        name: 'florges',
        categories: ['Stone Evolution'],
        pokedex: { text: 'Its life can span several hundred years. It\'s said to devote its entire life to protecting gardens.' }
    },
    {
        name: 'fraxure',
        categories: ['Victory Road'],
        pokedex: { text: 'A broken tusk will not grow back, so it diligently sharpens its tusks on river rocks after the end of a battle.' }
    },
    {
        name: 'froslass',
        categories: ['Gym Leader Ace', 'Stone Evolution', 'Girls Only'],
        pokedex: { text: 'After a woman met her end on a snowy mountain, her regrets lingered on. From them, this Pokemon was born. Its favorite food is frozen souls.' }
    },
    {
        name: 'gabite',
        categories: ['Victory Road'],
        pokedex: { text: 'It sheds its skin and gradually grows larger. Its scales can be ground into a powder and used as raw materials for traditional medicine.' }
    },
    {
        name: 'galarian darmanitan',
        categories: ['Regional Form', 'Stone Evolution'],
        pokedex: { text: 'Though it has a gentle disposition, it\'s also very strong. It will quickly freeze the snowball on its head before going for a headbutt.' }
    },
    {
        name: 'galarian meowth',
        categories: ['Regional Form'],
        pokedex: { text: 'Living with a savage, seafaring people has toughened this Pokemon\'s body so much that parts of it have turned to iron.' }
    },
    {
        name: 'galarian ponyta',
        categories: ['Regional Form'],
        pokedex: { text: 'Its small horn hides a healing power. With a few rubs from this Pokemon\'s horn, any slight wound you have will be healed.' }
    },
    {
        name: 'gallade',
        categories: ['Elite Four Ace', 'Stone Evolution', 'Mega Evolution', 'Boys Only'],
        pokedex: { text: 'When protecting someone, it extends its elbows as if they were swords and fights savagely.' }
    },
    {
        name: 'gallade',
        categories: ['Elite Four Ace', 'Stone Evolution', 'Mega Evolution', 'Boys Only'],
        pokedex: { text: 'A master of courtesy and swordsmanship, it fights using extending swords on its elbows.' }
    },
    {
        name: 'gallade',
        categories: ['Elite Four Ace', 'Stone Evolution', 'Mega Evolution', 'Boys Only'],
        pokedex: { text: 'Sharply attuned to others\' wishes for help, this Pokemon seeks out those in need and aids them in battle.' }
    },
    {
        name: 'garbodor',
        categories: ['Gigantamax'],
        pokedex: { text: 'Consuming garbage makes new kinds of poison gases and liquids inside their bodies.' }
    },
    {
        name: 'garchomp',
        categories: ['Champions Team', 'Mega Evolution'],
        pokedex: { text: 'It flies at speeds equal to a jet fighter plane. It never allows its prey to escape.' }
    },
    {
        name: 'garchomp',
        categories: ['Champions Team', 'Mega Evolution'],
        pokedex: { text: 'When it folds up its body and extends its wings, it looks like a jet plane. It flies at sonic speed.' }
    },
    {
        name: 'gardevoir',
        categories: ['Mega Evolution', 'Smash Ball'],
        pokedex: { text: 'To protect its Trainer, it will expend all its psychic power to create a small black hole.' }
    },
    {
        name: 'gardevoir',
        categories: ['Mega Evolution', 'Smash Ball'],
        pokedex: { text: 'It apparently does not feel the pull of gravity because it supports itself with psychic power. It will give its life to protect its Trainer.' }
    },
    {
        name: 'gastrodon',
        categories: ['Champions Team'],
        pokedex: { text: 'It has strong regenerative capabilities. Even if parts of it are bitten off by fish Pokemon, it will return to normal within a few hours.' }
    },
    {
        name: 'gastrodon',
        categories: ['Champions Team'],
        pokedex: { text: 'Their shape and color change, depending on their environment and diet. There are many of them at beaches where the waves are calm.' }
    },
    {
        name: 'gastrodon',
        categories: ['Champions Team'],
        pokedex: { text: 'The softness of its body helps disperse the force of impacts, so although its body is uncommonly squishy, it\'s also surprisingly resilient.' }
    },
    {
        name: 'gengar',
        categories: ['Gym Leader Ace', 'Trade Evolution', 'Mega Evolution', 'Elite Four Ace', 'Gigantamax'],
        pokedex: { text: 'Lurking in the shadowy corners of rooms, it awaits chances to steal its prey\'s life force.' }
    },
    {
        name: 'geodude',
        categories: ['Victory Road', 'Brock and Misty', 'Brock and Misty'],
        pokedex: { text: 'Commonly found near mountain trails, etc. If you step on one by accident, it gets angry.' }
    },
    {
        name: 'genesect',
        categories: ['Legendary Pokemon'],
        pokedex: { text: 'This Pokemon existed 300 million years ago. Team Plasma altered it and attached a cannon to its back.' }
    },
    {
        name: 'gigalith',
        categories: ['Trade Evolution'],
        pokedex: { text: 'The solar energy absorbed by its body\'s orange crystals is magnified internally and fired from its mouth.' }
    },
    {
        name: 'giratina',
        categories: ['Legendary Pokemon', 'Legendary Trio', 'Smash Ball'],
        pokedex: { text: 'This Pokemon is said to live in a world on the reverse side of ours, where common knowledge is distorted and strange.' }
    },
    {
        name: 'glaceon',
        categories: ['Stone Evolution'],
        pokedex: { text: 'It can control its body temperature at will. This enables it to freeze the moisture in the atmosphere, creating flurries of diamond dust.' }
    },
    {
        name: 'glalie',
        categories: ['Mega Evolution'],
        pokedex: { text: 'Its prey is instantaneously frozen stiff by the cold air it exhales from its huge mouth. While they\'re in that frozen state, it gobbles them up.' }
    },
    {
        name: 'glalie',
        categories: ['Mega Evolution'],
        pokedex: { text: 'It has a body of ice that won\'t melt, even with fire. It can instantly freeze moisture in the atmosphere.' }
    },
    {
        name: 'glalie',
        categories: ['Mega Evolution'],
        pokedex: { text: 'To protect itself, it clads its body in an armor of ice, made by freezing moisture in the air.' }
    },
    {
        name: 'golbat',
        categories: ['Victory Road', 'Brock and Misty'],
        pokedex: { text: 'It attacks in a stealthy manner, without warning. Its sharp fangs are used to bite and suck blood.' }
    },
    {
        name: 'goldeen',
        categories: ['Victory Road', 'Brock and Misty', 'Smash Ball'],
        pokedex: { text: 'Though it appears very elegant when swimming with fins unfurled, it can jab powerfully with its horn.' }
    },
    {
        name: 'golem',
        categories: ['Trade Evolution'],
        pokedex: { text: 'Even dynamite can\'t harm its hard, boulderlike body. It sheds its hide just once a year.' }
    },
    {
        name: 'goodra',
        categories: ['Ashs Pokemon'],
        pokedex: { text: 'Sometimes it misunderstands instructions and appears dazed or bewildered. Many Trainers don\'t mind, finding this behavior to be adorable.' }
    },
    {
        name: 'gorebyss',
        categories: ['Trade Evolution'],
        pokedex: { text: 'It lives at the bottom of the sea. In the springtime, its pink body turns more vivid for some reason.' }
    },
    {
        name: 'gothitelle',
        categories: ['Elite Four Ace'],
        pokedex: { text: 'They can predict the future from the placement and movement of the stars. They can see Trainers\' life spans.' }
    },
    {
        name: 'gourgeist',
        categories: ['Trade Evolution'],
        pokedex: { text: 'It enwraps its prey in its hairlike arms. It sings joyfully as it observes the suffering of its prey.' }
    },
    {
        name: 'graveler',
        categories: ['Victory Road'],
        pokedex: { text: 'With a free and uncaring nature, it doesn\'t mind if pieces break off while it rolls down mountains.' }
    },
    {
        name: 'grimmsnarl',
        categories: ['Gigantamax', 'Boys Only'],
        pokedex: { text: 'With the hair wrapped around its body helping to enhance its muscles, this Pokemon can overwhelm even Machamp.' }
    },
    {
        name: 'grookey',
        categories: ['Starter Pokemon'],
        pokedex: { text: 'It attacks with rapid beats of its stick. As it strikes with amazing speed, it gets more and more pumped.' }
    },
    {
        name: 'groudon',
        categories: ['Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'It had been asleep in underground magma ever since it fiercely fought Kyogre long ago.' }
    },
    {
        name: 'grovyle',
        categories: ['Ashs Pokemon'],
        pokedex: { text: 'It lives in dense jungles. While closing in on its prey, it leaps from branch to branch.' }
    },
    {
        name: 'grubbin',
        categories: ['Route 1'],
        pokedex: { text: 'They often gather near places frequented by electric Pokémon in order to avoid being attacked by bird Pokémon.' }
    },
    {
        name: 'gyarados',
        categories: ['Victory Road', 'Champions Team', 'Evil Leaders', 'Brock and Misty', 'Mega Evolution'],
        pokedex: { text: 'It fires hyper beams in all directions, burning the surrounding area to ash. There are some regions where it\'s called “the deity of destruction.”' }
    },
    {
        name: 'gyarados',
        categories: ['Victory Road', 'Champions Team', 'Evil Leaders', 'Brock and Misty', 'Mega Evolution'],
        pokedex: { text: 'Extremely vicious and horribly brutal. Has enough destructive power to totally annihilate even a major city.' }
    },
    {
        name: 'gyarados',
        categories: ['Victory Road', 'Champions Team', 'Evil Leaders', 'Brock and Misty', 'Mega Evolution'],
        pokedex: { text: 'The energy from evolution stimulated its brain cells strongly, causing it to become very ferocious.' }
    },
    {
        name: 'happiny',
        categories: ['Baby Pokemon', 'Girls Only'],
        pokedex: { text: 'It likes to carry around a small rock. It may wander around others\' feet and cause them to stumble.' }
    },
    {
        name: 'hariyama',
        categories: ['Victory Road'],
        pokedex: { text: 'Although they enjoy comparing their strength, they\'re also kind. They value etiquette, praising opponents they battle.' }
    },
    {
        name: 'hatenna',
        categories: ['Girls Only'],
        pokedex: { text: 'Via the protrusion on its head, it senses other creatures\' emotions. If you don\'t have a calm disposition, it will never warm up to you.' }
    },
    {
        name: 'hatterene',
        categories: ['Gigantamax', 'Girls Only'],
        pokedex: { text: 'If you\'re too loud around it, you risk being torn apart by the claws on its tentacle. This Pokemon is also known as the Forest Witch.' }
    },
    {
        name: 'hattrem',
        categories: ['Girls Only'],
        pokedex: { text: 'No matter who you are, if you bring strong emotions near this Pokémon, it will silence you violently.' }
    },
    {
        name: 'haxorus',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'They are kind but can be relentless when defending territory. They challenge foes with tusks that can cut steel.' }
    },
    {
        name: 'haxorus',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'Their sturdy tusks will stay sharp even if used to cut steel beams. These Pokémon are covered in hard armor.' }
    },
    {
        name: 'heracross',
        categories: ['Ashs Pokemon', 'Mega Evolution', 'Shadow Pokemon'],
        pokedex: { text: 'It zooms directly at its prey at flight speeds of close to 310 mph, while fiery embers scatter from gaps in its feathers.' }
    },
    {
        name: 'heliolisk',
        categories: ['Stone Evolution'],
        pokedex: { text: 'It stimulates its muscles with electricity, boosting the strength in its legs and enabling it to run 100 yards in five seconds.' }
    },
    {
        name: 'hippowdon',
        categories: ['Elite Four Ace'],
        pokedex: { text: 'It blasts internally stored sand from ports on its body to create a towering twister for attack.' }
    },
    {
        name: 'hitmonchan',
        categories: ['Victory Road', 'Boys Only'],
        pokedex: { text: 'Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.' }
    },
    {
        name: 'hitmonchan',
        categories: ['Victory Road', 'Boys Only'],
        pokedex: { text: 'Adept at punching invisibly quick at bullet-train speed. It takes a break every three minutes as it moves around.' }
    },
    {
        name: 'hitmonchan',
        categories: ['Victory Road', 'Boys Only'],
        pokedex: { text: 'Punches in corkscrew fashion. It can punch its way through a concrete wall like a drill.' }
    },
    {
        name: 'hitmonlee',
        categories: ['Victory Road', 'Boys Only'],
        pokedex: { text: 'When kicking, the sole of its foot turns as hard as a diamond on impact and destroys its enemy.' }
    },
    {
        name: 'hitmonlee',
        categories: ['Victory Road', 'Boys Only'],
        pokedex: { text: 'This amazing Pokemon has an awesome sense of balance. It can kick in succession from any position.' }
    },
    {
        name: 'hitmonlee',
        categories: ['Victory Road', 'Boys Only'],
        pokedex: { text: 'Its legs freely stretch and contract. Using these springlike limbs, it bowls over foes with devastating kicks. After battle, it rubs down its tired legs.' }
    },
    {
        name: 'hitmontop',
        categories: ['Boys Only'],
        pokedex: { text: 'It fights while spinning like a top. The centrifugal force boosts its destructive power by ten.' }
    },
    {
        name: 'honchkrow',
        categories: ['Stone Evolution', 'Evil Leaders'],
        pokedex: { text: 'It will absolutely not forgive failure from or betrayal by its goons. It has no choice in this if it wants to maintain the order of the flock.' }
    },
    {
        name: 'honchkrow',
        categories: ['Stone Evolution', 'Evil Leaders'],
        pokedex: { text: 'Its goons take care of most of the fighting for it. The only time it dirties its own hands is in delivering a final blow to finish off an opponent.' }
    },
    {
        name: 'hoothoot',
        categories: ['Route 1'],
        pokedex: { text: 'It always stands on one foot. It changes feet so fast, the movement can rarely be seen.' }
    },
    {
        name: 'hoppip',
        categories: ['Route 1'],
        pokedex: { text: 'To keep from being blown away by the wind, they gather in clusters. They do enjoy gentle breezes, though.' }
    },
    {
        name: 'houndoom',
        categories: ['Elite Four Ace', 'Mega Evolution', 'Shadow Pokemon', 'Evil Leaders'],
        pokedex: { text: 'They spew flames mixed with poison to finish off their opponents. They divvy up their prey evenly among the members of their pack.' }
    },
    {
        name: 'huntail',
        categories: ['Trade Evolution'],
        pokedex: { text: 'It lives deep in the sea. With a tail shaped like a small fish, it attracts unsuspecting prey.' }
    },
    {
        name: 'hydreigon',
        categories: ['Evil Leaders'],
        pokedex: { text: 'This brutal Pokemon travels the skies on its six wings. Anything that moves seems like a foe to it, triggering its attack.' }
    },
    {
        name: 'igglybuff',
        categories: ['Baby Pokemon'],
        pokedex: { text: 'Its extremely flexible and elastic body makes it bounce continuously—anytime, anywhere.' }
    },
    {
        name: 'illumise',
        categories: ['Girls Only'],
        pokedex: { text: 'With its sweet aroma, it guides Volbeat to draw signs with light in the night sky.' }
    },
    {
        name: 'impdimp',
        categories: ['Boys Only'],
        pokedex: { text: 'It sneaks into people\'s homes, stealing things and feasting on the negative energy of the frustrated occupants.' }
    },
    {
        name: 'impdimp',
        categories: ['Boys Only'],
        pokedex: { text: 'Through its nose, it sucks in the emanations produced by people and Pokemon when they feel annoyed. It thrives off this negative energy.' }
    },
    {
        name: 'infernape',
        categories: ['Elite Four Ace'],
        pokedex: { text: 'It uses unique fighting moves with fire on its hands and feet. It will take on any opponent.' }
    },
    {
        name: 'inteleon',
        categories: ['Gigantamax'],
        pokedex: { text: 'It has many hidden capabilities, such as fingertips that can shoot water and a membrane on its back that it can use to glide through the air.' }
    },
    {
        name: 'jellicent',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'They propel themselves by expelling absorbed seawater from their bodies. Their favorite food is life energy.' }
    },
    {
        name: 'jigglypuff',
        categories: ['Route 1', 'Happiness Evolution'],
        pokedex: { text: 'It hugely inflates its stomach and sings a mysterious melody. If you hear this melody, you\'ll become sleepy right away.' }
    },
    {
        name: 'jolteon',
        categories: ['Stone Evolution', 'Champions Team'],
        pokedex: { text: 'Its cells generate weak power that is amplified by its fur\'s static electricity to drop thunderbolts. The bristling fur is made of electrically charged needles.' }
    },
    {
        name: 'jynx',
        categories: ['Girls Only'],
        pokedex: { text: 'It seductively wiggles its hips as it walks. It can cause people to dance in unison with it.' }
    },
    {
        name: 'kabuto',
        categories: ['Fossil Pokemon'],
        pokedex: { text: 'A Pokemon that was recovered from a fossil. It used the eyes on its back while hiding on the seafloor.' }
    },
    {
        name: 'kadabra',
        categories: ['Victory Road'],
        pokedex: { text: 'It emits special alpha waves from its body that induce headaches just by being close.' }
    },
    {
        name: 'kangaskhan',
        categories: ['Mega Evolution', 'Girls Only'],
        pokedex: { text: 'To protect its young, it will never give up during battle, no matter how badly wounded it is.' }
    },
    {
        name: 'kingdra',
        categories: ['Gym Leader Ace', 'Trade Evolution'],
        pokedex: { text: 'It sleeps quietly, deep on the seafloor. When it comes up to the surface, it creates a huge whirlpool that can swallow even ships.' }
    },
    {
        name: 'kingler',
        categories: ['Gigantamax', 'Ashs Pokemon'],
        pokedex: { text: 'It can hardly lift its massive, overgrown pincer. The pincers size makes it difficult to aim properly.' }
    },
    {
        name: 'kommo-o',
        categories: [],
        pokedex: { text: 'When it spots enemies, it threatens them by jingling the scales on its tail. Weak opponents will crack and flee in panic.' }
    },
    {
        name: 'krabby',
        categories: ['Ashs Pokemon'],
        pokedex: { text: 'Its pincers are not only powerful weapons, they are used for balance when walking sideways.' }
    },
    {
        name: 'kricketot',
        categories: ['Route 1'],
        pokedex: { text: 'It chats with others using the sounds of its colliding antennae. These sounds are fall hallmarks.' }
    },
    {
        name: 'kyogre',
        categories: ['Legendary Pokemon', 'Legendary Trio', 'Smash Ball'],
        pokedex: { text: 'It is said to have widened the seas by causing downpours. It had been asleep in a marine trench.' }
    },
    {
        name: 'kyurem',
        categories: ['Legendary Pokemon', 'Legendary Trio', 'Smash Ball'],
        pokedex: { text: 'It generates a powerful, freezing energy inside itself, but its body became frozen when the energy leaked out.' }
    },
    {
        name: 'lairon',
        categories: ['Victory Road'],
        pokedex: { text: 'It loves iron ore. Groups of them fight for territory by bashing one another with their steel bodies.' }
    },
    {
        name: 'landorus',
        categories: ['Boys Only', 'Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'The energy that comes pouring from its tail increases the nutrition in the soil, making crops grow to great size.' }
    },
    {
        name: 'lapras',
        categories: ['Elite Four Ace', 'Gigantamax', 'Ashs Pokemon'],
        pokedex: { text: 'These Pokemon were once near extinction due to poaching. Following protective regulations, there is now an overabundance of them.' }
    },
    {
        name: 'latias',
        categories: ['Girls Only', 'Legendary Pokemon', 'Smash Ball', 'Mega Evolution'],
        pokedex: { text: 'It can telepathically communicate with people. It changes its appearance using its down that refracts light.' }
    },
    {
        name: 'latias',
        categories: ['Girls Only', 'Legendary Pokemon', 'Smash Ball', 'Mega Evolution'],
        pokedex: { text: 'They make a small herd of only several members. They rarely make contact with people or other Pokemon. They disappear if they sense enemies.' }
    },
    {
        name: 'latios',
        categories: ['Boys Only', 'Legendary Pokemon', 'Smash Ball', 'Mega Evolution'],
        pokedex: { text: 'It has a docile temperament and dislikes fighting. Tucking in its forelegs, it can fly faster than a jet plane.' }
    },
    {
        name: 'latios',
        categories: ['Boys Only', 'Legendary Pokemon', 'Smash Ball', 'Mega Evolution'],
        pokedex: { text: 'It understands human speech and is highly intelligent. It is a tender Pokemon that dislikes fighting.' }
    },
    {
        name: 'leafeon',
        categories: ['Stone Evolution'],
        pokedex: { text: 'With cells similar to those of plants, it performs photosynthesis inside its body and creates pure air.' }
    },
    {
        name: 'leavanny',
        categories: ['Happiness Evolution', 'Gym Leader Ace'],
        pokedex: { text: 'Upon finding a small Pokemon, it weaves clothing for it from leaves, using the cutters on its arms and sticky silk.' }
    },
    {
        name: 'ledyba',
        categories: ['Route 1'],
        pokedex: { text: 'It is very timid. It will be afraid to move if it is alone. But it will be active if it is in a group.' }
    },
    {
        name: 'lileep',
        categories: ['Fossil Pokemon'],
        pokedex: { text: 'In ancient times, it lived in warm seas. It disguised itself as seaweed to ambush its prey and devoured them whole when they got close.' }
    },
    {
        name: 'lilligant',
        categories: ['Stone Evolution', 'Girls Only'],
        pokedex: { text: 'Even veteran Trainers face a challenge in getting its beautiful flower to bloom. This Pokémon is popular with celebrities.' }
    },
    {
        name: 'lilligant',
        categories: ['Stone Evolution', 'Girls Only'],
        pokedex: { text: 'It\'s well liked by other Pokémon because of its beauty. The flower on its head needs constant care, or it will soon wither and rot.' }
    },
    {
        name: 'lillipup',
        categories: ['Gym Leader Ace', 'Route 1'],
        pokedex: { text: 'Though it is a very brave Pokémon, it\'s also smart enough to check its foe\'s strength and avoid battle.' }
    },
    {
        name: 'lillipup',
        categories: ['Gym Leader Ace', 'Route 1'],
        pokedex: { text: 'Because it doesn\'t yelp, it\'s extremely popular with Trainers who live in apartment buildings.' }
    },
    {
        name: 'lopunny',
        categories: ['Happiness Evolution', 'Mega Evolution'],
        pokedex: { text: 'An extremely cautious Pokemon. It cloaks its body with its fluffy ear fur when it senses danger.' }
    },
    {
        name: 'loudred',
        categories: ['Victory Road'],
        pokedex: { text: 'When it stomps its feet and bellows, it generates ultrasonic waves that can blow apart a house.' }
    },
    {
        name: 'lucario',
        categories: ['Gym Leader Ace', 'Happiness Evolution', 'Champions Team', 'Mega Evolution'],
        pokedex: { text: 'It can discern the physical and emotional states of people, Pokemon, and other natural things from the shape of their aura waves.' }
    },
    {
        name: 'lucario',
        categories: ['Gym Leader Ace', 'Happiness Evolution', 'Champions Team', 'Mega Evolution'],
        pokedex: { text: 'It can tell what people are thinking. Only Trainers who have justice in their hearts can earn this Pokemon\'s trust.' }
    },
    {
        name: 'lucario',
        categories: ['Gym Leader Ace', 'Happiness Evolution', 'Champions Team', 'Mega Evolution'],
        pokedex: { text: 'By reading the auras of all things, it can tell how others are feeling from over half a mile away.' }
    },
    {
        name: 'ludicolo',
        categories: ['Champions Team', 'Stone Evolution'],
        pokedex: { text: 'If it hears festive music, all its muscles fill with energy. It can\'t help breaking out into a dance.' }
    },
    {
        name: 'lunala',
        categories: ['Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'Records of it exist in writings from long, long ago, where it was known by the name “the beast that calls the moon.”' }
    },
    {
        name: 'lunatone',
        categories: ['Gym Leader Ace', 'Genderless'],
        pokedex: { text: 'It becomes very active on the night of a full moon. This Pokemon was first discovered 40 years ago at the site of a meteor strike.' }
    },
    {
        name: 'luvdisc',
        categories: ['Victory Road'],
        pokedex: { text: 'It lives in warm seas. It is said that a couple finding this Pokemon will be blessed with eternal love.' }
    },
    {
        name: 'luxray',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'When its eyes gleam gold, it can spot hiding prey--even those taking shelter behind a wall.' }
    },
    {
        name: 'lycanroc',
        categories: ['Elite Four Ace', 'Ashs Pokemon'],
        pokedex: { text: 'Its quick movements confuse its enemies. Well equipped with claws and fangs, it also uses the sharp rocks in its mane as weapons.' }
    },
    {
        name: 'machamp',
        categories: ['Elite Four Ace', 'Trade Evolution', 'Gigantamax', 'Gym Leader Ace'],
        pokedex: { text: 'With four arms, it can attack and defend simultaneously. It\'s said to have mastered every martial art in the world.' }
    },
    {
        name: 'machoke',
        categories: ['Victory Road'],
        pokedex: { text: 'It happily carries heavy cargo to toughen up. It willingly does hard work for people.' }
    },
    {
        name: 'machop',
        categories: ['Victory Road'],
        pokedex: { text: 'Very powerful in spite of its small size. Its mastery of many types of martial arts makes it very tough.' }
    },
    {
        name: 'magby',
        categories: ['Baby Pokemon'],
        pokedex: { text: 'Its magma-like blood circulates throughout its body. Its body\'s heat can top 1,100 degrees F.' }
    },
    {
        name: 'magikarp',
        categories: ['Victory Road'],
        pokedex: { text: 'It is virtually worthless in terms of both power and speed. It is the most weak and pathetic Pokemon in the world.' }
    },
    {
        name: 'magmortar',
        categories: ['Elite Four Ace', 'Trade Evolution'],
        pokedex: { text: 'It blasts fireballs of over 3,600 degrees Fahrenheit from the ends of its arms. It lives in volcanic craters.' }
    },
    {
        name: 'magneton',
        categories: ['Victory Road', 'Gym Leader Ace', 'Champions Team', 'Genderless'],
        pokedex: { text: 'Generates strange radio signals. It raises the temperature by 3.6 degrees Fahrenheit within 3,300 feet.' }
    },
    {
        name: 'makuhita',
        categories: ['Victory Road', 'Gym Leader Ace'],
        pokedex: { text: 'It toughens its body by slamming into thick trees. Many snapped trees can be found near its nest.' }
    },
    {
        name: 'mandibuzz',
        categories: ['Girls Only'],
        pokedex: { text: 'Watching from the sky, they swoop to strike weakened Pokémon on the ground. They decorate themselves with bones.' }
    },
    {
        name: 'manectric',
        categories: ['Gym Leader Ace', 'Mega Evolution'],
        pokedex: { text: 'It discharges electricity from its mane. It creates a thundercloud overhead to drop lightning bolts.' }
    },
    {
        name: 'mantyke',
        categories: ['Baby Pokemon'],
        pokedex: { text: 'When it swims close to the surface of the ocean, people aboard ships are able to observe the pattern on its back.' }
    },
    {
        name: 'marill',
        categories: ['Happiness Evolution'],
        pokedex: { text: 'The tip of its tail, which contains oil that is lighter than water, lets it swim without drowning.' }
    },
    {
        name: 'marowak',
        categories: ['Victory Road'],
        pokedex: { text: 'Originally, it was weak and timid. After evolution, its temperament becomes violent, and it begins to wield bones as weapons.' }
    },
    {
        name: 'mawile',
        categories: ['Victory Road', 'Mega Evolution'],
        pokedex: { text: 'A cunning and terrifying Pokemon, its cuteness makes opponents let down their guard—and then it swallows them whole with its huge jaws.' }
    },
    {
        name: 'medicham',
        categories: ['Victory Road', 'Mega Evolution'],
        pokedex: { text: 'Through crushingly harsh yoga training, it gained the power to foretell its foe\'s actions. It battles with elegant, dance-like movement.' }
    },
    {
        name: 'meditite',
        categories: ['Victory Road', 'Shadow Pokemon'],
        pokedex: { text: 'It always trains deep in mountains. It levitates when it heightens its spiritual power through meditation.' }
    },
    {
        name: 'melmetal',
        categories: ['Gigantamax', 'Legendary Pokemon', 'Ashs Pokemon'],
        pokedex: { text: 'Revered long ago for its capacity to create iron from nothing, for some reason it has come back to life after 3,000 years.' }
    },
    {
        name: 'meltan',
        categories: ['Legendary Pokemon', 'Ashs Pokemon'],
        pokedex: { text: 'It dissolves and eats metal. Circulating liquid metal within its body is how it generates energy.' }
    },
    {
        name: 'meowth',
        categories: ['Gigantamax', 'Smash Ball'],
        pokedex: { text: 'Highly intelligent and prideful, it\'s famously difficult to handle–but that\'s also a reason for its popularity.' }
    },
    {
        name: 'mesprit',
        categories: ['Legendary Trio', 'Legendary Pokemon'],
        pokedex: { text: 'This Pokemon is said to have endowed the human heart with emotions, such as sorrow and joy.' }
    },
    {
        name: 'metagross',
        categories: ['Champions Team', 'Mega Evolution', 'Genderless', 'Shadow Pokemon', 'Smash Ball'],
        pokedex: { text: 'It firmly pins its prey using its four claws and large body. Then the teeth in the mouth on its stomach chew the prey to bits.' }
    },
    {
        name: 'metagross',
        categories: ['Champions Team', 'Mega Evolution', 'Genderless', 'Shadow Pokemon', 'Smash Ball'],
        pokedex: { text: 'It boasts not only psychic powers but also fantastic strength. It grabs its prey with its four legs and holds them in place with its claws.' }
    },
    {
        name: 'metagross',
        categories: ['Champions Team', 'Mega Evolution', 'Genderless', 'Shadow Pokemon', 'Smash Ball'],
        pokedex: { text: 'With four linked brains, it\'s more intelligent than a supercomputer, and it uses calculations to analyze foes.' }
    },
    {
        name: 'mew',
        categories: ['Legendary Pokemon', 'Smash Ball'],
        pokedex: { text: 'Its DNA is said to contain the genetic codes of all Pokémon, so it can use all kinds of techniques.' }
    },
    {
        name: 'mewtwo',
        categories: ['Legendary Pokemon', 'Mega Evolution'],
        pokedex: { text: 'A vicious psychic Pokémon created by genetic engineering. Its cold, glowing eyes strike fear into its enemy.' }
    },
    {
        name: 'mightyena',
        categories: ['Evil Leaders'],
        pokedex: { text: 'It will always obey the commands of a skilled trainer. Its behavior arises from its living in packs in ancient times.' }
    },
    {
        name: 'milcery',
        categories: ['Girls Only'],
        pokedex: { text: 'This Pokemon was born from sweet-smelling particles in the air. Its body is made of cream.' }
    },
    {
        name: 'milotic',
        categories: ['Gym Leader Ace', 'Trade Evolution', 'Champions Team'],
        pokedex: { text: 'It is said to live at the bottom of large lakes. Considered to be the most beautiful of all Pokemon, it has been depicted in paintings and statues.' }
    },
    {
        name: 'milotic',
        categories: ['Gym Leader Ace', 'Trade Evolution', 'Champions Team'],
        pokedex: { text: 'Its lovely scales are described as rainbow colored. They change color depending on the viewing angle.' }
    },
    {
        name: 'miltank',
        categories: ['Gym Leader Ace', 'Girls Only', 'Shadow Pokemon'],
        pokedex: { text: 'Its milk is delicious and chock-full of nutrients. However, if you drink too much, it could make your stomach hurt, so be careful.' }
    },
    {
        name: 'mime jr',
        categories: ['Baby Pokemon'],
        pokedex: { text: 'It likes places where people gather. It mimics foes to confuse them, then makes its getaway.' }
    },
    {
        name: 'mismagius',
        categories: ['Gym Leader Ace', 'Stone Evolution'],
        pokedex: { text: 'Its cries sound like incantations to torment the foe. It appears where you least expect it.' }
    },
    {
        name: 'moltres',
        categories: ['Victory Road', 'Legendary Pokemon', 'Legendary Trio', 'Smash Ball'],
        pokedex: { text: 'One of the legendary bird Pokemon. It is said that its appearance indicates the coming of spring.' }
    },
    {
        name: 'morgrem',
        categories: ['Boys Only'],
        pokedex: { text: 'With sly cunning, it tries to lure people into the woods. Some believe it to have the power to make crops grow' }
    },
    {
        name: 'mothim',
        categories: ['Boys Only'],
        pokedex: { text: 'It does not keep a nest. It flies over fields and mountains in constant search of floral honey.' }
    },
    {
        name: 'mothim',
        categories: ['Boys Only'],
        pokedex: { text: 'While it loves floral honey, it won\'t gather any itself. Instead, it plots to steal some from Combee.' }
    },
    {
        name: 'mudkip',
        categories: ['Starter Pokemon'],
        pokedex: { text: 'Its large tail fin propels it through water with powerful acceleration. It is strong in spite of its size.' }
    },
    {
        name: 'muk',
        categories: ['Ashs Pokemon', 'Evil Leaders'],
        pokedex: { text: 'A toxic fluid seeps from its body. The fluid instantly kills plants and trees on contact.' }
    },
    {
        name: 'munchlax',
        categories: ['Baby Pokemon', 'Route 1'],
        pokedex: { text: 'It wolfs down its weight in food once a day, swallowing food whole with almost no chewing.' }
    },
    {
        name: 'musharna',
        categories: ['Stone Evolution'],
        pokedex: { text: 'With the mist from its forehead, it can create shapes of things from dreams it has eaten.' }
    },
    {
        name: 'musharna',
        categories: ['Stone Evolution'],
        pokedex: { text: 'It drowses and dreams all the time. It\'s best to leave it be if it\'s just woken up, as it\'s a terrible grump when freshly roused from sleep.' }
    },
    {
        name: 'necrozma',
        categories: ['Gym Leader Ace', 'Genderless'],
        pokedex: { text: 'It needs light to survive, and it goes on a rampage seeking it out. Its laser beams will cut anything to pieces.' }
    },
    {
        name: 'nickit',
        categories: ['Route 1'],
        pokedex: { text: 'Cunning and cautious, this Pokémon survives by stealing food from others. It erases its tracks with swipes of its tail as it makes off with its plunder.' }
    },
    {
        name: 'nidoking',
        categories: ['Boys Only', 'Stone Evolution', 'Evil Leaders'],
        pokedex: { text: 'Its steel-like hide adds to its powerful tackle. Its horns are so hard, they can pierce a diamond.' }
    },
    {
        name: 'nidoking',
        categories: ['Boys Only', 'Stone Evolution', 'Evil Leaders'],
        pokedex: { text: 'It is recognized by its rock-hard hide and its extended horn. Be careful with the horn, as it contains venom' }
    },
    {
        name: 'nidoqueen',
        categories: ['Girls Only', 'Stone Evolution', 'Evil Leaders'],
        pokedex: { text: 'Its entire body is armored with hard scales. It will protect the young in its burrow with its life.' }
    },
    {
        name: 'nidoran',
        categories: ['Boys Only'],
        pokedex: { text: 'Its large ears are always kept upright. If it senses danger, it will attack with a poisonous sting.' }
    },
    {
        name: 'nidoran',
        categories: ['Boys Only'],
        pokedex: { text: 'It scans its surroundings by raising its ears out of the grass. Its toxic horn is for protection.' }
    },
    {
        name: 'nidoran',
        categories: ['Girls Only'],
        pokedex: { text: 'A mild-mannered Pokemon that does not like to fight. Beware, its small horns secrete venom.' }
    },
    {
        name: 'nidoran',
        categories: ['Girls Only'],
        pokedex: { text: 'Small and very docile, it protects itself with its small, poisonous horn when attacked.' }
    },
    {
        name: 'nidorina',
        categories: ['Girls Only'],
        pokedex: { text: 'When resting deep in its burrow, its barbs always retract. This is proof that it is relaxed.' }
    },
    {
        name: 'nidorino',
        categories: ['Boys Only'],
        pokedex: { text: 'An aggressive Pokemon that is quick to attack. The horn on its head secretes a powerful venom.' }
    },
    {
        name: 'nidorino',
        categories: ['Boys Only'],
        pokedex: { text: 'Its horn is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.' }
    },
    {
        name: 'ninetales',
        categories: ['Champions Team', 'Stone Evolution'],
        pokedex: { text: 'Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.' }
    },
    {
        name: 'noctowl',
        categories: ['Ashs Pokemon', 'Shadow Pokemon', 'Forest Dweller'],
        pokedex: { text: 'When it needs to think, it rotates its head 180 degrees to sharpen its intellectual power.' }
    },
    {
        name: 'noivern',
        categories: ['Elite Four Ace', 'Ashs Pokemon'],
        pokedex: { text: 'Flying through the darkness, it weakens enemies with ultrasonic waves that could crush stone. Its fangs finish the fight.' }
    },
    {
        name: 'nosepass',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'When endangered, it may protect itself by raising its magnetism and drawing iron objects to its body.' }
    },
    {
        name: 'obstagoon',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'It evolved after experiencing numerous fights. While crossing its arms, it lets out a shout that would make any opponent flinch.' }
    },
    {
        name: 'oddish',
        categories: ['Route 1'],
        pokedex: { text: 'It may be mistaken for a clump of weeds. If you try to yank it out of the ground, it shrieks horribly.' }
    },
    {
        name: 'oddish',
        categories: ['Route 1'],
        pokedex: { text: 'This Pokémon grows by absorbing moonlight. During the daytime, it buries itself in the ground, leaving only its leaves exposed to avoid detection by its enemies.' }
    },
    {
        name: 'omanyte',
        categories: ['Fossil Pokemon'],
        pokedex: { text: 'Revived from an ancient fossil, this Pokemon uses air stored in its shell to sink and rise in water.' }
    },
    {
        name: 'onix',
        categories: ['Gym Leader Ace', 'Victory Road', 'Brock and Misty'],
        pokedex: { text: 'It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body.' }
    },
    {
        name: 'orbeetle',
        categories: ['Gigantamax'],
        pokedex: { text: 'It emits psychic energy to observe and study what\'s around it—and what\'s around it can include things over six miles away.' }
    },
    {
        name: 'palkia',
        categories: ['Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'Its total control over the boundaries of space enable it to transport itself to faraway places or even other dimensions.' }
    },
    {
        name: 'palossand',
        categories: ['Elite Four Ace'],
        pokedex: { text: 'Once it has whipped up a sandstorm to halt its opponents in their tracks, this terrifying Pokemon snatches away their vitality.' }
    },
    {
        name: 'panpour',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'The water stored inside the tuft on its head is full of nutrients. Plants that receive its water grow large.' }
    },
    {
        name: 'pansage',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'It shares the leaf on its head with weary-looking Pokémon. These leaves are known to relieve stress.' }
    },
    {
        name: 'pansear',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'Very intelligent, it roasts berries before eating them. It likes to help people.' }
    },
    {
        name: 'patrat',
        categories: ['Route 1'],
        pokedex: { text: 'Extremely cautious, they take shifts to maintain a constant watch of their nest. They feel insecure without a lookout.' }
    },
    {
        name: 'persian',
        categories: ['Evil Leaders'],
        pokedex: { text: 'The gem in its forehead glows on its own! It walks with all the grace and elegance of a proud queen.' }
    },
    {
        name: 'petilil',
        categories: ['Girls Only'],
        pokedex: { text: 'The leaves on its head are very bitter. Eating one of these leaves is known to refresh a tired body.' }
    },
    {
        name: 'phanpy',
        categories: ['Ashs Pokemon'],
        pokedex: { text: 'It swings its long snout around playfully, but because it is so strong, this can be dangerous.' }
    },
    {
        name: 'pichu',
        categories: ['Baby Pokemon', 'Route 1'],
        pokedex: { text: 'It is not yet skilled at storing electricity. It may send out a jolt if amused or startled.' }
    },
    {
        name: 'pidgeot',
        categories: ['Gym Leader Ace', 'Mega Evolution', 'Ashs Pokemon', 'Champions Team', 'Forest Dweller'],
        pokedex: { text: 'It spreads its gorgeous wings widely to intimidate enemies. It races through the skies at Mach-2 speed.' }
    },
    {
        name: 'pidgeotto',
        categories: ['Victory Road', 'Gym Leader Ace', 'Ashs Pokemon', 'Forest Dweller'],
        pokedex: { text: 'It has outstanding vision. However high it flies, it is able to distinguish the movements of its prey.' }
    },
    {
        name: 'pidgey',
        categories: ['Route 1'],
        pokedex: { text: 'Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.' }
    },
    {
        name: 'pidgey',
        categories: ['Route 1'],
        pokedex: { text: 'Does not like to fight. It hides in tall grass and so on, foraging for food such as small bugs.' }
    },
    {
        name: 'pikachu',
        categories: ['Gigantamax', 'Happiness Evolution', 'Starter Pokemon', 'Ashs Pokemon', 'Forest Dweller'],
        pokedex: { text: 'While sleeping, it generates electricity in the sacs in its cheeks. If it\'s not getting enough sleep, it will be able to use only weak electricity.' }
    },
    {
        name: 'pikipek',
        categories: ['Route 1'],
        pokedex: { text: 'It can peck at a rate of 16 times a second to drill holes in trees. It uses the holes for food storage and for nesting.' }
    },
    {
        name: 'piloswine',
        categories: ['Gym Leader Ace', 'Shadow Pokemon'],
        pokedex: { text: 'With its excellent sense of smell, it\'s even able to find mushrooms that are buried under frozen ground.' }
    },
    {
        name: 'pinsir',
        categories: ['Mega Evolution'],
        pokedex: { text: 'Its two long pincer horns are powerful. Once they grip an enemy, they won\'t release until the foe is torn.' }
    },
    {
        name: 'pinsir',
        categories: ['Mega Evolution'],
        pokedex: { text: 'Its two long pincer horns are powerful. Once they grip an enemy, they won\'t release until the foe is torn.' }
    },
    {
        name: 'politoed',
        categories: ['Trade Evolution', 'Brock and Misty'],
        pokedex: { text: 'The curled hair on its head proves its status as a king. It is said that the longer and curlier the hair, the more respect it earns from its peers.' }
    },
    {
        name: 'poliwrath',
        categories: ['Gym Leader Ace', 'Stone Evolution'],
        pokedex: { text: 'This strong and skilled swimmer is even capable of crossing the Pacific Ocean just by kicking.' }
    },
    {
        name: 'poochyena',
        categories: ['Route 1'],
        pokedex: { text: 'It savagely threatens foes with bared fangs. It chases after fleeing targets tenaciously. It turns tail and runs, however, if the foe strikes back.' }
    },
    {
        name: 'porygon',
        categories: ['Genderless'],
        pokedex: { text: 'Using the most advanced technologies, scientists finally succeeded in making the first artificial Pokemon.' }
    },
    {
        name: 'porygon2',
        categories: ['Trade Evolution', 'Genderless'],
        pokedex: { text: 'It was created by humans using the power of science. It has been given artificial intelligence that enables it to learn new gestures and emotions on its own.' }
    },
    {
        name: 'porygon-z',
        categories: ['Trade Evolution', 'Genderless'],
        pokedex: { text: 'Its behavior is noticeably unstable, which is apparently due to the incompetence of the engineer who updated its programming.' }
    },
    {
        name: 'primeape',
        categories: ['Victory Road', 'Ashs Pokemon'],
        pokedex: { text: 'It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare.' }
    },
    {
        name: 'purrloin',
        categories: ['Route 1'],
        pokedex: { text: 'They steal from people for fun, but their victims can\'t help but forgive them. Their deceptively cute act is perfect.' }
    },
    {
        name: 'quilava',
        categories: ['Ashs Pokemon', 'Shadow Pokemon'],
        pokedex: { text: 'This Pokemon is fully covered by nonflammable fur. It can withstand any kind of fire attack.' }
    },
    {
        name: 'raichu',
        categories: ['Gym Leader Ace', 'Stone Evolution'],
        pokedex: { text: 'When electricity builds up inside its body, it becomes feisty. It also glows in the dark.' }
    },
    {
        name: 'raikou',
        categories: ['Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'A Pokémon that races across the land while barking a cry that sounds like crashing thunder.' }
    },
    {
        name: 'rattata',
        categories: ['Route 1'],
        pokedex: { text: 'Bites anything when it attacks. Small and very quick, it is a common sight in many places.' }
    },
    {
        name: 'rattata',
        categories: ['Route 1'],
        pokedex: { text: 'It searches for food all day. It gnaws on hard objects to wear down its fangs, which grow constantly during its lifetime.' }
    },
    {
        name: 'rayquaza',
        categories: ['Legendary Pokemon', 'Legendary Trio', 'Mega Evolution'],
        pokedex: { text: 'It lives in the ozone layer far above the clouds and cannot be seen from the ground.' }
    },
    {
        name: 'regice',
        categories: ['Legendary Pokemon'],
        pokedex: { text: 'It is said to have slept in a glacier for thousands of years. Its body can\'t be melted, even by magma.' }
    },
    {
        name: 'regirock',
        categories: ['Legendary Pokemon'],
        pokedex: { text: 'It is entirely composed of rocks with no sign of a brain or heart. It is a mystery even to modern scientists.' }
    },
    {
        name: 'registeel',
        categories: ['Legendary Pokemon'],
        pokedex: { text: 'Tempered by pressure underground over tens of thousands of years, its body cannot be scratched.' }
    },
    {
        name: 'remoraid',
        categories: ['Victory Road'],
        pokedex: { text: 'It has superb accuracy. The water it shoots out can strike even moving prey from more than 300 feet.' }
    },
    {
        name: 'reshiram',
        categories: ['Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'This Pokemon appears in legends. It sends flames into the air from its tail, burning up everything around it.' }
    },
    {
        name: 'rhydon',
        categories: ['Gym Leader Ace', 'Victory Road', 'Champions Team', 'Evil Leaders'],
        pokedex: { text: 'Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees Fahrenheit.' }
    },
    {
        name: 'rhyhorn',
        categories: ['Gym Leader Ace', 'Victory Road', 'Evil Leaders'],
        pokedex: { text: 'Once it starts running, it doesn\'t stop. Its tiny brain makes it so stupid that it can\'t remember why it started running in the first place.' }
    },
    {
        name: 'rhyperior',
        categories: ['Trade Evolution', 'Elite Four Ace'],
        pokedex: { text: 'It can launch a rock held in its hand like a missile by tightening then expanding its muscles instantly.' }
    },
    {
        name: 'rillaboom',
        categories: ['Gigantamax'],
        pokedex: { text: 'The one with the best drumming techniques becomes the boss of the troop. It has a gentle disposition and values harmony among its group.' }
    },
    {
        name: 'riolu',
        categories: ['Baby Pokemon', 'Ashs Pokemon'],
        pokedex: { text: 'The aura that emanates from its body intensifies to alert others if it is afraid or sad.' }
    },
    {
        name: 'rookidee',
        categories: ['Route 1'],
        pokedex: { text: 'It will bravely challenge any opponent, no matter how powerful. This Pokémon benefits from every battle—even a defeat increases its strength a bit.' }
    },
    {
        name: 'roselia',
        categories: ['Happiness Evolution'],
        pokedex: { text: 'It uses the different poisons in each hand separately when it attacks. The stronger its aroma, the healthier it is.' }
    },
    {
        name: 'roserade',
        categories: ['Gym Leader Ace', 'Stone Evolution', 'Champions Team'],
        pokedex: { text: 'Each of its hands contains different toxins, but both hands can jab with near-fatal power.' }
    },
    {
        name: 'roserade',
        categories: ['Gym Leader Ace', 'Stone Evolution', 'Champions Team'],
        pokedex: { text: 'Luring prey with a sweet scent, it uses poison whips on its arms to poison, bind, and finish off the prey.' }
    },
    {
        name: 'roserade',
        categories: ['Gym Leader Ace', 'Stone Evolution', 'Champions Team'],
        pokedex: { text: 'With the movements of a dancer, it strikes with whips that are densely lined with poison thorns.' }
    },
    {
        name: 'rufflet',
        categories: ['Boys Only'],
        pokedex: { text: 'They crush berries with their talons. They bravely stand up to any opponent, no matter how strong it is.' }
    },
    {
        name: 'rufflet',
        categories: ['Boys Only'],
        pokedex: { text: 'It stands up to massive opponents, not out of courage, but out of recklessness. But that is how it gets stronger.' }
    },
    {
        name: 'sableye',
        categories: ['Victory Road', 'Mega Evolution'],
        pokedex: { text: 'It digs through the ground with its hard claws and crunches down gems with its thick pointy teeth. Carbink is its favorite food.' }
    },
    {
        name: 'salamence',
        categories: ['Elite Four Ace', 'Mega Evolution'],
        pokedex: { text: 'Overjoyed at finally being able to fly, it flies all over the place and usually doesn\'t land until it\'s completely exhausted and needs to sleep.' }
    },
    {
        name: 'salazzle',
        categories: ['Girls Only'],
        pokedex: { text: 'Filled with pheromones, its poisonous gas can be diluted to use in the production of luscious perfumes.' }
    },
    {
        name: 'sandaconda',
        categories: ['Gigantamax'],
        pokedex: { text: 'When it contracts its body, over 220 pounds of sand sprays from its nose. If it ever runs out of sand, it becomes disheartened.' }
    },
    {
        name: 'sandslash',
        categories: ['Victory Road', 'Champions Team'],
        pokedex: { text: 'It uses its claws to climb trees and then curls its body into a spiny ball, ready to drop onto any prey that appears.' }
    },
    {
        name: 'sawk',
        categories: ['Boys Only'],
        pokedex: { text: 'Tying their belts gets them pumped and makes their punches more destructive. Disturbing their training angers them.' }
    },
    {
        name: 'sawk',
        categories: ['Boys Only'],
        pokedex: { text: 'Desiring the strongest karate chop, they seclude themselves in mountains and train without sleeping.' }
    },
    {
        name: 'scatterbug',
        categories: ['Route 1'],
        pokedex: { text: 'When under attack from bird Pokémon, it spews a poisonous black powder that causes paralysis on contact.' }
    },
    {
        name: 'sceptile',
        categories: ['Ashs Pokemon', 'Mega Evolution'],
        pokedex: { text: 'It lives in dense jungles. While closing in on its prey, it leaps from branch to branch.' }
    },
    {
        name: 'scizor',
        categories: ['Trade Evolution', 'Mega Evolution', 'Smash Ball'],
        pokedex: { text: 'This Pokemon\'s pincers, which contain steel, can crush any hard object it gets a hold of into bits.' }
    },
    {
        name: 'scyther',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'It is nearly impossible to parry its attacking scythes. Its movements are like a ninja\'s.' }
    },
    {
        name: 'sentret',
        categories: ['Route 1'],
        pokedex: { text: 'A very cautious Pokémon, it raises itself up using its tail to get a better view of its surroundings.' }
    },
    {
        name: 'sentret',
        categories: ['Route 1'],
        pokedex: { text: 'When acting as a lookout, it warns others of danger by screeching and hitting the ground with its tail.' }
    },
    {
        name: 'sharpedo',
        categories: ['Mega Evolution', 'Evil Leaders'],
        pokedex: { text: 'The vicious and sly gangster of the sea. Its skin is specially textured to minimize drag in water. Its speed tops out at over 75 mph per hour.' }
    },
    {
        name: 'sharpedo',
        categories: ['Mega Evolution', 'Evil Leaders'],
        pokedex: { text: 'Its fangs rip through sheet iron. It swims at 75 mph and is known as "The Bully of the Sea."' }
    },
    {
        name: 'shieldon',
        categories: ['Fossil Pokemon'],
        pokedex: { text: 'It habitually polishes its face by rubbing it against tree trunks. It is weak to attacks from behind.' }
    },
    {
        name: 'shiftry',
        categories: ['Stone Evolution'],
        pokedex: { text: 'A Pokémon that was feared as a forest guardian. It can read the foe\'s mind and take preemptive action.' }
    },
    {
        name: 'shiftry',
        categories: ['Stone Evolution'],
        pokedex: { text: 'It lives quietly in the deep forest. It is said to create chilly winter winds with the fans it holds.' }
    },
    {
        name: 'silvally',
        categories: ['Happiness Evolution', 'Legendary Pokemon'],
        pokedex: { text: 'Its trust in its partner is what awakens it. This Pokemon is capable of changing its type, a flexibility that is well displayed in battle.' }
    },
    {
        name: 'simisage',
        categories: ['Stone Evolution'],
        pokedex: { text: 'It strikes its enemies with a thorn-covered tail. The leaf on its head is bitter.' }
    },
    {
        name: 'simipour',
        categories: ['Stone Evolution'],
        pokedex: { text: 'The high-pressure water expelled from its tail is so powerful, it can destroy a concrete wall.' }
    },
    {
        name: 'simisear',
        categories: ['Stone Evolution'],
        pokedex: { text: 'It loves sweets because they become energy for the fire burning inside its body.' }
    },
    {
        name: 'skarmory',
        categories: ['Champions Team', 'Victory Road'],
        pokedex: { text: 'Its sturdy wings look heavy, but they are actually hollow and light, allowing it to fly freely in the sky.' }
    },
    {
        name: 'skarmory',
        categories: ['Champions Team', 'Victory Road'],
        pokedex: { text: 'The feathers that it sheds are very sharp. It is said that people once used the feathers as swords.' }
    },
    {
        name: 'skarmory',
        categories: ['Champions Team', 'Victory Road'],
        pokedex: { text: 'Despite being clad entirely in iron-hard armor, it flies at speed of over 180 mph.' }
    },
    {
        name: 'skarmory',
        categories: ['Champions Team', 'Victory Road'],
        pokedex: { text: 'Its metal body is sturdy, but it does rust rather easily. So on rainy days, this Pokemon prefers to stay put in its nest.' }
    },
    {
        name: 'skwovet',
        categories: ['Route 1'],
        pokedex: { text: 'Found throughout the Galar region, this Pokémon becomes uneasy if its cheeks are ever completely empty of berries.' }
    },
    {
        name: 'slaking',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'The world\'s laziest Pokemon. It moves to another spot when there\'s no food left within its reach.' }
    },
    {
        name: 'slowbro',
        categories: ['Mega Evolution'],
        pokedex: { text: 'Naturally dull to begin with, it lost its ability to feel pain due to Shellder\'s seeping poison.' }
    },
    {
        name: 'slowking',
        categories: ['Trade Evolution'],
        pokedex: { text: 'It has incredible intellect and intuition. Whatever the situation, it remains calm and collected.' }
    },
    {
        name: 'slurpuff',
        categories: ['Trade Evolution'],
        pokedex: { text: 'It can distinguish the faintest of scents. It puts its sensitive sense of smell to use by helping pastry chefs in their work.' }
    },
    {
        name: 'smoochum',
        categories: ['Baby Pokemon', 'Girls Only'],
        pokedex: { text: 'It actively runs about, but also falls often. Whenever it falls, it will check its reflection on a lake\'s surface to make sure its face hasn\'t become dirty.' }
    },
    {
        name: 'snivy',
        categories: ['Starter Pokemon', 'Ashs Pokemon', 'Smash Ball'],
        pokedex: { text: 'Being exposed to sunlight makes its movements swifter. It uses vines more adeptly than its hands.' }
    },
    {
        name: 'snorlax',
        categories: ['Gigantamax', 'Ashs Pokemon', 'Happiness Evolution', 'Smash Ball'],
        pokedex: { text: 'This Pokemon\'s stomach is so strong, even eating moldy or rotten food will not affect it.' }
    },
    {
        name: 'solgaleo',
        categories: ['Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'In writings from the distant past, it\'s called by the name “the beast that devours the sun.”' }
    },
    {
        name: 'solrock',
        categories: ['Gym Leader Ace', 'Genderless'],
        pokedex: { text: 'It absorbs solar energy during the day. Always expressionless, it can sense what its foe is thinking.' }
    },
    {
        name: 'spinarak',
        categories: ['Route 1'],
        pokedex: { text: 'It spins a web using fine—but durable—thread. It then waits patiently for prey to be trapped.' }
    },
    {
        name: 'spiritomb',
        categories: ['Champions Team'],
        pokedex: { text: 'Its constant mischief and misdeeds resulted in it being bound to an Odd Keystone by a mysterious spell.' }
    },
    {
        name: 'squirtle',
        categories: ['Ashs Pokemon', 'Starter Pokemon'],
        pokedex: { text: 'It takes time for the shell to form and harden after hatching. It sprays foam powerfully from its mouth.' }
    },
    {
        name: 'squirtle',
        categories: ['Ashs Pokemon', 'Starter Pokemon'],
        pokedex: { text: 'It shelters itself in its shell, then strikes back with spouts of water at every opportunity.' }
    },
    {
        name: 'starly',
        categories: ['Route 1'],
        pokedex: { text: 'Because they are weak individually, they form groups. However, they bicker if the group grows too big.' }
    },
    {
        name: 'starmie',
        categories: ['Gym Leader Ace', 'Stone Evolution', 'Brock and Misty', 'Genderless'],
        pokedex: { text: 'Its unusual body shape, reminiscent of abstract art, led local people to spread rumors that this Pokemon may be an invader from outer space.' }
    },
    {
        name: 'steelix',
        categories: ['Victory Road', 'Gym Leader Ace', 'Trade Evolution', 'Mega Evolution', 'Brock and Misty'],
        pokedex: { text: 'Its body has been compressed deep under the ground. As a result, it is even harder than a diamond.' }
    },
    {
        name: 'steenee',
        categories: ['Girls Only'],
        pokedex: { text: 'This Pokémon is always bouncing around energetically. Other Pokémon are attracted by its lively appearance and pleasant aroma.' }
    },
    {
        name: 'suicune',
        categories: ['Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'Said to be the reincarnation of north winds, it can instantly purify filthy, murky water.' }
    },
    {
        name: 'sunflora',
        categories: ['Stone Evolution', 'Shadow Pokemon'],
        pokedex: { text: 'In the daytime, it rushes about in a hectic manner, but it comes to a complete stop when the sun sets.' }
    },
    {
        name: 'swampert',
        categories: ['Mega Evolution'],
        pokedex: { text: 'It can swim while towing a large ship. It bashes down foes with a swing of its thick arms.' }
    },
    {
        name: 'swampert',
        categories: ['Mega Evolution'],
        pokedex: { text: 'If it senses the approach of a storm and a tidal wave, it protects its seaside nest by piling up boulders. It swims as fast as a jet ski.' }
    },
    {
        name: 'swanna',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'It administers sharp, powerful pecks with its bill. It whips its long neck to deliver forceful repeated strikes.' }
    },
    {
        name: 'swanna',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'Despite their elegant appearance, they can flap their wings strongly and fly for thousands of miles.' }
    },
    {
        name: 'swellow',
        categories: ['Ashs Pokemon'],
        pokedex: { text: 'If its two tail feathers are standing at attention, it is proof of good health. It soars elegantly in the sky.' }
    },
    {
        name: 'swoobat',
        categories: ['Happiness Evolution'],
        pokedex: { text: 'It shakes its tail vigorously when it emits ultrasonic waves strong enough to reduce concrete to rubble.' }
    },
    {
        name: 'taillow',
        categories: ['Ashs Pokemon', 'Forest Dweller'],
        pokedex: { text: 'It has a gutsy spirit that makes it bravely take on tough foes. It flies in search of warm climates.' }
    },
    {
        name: 'talonflame',
        categories: ['Elite Four Ace', 'Ashs Pokemon'],
        pokedex: { text: 'It zooms directly at its prey at flight speeds of close to 310 mph, while fiery embers scatter from gaps in its feathers.' }
    },
    {
        name: 'tauros',
        categories: ['Ashs Pokemon', 'Boys Only'],
        pokedex: { text: 'They fight each other by locking horns. The herd\'s protector takes pride in its battle-scarred horns.' }
    },
    {
        name: 'tentacool',
        categories: ['Victory Road'],
        pokedex: { text: 'It drifts aimlessly in waves. Very difficult to see in water, it may not be noticed until it stings.' }
    },
    {
        name: 'tentacruel',
        categories: ['Victory Road', 'Champions Team'],
        pokedex: { text: 'It fires off ultrasonic waves from its red orbs to weaken its prey, and then it wraps them up in its 80 tentacles.' }
    },
    {
        name: 'tentacruel',
        categories: ['Victory Road', 'Champions Team'],
        pokedex: { text: 'It lives in complex rock formations on the ocean floor and traps prey using its 80 tentacles. Its red orbs glow when it grows excited or agitated.' }
    },
    {
        name: 'tentacruel',
        categories: ['Victory Road', 'Champions Team'],
        pokedex: { text: 'The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey.' }
    },
    {
        name: 'tentacruel',
        categories: ['Victory Road', 'Champions Team'],
        pokedex: { text: 'It alerts others to danger by stridently flashing the red orbs on its head.' }
    },
    {
        name: 'throh',
        categories: ['Boys Only'],
        pokedex: { text: 'When it encounters a foe bigger than itself, it wants to throw it. It changes belts as it gets stronger.' }
    },
    {
        name: 'thundurus',
        categories: ['Boys Only', 'Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'As it flies around, it shoots lightning all over the place and causes forest fires. It is therefore disliked.' }
    },
    {
        name: 'tirtouga',
        categories: ['Fossil Pokemon'],
        pokedex: { text: 'About 100 million years ago, these Pokemon swam in oceans. It is thought they also went on land to attack prey.' }
    },
    {
        name: 'togekiss',
        categories: ['Stone Evolution', 'Champions Team'],
        pokedex: { text: 'It shares many blessings with people who respect one another\'s rights and avoid needless strife.' }
    },
    {
        name: 'togekiss',
        categories: ['Stone Evolution', 'Champions Team'],
        pokedex: { text: 'Known as a bringer of blessings, it\'s been depicted on good-luck charms since ancient times.' }
    },
    {
        name: 'togepi',
        categories: ['Baby Pokemon', 'Brock and Misty', 'Smash Ball'],
        pokedex: { text: 'It is considered to be a symbol of good luck. Its shell is said to be filled with happiness.' }
    },
    {
        name: 'togetic',
        categories: ['Happiness Evolution', 'Shadow Pokemon'],
        pokedex: { text: 'Although it does not flap its wings very much, it can stay up in the air as it tags along after its trainer.' }
    },
    {
        name: 'torchic',
        categories: ['Starter Pokemon'],
        pokedex: { text: 'It has a flame sac inside its belly that perpetually burns. It feels warm if it is hugged.' }
    },
    {
        name: 'torkoal',
        categories: ['Gym Leader Ace', 'Ashs Pokemon'],
        pokedex: { text: 'It battles using energy it gets from burning coal. When loosing smoke from its nostrils, it lets off a sound that is similar to a locomotive\'s horn.' }
    },
    {
        name: 'tornadus',
        categories: ['Boys Only', 'Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'The lower half of its body is wrapped in a cloud of energy. It zooms through the sky at 200 mph.' }
    },
    {
        name: 'totodile',
        categories: ['Ashs Pokemon', 'Starter Pokemon'],
        pokedex: { text: 'It is small but rough and tough. It won\'t hesitate to take a bite out of anything that moves.' }
    },
    {
        name: 'toucannon',
        categories: ['Elite Four Ace'],
        pokedex: { text: 'Known for forming harmonious couples, this Pokemon is brought to wedding ceremonies as a good luck charm.' }
    },
    {
        name: 'toxel',
        categories: ['Baby Pokemon'],
        pokedex: { text: 'It manipulates the chemical makeup of its poison to produce electricity. The voltage is weak, but it can cause a tingling paralysis.' }
    },
    {
        name: 'toxtricity',
        categories: ['Gigantamax'],
        pokedex: { text: 'It has an electrical organ on its chest. While generating electricity, it fills its surroundings with what sounds like the strumming of a bass guitar.' }
    },
    {
        name: 'treecko',
        categories: ['Starter Pokemon', 'Ashs Pokemon'],
        pokedex: { text: 'It quickly scales even vertical walls. It senses humidity with its tail to predict the next day\'s weather.' }
    },
    {
        name: 'trevenant',
        categories: ['Trade Evolution'],
        pokedex: { text: 'This Pokemon is said to devour anyone daring to ravage the forest. To the creatures dwelling in the forest, it offers great kindness.' }
    },
    {
        name: 'tsareena',
        categories: ['Girls Only'],
        pokedex: { text: 'A Pokémon known for the beauty of its well-shaped legs, it sometimes appears as a mascot in advertisements for beauty salons.' }
    },
    {
        name: 'tyranitar',
        categories: ['Champions Team', 'Mega Evolution', 'Shadow Pokemon'],
        pokedex: { text: 'This Pokemon is a mobile disaster, leaving mountains crumbled and houses destroyed in its wake.' }
    },
    {
        name: 'tyrogue',
        categories: ['Baby Pokemon', 'Boys Only'],
        pokedex: { text: 'It is always bursting with energy. To make itself stronger, it keeps on fighting even if it loses.' }
    },
    {
        name: 'tyrogue',
        categories: ['Baby Pokemon', 'Boys Only'],
        pokedex: { text: 'To brush up on its fighting skills, it will challenge anyone. It has a very strong competitive spirit.' }
    },
    {
        name: 'tyrunt',
        categories: ['Fossil Pokemon', 'Gym Leader Ace'],
        pokedex: { text: 'This Pokemon was restored from a fossil. If something happens that it doesn\'t like, it throws a tantrum and runs wild.' }
    },
    {
        name: 'umbreon',
        categories: ['Happiness Evolution'],
        pokedex: { text: 'When darkness falls, the rings on the body begin to glow, striking fear in the hearts of anyone nearby.' }
    },
    {
        name: 'ursaring',
        categories: ['Victory Road', 'Shadow Pokemon'],
        pokedex: { text: 'Although it is a good climber, it prefers to snap trees with its forelegs and eat fallen Berries.' }
    },
    {
        name: 'uxie',
        categories: ['Legendary Trio', 'Legendary Pokemon'],
        pokedex: { text: 'It is said that its emergence gave humans the intelligence to improve their quality of life.' }
    },
    {
        name: 'vaporeon',
        categories: ['Stone Evolution', 'Champions Team'],
        pokedex: { text: 'Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid\'s.' }
    },
    {
        name: 'victreebel',
        categories: ['Stone Evolution'],
        pokedex: { text: 'Lures prey with the sweet aroma of honey. Swallowed whole, the prey is melted in a day, bones and all.' }
    },
    {
        name: 'victreebel',
        categories: ['Stone Evolution'],
        pokedex: { text: 'Said to live in huge colonies deep in jungles, although no one has ever returned from there.' }
    },
    {
        name: 'vikavolt',
        categories: ['Stone Evolution'],
        pokedex: { text: 'It has an organ that generates electricity in its abdomen. It concentrates energy in its strong jaws and fires off powerful jolts of electricity.' }
    },
    {
        name: 'vivillon',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'The patterns on this Pokemon\'s wings depend on the climate and topography of its habitat. It scatters colorful scales.' }
    },
    {
        name: 'venusaur',
        categories: ['Champions Team', 'Mega Evolution'],
        pokedex: { text: 'By spreading the broad petals of its flower and catching the sun\'s rays, it fills its body with power.' }
    },
    {
        name: 'venomoth',
        categories: ['Gym Leader Ace', 'Victory Road'],
        pokedex: { text: 'The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust.' }
    },
    {
        name: 'vespiquen',
        categories: ['Girls Only'],
        pokedex: { text: 'When endangered, grubs from its six-cell honeycomb strike back. There is only one in a colony.' }
    },
    {
        name: 'vileplume',
        categories: ['Gym Leader Ace', 'Stone Evolution'],
        pokedex: { text: 'The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.' }
    },
    {
        name: 'volbeat',
        categories: ['Boys Only'],
        pokedex: { text: 'It lives around clean ponds. At night, its rear lights up. It converses with others by flashing its light.' }
    },
    {
        name: 'vullaby',
        categories: ['Girls Only'],
        pokedex: { text: 'Its wings are too tiny to allow it to fly. As the time approaches for it to evolve, it discards the bones it was wearing.' }
    },
    {
        name: 'walrein',
        categories: ['Elite Four Ace',],
        pokedex: { text: 'It swims through icy seas while shattering ice floes with its large tusks. It is protected by its thick blubber.' }
    },
    {
        name: 'wailmer',
        categories: ['Victory Road'],
        pokedex: { text: 'It swims along with its mouth open and swallows down seawater along with its food. It sprays excess water out of its nostrils.' }
    },
    {
        name: 'wailord',
        categories: ['Victory Road'],
        pokedex: { text: 'It is among the largest of all Pokemon. It herds prey in a pack then swallows the massed prey in one gulp.' }
    },
    {
        name: 'wailord',
        categories: ['Victory Road'],
        pokedex: { text: 'It can sometimes knock out opponents with the shock created by breaching and crashing its big body onto the water.' }
    },
    {
        name: 'watchog',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'They make the patterns on their bodies shine in order to threaten predators. Keen eyesight lets them see in the dark.' }
    },
    {
        name: 'weavile',
        categories: ['Evil Leaders'],
        pokedex: { text: 'Evolution made it even more devious. It communicates by clawing signs in boulders.' }
    },
    {
        name: 'weavile',
        categories: ['Evil Leaders'],
        pokedex: { text: 'Thanks to its increased intelligence, scrapping over food is a thing of the past. A scratch from its claws will give you a case of frostbite!' }
    },
    {
        name: 'weedle',
        categories: ['Route 1'],
        pokedex: { text: 'Often found in forests, eating leaves. It has a sharp venomous stinger on its head.' }
    },
    {
        name: 'weezing',
        categories: ['Gym Leader Ace', 'Evil Leaders'],
        pokedex: { text: 'This Pokemon lives and grows by absorbing poison gas, dust, and germs that exist inside garbage.' }
    },
    {
        name: 'whimsicott',
        categories: ['Stone Evolution'],
        pokedex: { text: 'Like the wind, it can slip through any gap, no matter how small. It leaves balls of white fluff behind.' }
    },
    {
        name: 'whimsicott',
        categories: ['Stone Evolution'],
        pokedex: { text: 'This nuisance sneaks into people\'s homes, where it hides important things and scatters cotton all over the place.' }
    },
    {
        name: 'whirlipede',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'Protected by a hard shell, it spins its body like a wheel and crashes furiously into its enemies.' }
    },
    {
        name: 'whirlipede',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'It is usually motionless, but when attacked, it rotates at high speed and then crashes into its opponent.' }
    },
    {
        name: 'whiscash',
        categories: ['Victory Road', 'Champions Team'],
        pokedex: { text: 'Mysteriously, it can foretell earthquakes. In the daytime, it sleeps in mud at the bottom of a pond. When it awakens, it continually feeds throughout the night.' }
    },
    {
        name: 'whiscash',
        categories: ['Victory Road', 'Champions Team'],
        pokedex: { text: 'It is extremely protective of its territory. If any foe approaches, it attacks using vicious tremors.' }
    },
    {
        name: 'whiscash',
        categories: ['Victory Road', 'Champions Team'],
        pokedex: { text: 'A glutton that devours anything that moves, it quietly lurks at the bottom of swamps, lying in wait for prey.' }
    },
    {
        name: 'whiscash',
        categories: ['Victory Road', 'Champions Team'],
        pokedex: { text: 'Its vision is not that good. It senses vibrations in the water with its whiskers to determine the location of its prey.' }
    },
    {
        name: 'whismur',
        categories: ['Victory Road'],
        pokedex: { text: 'It usually murmurs, but starts crying loudly if it senses danger. It stops when its ear covers are shut.' }
    },
    {
        name: 'wigglytuff',
        categories: ['Stone Evolution'],
        pokedex: { text: 'The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.' }
    },
    {
        name: 'wooloo',
        categories: ['Route 1'],
        pokedex: { text: 'Its curly fleece is such an effective cushion that this Pokémon could fall off a cliff and stand right back up at the bottom, unharmed.' }
    },
    {
        name: 'wormadam',
        categories: ['Girls Only'],
        pokedex: { text: 'When evolving, its body takes in surrounding materials. As a result, there are many body variations.' }
    },
    {
        name: 'wurmple',
        categories: ['Route 1'],
        pokedex: { text: 'It lives among the tall grass and in forests. It repels attacks by raising up the spikes on its rear.' }
    },
    {
        name: 'wynaut',
        categories: ['Baby Pokemon'],
        pokedex: { text: 'It tends to move in a pack. Individuals squash against one another to toughen their spirits.' }
    },
    {
        name: 'xatu',
        categories: ['Elite Four Ace'],
        pokedex: { text: 'Once it begins to meditate at sunrise, the entire day will pass before it will move again.' }
    },
    {
        name: 'xerneas',
        categories: ['Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'When the horns on its head shine in seven different colors, it is said to be sharing everlasting life.' }
    },
    {
        name: 'yungoos',
        categories: ['Route 1'],
        pokedex: { text: 'Its stomach takes up most of its long torso. It\'s a big eater, so the amount Trainers have to spend on its food is no laughing matter.' }
    },
    {
        name: 'yveltal',
        categories: ['Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'When this legendary Pokémon\'s wings and tail feathers spread wide and glow red, it absorbs the life force of living creatures.' }
    },
    {
        name: 'zacian',
        categories: ['Legendary Pokemon'],
        pokedex: { text: 'Known as a legendary hero, this Pokemon absorbs metal particles, transforming them into a weapon it uses to battle.' }
    },
    {
        name: 'zapdos',
        categories: ['Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'A legendary Pokemon that is said to live in thunderclouds. It freely controls lightning bolts.' }
    },
    {
        name: 'zebstrika',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'This ill-tempered Pokémon is dangerous because when it\'s angry, it shoots lightning from its mane in all directions.' }
    },
    {
        name: 'zebstrika',
        categories: ['Gym Leader Ace'],
        pokedex: { text: 'When this ill-tempered Pokémon runs wild, it shoots lightning from its mane in all directions.' }
    },
    {
        name: 'zigzagoon',
        categories: ['Route 1', 'Forest Dweller'],
        pokedex: { text: 'Rubbing its nose against the ground, it always wanders about back and forth in search of something. It is distinguished by the zigzag footprints it leaves.' }
    },
    {
        name: 'zekrom',
        categories: ['Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'This legendary Pokemon can scorch the world with lightning. It assists those who want to build an ideal world.' }
    },
    {
        name: 'zubat',
        categories: ['Victory Road', 'Brock and Misty', 'Forest Dweller'],
        pokedex: { text: 'Capable of flying safely in dark places, it emits ultrasonic cries to check for any obstacles.' }
    },
    {
        name: 'zygarde',
        categories: ['Legendary Pokemon', 'Legendary Trio'],
        pokedex: { text: 'It\'s hypothesized that it\'s monitoring those who destroy the ecosystem from deep in the cave where it lives.' }
    },
]
