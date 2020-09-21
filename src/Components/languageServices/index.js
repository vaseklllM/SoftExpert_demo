import { vasek, VadimLudchak, AnnaEfrimova, RomanProkopenko, VadimLeontiev, AlexeyFadeev } from '../assets/img/slider-users'
import { antekovac, rusmatreshka, vantuz, upnails, MagneticHolder, next, } from '../assets/img/gallery'
import { antekovacMini, rusmatreshkaMini, vantuzMini, upnailsMini, MagneticHolderMini, nextMini, } from '../assets/img/gallery-mini'

export default class LanguageServices {
    constructor(lang) {
        this.lang = lang
    }

    getHeader = () => {
        return this._header[this.lang]
    }

    getAboutUs = () => {
        return this._aboutUs[this.lang]
    }

    getUserSlider = (index) => {
        return this._usersSlider[this.lang][index]
    }
    getUsers = ()=>{
        return this._usersSlider[this.lang]
    }

    getPortfolio = () => {
        return this._portfolio[this.lang]
    }

    getCarts = () => {
        return this._carts[this.lang]
    }
    getCart = (index)=>{
        return this._carts[this.lang][index]
    }

    _header = {
        eng: {
            paragraph: 'HELLO WE ARE',
            logoLeft: 'SOFT',
            logoRight: 'EXPERT',
            commit: 'Creative digital web studio.',
            Buttons: {
                portfolio: 'PORTFOLIO',
                portfolioHover: 'CLICK TO SHOW',
                aboutUs: 'ABOUT US',
                aboutUsHover: 'CLICK TO SHOW',
            }
        },
        ua: {
            paragraph: 'ПРИВІТ МИ',
            logoLeft: 'SOFT',
            logoRight: 'EXPERT',
            commit: 'Творча цифрова веб студія.',
            Buttons: {
                portfolio: 'ПОРТФОЛІО',
                portfolioHover: 'ПЕРЕГЛЯНУТИ',
                aboutUs: 'ПРО НАС',
                aboutUsHover: 'ПЕРЕГЛЯНУТИ',
            }
        },
        rus: {
            paragraph: 'ПРИВЕТ МЫ',
            logoLeft: 'SOFT',
            logoRight: 'EXPERT',
            commit: 'Креативная цифровая веб студия.',
            Buttons: {
                portfolio: 'ПОРТФОЛИО',
                portfolioHover: 'ПРОСМОТРЕТЬ',
                aboutUs: 'О НАС',
                aboutUsHover: 'ПРОСМОТРЕТЬ',
            }
        }
    }

