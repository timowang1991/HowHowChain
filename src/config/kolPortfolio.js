module.exports = {
    id: 1,
    name: '修敏傑',
    walletValue: 345.03,
    walletCurrency: 'ETH',
    kols: [
        {
            name: 'HowFun',
            image: 'https://imgur.com/a/tkBhi',
            kolCurrencyValue: 100,
            kolCurrencyName: 'HFC',
            kolCurrencyToETH: 2.34
        },
        {
            name: '上班不要看NSFW',
            image: 'https://imgur.com/a/rbaMW',
            kolCurrencyValue: Math.floor(Math.random() * 1000),
            kolCurrencyName: 'NSFWC',
            kolCurrencyToETH: Math.round(Math.random() * 10000) / 100
        },
        {
            name: '囧星人',
            image: 'https://imgur.com/a/P8GQk',
            kolCurrencyValue: Math.floor(Math.random() * 1000),
            kolCurrencyName: '9C',
            kolCurrencyToETH: Math.round(Math.random() * 10000) / 100
        },
        {
            name: '黃阿瑪的後宮生活',
            image: 'https://imgur.com/a/wiI64',
            kolCurrencyValue: Math.floor(Math.random() * 1000),
            kolCurrencyName: 'SCC',
            kolCurrencyToETH: Math.round(Math.random() * 10000) / 100
        }
    ]
}