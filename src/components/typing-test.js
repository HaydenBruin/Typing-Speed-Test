import React, { Fragment, Component } from 'react';
import { updateTestHistory } from "../actions/test-history";
import { connect } from 'react-redux';

class TypingTest extends Component {
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
        testSeconds: 15,
        testStart: 3,
        maxWords: 100
    }

    state = {
        countdown: this.defaultSettings.testSeconds,
        testStart: this.defaultSettings.testStart,
        typedWord: "",
        wpm: 0,
        words: [],
        answers: {
            correct: 0,
            wrong: 0
        },
        startedTest: false,
        finishedTest: false
    }

    countdownTimer = null;

    // FUNC: getRandomWord()
    // SELECT A RANDOM NUMBER BETWEEN 0 & THE AMOUNT OF WORDS LISTED IN THE WORDS ARRAY.
    // USES THAT RANDOM NUMBER TO SELECT AN ARRAY ITEM
    getRandomWord = () => {
        return this.words[Math.floor(Math.random() * this.words.length)];
    }

    // FUNC: getRandomWords()
    // USED TO GENERATE AN ARRAY OF WORDS TO TYPE - USES THE getRandomWord() FUNCTION TO ASSIGN EACH ARRAY ITEM
    getRandomWords = () => {
        const words = [];
        for(var i = 0; i < this.defaultSettings.maxWords; i++)
        {
            words[i] = this.getRandomWord();
        }
        return words;
    }

    // FUNC: startTest()
    // FUNCTION IS CALLED WHEN THE 'START TEST' BUTTON IS CLICKED
    // WILL DO A 3 SECOND COUNTDOWN THEN IT WILL START THE TEST
    startTest = () => {
        const testWords = this.getRandomWords();
        this.setState({
            countdown: this.defaultSettings.testSeconds,
            testStart: this.defaultSettings.testStart,
            startedTest: true,
            typedWord: "",
            wpm: 0,
            answers: {
                correct: 0,
                wrong: 0
            },
            words: testWords,
            currentWord: 0
        })

        // START COUNTDOWN TIMER
        clearInterval(this.countdownTimer);
        this.countdownTimer = setInterval(() => {
            if(this.state.testStart === 0)
            {
                this.setState({
                    countdown: this.state.countdown - 1
                })
                
                if(this.state.countdown === 0)
                {
                    this.finishTest();
                }
            }
            else
            {
                this.setState({
                    testStart: this.state.testStart - 1
                })
            }
        }, 1000);
    }

    // FUNC: finishTest()
    // CALLED WHEN THE TEST COUNTDOWN HAS FINISHED
    // DELETES THE TIMER & CHANGES STATE TO SAY THE TEST HAS FINISHED
    finishTest = () => {
        clearInterval(this.countdownTimer);

        this.setState({
            startedTest: false,
            finishedTest: true
        })

        this.props.dispatch(updateTestHistory(this.state.answers.correct, this.state.answers.wrong))
    }


    // FUNC: handleTypingWord
    // UPDATES THE WORD INPUT FIELD AND CHANGES THE STATE
    handleTypingWord = (e) => {
        this.setState({
            typedWord: e.target.value
        })
    }

    // FUNC: handleKeyPress
    // EVENT LISTENER FOR ONKEYPRESS - CHECKS TO SEE IF THE KEY IS SPACE BAR
    // SPACE BAR IS USED TO MOVE ONTO THE NEXT WORD (JUST LIKE ENTER)
    handleKeyPress = (e) => {
        if(e.keyCode === 32)
        {
            this.checkWord(e);
        }
    }

    // FUNC: checkWord()
    // CHECKS THE INPUT FIELD TO SEE IF THE WORD MATCHES THE CURRENT ACTIVE WORD
    // IF WORD IS CORRECT/WRONG UPDATES THE VALUE TO +1
    checkWord = (e) => {
        e.preventDefault();

        var correct = this.state.answers.correct;
        var wrong = this.state.answers.wrong;

        if(this.state.typedWord.toLowerCase() === this.state.words[this.state.currentWord].toLowerCase()) correct++;
            else wrong++;
        
        this.setState({
            answers: {
                correct: correct,
                wrong: wrong
            },
            currentWord: this.state.currentWord + 1,
            typedWord: ""
        })
    }

    // RENDER THE TYPING TEST DEPENDING ON VARIOUS STATES
    // 1: RUN THE STARTER COUNTDOWN
    // 2: IF THE TEST HAS STARTED & THE STARTER COUNTDOWN HAS FINISHED
    // 3: DISPLAYS WHEN THE TEST HAS BEEN FINISHED
    // 4 INITIAL STATE - TEST HASN'T BEEN STARTED BEFORE
    render() {
        if(this.state.startedTest)
        {
            if(this.state.testStart !== 0)
            {
                return (
                    <Fragment>
                        <h1>Test starting in {this.state.testStart}</h1>
                        <div className="words">
                            {
                                this.state.words.map((word, index) => {
                                    return <div className={this.state.currentWord === index ? "word active" : "word"} key={index}>{word}</div>
                                })
                            }
                        </div>
                        
                        <input autoFocus type="text" placeholder="Type your words here" />

                    </Fragment>
                );
            }
            else
            {
                return (
                    <form action="?" onSubmit={(e) => this.checkWord(e)}>
                        <h1>{this.state.countdown} seconds left</h1>
                        <div className="words">
                            {
                                this.state.words.map((word, index) => {
                                    return <div className={this.state.currentWord === index ? "word active" : "word"} key={index}>{word}</div>
                                })
                            }
                        </div>

                        <input autoFocus type="text" placeholder="Type word here" value={this.state.typedWord} onChange={(e) => this.handleTypingWord(e)} onKeyDown={(e) => this.handleKeyPress(e)} />

                        <div className="answers">Correct: <strong>{this.state.answers.correct}</strong> - Wrong: <strong>{this.state.answers.wrong}</strong></div>
                    </form>
                )
            }
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


const mapStateToProps = (state) => ({
    testHistory: state.testHistory.tests
})

export default connect(mapStateToProps)(TypingTest)