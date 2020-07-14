
// Fetches a question from the chosen category
function getQuestion(category) {
    let selected = pokemon.filter(poke => {
        return poke.categories.includes(category)
    });
    let pokeNumber = Math.floor(Math.random() * selected.length);
    let pickedPokemon = selected[pokeNumber]
    return { type: 'hard', answer: pickedPokemon };
}

// Returns the amount of options for each category
function getItemCount() {
    categories.forEach(cat => {
        let count = pokemon.filter(poke => {
            return poke.categories.includes(cat)
        })
        console.log(`${cat}: ${count.length}`)
    })
    console.log(`Total: ${pokemon.length}`);
}



function getCategories() {
    return categories
}


new Vue({
    el: '#app',
    data: {
        loading: true,
        players: 1,
        score1: 0,
        score2: 0,
        currentPlayer: 1,
        cats: [],
        hideCats: false,
        hideQuestion: true,
        questionSteal: false,
        currentCat: 'Loading',
        question: {
            text: '',
            answer: '',
            response: '',
            check: ''
        },
        usedPokemon: []
    },
    methods: {
        testClick(val) {
            this.players = val;
            this.loading = false;
        },
        setGame(e) {
            this.players = e.target.playerCount.value
            this.loading = false;
        },
        updateScore() {
            if (this.currentPlayer == 1) {
                this.score1 += 1
            } else {
                this.score2 += 1
            }
        },
        changePlayer() {
            if (this.players == 1) {
                return
            }
            if (this.currentPlayer == 1) {
                this.currentPlayer = 2
            } else {
                this.currentPlayer = 1
            }
        },
        randomizeArray(arr) {
            let newarr = [];
            while (arr.length !== newarr.length) {
                let i = Math.floor(Math.random() * arr.length);
                if (!newarr.includes(arr[i].name)) {
                    newarr.push(arr[i].name)
                }
            }
            return newarr
        },
        chooseCategory(e) {
            let data = getQuestion(e.target.innerHTML);
            while (this.usedPokemon.includes(data.answer.name)) {
                console.log('rerolling');
                data = getQuestion(e.target.innerHTML);
            }
            this.currentCat = e.target.innerHTML;
            this.usedPokemon.push(data.answer.name);
            this.question.text = data.answer.pokedex.text;
            this.question.answer = data.answer.name;
            this.toggleBoxes('hard');
            this.cats = this.cats.filter(cat => {
                return cat != e.target.innerHTML
            })
        },
        checkQuestion() {
            if (this.question.answer == this.question.response.toLowerCase()) {
                alert("That's correct! +1 Point!")
                this.updateScore();
                this.toggleBoxes();
                if (this.questionSteal == false) {
                    this.changePlayer();
                }
                this.questionSteal = false;
                this.question.response = '';
            } else {
                if (this.players == 1 || this.questionSteal == true) {
                    alert(`That's not right, the correct answer is ${this.question.answer}`);
                    this.toggleBoxes();
                    this.questionSteal = false;
                    this.question.response = '';
                } else {
                    alert(`That's incorrect. Your opponent now has a chance to steal!`);
                    this.changePlayer();
                    this.questionSteal = true;
                    this.question.response = '';
                }
            }
        },
        toggleBoxes(type) {
            if (type == 'hard') {
                this.hideCats = true;
                this.hideQuestion = false;
            } else {
                this.hideCats = false;
                this.hideQuestion = true;
            }
        }
    },
    created() {
        const categs = getCategories();
        categs.forEach(categ => {
            this.cats.push(categ)
        })
    }
})