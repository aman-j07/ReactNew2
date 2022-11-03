import React from 'react'
import "./FbMarketplace.css"

const products = [
    {
      id: 1,
      name: "Hamleys Foosball Table Football Game 69 Cms Indoor Sports for Kids Age 3Y+",
      photograph:
        "https://hamleysgumlet.gumlet.io/product/491603884/665/491603884-1.jpg",
      price: 4599,
      category: 3,
      description:"The Football Table is perfect for any indoor amusement between family, friends and colleagues. It features wood construction, Strong steel rods with slide bearings for smooth rotation and ball serve cups on both sides for convenience.",
      place:"Lucknow, UP"
    },
    {
      id: 2,
      name: "Toy Kraft Shellbound-1 DIY Art & Craft Kits for Kids age 5Y+",
      photograph:
        "https://hamleysgumlet.gumlet.io/product/490589156/665/490589156.jpg",
      price: 4599,
      category: 5,
      description:"Shells Are Lovely Natural Objects Unmatched In Diversity And Beauty. This Kit Provides (A Collection Of 6 Different) An Assortment Of Shells. The Shells Can Be Bonded To Board Cut-Outs (Also Provided In This Set). One Can Use The Designs On The Box As Leads To Make A Photo Frame For Three Pictures, An Ornamental Mirror And A Collage Of Three Mosaic Designs Using Shells. An Incredible Variety Of Decorative Utility Items From This Single 'Shell-Bound' Kit Itself! Your Displayed Craft Will 'Shell-Shock' Many An Admirer.",
      place:"Lucknow, UP"
    },
    {
      id: 3,
      name: "Miko 2 My Companion Robot - Red Robotics for Kids age 5Y+ (Red)",
      photograph:
        "https://hamleysgumlet.gumlet.io/product/491489816/665/491489816.jpg",
      price: 17999,
      category: 5,
      description:"Provide your kids with a friend they can rely on. Miko 2 personal robot is loaded with academic topics, news updates and facts about the world.",
      place:"Lucknow, UP"
    },
    {
      id: 4,
      name: "LEGO Cyber Drone Lego Blocks for Kids age 6Y+",
      photograph:
        "https://hamleysgumlet.gumlet.io/product/491959929/665/491959929-1.jpg",
      price: 1099,
      category: 6,
      description:"Provide your kids with a friend they can rely on. Miko 2 personal robot is loaded with academic topics, news updates and facts about the world.",
      place:"Lucknow, UP"
    },
    {
      id: 5,
      name: "Chilokbo Audi TT RS Battery Operated Ride-on Car Battery Operated Rideons for Kids age 18M + (Red)",
      photograph:
        "https://hamleysgumlet.gumlet.io/product/491281952/665/491281952.jpg",
      price: 25999,
      category: 1.5,
      description:"The Licensed Audi TT RS Ride-on comes with key start function which is followed by engine sound. This ride-on can be manually controlled or through remote control. Left-Right Steering and Forward-Backward movement can be done manually or through Remote. It has a Comfortable seat, backrest and retractable footrest making the ride more enjoyable. It comes with working front head lights and Built-in music system.",
      place:"Kanpur, UP"
    },
    {
      id: 6,
      name: "Lego 60329 School Day Building Blocks Multicolour 6Y+",
      photograph:
        "https://hamleysgumlet.gumlet.io/product/492910150/665/492910150-1.jpg",
      price: 7699,
      category: 6,
      description:"Exciting school adventures await with this Lego City School Day (60329) playset, featuring 2 classrooms and a playground with a climbing wall and hopscotch, plus a toy school bus and bicycle. The Road Plates, with pedestrian crossing and bike lane, can also be used to connect to other Lego sets, and with 7 minifigures, including 2 Lego City Adventures TV series TV characters, theres plenty of inspiration for imaginative play. | Build-and-play fun for kids aged 6 and up: This Lego constructionset includes a step-by-step printed building guide and interactive digital building instructions. Available in the free Lego Building Instructions app for smartphones and tablets, the digital guide comes with intuitive zoom and rotate tools that allow kids to visualize each model from all angles as they build. | A world of imaginative play: Lego City playsets put kids at the heart of the action with detailed structures, realistic vehicles and inspiring characters that nurture open-ended play based on real-life scenarios.",
      place:"New Delhi,Delhi"
    },
    {
      id: 7,
      name: "Diicii Brainvita Board Games for Kids age 8Y+",
      photograph:
        "https://hamleysgumlet.gumlet.io/product/491902265/665/491902265-1.jpg",
      price: 7699,
      category: 8,
      description:"We thought, why let the board games bore kids with the same old fun?. Reinventing it by adding a dicier dice, we added newer twists with 3 new games to our classic brainvita. | About Diicii. Blink. And the game changes. Every time Diicii lights up in green or red to mean: plus-minus, forward-backward, Player1-Player 2, the possibilities are as endless as your imagination. Built with a twist on every roll. Diicii will always keep the game surprising and the player on the edge. | How to use Diicii. Pull the strip on the Diicii before using it for the first time. Hold the Diicii in your palm and wait for it to stop blinking. Roll the Diicii onto a flat surface to get a number and colour.",
      place:"Mumbai,Maharashtra"
    },
    {
      id: 8,
      name: "Nerf Elite 2.0 Echo CS 10 Blaster Toy for Kids 8Y+, Multicolour",
      photograph:
        "https://hamleysgumlet.gumlet.io/product/491902646/665/491902646-1_2678.webp",
      price: 2294,
      category: 8,
      description:"Gear up for battle with Nerf Elite 2.0 blasters that feature built-in customizing capabilities so you can upgrade them and seize the advantage in Nerf competitions. Build your stockpile of Elite 2.0 blasters to optimize your game strategy and bring tactical performance and flexibility to every mission and battle! Customize the blaster for every battle or mission by taking advantage of the removable stock and removable barrel extension, and 5 tactical rails Comes with 24 Official Nerf darts to fully load the 10-dart clip -- and 14 more darts for reloads Go the distance with this blaster that fires darts up to 90 feet (27 meters)",
      place:"Pune,Maharashtra"
    },
    {
      id: 9,
      name: "Hamleys Monster 1:16 2.4G Remote Control Rock Crawler Alloy Black 7Y+",
      photograph:
        "https://hamleysgumlet.gumlet.io/product/492408250/665/492408250-1.jpg",
      price: 2299,
      category: 7,
      description:"Super-strong anti-falling race car and makes the cross-country car have better performance during the process of driving | Battery operated 1:16 scale size full function pro steering that goes forward and backward, turn left and right | A super-strong anti-collision structure is designed according to the structure of the car model | Over sized tires make it possible to drive this car even in mud, mountain road, shallow water, grass, paving, can easily through, let you infinite enjoy crazy off-road",
      place:"Ludhiana,Punjab"
    },
    {
      id: 10,
      name: "Jaspo Destructor Graffiti Fiber Skateboards Multicolor 8Y+",
      photograph:
        "https://hamleysgumlet.gumlet.io/product/491947853/665/491947853-1.jpg",
      price: 3149,
      category: 8,
      description:"Durable: heavy duty 4 inches height and 8 inches fiber trucks and polyurethane-injected bushings support higher weight and faster speed | age and weight: recommended for ages 8 years and older, supports weight up to 22 lbs | comfortable: 31 inches in length, 8 inches in width, and a shape that is amazing comfortable especially for beginners all combine to make this the perfect destructor choice | pro grade grip tape: best adhesion and grip designed for skateboard riders of all levels | improves riders grip which leads to better tricks and greater safety | complete skateboard: 31x8 inches skateboard with a thick, durable light weighted fiber deck and rounded edges. double pillar design provides greater control, allows for wide range of tricks, and easy gripping control. extra handling support provides good grip while stunting | smooth ride: 55mm polyurethane-injected wheels with hardness of 95 a and abec-7 608zz bearings deliver a smooth ride on any surface!",
      place:"Mumbai,Maharashtra"
    },
    {
      id: 11,
      name: "Marvel Avengers: Endgame Red Infinity Gauntlet Electronic Fist Action Figure with Light and Sound for age 5Y+",
      photograph:
        "https://hamleysgumlet.gumlet.io/product/491635724/665/491635724-1.jpg",
      price: 1079,
      category: 5,
      description:"When Thanos Wants To Take Over Total Control Of The Galaxy, He Sets Out On A Mission To Find The Infinity Stones And Store Them In His Impressive, Golden Infinity Gauntlet. Imagine The Incredible, Super-Powered Action Of The Avengers With Figures, Role Play Inspired By Avengers: Endgame! This Infinity Gauntlet Is Inspired By The Avengers: Endgame Movie, Part Of The Marvel Cinematic Universe That Includes Avengers: Infinity War. Avengers: Infinity War Features Characters Like Iron Man, Captain America, Spider-Man, Black Panther, And More! With Avengers: Endgame -Inspired Toys, Kids Can Imagine Battling Like Their Favourite Heroes And Playing Their Part In Saving The Galaxy! Kids Can Imagine Summoning The Power Of The Infinity Stones And Controlling The Fate Of The Galaxy With The Light-Up Electronic Gauntlet, Including Lights And Sounds! Push The Centre Button On The Fist To Light Up The Centre Stone And To Activate Mighty Sound Fx! The Infinity Gauntlet Electronic Fist Is Designed To Fit Most Kid Hand Sizes."
    },
    {
      id:12,
      name:"Uboard Infinity Hover Board for Outdoor play Multicolor 14Y+",
      photograph:"https://hamleysgumlet.gumlet.io/product/492409219/665/492409219%20-%201.webp",
      price:34999,
      category:14,
      description:"Fun loving toys with outdoor activity | Keeps childern engaged for hours of creativity and fun. | Body Movement booster | It as LED wheels | Takes upto 100kgs | Max 10Km Range"
    },
    {
      id:13,
      name:"LEGO Police Station 10278 Building Kit (2,923 Pieces)",
      photograph:"https://hamleysgumlet.gumlet.io/product/492409195/665/492409195-1.webp",
      price:19999,
      category:12,
      description:"Recreate the drama of a busy police station with this collectible LEGO Police Station for adults. Beside the police station is a donut shop, but the tasty goods are going missing! Who is behind this sticky-fingered theft? Uncover a series of thrilling details as you build the scenes to solve the crime. Part of the Modular Buildings Collection, this model makes a striking display piece."
    },
    {
      id:14,
      name:"Hamleys Bubble Blaster With Fuel Impulse Toys for Kids Orange 3Y+",
      photograph:"https://hamleysgumlet.gumlet.io/product/492407842/665/492407842-1.JPG",
      price:1799,
      category:3,
      description:"Hamleys Bubble Blaster is a fun new twist on a proven play pattern & designed to be easy for young children to hold and operate. | The motorized bubble blower makes it easy for even young children to create streams of colourful bubbles. | Pull the trigger for thousands of bubbles. | Great for active and imaginative play."
    },
    {
      id:15,
      name:"Paw Patrol Basic Vehicle Marshall Chase Red 3Y+",
      photograph:"https://hamleysgumlet.gumlet.io/product/492410153/665/492410153-1.jpg",
      price:919,
      category:3,
      description:"The PAW Patrol are on a roll in their rescue vehicles! Join Marshall on action-packed missions with his Fire Engine! When trouble strikes, place Marshall (figure included) into the drivers seat and roll to the rescue with real working wheels and a moveable ladder! With authentic detailing and realistic features, the PAW Patrols beloved fire dog and his truck bring all the excitement of PAW Patrol toys to life. As your child plays with Marshall and his Fire Engine, your childs imagination will be lit up with rescue missions full of friendship, teamwork and bravery. Team up with the rest of the animal figures and their rescue vehicles (all toy cars sold separately) and help save the day in Adventure Bay! Race to the ruff ruff rescue with Marshall and his Fire Engine!"
    },
    {
      id:16,
      name:"ELC Twist and Turn House Activity Game for Kids 12M+, Multicolour",
      photograph:"https://hamleysgumlet.gumlet.io/product/492365284/665/492365284-1.jpg",
      price:1279,
      category:1,
      description:"Bursting with fun challenges for little hands to enjoy, the Twist and Turn Activity House from Early Learning Centre is perfect to keep little ones entertained | A multi-activity play area with gears, doors that open and close, a spiral ball run, shape sorting, and ball pounding | It encourages young toddlers to smash the ball into the chimney of the house with a variety of activities to keep little hands occupied and develop the fine motor skills, hand-to-eye coordination and problem-solving skills | They can reach inside to find the ball after seeing it swirl around the roof and crash into the building. Parents can teach kids how to use the keys to open the doors and urge them to try to post the shapes within the house because toddlers love to do so aka it is a perfect toy for kids."
    },
    {
      id:17,
      name:"Hamleys Ping Ping Panda, 32Cm",
      photograph:"https://hamleysgumlet.gumlet.io/product/491948350/665/491948350-1.jpg",
      price:1869,
      category:1,
      description:"Ping ping adds an exotic touch to the animal kingdom and enjoys taking things easy. Ping ping doesnt take life too seriously and has a cheeky side to him. When hes not munching on bamboo or hiding in the hollow of his favourite tree, ping ping can often be found tickling the other animals and challenging the monkeys to climbing competitions. Naturally after a long day, ping ping likes nothing more than to cuddle up and take a nap somewhere cosy. Do you know anywhere he might like? Ping ping is 32cm tall, has a luxuriously soft fur coat and a friendly and adorable hand-stitched face."
    },
    {
      id:18,
      name:"Lego 31100 Sports Car Blocks for Kids age 6Y+",
      photograph:"https://hamleysgumlet.gumlet.io/product/491636277/665/491636277-1.jpg",
      price:999,
      category:6,
      description:"Hop in this awesome red sports car and hit the road! Start the powerful engine of this cool red and black machine, put your foot on the gas pedal and go, go, go! For more fun, rebuild it into A cool hot rod to set A new speed record, turn it into an old-fashioned plane and head off to the air show, or free your imagination and build something new. Feel the need for speed with this cool 3in1 set!"
    },
    {
      id:19,
      name:"Hamleys Wooden Labyrinth Board Game Multicolour 6Y+",
      photograph:"https://hamleysgumlet.gumlet.io/product/492364331/665/492364331-1.jpg",
      price:1169,
      category:6,
      description:"Labyrinth is the ancient game of skill, thrills and spills | The aim of the game is to tilt the play board to guide the ball to the end of the maze, without letting it fall into any of the holes | Challenge yourself to this classic game on a traditional style wooden playing board from Hamleys | This lovely game board comes with 2 steel balls."
    },
    {
      id:20,
      name:"Smartivity Fantastic Optics Kaleidoscope: Stem, Learning, Educational and Construction Activity Toy Gift for Kids age 6Y+ (Multi-Color)",
      photograph:"https://hamleysgumlet.gumlet.io/product/491316325/665/491316325-2.jpg",
      price:584,
      category:6,
      description:"Relive the spectacle of your childhood with Smartivity Fantastic Optics Kaleidoscope stem, educational, learning, science, D.I.Y. toy kit. Introduce your child to an infinite sequence of patterns, a dazzling world of colours. First designed by Scotsman Dr. David Brewster in 1816, a kaleidoscope is not just another toy. It is a portal into the fascinating world of patterns and colours. Used as a source of inspiration by designers and artists, kaleidoscope inspires creativity and introduces your child to the wonders of light, colours and reflection. Give your child a peek into the magical new dimension where colours dance and wonders abound. Vibrant and colourful, Smartivity Fantastic Optics Kaleidoscope S.T.E.M. Learning D.I.Y. kit opens up a world of patterns and designs for your child. It contains all the elements necessary to build this spectacular device. Just fill the kaleidoscope drum with colourful trinkets included in the kit, and watch your child explore the wonders of light and colours."
    },
    {
      id:21,
      name:"Hasbro Risk strategy Board Game for kids 10Y+, Multicolour",
      photograph:"https://hamleysgumlet.gumlet.io/product/491334374/665/491334374-1_3395.webp",
      price:2499,
      category:10,
      description:"Take over the world in this game of strategy conquest, now with updated figures and improved mission cards. In the Risk game, the goal is simple,players aim to conquer their enemies and territories by building an army, moving their troops in, and engaging in battle. Depending on the roll of the dice, a player will either defeat the enemy or be defeated. This exciting game is filled with betrayal, alliances, and surprise attacks. On the battlefield, anything goes! Defeat all of the enemy troops in a territory to conquer that territory and get one step closer to global conquest! The player who completes his or her secret mission first--and reveals the Secret Mission card to prove it--wins. Dice and five armies are included in war crates."
    },
    {
      id:22,
      name:"Starter Power Fit Starter Tube Large Multicolor 8Y+",
      photograph:"https://hamleysgumlet.gumlet.io/product/492408088/665/492408088-1.jpg",
      price:809,
      category:8,
      description:"Kids amazing engaging ames leading to physical exercise, making them healthy | The fitness tubes are made of natural latex | stackable, non-irritant and odor free, thereby being an excellent choice for your health, fitness and performance | Perfect for physical therapy, exercise, weight loss, pilates, muscle toning, muscle strengthening, stretching, rehabilitation, and general health and fitness."
    },
    {
      id:23,
      name:"Shooting star Xylophone red 18M+",
      photograph:"https://hamleysgumlet.gumlet.io/product/492409373/665/492409373.jpg",
      price:1199,
      category:1.5,
      description:"A beautiful Red coloured Xylophone with 7 notes and 2 sticks | A toy Made in India, that required no batteries and provides endless hours of melodious sound | The subtle sound of this Melodious Xylophone helps to develop the budding musician in your child, inclining them towards music in their early years | The sticks when played on the colourful notes, makes beautiful music and has the capability of keeping a child engrossed for hours | Helps to develop a good sense of sound in a child | The product is Made in India, and helps to keep up with the tradition of making good music in the country"
    },
    {
      id:24,
      name:"MIKO 3 Martian Red",
      photograph:"https://hamleysgumlet.gumlet.io/product/492409116/665/492409116.jpg",
      price:16399,
      category:5,
      description:"Created by an enthusiastic team of robotics engineers, AI innovators, psychologists, and educators, Miko 3 is an AI-powered smart robot that uses playful, conversational learning to educate, engage and entertain kids aged 5-12 years. Housing a wide range of academic opportunities and an integrated learning platform that offers access to live classes from educators worldwide, Miko is a healthy gateway to what technology has to offer. Miko 3 converses with the child through self-initiated conversations. It is enabled with a proprietary emotional intelligence engine, Face Recognition, Directional Hearing, enabling it to see, hear and sense the child's moods and grows with the child with every interaction. This robot for kids includes a vast range of academic opportunities, unlimited games, an entire pool of premium content like coding apps, foreign languages, and much more, accessible through a wide-angled, high-resolution expensive touch screen. With a shell of ABS Polymer, Miko is tougher than it looks. Thoughtfully engineered to be impact-resistant, non-toxic, and built to last. Expand your kid's world with Miko."
    },
    {
      id:25,
      name:"Sirius Toys Hover Blast 3 in 1 Air, Land and Sea Drone Remote Control Toys for Kids age 8Y+",
      photograph:"https://hamleysgumlet.gumlet.io/product/491602358/665/491602358.jpg",
      price:5499,
      category:8,
      description:"This intelligent drone takes you across air, land and sea for the ultimate ride. Its 6 axis gyro stability and speed control makes it perfect for beginners. Pro fly lets you soar through the sky whilst hydro blast lets you hover across water, and hover drive for a flight along the ground. Show off your skills and perform 3D tricks and flips or let auto direction take you for a smooth, effortless flight. Auto return means your drone will always come back to you for greater peace of mind, wherever you go. After all the fun, simply recharge via USB for the next journey!"
    },
  ];
