import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ComboboxDemo from '../combobox';
import PontosTuristicos from '../components/app/pontosTuriscos';
import { ProfileForm } from './Cadastro';
import maranhao from '../assets/maranhao.png';
import MapComponent from '../components/app/MapComponent';

const HomePage = () => {
  const [cidadeSelecionada, setCidadeSelecionada] = useState("São Luís");

  return (
    <>
      <header className='flex justify-between border-b p-5'>
        <div className='text-3xl mr-10'>TurisMA</div>
        <div className='flex'>
          <Link className='mr-3 hover:bg-white hover:bg-opacity-20 hover:rounded-3xl p-2' to='/cadastro'>Cadastro</Link>
          <ComboboxDemo onSelectCidade={setCidadeSelecionada} />
        </div>
      </header>
      <main className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 mt-8 flex flex-col items-center'>
        <div className='flex flex-col sm:flex-row items-center justify-center text-lg gap-8'>
          <div className='text-center sm:text-left'>
            <span className='font-bold text-2xl'>
              Descubra as Maravilhas de {cidadeSelecionada.charAt(0).toUpperCase() + cidadeSelecionada.slice(1)}!
            </span>
            <p className='mt-4'>
              Bem-vindo ao seu portal de aventuras e descobertas! Explore os encantos das cidades maranhenses, repletas de história, 
              cultura vibrante e paisagens deslumbrantes. Prepare-se para se apaixonar por cada destino!
            </p>
          </div>
          <img className='w-64' src={maranhao} alt="Mapa do Maranhão" />
        </div>
        <div className='flex justify-around w-full mt-8'>
          <PontosTuristicos cidade={cidadeSelecionada} />
        </div>
        <div className='mt-10 mb-10'>
          <MapComponent city={cidadeSelecionada} />
        </div>
      </main>
    </>
  );
}

export default HomePage;
