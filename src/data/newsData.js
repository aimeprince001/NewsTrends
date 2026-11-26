export const categories = [
  { id: 'all', name: 'Top Stories', icon: '🔥', names: { en: 'Top Stories', rw: 'Amakuru Makecuru', fr: 'À la une' } },
  { id: 'politics', name: 'Politics', icon: '🏛️', names: { en: 'Politics', rw: 'Politiki', fr: 'Politique' } },
  { id: 'sports', name: 'Sports', icon: '🏆', names: { en: 'Sports', rw: 'Imikino', fr: 'Sports' } },
  { id: 'entertainment', name: 'Entertainment', icon: '🎬', names: { en: 'Entertainment', rw: 'Ibyishimo', fr: 'Divertissement' } },
  { id: 'social', name: 'Social', icon: '🌐', names: { en: 'Social', rw: 'Imibereho', fr: 'Social' } },
  { id: 'technology', name: 'Technology', icon: '💻', names: { en: 'Technology', rw: 'Ikoranabuhanga', fr: 'Technologie' } },
  { id: 'business', name: 'Business', icon: '📈', names: { en: 'Business', rw: 'Ubucuruzi', fr: 'Économie' } },
  { id: 'health', name: 'Health', icon: '🩺', names: { en: 'Health', rw: 'Ubuzima', fr: 'Santé' } },
]

