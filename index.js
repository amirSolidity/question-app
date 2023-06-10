const questions = [
    {
        'que': 'Which of the following is a makrup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'what year was JavaScript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1996',
        'd': 'none of the above',
        'correct': 'b'
    },
    {
        'que': 'what does css stands for?',
        'a': 'ethereum',
        'b': 'BNB',
        'c': 'bitcoin',
        'd': 'tether',
        'correct': 'c'
    },
]
const container1 = document.getElementById('container1')
const question = document.getElementById('question')
const inputs = document.querySelectorAll('.inputs')
let index = 0;

const loadQuestions = () =>{
    const section = questions[index]
    console.log(section)    
    question.innerText = ` ${index+1}) ${section.que}`
    inputs[0].previousElementSibling.innerHTML = section.a;
    inputs[1].previousElementSibling.innerText = section.b;
    inputs[2].previousElementSibling.innerText = section.c;
    inputs[3].previousElementSibling.innerText = section.d;
    container1.style.height = '550px'
}



loadQuestions()
 

const submitQues = () => {
    const ans = getanswer()
    console.log('finished')
}

const getanswer = () => {
    inputs.forEach(
        (input) => {
            for(let i = 0; i < questions.length ; i += 1){
                if(input.checked){
                    let inputAn = input.value
                    // if(inputAn == questions[2].correct){
                    //     console.log('finished')
                    // }else{
                    //     console.log('nonono')
                    // }
                    if(inputAn == questions[index].correct){
                        index += 1
                        loadQuestions()
                    }else{
                        
                    }
                    
                }
            }
        }
    )
}

