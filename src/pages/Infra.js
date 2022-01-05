
const Home = () => {
  return (
    <content className="oschales">

      <h3>Confira o que é oferecido na sua estadia</h3>
      <p>Além do descrito aqui, buscamos uma constante evolução para oferecer a melhor experiência possível durante sua estadia. Sentiu falta de algo? Avia a gente!</p>

      <hr className="spacer" />

      <dl className="des-chales">
        <dt><h4>O espaço</h4></dt>
        <dd>
          <p>A Villa Rosa Butiá é composta de espaços individuais (chalés) e compartilhados (jardim, estacionamento e piscina). São 3 chalés (<span className="tag-chale-1">chalé #1</span>, <span className="tag-chale-2">chalé #2</span> e <span className="tag-chale-3">chalé #3</span>) individuais espalhados pelo terreno.</p>
          <p><span className="tag-chale-1">chalé #1</span>48m<sup>2</sup> distribuídos em 1 quarto, 1 banheiro, 1 sala/cozinha + sacada e área de churrasqueira em deck.</p>
          <p><span className="tag-chale-2">chalé #2</span>44m<sup>2</sup> distribuídos em 1 quarto, 1 banheiro, 1 sala/cozinha + sacada e área de churrasqueira em deck.</p>
          <p><span className="tag-chale-3">chalé #3</span>40m<sup>2</sup> distribuídos em 1 quarto, 1 banheiro, 1 sala/cozinha + sacada em deck.</p>
          <p>Piscina de 4x2 metros com área de deck ao redor.</p>
          <p>Jardim com gramado para jogar aquela altinha, curtir um piquinique ou simplesmente deitar e relaxar.</p>
        </dd>
        <dt><h4>A internet</h4></dt>
        <dd>
          <p>100Mb de fibra óptica individual para cada chalé. Ou seja, a internet de 1 chalé é totalmente independente do outro e seu uso não afeta ou é afetado pela utilização nos outros chalés. Temos prioridade em atender nossos hospédes que fazem home office e sabemos que internet é algo básico para quem busca esse tipo de equilibrio entre a vida profissional e o lazer nos nossos espaços.</p>
        </dd>
        <dt><h4>O churrasco</h4></dt>
        <dd>
          <p><span className="tag-chale-1">chalé #1</span> e <span className="tag-chale-2">chalé #2</span> com área externa com deck e cobertura, churrasqueira com grelha e espetos, pia, mesa e cadeiras.</p>
          <p><span className="tag-chale-3">chalé #3</span> com churrasqueira portátil.</p>
        </dd>
        <dt><h4>O café</h4></dt>
        <dd>
          <p>Cada chalé vem equipado com uma máquina de café expresso (Nespresso ou Dulce Gusto) e algumas capsulas para você começar muito bem o dia. Além do expresso, é possível também passar um café direto na caneca, pois fornecemos o pó, o filtro e o papel.</p>
        </dd>
        <dt><h4>A cozinha</h4></dt>
        <dd>
          <p>A cozinha dos 3 chalés vem equipadas com fogão, geladeira, microondas, pia e armários. Os utensílios disponíveis na cozinha vão desde panelas, frigideiras, potes, formas e etc, até copos, taças, abridor de vinho/lata/garrafa, pratos, xícaras, talheres, pegador, garfo e faca de churrasco, etc. Além dos utensílios, também fornecemos um pouco de sal, acúcar, azeite de oliva e óleo vegetal. Para a limpeza, fornecemos o sabão, a esponja e alguns panos de prato.</p>
        </dd>
        <dt><h4>O banheiro</h4></dt>
        <dd>
          <p>Disponibilizamos um secador (220V) e a estadia é iniciada com 2 rolos de papel higiênico. A princípio, a roupa de banho é por sua conta, mas caso tenha esquecido e precise de algo, nos avise que sempre vamos buscar uma solução.</p>
          <p>Os <span className="tag-chale-1">chalé #1</span> e <span className="tag-chale-2">chalé #2</span> possuem espaço bastante amplo e 2 chuveiros dentro do box em vidro temperado. </p>
          <p><span className="tag-chale-3">chalé #3</span> com box em vidro temperado. </p>
        </dd>
        <dt><h4>O quarto</h4></dt>
        <dd>
          <p>Todos chalés possuem 1 quarto com ar condicionado (quente e frio), 1 cama box King Size (193x203cm)*, 1 roupeiro/arara para as roupas e 2 mesas de cabeceira. A roupa de cama fornecida é composta de protetor de colchão, lençol, sobre lençol, endredon, capas e fronhas de travesseiro. Tudo branco e sempre lavado e trocado a cada vez acontece a troca dos hóspedes.</p>
          <p>Também deixamos um espaço de trabalho (escrivaninha) dentro de cada quarto. Veja mais no item "home office".</p>
          <p>* Caso sua estadia precise, a cama king size pode ser dividida em 2 camas de solteiro grande. Também temos disponível uma cama infantil que pode ser montada junto da cama grande para a estadias de famílias em que a criança prefira dormir no quarto.</p>
        </dd>
        <dt><h4>A sala</h4></dt>
        <dd>
          <p>Na sala, temos 1 sofá que pode virar uma cama de casal. Uma mesa para as refeições com 2 cadeiras e 1 banquinho. A TV vem com o Fire Stick da Amazon, que permite que você possa assistir aos principais serviços de streamming (Netflix, Disney+, Amazon Prime, Youtube, Apple, etc) direto na TV.</p>
        </dd>
        <dt><h4>Sobre o home office</h4></dt>
        <dd>
          <p>Pensando nos casais que se amam, mas na hora de trabalhar no home office é cada 1 de um lado, colocamos 2 espaços de trabalho: 1 escrivaninha com cadeira no quarto (esse espaço com ar condicionado) e uma bancada com cadeira na sala, junto com a TV (que pode ser usada como um segundo monitor).</p>
        </dd>
        <dt><h4>Sobre o lixo</h4></dt>
        <dd>
          <p>Fornecemos, inicialmente, 2 sacos para o banheiro e 2 sacos para a cozinha.</p>
        </dd>

      </dl>

      <hr className="spacer" />

      <h3 className="alert">ATENÇÃO, nossa rede elétrica é de 220V! Caso você precise de um conversor para 110V, nos avise para que possamos lhe atender.</h3>
    </content>
  );
};

export default Home;