const FbMarketplace = () => {
  return (
    <div id="marketPlace">
        <div id="sideNav">
          <div id="header">
            <div className="flexDiv"><h2>Marketplace</h2><div className='circledDiv'><i className="fa-solid fa-gear"></i></div></div>
            <input id="inpSearchMarketplace" placeholder='Search Marketplace'/>
            <div id="optionsCategories">
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-online-store-50.png"/></div>Browse All</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-bell-32.png"/></div>Notifications</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-inbox-64.png"/></div>Inbox</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-price-tag-usd-64.png"/></div>Buying</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-shopping-bag-full-32.png"/></div>Selling</div>
                <div className='optionCategory optionCategoryCreate'>+ Create new listing</div>
                <hr/>
                <h3>Categories</h3>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-carpool-30.png"/></div>Vehicles</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-property-66.png"/></div>Property for rent</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-shopping-bag-full-32.png"/></div>Classifieds</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-t-shirt-24.png"/></div>Clothing</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-smartphone-48.png"/></div>Electronics</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-movie-projector-48.png"/></div>Entertainment</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-favorite-52.png"/></div>Family</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-hammer-48.png"/></div>Gardens and outdoors</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-pencil-drawing-48.png"/></div>Hobbies</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-home-page-48.png"/></div>Home goods</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-open-end-wrench-50.png"/></div>Home improvement tools</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="guitar-instrument.png"/></div>Musical Instruments</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-shopping-bag-full-32.png"/></div>Office supplies</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-cat-footprint-50.png"/></div>Pet supplies</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-property-66.png"/></div>Property for sale</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-exercise-48.png"/></div>Sporting goods</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-game-controller-50.png"/></div>Toys and games</div>
                <div className='optionCategory'><div className='circledDiv circledDivSmaller'><img src="icons8-people-30.png"/></div>Buy-and-sell groups</div>
            </div>
          </div>
        </div>
        <div id="list">
        {products.map((item)=>{ return <div id={item.id} className="item" ><img alt="null" src={item.photograph}/><div className="itemDetails"><p id="paraitemPrice">₹{item.price}</p><p id='paraitemName'>{item.name.slice(0,35)}</p><p id="paraitemPlace">{item.place}</p></div></div>})}
        </div>
    </div>
  )
}

export default FbMarketplace