if (posts.find().count() === 0) {
    posts.insert({
        _id: 'E6WzX2BPZERhF6dQ6',
        brand: 'Epiphone',
        model: 'Riviera E360TDC',
        year: '1967',
        description: 'This baby sings and has vintage mojo to spare. Made in Gibson\'s Kalamazoo factory, serial number dates it to 1967. Comes with period Gibson archtop case.',
        cover: '1.jpg',
        img: ['2.jpg','3.jpg','4.jpg'],
        finish: 'Cherry',
        origin: 'USA',
        comments: [
            {
                _id: 'J3tQjxRi84uZ2TvhY',
                name: 'Dimitri de Wit',
                img: 'media/dimi.png',
                message: 'Cool!'
            },
            {
                _id: 'J3tQjARi84uZ2TvhY',
                name: 'Sjaak Luthart',
                img: 'media/sjaak.png',
                message: 'Mooi gitaar!'
            },
            {
                _id: 'J3tQjRRi84uZ2TvhY',
                name: 'Tobias Stikvoort',
                img: 'media/tobi.png',
                message: 'Ziet er zeker goed uit.'
            }
        ],
        likes: [
            {
                _id: 'J3tQjxRi84uZ2TvhY'
            }
        ],
        date: new Date ()
    });
    posts.insert({
        _id: 'J3tQjxRi84uZ8TvhY',
        brand: 'Fender',
        model: 'Jazzmaster',
        year: '1968',
        description: 'This Fender Jazzmaster was made in the USA in 1968.  The neck is stamped 66, and the serial number and pickups are 68.  Both body and neck are stamped "DEMO" from the factory - probably this was a sales reps guitar or used at a NAMM show.  Its a great guitar that plays and sounds excellent.  It is all original except for the tuning pegs and an extra string tree.  It comes with a non original hard case.',
        cover: '1.jpg',
        img: ['2.jpg','3.jpg','4.jpg'],
        finish: 'Sunburst',
        origin: 'USA',
        comments: [
            {
                _id: 'J3tQjxRi84uZ2TvhY',
                name: 'Dimitri de Wit',
                img: 'media/dimi.png',
                message: 'Cool!'
            },
            {
                _id: 'J3tQjARi84uZ2TvhY',
                name: 'Sjaak Luthart',
                img: 'media/sjaak.png',
                message: 'Mooi gitaar!'
            },
            {
                _id: 'J3tQjRRi84uZ2TvhY',
                name: 'Tobias Stikvoort',
                img: 'media/tobi.png',
                message: 'Ziet er zeker goed uit.'
            }
        ],
        likes: [
            {
                _id: 'J3tQjxRi84uZ2TvhY'
            },
            {
                _id: 'J3tQjARi84uZ2TvhY'
            },
            {
                _id: 'J3tQjRRi84uZ2TvhY'
            }
        ],
        date: new Date ()
    });
    posts.insert({
        _id: 'XSdAtifR2qYBXYeP2',
        brand: 'Gibson',
        model: 'ES-125T',
        year: '1959',
        description: 'This Vintage 1959 Gibson USA ES-125T is a great playing and sounding guitar.  I\'m convinced that you would be extremely hard pressed to find another nicer than this.  It does have some minor scratch\'s, dings, marks, & light checking here and there, but is is a 46+ year old guitar.',
        cover: '1.jpg',
        img: ['2.jpg','3.jpg','4.jpg'],
        finish: 'Sunburst',
        origin: 'USA',
        comments: [
            {
                _id: 'J3tQjxRi84uZ2TvhY',
                name: 'Dimitri de Wit',
                img: 'media/dimi.png',
                message: 'Cool!'
            },
            {
                _id: 'J3tQjARi84uZ2TvhY',
                name: 'Sjaak Luthart',
                img: 'media/sjaak.png',
                message: 'Mooi gitaar!'
            },
            {
                _id: 'J3tQjRRi84uZ2TvhY',
                name: 'Tobias Stikvoort',
                img: 'media/tobi.png',
                message: 'Ziet er zeker goed uit.'
            }
        ],
        likes: [
            {
                _id: 'J3tQjARi84uZ2TvhY'
            },
            {
                _id: 'J3tQjRRi84uZ2TvhY'
            }
        ],
        date: new Date ()
    });
}