export interface Artwork {
  id: string;
  artist: string;
  title: string;
  year: string;
  image_url: string;
  source: string;
  license: string;
}

export interface Typology {
  id: number;
  theme: string;
  old_testament: Artwork;
  new_testament: Artwork;
  section: string;
  description?: string;
  scripture_ot?: string;
  scripture_nt?: string;
}

export const typologies: Typology[] = [
  // Part I: Creation and Patriarchs
  {
    id: 1,
    theme: "Creation → New Creation",
    section: "Creation and Patriarchs",
    old_testament: {
      id: "1a",
      artist: "Jan Brueghel the Elder",
      title: "The Garden of Eden",
      year: "1615",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jan_Brueghel_the_Elder_-_The_Garden_of_Eden_with_the_Fall_of_Man.jpg/1024px-Jan_Brueghel_the_Elder_-_The_Garden_of_Eden_with_the_Fall_of_Man.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "1b",
      artist: "Piero della Francesca",
      title: "The Resurrection",
      year: "1463",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Piero_della_Francesca_046.jpg/800px-Piero_della_Francesca_046.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Genesis 1:1-31",
    scripture_nt: "2 Corinthians 5:17",
    description: "Just as God created the world and all that is in it, establishing order from chaos and bringing forth life, Christ's resurrection brings about a new creation. Through His victory over death, all things are made new, and humanity is offered restoration and eternal life."
  },
  {
    id: 2,
    theme: "Adam → Christ the New Adam",
    section: "Creation and Patriarchs",
    old_testament: {
      id: "2a",
      artist: "Albrecht Dürer",
      title: "Adam and Eve",
      year: "1504",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Albrecht_D%C3%BCrer_-_The_Fall_of_Man_%28Adam_and_Eve%29_-_Google_Art_Project.jpg/800px-Albrecht_D%C3%BCrer_-_The_Fall_of_Man_%28Adam_and_Eve%29_-_Google_Art_Project.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "2b",
      artist: "Albrecht Dürer",
      title: "Christ as the Man of Sorrows",
      year: "1493",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Man_of_Sorrows_by_A.Durer.jpg/800px-Man_of_Sorrows_by_A.Durer.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Genesis 2:7, 3:1-24",
    scripture_nt: "Romans 5:12-19, 1 Corinthians 15:45",
    description: "Adam, the first man, brought sin and death into the world through disobedience. Christ, the New Adam, brings righteousness and life through His perfect obedience. Where Adam failed in the garden, Christ succeeded in the wilderness and on the cross."
  },
  {
    id: 3,
    theme: "Eve → Mary the New Eve",
    section: "Creation and Patriarchs",
    old_testament: {
      id: "3a",
      artist: "Lucas Cranach the Elder",
      title: "Eve",
      year: "1528",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Cranach%2C_adamo_ed_eva%2C_uffizi.jpg/800px-Cranach%2C_adamo_ed_eva%2C_uffizi.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "3b",
      artist: "Fra Angelico",
      title: "The Annunciation",
      year: "1438",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Fra_Angelico_-_The_Annunciation_-_WGA00555.jpg/1024px-Fra_Angelico_-_The_Annunciation_-_WGA00555.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Genesis 3:1-6, 15",
    scripture_nt: "Luke 1:26-38",
    description: "Eve's disobedience brought forth death, but Mary's obedience brought forth life. Eve said 'yes' to the serpent's temptation; Mary said 'yes' to God's plan. Through Eve came the fall, through Mary came the Redeemer."
  },
  {
    id: 4,
    theme: "Tree of Life → The Cross",
    section: "Creation and Patriarchs",
    old_testament: {
      id: "4a",
      artist: "Peter Paul Rubens",
      title: "The Garden of Eden with the Fall of Man",
      year: "1615",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jan_Brueghel_de_Oude_en_Peter_Paul_Rubens_-_Het_aards_paradijs_met_de_zondeval_van_Adam_en_Eva.jpg/960px-Jan_Brueghel_de_Oude_en_Peter_Paul_Rubens_-_Het_aards_paradijs_met_de_zondeval_van_Adam_en_Eva.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "4b",
      artist: "Diego Velázquez",
      title: "Christ on the Cross",
      year: "1632",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Cristo_en_la_Cruz_%28Vel%C3%A1zquez%2C_1631%29.jpg/800px-Cristo_en_la_Cruz_%28Vel%C3%A1zquez%2C_1631%29.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Genesis 2:9, 3:22-24",
    scripture_nt: "John 19:17-30, Revelation 22:2",
    description: "The tree of life in Eden was lost to humanity through sin, but the cross becomes the new tree of life. Through the wood of the cross, eternal life is restored to all who believe."
  },
  {
    id: 5,
    theme: "The Fall → The Redemption",
    section: "Creation and Patriarchs",
    old_testament: {
      id: "5a",
      artist: "Hendrik Goltzius",
      title: "The Fall of Man",
      year: "1616",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/The_Fall_of_Man-1616-Hendrik_Goltzius.jpg/800px-The_Fall_of_Man-1616-Hendrik_Goltzius.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "5b",
      artist: "Fra Angelico",
      title: "The Harrowing of Hell",
      year: "1440",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Fra_Angelico_024.jpg/800px-Fra_Angelico_024.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Genesis 3:1-24",
    scripture_nt: "Romans 5:12-21, 1 Peter 3:18-20",
    description: "The fall of humanity brought spiritual death and separation from God. Christ's death and resurrection redeem humanity, conquering sin and death, and opening the gates of paradise once more."
  },
  {
    id: 6,
    theme: "Abel's Sacrifice → Christ's Sacrifice",
    section: "Creation and Patriarchs",
    old_testament: {
      id: "6a",
      artist: "Titian",
      title: "Cain and Abel",
      year: "1542",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Titian_-_Cain_and_Abel.JPG/800px-Titian_-_Cain_and_Abel.JPG",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "6b",
      artist: "Matthias Grünewald",
      title: "The Crucifixion",
      year: "1515",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Matthias_Gr%C3%BCnewald_-_The_Crucifixion_-_WGA10723.jpg/800px-Matthias_Gr%C3%BCnewald_-_The_Crucifixion_-_WGA10723.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Genesis 4:1-8, Hebrews 11:4",
    scripture_nt: "Hebrews 9:11-14, 10:5-10",
    description: "Abel offered a pleasing sacrifice to God and was killed by his brother. Christ offered Himself as the perfect sacrifice and was killed by His own people, yet His blood speaks better things than Abel's."
  },
  {
    id: 7,
    theme: "Noah → Christ the Savior",
    section: "Creation and Patriarchs",
    old_testament: {
      id: "7a",
      artist: "Daniel Maclise",
      title: "Noah's Sacrifice",
      year: "1847",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/NoahsSacrifice.JPG/800px-NoahsSacrifice.JPG",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "7b",
      artist: "Raphael",
      title: "The Transfiguration",
      year: "1520",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Transfiguration_Raphael.jpg/800px-Transfiguration_Raphael.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Genesis 6-9",
    scripture_nt: "1 Peter 3:20-21, 2 Peter 2:5",
    description: "Noah saved humanity and creation through the ark. Christ saves all who come to Him, becoming the ark of salvation in the flood of judgment."
  },
  {
    id: 8,
    theme: "The Flood → Baptism",
    section: "Creation and Patriarchs",
    old_testament: {
      id: "8a",
      artist: "Gustave Doré",
      title: "The Deluge",
      year: "1866",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Gustave_Dor%C3%A9_-_The_Holy_Bible_-_Plate_I%2C_The_Deluge.jpg/800px-Gustave_Dor%C3%A9_-_The_Holy_Bible_-_Plate_I%2C_The_Deluge.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "8b",
      artist: "Piero della Francesca",
      title: "The Baptism of Christ",
      year: "1450",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Piero_della_Francesca_-_Baptism_of_Christ_-_WGA17595.jpg/800px-Piero_della_Francesca_-_Baptism_of_Christ_-_WGA17595.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Genesis 7-8",
    scripture_nt: "1 Peter 3:20-21, Romans 6:3-4",
    description: "The waters of the flood cleansed the earth of sin. The waters of baptism cleanse the soul, bringing spiritual rebirth and new life in Christ."
  },
  {
    id: 9,
    theme: "Noah's Ark → The Church",
    section: "Creation and Patriarchs",
    old_testament: {
      id: "9a",
      artist: "Edward Hicks",
      title: "Noah's Ark",
      year: "1846",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Edward_Hicks%2C_American_-_Noah%27s_Ark_-_Google_Art_Project.jpg/1024px-Edward_Hicks%2C_American_-_Noah%27s_Ark_-_Google_Art_Project.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "9b",
      artist: "Pietro Perugino",
      title: "Christ Handing Keys to St. Peter",
      year: "1481",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Christ_Handing_the_Keys_to_St._Peter_by_Pietro_Perugino.jpg/1024px-Christ_Handing_the_Keys_to_St._Peter_by_Pietro_Perugino.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Genesis 6:14-22",
    scripture_nt: "Matthew 16:18, 1 Peter 3:20-21",
    description: "The ark preserved Noah's family and the animals from destruction. The Church is the new ark, preserving souls from spiritual destruction and carrying them to salvation."
  },
  {
    id: 10,
    theme: "Melchizedek → Christ's Priesthood",
    section: "Creation and Patriarchs",
    old_testament: {
      id: "10a",
      artist: "Peter Paul Rubens",
      title: "Meeting of Abraham and Melchizedek",
      year: "1625",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Peter_Paul_Rubens_-_The_Meeting_of_Abraham_and_Melchizedek_-_WGA20435.jpg/1024px-Peter_Paul_Rubens_-_The_Meeting_of_Abraham_and_Melchizedek_-_WGA20435.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "10b",
      artist: "Leonardo da Vinci",
      title: "The Last Supper",
      year: "1495",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Leonardo_da_Vinci_%281452-1519%29_-_The_Last_Supper_%281495-1498%29.jpg/1024px-Leonardo_da_Vinci_%281452-1519%29_-_The_Last_Supper_%281495-1498%29.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Genesis 14:18-20, Psalm 110:4",
    scripture_nt: "Hebrews 5:6-10, 7:1-28",
    description: "Melchizedek, priest of God Most High, offered bread and wine. Christ, our eternal High Priest, offers His Body and Blood under the forms of bread and wine in the Eucharist."
  },
  {
    id: 11,
    theme: "Sacrifice of Isaac → Sacrifice of Christ",
    section: "Creation and Patriarchs",
    old_testament: {
      id: "11a",
      artist: "Rembrandt",
      title: "The Sacrifice of Isaac",
      year: "1635",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Rembrandt_Harmensz._van_Rijn_035.jpg/800px-Rembrandt_Harmensz._van_Rijn_035.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "11b",
      artist: "El Greco",
      title: "Christ Carrying the Cross",
      year: "1580",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Christ_Carrying_the_Cross_1580.jpg/800px-Christ_Carrying_the_Cross_1580.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Genesis 22:1-19",
    scripture_nt: "John 3:16, Romans 8:32",
    description: "Abraham was willing to sacrifice his beloved son Isaac. God the Father sacrificed His only beloved Son for the salvation of the world. Isaac carried the wood; Christ carried the cross."
  },
  // Part II: Exodus and Covenant
  {
    id: 12,
    theme: "Joseph → Jesus",
    section: "Exodus and Covenant",
    old_testament: {
      id: "12a",
      artist: "Konstantin Flavitsky",
      title: "Joseph Sold by His Brothers",
      year: "1855",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Konstantin_Flavitsky_001.jpg/1012px-Konstantin_Flavitsky_001.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "12b",
      artist: "Caravaggio",
      title: "The Taking of Christ",
      year: "1602",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/The_Taking_of_Christ-Caravaggio_%28c.1602%29.jpg/1024px-The_Taking_of_Christ-Caravaggio_%28c.1602%29.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Genesis 37-50",
    scripture_nt: "Matthew 26:14-16, 27:3-10",
    description: "Joseph was betrayed by his brothers for silver, yet saved them from famine. Jesus was betrayed for thirty pieces of silver, yet saves humanity from spiritual death."
  },
  {
    id: 13,
    theme: "Moses → Christ the New Moses",
    section: "Exodus and Covenant",
    old_testament: {
      id: "13a",
      artist: "Rembrandt",
      title: "Moses with the Tablets",
      year: "1659",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Rembrandt_-_Moses_with_the_Ten_Commandments_-_Google_Art_Project.jpg/800px-Rembrandt_-_Moses_with_the_Ten_Commandments_-_Google_Art_Project.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "13b",
      artist: "Carl Bloch",
      title: "The Sermon on the Mount",
      year: "1877",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Bloch-SermonOnTheMount.jpg/800px-Bloch-SermonOnTheMount.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Exodus 20:1-17, Deuteronomy 18:15",
    scripture_nt: "Matthew 5-7, John 1:17",
    description: "Moses gave the Law on Mount Sinai. Christ, the New Moses, gives the New Law in the Sermon on the Mount, fulfilling and perfecting the old covenant."
  },
  {
    id: 14,
    theme: "Passover Lamb → Christ the Lamb of God",
    section: "Exodus and Covenant",
    old_testament: {
      id: "14a",
      artist: "Dieric Bouts",
      title: "The Passover",
      year: "1464",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dieric_Bouts_-_The_Feast_of_the_Passover_-_WGA03013.jpg/800px-Dieric_Bouts_-_The_Feast_of_the_Passover_-_WGA03013.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "14b",
      artist: "Jan van Eyck",
      title: "Adoration of the Mystic Lamb",
      year: "1432",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Jan_van_Eyck_The_Ghent_Altarpiece_-_Adoration_of_the_Lamb.jpg/1024px-Jan_van_Eyck_The_Ghent_Altarpiece_-_Adoration_of_the_Lamb.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Exodus 12:1-28",
    scripture_nt: "John 1:29, 1 Corinthians 5:7",
    description: "The blood of the Passover lamb saved the Israelites from death. Christ, the Lamb of God, saves all humanity through His precious blood shed on the cross."
  },
  {
    id: 15,
    theme: "Red Sea Crossing → Baptism",
    section: "Exodus and Covenant",
    old_testament: {
      id: "15a",
      artist: "Nicolas Poussin",
      title: "Crossing of the Red Sea",
      year: "1634",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/The_Crossing_of_The_Red_Sea.jpg/1024px-The_Crossing_of_The_Red_Sea.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "15b",
      artist: "Masaccio",
      title: "Baptism of the Neophytes",
      year: "1426",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Cappella_brancacci%2C_Battesimo_dei_neofiti_%28restaurato%29%2C_Masaccio.jpg/800px-Cappella_brancacci%2C_Battesimo_dei_neofiti_%28restaurato%29%2C_Masaccio.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Exodus 14:15-31",
    scripture_nt: "1 Corinthians 10:1-2, Romans 6:3-4",
    description: "Israel passed through the Red Sea from slavery to freedom. Christians pass through the waters of baptism from the slavery of sin to the freedom of God's children."
  },
  {
    id: 16,
    theme: "Manna → The Eucharist",
    section: "Exodus and Covenant",
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
    scripture_ot: "Exodus 16:1-36",
    scripture_nt: "John 6:31-58, 1 Corinthians 11:23-26",
    description: "God fed the Israelites with manna from heaven. Christ gives us the true bread from heaven - His Body and Blood in the Eucharist, the food of eternal life."
  },
  {
    id: 17,
    theme: "Water from the Rock → Christ the Living Water",
    section: "Exodus and Covenant",
    old_testament: {
      id: "17a",
      artist: "Nicolas Poussin",
      title: "Moses Striking the Rock",
      year: "1649",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Poussin%2C_Nicolas_-_Moses_Striking_Water_from_the_Rock_-_1649.jpg/1024px-Poussin%2C_Nicolas_-_Moses_Striking_Water_from_the_Rock_-_1649.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "17b",
      artist: "Guercino",
      title: "Christ and the Samaritan Woman",
      year: "1640",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Guercino_Christ_et_la_samaritaine.jpg/800px-Guercino_Christ_et_la_samaritaine.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Exodus 17:1-7, Numbers 20:1-13",
    scripture_nt: "John 4:13-14, 7:37-39, 1 Corinthians 10:4",
    description: "Moses struck the rock and water flowed for the thirsty Israelites. Christ is the spiritual rock from whom flows living water - the Holy Spirit and grace."
  },
  {
    id: 18,
    theme: "Ark of the Covenant → Mary",
    section: "Exodus and Covenant",
    old_testament: {
      id: "18a",
      artist: "James Tissot",
      title: "The Ark Passes Over the Jordan",
      year: "1902",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/James_Jacques_Joseph_Tissot_-_The_Ark_Passes_Over_the_Jordan_-_Google_Art_Project.jpg/1024px-James_Jacques_Joseph_Tissot_-_The_Ark_Passes_Over_the_Jordan_-_Google_Art_Project.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "18b",
      artist: "Domenico Ghirlandaio",
      title: "The Visitation",
      year: "1491",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Domenico_ghirlandaio%2C_visitazione%2C_louvre_01.jpg/800px-Domenico_ghirlandaio%2C_visitazione%2C_louvre_01.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Exodus 25:10-22, 2 Samuel 6:2-16",
    scripture_nt: "Luke 1:39-56, Revelation 11:19-12:1",
    description: "The Ark contained the tablets of the Law, manna, and Aaron's rod. Mary bears the Word made flesh, the Bread of Life, and the eternal High Priest in her womb."
  },
  {
    id: 19,
    theme: "Bronze Serpent → The Crucifixion",
    section: "Exodus and Covenant",
    old_testament: {
      id: "19a",
      artist: "Peter Paul Rubens",
      title: "The Brazen Serpent",
      year: "1609",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Peter_Paul_Rubens_-_Moses_and_the_Brazen_Serpent.jpg/800px-Peter_Paul_Rubens_-_Moses_and_the_Brazen_Serpent.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "19b",
      artist: "Peter Paul Rubens",
      title: "The Elevation of the Cross",
      year: "1610",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rubens_-_The_Raising_of_the_Cross.jpg/800px-Rubens_-_The_Raising_of_the_Cross.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Numbers 21:4-9",
    scripture_nt: "John 3:14-15, John 19:37",
    description: "Those bitten by serpents who looked upon the bronze serpent were healed. Those wounded by sin who look with faith upon Christ crucified receive salvation."
  },
  {
    id: 20,
    theme: "Levitical Priesthood → Christ's High Priesthood",
    section: "Exodus and Covenant",
    old_testament: {
      id: "20a",
      artist: "Unknown",
      title: "The High Priest Aaron",
      year: "17th century",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/HighPriest.jpg/600px-HighPriest.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "20b",
      artist: "Unknown",
      title: "Christ as High Priest",
      year: "17th century",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Jesus-Christ-from-Hagia-Sophia.jpg/600px-Jesus-Christ-from-Hagia-Sophia.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Leviticus 16:1-34, Exodus 28:1-43",
    scripture_nt: "Hebrews 4:14-5:10, 7:11-28",
    description: "The Levitical priests offered animal sacrifices repeatedly. Christ, our eternal High Priest, offered Himself once for all, entering the true Holy of Holies in heaven."
  },
  {
    id: 21,
    theme: "The Scapegoat → Christ Bearer of Sins",
    section: "Exodus and Covenant",
    old_testament: {
      id: "21a",
      artist: "William Holman Hunt",
      title: "The Scapegoat",
      year: "1854",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/William_Holman_Hunt_-_The_Scapegoat.jpg/1024px-William_Holman_Hunt_-_The_Scapegoat.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "21b",
      artist: "Antonio Ciseri",
      title: "Ecce Homo",
      year: "1871",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Ecce_homo_by_Antonio_Ciseri_%281%29.jpg/1024px-Ecce_homo_by_Antonio_Ciseri_%281%29.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Leviticus 16:20-22",
    scripture_nt: "Isaiah 53:4-6, 2 Corinthians 5:21",
    description: "The scapegoat bore the sins of Israel into the wilderness. Christ bears the sins of the world, taking them upon Himself and removing them forever."
  },
  {
    id: 22,
    theme: "Crossing the Jordan → Christian Life",
    section: "Exodus and Covenant",
    old_testament: {
      id: "22a",
      artist: "Gustave Doré",
      title: "Israelites Crossing the Jordan",
      year: "1866",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/076.The_Israelites_Cross_the_Jordan.jpg/800px-076.The_Israelites_Cross_the_Jordan.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "22b",
      artist: "Andrea del Verrocchio",
      title: "The Baptism of Christ",
      year: "1475",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Andrea_del_Verrocchio%2C_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg/800px-Andrea_del_Verrocchio%2C_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Joshua 3:14-17",
    scripture_nt: "Matthew 3:13-17, Colossians 2:12",
    description: "Israel crossed the Jordan to enter the Promised Land. Christians enter new life through baptism, beginning their journey to the heavenly promised land."
  },
  {
    id: 23,
    theme: "Joshua → Jesus",
    section: "Exodus and Covenant",
    old_testament: {
      id: "23a",
      artist: "John Martin",
      title: "Joshua Commanding the Sun",
      year: "1816",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Joshua_Commanding_the_Sun_to_Stand_Still_upon_Gibeon_%281816%29_John_Martin_-_NGA_2004.64.1.jpg/1024px-Joshua_Commanding_the_Sun_to_Stand_Still_upon_Gibeon_%281816%29_John_Martin_-_NGA_2004.64.1.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "23b",
      artist: "Matthias Grünewald",
      title: "The Resurrection",
      year: "1515",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Matthias_Gr%C3%BCnewald_-_The_Resurrection_-_WGA10754.jpg/800px-Matthias_Gr%C3%BCnewald_-_The_Resurrection_-_WGA10754.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Joshua 1:1-9, 10:12-14",
    scripture_nt: "Acts 4:12, Hebrews 4:8-11",
    description: "Joshua (whose name means 'Yahweh saves') led Israel into the Promised Land. Jesus (the Greek form of Joshua) leads humanity into eternal life."
  },
  // Part III: Kingdom and Prophets
  {
    id: 24,
    theme: "Davidic Kingdom → The Church",
    section: "Kingdom and Prophets",
    old_testament: {
      id: "24a",
      artist: "Jan de Bray",
      title: "David Playing the Harp",
      year: "1670",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/David_Playing_the_Harp_1670_Jan_de_Bray.jpg/800px-David_Playing_the_Harp_1670_Jan_de_Bray.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "24b",
      artist: "Vincenzo Catena",
      title: "Christ Giving Keys to St. Peter",
      year: "1520",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Vincenzo_Catena_026.jpg/800px-Vincenzo_Catena_026.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "2 Samuel 7:11-16",
    scripture_nt: "Matthew 16:18-19, Luke 1:32-33",
    description: "David established a kingdom that would endure forever through his lineage. Christ, Son of David, establishes the eternal kingdom of the Church."
  },
  {
    id: 25,
    theme: "King David → Christ the King",
    section: "Kingdom and Prophets",
    old_testament: {
      id: "25a",
      artist: "Gerard van Honthorst",
      title: "King David Playing the Harp",
      year: "1622",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gerard_van_Honthorst_-_King_David_Playing_the_Harp_-_Google_Art_Project.jpg/800px-Gerard_van_Honthorst_-_King_David_Playing_the_Harp_-_Google_Art_Project.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "25b",
      artist: "Jan van Eyck",
      title: "Christ the King",
      year: "1430",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Jan_van_Eyck_-_The_Ghent_Altarpiece_-_God_Almighty_%28detail%29_-_WGA07631.jpg/600px-Jan_van_Eyck_-_The_Ghent_Altarpiece_-_God_Almighty_%28detail%29_-_WGA07631.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "2 Samuel 5:1-5, Psalm 89:3-4",
    scripture_nt: "Revelation 19:16, Matthew 27:11",
    description: "David was anointed king and united Israel. Christ is the eternal King of Kings, uniting all peoples in His kingdom that will have no end."
  },
  {
    id: 26,
    theme: "Solomon → Christ the Wise Builder",
    section: "Kingdom and Prophets",
    old_testament: {
      id: "26a",
      artist: "Peter Paul Rubens",
      title: "The Judgment of Solomon",
      year: "1617",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Peter_Paul_Rubens_-_The_Judgement_of_Solomon_-_Google_Art_Project.jpg/1024px-Peter_Paul_Rubens_-_The_Judgement_of_Solomon_-_Google_Art_Project.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "26b",
      artist: "Albrecht Dürer",
      title: "Christ Among the Doctors",
      year: "1506",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Christ_Among_the_Doctors_04.jpg/800px-Christ_Among_the_Doctors_04.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "1 Kings 3:5-14, 6:1-38",
    scripture_nt: "Matthew 12:42, 1 Corinthians 1:30",
    description: "Solomon built the Temple with great wisdom. Christ, greater than Solomon, builds the spiritual temple of the Church with divine wisdom."
  },
  {
    id: 27,
    theme: "Queen of Sheba → The Magi",
    section: "Kingdom and Prophets",
    old_testament: {
      id: "27a",
      artist: "Edward Poynter",
      title: "Queen of Sheba before Solomon",
      year: "1890",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Sir_Edward_John_Poynter_-_The_visit_of_the_Queen_of_Sheba_to_King_Solomon_-_Google_Art_Project.jpg/1024px-Sir_Edward_John_Poynter_-_The_visit_of_the_Queen_of_Sheba_to_King_Solomon_-_Google_Art_Project.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "27b",
      artist: "Gentile da Fabriano",
      title: "Adoration of the Magi",
      year: "1423",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Gentile_da_Fabriano_-_Adorazione_dei_Magi_-_Google_Art_Project.jpg/1024px-Gentile_da_Fabriano_-_Adorazione_dei_Magi_-_Google_Art_Project.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "1 Kings 10:1-13",
    scripture_nt: "Matthew 2:1-12, 12:42",
    description: "The Queen of Sheba came from afar with gifts to honor Solomon's wisdom. The Magi journey from the East with gifts to worship Christ, Wisdom incarnate."
  },
  {
    id: 28,
    theme: "Temple of Jerusalem → Christ's Body/Church",
    section: "Kingdom and Prophets",
    old_testament: {
      id: "28a",
      artist: "James Tissot",
      title: "Solomon's Temple",
      year: "1902",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Tissot_Solomon_Dedicates_the_Temple_at_Jerusalem.jpg/1024px-Tissot_Solomon_Dedicates_the_Temple_at_Jerusalem.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "28b",
      artist: "El Greco",
      title: "The Cleansing of the Temple",
      year: "1600",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/El_Greco_-_The_Purification_of_the_Temple_-_WGA10541.jpg/1024px-El_Greco_-_The_Purification_of_the_Temple_-_WGA10541.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "1 Kings 8:10-13",
    scripture_nt: "John 2:19-21, 1 Corinthians 3:16",
    description: "The Temple was God's dwelling place among His people. Christ's body is the true temple, and the Church is His mystical body where God dwells."
  },
  {
    id: 29,
    theme: "Jonah → Christ in the Tomb",
    section: "Kingdom and Prophets",
    old_testament: {
      id: "29a",
      artist: "Pieter Lastman",
      title: "Jonah and the Whale",
      year: "1621",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Pieter_Lastman_-_Jonah_and_the_Whale_-_Google_Art_Project.jpg/1024px-Pieter_Lastman_-_Jonah_and_the_Whale_-_Google_Art_Project.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "29b",
      artist: "Caravaggio",
      title: "The Entombment of Christ",
      year: "1603",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/The_Entombment_of_Christ-Caravaggio_%28c.1602-3%29.jpg/800px-The_Entombment_of_Christ-Caravaggio_%28c.1602-3%29.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Jonah 1:17, 2:10",
    scripture_nt: "Matthew 12:39-40, 16:4",
    description: "Jonah was three days in the belly of the whale before being delivered. Christ spent three days in the tomb before His glorious resurrection."
  },
  {
    id: 30,
    theme: "Suffering Servant → The Passion",
    section: "Kingdom and Prophets",
    old_testament: {
      id: "30a",
      artist: "Michelangelo",
      title: "Isaiah",
      year: "1509",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Michelangelo%2C_profeti%2C_Isaiah_01.jpg/800px-Michelangelo%2C_profeti%2C_Isaiah_01.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    new_testament: {
      id: "30b",
      artist: "Antonello da Messina",
      title: "Christ at the Column",
      year: "1476",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Antonello_da_Messina_-_Christ_at_the_Column_-_WGA0744.jpg/600px-Antonello_da_Messina_-_Christ_at_the_Column_-_WGA0744.jpg",
      source: "Wikimedia Commons",
      license: "Public Domain"
    },
    scripture_ot: "Isaiah 52:13-53:12",
    scripture_nt: "Matthew 26-27, 1 Peter 2:24-25",
    description: "Isaiah prophesied the Suffering Servant who would bear our iniquities. Christ fulfills this prophecy perfectly in His passion and death for our salvation."
  }
];

export const getTypologyById = (id: number): Typology | undefined => {
  return typologies.find(t => t.id === id);
};

export const getTypologiesBySection = (section: string): Typology[] => {
  return typologies.filter(t => t.section === section);
};

export const sections = [
  "Creation and Patriarchs",
  "Exodus and Covenant", 
  "Kingdom and Prophets"
];