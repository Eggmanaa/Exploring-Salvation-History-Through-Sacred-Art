export interface Artwork {
  id: string;
  artist: string;
  title: string;
  year: string;
  image_url: string;
  source: string;
  license: string;
}

export interface DiscussionQuestion {
  id: number;
  question: string;
}

export interface Typology {
  id: number;
  theme: string;
  category: 'Christological' | 'Marian' | 'Prophetic and Ecclesial' | 'Sacramental';
  old_testament: Artwork;
  new_testament: Artwork;
  type_description: string;
  antitype_description: string;
  key_parallels: string[];
  scripture_ot: string;
  scripture_nt: string;
  theological_significance: string;
  discussion_questions: DiscussionQuestion[];
}

export const typologies: Typology[] = [
  // PART I: CHRISTOLOGICAL TYPOLOGY
  {
    id: 1,
    theme: "The New Adam",
    category: "Christological",
    old_testament: {
      id: "1a",
      artist: "Albrecht Dürer",
      title: "Adam and Eve",
      year: "1504",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Albrecht_D%C3%BCrer_-_The_Fall_of_Man_%28Adam_and_Eve%29_-_Google_Art_Project.jpg/800px-Albrecht_D%C3%BCrer_-_The_Fall_of_Man_%28Adam_and_Eve%29_-_Google_Art_Project.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "1b",
      artist: "Albrecht Dürer",
      title: "Christ as the Man of Sorrows",
      year: "1493",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Man_of_Sorrows_by_A.Durer.jpg/800px-Man_of_Sorrows_by_A.Durer.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "Adam, the first man, whose one act of disobedience in the Garden of Eden, by eating fruit from a tree, brought sin, toil, and death to all humanity.",
    antitype_description: "Jesus Christ, the new head of humanity, whose perfect obedience, even 'unto death on a cross,' brought righteousness and eternal life.",
    key_parallels: [
      "Adam's sin occurred in a garden at a tree",
      "Christ's redemption began with his agony in a garden (Gethsemane)",
      "Redemption was accomplished on the 'tree' of the cross",
      "Where Adam brought death through disobedience, Christ brings life through obedience"
    ],
    scripture_ot: "Genesis 2:15-17; 3:1-24",
    scripture_nt: "Romans 5:12-21; 1 Corinthians 15:21-22, 45-49; Philippians 2:8",
    theological_significance: "The Adam-Christ typology reveals God's plan to restore humanity through a new representative head. Where the first Adam failed as humanity's federal head, bringing condemnation to all, the Last Adam succeeds perfectly, bringing justification to all who believe. This typology emphasizes both the universality of sin and the superabundance of grace.",
    discussion_questions: [
      { id: 1, question: "How does understanding Jesus as the New Adam deepen your appreciation of the Incarnation?" },
      { id: 2, question: "In what ways does the garden-to-garden narrative (Eden to Gethsemane) reveal God's redemptive plan?" },
      { id: 3, question: "How does the tree of knowledge parallel the tree of the cross in salvation history?" },
      { id: 4, question: "What does it mean that Christ succeeded where Adam failed? How does this affect your daily Christian life?" },
      { id: 5, question: "How does Paul's teaching on the two Adams help us understand original sin and redemption?" }
    ]
  },
  {
    id: 2,
    theme: "The Beloved Son - Isaac",
    category: "Christological",
    old_testament: {
      id: "2a",
      artist: "Rembrandt",
      title: "The Sacrifice of Isaac",
      year: "1635",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Rembrandt_Harmensz._van_Rijn_035.jpg/800px-Rembrandt_Harmensz._van_Rijn_035.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "2b",
      artist: "El Greco",
      title: "Christ Carrying the Cross",
      year: "1580",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Christ_Carrying_the_Cross_1580.jpg/800px-Christ_Carrying_the_Cross_1580.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "Isaac, Abraham's 'only beloved son,' whom he is commanded to offer as a sacrifice on Mount Moriah. Isaac carries the wood for his own sacrifice up the mountain.",
    antitype_description: "Jesus Christ, the 'only begotten Son' of God the Father, who is freely offered for the salvation of the world. Jesus carries the wood of His cross to Calvary.",
    key_parallels: [
      "Both are beloved, only sons",
      "Both carry the wood for their sacrifice",
      "Both sacrifices occur on mountains in the same range (Moriah/Calvary)",
      "Abraham's prophecy 'God himself will provide the lamb' fulfilled in Christ",
      "The ram caught in thorns prefigures Christ crowned with thorns"
    ],
    scripture_ot: "Genesis 22:1-19",
    scripture_nt: "John 3:16; 19:17; Hebrews 11:17-19",
    theological_significance: "The Isaac typology profoundly illustrates the Father's sacrificial love and the Son's willing obedience. Abraham's willingness to sacrifice his only son becomes a window into the Father's heart, while Isaac's submission prefigures Christ's voluntary self-offering. This type emphasizes that salvation requires a costly sacrifice - one that only God Himself could provide.",
    discussion_questions: [
      { id: 1, question: "How does Abraham's willingness to sacrifice Isaac help us understand God the Father's love?" },
      { id: 2, question: "What significance do you see in both Isaac and Jesus carrying wood for their sacrifice?" },
      { id: 3, question: "How does the location of these sacrifices (Mount Moriah/Calvary) reveal God's providence?" },
      { id: 4, question: "In what ways does the ram caught in thorns point to Christ's passion?" },
      { id: 5, question: "How does this typology deepen your understanding of John 3:16?" }
    ]
  },
  {
    id: 3,
    theme: "The New Moses",
    category: "Christological",
    old_testament: {
      id: "3a",
      artist: "Rembrandt",
      title: "Moses with the Tablets",
      year: "1659",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Rembrandt_-_Moses_with_the_Ten_Commandments_-_Google_Art_Project.jpg/800px-Rembrandt_-_Moses_with_the_Ten_Commandments_-_Google_Art_Project.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "3b",
      artist: "Carl Bloch",
      title: "The Sermon on the Mount",
      year: "1877",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Bloch-SermonOnTheMount.jpg/800px-Bloch-SermonOnTheMount.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "Moses, the great prophet who liberated Israel from bondage in Egypt, mediated the Old Covenant, and gave the Law on Mount Sinai after fasting for 40 days.",
    antitype_description: "Jesus Christ, the definitive Prophet who liberates all humanity from the slavery of sin, mediates the New and eternal Covenant, and gives the New Law of Love in the Sermon on the Mount.",
    key_parallels: [
      "Both escaped infant massacres (Pharaoh/Herod)",
      "Both came out of Egypt",
      "Both fasted for 40 days in the wilderness",
      "Moses gave Law on Mount Sinai; Jesus gave New Law on the Mount",
      "Moses performed signs and wonders; Jesus performed greater miracles",
      "Moses led through the Red Sea; Jesus provides baptism"
    ],
    scripture_ot: "Exodus 2-20; Deuteronomy 18:15-18",
    scripture_nt: "Matthew 2:13-21; 4:1-2; 5-7; Acts 3:22-23; Hebrews 3:1-6",
    theological_significance: "The Moses-Christ typology reveals Jesus as the prophet greater than Moses promised in Deuteronomy. Where Moses mediated a covenant written on stone, Christ mediates a covenant written on hearts. This typology emphasizes continuity and fulfillment - the New Law doesn't abolish but perfects the Old, revealing God's consistent yet progressive revelation.",
    discussion_questions: [
      { id: 1, question: "How does Jesus fulfill and surpass Moses' role as lawgiver and liberator?" },
      { id: 2, question: "What is the significance of both Moses and Jesus fasting for 40 days before their ministries?" },
      { id: 3, question: "How do the Ten Commandments relate to the Beatitudes?" },
      { id: 4, question: "In what ways does the Exodus from Egypt prefigure our salvation from sin?" },
      { id: 5, question: "How does understanding Jesus as the New Moses affect how you read the Sermon on the Mount?" }
    ]
  },
  {
    id: 4,
    theme: "The Betrayed Savior - Joseph",
    category: "Christological",
    old_testament: {
      id: "4a",
      artist: "Konstantin Flavitsky",
      title: "Joseph Sold by His Brothers",
      year: "1855",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Konstantin_Flavitsky_001.jpg/1012px-Konstantin_Flavitsky_001.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "4b",
      artist: "Caravaggio",
      title: "The Taking of Christ",
      year: "1602",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/The_Taking_of_Christ-Caravaggio_%28c.1602%29.jpg/1024px-The_Taking_of_Christ-Caravaggio_%28c.1602%29.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "Joseph, the favored son of Jacob, who was betrayed by his brothers, sold for silver, descended into the pit, and yet rose to become the savior of his people by providing them with bread during famine.",
    antitype_description: "Jesus Christ, the beloved Son of the Father, who was betrayed by His own people, sold for thirty pieces of silver, descended into death, and through His resurrection became the source of salvation, providing the Bread of Life.",
    key_parallels: [
      "Both were beloved sons",
      "Both were betrayed by their own (brothers/people)",
      "Both were sold for silver",
      "Both descended (pit/death) and rose (to power/from death)",
      "Both saved their people through bread",
      "Both forgave those who betrayed them"
    ],
    scripture_ot: "Genesis 37-50",
    scripture_nt: "Matthew 26:14-16; 27:3-10; John 6:35",
    theological_significance: "Joseph's story provides one of the most complete Old Testament portraits of Christ's paschal mystery. His journey from favored son through betrayal and apparent death to exaltation and salvation of his people mirrors Christ's path. The typology emphasizes that God can bring good from evil, using even betrayal and suffering as instruments of salvation.",
    discussion_questions: [
      { id: 1, question: "How does Joseph's forgiveness of his brothers prefigure Christ's forgiveness from the cross?" },
      { id: 2, question: "What parallels do you see between Joseph providing bread in Egypt and Jesus as the Bread of Life?" },
      { id: 3, question: "How does the sale of Joseph for silver connect to Judas's betrayal of Jesus?" },
      { id: 4, question: "In what ways does Joseph's statement 'You meant it for evil, but God meant it for good' apply to the crucifixion?" },
      { id: 5, question: "How does this typology help us understand suffering and providence in our own lives?" }
    ]
  },
  {
    id: 5,
    theme: "King David and the Eternal Kingdom",
    category: "Christological",
    old_testament: {
      id: "5a",
      artist: "Gerard van Honthorst",
      title: "King David Playing the Harp",
      year: "1622",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gerard_van_Honthorst_-_King_David_Playing_the_Harp_-_Google_Art_Project.jpg/800px-Gerard_van_Honthorst_-_King_David_Playing_the_Harp_-_Google_Art_Project.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "5b",
      artist: "Jan van Eyck",
      title: "Christ the King",
      year: "1430",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Jan_van_Eyck_-_The_Ghent_Altarpiece_-_God_Almighty_%28detail%29_-_WGA07631.jpg/600px-Jan_van_Eyck_-_The_Ghent_Altarpiece_-_God_Almighty_%28detail%29_-_WGA07631.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "King David, the shepherd-king from Bethlehem who established the earthly kingdom of Israel, united the twelve tribes, and received God's promise of an everlasting dynasty.",
    antitype_description: "Jesus Christ, the Good Shepherd and eternal King, born in Bethlehem, the City of David, to establish the Kingdom of God that will have no end.",
    key_parallels: [
      "Both born in Bethlehem",
      "Both began as shepherds",
      "Both anointed by God",
      "Both began public ministry around age 30",
      "David united 12 tribes; Jesus chose 12 apostles",
      "David's kingdom was earthly; Christ's kingdom is eternal"
    ],
    scripture_ot: "1 Samuel 16; 2 Samuel 5:1-5; 7:11-16; Psalm 89:3-4",
    scripture_nt: "Matthew 1:1; 2:1-6; Luke 1:32-33; Revelation 19:16",
    theological_significance: "The Davidic typology establishes Jesus's messianic credentials and royal identity. God's covenant with David finds its ultimate fulfillment in Christ, whose kingdom transcends all earthly limitations. This typology reveals that God's promises are trustworthy and that His plan encompasses both temporal and eternal dimensions.",
    discussion_questions: [
      { id: 1, question: "Why is it significant that Jesus is called 'Son of David' throughout the Gospels?" },
      { id: 2, question: "How does David's journey from shepherd to king prefigure Christ's mission?" },
      { id: 3, question: "What does it mean that Christ's kingdom is 'not of this world' yet fulfills the Davidic covenant?" },
      { id: 4, question: "How do the Psalms of David prophetically speak of Christ?" },
      { id: 5, question: "In what ways does understanding Jesus as the Davidic King affect our view of His authority?" }
    ]
  },
  {
    id: 6,
    theme: "Solomon and Divine Wisdom",
    category: "Christological",
    old_testament: {
      id: "6a",
      artist: "Peter Paul Rubens",
      title: "The Judgment of Solomon",
      year: "1617",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Peter_Paul_Rubens_-_The_Judgement_of_Solomon_-_Google_Art_Project.jpg/1024px-Peter_Paul_Rubens_-_The_Judgement_of_Solomon_-_Google_Art_Project.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "6b",
      artist: "Albrecht Dürer",
      title: "Christ Among the Doctors",
      year: "1506",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Christ_Among_the_Doctors_04.jpg/800px-Christ_Among_the_Doctors_04.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "King Solomon, David's son, renowned for his wisdom, who built the Temple in Jerusalem and had a Queen Mother (Gebirah) who served as a powerful intercessor.",
    antitype_description: "Jesus Christ, the eternal Son of David, who is Wisdom incarnate, whose body is the true Temple, and whose mother Mary fulfills the role of the Queen Mother.",
    key_parallels: [
      "Solomon built the physical Temple; Christ is the true Temple",
      "Solomon possessed great wisdom; Christ is Wisdom itself",
      "Solomon had the Queen Mother Bathsheba; Christ has Mary as Queen Mother",
      "Solomon's wisdom drew queens from afar; Christ draws all nations",
      "Solomon spoke in proverbs; Christ taught in parables"
    ],
    scripture_ot: "1 Kings 3:5-14; 6:1-38; 10:1-13",
    scripture_nt: "Matthew 12:42; John 2:19-21; 1 Corinthians 1:24, 30",
    theological_significance: "Solomon's typology reveals Christ as the fulfillment of wisdom literature and Temple theology. Where Solomon's wisdom was a gift, Christ's wisdom is His very nature. The Temple Solomon built with hands gives way to the temple of Christ's body, making God's presence universally accessible through the Incarnation.",
    discussion_questions: [
      { id: 1, question: "How does Jesus embody and surpass the wisdom of Solomon?" },
      { id: 2, question: "What is the significance of Jesus saying 'something greater than Solomon is here'?" },
      { id: 3, question: "How does understanding Christ as the true Temple change our approach to worship?" },
      { id: 4, question: "What role does Mary play as the Queen Mother in Christ's kingdom?" },
      { id: 5, question: "How do Christ's parables fulfill and exceed Solomon's proverbs?" }
    ]
  },
  {
    id: 7,
    theme: "The Sign of Jonah",
    category: "Christological",
    old_testament: {
      id: "7a",
      artist: "Pieter Lastman",
      title: "Jonah and the Whale",
      year: "1621",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Pieter_Lastman_-_Jonah_and_the_Whale_-_Google_Art_Project.jpg/1024px-Pieter_Lastman_-_Jonah_and_the_Whale_-_Google_Art_Project.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "7b",
      artist: "Caravaggio",
      title: "The Entombment of Christ",
      year: "1603",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/The_Entombment_of_Christ-Caravaggio_%28c.1602-3%29.jpg/800px-The_Entombment_of_Christ-Caravaggio_%28c.1602-3%29.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "Jonah, the prophet who spent three days and nights in the belly of a great fish to save his shipmates, before being returned to dry land to preach repentance to Nineveh.",
    antitype_description: "Jesus Christ explicitly identifies Jonah as a type, stating that He would spend three days and nights 'in the heart of the earth' before His resurrection.",
    key_parallels: [
      "Three days and nights in the fish/tomb",
      "Jonah's 'death' saved the sailors; Christ's death saves humanity",
      "Both descended into the depths",
      "Both were restored to life",
      "Jonah preached to Gentiles; Christ's gospel goes to all nations"
    ],
    scripture_ot: "Jonah 1-3",
    scripture_nt: "Matthew 12:39-41; 16:4; Luke 11:29-32",
    theological_significance: "The Jonah typology is unique as Christ Himself explicitly identifies it, calling it 'the sign of Jonah.' This type emphasizes the death and resurrection as the ultimate sign validating Christ's mission. It also prefigures the universal scope of salvation, as Jonah's mission to Gentile Nineveh foreshadows the Gospel going to all nations.",
    discussion_questions: [
      { id: 1, question: "Why did Jesus choose the sign of Jonah as THE sign for His generation?" },
      { id: 2, question: "How does Jonah's reluctance contrast with Christ's willing obedience?" },
      { id: 3, question: "What parallels exist between the sailors' conversion and the centurion's confession at the cross?" },
      { id: 4, question: "How does Nineveh's repentance challenge us today?" },
      { id: 5, question: "What does this typology teach about God's mercy toward all peoples?" }
    ]
  },
  {
    id: 8,
    theme: "Elisha the Miracle Worker",
    category: "Christological",
    old_testament: {
      id: "8a",
      artist: "Bernardo Strozzi",
      title: "Prophet Elisha",
      year: "1630",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Bernardo_Strozzi_-_Prophet_Elisha_and_the_Shunammite_Woman_-_WGA21930.jpg/800px-Bernardo_Strozzi_-_Prophet_Elisha_and_the_Shunammite_Woman_-_WGA21930.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "8b",
      artist: "Tintoretto",
      title: "Christ at the Sea of Galilee",
      year: "1575",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Tintoretto%2C_Jacopo_-_Christ_at_the_Sea_of_Galilee_-_c._1575-1580.jpg/800px-Tintoretto%2C_Jacopo_-_Christ_at_the_Sea_of_Galilee_-_c._1575-1580.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "Elisha, the successor to Elijah, who performed double the miracles of his master, including multiplying loaves of bread to feed a hundred men and raising a young boy from the dead.",
    antitype_description: "Jesus Christ, the ultimate miracle worker, who performed far greater miracles, multiplying loaves to feed thousands and raising multiple people from the dead, demonstrating divine power over nature and death.",
    key_parallels: [
      "Elisha multiplied 20 loaves for 100; Jesus multiplied 5 loaves for 5000",
      "Both raised the dead",
      "Both healed lepers",
      "Both demonstrated power over nature",
      "Elisha received a double portion of Elijah's spirit; Jesus gives the Spirit without measure"
    ],
    scripture_ot: "2 Kings 2-13, especially 4:42-44; 5:1-14",
    scripture_nt: "Matthew 14:13-21; Luke 7:11-17; John 3:34",
    theological_significance: "Elisha's ministry prefigures Christ's miraculous works, but the typology emphasizes how Christ infinitely surpasses the prophets. Where Elisha needed Elijah's mantle for power, Christ works by His own authority. This demonstrates that Jesus is not merely another prophet but the source of all prophetic power.",
    discussion_questions: [
      { id: 1, question: "How do Elisha's miracles prepare us to understand Christ's miraculous ministry?" },
      { id: 2, question: "What is significant about the multiplication of loaves in both testaments?" },
      { id: 3, question: "How does Christ's raising of the dead surpass Elisha's similar miracle?" },
      { id: 4, question: "What does the progression from Elijah to Elisha to Christ teach about God's increasing revelation?" },
      { id: 5, question: "How do these miracle accounts strengthen faith in Christ's divinity?" }
    ]
  },

  // PART II: MARIAN TYPOLOGY
  {
    id: 9,
    theme: "The New Eve",
    category: "Marian",
    old_testament: {
      id: "9a",
      artist: "Lucas Cranach the Elder",
      title: "Eve",
      year: "1528",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Cranach%2C_adamo_ed_eva%2C_uffizi.jpg/800px-Cranach%2C_adamo_ed_eva%2C_uffizi.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "9b",
      artist: "Fra Angelico",
      title: "The Annunciation",
      year: "1438",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Fra_Angelico_-_The_Annunciation_-_WGA00555.jpg/1024px-Fra_Angelico_-_The_Annunciation_-_WGA00555.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "Eve, a virgin created without sin, the 'mother of all the living,' whose disobedience to God, prompted by a fallen angel, became an instrument for sin and death to enter the world.",
    antitype_description: "Mary, the perpetual virgin, immaculately conceived, the spiritual mother of all who live in Christ, whose perfect obedience to God's will, announced by a holy angel, became the instrument through which the Author of Life entered the world.",
    key_parallels: [
      "Eve was created without sin; Mary was conceived without sin",
      "Eve's disobedience brought death; Mary's obedience brought life",
      "Eve conversed with a fallen angel; Mary conversed with Gabriel",
      "Eve is mother of all living naturally; Mary is mother of all living spiritually",
      "Eve said 'yes' to the serpent; Mary said 'yes' to God",
      "Through Eve came the fall; through Mary came the Redeemer"
    ],
    scripture_ot: "Genesis 2:18-25; 3:1-20",
    scripture_nt: "Luke 1:26-38; John 19:25-27; Revelation 12:1-17",
    theological_significance: "The Eve-Mary typology, recognized from the earliest Church Fathers, reveals Mary's unique role in salvation history. As St. Irenaeus taught, 'the knot of Eve's disobedience was untied by Mary's obedience.' This typology illuminates the Immaculate Conception and Mary's perpetual virginity as fitting preparations for her role as Mother of God.",
    discussion_questions: [
      { id: 1, question: "How does Mary's 'yes' to God reverse Eve's 'yes' to the serpent?" },
      { id: 2, question: "What is the significance of both Eve and Mary being addressed as 'woman' in Scripture?" },
      { id: 3, question: "How does the Eve-Mary parallel help us understand the Immaculate Conception?" },
      { id: 4, question: "In what ways is Mary the 'mother of all the living' in the order of grace?" },
      { id: 5, question: "How does this typology fulfill the prophecy of Genesis 3:15 about the woman and her seed?" }
    ]
  },
  {
    id: 10,
    theme: "The Ark of the New Covenant",
    category: "Marian",
    old_testament: {
      id: "10a",
      artist: "James Tissot",
      title: "The Ark Passes Over the Jordan",
      year: "1902",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/James_Jacques_Joseph_Tissot_-_The_Ark_Passes_Over_the_Jordan_-_Google_Art_Project.jpg/1024px-James_Jacques_Joseph_Tissot_-_The_Ark_Passes_Over_the_Jordan_-_Google_Art_Project.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "10b",
      artist: "Domenico Ghirlandaio",
      title: "The Visitation",
      year: "1491",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Domenico_ghirlandaio%2C_visitazione%2C_louvre_01.jpg/800px-Domenico_ghirlandaio%2C_visitazione%2C_louvre_01.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "The Ark of the Covenant, the most sacred object in Israel, made of incorruptible wood overlaid with gold, containing the tablets of the Law, manna, and Aaron's rod, carrying God's presence among His people.",
    antitype_description: "The Blessed Virgin Mary, the pure and holy vessel whose womb carried God Incarnate, containing Jesus who is the Word made flesh, the Bread of Life, and the eternal High Priest.",
    key_parallels: [
      "The glory cloud 'overshadowed' both the Ark and Mary",
      "The Ark contained the Word on stone; Mary contained the Word made flesh",
      "The Ark contained manna; Mary contained the Bread of Life",
      "The Ark contained Aaron's rod; Mary contained the eternal High Priest",
      "David danced before the Ark; John the Baptist leaped before Mary",
      "Both remained in the hill country of Judah for three months"
    ],
    scripture_ot: "Exodus 25:10-22; 2 Samuel 6:1-16",
    scripture_nt: "Luke 1:35-45; Revelation 11:19-12:1",
    theological_significance: "The Ark typology reveals Mary as the dwelling place of God's presence in the New Covenant. As the Ark was overshadowed by God's glory, so Mary was overshadowed by the Holy Spirit. This typology supports Catholic doctrines of Mary's perpetual virginity (the Ark could not be touched) and her Assumption (the Ark was taken up to God's temple).",
    discussion_questions: [
      { id: 1, question: "How do the contents of the Ark prefigure what Mary carried in her womb?" },
      { id: 2, question: "What is significant about the word 'overshadow' used for both the Ark and Mary?" },
      { id: 3, question: "How does David's reaction to the Ark parallel Elizabeth's reaction to Mary?" },
      { id: 4, question: "What does the Ark's incorruptible wood suggest about Mary?" },
      { id: 5, question: "How does Revelation's vision of the Ark followed by the Woman confirm this typology?" }
    ]
  },
  {
    id: 11,
    theme: "The Queen Mother (Gebirah)",
    category: "Marian",
    old_testament: {
      id: "11a",
      artist: "Pedro Américo",
      title: "David and Bathsheba",
      year: "1879",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pedro_Am%C3%A9rico_-_David_and_Abishag_-_Google_Art_Project.jpg/800px-Pedro_Am%C3%A9rico_-_David_and_Abishag_-_Google_Art_Project.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "11b",
      artist: "Jan van Eyck",
      title: "Madonna and Child",
      year: "1436",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Jan_van_Eyck_-_Virgin_and_Child_with_Canon_van_der_Paele_-_WGA07631.jpg/800px-Jan_van_Eyck_-_Virgin_and_Child_with_Canon_van_der_Paele_-_WGA07631.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "In the Davidic Kingdom, the Gebirah (Queen Mother) held an official position of honor and authority. She sat at the king's right hand and served as the primary intercessor for the people, as seen when Solomon honors his mother Bathsheba.",
    antitype_description: "Mary, as the mother of Christ the King, fulfills the role of the Gebirah in the heavenly kingdom. She is honored as Queen of Heaven and serves as the powerful intercessor for all God's people.",
    key_parallels: [
      "The Queen Mother sat at the king's right hand",
      "Solomon bowed to Bathsheba and promised 'I will not refuse you'",
      "The Queen Mother was the people's advocate",
      "She wore a crown and royal garments",
      "Her position was based on being the king's mother, not his wife"
    ],
    scripture_ot: "1 Kings 2:19-20; Psalm 45:9; Jeremiah 13:18",
    scripture_nt: "Revelation 12:1; Luke 1:43; John 2:3-5; 19:26-27",
    theological_significance: "The Gebirah typology provides biblical foundation for Mary's queenship and intercessory role. In the Davidic kingdom structure that Christ fulfills, the mother of the king held a unique position of honor and influence. This explains Mary's powerful intercession at Cana and her ongoing maternal mediation for the Church.",
    discussion_questions: [
      { id: 1, question: "How does the Old Testament Queen Mother tradition illuminate Mary's role?" },
      { id: 2, question: "What is the significance of Mary's intercession at the wedding at Cana?" },
      { id: 3, question: "How does Revelation 12's imagery of the crowned woman relate to the Gebirah?" },
      { id: 4, question: "Why is Mary's queenship based on being Christ's mother rather than His bride (the Church)?" },
      { id: 5, question: "How does this typology support Catholic teaching on Mary's intercessory power?" }
    ]
  },

  // PART III: PROPHETIC AND ECCLESIAL TYPOLOGY
  {
    id: 12,
    theme: "Elijah and John the Baptist",
    category: "Prophetic and Ecclesial",
    old_testament: {
      id: "12a",
      artist: "Daniele da Volterra",
      title: "Prophet Elijah",
      year: "1550",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Daniele_da_Volterra_-_Elijah_-_WGA06305.jpg/600px-Daniele_da_Volterra_-_Elijah_-_WGA06305.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "12b",
      artist: "Caravaggio",
      title: "John the Baptist",
      year: "1604",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Michelangelo_Caravaggio_021.jpg/600px-Michelangelo_Caravaggio_021.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "Elijah, the great prophet who wore hairy garments, lived as an ascetic, called Israel to repentance, and whose ministry concluded near the Jordan River before being taken up to heaven.",
    antitype_description: "John the Baptist, the final prophet of the Old Covenant, sent to prepare the way for Christ. Jesus identified him as the fulfillment of the prophecy of Elijah's return. Like Elijah, he was an ascetic who began his ministry at the Jordan.",
    key_parallels: [
      "Both wore rough, hairy garments",
      "Both lived ascetic lifestyles in the wilderness",
      "Both called for repentance",
      "Both confronted wicked kings (Ahab/Herod)",
      "Both ministered at the Jordan River",
      "Elijah decreased for Elisha; John declared 'He must increase, I must decrease'"
    ],
    scripture_ot: "1 Kings 17-19; 2 Kings 1-2; Malachi 4:5-6",
    scripture_nt: "Matthew 3:1-17; 11:7-14; 17:10-13; John 1:19-34; 3:30",
    theological_significance: "The Elijah-John typology marks the transition between the Old and New Covenants. John stands as the bridge figure - the last of the Old Testament prophets and the herald of the New. His fulfillment of Elijah's return demonstrates how prophecy works not through reincarnation but through spiritual succession and divine mission.",
    discussion_questions: [
      { id: 1, question: "Why was it important for Elijah to return before the Messiah?" },
      { id: 2, question: "How does John's statement 'He must increase, I must decrease' reflect the relationship between the Testaments?" },
      { id: 3, question: "What similarities do you see in how both prophets confronted political powers?" },
      { id: 4, question: "How does this typology help us understand the role of prophets?" },
      { id: 5, question: "What does John the Baptist teach us about preparing the way for Christ in our own lives?" }
    ]
  },
  {
    id: 13,
    theme: "The Two Josephs",
    category: "Prophetic and Ecclesial",
    old_testament: {
      id: "13a",
      artist: "Georges de La Tour",
      title: "The Dream of St. Joseph",
      year: "1640",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Georges_de_La_Tour_-_The_Dream_of_St_Joseph_-_WGA12349.jpg/600px-Georges_de_La_Tour_-_The_Dream_of_St_Joseph_-_WGA12349.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "13b",
      artist: "Bartolomé Esteban Murillo",
      title: "The Holy Family",
      year: "1660",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bartolom%C3%A9_Esteban_Murillo_-_The_Holy_Family_with_a_Little_Bird_-_WGA16376.jpg/800px-Bartolom%C3%A9_Esteban_Murillo_-_The_Holy_Family_with_a_Little_Bird_-_WGA16376.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "Joseph, son of Jacob, who received divine messages in dreams, saved his family by bringing them to Egypt during famine, and preserved the chosen people.",
    antitype_description: "St. Joseph, foster-father of Jesus, who also received divine messages in dreams, saved the Holy Family by fleeing to Egypt, and protected the Christ child from Herod's persecution.",
    key_parallels: [
      "Both had fathers named Jacob",
      "Both received divine revelation through dreams",
      "Both were called righteous/just men",
      "Both saved their families by going to Egypt",
      "Both were chaste (Joseph with Potiphar's wife; St. Joseph with Mary)",
      "Both provided for and protected God's chosen ones"
    ],
    scripture_ot: "Genesis 37-50",
    scripture_nt: "Matthew 1:18-25; 2:13-23",
    theological_significance: "The two Josephs typology reveals God's consistent pattern of raising up righteous protectors for His salvific plan. Both men exemplify faith, obedience, and chastity. St. Joseph's role as guardian of the Holy Family mirrors the patriarch Joseph's preservation of Israel, showing continuity in God's providential care.",
    discussion_questions: [
      { id: 1, question: "How do both Josephs demonstrate the importance of dreams in divine revelation?" },
      { id: 2, question: "What virtues do both Josephs share that made them suitable for their roles?" },
      { id: 3, question: "How does Egypt function as a place of refuge in both stories?" },
      { id: 4, question: "What can we learn from both Josephs about righteous masculinity and fatherhood?" },
      { id: 5, question: "How does this typology enhance our devotion to St. Joseph?" }
    ]
  },
  {
    id: 14,
    theme: "The Twelve Tribes and Twelve Apostles",
    category: "Prophetic and Ecclesial",
    old_testament: {
      id: "14a",
      artist: "Marc Chagall",
      title: "The Twelve Tribes",
      year: "1960",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chagall_Hadassah_Reuben.jpg/600px-Chagall_Hadassah_Reuben.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "14b",
      artist: "Peter Paul Rubens",
      title: "The Last Supper",
      year: "1630",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Peter_Paul_Rubens_-_The_Last_Supper_-_WGA20255.jpg/1024px-Peter_Paul_Rubens_-_The_Last_Supper_-_WGA20255.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "The Twelve Tribes of Israel, founded upon the twelve sons of Jacob, constituted the original people of God and the foundation of the Old Covenant community.",
    antitype_description: "The Twelve Apostles, chosen by Christ, become the foundation of the new Israel, the Church, which is the new people of God drawn from all nations.",
    key_parallels: [
      "Both groups number twelve",
      "Both are foundations of God's people",
      "The tribes inherited the Promised Land; the apostles inherit the Kingdom",
      "Twelve tribal princes; twelve apostolic thrones",
      "Both groups have their names inscribed in the heavenly Jerusalem"
    ],
    scripture_ot: "Genesis 49; Exodus 28:21; Numbers 1-2",
    scripture_nt: "Matthew 10:1-4; 19:28; Ephesians 2:20; Revelation 21:12-14",
    theological_significance: "This typology reveals the Church as the fulfillment and continuation of Israel. The number twelve signifies completeness and divine government. Christ's deliberate choice of twelve apostles shows His intention to reconstitute God's people, not abolish but fulfill Israel's calling to be a light to the nations.",
    discussion_questions: [
      { id: 1, question: "Why is the number twelve significant in both Testaments?" },
      { id: 2, question: "How does the Church fulfill Israel's mission to the nations?" },
      { id: 3, question: "What does it mean that the apostles will judge the twelve tribes?" },
      { id: 4, question: "How does Revelation's imagery of the New Jerusalem unite both groups?" },
      { id: 5, question: "What does this typology teach about the continuity of God's people?" }
    ]
  },

  // PART IV: SACRAMENTAL TYPOLOGY
  {
    id: 15,
    theme: "The Passover and the Eucharist",
    category: "Sacramental",
    old_testament: {
      id: "15a",
      artist: "Dieric Bouts",
      title: "The Passover",
      year: "1464",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dieric_Bouts_-_The_Feast_of_the_Passover_-_WGA03013.jpg/800px-Dieric_Bouts_-_The_Feast_of_the_Passover_-_WGA03013.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "15b",
      artist: "Leonardo da Vinci",
      title: "The Last Supper",
      year: "1495",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Leonardo_da_Vinci_%281452-1519%29_-_The_Last_Supper_%281495-1498%29.jpg/1024px-Leonardo_da_Vinci_%281452-1519%29_-_The_Last_Supper_%281495-1498%29.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "The Passover required the sacrifice of an unblemished lamb, whose blood on the doorposts saved the Israelites from death, and whose flesh had to be consumed entirely.",
    antitype_description: "The Eucharist, instituted at the Last Supper during Passover, where Jesus, the true Lamb of God, offers His body and blood for the salvation of all, commanding His followers to consume His flesh and blood for eternal life.",
    key_parallels: [
      "The Passover lamb had to be without blemish; Christ is without sin",
      "The lamb's blood saved from physical death; Christ's blood saves from eternal death",
      "The lamb's flesh had to be eaten; Christ commands us to eat His flesh",
      "Blood was applied to wood doorposts; Christ's blood flowed on the wood of the cross",
      "Passover was a memorial sacrifice; the Eucharist is a memorial sacrifice",
      "Both mark deliverance from slavery (Egypt/sin)"
    ],
    scripture_ot: "Exodus 12:1-28; Deuteronomy 16:1-8",
    scripture_nt: "Matthew 26:17-30; John 6:51-58; 1 Corinthians 5:7; 11:23-26",
    theological_significance: "The Passover-Eucharist typology stands at the heart of sacramental theology. Christ transforms the Passover memorial into the new and eternal covenant. The Eucharist doesn't merely remember but makes present Christ's sacrifice. As the Passover lamb's consumption was necessary for salvation from the angel of death, so the Eucharist is necessary for spiritual life.",
    discussion_questions: [
      { id: 1, question: "How does understanding the Passover deepen your appreciation of the Mass?" },
      { id: 2, question: "Why did Jesus choose the Passover feast to institute the Eucharist?" },
      { id: 3, question: "What parallels exist between the Passover instructions and Eucharistic practice?" },
      { id: 4, question: "How does John's Gospel presentation of Jesus dying at the hour of Passover sacrifice enhance this typology?" },
      { id: 5, question: "What does it mean that Christ is our Passover lamb?" }
    ]
  },
  {
    id: 16,
    theme: "Manna and the Bread of Life",
    category: "Sacramental",
    old_testament: {
      id: "16a",
      artist: "Tiepolo",
      title: "The Gathering of the Manna",
      year: "1740",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Giovanni_Battista_Tiepolo_-_The_Gathering_of_Manna_-_WGA22286.jpg/800px-Giovanni_Battista_Tiepolo_-_The_Gathering_of_Manna_-_WGA22286.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "16b",
      artist: "Nicolas Poussin",
      title: "Institution of the Eucharist",
      year: "1640",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Nicolas_Poussin_-_The_Institution_of_the_Eucharist_-_WGA18310.jpg/1024px-Nicolas_Poussin_-_The_Institution_of_the_Eucharist_-_WGA18310.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "The manna was miraculous 'bread from heaven' that God provided daily to sustain the Israelites during their forty years in the wilderness.",
    antitype_description: "Jesus Christ explicitly presents Himself as the true bread from heaven, declaring that whoever eats His flesh—the Eucharist—will live forever, unlike those who ate manna and died.",
    key_parallels: [
      "Both are called 'bread from heaven'",
      "Manna appeared daily; the Eucharist is offered daily",
      "Manna sustained physical life; the Eucharist gives eternal life",
      "Manna ceased in the Promised Land; the Eucharist continues until the heavenly banquet",
      "Manna was white; the Eucharistic host is white",
      "Both required faith to recognize their divine origin"
    ],
    scripture_ot: "Exodus 16:1-36; Numbers 11:7-9; Psalm 78:24",
    scripture_nt: "John 6:31-58; Revelation 2:17",
    theological_significance: "In John 6, Jesus makes the manna-Eucharist connection explicit, teaching that He surpasses the manna. While manna sustained temporal life, the Eucharist grants eternal life. This typology emphasizes the Eucharist as necessary spiritual food for the journey to the true Promised Land of heaven.",
    discussion_questions: [
      { id: 1, question: "How does the daily provision of manna relate to daily Mass?" },
      { id: 2, question: "What does Jesus mean when He says the manna-eaters died but Eucharist-receivers will live forever?" },
      { id: 3, question: "How does the hiddenness of manna's true nature parallel the Eucharist?" },
      { id: 4, question: "What is the significance of manna ceasing when Israel entered the Promised Land?" },
      { id: 5, question: "How does this typology help us understand the necessity of frequent Communion?" }
    ]
  },
  {
    id: 17,
    theme: "The Bread of the Presence",
    category: "Sacramental",
    old_testament: {
      id: "17a",
      artist: "William Holman Hunt",
      title: "The Golden Table",
      year: "1860",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Holman_Hunt_Light_of_the_World.jpg/600px-Holman_Hunt_Light_of_the_World.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "17b",
      artist: "Jan van Eyck",
      title: "The Adoration of the Mystic Lamb",
      year: "1432",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Jan_van_Eyck_The_Ghent_Altarpiece_-_Adoration_of_the_Lamb.jpg/1024px-Jan_van_Eyck_The_Ghent_Altarpiece_-_Adoration_of_the_Lamb.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "In the Temple, twelve loaves of bread called the 'Bread of the Presence' (Lechem haPanim) were kept perpetually on a golden table before God's face as an everlasting covenant.",
    antitype_description: "The Eucharist is the true Bread of the Presence, the Real Presence of Christ's body and blood perpetually offered on the altar, the sign of God's abiding presence with His people.",
    key_parallels: [
      "Bread of the Presence means 'bread of the Face'; Christ is the face of God",
      "Twelve loaves for twelve tribes; one Eucharist for the whole Church",
      "Kept perpetually in the Temple; Eucharist reserved in the tabernacle",
      "Only priests could eat it; ministerial priests consecrate the Eucharist",
      "Placed on a golden table; Eucharist placed on the altar"
    ],
    scripture_ot: "Exodus 25:23-30; Leviticus 24:5-9; 1 Samuel 21:1-6",
    scripture_nt: "Matthew 12:3-4; John 6:35; Hebrews 9:2",
    theological_significance: "The Bread of the Presence typology emphasizes the Eucharist as God's perpetual presence among His people. When David and his men ate this bread in necessity, and Jesus defended this action, it prefigures the accessibility of the Eucharist to all the faithful, not just the priestly class.",
    discussion_questions: [
      { id: 1, question: "How does the perpetual presence of the Temple bread relate to Eucharistic adoration?" },
      { id: 2, question: "What is significant about Jesus referring to David eating the bread of the Presence?" },
      { id: 3, question: "How does this typology support belief in the Real Presence?" },
      { id: 4, question: "What does the golden table of the Temple suggest about the dignity of the altar?" },
      { id: 5, question: "How does this type help us understand the tabernacle in Catholic churches?" }
    ]
  },
  {
    id: 18,
    theme: "Melchizedek's Offering",
    category: "Sacramental",
    old_testament: {
      id: "18a",
      artist: "Peter Paul Rubens",
      title: "Meeting of Abraham and Melchizedek",
      year: "1625",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Peter_Paul_Rubens_-_The_Meeting_of_Abraham_and_Melchizedek_-_WGA20435.jpg/1024px-Peter_Paul_Rubens_-_The_Meeting_of_Abraham_and_Melchizedek_-_WGA20435.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "18b",
      artist: "Salvador Dalí",
      title: "The Sacrament of the Last Supper",
      year: "1955",
      image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Dali_Sacrament.jpg/1024px-Dali_Sacrament.jpg",
      source: "Wikimedia Commons",
      license: "Fair Use"
    },
    type_description: "Melchizedek, the mysterious priest-king of Salem, offered a sacrifice of bread and wine and blessed Abraham, receiving tithes from him.",
    antitype_description: "Jesus Christ, the eternal High Priest 'according to the order of Melchizedek,' offers Himself under the forms of bread and wine in the Eucharist.",
    key_parallels: [
      "Melchizedek offered bread and wine; Christ offers His body and blood under these forms",
      "Melchizedek was priest and king; Christ is Priest, Prophet, and King",
      "Melchizedek's priesthood preceded the Levitical; Christ's surpasses it",
      "Melchizedek blessed Abraham; Christ blesses all nations through Abraham",
      "No genealogy given for Melchizedek; Christ's priesthood is eternal"
    ],
    scripture_ot: "Genesis 14:18-20; Psalm 110:4",
    scripture_nt: "Hebrews 5:6-10; 6:20-7:28; Matthew 26:26-28",
    theological_significance: "The Melchizedek typology establishes the Eucharist's sacrificial nature and the priesthood of Christ. The use of bread and wine, predating the Mosaic law, shows these elements were always part of God's plan for the perfect sacrifice. This type is crucial for understanding the Mass as a true sacrifice, not merely a meal.",
    discussion_questions: [
      { id: 1, question: "Why is Christ's priesthood 'according to the order of Melchizedek' rather than Aaron?" },
      { id: 2, question: "How does Melchizedek's offering of bread and wine prefigure the Mass?" },
      { id: 3, question: "What is the significance of Melchizedek having no recorded genealogy?" },
      { id: 4, question: "How does this typology help us understand the Eucharist as sacrifice?" },
      { id: 5, question: "What does Abraham giving tithes to Melchizedek teach about Christ's superiority?" }
    ]
  },
  {
    id: 19,
    theme: "The Flood and Baptism",
    category: "Sacramental",
    old_testament: {
      id: "19a",
      artist: "Gustave Doré",
      title: "The Deluge",
      year: "1866",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Gustave_Dor%C3%A9_-_The_Holy_Bible_-_Plate_I%2C_The_Deluge.jpg/800px-Gustave_Dor%C3%A9_-_The_Holy_Bible_-_Plate_I%2C_The_Deluge.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "19b",
      artist: "Piero della Francesca",
      title: "The Baptism of Christ",
      year: "1450",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Piero_della_Francesca_-_Baptism_of_Christ_-_WGA17595.jpg/800px-Piero_della_Francesca_-_Baptism_of_Christ_-_WGA17595.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "The flood waters destroyed sin and evil while preserving Noah and his family in the ark, renewing creation and establishing a new covenant with humanity.",
    antitype_description: "Baptism, which St. Peter explicitly identifies as the antitype of the flood, destroys sin while saving souls in the Church (the new ark), creating a new creation in Christ.",
    key_parallels: [
      "Water destroys sin in both",
      "Eight people saved in the ark; eight is the number of new creation",
      "The ark preserves from death; the Church preserves from eternal death",
      "Dove signals new creation after flood; Holy Spirit descends as dove at Christ's baptism",
      "Rainbow covenant after flood; baptism initiates New Covenant"
    ],
    scripture_ot: "Genesis 6-9",
    scripture_nt: "1 Peter 3:20-21; Matthew 3:13-17; Romans 6:3-4",
    theological_significance: "St. Peter makes this typology explicit, declaring that the flood prefigures baptism. This connection emphasizes baptism's dual action: destroying sin and granting new life. The ark as a type of the Church teaches that salvation comes through incorporation into Christ's body, not through individual effort alone.",
    discussion_questions: [
      { id: 1, question: "How does Peter's explicit connection between the flood and baptism validate typological reading?" },
      { id: 2, question: "What does the ark teach us about the necessity of the Church for salvation?" },
      { id: 3, question: "How does the dove in both accounts signify the Holy Spirit's role?" },
      { id: 4, question: "Why is eight significant in Christian baptismal theology?" },
      { id: 5, question: "How does this typology help us understand baptism as death and resurrection?" }
    ]
  },
  {
    id: 20,
    theme: "Crossing the Red Sea and Baptism",
    category: "Sacramental",
    old_testament: {
      id: "20a",
      artist: "Nicolas Poussin",
      title: "Crossing of the Red Sea",
      year: "1634",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/The_Crossing_of_The_Red_Sea.jpg/1024px-The_Crossing_of_The_Red_Sea.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "20b",
      artist: "Andrea del Verrocchio",
      title: "The Baptism of Christ",
      year: "1475",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Andrea_del_Verrocchio%2C_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg/800px-Andrea_del_Verrocchio%2C_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "Israel passed through the Red Sea waters, leaving slavery in Egypt behind and emerging as God's free people, with Pharaoh's army destroyed in the waters.",
    antitype_description: "Christians pass through the waters of baptism, leaving the slavery of sin behind and emerging as God's children, with the power of Satan destroyed.",
    key_parallels: [
      "Passage through water marks liberation",
      "From slavery to freedom in both",
      "Enemy destroyed in the waters",
      "Cloud and fire led Israel; Holy Spirit leads Christians",
      "Israelites sang victory song; Christians sing new song",
      "Both mark the birth of a people"
    ],
    scripture_ot: "Exodus 14:15-31; 15:1-21",
    scripture_nt: "1 Corinthians 10:1-2; Romans 6:3-4; Colossians 2:12-15",
    theological_significance: "St. Paul explicitly identifies the Red Sea crossing as a baptism 'into Moses,' prefiguring baptism into Christ. This typology emphasizes baptism as liberation and victory. The destruction of Pharaoh's army in the waters prefigures the destruction of sin and Satan's power in baptismal waters.",
    discussion_questions: [
      { id: 1, question: "How does Paul's interpretation of the Red Sea as baptism guide our understanding?" },
      { id: 2, question: "What parallels exist between Pharaoh and Satan in this typology?" },
      { id: 3, question: "How does the journey from Egypt to the Promised Land mirror Christian life?" },
      { id: 4, question: "What is the significance of water being both destructive and saving?" },
      { id: 5, question: "How does this typology help us understand baptism as spiritual warfare?" }
    ]
  },
  {
    id: 21,
    theme: "Tower of Babel and Pentecost",
    category: "Sacramental",
    old_testament: {
      id: "21a",
      artist: "Pieter Bruegel the Elder",
      title: "The Tower of Babel",
      year: "1563",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg/1024px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "21b",
      artist: "El Greco",
      title: "Pentecost",
      year: "1600",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/El_Greco_-_Pentecost_-_WGA10556.jpg/800px-El_Greco_-_Pentecost_-_WGA10556.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    type_description: "At Babel, human pride led to the confusion of languages and the scattering of nations, destroying unity through linguistic division.",
    antitype_description: "At Pentecost, the Holy Spirit descended with tongues of fire, enabling the apostles to speak in all languages, reuniting the nations in one faith through the sacrament of Confirmation.",
    key_parallels: [
      "Babel brought confusion; Pentecost brings understanding",
      "Babel scattered nations; Pentecost gathers nations",
      "Pride caused Babel; humility receives the Spirit",
      "One language became many in judgment; many languages become one in grace",
      "Tower tried to reach heaven; Spirit brings heaven to earth"
    ],
    scripture_ot: "Genesis 11:1-9",
    scripture_nt: "Acts 2:1-13; 1 Corinthians 12:12-13",
    theological_significance: "Pentecost reverses Babel's curse, showing the Holy Spirit's power to unite what sin divided. This typology illuminates Confirmation as the sacrament that empowers Christians to build up the Church rather than scatter it, to proclaim God's greatness rather than their own.",
    discussion_questions: [
      { id: 1, question: "How does Pentecost reverse the curse of Babel?" },
      { id: 2, question: "What does the gift of tongues teach about the universality of the Gospel?" },
      { id: 3, question: "How does this typology help us understand the unity and diversity of the Church?" },
      { id: 4, question: "What role does Confirmation play in building up rather than scattering?" },
      { id: 5, question: "How do these events teach us about pride versus humility?" }
    ]
  }
];

export const getTypologyById = (id: number): Typology | undefined => {
  return typologies.find(t => t.id === id);
};

export const getTypologiesByCategory = (category: string): Typology[] => {
  if (category === 'all') return typologies;
  return typologies.filter(t => t.category === category);
};

export const categories = [
  "Christological",
  "Marian",
  "Prophetic and Ecclesial",
  "Sacramental"
];