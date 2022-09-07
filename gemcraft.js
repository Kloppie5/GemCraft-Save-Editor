var COMPRESSED_STRS = [" ","!","#","$","%","&","(",")","*",".",":",";","<",">","@","[","]","_","{","|","}"]
var UNCOMPRESSED_STRS = [",B",",C",",D",",E",",F",",G",",H",",I",",J",",K",",L",",M",",N",",O",",P",",Q",",R",",S",",T",",U",",V"]

var ACHIEVEMENTS = {
    0: ( "Bichromatic",  "Combine two gems of different colors."),
    1: ( "Mana Refund",  "Salvage mana by destroying a gem."),
    2: ( "Laying Low F5",  "Don\'t have any gem higher than grade 2 at field F5."),
    3: ( "Laying Low E7",  "Don\'t have any gem higher than grade 2 at field E7."),
    4: ( "Laying Low I4",  "Don\'t have any gem higher than grade 2 at field I4."),
    5: ( "Laying Low M1",  "Don\'t have any gem higher than grade 3 at field M1."),
    6: ( "Laying Low H3",  "Don\'t have any gem higher than grade 3 at field H3."),
    7: ( "Laying Low I6",  "Don\'t have any gem higher than grade 3 at field I6."),
    8: ( "Laying Low A5",  "Don\'t have any gem higher than grade 4 at field A5."),
    9: ( "Laying Low D4",  "Don\'t have any gem higher than grade 4 at field D4."),
    10: ( "Laying Low J3",  "Don\'t have any gem higher than grade 4 at field J3."),
    11: ( "Laying Low F3 Glaring",  "Don\'t have any gem higher than grade 3 at field F3 on glaring difficulty."),
    12: ( "Laying Low E2 Glaring",  "Don\'t have any gem higher than grade 4 at field E2 on glaring difficulty."),
    13: ( "Laying Low K6 Glaring",  "Don\'t have any gem higher than grade 5 at field K6 on glaring difficulty."),
    14: ( "Laying Low A4 Glaring",  "Don\'t have any gem higher than grade 6 at field A4 on glaring difficulty."),
    15: ( "Drawing Blood",  "Create a grade 6 pure bloodbound gem at field F2 before wave 6."),
    16: ( "Unhealing",  "Create a grade 6 pure suppressing gem at field I3 before wave 5."),
    17: ( "Harvester",  "Create a grade 6 pure mana leeching gem at field E6 before wave 2."),
    18: ( "Piercing Chance",  "Create a grade 9 pure critical hit gem at field K3."),
    19: ( "Mana Link",  "Create a grade 9 pure poolbound gem at field L4."),
    20: ( "Glue Gun",  "Create a grade 9 pure slowing gem at field C2."),
    21: ( "It Does the Body Bad",  "Create a grade 12 pure poison gem."),
    22: ( "Ricochet",  "Create a grade 12 pure chain hit gem."),
    23: ( "Exfoliating",  "Create a grade 12 pure armor tearing gem."),
    24: ( "Powerful",  "Create a gem with a raw minimum damage of 300 or higher."),
    25: ( "Mighty",  "Create a gem with a raw minimum damage of 1300 or higher."),
    26: ( "Legendary",  "Create a gem with a raw minimum damage of 3300 or higher."),
    27: ( "Tricolor",  "Create a gem of 3 components."),
    28: ( "Kaleidoscope",  "Create a gem of 6 components."),
    29: ( "Prismatic",  "Create a gem of 9 components."),
    30: ( "All Your Mana Belongs to Us",  "Use only mana leeching gems at field P1."),
    31: ( "Targeting Weak Points",  "Use only critical hit gems at field T5."),
    32: ( "Smell of Ozone",  "Use only poolbound gems at field Q2."),
    33: ( "Crowd Control",  "Use only chain hit gems at field W1."),
    34: ( "Nox Mist",  "Use only poison gems at field N4."),
    35: ( "Weakening",  "Use only suppressing gems at field N1."),
    36: ( "Blood Magic",  "Use only bloodbound gems at field O6."),
    37: ( "Long Crawl",  "Use only slowing gems at field G4."),
    38: ( "Shavings All Around",  "Use only armor tearing gems at field R4."),
    39: ( "Eagle Eye",  "Reach an amplified gem range of 12."),
    40: ( "Super Gem",  "Create a grade 3 gem with 300 effective max damage."),
    41: ( "Hyper Gem",  "Create a grade 3 gem with 600 effective max damage."),
    42: ( "Wicked Gem",  "Create a grade 3 gem with 900 effective max damage."),
    43: ( "Novice Grade",  "Create a grade 3 gem."),
    44: ( "Fifth Grader",  "Create a grade 5 gem."),
    45: ( "Adept Grade",  "Create a grade 8 gem."),
    46: ( "Senior Grade",  "Create a grade 12 gem."),
    47: ( "Master Grade",  "Create a grade 16 gem."),
    48: ( "Supported",  "Amplify a gem."),
    49: ( "In Focus",  "Amplify a gem with 8 other gems."),
    50: ( "Catalyst",  "Give a Gem 200 Poison Damage by Amplification."),
    51: ( "Warming Up",  "Have a grade 1 gem with 100 hits."),
    52: ( "Seen Battle",  "Have a grade 1 gem with 500 hits."),
    53: ( "Getting Serious",  "Have a grade 1 gem with 1.500 hits."),
    54: ( "Jewel Collection",  "Fill all inventory slots with gems."),
    55: ( "Well Laid",  "Have 11 gems on the battlefield."),
    56: ( "Swift Deployment",  "Have 22 gems on the battlefield at field N4 before wave 9."),
    57: ( "Gem Company",  "Have 33 gems on the battlefield at field A3."),
    58: ( "Bazaar",  "Have 44 gems on the battlefield."),
    59: ( "Connected",  "Build an amplifier."),
    60: ( "No More Towers L3",  "Don\'t build any towers at field L3."),
    61: ( "No More Towers A2",  "Don\'t build any towers at field A2."),
    62: ( "No More Towers T1",  "Don\'t build any towers at field T1."),
    63: ( "With What We Have L1",  "Don\'t build anything at field L1."),
    64: ( "With What We Have N5",  "Don\'t build anything at field N5."),
    65: ( "With What We Have H1",  "Don\'t build anything at field H1."),
    66: ( "Outpost",  "Build 5 towers."),
    67: ( "Settlement",  "Build 15 towers."),
    68: ( "Fortress",  "Build 25 towers."),
    69: ( "My Castle",  "Build 19 towers at field I1."),
    70: ( "Brick and Mortar",  "Build 21 towers at field M2 before wave 5."),
    71: ( "Sparse Snares",  "Build 5 traps."),
    72: ( "Entrenched",  "Build 15 traps."),
    73: ( "Watch Your Steps",  "Build 25 traps."),
    74: ( "No Trespassing",  "Build 30 traps at field Q7."),
    75: ( "Power Sharing",  "Build 5 amplifiers."),
    76: ( "Power Flow",  "Build 15 amplifiers."),
    77: ( "Power Exchange",  "Build 25 amplifiers."),
    78: ( "Strongpoints",  "Build 18 amplifiers at field D1."),
    79: ( "Minor Detour",  "Build 15 walls."),
    80: ( "Confusion Junction",  "Build 30 walls."),
    81: ( "Zigzag Corridor",  "Build 45 walls."),
    82: ( "Maze Square",  "Build 60 walls at field P6."),
    83: ( "Getting Lost in No Time",  "Build 60 walls at field G3 before wave 3."),
    84: ( "Prefabricated",  "Place 3 towers for free."),
    85: ( "Stones to Ashes",  "Demolish one of your structures."),
    86: ( "Juggler",  "Use demolition 7 times."),
    87: ( "Too Curious",  "Break a tomb open."),
    88: ( "Tasting the Darkness",  "Break 3 tombs open."),
    89: ( "Tomb Raiding",  "Break a tomb open at field B5 before wave 24."),
    90: ( "Pull Down",  "Destroy a monster nest."),
    91: ( "Fire in the Hole",  "Destroy 3 monster nests."),
    92: ( "Nest Blaster K1",  "Destroy 3 monster nests at field K1 before wave 7."),
    93: ( "Nest Blaster C5",  "Destroy 2 monster nests at field C5 before wave 13."),
    94: ( "Blackout",  "Destroy a beacon."),
    95: ( "Popping Lights",  "Destroy 5 beacons."),
    96: ( "Broken Siege",  "Destroy 8 beacons at field T7 before wave 15."),
    97: ( "Follow the Light",  "Have 10 or more beacons standing at the end of the battle."),
    98: ( "Lit Up",  "Have 15 beacons on the field at the same time."),
    99: ( "No Stone Unturned",  "Open 5 drop holders."),
    100: ( "Hiding Spot",  "Open 3 drop holders at field G2 before wave 5."),
    101: ( "It was Abandoned Anyway",  "Destroy a dwelling."),
    102: ( "Ruined Ghost Town",  "Destroy 5 dwellings."),
    103: ( "Old Memories",  "Unlock a wizard tower."),
    104: ( "Almost Ruined",  "Leave a monster nest at 1 hit point at the end of the battle."),
    105: ( "Rapid Ritual E4",  "Open the tome chamber at field E4 before wave 7 starts."),
    106: ( "Rapid Ritual D5",  "Open the tome chamber at field D5 before wave 12 starts."),
    107: ( "Rapid Ritual K6",  "Open the tome chamber at field K6 before wave 11 starts."),
    108: ( "Not Worth It",  "Harvest 9.000 mana from a corrupted mana shard."),
    109: ( "Come Out",  "Lure 15 swarmlings out of a sleeping hive."),
    110: ( "Come Out, Come Out",  "Lure 150 swarmlings out of a sleeping hive."),
    111: ( "Precious",  "Get a gem from a drop holder."),
    112: ( "Dry Puddle",  "Harvest all mana from a mana shard."),
    113: ( "Extorted",  "Harvest all mana from 3 mana shards."),
    114: ( "Early Harvest K5",  "Harvest 24.000 mana from shards at field K5 before wave 18 starts."),
    115: ( "Early Harvest Q4",  "Harvest 48.000 mana from shards at field Q4 before wave 24 starts."),
    116: ( "Early Harvest H2",  "Harvest 1.300 mana from shards at field H2 before wave 2 starts."),
    117: ( "What Secret Are You Hiding?",  "Spin a compass."),
    118: ( "Lockpick F4",  "Destroy all wizard locks at field F4 before wave 2 starts."),
    119: ( "Lockpick O6",  "Destroy all wizard locks at field O6 before wave 18 starts."),
    120: ( "Lockpick M5",  "Destroy all wizard locks at field M5 before wave 10 starts."),
    121: ( "Broken Seal",  "Free a sealed gem."),
    122: ( "First Blood Spilled",  "Kill a monster."),
    123: ( "Puncturing Shots",  "Deliver 75 one hit kills."),
    124: ( "Impaling Charges",  "Deliver 250 one hit kills."),
    125: ( "Splinters",  "Deliver 140 one hit kills at field B3."),
    126: ( "Absolute Zero",  "Kill 273 frozen monsters."),
    127: ( "Ensnared",  "Kill 12 monsters with gems in traps."),
    128: ( "Rough Path",  "Kill 60 monsters with gems in traps."),
    129: ( "Minefield",  "Kill 150 monsters with gems in traps."),
    130: ( "From Above",  "Kill 27 monsters with gem bombs and wasps."),
    131: ( "Thunderstruck",  "Kill 127 monsters with gem bombs and wasps."),
    132: ( "Knee Deep",  "Beat 30 waves."),
    133: ( "They Keep Coming",  "Beat 45 waves."),
    134: ( "They Keep Coming E1",  "Beat 45 waves at field E1."),
    135: ( "They Keep Coming M3",  "Beat 45 waves at field M3."),
    136: ( "Still Alive",  "Beat 60 waves."),
    137: ( "Still Alive H4",  "Beat 60 waves at field H4."),
    138: ( "Still Alive J1",  "Beat 60 waves at field J1."),
    139: ( "Still Alive B1",  "Beat 60 waves at field B1."),
    140: ( "Desperate",  "Beat 75 waves."),
    141: ( "Desperate C3",  "Beat 75 waves at field C3."),
    142: ( "Desperate L5",  "Beat 75 waves at field L5."),
    143: ( "Getting Grim",  "Beat 90 waves."),
    144: ( "Long Run",  "Beat 105 waves."),
    145: ( "Feels Like Endurance",  "Beat 120 waves."),
    146: ( "Purged",  "Kill 179 marked monsters."),
    147: ( "Hint of Darkness",  "Kill 189 twisted monsters."),
    148: ( "Exorcism",  "Kill 199 possessed monsters."),
    149: ( "Path of Blood",  "Kill 1.000 monsters."),
    150: ( "Bone Shredder",  "Kill 600 monsters before wave 12 starts."),
    151: ( "Enemy of the Swarm",  "Kill 333 swarmlings."),
    152: ( "No Use of Vitality",  "Kill a monster having at least 20.000 hit points."),
    153: ( "Through All Layers",  "Kill a monster having at least 200 armor."),
    154: ( "Allergic",  "Kill 180 monsters with gem wasp stings."),
    155: ( "Carnage",  "Reach a kill chain of 300."),
    156: ( "Blood Shower",  "Reach a kill chain of 600."),
    157: ( "Boiling Red",  "Reach a kill chain of 900."),
    158: ( "Thin Ice",  "Kill 20 frozen monsters with gems in traps."),
    159: ( "Doom Drop",  "Kill a possessed giant with barrage."),
    160: ( "Silver Bullet",  "Kill a cursed possessed monster with bolt."),
    161: ( "Intoxicated",  "Kill 400 monsters with poison."),
    162: ( "Artisan Trapper",  "Kill every monster with gems in traps."),
    163: ( "I Saw Something",  "Kill an apparition."),
    164: ( "Ghost Spotter F6",  "Kill an apparition at field F6."),
    165: ( "Ghost Spotter N2",  "Kill an apparition at field N2."),
    166: ( "Ghost Spotter M7",  "Kill an apparition at field M7."),
    167: ( "They Are Still Here",  "Kill 2 apparitions."),
    168: ( "Don\'t Touch My Gems!",  "Kill a specter."),
    169: ( "I Told You...",  "Kill a specter while it carries a gem."),
    170: ( "Gem Lust",  "Kill 2 specters."),
    171: ( "The Messenger Must Die",  "Kill a shadow."),
    172: ( "Darkness Walk With Me",  "Kill 2 shadows."),
    173: ( "Am I Only Chasing Shadows?",  "Kill 7 shadows."),
    174: ( "Bye Bye Hideous",  "Kill a spire."),
    175: ( "Dual Downfall",  "Kill 2 spires."),
    176: ( "Numbed Spikes",  "Kill 20 frozen monsters with bolt."),
    177: ( "Blue Ray",  "Kill 20 frozen monsters with beam."),
    178: ( "Snow Blower",  "Kill 20 frozen monsters with barrage."),
    179: ( "Shattering",  "Kill 100 frozen monsters with bolt."),
    180: ( "White Ray",  "Kill 100 frozen monsters with beam."),
    181: ( "Toss the Ice Shards",  "Kill 100 frozen monsters with barrage."),
    182: ( "Jinx Blast",  "Kill 30 cursed monsters with bolt."),
    183: ( "Scourge",  "Kill 30 cursed monsters with beam."),
    184: ( "A Bad Day",  "Kill 30 cursed monsters with barrage."),
    185: ( "Plague Stopper",  "Kill 150 cursed monsters with bolt."),
    186: ( "Bane",  "Kill 150 cursed monsters with beam."),
    187: ( "A Long,  Bad Day",  "Kill 150 cursed monsters with barrage."),
    188: ( "Avenged",  "Kill 15 monsters carrying orblets."),
    189: ( "Ice Stand",  "Kill 5 frozen monsters carrying orblets."),
    190: ( "Wash Away",  "Kill 100 monsters while it\'s raining."),
    191: ( "Acid Rain",  "Kill 85 poisoned monsters while it\'s raining."),
    192: ( "Frozen Grave",  "Kill 110 monsters while it\'s snowing."),
    193: ( "Snow Dust",  "Kill 95 frozen monsters while it\'s snowing."),
    194: ( "Out of Misery",  "Kill a monster that is cursed,  poisoned, frozen and slowed at the same time."),
    195: ( "Overheated",  "Kill a giant with beam shot."),
    196: ( "Zap",  "Kill 4 monsters with a chain hitting shot."),
    197: ( "Almost",  "Kill a monster with shots blinking to the monster attacking your orb that would otherwise destroy your orb."),
    198: ( "Blizzard",  "Kill 25 monsters with frozen corpse explosion."),
    199: ( "Beastmaster",  "Kill a monster having at least 100.000 hit points and 1000 armor."),
    200: ( "Itching",  "Kill a swarmling having at least 100 armor."),
    201: ( "Flea Trap",  "Kill 45 cursed monsters with shots blinking to your orb."),
    202: ( "Ful Ir",  "Kill 25 monsters with one gem bomb blast."),
    203: ( "Thick Air",  "Deliver gem bomb and wasp kills only."),
    204: ( "Green Vial",  "Have more than 75% of the monster kills caused by poison."),
    205: ( "Trolled",  "Kill a giant with one shot."),
    206: ( "Bitter Bites",  "Kill 141 cursed and frozen swarmlings."),
    207: ( "Time Bent",  "Have 90 monsters slowed at the same time."),
    208: ( "Breath of Cold",  "Have 90 monsters frozen at the same time."),
    209: ( "Poison Cloud",  "Have 90 monsters poisoned at the same time."),
    210: ( "Crowded",  "Have 100 monsters on the battlefield at the same time."),
    211: ( "Great Mass",  "Have 230 monsters on the battlefield at the same time."),
    212: ( "Huge Blob",  "Have 470 monsters on the battlefield at the same time."),
    213: ( "Stumbling",  "Hit the same monster with traps 100 times."),
    214: ( "Overpecked",  "Deal 100 gem wasp stings to the same monster."),
    215: ( "Teleport Lag",  "Banish a monster at least 5 times."),
    216: ( "Pointed Pain",  "Deal 50 gem wasp stings to creatures."),
    217: ( "Needle Storm",  "Deal 350 gem wasp stings to creatures."),
    218: ( "Roof Knocking",  "Deal 50 gem wasp stings to buildings."),
    219: ( "Drumroll",  "Deal 350 gem wasp stings to buildings."),
    220: ( "Mana Mogul",  "Reach 10.000 mana in your mana pool."),
    221: ( "Mana Magnate",  "Reach 100.000 mana in your mana pool."),
    222: ( "Mana Millionaire",  "Reach 1.000.000 mana in your mana pool."),
    223: ( "Prepared",  "Have 1.000 initial mana."),
    224: ( "Enough to Start a War",  "Have 10.000 initial mana."),
    225: ( "Mana Trader",  "Salvage 8.000 mana from gems."),
    226: ( "Resourceful",  "Reach mana pool level 5."),
    227: ( "Mana Lake",  "Reach mana pool level 10."),
    228: ( "Flows Through My Veins",  "Reach mana pool level 15."),
    229: ( "Power Overwhelming",  "Reach mana pool level 20."),
    230: ( "Mana Denial J5",  "Don\'t get any mana from mana shards at field J5."),
    231: ( "Mana Denial O2 Glaring",  "Don\'t get any mana from mana shards at field O2 on glaring difficulty."),
    232: ( "Your Mana is Mine",  "Leech 10.000 mana with gems."),
    233: ( "Finders",  "Gain 200 mana from drops."),
    234: ( "Keepers",  "Gain 800 mana from drops."),
    235: ( "Ouch!",  "Spend 870 mana on banishment."),
    236: ( "It Hurts!",  "Spend 8.870 mana on banishment."),
    237: ( "The Horror",  "Lose 3.333 mana to shadows."),
    238: ( "Amplification",  "Spend 18.000 mana on amplifiers."),
    239: ( "Cold Studies",  "Gain 90 xp with freeze spell crowd hits."),
    240: ( "Ice Wise",  "Gain 700 xp with freeze spell crowd hits."),
    241: ( "Ill Experiment",  "Gain 120 xp with curse spell crowd hits."),
    242: ( "Hex Adept",  "Gain 1.100 xp with curse spell crowd hits."),
    243: ( "Calling Unknown Powers",  "Gain 140 xp with wake of eternity spell crowd hits."),
    244: ( "Black Ring of Death",  "Gain 1.800 xp with wake of eternity spell crowd hits."),
    245: ( "Battle Heat",  "Gain 200 xp with kill chains."),
    246: ( "Bloodmaster",  "Gain 1.200 xp with kill chains."),
    247: ( "Quick Learner",  "Gain 240 xp by calling waves early."),
    248: ( "Well Defended",  "Gain 250 xp keeping your orb intact."),
    249: ( "Put the Lights Out",  "Gain 500 xp from destroying beacons."),
    250: ( "Adventurer",  "Gain 600 xp from drops."),
    251: ( "Fierce Encounter",  "Reach -8% decreased banishment cost with your orb."),
    252: ( "Close Quarter",  "Reach -12% decreased banishment cost with your orb."),
    253: ( "Desperate Clash",  "Reach -16% decreased banishment cost with your orb."),
    254: ( "Stinging Sphere",  "Deliver 100 banishments with your orb."),
    255: ( "Thorned Sphere",  "Deliver 400 banishments with your orb."),
    256: ( "Barbed Sphere",  "Deliver 1.200 banishments with your orb."),
    257: ( "Self Defense",  "Strengthen your orb by dropping a gem on it."),
    258: ( "Added Protection",  "Strengthen your orb with a gem in an amplifier."),
    259: ( "Safe and Secure",  "Strengthen your orb with 7 gems in amplifiers."),
    260: ( "Guarded",  "Don\'t let any monster touch your orb for 20 beaten waves."),
    261: ( "It\'s a Trap",  "Don\'t let any monster touch your orb for 50 beaten waves."),
    262: ( "You Shall Not Pass",  "Don\'t let any monster touch your orb for 80 beaten waves."),
    263: ( "Awakening",  "Activate a shrine."),
    264: ( "Earthquake",  "Activate shrines a total of 4 times."),
    265: ( "Addicted",  "Activate shrines a total of 12 times."),
    266: ( "Double Strike",  "Activate the same shrine 2 times."),
    267: ( "Power Node",  "Activate the same shrine 5 times."),
    268: ( "Apocalypse",  "Activate a shrine with a grade 10 or higher gem."),
    269: ( "Shovel Swing",  "Hit 15 frozen monsters with shrines."),
    270: ( "Melting Pulse",  "Hit 75 frozen monsters with shrines."),
    271: ( "Salvation",  "Hit 150 cursed monsters with shrines."),
    272: ( "Scars",  "Cut 7.000 total hit points with a single strike of a shrine of blades."),
    273: ( "Deep Wounds",  "Cut 70.000 total hit points with a single strike of a shrine of blades."),
    274: ( "House of Flying Blades",  "Cut 700.000 total hit points with a single strike of a shrine of blades."),
    275: ( "Cropped",  "Shred 110 total armor with a single corrosion shrine strike."),
    276: ( "Trimmed Down",  "Shred 1.000 total armor with a single corrosion shrine strike."),
    277: ( "Thinned Out",  "Shred 9.000 total armor with a single corrosion shrine strike."),
    278: ( "Enchanted Gem",  "Add 100 max damage to a gem with a single enchantment shrine strike."),
    279: ( "Exalted Gem",  "Add 200 max damage to a gem with a single enchantment shrine strike."),
    280: ( "Bewitched Gem",  "Add 300 max damage to a gem with a single enchantment shrine strike."),
    281: ( "Mana Theft",  "Leech 180 mana with a single strike of a shrine of energy."),
    282: ( "Mana Robbery",  "Leech 1.800 mana with a single strike of a shrine of energy."),
    283: ( "Mana Heist",  "Leech 18.000 mana with a single strike of a shrine of energy."),
    284: ( "Malicious",  "Deal 300 venom damage with a single venom shrine strike."),
    285: ( "Spiteful",  "Deal 4.000 venom damage with a single venom shrine strike."),
    286: ( "Obnoxious",  "Deal 50.000 venom damage with a single venom shrine strike."),
    287: ( "Thoughtful in a Blink",  "Get 500 xp with a single wisdom shrine strike."),
    288: ( "Profound in a Snap",  "Get 1.500 xp with a single wisdom shrine strike."),
    289: ( "Wise in an Instant",  "Get 3.000 xp with a single wisdom shrine strike."),
    290: ( "Strike Anywhere",  "Cast a strike spell."),
    291: ( "Scare Tactics",  "Cast 5 strike spells."),
    292: ( "No Place to Hide",  "Cast 25 strike spells."),
    293: ( "Fire Away",  "Cast a gem enhancement spell."),
    294: ( "Friday Night",  "Have 4 beam enhanced gems at the same time."),
    295: ( "Fusion Starter",  "Have 16 beam enhanced gems at the same time."),
    296: ( "Shell Shock",  "Have 4 barrage enhanced gems at the same time."),
    297: ( "Firefall",  "Have 16 barrage enhanced gems at the same time."),
    298: ( "Punching Fists",  "Have 4 bolt enhanced gems at the same time."),
    299: ( "Heavy Defense",  "Have 16 bolt enhanced gems at the same time."),
    300: ( "Clear Sky A1",  "Don\'t use any strike spells at field A1."),
    301: ( "Clear Sky K4",  "Don\'t use any strike spells at field K4."),
    302: ( "Clear Sky B3",  "Don\'t use any strike spells at field B3."),
    303: ( "Basic Gem Tactics J4",  "Don\'t use any gem enhancement spells at field J4."),
    304: ( "Basic Gem Tactics C1",  "Don\'t use any gem enhancement spells at field C1."),
    305: ( "Basic Gem Tactics O3",  "Don\'t use any gem enhancement spells at field O3."),
    306: ( "Purist D3",  "Don\'t use any strike or gem enhancement spells at field D3."),
    307: ( "Purist G5",  "Don\'t use any strike or gem enhancement spells at field G5."),
    308: ( "Purist N6",  "Don\'t use any strike or gem enhancement spells at field N6."),
    309: ( "Freezing Wounds",  "Freeze a monster 3 times."),
    310: ( "Triple Trouble",  "Curse a monster 3 times."),
    311: ( "Wretched",  "Curse 111 cursed monsters."),
    312: ( "Helpless",  "Curse 111 frozen monsters."),
    313: ( "Still Grue",  "Freeze 111 cursed monsters."),
    314: ( "Refrost",  "Freeze 111 frozen monsters."),
    315: ( "Cough",  "Poison 111 cursed monsters."),
    316: ( "Inedible",  "Poison 111 frozen monsters."),
    317: ( "Cold Magic",  "Hit a total of 400 targets with freeze spells."),
    318: ( "Witchcraft",  "Hit a total of 400 targets with curse spells."),
    319: ( "Versatile Gem",  "Hit a total of 400 targets with wake of eternity spells."),
    320: ( "Ice Cube",  "Have a Maximum Charge of 300% for the Freeze Spell."),
    321: ( "Barrage Battery",  "Have a Maximum Charge of 300% for the Barrage Spell."),
    322: ( "Impatient",  "Call a wave early."),
    323: ( "Short Tempered",  "Call 5 waves early."),
    324: ( "Restless",  "Call 15 waves early."),
    325: ( "Uneasy",  "Call 35 waves early."),
    326: ( "Agitated",  "Call 75 waves early."),
    327: ( "Oil on Fire",  "Enrage a wave."),
    328: ( "Shining Gift",  "Heat a spark."),
    329: ( "Voice of Calling",  "Summon 400 monsters by enraging waves."),
    330: ( "Inbound",  "Summon 900 monsters by enraging waves."),
    331: ( "The Gathering",  "Summon 1.600 monsters by enraging waves."),
    332: ( "Hornet Nest",  "Summon 1.500 swarmlings by enraging waves."),
    333: ( "Big Feet",  "Summon 300 giants by enraging waves."),
    334: ( "Ornaments",  "Summon 30 beacons by enraging waves."),
    335: ( "Ten Angry Waves",  "Enrage 10 waves."),
    336: ( "Rageout",  "Enrage 30 waves."),
    337: ( "Raging Habit",  "Enrage 80 waves."),
    338: ( "Rage in Numbers",  "Enrage waves with at least 50 gems."),
    339: ( "Playing With Fire",  "Enrage a wave with 6 gems."),
    340: ( "Furious Enough",  "Enrage a wave to have at least 400 monsters."),
    341: ( "Buzz Feed",  "Have 99 gem wasps on the battlefield."),
    342: ( "Boom",  "Throw a gem bomb."),
    343: ( "Bang",  "Throw 32 gem bombs."),
    344: ( "Getting Rid of Them",  "Drop 48 gem bombs on beacons."),
    345: ( "Plentyful",  "Have 1.000 shadow cores at the start of the battle."),
    346: ( "Core Pack",  "Find 13 shadow cores."),
    347: ( "Core Heap",  "Find 39 shadow cores."),
    348: ( "Core Pile",  "Find 117 shadow cores."),
    349: ( "Naked",  "Set orblets trait to level 7 and don\'t have any orblets on the field at the end."),
    350: ( "Slow Shipments",  "Have the mana lock trait set to level 7 at field Q1."),
    351: ( "No Time to Rest",  "Have the haste trait set to level 7 at field T3."),
    352: ( "Tumbling Billows",  "Have the swarmling domination trait set to level 7 at field G6."),
    353: ( "Hateful",  "Have the Hatred trait set to level 3 or higher at field N7."),
    354: ( "On the Shoulders of Giants",  "Have the giant domination trait set to level 7 at field C2."),
    355: ( "Stronger Than Before",  "Set corrupted banishment to level 7 and banish a monster 3 times."),
    356: ( "Leap of Faith",  "Have 20 additional waves by battle traits."),
    357: ( "Come Take Me",  "Have 40 additional waves by battle traits."),
    358: ( "Diabolical",  "Have 60 additional waves by battle traits."),
    359: ( "Amulet",  "Fill all the sockets in your talisman."),
    360: ( "Charm",  "Fill all the sockets in your talisman with fragments upgraded to their limit."),
    361: ( "Sigil",  "Fill all the sockets in your talisman with fragments upgraded to level 5 or higher."),
    362: ( "Stockpile",  "Have 20 fragments in your talisman inventory."),
    363: ( "Gearing Up",  "Have 5 fragments socketed in your talisman."),
    364: ( "Lucky",  "Find a talisman fragment."),
    365: ( "Fortunate",  "Find 2 talisman fragments."),
    366: ( "Gifted",  "Find 3 talisman fragments."),
    367: ( "Regaining Knowledge",  "Acquire 5 skills."),
    368: ( "Skillful",  "Acquire and raise all skills to level 5 or above."),
    369: ( "Bare Hands D2",  "Don\'t spend any points on skills at field D2."),
    370: ( "Bare Hands K2",  "Don\'t spend any points on skills at field K2."),
    371: ( "Bare Hands M6",  "Don\'t spend any points on skills at field M6."),
    372: ( "Bare Hands F1 Glaring",  "Don\'t spend any points on skills at field F1 on glaring difficulty."),
    373: ( "Bare Hands I2 Glaring",  "Don\'t spend any points on skills at field I2 on glaring difficulty."),
    374: ( "Bare Hands E3 Glaring",  "Don\'t spend any points on skills at field E3 on glaring difficulty."),
    375: ( "Monsters in my Backyard",  "Have 295 monsters on the battlefield at the same time on field F1."),
    376: ( "Laying Low E1",  "Don\'t have any gem higher than grade 1 at field E1."),
    377: ( "Knowledge Seeker",  "Open a tome chamber."),
    378: ( "Tome Raider",  "Open a previously opened tome chamber."),
    379: ( "Grey Trees",  "11331791"),
    380: ( "In for a Trait",  "Activate a battle trait."),
    381: ( "High Stakes",  "Set a battle trait to level 7 or higher."),
    382: ( "White Wand",  "Reach wizard level 10."),
    383: ( "Yellow Wand",  "Reach wizard level 20."),
    384: ( "Orange Wand",  "Reach wizard level 40."),
    385: ( "Purple Wand",  "Reach wizard level 60."),
    386: ( "Blue Wand",  "Reach wizard level 90."),
    387: ( "Green Wand",  "Reach wizard level 120."),
    388: ( "Brown Wand",  "Reach wizard level 160."),
    389: ( "Black Wand",  "Reach wizard level 200."),
    390: ( "Let\'s Have a Look",  "Open a drop holder."),
    391: ( "Raindrop",  "Drop 18 gem bombs while it\'s raining."),
    392: ( "Snowball",  "Drop 27 gem bombs while it\'s snowing."),
    393: ( "Don\'t Let It Through!",  "Select a monster."),
    394: ( "Pull It!",  "Select a building."),
    395: ( "Not So Fast",  "Freeze a specter."),
    396: ( "Under Pressure",  "Shoot down 340 shadow projectiles."),
    397: ( "Mist Fell Down",  "Select the Glaring difficulty."),
    398: ( "Alone in the Dark",  "Select the Haunting Difficulty."),
    399: ( "Nature Takes Over",  "Have no own buildings on the field at the end of the battle."),
    400: ( "Sharpened",  "Enhance a gem in a trap."),
    401: ( "Second Thoughts",  "Add a different enhancement on an enhanced gem."),
    402: ( "Special Purpose",  "Change the target priority of a gem."),
    403: ( "Fully Shining",  "Have 55 gems on the battlefield."),
    404: ( "Stormed Beacons",  "Destroy 15 beacons."),
    405: ( "Lost Signal",  "Destroy 45 beacons."),
    406: ( "One on One",  "Deliver 750 one hit kills."),
    407: ( "Trembling",  "Kill 450 monsters with gems in traps."),
    408: ( "Stacked Up",  "Kill 3.000 monsters."),
    409: ( "Legion",  "Have 990 monsters on the battlefield at the same time."),
    410: ( "At my Fingertips",  "Cast 75 strike spells."),
    411: ( "Multikill",  "Destroy 1 apparition, 1 specter, and 1 shadow in the same battle."),
    412: ( "Waterproof",  "Activate a shrine while raining."),
    413: ( "Let it Go",  "Leave an apparition alive."),
    414: ( "Slow Drain",  "Deal 10.000 poison damage to a monster."),
    415: ( "In Flames",  "Kill 400 spawnlings."),
    416: ( "Bestial Wave",  "Enrage a wave to have exactly 666 swarmlings."),
    417: ( "Black Blood",  "Deal 5.000 poison damage to a shadow."),
}

