module.exports = {
    theme: {
        extend: {
            fontFamily:{
                'redHatDisplay': ['Red Hat Display', 'sans-serif']
            },
            screens: {
                'xs460': {'min': '460px'},
                'xs': {'max': '640px'},
                'md/lg': {'min': '900px'},
                'md907': {'min': '907px'},
                'lg1200': {'min': '1200px'},
            },
            backgroundImage: theme => ({
                'mainImage': "url('../img/nav/Banner.jpg')",
                'backgroungMainLogo': "url('../img/Banner@2x.png')",
                'map': "url('../img/directors/LinkeSeite@2x.png')"
            }),
            zIndex:{
                '5': '5'
            },
            colors: {
                "primary-blue": "#45CDFC",
                "secondary-blue": '#0080AC',
                "terciary-blue": '#3FB2CF',
                "primary-gray": '#6E6E6E',
                "secondary-gray": '#464646',
                "tertiary-gray": '#EDEDED',
                "back-gray": '#4A4349',
                "mapBackGray": '#575156',
                "directors-section": '#524A51',
                "letter-gray": '#C6C6C6',
                "bgShading": 'rgba(69, 205, 252, 0.45)'
            },
            boxShadow: {
                asideBox: "9px 8px 14px -3px rgba(66,66,66,0.67), 9px 8px 14px -3px rgba(66,66,66,0.67), 9px 8px 14px -3px rgba(66,66,66,0.67);"
            },
            animation: {
                'fadeIn': 'fadeIn 1000ms'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                }
            }
        }
    },
    variants: {
        animation: ['responsive', 'hover', 'group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
        fontSize: ['responsive', 'hover', 'group-hover'],
        scale: ['responsive', 'hover', 'group-hover'],
        transform: ['responsive', 'hover', 'group-hover'],
        padding: ['responsive', 'hover', 'group-hover'],
        margin: ['responsive', 'hover', 'group-hover'],
        height: ['responsive', 'hover', 'group-hover'],
        transparent: ['responsive', 'hover', 'group-hover'],
        fill: ['responsive', 'hover', 'group-hover'],
        stroke: ['responsive', 'hover', 'group-hover'],
        width: ['responsive', 'hover', 'group-hover'],
        wordWrap: ['responsive', 'hover', 'group-hover'],
        display: ['responsive', 'hover', 'group-hover']
        
    }
}