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
        'que': 'Which is the most valuable digital currency currently?',
        'a': 'ethereum',
        'b': 'BNB',
        'c': 'bitcoin',
        'd': 'tether',
        'correct': 'c'
    },
]

let question = document.getElementById('question')
let inputs = document.querySelectorAll('.inputs')

let index = 0
let num1 = 0

question.innerHTML = questions[index].que
inputs[0].previousElementSibling.innerHTML = questions[index].a
inputs[1].previousElementSibling.innerHTML = questions[index].b
inputs[2].previousElementSibling.innerHTML = questions[index].c
inputs[3].previousElementSibling.innerHTML = questions[index].d

const submitQues = ()=>{
    rending()
        for(index = 1;index>=questions.length+1;index++){
            rending()
        }
    console.log(num1)

}


const rending = ()=>{
    let question = document.getElementById('question')
    let inputs = document.querySelectorAll('.inputs')
    inputs.forEach(
        (event)=>{
            if(event.checked){
                if(event.value == questions[index].correct){
                    index += 1
                    num1 +=1
                    question.innerHTML = questions[index].que
                    inputs[0].previousElementSibling.innerHTML = questions[index].a
                    inputs[1].previousElementSibling.innerHTML = questions[index].b
                    inputs[2].previousElementSibling.innerHTML = questions[index].c
                    inputs[3].previousElementSibling.innerHTML = questions[index].d
                    
                }else{
                    index += 1
                    question.innerHTML = questions[index].que
                    inputs[0].previousElementSibling.innerHTML = questions[index].a
                    inputs[1].previousElementSibling.innerHTML = questions[index].b
                    inputs[2].previousElementSibling.innerHTML = questions[index].c
                    inputs[3].previousElementSibling.innerHTML = questions[index].d
                }
            }
        }
    )
}