const img = (seed, w = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${Math.round((w * 2) / 3)}`

export const articles = [
  {
    id: 'a1',
    category: 'politics',
    author: 'Amara Okafor',
    source: 'Global Wire',
    readMins: 4,
    image: img('politics1'),
    featured: true,
    trending: true,
    time: '12 min ago',
    en: {
      title: 'Senate Passes Landmark Climate Bill After Marathon Session',
      excerpt:
        'Lawmakers reached a bipartisan deal late last night, setting the stage for the most ambitious environmental policy in a decade.',
      body: `The Senate voted 68-31 to advance the Clean Horizon Act after an all-night session that stretched into the early hours. The bill aims to cut national emissions by 45% over the next ten years.

Negotiators from both parties said the breakthrough came after a compromise on funding for rural manufacturing hubs. "This is what governing looks like," one lead sponsor told reporters.

The bill now moves to the House, where leadership has promised a vote before the end of the quarter.`,
    },
    rw: {
      title: 'Inteko nkuru yemeje itegeko rihambaye ry’ikirere nyuma yo gukorera ijoro ryose',
      excerpt:
        'Abarinenga bageze ku rugero rwubatswe n’amashyaka yombi nijoro gishize, bashinga imbere itegeko rikomeye ry’ibidukikije mu myaka icumi.',
      body: `Inteko nkuru yatanze amajwi 68-31 yo gushyigikira itegeko rya Clean Horizon Act nyuma yo gukorera ijoro ryose. Itegeko rigamije kugabanya ibyuka bihumanya ikirere 45% mu myaka icumi.

Abarinenga bavuga ko amasezerano yagezeho nyuma yo kubwumvikana ku kwishyiraho ingengo y’imari ku nganda zo mu cyaro.

Itegeko ubu ryajya mu Nteko ishinga amategeko, aho ubuyobozi bwavuze ko bazabaza amajwi mbere y’intangiriro y’igihembwe.`,
    },
    fr: {
      title: 'Le Sénat adopte une loi climatique historique après une longue session',
      excerpt:
        "Les législateurs ont conclu un accord bipartisan tard dans la nuit, ouvrant la voie à la politique environnementale la plus ambitieuse de la décennie.",
      body: `Le Sénat a voté 68-31 pour faire avancer la loi Clean Horizon après une session qui s'est prolongée jusqu'à l'aube. Le texte vise à réduire les émissions nationales de 45 % sur dix ans.

Les négociateurs des deux partis ont déclaré que l'accord a été trouvé après un compromis sur le financement des pôles industriels ruraux.

Le projet passe maintenant à la Chambre, où la direction a promis un vote avant la fin du trimestre.`,
    },
  },
  {
    id: 'a2',
    category: 'sports',
    author: 'Marcus Bell',
    source: 'Arena Sports',
    readMins: 3,
    image: img('sports1'),
    featured: true,
    trending: true,
    time: '28 min ago',
    en: {
      title: 'Underdogs Stun Champions in Overtime Thriller',
      excerpt:
        'A last-second three-pointer sent the home crowd into delirium and capped one of the greatest comebacks of the season.',
      body: `Trailing by 18 with six minutes left, the Riverside Foxes mounted a furious comeback to stun the defending champions 112-109 in overtime. A buzzer-beating three from rookie guard Lena Ortiz sealed it.

"We never stopped believing," Ortiz said. The win snaps the champions' 14-game home streak.

Analysts are already calling it a potential turning point for the season.`,
    },
    rw: {
      title: 'Abatabujijwe bashesheje abatsinze mu isaha y’inyuma ku buryo buteye ubwuzuza',
      excerpt:
        'Itegeko rya nyuma rya 3 ryatuje abafana mu myumarago, bigashinga imbere umukino mwiza w’igihembwe.',
      body: `Bari inyuma 18 iminota 6 ishize, Riverside Foxes yakomeje kwihangana ashesha abatsinze 112-109 mu isaha y’inyuma. Itegeko rya nyuma rya Lena Ortiz ryabashyize kurwanya.

"Ntidwigeze twibagirwa," ngo Ortiz. Iyo tsina rirahagarika umurongo w’intsinzi 14 yo mu rugo.

Ahanisi barabivuga nk’ahantu hehyo heza mu gihembwe.`,
    },
    fr: {
      title: 'Les outsiders créent la surprise face aux champions en prolongation',
      excerpt:
        "Un panier à trois points à la dernière seconde a enflammé le public et scellé l'un des plus grands comebacks de la saison.",
      body: `Menés de 18 points à six minutes de la fin, les Riverside Foxes ont réalisé une remontée spectaculaire pour battre les champions en titre 112-109 en prolongation. Un panier à trois points au buzzer de la recrue Lena Ortiz a scellé le sort.

« Nous n'avons jamais cessé d'y croire », a déclaré Ortiz. Cette victoire met fin à la série de 14 matchs à domicile des champions.

Les analystes y voient déjà un tournant potentiel de la saison.`,
    },
  },
  {
    id: 'a3',
    category: 'entertainment',
    author: 'Sofia Marchetti',
    source: 'Screen Buzz',
    readMins: 4,
    image: img('entertainment1'),
    featured: true,
    trending: true,
    time: '45 min ago',
    en: {
      title: 'Indie Film Sweeps Festival Awards in Surprise Upset',
      excerpt:
        'A low-budget drama shot on a shoestring budget walked away with the top prize, beating out studio heavyweights.',
      body: `The 42nd Golden Reel Festival closed as "Paper Lanterns," a quiet indie drama made for under $200,000, took home Best Picture, Best Director and Best Original Screenplay.

The film's director dedicated the award to the local community that let the crew film in their neighborhood. "Stories don't need a big budget, they need a big heart," she said.

Distributors are now reportedly in a bidding war for rights.`,
    },
    rw: {
      title: 'Filime ntoya yegukanyije ibihembo bya festival mu buryo buteye ishavu',
      excerpt:
        'Filime y’ikiguzi gito yahise igana igihembo gikuru, ishesha filime nini z’amasosiyete.',
      body: `Festival ya 42 ya Golden Reel yafunze "Paper Lanterns", filime ntoya yakorewe kuri munsi ya $200,000, yegukana Iyi Filime nziza, Umuyobozi mwiza n’Inyandiko z’umwimerere.

Umuyobozi wayigenewe abaturage batuye i hato bakemera kugoreramo filime. "Inkuru ntizikeneye ingengo y’imari nini, zikeneye umutima munini," ngo.

Abakwirakwiza bavuga ko basanzwe barwana uburenganzira.`,
    },
    fr: {
      title: 'Un film indépendant rafle les prix du festival dans une surprise générale',
      excerpt:
        'Un drame à petit budget a remporté le prix suprême, battant les poids lourds des studios.',
      body: `Le 42e Festival Golden Reel s'est clos avec « Paper Lanterns », un drame indépendant tourné pour moins de 200 000 $, qui a remporté le prix du meilleur film, du meilleur réalisateur et du meilleur scénario original.

La réalisatrice a dédié le prix à la communauté locale qui a accueilli le tournage. « Les histoires n'ont pas besoin d'un gros budget, mais d'un grand cœur », a-t-elle déclaré.

Les distributeurs se livreraient désormais une guerre d'enchères.`,
    },
  },
  {
    id: 'a4',
    category: 'social',
    author: 'Daniel Reyes',
    source: 'Community Post',
    readMins: 3,
    image: img('social1'),
    trending: true,
    time: '1 hr ago',
    en: {
      title: 'Community Volunteers Transform Vacant Lot Into Urban Garden',
      excerpt:
        'What was once a neglected eyesore is now a thriving green space feeding dozens of local families.',
      body: `Neighbors banded together over the weekend to convert a long-vacant lot into a community garden, complete with raised beds, a tool shed and a small orchard.

Organizers say the project will provide fresh produce to more than 40 families. "It's about more than vegetables, it's about neighbors knowing each other again," said one coordinator.

The city has pledged to maintain the water supply.`,
    },
    rw: {
      title: 'Abaturage bahinduye ahari ubusa mu busitani bw’umujyi',
      excerpt:
        'Aho hari isengariye ryibagiwe, ubu hari ahantu heza henshya imiryango myinshi yo i hato.',
      body: `Abaturanyi bahurijwe ku wa gatondo bashyizeho ubusitani ku rwego rw’abaturage, bufite ibibumbano, icyumba cy’ibikoresho n’ishyamba rito.

Ababinyabimbye bavuga ko umushinga uzaha imbuto z’intango miryango irenga 40. "Ntabwo ari imbuto gusa, ni ukuhuza abaturanyi," ngo.

Umujyi wavuze ko uzasena amazi.`,
    },
    fr: {
      title: 'Des bénévoles transforment un terrain vague en jardin urbain',
      excerpt:
        'Ce qui était un lieu négligé est devenu un espace vert florissant qui nourrit des dizaines de familles.',
      body: `Les voisins se sont mobilisés le week-end pour transformer un terrain longtemps vacant en jardin communautaire, avec des plates-bandes, un abri à outils et un petit verger.

Les organisateurs affirment que le projet fournira des produits frais à plus de 40 familles. « C'est bien plus que des légumes, c'est retrouver ses voisins », a déclaré un coordinateur.

La ville s'est engagée à entretenir l'alimentation en eau.`,
    },
  },
  {
    id: 'a5',
    category: 'technology',
    author: 'Priya Nair',
    source: 'Tech Daily',
    readMins: 5,
    image: img('tech1'),
    featured: true,
    time: '2 hr ago',
    en: {
      title: 'New Chip Promises Tenfold Efficiency for AI Devices',
      excerpt:
        'The breakthrough could bring powerful on-device AI to phones and laptops without draining the battery.',
      body: `A research team unveiled a new processor architecture that they claim delivers ten times the efficiency of current designs for AI workloads, keeping data local to address privacy concerns.

Early benchmarks show the prototype running large language models on-device with a fraction of the power draw. Commercial samples are expected next year.

"Edge AI is the next frontier," the lead researcher said.`,
    },
    rw: {
      title: 'Gishya gishya cy’ikoranabuhanga gisezerano imikorere 10 ku buryo bwihariye',
      excerpt:
        'Iki gikorwa gishobora kuzana AI ikomeye kuri telefone na laptop nta kibazo cy’ingufu.',
      body: `Itsinda ry’abashakashatsi ryerekanye ubwubatsi bushya bw’ikorosi bushobora gukora 10 inshuro nyinshi ku bwa AI, bikabika amakuru i hato kubw’ibwenge.

Ibisubizo by’ambere byerekana ko prototype ikora imikorere y’indimi nini kuri gikoresho gifite gukoresha ingufu gake. Ibyo kugurishwa biteganijwe umwaka utaha.

"AI yo ku gikoresho ni impera ikurikira," ngo umushakashatsi.`,
    },
    fr: {
      title: 'Une nouvelle puce promet une efficacité décuplée pour les appareils IA',
      excerpt:
        "Cette percée pourrait apporter une IA puissante sur les téléphones et ordinateurs portables sans vider la batterie.",
      body: `Une équipe de recherche a dévoilé une nouvelle architecture de processeur qui offrirait dix fois l'efficacité des conceptions actuelles pour l'IA, en gardant les données locales pour la confidentialité.

Les premiers tests montrent le prototype exécutant de grands modèles de langage avec une fraction de la consommation. Les échantillons commerciaux sont attendus l'an prochain.

« L'IA embarquée est la prochaine frontière », a déclaré le chercheur.`,
    },
  },
  {
    id: 'a6',
    category: 'business',
    author: 'Helen Cho',
    source: 'Market Lens',
    readMins: 3,
    image: img('business1'),
    time: '3 hr ago',
    en: {
      title: 'Markets Rally as Inflation Cools for Third Straight Month',
      excerpt:
        'Investors welcomed the latest data, sending major indexes to record highs on hopes of steady interest rates.',
      body: `Global markets surged after new figures showed inflation cooling for a third consecutive month. Major indexes hit record highs as investors bet on a stable rate environment.

Technology and consumer stocks led the gains, while bond yields eased.

"The soft landing scenario is back on the table," one strategist noted.`,
    },
    rw: {
      title: 'Isoko ry’imari rirakura igihe ifaranga ryatwese mu kwezi kwa gatatu',
      excerpt:
        'Abashoramari bishimyе amakuru mashya, batesha imibare nkuru ku myanya mirekire hejuru.',
      body: `Isoko ry’isi yarakuye nyuma y’imibare mibonera ko ifaranga ryatwese mu kwezi kwa gatatu. Imibare nkuru yageze hejuru kurwanya abashoramari bizeye amabwiriza mazima.

Isosiyete zikoresha ikoranabuhanga n’iz’abaguzi zibereye imbere.

"Icyerekezo cyo kugwa ku buryo bwoza kiratangiye kugaruka," ngo umwarimu.`,
    },
    fr: {
      title: "Les marchés rebondissent alors que l'inflation ralentit pour un troisième mois",
      excerpt:
        "Les investisseurs ont salué les dernières données, propulsant les grands indices à des sommets historiques.",
      body: `Les marchés mondiaux ont bondi après de nouveaux chiffres montrant un ralentissement de l'inflation pour un troisième mois consécutif. Les grands indices ont atteint des records.

Les valeurs technologiques et de consommation ont mené la hausse.

« Le scénario de l'atterrissage en douceur est de retour », a noté un stratège.`,
    },
  },
  {
    id: 'a7',
    category: 'health',
    author: 'Dr. Samuel Green',
    source: 'Wellness Today',
    readMins: 4,
    image: img('health1'),
    time: '4 hr ago',
    en: {
      title: 'Study Links Short Daily Walks to Sharper Memory',
      excerpt:
        'Researchers found that just 20 minutes of walking a day was associated with measurable cognitive benefits.',
      body: `A new longitudinal study suggests that a short daily walk can meaningfully support memory and focus. Participants who walked 20 minutes a day outperformed a control group on recall tasks.

The researchers emphasize that consistency matters more than intensity. "You don't need a gym membership, you need a pair of shoes and a little time," the author said.

The team is now expanding the research to older adults.`,
    },
    rw: {
      title: 'Ubushakashatsi bubona ko kugenda gato buri munsi bifasha kwibuka',
      excerpt:
        'Abashakashatsi babonye ko iminota 20 yo kugenda buri munsi bifatana n’inyungu zigaragara mu bwenge.',
      body: `Ubushakashatsi bushya bwerekana ko kugenda gato buri munsi bishobora gufasha kwibuka no kwihangira. Abitabiriye bagenda iminota 20 buri munsi baratsinzeitsinda itsinda rigengewe.

Abashakashatsi bashyize mbuga ko gukomeza ari cyo cyingenzi kuruta imbaraga. "Ntukenewe konti ya gym, ukeneye imishuzo n’igihe gito," ngo.

Itsinda ubu riragira ubushakashatsi ku bantu babanjye.`,
    },
    fr: {
      title: "Une étude relie les courtes marches quotidiennes à une meilleure mémoire",
      excerpt:
        "Les chercheurs ont constaté que 20 minutes de marche par jour étaient associées à des bénéfices cognitifs mesurables.",
      body: `Une nouvelle étude longitudinale suggère qu'une courte marche quotidienne peut améliorer la mémoire et la concentration. Les participants marchant 20 minutes par jour surpassaient le groupe témoin.

Les chercheurs soulignent que la régularité compte plus que l'intensité. « Pas besoin d'un abonnement à la salle, juste des chaussures et un peu de temps », a déclaré l'auteur.

L'équipe élargit maintenant la recherche aux personnes âgées.`,
    },
  },
  {
    id: 'a8',
    category: 'politics',
    author: 'Amara Okafor',
    source: 'Global Wire',
    readMins: 4,
    image: img('politics2'),
    time: '5 hr ago',
    en: {
      title: 'City Council Unveils Ambitious Public Transit Overhaul',
      excerpt:
        'The plan would add new rapid lines and cut commute times across the metro area within five years.',
      body: `The city council revealed a sweeping transit plan that would add three new rapid lines and modernize existing stations. Officials estimate it could cut average commute times by a third.

Funding will come from a mix of federal grants and a proposed local bond. Public hearings begin next month.

"This is a once-in-a-generation chance to reimagine how our city moves," the mayor said.`,
    },
    rw: {
      title: 'Inteko y’umujyi yerekanye gahunda nshya yo gupungira abaturage mu mujyi',
      excerpt:
        'Gahunda izashyiraho imirongo mishya yihuse igabanya igihe cyo kugenda mu mujyi mu myaka itanu.',
      body: `Inteko y’umujyi yerekanye gahunda nini y’ingendo izashyiraho imirongo itatu mishya yihuse ihuza amazu. Abayobozi bavuga ko ishobora kugabanya igihe cyo kugenda icumi ku gice.

Ingengo y’imari izakomotse kuri za za Leta n’inguzanyo y’aho. Amategeko rusange azatangira ukwezi gutaha.

"Iri ni ihame ryo guhindura uburyo umujyi wihangira," ngo umuyobozi.`,
    },
    fr: {
      title: 'Le conseil municipal dévoile un vaste plan de rénovation des transports',
      excerpt:
        'Le plan ajouterait de nouvelles lignes rapides et réduirait les temps de trajet dans la métropole en cinq ans.',
      body: `Le conseil municipal a révélé un vaste plan de transport ajoutant trois nouvelles lignes rapides et modernisant les stations existantes. Les responsables estiment une réduction d'un tiers des trajets.

Le financement proviendra de subventions fédérales et d'un emprunt local. Les auditions publiques commencent le mois prochain.

« C'est une occasion unique de réinventer la mobilité de notre ville », a déclaré le maire.`,
    },
  },
  {
    id: 'a9',
    category: 'sports',
    author: 'Marcus Bell',
    source: 'Arena Sports',
    readMins: 3,
    image: img('sports2'),
    time: '6 hr ago',
    en: {
      title: 'Marathon Record Falls in Perfect Running Conditions',
      excerpt:
        'Cool temperatures and a flat course helped an elite runner shatter a record that stood for nearly a decade.',
      body: `A packed city skyline witnessed history as the men's marathon record fell by 90 seconds on a crisp morning. The winner broke away at the 30-kilometer mark and never looked back.

Organizers credited ideal weather and a deep field. "Everything came together today," the record holder said.

Thousands of amateur runners followed.`,
    },
    rw: {
      title: 'Rekodi ya marathoni yamenetse mu bihe byiza byo kwiruka',
      excerpt:
        'Ubushyuhe buke n’ inzira nziza byafashije umurukinzi w’indobanura gusenya rekodi isanzwe ihari igera igihe.',
      body: `Rekodi y’abagabo ya marathoni yahindutse 90 masegonda ku gitondo gikonje. Uwatsinze yavuyemo kuri 30 km ntakomeze kureba inyuma.

Ababinyabimbye bavuga ko ikirere n’abantu byari byiza. "Byose byahujije uyu munsi," ngo.

Birenga ibihumbi by’abirukira bagenzi byakurikiye.`,
    },
    fr: {
      title: 'Le record du marathon tombe dans des conditions parfaites',
      excerpt:
        "Des températures fraîches et un parcours plat ont permis à un athlète d'élite de battre un record vieux de dix ans.",
      body: `Le record masculin du marathon est tombé de 90 secondes lors d'un matin frais. Le vainqueur a faussé compagnie à ses rivaux au 30e kilomètre.

Les organisateurs ont salué la météo idéale et un plateau relevé. « Tout s'est réuni aujourd'hui », a déclaré le recordman.

Des milliers de coureurs amateurs ont suivi.`,
    },
  },
  {
    id: 'a10',
    category: 'entertainment',
    author: 'Sofia Marchetti',
    source: 'Screen Buzz',
    readMins: 4,
    image: img('entertainment2'),
    time: '7 hr ago',
    en: {
      title: 'Streaming Series Finale Breaks Viewership Records',
      excerpt:
        'The season wrap-up drew the biggest audience of the year, sparking a wave of fan theories online.',
      body: `The finale of the hit streaming drama shattered viewership records, with millions tuning in within the first 24 hours. Social feeds lit up with reactions and theories about the cliffhanger ending.

Critics praised the show's bold storytelling and diverse ensemble cast. A spin-off is reportedly in development.

"Television keeps proving it can still surprise us," one reviewer wrote.`,
    },
    rw: {
      title: 'Umurongo wa seriali ushoje wamennye imibare y’abareba',
      excerpt:
        'Umusozo w’igihembwe yakuye abareba benshi cyane mu mwaka, atsika ibitekerezo by’abafana kuri interineti.',
      body: `Umusozo wa seriali ukunze wamennye imibare y’abareba, ibihumbi byinjira mu masaha 24 ya mbere. Imbuga nkoranyambaga zahise zuzura ibitekerezo ku musozo uteye ishavu.

Ahanisi bashimye ubwenge bwo kwandika n’abakinnyi batandukanye. Ibyerekeye seriali nshya biri gukorerwa.

"Televiziyo ikomeye kweretse ko ishobora gutuma twibabwa," ngo.`,
    },
    fr: {
      title: 'La finale de la série streaming bat des records d’audience',
      excerpt:
        "L'épisode final a attiré la plus grande audience de l'année, déclenchant une vague de théories en ligne.",
      body: `La finale de la série à succès a pulvérisé les records d'audience, des millions de téléspectateurs se ruant dans les 24 heures. Les réseaux sociaux se sont enflammés de théories.

Les critiques ont salué le récit audacieux et la distribution variée. Un spin-off serait en préparation.

« La télévision prouve encore qu'elle peut nous surprendre », a écrit un critique.`,
    },
  },
  {
    id: 'a11',
    category: 'politics',
    author: 'Jonah Whitfield',
    source: 'Capital Report',
    readMins: 5,
    image: img('politics3'),
    time: '8 hr ago',
    en: {
      title: 'Diplomats Reach Historic Trade Agreement After Two-Year Talks',
      excerpt:
        'The deal removes tariffs on dozens of goods and is expected to boost cross-border commerce significantly.',
      body: `Diplomats from twelve nations announced a landmark trade agreement after two years of negotiations, eliminating tariffs on more than 200 product categories.

Economists predict the pact could increase cross-border trade by up to 18% over five years. Business groups cautiously welcomed the news.

"This opens new markets for small manufacturers," a trade minister said.`,
    },
    rw: {
      title: 'Abahamba bangana bagiranye amasezerano y’ubucuruzi nyuma y’imyaka ibiri',
      excerpt:
        'Amasezerano akuraho amatebo ku bintu birenga 200, ateganijwe kongera ubucuruzi ku mipaka.',
      body: `Abahamba bo mu bihugu 12 batangaje amasezerano y’ubucuruzi nyuma y’imyaka ibiri y’ibiganiro, bakuraho amatebo ku bintu birenga 200.

Abahanga mu bukungu bavuga ko agashya kashobora kongera ubucuruzi 18% mu myaka itanu.

"Uyu mushinga ufungura isoko ku bakora bato," ngo umunyamabanga w’ubucuruzi.`,
    },
    fr: {
      title: 'Les diplomates concluent un accord commercial historique après deux ans',
      excerpt:
        'L’accord supprime les tarifs sur des dizaines de produits et devrait stimuler le commerce transfrontalier.',
      body: `Les diplomates de douze pays ont annoncé un accord commercial historique après deux ans de négociations, supprimant les tarifs sur plus de 200 catégories.

Les économistes prédisent une hausse du commerce transfrontalier allant jusqu'à 18 % sur cinq ans.

« Cela ouvre de nouveaux marchés aux petits fabricants », a déclaré un ministre.`,
    },
  },
  {
    id: 'a12',
    category: 'sports',
    author: 'Lena Ortiz',
    source: 'Arena Sports',
    readMins: 2,
    image: img('sports3'),
    time: '9 hr ago',
    en: {
      title: 'Rookie Sensation Named Player of the Month',
      excerpt:
        'The 19-year-old became the youngest winner of the award, averaging 24 points a game.',
      body: `A 19-year-old rookie was named Player of the Month after a blistering run of performances, averaging 24 points, 8 rebounds and 6 assists.

She is the youngest player ever to win the honor. "I'm just grateful for my teammates," she said humbly.

Coaches around the league are already drawing up new defensive schemes to stop her.`,
    },
    rw: {
      title: 'Umukinzi mushya yatoranyijwe nk’Umukinzi w’Ukwezi',
      excerpt:
        'Umukobwa w’imyaka 19 aba uw’imbere mu gutsinda, akoresha amanota 24 kuri buri mukino.',
      body: `Umukinzi mushya w’imyaka 19 yatoranyijwe nk’Umukinzi w’Ukwezi nyuma yo gutsinda biterwa n’imikorere mishya, amanota 24, 8 rebounds na 6 assists.

Ni we muniki muto kuruta wundi watsinze iri henti. "Nishimiye abanyamwuga bwanjye," ngo.

Abatoza bo mu cyiciro baratangiye gukora uburyo bushya bwo kumukeba.`,
    },
    fr: {
      title: 'La sensation recrue nommée joueuse du mois',
      excerpt:
        'La jeune de 19 ans est devenue la plus jeune lauréate, avec une moyenne de 24 points par match.',
      body: `Une recrue de 19 ans a été nommée joueuse du mois après une série de performances éclatantes, avec 24 points, 8 rebonds et 6 passes.

Elle est la plus jeune lauréate de l'histoire. « Je suis reconnaissante envers mes coéquipières », a-t-elle déclaré.

Les entraîneurs préparent déjà de nouveaux schémas défensifs.`,
    },
  },
  {
    id: 'a13',
    category: 'entertainment',
    author: 'Marcus Lee',
    source: 'Screen Buzz',
    readMins: 3,
    image: img('entertainment3'),
    time: '10 hr ago',
    en: {
      title: 'Global Music Festival Announces Record Lineup',
      excerpt:
        'Organizers revealed more than 100 artists across five stages for the summer event.',
      body: `The annual Horizon Music Festival unveiled its biggest lineup yet, with over 100 artists performing across five stages over three days.

Tickets sold out within hours of the announcement. Organizers added extra dates in two cities to meet demand.

"We wanted to make this the most diverse festival ever," the director said.`,
    },
    rw: {
      title: 'Festival y’umuziki yatangaje urutonde rukomeye rw’abahanzi',
      excerpt:
        'Ababinyabimbye bavuze ko abahanzi birenga 100 bazakina kuri bibuga bitanu mu kireke cya nyuma.',
      body: `Festival ya Horizon Music Festival yerekanye urutonde rukomeye kuruta ibindi, abahanzi birenga 100 bakina kuri bibuga bitanu mu minsi itatu.

Amatike yagurishwe mu masaha make. Ababinyabimbye bongera amatariki mu mujyi utatu.

"Twashakaga kuyishyira imbere nk’indundo nyinshi," ngo umuyobozi.`,
    },
    fr: {
      title: 'Le festival de musique mondial annonce une programmation record',
      excerpt:
        'Les organisateurs ont révélé plus de 100 artistes sur cinq scènes pour l’événement estival.',
      body: `Le Horizon Music Festival a dévoilé sa plus grande programmation, avec plus de 100 artistes sur cinq scènes pendant trois jours.

Les billets se sont vendus en quelques heures. Des dates supplémentaires ont été ajoutées dans deux villes.

« Nous voulions le festival le plus diversifié à ce jour », a déclaré le directeur.`,
    },
  },
  {
    id: 'a14',
    category: 'social',
    author: 'Grace Mbeki',
    source: 'Community Post',
    readMins: 3,
    image: img('social2'),
    time: '11 hr ago',
    en: {
      title: 'Students Launch Free Coding Club for Underprivileged Kids',
      excerpt:
        'A group of university students is teaching local children to code every weekend, free of charge.',
      body: `A group of university students has started a free weekend coding club for children from underprivileged backgrounds. The club now serves over 60 kids.

"We want every child to have the same shot at a tech career," the founder said. Local businesses have donated laptops.

The program is expanding to a second neighborhood next term.`,
    },
    rw: {
      title: 'Abanyeshuri batangije ikinyarwanda cya code ku bana bakennye',
      excerpt:
        'Itsinda ry’abanyeshuri ryigisha abana ba code buri wa gatondo, ku buntu.',
      body: `Itsinda ry’abanyeshuri ry’amashuri makuru ryatangiye ikigo cya code ku bana baturutse mu miryango mishya. Ubu gifite abana birenga 60.

"Dushaka ko buri mwana afata impanya imwe mu kibazo cya tekinoroji," ngo washizeho. Amasosiyete yatangiye gutanga laptop.

Porogaramu izagenda mu gace gakurikira.`,
    },
    fr: {
      title: 'Des étudiants lancent un club de code gratuit pour les enfants défavorisés',
      excerpt:
        'Un groupe d’étudiants enseigne le code aux enfants locaux chaque week-end, gratuitement.',
      body: `Un groupe d'étudiants a lancé un club de code gratuit le week-end pour les enfants défavorisés. Il accueille plus de 60 enfants.

« Nous voulons que chaque enfant ait la même chance dans la tech », a déclaré la fondatrice. Des entreprises ont donné des ordinateurs.

Le programme s'étend à un deuxième quartier le trimestre prochain.`,
    },
  },
  {
    id: 'a15',
    category: 'social',
    author: 'Grace Mbeki',
    source: 'Community Post',
    readMins: 2,
    image: img('social3'),
    time: '12 hr ago',
    en: {
      title: 'Volunteers Set World Record for Longest Charity Relay',
      excerpt:
        'Hundreds ran non-stop for 48 hours to raise funds for local shelters.',
      body: `Hundreds of volunteers ran a continuous 48-hour relay to raise money for homeless shelters, setting a new world record in the process.

The event raised over $250,000. "Every step mattered," one organizer said through tears.

The shelters say the funds will keep their doors open through winter.`,
    },
    rw: {
      title: 'Abatoza bashyizeho rekodi y’isi yo gukora relay ndende y’ubukungu',
      excerpt:
        'Birenga amahundu barukije iminota 48 nta guhagarara kugira ngo bakushe inkunga.',
      body: `Birenga amahundu by’abatoza barukije relay y’amasaha 48 nta guhagarara bakusanya inkunga ku nzu z’impagariki, bashyiraho rekodi nshya y’isi.

Igitambaro cyakushe $250,000. "Buri ntambwe yari ingenzi," ngo umubinyabimbye.

Impagariki zivuga ko inkunga izazigumisha imiryango.`,
    },
    fr: {
      title: 'Des bénévoles établissent un record du monde du relais caritatif le plus long',
      excerpt:
        'Des centaines de personnes ont couru sans interruption pendant 48 heures pour récolter des fonds.',
      body: `Des centaines de bénévoles ont couru un relais continu de 48 heures pour récolter des fonds pour les refuges, établissant un nouveau record du monde.

L'événement a récolté plus de 250 000 $. « Chaque pas comptait », a déclaré un organisateur.

Les refuges affirment que les fonds les maintiendront ouverts tout l'hiver.`,
    },
  },
  {
    id: 'a16',
    category: 'technology',
    author: 'Priya Nair',
    source: 'Tech Daily',
    readMins: 4,
    image: img('tech2'),
    time: '13 hr ago',
    en: {
      title: 'Open-Source Robot Kit Brings Robotics to Classrooms',
      excerpt:
        'The affordable kit lets students build and program their own robots in a single afternoon.',
      body: `An open-source robotics kit launched this week aims to make hands-on engineering accessible to schools with limited budgets. The kit costs under $50.

Students can assemble and program a working robot in a single afternoon using a visual coding interface.

"We want to spark curiosity, not gatekeep it," the creator said.`,
    },
    rw: {
      title: 'Ifatabuguzi rya roboti ryuzana ikoranabuhanga mu mashuri',
      excerpt:
        'Iki gikoresho gito cyemerera abanyeshuri kubaka roboti zabo mu gitondo kimwe.',
      body: `Ifatabuguzi rya roboti ryo mu buntu ryatanzwe iri cyumweru rigamije kwigisha abanyeshuri mu mashuri y’ingengo nto. Rigura munsi ya $50.

Abanyeshuri bashobora kubaka roboti ikora mu gitondo kimwe bakoresheje code y’ishusho.

"Dushaka gushimangira urusaku, ntabwo twibuza," ngo.`,
    },
    fr: {
      title: 'Un kit robotique open-source apporte la robotique en classe',
      excerpt:
        'Le kit abordable permet aux élèves de construire et programmer leurs propres robots en un après-midi.',
      body: `Un kit robotique open-source lancé cette semaine vise à rendre l'ingénierie accessible aux écoles à petit budget. Il coûte moins de 50 $.

Les élèves peuvent assembler et programmer un robot en un après-midi via une interface visuelle.

« Nous voulons éveiller la curiosité, pas la bloquer », a déclaré le créateur.`,
    },
  },
  {
    id: 'a17',
    category: 'technology',
    author: 'Omar Haddad',
    source: 'Tech Daily',
    readMins: 5,
    image: img('tech3'),
    time: '14 hr ago',
    en: {
      title: 'Scientists Unveil Battery That Charges in Five Minutes',
      excerpt:
        'The new solid-state design could reshape electric vehicles and portable electronics.',
      body: `Researchers demonstrated a solid-state battery that reaches 80% charge in five minutes while retaining a long lifespan.

The design uses a novel ceramic electrolyte that resists overheating, a common failure point.

If it scales, the technology could dramatically cut charging times for electric vehicles.`,
    },
    rw: {
      title: 'Abahanga bavuze batiriya ihuza mu minota itanu',
      excerpt:
        'Ubu bwubatsi bushya bwa solid-state bushobora guhindura imodoka z’amashanyarazi.',
      body: `Abashakashatsi berekanye batiriya ya solid-state igera 80% mu minota itanu ikagumana igihe kirekire.

Gikoresha electrolyte ya seramike nshya idahangira ubushyuhe.

Niba bikunda, tekinoroji ishobora kugabanya igihe cyo guhuza imodoka z’amashanyarazi.`,
    },
    fr: {
      title: 'Des scientifiques dévoilent une batterie qui se charge en cinq minutes',
      excerpt:
        'La nouvelle conception à l’état solide pourrait transformer les véhicules électriques.',
      body: `Des chercheurs ont présenté une batterie à l'état solide atteignant 80 % de charge en cinq minutes tout en conservant une longue durée de vie.

La conception utilise un électrolyte céramique novateur qui résiste à la surchauffe.

À grande échelle, cela pourrait réduire fortement les temps de charge des véhicules électriques.`,
    },
  },
  {
    id: 'a18',
    category: 'business',
    author: 'Helen Cho',
    source: 'Market Lens',
    readMins: 3,
    image: img('business2'),
    time: '15 hr ago',
    en: {
      title: 'Small Businesses Report Best Quarter in Years',
      excerpt:
        'A survey shows optimism among small firms climbing to a five-year high.',
      body: `A new survey found small business optimism at a five-year high, driven by strong sales and easing supply costs.

More than half of respondents said they plan to hire in the next six months.

"Main Street is feeling confident again," the report's author said.`,
    },
    rw: {
      title: 'Amacongere mato yatangaje igihembwe cyiza kuruta ibindi',
      excerpt:
        'Ubushakashatsi bwerekana ko amacongere mato yiyemeje ku rugero rwo hejuru mu myaka itanu.',
      body: `Ubushakashatsi bushya bwabonetse ko amacongere mato yiyemeje ku rugero rwo hejuru mu myaka itanu, biterwa no kugurisha no kugabanya ibiciro.

Barenga kimwe cya kabiri bavuze ko biteganya kwishamura mu myaka itanu.

"Main Street yiyumvira neza nanone," ngo.`,
    },
    fr: {
      title: 'Les petites entreprises rapportent leur meilleur trimestre depuis des années',
      excerpt:
        'Un sondage montre un optimisme des petites entreprises à un sommet de cinq ans.',
      body: `Un sondage révèle un optimisme des petites entreprises à un sommet de cinq ans, porté par de fortes ventes et des coûts en baisse.

Plus de la moitié prévoient d'embaucher dans les six mois.

« Main Street reprend confiance », a déclaré l'auteur.`,
    },
  },
  {
    id: 'a19',
    category: 'business',
    author: 'Omar Haddad',
    source: 'Market Lens',
    readMins: 4,
    image: img('business3'),
    time: '16 hr ago',
    en: {
      title: 'Green Energy Investments Hit New Global High',
      excerpt:
        'Renewable energy funding surpassed fossil fuels for the first time, according to a new report.',
      body: `Global investment in renewable energy surpassed spending on fossil fuels for the first time, a new report shows.

Solar and wind projects attracted the bulk of the funding, with developing nations seeing rapid growth.

"The momentum is undeniable," an energy analyst said.`,
    },
    rw: {
      title: 'Ishoramari mu ngufu z’ikirere ryageze hejuru ku isi',
      excerpt:
        'Ingengo ku ngufu z’ikirere yararenze inkunga ku bicanwa, nk’uko raporo nshya ivuga.',
      body: `Ishoramari ku ngufu z’ikirere ryarenze imari ku bicanwa ku nshuro ya mbere, raporo nshya yerekana.

Projeti za solar na wind zakuyemo umusoro mwinshi, ibihugu bikiri bikiri imbere byiyumva.

"Ikirenga ntigishobora gukanwa," ngo umwarimu w’ingufu.`,
    },
    fr: {
      title: 'Les investissements dans l’énergie verte atteignent un record mondial',
      excerpt:
        'Le financement des énergies renouvelables a dépassé les combustibles fossiles pour la première fois.',
      body: `L'investissement mondial dans les énergies renouvelables a dépassé les dépenses en combustibles fossiles pour la première fois.

Les projets solaires et éoliens ont attiré l'essentiel des fonds, les pays en développement connaissant une croissance rapide.

« L'élan est indéniable », a déclaré un analyste.`,
    },
  },
  {
    id: 'a20',
    category: 'health',
    author: 'Dr. Samuel Green',
    source: 'Wellness Today',
    readMins: 3,
    image: img('health2'),
    time: '17 hr ago',
    en: {
      title: 'New Guidelines Recommend More Sleep for Teens',
      excerpt:
        'Health experts say teenagers need up to ten hours of sleep for optimal development.',
      body: `Updated health guidelines recommend that teenagers get eight to ten hours of sleep per night for optimal brain development.

The guidelines link insufficient sleep to lower academic performance and higher stress.

"Prioritizing sleep is prioritizing health," the panel chair said.`,
    },
    rw: {
      title: 'Amabwiriza mashya asaba abany fundo kuruhukirwa',
      excerpt:
        'Abahanga mu buvuzi bavuga ko abany fundo bakeneye amasaha 10 yo gusinzira.',
      body: `Amabwiriza mashya y’ubuzima asaba abany fundo gukira amasaha 8 kugeza 10 buri joro yo gusinzira neza.

Amabwiriza ahana insinzira nto n’akaga ko kwiga no kubana n’ikibazo.

"Gusinzira neza ni no kwita ku buzima," ngo.`,
    },
    fr: {
      title: 'De nouvelles recommandations préconisent plus de sommeil pour les ados',
      excerpt:
        'Les experts de la santé affirment que les adolescents ont besoin jusqu’à dix heures de sommeil.',
      body: `Les nouvelles recommandations préconisent huit à dix heures de sommeil par nuit pour un développement cérébral optimal.

Elles relient le manque de sommeil à de moins bons résultats scolaires et à plus de stress.

« Prioriser le sommeil, c'est prioriser la santé », a déclaré la présidente.`,
    },
  },
  {
    id: 'a21',
    category: 'health',
    author: 'Nadia Farouk',
    source: 'Wellness Today',
    readMins: 4,
    image: img('health3'),
    time: '18 hr ago',
    en: {
      title: 'Mental Health Apps Gain Ground Among Young Adults',
      excerpt:
        'A growing number of young people are turning to apps for mindfulness and stress relief.',
      body: `Mental wellness apps are seeing a surge in downloads among young adults seeking accessible support for stress and anxiety.

Studies show modest but real benefits for users who engage consistently. Privacy remains a concern.

"Tools help, but human connection matters most," a psychologist noted.`,
    },
    rw: {
      title: 'Porogaramu z’ubuzima bw’ubwenge zishyira imbere ku bany fundo',
      excerpt:
        'Abany fundo benshi bakoresha porogaramu zo kuruhukirwa no guhangira ibibazo.',
      body: `Porogaramu z’ubuzima bw’ubwenge ziyongereye ku bany fundo bakeneye inkunga ku bibazo byo kwihangira.

Ubushakashatsi bwerekana ko nyinshi nyazo zifite abakoresha buri gihe. Ibwenge biracya kwitwaho.

"Ibikoresho bifasha, ariko isano y’abantu ni cyo cyingenzi," ngo.`,
    },
    fr: {
      title: 'Les applications de santé mentale gagnent du terrain chez les jeunes adultes',
      excerpt:
        'De plus en plus de jeunes se tournent vers des applications de pleine conscience et de gestion du stress.',
      body: `Les applications de bien-être mental connaissent un essor de téléchargements chez les jeunes adultes en quête de soutien.

Les études montrent des bénéfices modestes mais réels pour les utilisateurs réguliers. La confidentialité reste une préoccupation.

« Les outils aident, mais le lien humain compte le plus », a noté un psychologue.`,
    },
  },
]

