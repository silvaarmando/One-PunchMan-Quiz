import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';

// const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;
//  background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media Screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>One-Punch Man Quiz</title>
        <meta name="title" content="Este é o título da Aplicação." />
        <meta name="description" content="One-Punch Man Quiz é um questionário de perguntas sobre o Anime One-Punch Man, que testa seus conhecimentos sobre a animação." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Meta Tags — Preview, Edit and Generate" />
        <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate" />
        <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>ONE-PUNCH MAN</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={ function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do React');
            }}
            >
              <Input
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Digite aqui seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Dê uma olhada nos quizes de outros herois e seja um héroi por diversão....</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}
