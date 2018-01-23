module.exports = {
    cssDest: 'src/css/main.css',
    options: {
        // namespace: '#atomic'
    },
    configs: {
        breakPoints: {
            sm: '@media screen(min-width=750px)',
            md: '@media(min-width=1000px)',
            lg: '@media(min-width=1200px)'
        },
        custom: {
            '1': '1px solid #000',
            '$menuBarBoxShadow': '0 2px 9px 0 rgba(0, 0, 0, 0.3)',
            'standardFf': 'Helvetica Neue, Helvetica, Arial, STHeiti, Microsoft JhengHei, 微軟正黑體, sans-serif',
        },
        classNames: []
    }
}