var SKILLS = {
    0: "TRUE_COLORS",
    1: "MASONRY",
    2: "FUSION",
    3: "MANA_STREAM",
    4: "RESONANCE",
    5: "BOLT",
    6: "MANA_LEECHING",
    7: "CRITHIT",
    8: "POOLBOUND",
    9: "FREEZE",
    10: "BEAM",
    11: "CHAIN_HIT",
    12: "POISON",
    13: "SUPPRESSING",
    14: "CURSE",
    15: "BARRAGE",
    16: "BLOODBOUND",
    17: "SLOWING",
    18: "ARMOR_TEARING",
    19: "WOE",
    20: "AMPLIFIERS",
    21: "IGNITION",
    22: "FURY",
    23: "DEMOLITION",
    24: "TRAPS",
    25: "undefined",
}

var STAGES = {
    0: "A1", 1: "A2", 2: "A3", 3: "A4", 4: "A5", 5: "A6",
    6: "B1", 7: "B2", 8: "B3", 9: "B4", 10: "B5", 11: "B6",
    12: "C1", 13: "C2", 14: "C3", 15: "C4", 16: "C5",
    17: "D1", 18: "D2", 19: "D3", 20: "D4", 21: "D5", 22: "D6",
    23: "E1", 24: "E2", 25: "E3", 26: "E4", 27: "E5", 28: "E6", 29: "E7",
    30: "F1", 31: "F2", 32: "F3", 33: "F4", 34: "F5", 35: "F6",
    36: "G1", 37: "G2", 38: "G3", 39: "G4", 40: "G5", 41: "G6",
    42: "H1", 43: "H2", 44: "H3", 45: "H4", 46: "H5",
    47: "I1", 48: "I2", 49: "I3", 50: "I4", 51: "I5", 52: "I6",
    53: "J1", 54: "J2", 55: "J3", 56: "J4", 57: "J5",
    58: "K1", 59: "K2", 60: "K3", 61: "K4", 62: "K5", 63: "K6",
    64: "L1", 65: "L2", 66: "L3", 67: "L4", 68: "L5", 69: "L6",
    70: "M1", 71: "M2", 72: "M3", 73: "M4", 74: "M5", 75: "M6", 76: "M7",
    77: "N1", 78: "N2", 79: "N3", 80: "N4", 81: "N5", 82: "N6", 83: "N7",
    84: "O1", 85: "O2", 86: "O3", 87: "O4", 88: "O5", 89: "O6",
    90: "P1", 91: "P2", 92: "P3", 93: "P4", 94: "P5", 95: "P6",
    96: "Q1", 97: "Q2", 98: "Q3", 99: "Q4", 100: "Q5", 101: "Q6", 102: "Q7",
    103: "R1", 104: "R2", 105: "R3", 106: "R4", 107: "R5", 108: "R6",
    109: "T1", 110: "T2", 111: "T3", 112: "T4", 113: "T5", 114: "T6", 115: "T7", 116: "T8",
    117: "U1", 118: "U2", 119: "U3", 120: "U4", 121: "U5", 122: "U6",
    123: "W1", 124: "W2", 125: "W3", 126: "W4", 127: "W5", 128: "W6",
    129: "X1", 130: "X2", 131: "X3", 132: "X4", 133: "X5", 134: "X6", 135: "X7",
    136: "Y1", 137: "Y2", 138: "Y3", 139: "Y4", 140: "Y5", 141: "Y6",
    142: "V1", 143: "V2", 144: "V3", 145: "V4",
    146: "H6", 147: "U7",
    148: "V5", 149: "V6", 150: "V7", 151: "V8", 152: "V9", 153: "V10", 154: "V11", 155: "V12", 156: "V13", 157: "V14", 158: "V15", 159: "V16", 160: "V17", 161: "V18", 162: "V19", 163: "V20", 164: "V21", 165: "V22", 166: "V23",
    167: "A7", 168: "B7", 169: "C6", 170: "C7", 171: "D7", 172: "E8", 173: "F7", 174: "G7", 175: "H7", 176: "I7", 177: "J6", 178: "K7", 179: "L7", 180: "M8", 181: "O7", 182: "P7", 183: "P8", 184: "Q8", 185: "R7", 186: "R8", 187: "T9", 188: "U8", 189: "W7", 190: "Y7"
}

