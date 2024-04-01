 const mockData = [
  {
    "id": 11,
    "first_name": "Crista",
    "last_name": "Itzcovich",
    "email": "citzcovicha@tumblr.com",
    "content": "React, developed by Facebook, is a powerful and widely-used JavaScript library for building user interfaces. Launched in 2013, React has become a cornerstone in modern web development due to its efficiency, flexibility, and emphasis on a declarative programming paradigm.",
    "img": "/books.jpg",
    "title": "Introduction to React"
  },

  {
    "id": 3,
    "first_name": "Randell",
    "last_name": "Raye",
    "email": "rraye2@soundcloud.com",
    "content": "Randell Raye, a seeker of knowledge, stumbled upon a hidden library in the heart of the city. As he delved into dusty volumes and ancient scrolls, the words came alive, transporting him to realms beyond imagination. Each page turned unveiled the power of wisdom and the magic of learning.",
    "img": "https://source.unsplash.com/800x600/?architecture",
    "title": "Wisdom's Unveiling"
  },
  {
    "id": 1,
    "first_name": "Merola",
    "last_name": "Bremeyer",
    "email": "mbremeyer0@webmd.com",
    "content": "Once upon a time in a small town, Merola Bremeyer embarked on a journey of self-discovery. She wandered through meadows and forests, encountering magical creatures and mysterious landscapes. As she ventured further, the secrets of her own heart unfolded, revealing a story of courage and resilience.",
    "img": "https://source.unsplash.com/800x600/?portrait",
    "title": "Heart's Resilience"
  },
  {
    "id": 2,
    "first_name": "Minetta",
    "last_name": "Abbet",
    "email": "mabbet1@chron.com",
    "content": "In a quaint village nearby, Minetta Abbet found herself in the midst of a grand adventure. Ancient legends whispered through the cobblestone streets, and Minetta felt the echoes of history in every corner. Her journey became a tapestry woven with threads of friendship, love, and the pursuit of dreams.",
    "img": "https://source.unsplash.com/800x600/?people",
    "title": "Whispers of Friendship"
  },
  {
    "id": 16,
    "first_name": "Calley",
    "last_name": "Ruspine",
    "email": "cruspinef@smugmug.com",
    "content": "Calley Ruspine, a free spirit with a love for adventure, roamed the world with a backpack and a map. Through deserts and mountains, she found freedom in the open road. Calley's story unfolded as a nomadic poem, celebrating the beauty of the journey and the joy of discovering new horizons.",
    "img": "https://source.unsplash.com/800x600/?adventure",
    "title": "Nomadic Poem"
  },

  {
    "id": 4,
    "first_name": "Jobye",
    "last_name": "Paullin",
    "email": "jpaullin3@home.pl",
    "content": "Jobye Paullin, a spirited adventurer, set sail across vast oceans in pursuit of the unknown. The rhythmic waves became her companions, and the stars above guided her path. Through storms and calm seas, Jobye discovered the strength within, embracing the beauty of the ever-changing horizon.",
    "img": "https://source.unsplash.com/800x600/?ocean",
    "title": "Horizon's Embrace"
  },
  {
    "id": 5,
    "first_name": "Florinda",
    "last_name": "Brock",
    "email": "fbrock4@360.cn",
    "content": "Florinda Brock, a dreamer with a heart full of aspirations, found herself in a magical garden. Each blossom whispered tales of hope, and the fragrant air carried the promise of a bright future. In this enchanted realm, Florinda's dreams took flight, painting the sky with colors of joy and possibility.",
    "img": "https://source.unsplash.com/800x600/?flowers",
    "title": "Garden of Dreams"
  },
  {
    "id": 6,
    "first_name": "Tabbatha",
    "last_name": "Guilloux",
    "email": "tguilloux5@hugedomains.com",
    "content": "Tabbatha Guilloux, a guardian of nature, roamed the wilderness to protect its delicate balance. Amidst towering trees and babbling brooks, she discovered the interconnected dance of life. Tabbatha's journey became a testament to the importance of harmony and the enduring beauty of the natural world.",
    "img": "https://source.unsplash.com/800x600/?forest",
    "title": "Dance of Harmony"
  },
  {
    "id": 7,
    "first_name": "Kirby",
    "last_name": "Wellum",
    "email": "kwellum6@senate.gov",
    "content": "Kirby Wellum, a visionary artist, crafted masterpieces that transcended time and space. With every stroke of the brush, he breathed life into canvases, telling stories that stirred the soul. Through the kaleidoscope of colors, Kirby shared the profound language of art that spoke to hearts across generations.",
    "img": "https://source.unsplash.com/800x600/?art",
    "title": "Canvas of Souls"
  },
  {
    "id": 8,
    "first_name": "Patricia",
    "last_name": "Yell",
    "email": "pyell7@constantcontact.com",
    "content": "Patricia Yell, a healer with a gentle touch, walked the path of compassion and empathy. In the quiet corners of hospitals and clinics, she offered solace to those in need. Patricia's story unfolded as a testament to the transformative power of kindness, leaving a trail of warmth in the hearts she touched.",
    "img": "https://source.unsplash.com/800x600/?doctor",
    "title": "Healer's Warmth"
  },
  {
    "id": 9,
    "first_name": "Concordia",
    "last_name": "Cheesman",
    "email": "ccheesman8@samsung.com",
    "content": "Concordia Cheesman, a keeper of traditions, celebrated the richness of culture and heritage. Through lively festivals and ancient rituals, she preserved the tapestry of generations past. Concordia's journey became a vibrant mosaic, weaving together the threads of history to create a timeless narrative.",
    "img": "https://source.unsplash.com/800x600/?culture",
    "title": "Traditions' Mosaic"
  },
  {
    "id": 10,
    "first_name": "Mamie",
    "last_name": "Harmeston",
    "email": "mharmeston9@goodreads.com",
    "content": "Mamie Harmeston, a storyteller at heart, wandered through bustling marketplaces, sharing tales that captivated the imagination. In the flickering light of campfires, her words danced like fireflies, enchanting listeners with stories of love, bravery, and the enduring power of the human spirit.",
    "img": "https://source.unsplash.com/800x600/?market",
    "title": "Fireside Tales"
  },

  {
    "id": 12,
    "first_name": "Jacqueline",
    "last_name": "De Marchi",
    "email": "jdemarchib@umn.edu",
    "content": "Jacqueline De Marchi, a seeker of beauty, meandered through art galleries and landscapes, finding inspiration in every brushstroke and sunset. Her life became a canvas, painted with the colors of passion and creativity. Jacqueline's story was a testament to the transformative power of art in shaping the human experience.",
    "img": "https://source.unsplash.com/800x600/?artgallery",
    "title": "Canvas of Passion"
  },
  {
    "id": 13,
    "first_name": "Bevan",
    "last_name": "Raddenbury",
    "email": "braddenburyc@trellian.com",
    "content": "Bevan Raddenbury, an architect of dreams, designed structures that reached for the sky. In the blueprints of his imagination, he built bridges between reality and fantasy, leaving an indelible mark on the world. Bevan's journey unfolded as an architectural marvel, a testament to the boundless possibilities of human ingenuity.",
    "img": "https://source.unsplash.com/800x600/?architecture2",
    "title": "Bridges of Dreams"
  },
  {
    "id": 14,
    "first_name": "Royal",
    "last_name": "Treppas",
    "email": "rtreppasd@blogs.com",
    "content": "Royal Treppas, a lover of words, sailed through the seas of literature and poetry. In the pages of books and verses of rhyme, he discovered the magic of language. Royal's story became an epic poem, echoing the beauty of expression and the timeless resonance of the written word.",
    "img": "https://source.unsplash.com/800x600/?writing",
    "title": "Epic Verses"
  },
  {
    "id": 15,
    "first_name": "Kellen",
    "last_name": "Minihan",
    "email": "kminihane@mayoclinic.com",
    "content": "Kellen Minihan, a scientist with an insatiable curiosity, unraveled the mysteries of the universe through the lens of a microscope. In laboratories and observatories, Kellen's discoveries reshaped the boundaries of knowledge. His journey became a scientific odyssey, exploring the wonders of the cosmos and the intricacies of life.",
    "img": "https://source.unsplash.com/800x600/?science",
    "title": "Cosmic Odyssey"
  },

  {
    "id": 17,
    "first_name": "Kaile",
    "last_name": "Lamberth",
    "email": "klamberthg@census.gov",
    "content": "Kaile Lamberth, a guardian of justice, stood firm in the face of adversity. In courtrooms and halls of law, she fought for the rights of the voiceless. Kaile's journey became a legal saga, weaving together the threads of fairness and equity in the pursuit of a just society.",
    "img": "https://source.unsplash.com/800x600/?justice",
    "title": "Justice's Saga"
  },
  {
    "id": 18,
    "first_name": "Juliana",
    "last_name": "Josskowitz",
    "email": "jjosskowitzh@fema.gov",
    "content": "Juliana Josskowitz, a steward of the environment, planted seeds of sustainability that blossomed into a greener world. Amidst forests and gardens, she nurtured the delicate balance between humanity and nature. Juliana's story unfolded as an ecological fable, reminding the world of the importance of preserving our planet.",
    "img": "https://source.unsplash.com/800x600/?environment",
    "title": "Green Symphony"
  },
  {
    "id": 19,
    "first_name": "Ingra",
    "last_name": "Furniss",
    "email": "ifurnissi@bloglines.com",
    "content": "Ingra Furniss, a culinary artist, crafted delectable masterpieces that tantalized the taste buds. In kitchens and dining halls, she wove together flavors that danced on the palate. Ingra's journey became a gastronomic symphony, celebrating the art of food and the joy of sharing meals with loved ones.",
    "img": "https://source.unsplash.com/800x600/?food",
    "title": "Culinary Symphony"
  },
  {
    "id": 20,
    "first_name": "Sidonnie",
    "last_name": "Ianittello",
    "email": "sianittelloj@washingtonpost.com",
    "content": "Sidonnie Ianittello, a dreamweaver, spun tales of imagination that transported listeners to fantastical realms. Through the power of storytelling, she created worlds where dreams and reality intertwined. Sidonnie's story unfolded as a magical narrative, inviting others to embrace the enchantment of their own dreams.",
    "img": "https://source.unsplash.com/800x600/?fantasy",
    "title":"Bridges of Throns"
  }
];

export default mockData