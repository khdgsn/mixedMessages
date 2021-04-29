// Alien Generator
    const alienRace = ['Gurndee', 'Amythornd', 'Peasea', 'Blorgenkup'];
    const alienNames = ['Nosh', 'Vesh', 'Gox', 'Xusp', 'Zow', 'Yeg', 'Kozz', 'Xanny', 'Zubu', 'Xas'];
    const food = ['Fish', 'Pears', 'PB & J sandwhiches', 'Oreos', 'Salads', 'Toast', 'Yoghurt', 'Steak', 'Pasta', 'Pizza'];
     
    const randNum = array => {
        let i = 0;
        i = Math.floor(Math.random() * array.length);
        return array[i]
    }

    console.log(`The first Alien race discovered was a ${randNum(alienRace)}. The first encounter was with an Alien called ${randNum(alienNames)}, who loved to eat ${randNum(food)}.`);
