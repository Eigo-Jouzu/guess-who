// Shared character data for the student and teacher pages.
// Edit profiles here and both pages update.
//
// Rules used for this data:
//  - Every character has 7 traits in total: 4 "has" + 3 "likes".
//  - Every trait is shared by at least 3 characters.
//  - Visible traits (hair, eyes, sweater) are listed for EVERYONE who visibly has them.
//  - "a pet", "a bike", "a guitar", "a piano", "a brother", "a sister" and "a computer"
//    are not visible in the pictures; they can be swapped for other words
//    (just replace the word for every character who has it).
//  - Rulings: "black hair" includes Miyu's and Rin's black/purple hair;
//    "a sweater" includes all hoodies; "likes animals" matches the five
//    animal-themed characters (Hana, Haruto, Miyu, Ren, Sora).
const CHARACTERS = [
  {
    id: "taku",
    name: "Taku",
    img: "img/taku.png",
    has: ["black hair", "blue eyes", "a sweater", "a sister"],
    likes: ["helping people", "soccer", "sports"]
  },
  {
    id: "hana",
    name: "Hana",
    img: "img/hana.png",
    has: ["a sweater", "a white sweater", "a pet", "a bike"],
    likes: ["animals", "helping people", "music"]
  },
  {
    id: "sota",
    name: "Sota",
    img: "img/sota.png",
    has: ["a bike", "a brother", "a guitar", "a sister"],
    likes: ["art", "books", "music"]
  },
  {
    id: "mina",
    name: "Mina",
    img: "img/mina.png",
    has: ["black hair", "brown eyes", "a piano", "a sister"],
    likes: ["basketball", "music", "sports"]
  },
  {
    id: "ren",
    name: "Ren",
    img: "img/ren.png",
    has: ["blue eyes", "a sweater", "a pet", "a guitar"],
    likes: ["animals", "sweets", "video games"]
  },
  {
    id: "yui",
    name: "Yui",
    img: "img/yui.png",
    has: ["brown eyes", "a brother", "a computer", "a sister"],
    likes: ["helping people", "music", "sweets"]
  },
  {
    id: "riku",
    name: "Riku",
    img: "img/riku.png",
    has: ["brown eyes", "a sweater", "a bike", "a guitar"],
    likes: ["basketball", "soccer", "sports"]
  },
  {
    id: "sora",
    name: "Sora",
    img: "img/sora.png",
    has: ["blue eyes", "a pet", "a computer", "a piano"],
    likes: ["animals", "books", "music"]
  },
  {
    id: "haruto",
    name: "Haruto",
    img: "img/haruto.png",
    has: ["a sweater", "a white sweater", "a computer", "a piano"],
    likes: ["animals", "soccer", "sports"]
  },
  {
    id: "miyu",
    name: "Miyu",
    img: "img/miyu.png",
    has: ["black hair", "a sweater", "a white sweater", "a pet"],
    likes: ["animals", "art", "books"]
  },
  {
    id: "kei",
    name: "Kei",
    img: "img/kei.png",
    has: ["blue eyes", "a sweater", "a brother", "a piano"],
    likes: ["basketball", "sports", "video games"]
  },
  {
    id: "rin",
    name: "Rin",
    img: "img/rin.png",
    has: ["black hair", "a bike", "a computer", "a sister"],
    likes: ["art", "sweets", "video games"]
  }
];