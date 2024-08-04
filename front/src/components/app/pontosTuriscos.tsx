import React from 'react';
import { CardImage } from "../ui/cardImage.tsx";
import { Cidade, PontoTuristico } from './models.ts'; // Importar classes

import lencois from '../../assets/Barreirinhas/LM.jpg';
import rioFormiga from '../../assets/Barreirinhas/rioFormiga.jpg';
import rioPreguica from '../../assets/Barreirinhas/rioPreguica.jpg';
import farolPreguica from '../../assets/Barreirinhas/farolPreguicas.jpg';

import palacio from '../../assets/Sao Luis/palacio.jpg';
import igreja from '../../assets/Sao Luis/igreja-da-se.jpg';
import praia_do_calhau from '../../assets/Sao Luis/praia-do-calhau.jpg';
import centro_historico from '../../assets/Sao Luis/centro-historico.jpg';

import veneza from '../../assets/Caxias/foto-do-balneario.jpg';
import mirante from '../../assets/Caxias/mirante-da-balaiada.jpg';
import centro_cultura from '../../assets/Caxias/centro-de-cultura.jpg';
import praca from '../../assets/Caxias/praca-da-chapada.jpg';

interface PontosTuristicosProps {
  cidade: string;
}

// Crie instâncias das classes para cada cidade e seus pontos turísticos
const saoLuis = new Cidade('São Luís', [
  new PontoTuristico('Palácio dos Leões', [palacio], 'Antiga sede do governo, este palácio histórico oferece uma vista deslumbrante da Baía de São Marcos e exibe uma arquitetura imponente.'),
  new PontoTuristico('Igreja de Sé', [igreja], 'Também conhecida como Catedral da Sé, esta igreja histórica impressiona com sua arquitetura colonial e importância religiosa.'),
  new PontoTuristico('Calhau Beach', [praia_do_calhau], 'Praia urbana popular com extensas faixas de areia, calçadão animado, quiosques e opções de lazer à beira-mar.'),
  new PontoTuristico('Centro Histórico de São Luís', [centro_historico], 'Área charmosa com ruas de paralelepípedos, casarões coloniais preservados e rica herança cultural.')
]);

const caxias = new Cidade('Caxias', [
  new PontoTuristico('Balneário Veneza', [veneza], 'Complexo de lazer com piscinas naturais, áreas de piquenique e atividades ao ar livre, ideal para um dia de diversão em família.'),
  new PontoTuristico('Mirante da Balaiada', [mirante], 'Ponto de observação histórico que oferece uma vista panorâmica da cidade e relembra a revolta da Balaiada.'),
  new PontoTuristico('Centro de Cultura', [centro_cultura], 'Espaço dedicado à promoção das artes, com exposições, apresentações e eventos culturais que celebram a riqueza local.'),
  new PontoTuristico('Praça da Chapada', [praca], 'Praça central animada, conhecida por seus jardins bem cuidados, monumentos e ambiente acolhedor para encontros sociais.')
]);

const barreirinhas = new Cidade('Barreirinhas', [
  new PontoTuristico('Lençóis Maranhenses', [lencois], 'Descubra um paraíso de dunas gigantescas e lagoas cristalinas, perfeito para aventuras e relaxamento.'),
  new PontoTuristico('Rio Preguiças', [rioPreguica], 'Navegue pelo Rio Preguiças e explore suas águas tranquilas, repletas de paisagens deslumbrantes.'),
  new PontoTuristico('Rio Formiga', [rioFormiga], 'Relaxe ao longo do Rio Formiga, ideal para passeios de barco e momentos de tranquilidade na natureza.'),
  new PontoTuristico('Farol Preguiças', [farolPreguica], 'Visite o icônico Farol Preguiças e aprecie vistas panorâmicas inesquecíveis do alto.')
]);

const pontosTuristicos: { [key: string]: Cidade } = {
  'São Luís': saoLuis,
  'caxias': caxias,
  'barreirinhas': barreirinhas
};

const PontosTuristicos: React.FC<PontosTuristicosProps> = ({ cidade }) => {
  const cidadeData = pontosTuristicos[cidade];

  if (!cidadeData) {
    return <div>Selecione uma cidade para ver os pontos turísticos.</div>;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {cidadeData.pontos.map((ponto, index) => (
        <div key={index}>
          {ponto.imgs.map((img, imgIndex) => (
            <CardImage
              key={imgIndex}
              title={ponto.nome}
              content={img}
              description={ponto.descricao}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PontosTuristicos;
