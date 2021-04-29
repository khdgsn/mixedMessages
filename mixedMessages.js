// Alien Generator
    const alienType = ['Gurndee', 'Amythornd', 'Peasea', 'Blorgenkup'];
    const alienNames = ['Nosh', 'Vesh', 'Gox', 'Xusp', 'Zow', 'Yeg', 'Kozz', 'Xanny', 'Zubu', 'Xas'];
    const food = ['Fish', 'Pears', 'Pb&J sandwhiches', 'Oreos', 'Salads', 'Toast', 'Yoghurt', 'Steak', 'Pasta', 'Pizza'];
     
    const randNum = array => {
        let i = 0;
        i = Math.floor(Math.random() * array.length);
        return array[i]
    }

    console.log(`The world's first Alien was a ${randNum(alienType)}, called ${randNum(alienNames)}, who loved to eat ${randNum(food)}.`);