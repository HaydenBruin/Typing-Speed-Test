import React, { Fragment, Component } from 'react'

export default class TypingTest extends Component {
    // WORDS
    words = [
        "open","seem","together","next","white","children","begin","got","walk","example","ease","paper","group","always","music","those","both","mark","often","letter","until","mile",
        "river","car","feet","care","second","book","carry","took","science","eat","room","friend","began","idea","fish","mountain","stop","once","base","hear","horse","cut","sure","watch",
        "color","face","wood","main","enough","plain","girl","usual","young","ready","above","ever","red","list","though","feel","talk","bird","soon","body","dog","family","direct","pose",
        "leave","song","measure","door","product","black","short","numeral","class","wind","question","happen","complete","ship","area","half","rock","order","fire","south","problem","piece",
        "told","knew","pass","since","top","whole","king","space","heard","best","hour","better","true","during","hundred","five","remember","step","early","hold","west","ground","interest",
        "reach","fast","verb","sing","listen","six","table","travel","less","morning","ten","simple","several","vowel","toward","war","lay","against","pattern","slow","center","love","person",
        "money","serve","appear","road","map","rain","rule","govern","pull","cold","notice","voice","unit","power","town","fine","certain","fly","fall","lead","cry","dark","machine","note",
        "wait","plan","figure","star","box","noun","field","rest","correct","able","pound","done","beauty","drive","stood","contain","front","teach","week","final","gave","green","oh","quick",
        "develop","ocean","warm","free","minute","strong","special","mind","behind","clear","tail","produce","fact","street","inch","multiply","nothing","course","stay","wheel","full","force",
        "blue","object","decide","surface","deep","moon","island","foot","system","busy","test","record","boat","common","gold","possible","plane","stead","dry","wonder","laugh","thousand",
        "ago","ran","check","game","shape","equate","hot","miss","brought","heat","snow","tire","bring","yes","distant","fill","east","paint","language","among","grand","ball","yet","wave",
        "drop","heart","am","present","heavy","dance","engine","position","arm","wide","sail","material","size","vary","settle","speak","weight","general","ice","matter","circle","pair",
        "include","divide","syllable","felt","perhaps","pick","sudden","count","square","reason","length","represent","art","subject","region","energy","hunt","probable","bed","brother",
        "egg","ride","cell","believe","fraction","forest","sit","race","window","store","summer","train","sleep","prove","lone","leg","exercise","wall","catch","mount","wish","sky","board",
        "joy","winter","sat","written","wild","instrument","kept","glass","grass","cow","job","edge","sign","visit","past","soft","fun","bright","gas","weather","month","million","bear",
        "finish","happy","hope","flower","clothe","strange","gone","jump","baby","eight","village","meet","root","buy","raise","solve","metal","whether","push","seven","paragraph","third",
        "shall","held","hair","describe","cook","floor","either","result","burn","hill","safe","cat","century","consider","type","law","bit","coast","copy","phrase","silent","tall","sand",
        "soil","roll","temperature","finger","industry","value","fight","lie","beat","excite","natural","view","sense","ear","else","quite","broke","case","middle","kill","son","lake","moment",
        "scale","loud","spring","observe","child","straight","consonant","nation","dictionary","milk","speed","method","organ","pay","age","section","dress","cloud","surprise","quiet",
        "stone","tiny","climb","cool","design","poor","lot","experiment","bottom","key","iron","single","stick","flat","twenty","skin","smile","crease","hole","trade","melody","trip",
        "office","receive","row","mouth","exact","symbol","die","least","trouble","shout","except","wrote","seed","tone","join","suggest","clean","break","lady","yard","rise","bad","blow",
        "oil","blood","touch","grew","cent","mix","team","wire","cost","lost","brown","wear","garden","equal","sent","choose","fell","fit","flow","fair","bank","collect","save","control"
    ];

    // DEFAULT SETTINGS
    defaultSettings = {
        testSeconds: 5
    }

    state = {
        countdown: this.defaultSettings.testSeconds,
        typedWord: "",
        words: {
            currentWord: "",
            nextWord: "",
        },
        answers: {
            correct: 0,
            wrong: 0
        },
        startedTest: false,
        finishedTest: false
    }

    countdownTimer = null;

    getRandomWord = () => {
        return this.words[Math.floor(Math.random() * this.words.length)];
    }

    startTest = () => {
        this.setState({
            countdown: this.defaultSettings.testSeconds,
            startedTest: true,
            typedWord: "",
            answers: {
                correct: 0,
                wrong: 0
            },
            words: {
                currentWord: this.getRandomWord(),
                nextWord: this.getRandomWord(),
            }
        })

        // START COUNTDOWN TIMER
        clearInterval(this.countdownTimer);
        this.countdownTimer = setInterval(() => {
            this.setState({
                countdown: this.state.countdown - 1
            })
            
            if(this.state.countdown === 0)
            {
                this.finishTest();
            }
        }, 1000);
    }

    finishTest = () => {
        clearInterval(this.countdownTimer);

        this.setState({
            startedTest: false,
            finishedTest: true
        })
    }


    // UPDATE STATE VALUE TYPED WORD
    handleTypingWord = (e) => {
        this.setState({
            typedWord: e.target.value
        })
    }

    // CHECK THE WORD IS CORRECT
    checkWord = (e) => {
        e.preventDefault();

        var correct = this.state.answers.correct;
        var wrong = this.state.answers.wrong;

        if(this.state.typedWord.toLowerCase() === this.state.words.currentWord.toLowerCase()) correct++;
            else wrong++;
        
        this.setState({
            answers: {
                correct: correct,
                wrong: wrong
            },
            words: {
                currentWord: this.state.words.nextWord,
                nextWord: this.getRandomWord()
            },
            typedWord: ""
        })
    }

    render() {
        if(this.state.startedTest)
        {
            return (
                <form action="?" onSubmit={(e) => this.checkWord(e)}>
                    <h1>{this.state.countdown} seconds left</h1>
                    <div className="words">
                        <span className="current">{this.state.words.currentWord}</span>
                        <span className="next">{this.state.words.nextWord}</span>
                    </div>

                    <input autoFocus type="text" placeholder="Type word here" value={this.state.typedWord} onChange={(e) => this.handleTypingWord(e)} />

                    <div className="answers">Correct: <strong>{this.state.answers.correct}</strong> - Wrong: <strong>{this.state.answers.wrong}</strong></div>
                </form>
            )
        }
        else if(this.state.finishedTest)
        {
            return (
                <Fragment>
                    <h1>Well done!</h1>
                    <p className="large">Click the button to take the test again</p>
                    <button onClick={() => this.startTest()}>Start Again</button>

                    <div className="answers">Correct: <strong>{this.state.answers.correct}</strong> - Wrong: <strong>{this.state.answers.wrong}</strong></div>
                </Fragment>
            )
        }
        else
        {
            return (
                <Fragment>
                    <h1>Speed typing test</h1>
                    <p className="large">Click the button below to get started</p>
                    <button onClick={() => this.startTest()}>Start Test</button>

                    <div className="answers">Correct: <strong>{this.state.answers.correct}</strong> - Wrong: <strong>{this.state.answers.wrong}</strong></div>
                </Fragment>
            )
        }
    }
}