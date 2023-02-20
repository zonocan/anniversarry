const headerLogo = Vue.component('headerlogo', {
    props: {
        logo_path: {
            type: String,
            default: ''             
        }
    },
    template: `
    <div class="header-logo-area">
        <h1 class="header-logo">
            <img :src="logo_path" alt="" class="header-logo-img">
        </h1>
    </div>
    `
});

const headerLinks = Vue.component('headerlinks', {
    props: {
        link_download: {
            type: String,
            default: ''                  
        },
        link_humberger: {
            type: String,
            default: ''                    
        }        
    },
    template: `
        <nav class="header-nav-links">
            <ul class="header-nav-links-ul">
                <li class="header-nav-link-li">
                    <a class="header-nav-link">
                        {{ link_download }}
                        <i class="fa-sharp fa-solid fa-circle-down"></i>
                    </a>
                </li>
                <li class="header-nav-link-li">
                    <a class="header-nav-link link-humberger">
                        {{ link_humberger }}
                        <i class="fa-solid fa-bars"></i>
                    </a>
                </li>
            </ul>
        </nav>
    `
});

// swiperの読み込み
Vue.use(VueAwesomeSwiper);

const topH1 = Vue.component('toph1', {
    props: {
        top_h1: {
            type: String,
            default: ''
        }          
    },
    template: `
    <h1 class="top-h1">
        {{ top_h1 }}
    </h1>
    `
});

const topExplain = Vue.component('topexplain', {
    props: {
        top_explain: {
            type: String,
            default: ''            
        }
    },
    template: `
    <p class="top-explain">{{ top_explain }}</p>
    `
});

const graghUser = Vue.component('graghuser', {
    props: {
        h2: {
            type: String,
            default: ''                     
        },
        path_150_user: {
            type: String,
            default: ''                
        },
        path_gragh: {
            type: String,
            default: ''              
        }
    },
    template: `
    <div class="gragh-user">
        <h2 class="h2"><span>1.</span>{{ h2 }}</h2>
        <img :src="path_150_user" class="path-150-user">
        <img :src="path_gragh" class="user-path-gragh">
    </div>
    `
});

const graghRound = Vue.component('graghround', {
    props: {
        span: {
            type: String,
            default: ''               
        },
        h2: {
            type: String,
            default: ''               
        },
        path: {
            type: String,
            default: ''                 
        }
    },
    template: `
    <div class="gragh-round-wrap">
        <h2 class="h2"><span>{{ span }}</span>{{ h2 }}</h2>
        <img :src="path" class="gragh-round">
    </div>
    `
});

const graghContents = Vue.component('graghcontent',{
    props: {
        h2: {
            type: String,
            default: ''              
        },
        path: {
            type: String,
            default: ''                
        }
    },
    template: `
    <div class="gragh-content-wrap">
        <h2 class="h2"><span>4.</span>{{ h2 }}</h2>
        <img :src="path" class="gragh-content">
    </div>
    `
});

const chanelBtn = Vue.component('chanelbtn',{
    props: {
        label: {
            type: String,
            default: ''                
        }
    },
    template: `
    <button class="chanel-btn">
        {{ label }}
        <span>
            <i class="fa-solid fa-angle-right"></i>
        </span>
    </button>
    `
});

// appliciate
const appliciateH1 = Vue.component('appliciateh1', {
    props: {
        path: {
            type: String,
            default: ''                
        }
    },
    template: `
    <h1 class="appliciate-h1">
        <img :src="path" alt="">
    </h1>
    `
});

const appliciateExplain = Vue.component('appliciateexplain', {
    props: {
        explain: {
            type: String,
            default: ''               
        }         
    },
    template: `
    <p class="appliciate-explain">{{ explain }}</p>
    `
});

const footerLogo = Vue.component('footerlogo', {
    props: {
        path: {
            type: String,
            default: ''                  
        }
    },
    template: `
    <div class="footer-logo-area">
        <img :src="path" alt="">
    </div>
    `
});

