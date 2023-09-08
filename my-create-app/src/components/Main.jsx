import SmartCities from "../img/smartcities.jpeg";
import Poluicao from "../img/poluicao.jpeg";
import Individual from "../img/responsa.jpeg";
import Coletiva from "../img/responsa_coletiva.jpeg";
import Ideia from "../img/ideia.png";
import PontosNegativos from "../img/negativos_positivos.png";


export default function Main(){
    return(
        <>
        <main>
            <div className="subtitulos"> 
                <h2 id="smart-cities"> Smart Cities </h2>
            </div>  
            <div className="imagem">
                <img src={SmartCities} alt="smart-cities"/>
            </div>
            <div className="paragrafos"> 
               <p> O conceito de urbanização conhecido como Smart Cities, ou cidades inteligentes, tem como objetivo melhorar a qualidade de vida dos habitantes utilizando tecnologias avançadas. A ideia central é criar cidades mais eficiêntes e sustentáveis, conectando-as com diversas tecnologias inteligentes que possibilitam aprimorar os serviços públicos, como transporte, uso de recursos naturais (água e energia) e segurança. O objetivo final é proporcionar um ambiente urbano que seja sustentável e seguro, gerando benefícios econômicos e uma boa qualidade de vida para os habitantes. 
               </p>
            </div> 
    
            <div className="subtitulos"> 
                <h2 id="problema">Problema</h2>
            </div>  
            <div className="imagem">
                <img src={Poluicao} alt="poluição"/>
            </div>
            <div className="paragrafos"> 
                <p>A problemática da poluição atmosférica é um tema crucial que afeta primordialmente as regiões urbanas e possui efeitos abrangentes, figurando como uma das principais complexidades enfrentadas pelas cidades inteligentes. Em vista da sua seriedade e influência na saúde humana e ambiental, torna-se imprescindível que medidas efetivas sejam implementadas a fim de amenizar tal questão. Com o crescente processo de urbanização, ocorreu um aumento considerável na emissão de agentes poluentes, acarretando em prejuízos tanto para o meio ambiente quanto para as pessoas que habitam em locais urbanos densamente povoados.</p>
            </div>  
    
    
            <div className="subtitulos"> 
                <h2 id="individuais"> Responsabilidades individuais sobre a Poluição do ar</h2>
            </div>
            <div className="imagem">
                <img src={Individual} alt="responsabilidade individual"/>
            </div>
            <div className="paragrafos">   
                <p>
                    A responsabilidade individual envolve ações que cada pessoa pode tomar para reduzir a poluição do ar em sua própria vida cotidiana. Algumas ações individuais que podem ser tomadas incluem:
                </p>
            </div>
                <br />
            <div className="topicos">
                <ul> 
                    <li id="idTopico">Reduzir a quantidade de tempo gasto dirigindo, optando por caminhar, pedalar ou utilizar o transporte público.</li>
                    <li id="idTopico">Escolher produtos de limpeza doméstica que não contenham produtos químicos nocivos.</li>
                    <li id="idTopico">  Reduzir o uso de aparelhos elétricos que geram calor, como secadores de cabelo e ferros de passar.</li>
                    <li id="idTopico"> Utilizar aparelhos elétricos energéticamente eficientes.</li>
                    <li id="idTopico"> Fazer a manutenção regular do carro, verificando se os pneus estão com a pressão adequada e trocando o óleo regularmente. </li> 
                </ul>
            </div> 
    
        
        
            <div className="subtitulos"> 
                <h2 id="coletivas"> Responsabilidades coletivas sobre a poluição do ar</h2>
            </div>
            <div className="imagem">
                <img src={Coletiva} alt="responsabilidade coletiva"/>
            </div>
            <div className="paragrafos">   
                <p>
                    A responsabilidade coletiva envolve ações que são tomadas em conjunto por grupos de pessoas, empresas, organizações e governos para reduzir a poluição do ar. Algumas ações coletivas que podem ser tomadas incluem:
                </p> 
            </div>
            <br />
            <div className="topicos">
                <ul>
                    <li id="idTopico"> Implantar políticas públicas que incentivem o uso de transportes sustentáveis. </li>
                    <li id="idTopico"> Investir em tecnologias limpas e energias renováveis. </li>
                    <li id="idTopico"> Implantar políticas de redução de emissões de gases de efeito estufa. </li>
                    <li id="idTopico"> Fomentar o reflorestamento de áreas degradadas. </li>
                    <li id="idTopico"> Educar a população sobre os riscos da poluição do ar e como reduzi-la </li>
                </ul>
            </div>
        
        
            <div className="subtitulos"> 
                <h2 id="solucao"> Nossa ideia de solução </h2>
            </div>
            <div className="imagem">
                <img src={Ideia} alt="imagem ideia"/>
            </div>
            <div className="paragrafos"> 
                <p>
                    Uma ideia prática e simples seria incluir um sensor de co2 na fabricação de todos os carros, que pode alertar as concessionárias e montadoras sobre quantidades anormais de gases tóxicos expelidos pelos veículos. Esse sensor poderia ser encaixado ou diretamente instalado próximo ao sistema de escape dos carros e poderia diminuir uma quantidade significativa da emissão de carbono. Isso teria um impacto positivo no meio ambiente e na saúde pública, especialmente nas grandes cidades com altos níveis de poluição do ar.
                </p>
            </div>
            
        
            <div className="subtitulos"> 
                <h2 id="negativos-poluicao-positivos-solucao">Pontos negativos sobre a poluição do ar e quais pontos positivos traremos com a solução</h2>
            </div>
            <div className="imagem">
                <img src={PontosNegativos} alt="pontos negativos imagem"/>
            </div>
            <div className="paragrafos"> 
                <p>
                    Existem diversos pontos negativos quando se trata de poluição do ar. Os gases tóxicos tem efeitos péssimos, tanto na saúde das pessoas, como para o meio ambiente. Pessoas sofrem de doenças respiratórias e cardiovasculares e muitas acabam falecendo prematuramente por conta das condições do ar nas grandes cidades, e falamos de milhões todos os anos. Chuvas ácidas são cada vez mais recorrentes em Smart Cities, pela grande concentração de gases tóxicos presentes na nossa atmosfera. O efeito estufa também não fica de fora, vem sendo agravado cada ano mais, aumentando a temperatura média do planeta, o que interfere em habitats de animais, que começam a correr riscos de extinção. O aumento da temperatura também derrete as geleiras cada vez mais, o que causa o aumento do nível do oceano, que muda o ambiente marinho e a vida presente nele. O desgaste da camada de ozônio também é muito preocupante, com os raios UV penetrando cada vez mais na nossa superfície. Um dos maiores colaboradores para esse grande índice de poluição são os carros, ônibus, motos, a indústria automobílistica em geral, liberam grandes quantidades de dióxido de carbono e metano. O sensor de co2, reduzirá bastante quantidade de gases prejudiciais liberados, podendo tranquilizar os habitantes das grandes cidades e aliviar um pouco as mudanças climáticas. Caso a ideia seja passada pra frente, acreditamos num efeito dominó, onde as empresas vão utilizar cada vez mais o equipamento.
                </p>
            </div>
            <div className="voltar">
                <a href="#home">Voltar para o início</a>
            </div>
        </main>
        </>
    )
}