var STATS = {
    0: "BATTLES_WON",
    1: "WALLS_BUILT",
    2: "TOWERS_BUILT",
    3: "TRAPS_BUILT",
    4: "AMPLIFIERS_BUILT",
    5: "MANA_SPENT_ON_GEMS",
    6: "MANA_SPENT_ON_GT_MANA_LEECHING",
    7: "MANA_SPENT_ON_GT_CRITICAL_HIT",
    8: "MANA_SPENT_ON_GT_POOLBOUND",
    9: "MANA_SPENT_ON_GT_CHAIN_HIT",
    10: "MANA_SPENT_ON_GT_POISON",
    11: "MANA_SPENT_ON_GT_SUPPRESSING",
    12: "MANA_SPENT_ON_GT_BLOODBOUND",
    13: "MANA_SPENT_ON_GT_SLOWING",
    14: "MANA_SPENT_ON_GT_ARMOR_TEARING",
    15: "HIGHEST_GRADE_GEM_CREATED",
    16: "HIGHEST_MANA_REACHED",
    17: "SWARMLINGS_KILLED",
    18: "REAVERS_KILLED",
    19: "GIANTS_KILLED",
    20: "APPARITIONS_KILLED",
    21: "SPECTERS_KILLED",
    22: "SPIRES_KILLED",
    23: "SHADOWS_KILLED",
    24: "LONGEST_KILL_CHAIN",
    25: "WAVES_STARTED_EARLY",
    26: "WAVES_BEATEN",
    27: "MOST_WAVES_BEATEN_IN_ONE_BATTLE",
    28: "SWARMLINGS_SUMMONED",
    29: "REAVERS_SUMMONED",
    30: "GIANTS_SUMMONED",
    31: "SHRINES_ACTIVATED",
    32: "GEM_BOMBS_THROWN",
    33: "MANA_HARVESTED_FROM_SHARDS",
    34: "TOMBS_RAIDED",
    35: "BEACONS_DESTROYED",
    36: "MONSTER_NESTS_DESTROYED",
    37: "DEMOLITION_USED",
    38: "BANISHMENTS",
    39: "TOTAL_MANA_SPENT_ON_BANISHMENTS",
    40: "HIGHEST_GRADE_GEM_USED_IN_SHRINE",
    41: "MARKED_MONSTERS_KILLED",
    42: "TWISTED_MONSTERS_KILLED",
    43: "POSSESSED_MONSTERS_KILLED",
    44: "DROP_HOLDERS_OPENED",
    45: "DWELLINGS_DESTROYED",
    46: "SHRINE_KILLS",
    47: "TRAP_KILLS",
    48: "TOWER_SHOT_KILLS",
    49: "BEAM_KILLS",
    50: "BOLT_KILLS",
    51: "BARRAGE_SHELL_KILLS",
    52: "GEM_BOMB_KILLS",
    53: "POISON_KILLS",
    54: "ONE_HIT_KILLS",
    55: "MANA_GAINED_FROM_STARTING_WAVES_EARLY",
    56: "ENDURANCE_BATTLES_WON",
    57: "HIGHEST_GEM_MAXIMUM_DAMAGE_REACHED",
    58: "HIGHEST_MANA_POOL_LEVEL_REACHED",
    59: "GUARDIANS_KILLED",
}