const footerBtn = Vue.component('footerbtn', {
    props: {
        footer_btn: {
            type: String,
            default: ''                  
        }
    },
    template: `
    <button class="footer-btn"
        :style="{ backgroundImage: 'url(' + footer_btn + ')'}">
    </button>
    `
})



const app = new Vue({
    el: '#app',
    //コンポーネントを返す
    components: {       
        'carousel': VueCarousel.Carousel,
        'slide': VueCarousel.Slide, 
        'headerlogo' : headerLogo  ,
        'headerlinks' : headerLinks,  
        'toph1' : topH1,   
        'topexplain' : topExplain,
        'graghuser' : graghUser,
        'graghround' : graghRound,
        'graghcontent' : graghContents,
        'chanelbtn' : chanelBtn,
        'appliciateh1' : appliciateH1,
        'appliciateexplain' : appliciateExplain,
        'footerlogo' : footerLogo,
        'footerbtn' : footerBtn
    },
    //画像のパスの表示
    data(){
        return{
           header_logo: './img/logo/logo.png',
           
           header_links: [{
                link_download: 'ダウンロード',
                link_humberger: '目次'
           }],

           top_slider_left: [{
                path: './img/top-slider/slider-left-1.png'
           },{
                path: './img/top-slider/slider-left-2.png'
           }],

           top_slider_right: [{
                path: './img/top-slider/slider-right-1.png'
           },{
                path: './img/top-slider/slider-right-2.png'
           }],

            // スライダーのカスタム
            swiperOptions: {
                loop: true, //スライドをループする
                slidesPerView: 1, //1画面あたりの表示枚数
                spaceBetween: 20, //スライド同士の間隔
                effect: 'fade',
                autoplay: {
                delay: 5000 //自動でスライドする。間隔はミリ秒で指定。
                }
            },   

            // 挨拶
            top_h1: '〜　ご挨拶　〜',

            top_explains: [{
                explain: 'あなたの声が誰かの1日を豊かにするというコンセプトでリリースされた音声SNSアプリ「Hello Voice」が、'
            },{
                explain: '2020年11月15日に3周年を迎えます。'
            },{
                explain: 'ユーザーの皆様に支えられこの節目を迎えられることに感謝を込め、特設サイトを用意しました。'
            }],

            // グラフ

            gragh_user: [{
                h2: 'ユーザー数の推移',
                path_150_user: './img/grouh/150-user.svg',
                path_gragh: './img/grouh/user.svg'
            }],

            gragh_junru: [{
                span: '2.',
                h2: '投稿されたジャンル',
                path: './img/grouh/junru.svg'
            }],

            gragh_generation: [{
                span: '3.',
                h2: 'ユーザーの年齢層',
                path: 'img/grouh/generation.svg'
            }],

            gragh_contents: [{
                h2: '累計のコンテンツ数',
                path: './img/grouh/contents.jpg'
            }],

            // チャンネル画面
            chanel_slider_lists: [{
                path: './img/slider/slider-1.png'
            },{
                path: './img/slider/slider-2.png'
            },{
                path: './img/slider/slider-3.png'
            },{
                path: './img/slider/slider-4.png'
            }],

            btn_app: 'アプリで聞く',

            btn_br: 'ブラウザで聞く',
            
            // チャンネル画面
            appliciate_h1: './img/bgc/appliciate.jpg',

            appliciate_explains: [{
                explain: '日頃のご利用ありがとうございます。'
            },{
                explain: 'Hello Voiceこれからも「あなたの声が誰かの一日を豊かにする」ような'
            },{
                explain: '世界を作るために進化を続けていきます'
            }],

            // footer
            footer_logo: './img/logo/footer-logo.png',

            footer_btn: [{
                path: './img/btn/apple_btn.png'
            },{
                path: './img/btn/google_btn.png'
            }],

        };
    },
    methods: {

    }
});
