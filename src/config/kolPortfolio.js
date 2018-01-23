module.exports = {
    id: 1,
    name: '修敏傑',
    walletValue: 345.03,
    walletCurrency: 'ETH',
    kols: [
        {
            name: '上班不要看NSFW',
            image: 'https://s3-us-west-1.amazonaws.com/acttools/howhowcoin/20180123/notwatch.jpg?q=57785',
            kolCurrencyValue: Math.floor(Math.random() * 1000),
            kolCurrencyName: 'NSFWC',
            kolCurrencyToETH: Math.round(Math.random() * 10000) / 100
        },
        {
            name: '囧星人',
            image: 'https://s3-us-west-1.amazonaws.com/acttools/howhowcoin/20180123/foreigner.jpg?q=57782',
            kolCurrencyValue: Math.floor(Math.random() * 1000),
            kolCurrencyName: '9C',
            kolCurrencyToETH: Math.round(Math.random() * 10000) / 100
        },
        {
            name: '黃阿瑪的後宮生活',
            image: 'https://s3-us-west-1.amazonaws.com/acttools/howhowcoin/20180123/cat.jpg?q=57784',
            kolCurrencyValue: Math.floor(Math.random() * 1000),
            kolCurrencyName: 'SCC',
            kolCurrencyToETH: Math.round(Math.random() * 10000) / 100
        }
    ]
}