    _aboutUs = {
        eng: {
            label: 'ABOUT US',
            title: 'WHO WE ARE',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        ua: {
            label: 'ПРО НАС',
            title: 'ХТО МИ Є',
            subTitle: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию,',
        },
        rus: {
            label: 'О НАС',
            title: 'КТО МЫ',
            subTitle: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию,',
        }
    }
    _usersSlider = {
        eng: [
            {
                userName: 'Motnin Vasyl',
                imgUrl: vasek,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '84',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '98',
                    },
                    {
                        name: 'Java Script:',
                        level: '96',
                    },
                    {
                        name: 'React.js:',
                        level: '87',
                    },
                ],
                RightList: [
                    {
                        name: 'OpenCart:',
                        level: '73',
                    },
                    {
                        name: 'Bootstrap 4:',
                        level: '97',
                    },
                    {
                        name: 'jQuery:',
                        level: '85',
                    },
                    {
                        name: 'English language:',
                        level: '40',
                    },
                ]
            },
            {
                userName: 'Vadim Ludchak',
                imgUrl: VadimLudchak,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '60',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '80',
                    },
                    {
                        name: 'Java Script:',
                        level: '75',
                    },
                    {
                        name: 'React.js:',
                        level: '90',
                    },
                ],
                RightList: [
                    {
                        name: 'OpenCart:',
                        level: '70',
                    },
                    {
                        name: 'Bootstrap 4:',
                        level: '98',
                    },
                    {
                        name: 'jQuery:',
                        level: '60',
                    },
                    {
                        name: 'English language:',
                        level: '80',
                    },
                ]
            },
            {
                userName: 'Anna Efrimova',
                imgUrl: AnnaEfrimova,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '98',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '70',
                    },
                    {
                        name: 'Java Script:',
                        level: '73',
                    },
                    {
                        name: 'Zeplin:',
                        level: '86',
                    },
                ],
                RightList: [
                    {
                        name: 'WordPress:',
                        level: '68',
                    },
                    {
                        name: 'Bootstrap 4:',
                        level: '57',
                    },
                    {
                        name: 'Figma:',
                        level: '87',
                    },
                    {
                        name: 'English language:',
                        level: '97',
                    },
                ]
            },
            {
                userName: 'Roman Prokopenko',
                imgUrl: RomanProkopenko,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '70',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '90',
                    },
                    {
                        name: 'Java Script:',
                        level: '86',
                    },
                    {
                        name: 'Vue.js:',
                        level: '81',
                    },
                ],
                RightList: [
                    {
                        name: 'OpenCart:',
                        level: '63',
                    },
                    {
                        name: 'Joomla:',
                        level: '80',
                    },
                    {
                        name: 'jQuery:',
                        level: '85',
                    },
                    {
                        name: 'English language:',
                        level: '73',
                    },
                ]
            },
            {
                userName: 'Vadim Leontiev',
                imgUrl: VadimLeontiev,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '99',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '68',
                    },
                    {
                        name: 'Java Script:',
                        level: '59',
                    },
                    {
                        name: 'Zeplin:',
                        level: '96',
                    },
                ],
                RightList: [
                    {
                        name: 'InDesign:',
                        level: '87',
                    },
                    {
                        name: 'Illustrator:',
                        level: '75',
                    },
                    {
                        name: 'Figma:',
                        level: '98',
                    },
                    {
                        name: 'English language:',
                        level: '35',
                    },
                ]
            },
            {
                userName: 'Alexey Fadeev',
                imgUrl: AlexeyFadeev,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '60',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '96',
                    },
                    {
                        name: 'Java Script:',
                        level: '87',
                    },
                    {
                        name: 'AngularJS:',
                        level: '85',
                    },
                ],
                RightList: [
                    {
                        name: 'OpenCart:',
                        level: '93',
                    },
                    {
                        name: 'Bootstrap 4:',
                        level: '70',
                    },
                    {
                        name: 'jQuery:',
                        level: '83',
                    },
                    {
                        name: 'English language:',
                        level: '68',
                    },
                ]
            },
        ],
        ua: [
            {
                userName: 'Мотнін Василь',
                imgUrl: vasek,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '84',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '98',
                    },
                    {
                        name: 'Java Script:',
                        level: '96',
                    },
                    {
                        name: 'React.js:',
                        level: '87',
                    },
                ],
                RightList: [
                    {
                        name: 'OpenCart:',
                        level: '73',
                    },
                    {
                        name: 'Bootstrap 4:',
                        level: '97',
                    },
                    {
                        name: 'jQuery:',
                        level: '85',
                    },
                    {
                        name: 'English language:',
                        level: '40',
                    },
                ]
            },
            {
                userName: 'Вадім Лудчак',
                imgUrl: VadimLudchak,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '60',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '80',
                    },
                    {
                        name: 'Java Script:',
                        level: '75',
                    },
                    {
                        name: 'React.js:',
                        level: '90',
                    },
                ],
                RightList: [
                    {
                        name: 'OpenCart:',
                        level: '70',
                    },
                    {
                        name: 'Bootstrap 4:',
                        level: '98',
                    },
                    {
                        name: 'jQuery:',
                        level: '60',
                    },
                    {
                        name: 'English language:',
                        level: '80',
                    },
                ]
            },
            {
                userName: 'Анна Ефрімова',
                imgUrl: AnnaEfrimova,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '98',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '70',
                    },
                    {
                        name: 'Java Script:',
                        level: '73',
                    },
                    {
                        name: 'Zeplin:',
                        level: '86',
                    },
                ],
                RightList: [
                    {
                        name: 'WordPress:',
                        level: '68',
                    },
                    {
                        name: 'Bootstrap 4:',
                        level: '57',
                    },
                    {
                        name: 'Figma:',
                        level: '87',
                    },
                    {
                        name: 'English language:',
                        level: '97',
                    },
                ]
            },
            {
                userName: 'Роман Прокопенко',
                imgUrl: RomanProkopenko,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '70',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '90',
                    },
                    {
                        name: 'Java Script:',
                        level: '86',
                    },
                    {
                        name: 'Vue.js:',
                        level: '81',
                    },
                ],
                RightList: [
                    {
                        name: 'OpenCart:',
                        level: '63',
                    },
                    {
                        name: 'Joomla:',
                        level: '80',
                    },
                    {
                        name: 'jQuery:',
                        level: '85',
                    },
                    {
                        name: 'English language:',
                        level: '73',
                    },
                ]
            },
            {
                userName: 'Вадим Леонтьєв',
                imgUrl: VadimLeontiev,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '99',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '68',
                    },
                    {
                        name: 'Java Script:',
                        level: '59',
                    },
                    {
                        name: 'Zeplin:',
                        level: '96',
                    },
                ],
                RightList: [
                    {
                        name: 'InDesign:',
                        level: '87',
                    },
                    {
                        name: 'Illustrator:',
                        level: '75',
                    },
                    {
                        name: 'Figma:',
                        level: '98',
                    },
                    {
                        name: 'English language:',
                        level: '35',
                    },
                ]
            },
            {
                userName: 'Олексій Фадеєв',
                imgUrl: AlexeyFadeev,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '60',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '96',
                    },
                    {
                        name: 'Java Script:',
                        level: '87',
                    },
                    {
                        name: 'AngularJS:',
                        level: '85',
                    },
                ],
                RightList: [
                    {
                        name: 'OpenCart:',
                        level: '93',
                    },
                    {
                        name: 'Bootstrap 4:',
                        level: '70',
                    },
                    {
                        name: 'jQuery:',
                        level: '83',
                    },
                    {
                        name: 'English language:',
                        level: '68',
                    },
                ]
            },
        ],
        rus: [
            {
                userName: 'Мотнин Висилий',
                imgUrl: vasek,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '84',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '98',
                    },
                    {
                        name: 'Java Script:',
                        level: '96',
                    },
                    {
                        name: 'React.js:',
                        level: '87',
                    },
                ],
                RightList: [
                    {
                        name: 'OpenCart:',
                        level: '73',
                    },
                    {
                        name: 'Bootstrap 4:',
                        level: '97',
                    },
                    {
                        name: 'jQuery:',
                        level: '85',
                    },
                    {
                        name: 'English language:',
                        level: '40',
                    },
                ]
            },
            {
                userName: 'Вадим Лудчак',
                imgUrl: VadimLudchak,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '60',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '80',
                    },
                    {
                        name: 'Java Script:',
                        level: '75',
                    },
                    {
                        name: 'React.js:',
                        level: '90',
                    },
                ],
                RightList: [
                    {
                        name: 'OpenCart:',
                        level: '70',
                    },
                    {
                        name: 'Bootstrap 4:',
                        level: '98',
                    },
                    {
                        name: 'jQuery:',
                        level: '60',
                    },
                    {
                        name: 'English language:',
                        level: '80',
                    },
                ]
            },
            {
                userName: 'Анна Ефримова',
                imgUrl: AnnaEfrimova,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '98',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '70',
                    },
                    {
                        name: 'Java Script:',
                        level: '73',
                    },
                    {
                        name: 'Zeplin:',
                        level: '86',
                    },
                ],
                RightList: [
                    {
                        name: 'WordPress:',
                        level: '68',
                    },
                    {
                        name: 'Bootstrap 4:',
                        level: '57',
                    },
                    {
                        name: 'Figma:',
                        level: '87',
                    },
                    {
                        name: 'English language:',
                        level: '97',
                    },
                ]
            },
            {
                userName: 'Роман Прокопенко',
                imgUrl: RomanProkopenko,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '70',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '90',
                    },
                    {
                        name: 'Java Script:',
                        level: '86',
                    },
                    {
                        name: 'Vue.js:',
                        level: '81',
                    },
                ],
                RightList: [
                    {
                        name: 'OpenCart:',
                        level: '63',
                    },
                    {
                        name: 'Joomla:',
                        level: '80',
                    },
                    {
                        name: 'jQuery:',
                        level: '85',
                    },
                    {
                        name: 'English language:',
                        level: '73',
                    },
                ]
            },
            {
                userName: 'Вадим Леонтьев',
                imgUrl: VadimLeontiev,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '99',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '68',
                    },
                    {
                        name: 'Java Script:',
                        level: '59',
                    },
                    {
                        name: 'Zeplin:',
                        level: '96',
                    },
                ],
                RightList: [
                    {
                        name: 'InDesign:',
                        level: '87',
                    },
                    {
                        name: 'Illustrator:',
                        level: '75',
                    },
                    {
                        name: 'Figma:',
                        level: '98',
                    },
                    {
                        name: 'English language:',
                        level: '35',
                    },
                ]
            },
            {
                userName: 'Алексей Фадеев',
                imgUrl: AlexeyFadeev,
                title: 'SKILLS',
                LeftList: [
                    {
                        name: 'Photoshop:',
                        level: '60',
                    },
                    {
                        name: 'HTML CSS:',
                        level: '96',
                    },
                    {
                        name: 'Java Script:',
                        level: '87',
                    },
                    {
                        name: 'AngularJS:',
                        level: '85',
                    },
                ],
                RightList: [
                    {
                        name: 'OpenCart:',
                        level: '93',
                    },
                    {
                        name: 'Bootstrap 4:',
                        level: '70',
                    },
                    {
                        name: 'jQuery:',
                        level: '83',
                    },
                    {
                        name: 'English language:',
                        level: '68',
                    },
                ]
            },
        ]
    }

    _portfolio = {
        eng: {
            label: 'PORTFOLIO',
            linkText: 'OPEN',
            title: 'TECHNOLOGY',
        },
        ua: {
            label: 'ПОРТФОЛІО',
            linkText: 'ВІДКРИТИ',
            title: 'ТЕХНОЛОГІЇ',
        },
        rus: {
            label: 'ПОРТФОЛИО',
            linkText: 'ОТКРЫТЬ',
            title: 'ТЕХНОЛОГИИ',
        }
    }
    _carts = {
        eng: [
            {
                bacgroundImg: antekovac,
                img: antekovacMini,
                name: 'Antekovac',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'https://www.antekovac.ru/',
                time: '04:05:2019 - 31:05:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: true,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                    {
                        Name: 'WordPress',
                        State: true,
                    },
                ],
            },
            {
                bacgroundImg: rusmatreshka,
                img: rusmatreshkaMini,
                name: 'RusMatreshka',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'https://rusmatreshka.ru/',
                time: '04:05:2019 - 31:05:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: true,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                    {
                        Name: 'OpenCart',
                        State: true,
                    },
                ],
            },
            {
                bacgroundImg: vantuz,
                img: vantuzMini,
                name: 'VANTUZ',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'http://vantuzpro.com/',
                time: '20:06:2019 - 28:06:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: true,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                ],
            },
            {
                bacgroundImg: upnails,
                img: upnailsMini,
                name: 'Upnails',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'https://upnails.com.ua/',
                time: '04:05:2019 - 31:05:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: true,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                    {
                        Name: 'OpenCart',
                        State: true,
                    },
                ],
            },
            {
                bacgroundImg: MagneticHolder,
                img: MagneticHolderMini,
                name: 'MagneticHolder',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'http://softexpert.pp.ua/magneticHolder/',
                time: '04:05:2019 - 31:05:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: true,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                ],
            },
            {
                bacgroundImg: next,
                img: nextMini,
                name: 'NEXT',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'https://vaseklllm.github.io/sites/BS_NEXT/',
                time: '18:05:2019 - 19:05:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: false,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                ],
            },
        ],
        ua: [
            {
                bacgroundImg: antekovac,
                img: antekovacMini,
                name: 'Antekovac',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'https://www.antekovac.ru/',
                time: '04:05:2019 - 31:05:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: true,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                    {
                        Name: 'WordPress',
                        State: true,
                    },
                ],
            },
            {
                bacgroundImg: rusmatreshka,
                img: rusmatreshkaMini,
                name: 'RusMatreshka',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'https://rusmatreshka.ru/',
                time: '04:05:2019 - 31:05:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: true,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                    {
                        Name: 'OpenCart',
                        State: true,
                    },
                ],
            },
            {
                bacgroundImg: vantuz,
                img: vantuzMini,
                name: 'VANTUZ',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'http://vantuzpro.com/',
                time: '20:06:2019 - 28:06:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: true,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                ],
            },
            {
                bacgroundImg: upnails,
                img: upnailsMini,
                name: 'Upnails',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'https://upnails.com.ua/',
                time: '04:05:2019 - 31:05:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: true,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                    {
                        Name: 'OpenCart',
                        State: true,
                    },
                ],
            },
            {
                bacgroundImg: MagneticHolder,
                img: MagneticHolderMini,
                name: 'MagneticHolder',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'http://softexpert.pp.ua/magneticHolder/',
                time: '04:05:2019 - 31:05:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: true,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                ],
            },
            {
                bacgroundImg: next,
                img: nextMini,
                name: 'NEXT',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'https://vaseklllm.github.io/sites/BS_NEXT/',
                time: '18:05:2019 - 19:05:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: false,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                ],
            },
        ],
        rus: [
            {
                bacgroundImg: antekovac,
                img: antekovacMini,
                name: 'Antekovac',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'https://www.antekovac.ru/',
                time: '04:05:2019 - 31:05:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: true,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                    {
                        Name: 'WordPress',
                        State: true,
                    },
                ],
            },
            {
                bacgroundImg: rusmatreshka,
                img: rusmatreshkaMini,
                name: 'RusMatreshka',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'https://rusmatreshka.ru/',
                time: '04:05:2019 - 31:05:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: true,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                    {
                        Name: 'OpenCart',
                        State: true,
                    },
                ],
            },
            {
                bacgroundImg: vantuz,
                img: vantuzMini,
                name: 'VANTUZ',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'http://vantuzpro.com/',
                time: '20:06:2019 - 28:06:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: true,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                ],
            },
            {
                bacgroundImg: upnails,
                img: upnailsMini,
                name: 'Upnails',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'https://upnails.com.ua/',
                time: '04:05:2019 - 31:05:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: true,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                    {
                        Name: 'OpenCart',
                        State: true,
                    },
                ],
            },
            {
                bacgroundImg: MagneticHolder,
                img: MagneticHolderMini,
                name: 'MagneticHolder',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'http://softexpert.pp.ua/magneticHolder/',
                time: '04:05:2019 - 31:05:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: true,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                ],
            },
            {
                bacgroundImg: next,
                img: nextMini,
                name: 'NEXT',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
                link: 'https://vaseklllm.github.io/sites/BS_NEXT/',
                time: '18:05:2019 - 19:05:2019',
                infoBlockText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris pellentesque pulvinar pellentesque habitant. Nisl vel pretium lectus quam id leo in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus. Vitae et leo duis ut diam quam nulla. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget magna fermentum iaculis eu non diam. Tellus molestie nunc non ',
                LeftTechnologies: [
                    {
                        Name: 'HTML CSS',
                        State: true,
                    },
                    {
                        Name: 'JavaScript',
                        State: true,
                    },
                    {
                        Name: 'React.js',
                        State: false,
                    },
                    {
                        Name: 'jQuery',
                        State: true,
                    },
                    {
                        Name: 'Bootstrap 4',
                        State: false,
                    },
                ],
                RightTechnologies: [
                    {
                        Name: 'PHP',
                        State: false,
                    },
                    {
                        Name: 'Python',
                        State: false,
                    },
                    {
                        Name: 'Node.js',
                        State: false,
                    },
                ],
            },
        ],
    }
}