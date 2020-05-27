function getQuestion(category) {
    if (hardCategories.includes(category)) {
        let selected = pokemon.filter(poke => {
            return poke.categories.includes(category)
        });
        let pokeNumber = Math.floor(Math.random() * selected.length);
        let pickedPokemon = selected[pokeNumber]
        return { type: 'hard', answer: pickedPokemon };
    } else {
        let selected = pokemon.filter(poke => {
            return poke.categories.includes(category)
        });
        let pokeNumber1 = Math.floor(Math.random() * selected.length);
        let pickedPokemon = selected[pokeNumber1]
        let others = [pickedPokemon];
        while (others.length < 4) {
            let pokeNumber2 = Math.floor(Math.random() * selected.length);
            if (!others.includes(selected[pokeNumber2])) {
                others.push(selected[pokeNumber2])
            }
        }
        return { type: 'easy', answer: pickedPokemon, others };
    }
}

function getItemCount() {
    hardCategories.forEach(cat => {
        let count = pokemon.filter(poke => {
            return poke.categories.includes(cat)
        })
        console.log(`${cat}: ${count.length}`)
    })
    easyCategories.forEach(cat => {
        let count = pokemon.filter(poke => {
            return poke.categories.includes(cat)
        })
        console.log(`${cat}: ${count.length}`)
    })
}

getItemCount()


function getCategories() {
    return { hard: hardCategories, easy: easyCategories }
}


new Vue({
    el: '#app',
    data: {
        loading: true,
        players: 1,
        score1: 0,
        score2: 0,
        currentPlayer: 1,
        hardCats: [],
        easyCats: [],
        hideCats: false,
        hideHardQuestion: true,
        hideEasyQuestion: true,
        hardQuestion: {
            text: '',
            answer: '',
            response: '',
            check: ''
        },
        easyQuestion: {
            choices: [],
            answer: null,
            question: null
        }
    },
    methods: {
        setGame(e) {
            this.players = e.target.playerCount.value
            this.loading = false;
        },
        updateScore(type) {
            if (this.currentPlayer == 1) {
                type == 'hard' ? this.score1 += 3 : this.score1 += 1
            } else {
                type == 'hard' ? this.score2 += 3 : this.score2 += 1
            }
        },
        checkPlayer() {
            if (this.players == 1) {
                return true;
            } else {
                return false;
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
            const data = getQuestion(e.target.innerHTML);
            if (data.type == 'hard') {
                this.hardQuestion.text = data.answer.pokedex.text;
                this.hardQuestion.answer = data.answer.name;
                this.toggleBoxes('hard');
                this.hardCats = this.hardCats.filter(cat => {
                    return cat != e.target.innerHTML
                })
            } else {
                this.easyQuestion.choices = this.randomizeArray(data.others);
                this.easyQuestion.answer = data.answer.name;
                this.easyQuestion.question = data.answer.pokedex.text
                this.toggleBoxes('easy');
                this.easyCats = this.easyCats.filter(cat => {
                    return cat != e.target.innerHTML
                })
            }
        },
        checkHardQuestion() {
            if (this.hardQuestion.answer == this.hardQuestion.response.toLowerCase()) {
                alert("That's correct! +3 Points!")
                this.updateScore('hard');
                this.toggleBoxes();
                this.changePlayer();
                this.hardQuestion.response = '';
            } else {
                alert(`That's not right, the correct answer is ${this.hardQuestion.answer}`);
                this.changePlayer();
                this.toggleBoxes();
                this.hardQuestion.response = '';
            }
        },
        checkEasyQuestion(e) {
            if (e.target.innerHTML == this.easyQuestion.answer) {
                alert('Thats correct! +1 Point!')
                this.updateScore('easy');
                this.changePlayer();
                this.toggleBoxes();
            } else {
                alert(`That's not right, the correct answer is ${this.easyQuestion.answer}`);
                this.changePlayer();
                this.toggleBoxes();
            }
        },
        toggleBoxes(type) {
            if (type == 'hard') {
                this.hideCats = true;
                this.hideEasyQuestion = true;
                this.hideHardQuestion = false;
            } else if (type == 'easy') {
                this.hideCats = true;
                this.hideEasyQuestion = false;
                this.hideHardQuestion = true;
            } else {
                this.hideCats = false;
                this.hideEasyQuestion = true;
                this.hideHardQuestion = true;
            }
        }
    },
    created() {
        const categs = getCategories();
        categs.hard.forEach(categ => {
            this.hardCats.push(categ)
        })
        categs.easy.forEach(categ => {
            this.easyCats.push(categ)
        })
    }
})