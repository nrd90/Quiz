
var todasPerguntas = [{	question: '1. Normalmente, quantos litros de sangue uma pessoa tem?', 
						choices: ['A. Tem entre 2 a 4 litros', 'B. Tem entre 4 a 6 litros', 'C. Tem 10 litros', 'D. Tem 7 litros'], 
						answear: 'B. Tem entre 4 a 6 litros'
					}, 
					{	question: '2. De quem é a famosa frase "Penso, logo existo"?', 
						choices: ['A. Platao', 'B. Galileu', 'C. Descartes', 'D. Sócrates'], 
						answear: 'C. Descartes'
					},
					{	question: '3. De onde é a invenção do chuveiro elétrico?', 
						choices: ['A. França', 'B. Inglaterra', 'C. Brasil', 'D. Austrália'], 
						answear: 'C. Brasil'
					}, 
					{	question: '4. Quais o menor e o maior país do mundo?', 
						choices: ['A. Vaticano e Rússia', 'B. Nauru e China', 'C. Mónaco e Canadá', 'D. Sao Marino e Índia'], 
						answear: 'A. Vaticano e Rússia'
					},
					{	question: '5. Qual o nome do presidente do Brasil que ficou conhecido como Jango?', 
						choices: ['A. Jânio Quadros', 'B. Getúlio Vargas', 'C. João Goulart', 'D. Jacinto Anjos'], 
						answear: 'C. João Goulart'
					},
					{	question: '6. Qual o livro mais vendido no mundo a seguir à Bíblia?', 
						choices: ['A. Um Conto de Duas Cidades', 'B. Dom Quixote', 'C. O Senhor dos Anéis', 'D. Ela, a Feiticeira'], 
						answear: 'B. Dom Quixote'
					},
					{	question: '7. Atualmente, quantos elementos químicos a tabela periódica possui?', 
						choices: ['A. 118', 'B. 113', 'C. 108', 'D. 92'], 
						answear: 'A. 118'
					},
					{	question: '8. Quais os países que têm a maior e a menor expectativa de vida do mundo?', 
						choices: ['A. Estados Unidos e Angola', 'B. Austrália e Afeganistão', 'C. Japão e Serra Leoa', 'D. Itália e Chade'], 
						answear: 'C. Japão e Serra Leoa'
					},
					{	question: '9. O que a palavra legend significa em português?', 
						choices: ['A. Lenda', 'B. conto', 'C. História', 'D. Legenda'], 
						answear: 'A. Lenda'
					},
					{	question: '10. Quanto tempo a luz do Sol demora para chegar à Terra?', 
						choices: ['A. 30 segundos', 'B. 1 dia', 'C. 4 minutos', 'D. 8 minutos'], 
						answear: 'D. 8 minutos'
					},
					{	question: '11. Qual a nacionalidade de Che Guevara?', 
						choices: ['A. Peruana', 'B. Argentina', 'C. Cubana', 'D. Boliviana'], 
						answear: 'B. Argentina'
					},
					{	question: '12. Em que período da pré-história o fogo foi descoberto?', 
						choices: ['A. Neolítico', 'B. Paleolítico', 'C. Idade Média', 'D. Período da Pedra Polida'], 
						answear: 'B. Paleolítico'
					},
					{	question: '13.  Qual a velocidade da luz?', 
						choices: ['150 000 000 metros por segundo (m/s)', 'B. 300 000 000 metros por segundo (m/s)', 'C. 30 000 000 metros por segundo (m/s)', 'D. 299 792 458 metros por segundo (m/s)'], 
						answear: 'D. 299 792 458 metros por segundo (m/s)'
					},
					{	question: '14. Em qual local da Ásia o português é língua oficial?', 
						choices: ['A. Portugal', 'B. Índia', 'C. Macau', 'D. Filipinas'], 
						answear: 'C. Macau'
					}
					]


var i = 1 // contador de questões
var x = 0 // contador para verficar as respostas e comparar com a escolha selecionada
var score = 0
var tempo = 10
var cronometro
var nomeJogador

window.onload = initPage  //executa a função initPage quando a página for completamente carregada

function initPage(){  // optei por iniciar a página com a primeira questão
	// validar()

	document.getElementById('nome').innerHTML = nomeJogador
	document.getElementById('question').innerHTML = todasPerguntas[0].question

	todasPerguntas[i].choices.forEach(function(item, index){
		document.getElementById('resposta'+ (index + 1)).innerHTML = todasPerguntas[0].choices[index]
		console.log(document.getElementById('resposta'+ (index + 1)).innerHTML = todasPerguntas[0].choices[index])
		document.getElementById('r'+ (index + 1)).value = todasPerguntas[0].choices[index]
	})
}


cronometro = setInterval(function(){
	tempo --
	document.getElementById('cronometro').innerHTML = tempo

	if(tempo <= 0){
		clearInterval(cronometro)
		setTimeout(function(){
			window.location.href = 'resultado.html?'+score
		}, 2000)
		
	}
}, 1000)

function validar(){ 
	
	var respostas = document.getElementsByName('respostas') // retorna um conjunto de elementos com o nome 'respostas'
															// neste caso retorna as escolhas para cada questão

	respostas.forEach(function(item, index){
		if(respostas[index].checked){  // verificar se há alguma resposta marcada
			
			if(respostas[index].value == todasPerguntas[x].answear){  // se houver alguma resposta marcada, verificar se esta resposta
																	// é  a correta

				score = score +1  // se for a correta incrementar o campo pontuacao com mais um ponto

				document.getElementById('score').innerHTML = score  
				document.getElementById('popup').innerHTML = 'Correto'
				document.getElementById('popup').className = 'popup1'
				
				if(i < todasPerguntas.length){
					respostas[index].checked = false // desmarcar a resposta para que ela nao apareca na proxima questao
				}  

			}else {
				document.getElementById('popup').innerHTML = 'Incorreto'
				document.getElementById('popup').className = 'popup2'

				if(i < todasPerguntas.length){
					respostas[index].checked = false
				}
				
			}
		}
	})

	x ++

	if(i == todasPerguntas.length){
		setTimeout(function(){
			window.location.href = 'resultado.html?'+score
			clearInterval(cronometro)
		}, 2000)
		
			
	}else{
		document.getElementById('question').innerHTML = todasPerguntas[i].question // prencher as questoes no campo correspondente

		todasPerguntas[i].choices.forEach(function(item, index){
			document.getElementById('resposta' + (index +1)).innerHTML = todasPerguntas[i].choices[index] // preencher os radios button com as escolhas para cada pergunta 
			document.getElementById('r' + (index +1)).value = todasPerguntas[i].choices[index]

		})
	}
		
	i++
}


