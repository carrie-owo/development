import React, {Component} from 'react';
import './App.css';
import FilteredList from './FilteredList';

const artpieceList = [
  { title: "David", 
    type: "Sculpture", 
    artist: "Michelangelo Buonarroti", 
    year: "1504", 
    image: "david.jpg", 
    favorite: false,
    favoriteImg: "heart.png",
    description: "David is a masterpiece of Renaissance sculpture created in marble "+
    "between 1501 and 1504 by the Italian artist Michelangelo. David is a 5.17-meter "+
    "marble sature of the Biblical hero David, a favored subject in the art of Florence.\n\n"+
    "Because of the nature of the hero it represented, the statue soon came to symbolize " +
    "the defence of civil liberties embodied in the Republic of Florence, an independent "+
    "city-state threatened on all sides by more powerful rival states and by the hegemony "+
    "of the Medici family. The eyes of David, with a warning glare, were fixated towards Rome."
  },

  { title: "The Creation of Adam", 
    type: "Painting", 
    artist: "Michelangelo Buonarroti", 
    year: "1510", 
    image: "genesis.jpg", 
    favorite: false,
    favoriteImg: "heart.png",
    description: "The Creation of Adam (Italian: Creazione di Adamo) is a fresco painting by "+
    "Italian artist Michelangelo, which forms part of the Sistine Chapel's ceiling, painted c. "+
    "1508–1512. It illustrates the Biblical creation narrative from the Book of Genesis in which "+
    "God gives life to Adam, the first man. The fresco is part of a complex iconographic scheme "+
    "and is chronologically the fourth in the series of panels depicting episodes from Genesis."
  },

  { title: "Bacchus", 
    type: "Sculpture", 
    artist: "Michelangelo Buonarroti", 
    year: "1497", 
    image: "bacchus.jpg", 
    favorite: false,
    favoriteImg: "heart.png",
    description:"Bacchus (1496–1497) is a marble sculpture by the Italian High Renaissance sculptor, "+
    "painter, architect and poet Michelangelo. The statue is somewhat over life-size and depicts Bacchus, "+
    "the Roman god of wine, in a reeling pose suggestive of drunkenness. Commissioned by Raffaele Riario, "+
    "a high-ranking Cardinal and collector of antique sculpture, it was rejected by him and was bought "+
    "instead by Jacopo Galli, Riario’s banker and a friend to Michelangelo. Along with the Pietà the Bacchus "+
    "is one of only two surviving sculptures from the artist's first period in Rome.\n\n"+
    "Bacchus is depicted with rolling eyes, his staggering body almost teetering off the rocky outcrop on which "+
    "he stands. Sitting behind him is a faun, who eats the bunch of grapes slipping out of Bacchus's left hand. "+
    "With its swollen breast and abdomen, the Bacchus figure suggested to Giorgio Vasari \"both the slenderness "+
    "of a young man and the fleshiness and roundness of a woman\", and its androgynous quality has often been noted "+
    "(although the testicles are swollen as well)."
  },

  { title: "Angel", 
    type: "Sculpture", 
    artist: "Michelangelo Buonarroti", 
    year: "1494", 
    image: "angel.jpg", 
    favorite: false,
    favoriteImg: "heart.png",
    description:"The statue of an Angel (1494–1495) was created by Michelangelo out of marble. Its height is 51.5 cm. "+
    "It is situated in the Basilica of San Domenico, Bologna."
  },

  { title: "Three Graces", 
    type: "Drawing", 
    artist: "Raffaello Santi", 
    year: "1518", 
    image: "threegraces.jpg", 
    favorite: false,
    favoriteImg: "heart.png",
    description:"Red chalk study for the Villa Farnesina Three Graces."
  },

  { title: "Mond Crucifixion", 
    type: "Painting", 
    artist: "Raffaello Santi", 
    year: "1503", 
    image: "crucifixion.jpg", 
    favorite: false,
    favoriteImg: "heart.png",
    description:"The Mond Crucifixion (or Crocifissione Gavari; both names are after former owners) "+
    "is a painting by Italian Renaissance artist Raphael, originally made up of a main panel and "+
    "a two-panel predella. The main panel was bequeathed to the National Gallery by Ludwig Mond, "+
    "whilst the two predella panels are in the Museu Nacional de Arte Antiga in Lisbon (St Jerome "+
    "Resurrects Two Dead Men) and the North Carolina Museum of Art in the USA (The Miracle of St Jerome).\n\n"+
    "An early work influenced by Perugino, it was originally an altarpiece in the church of San Domenico, "+
    "Città di Castello, near Raphael's hometown of Urbino. The painting shows Jesus on the cross, "+
    "who is looking peaceful even though he is dying. There are two angels catching his blood in chalices. "+
    "On Jesus' left kneels Mary Magdalene, with John the Evangelist standing behind her. On his right Mary "+
    "stands, and St. Jerome, to whom the altar was dedicated, is kneeling."
  },

  { title: "Lucretia", 
    type: "Drawing", 
    artist: "Raffaello Santi", 
    year: "1514", 
    image: "lucretia.jpg", 
    favorite: false,
    favoriteImg: "heart.png",
    description:"This monumental drawing, produced by Raphael in his early Roman period, reveals his "+
    "arresting knowledge of antique Roman sculpture and literary sources. According to Ovid's Fasti "+
    "and Livy's History of Rome, the noble matron Lucretia committed suicide after being raped by Sextus, "+
    "son of the tyrant Tarquin the Proud. Her husband, and later Junius Brutus, avenged her honor by "+
    "leading a revolt that helped institute the republic as a form of government. The artist recast the "+
    "heroic early Roman legend to focus on the rhetorical gesture of Lucretia as a model of sublime virtue, "+
    "heightening the drama of her death. Raphael chose to depict the moment when she is about to plunge "+
    "a dagger into her chest. The sculptural grandeur and monumentality of form evident here speak freshly "+
    "of Raphael's encounter with Roman antiquity."
  },

  { title: "Portrait of Elisabetta Gonzaga", 
    type: "Painting", 
    artist: "Raffaello Santi", 
    year: "1504", 
    image: "elisabetta.jpg", 
    favorite: false,
    favoriteImg: "heart.png",
    description:"The Portrait of Elisabetta Gonzaga is a painting from around 1504, "+
    "attributed to the Italian Renaissance artist Raphael and housed in the Uffizi Gallery, Florence."
  },

  { title: "Mona Lisa", 
    type: "Painting", 
    artist: "Leonardo da Vinci", 
    year: "1505", 
    image: "monalisa.jpg", 
    favorite: false,
    favoriteImg: "heart.png",
    description:"Mona Lisa is considered an archetypal masterpiece of the Italian Renaissance, "+
    "and has been described as \"the best known, the most visited, the most written about, "+
    "the most sung about, the most parodied work of art in the world.\" The Mona Lisa is also "+
    "one of the most valuable paintings in the world. It holds the Guinness World Record for "+
    "the highest known insurance valuation in history.\n\n"+
    "The painting is thought by many to be a portrait of the Italian noblewoman Lisa Gherardini, "+
    "the wife of Francesco del Giocondo, and is in oil on a white Lombardy poplar panel. \n\n"+
    "The subject's expression, which is frequently described as enigmatic, the monumentality "+
    "of the composition, the subtle modelling of forms, and the atmospheric illusionism are "+
    "novel qualities that have contributed to the continuing fascination and study of the work."
  },

  { title: "Vitruvian Man", 
    type: "Drawing", 
    artist: "Leonardo da Vinci", 
    year: "1485", 
    image: "vitruvianman.jpeg", 
    favorite: false,
    favoriteImg: "heart.png",
    description:"The Vitruvian Man is a drawing made by the Italian polymath Leonardo da Vinci "+
    "in about 1490. It is accompanied by notes based on the work of the Roman architect Vitruvius. "+
    "The drawing, which is in ink on paper, depicts a man in two superimposed positions with his arms "+
    "and legs apart and inscribed in a circle and square. \n\n"+
    "The drawing represents ideal human body proportions. Its inscription in a square and a circle "+
    "comes from a description by the ancient Roman architect Vitruvius in Book III of his treatise "+
    "De architectura. Yet, as it has been demonstrated, Leonardo did not represent Vitruvius's proportions "+
    "of the limbs but included those he found himself after measuring male models in Milan."
  },

  { title: "The Virgin with the Laughing Child", 
    type: "Sculpture", 
    artist: "Leonardo da Vinci", 
    year: "1472", 
    image: "davincisculpt.jpg", 
    favorite: false,
    favoriteImg: "heart.png",
    description:"This sculpture is one of the most famous pieces in the Victoria and Albert Museum - "+
    "and yet we are not certain who modelled it. The leading fifteenth-century Florentine sculptors "+
    "Antonio Rossellino, Andrea del Verrocchio and Desiderio da Settignano are amongst those who have "+
    "been named. The terracotta was for many years attributed to Rossellino, but when the sculpture was "+
    "lent for the first time to an exhibition in Florence in spring 2019, scholars presented an attribution "+
    "to the young Leonardo da Vinci, while he was in Verrocchio's workshop (c.1472). This idea was first "+
    "put forward in 1899, and won favour for several years. The maker intriguingly combines stylistic "+
    "elements from each of the named sculptors. But the emphasis on the human relationship between mother "+
    "and child and the naturalistic treatment of the subject are typical of the time."
  },

  { title: "Landscape of the Arno Valley", 
    type: "Drawing", 
    artist: "Leonardo da Vinci", 
    year: "1473", 
    image: "landscape.jpg", 
    favorite: false,
    favoriteImg: "heart.png",
    description:"The drawing, created when Leonardo was just 21, is dated August 5, 1473, and features a "+
    "landscape of the Arno river valley and Montelupo Castle. The pen, ink, and pencil sketch is characterized "+
    "by a fluent technical approach that was ahead of its time. The drawing remains the earliest surviving "+
    "known work by da Vinci."
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="title">Art of the Italian High Renaissance</div>
        <div class="description">
          <p>
            <div class="bold">Explore the artworks by Michelangelo, Leonardo, and Raffaello in the 15-16 Century Italian High Renaissance!<br/></div>
            Click on the image to view description and the artwork in greater detail. <br/>
            Click on <img src={require('./image/heart.png')} width={16}/> to save an artwork to your favorite list.
          </p>
        </div>
        <FilteredList items={artpieceList}/>
      </div>
    );
  }
}

export default App;
