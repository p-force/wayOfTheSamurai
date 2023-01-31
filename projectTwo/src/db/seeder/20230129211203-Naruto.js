/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Narutos', [{
      name: 'Anko Mitarashi',
      img: 'https://gkbzmcahsvowlfjslvnm.supabase.in/storage/v1/object/public/characters/Anko_Mitarashi.webp',
      info: 'Anko Mitarashi (みたらしアンコ, Mitarashi Anko) é uma kunoichi de nível Tokubetsu Jōnin de Konohagakure. Anko é descontraída, moleca, brincalhona, teimosa, corajosa, áspera, mal-humorada e às vezes hiperativa, o que faz dela um pouco semelhante à Naruto Uzumaki, em muitos aspectos. Anko também mostrou um lado um pouco sádico e não é aparentemente a mais simpática das pessoas, o que não é nenhuma surpresa, sendo uma ex-aluna de Orochimaru. No entanto, ela não deixa de se preocupar com seus companheiros ou pessoas que sofrem, como mostrado em suas palavras encorajadoras para Isaribi durante o Arco País do Mar. Anko também é uma pessoa muito rigorosa e sem paciência, sem perder tempo em anunciar más notícias. Ela regularmente faz a certeza de ter pelo menos o conhecimento básico da paisagem para que sua próxima missão seja realizada. Anko também é altamente auto-confiante, em termos de suas próprias habilidades, muitas vezes optando por enfrentar um adversário poderoso sozinha ou continuar uma perigosa missão sozinha.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Asuma Sarutobi',
      img: 'https://gkbzmcahsvowlfjslvnm.supabase.in/storage/v1/object/public/characters/Asuma_Sarutobi.webp',
      info: 'Asuma Sarutobi (猿飛アスマ, Sarutobi Asuma) foi um jōnin do clã Sarutobi de Konohagakure, assim como um ex-membro dos Doze Guardiões Ninja. Ele também foi o líder do Time Asuma, que consistia em Shikamaru Nara, Ino Yamanaka e Chōji Akimichi.Asuma era um indivíduo tipicamente descontraído, e não se envolvia em coisas que não fossem absolutamente necessárias, como visto quando ele decidiu não ajudar a salvar Hinata Hyūga durante sua luta nos Exames Chūnin. Ele era um fumante inveterado, mas, apesar disso, ele interrompia abruptamente seu hábito em certas circunstâncias, como quando seu pai morreu',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Boruto Uzumaki',
      img: 'https://gkbzmcahsvowlfjslvnm.supabase.in/storage/v1/object/public/characters/Boruto_Uzumaki.webp',
      info: 'Boruto Uzumaki (うずまきボルト, Uzumaki Boruto) é um shinobi do clã Uzumaki de Konohagakure, assim como um descendente do clã Hyūga. Ele também é um membro do Time Konohamaru. Desde que seu pai, Naruto Uzumaki, se tornou o Hokage, Boruto passou a ser ressentido com ele por nunca ter tempo o suficiente para ele e sua família, levando-o a agir de maneira indignada. Ele também tinha uma tendência a tomar atalhos como um ninja em vez de depender de sua própria força. No entanto, após o treinamento sob a tutela de Sasuke Uchiha e sua luta contra Momoshiki e Kinshiki Ōtsutsuki com seu pai e professor, Boruto eventualmente passou a respeitar seu pai e seu papel como Hokage, mas mesmo assim ele promete ir por um caminho diferente do que Naruto escolheu, decidindo se tornar um ninja como Sasuke.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Narutos', null, {});
  },
};