export const localizeArticle = (a, lang = 'en') => {
  if (!a) return a
  const pack = a[lang] || a.en
  return { ...a, title: pack.title, excerpt: pack.excerpt, body: pack.body }
}

export const localizeList = (list, lang = 'en') =>
  list.map((a) => localizeArticle(a, lang))

export const getArticles = (lang = 'en') => localizeList(articles, lang)

export const getArticleById = (id, lang = 'en') =>
  localizeArticle(articles.find((a) => a.id === id), lang)

export const getArticlesByCategory = (cat, lang = 'en') =>
  localizeList(
    cat === 'all' ? articles : articles.filter((a) => a.category === cat),
    lang
  )

export const searchArticles = (q, lang = 'en') => {
  const term = q.trim().toLowerCase()
  const pool = localizeList(articles, lang)
  if (!term) return pool
  return pool.filter(
    (a) =>
      a.title.toLowerCase().includes(term) ||
      a.excerpt.toLowerCase().includes(term) ||
      a.category.toLowerCase().includes(term) ||
      a.author.toLowerCase().includes(term)
  )
}

export const getTrending = (lang = 'en') =>
  localizeList(
    articles.filter((a) => a.trending),
    lang
  )

export const categoryLabel = (id, lang = 'en') =>
  categories.find((c) => c.id === id)?.names?.[lang] ||
  categories.find((c) => c.id === id)?.name ||
  id

export const trendingArticles = articles.filter((a) => a.trending)