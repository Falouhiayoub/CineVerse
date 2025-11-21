const movies = [
    {
        id: 1,
        image: "/movies/action/inffernno.jpg",
        acteurs: "Tom Hanks, Felicity Jones",
        decription: "peut faire référence au film de Ron Howard de 2016 avec Tom Hanks, qui suit un symbologiste amnésique à travers l'Europe pour contrecarrer une pandémie mondiale. Il peut aussi décrire un grand feu dévastateur, ou métaphoriquement un lieu de souffrance, « Enfer », tel que décrit dans l'œuvre de Dante",
        year: "2016",
        country: "USA",
        category: "Action"
    },
    {
        id: 2,
        image: "/movies/action/mission.jpg",
        acteurs: "Tom Cruise ",
        decription: "une série d'action-espionnage mettant en scène l'agent secret Ethan Hunt et son équipe de l'agence Impossible Missions Force (FMI)",
        year: "2025",
        country: "USA",
        category: "Action"
    },
    {
        id: 3,
        image: "/movies/action/split.jpg",
        acteurs: "James McAvoy, Anya Taylor-Joy",
        decription: "un thriller psychologique de M. Night Shyamalan sur Kevin, un homme atteint du trouble dissociatif de l'identité (TDI) qui a 23 personnalités distinctes. Il enlève trois adolescentes qu'il retient prisonnières, et celles-ci doivent trouver un moyen de s'échapper avant que sa 24e et dangereuse personnalité ne se manifeste",
        year: "2016",
        country: "USA",
        category: "Action"
    },
    {
        id: 4,
        image: "/movies/action/suc takimi.jpg",
        acteurs: "Gerard Butler, O'shea Jackson Jr",
        decription: "une unité d'élite des forces de l'ordre de Los Angeles s'opposant à une bande de braqueurs de banque très doués",
        year: "2018",
        country: "USA",
        category: "Action"
    },
    {
        id: 5,
        image: "/movies/arabic/filazra9.jpg",
        acteurs: " كريم عبد العزيز ونيللي كريم ",
        decription: "Le film, adapté du roman, est sorti en 2014 et met en vedette Karim Abdel Aziz, Nelly Karim et Khaled El Sawy. Ce fut un immense succès. L'histoire suit Yehia Rashed, un psychiatre qui reprend son travail à l'hôpital psychiatrique d'Abbasiya et découvre qu'un de ses patients est un vieil ami, ce qui l'entraîne dans un monde de mystère et de superstition. Une suite est sortie en 2019.",
        year: "2014",
        country: "Egypt",
        category: "Arabic"
    },
    {
        id: 6,
        image: "/movies/arabic/malwatabi3a.jpg",
        acteurs: "Razane Jammal, Ahmed Amin  ",
        decription: "L'histoire suit le Dr Refaat Ismaïl, un hématologue solitaire et cynique qui, malgré son scepticisme initial, se retrouve confronté à une série d'événements paranormaux, de fantômes et de mythes au cours de sa vie, remettant en question sa vision rationnelle du monde.",
        year: "2020",
        country: "Egypt",
        category: "Arabic"
    },
    {
        id: 7,
        image: "/movies/arabic/Rambo.jpg",
        acteurs: "Essam Omar, Rakeen Sadd ",
        decription: "Le film, réalisé par Khaled Mansour, raconte l'histoire de Hassan et de son meilleur ami, son chien nommé Rambo. Lorsque le chien attaque le propriétaire vengeur de Hassan, ce dernier doit fuir à travers Le Caire pour trouver un refuge sûr pour Rambo.",
        year: "2024",
        country: "Egypt",
        category: "Arabe"
    },
    {
        id: 8,
        image: "/movies/cartoons/bbepx.jpg",
        acteurs: "Edward Asner, Christopher Plummer",
        decription: "Le film de Pixar s'appelle Up (qui se traduit par En haut ou Là-haut), qui a remporté un Oscar. Son titre original en russe est d'ailleurs Вверх (Vverkh). Ce film met en scène un vieil homme qui attache des milliers de ballons à sa maison pour s'envoler.",
        year: "2025",
        country: "USA",
        category: "Cartoons"
    }, 
    {
        id: 9,
        image: "/movies/cartoons/home.jpg",
        acteurs: "Jim Parsons, Steve Martin",
        decription: "Le film de Pixar s'appelle Up (qui se traduit par En haut ou Là-haut), qui a remporté un Oscar. Son titre original en russe est d'ailleurs Вверх (Vverkh). Ce film met en scène un vieil homme qui attache des milliers de ballons à sa maison pour s'envoler.",
        year: "2015",
        country: "USA",
        category: "Cartoons"
    },
    {
        id: 10,
        image: "/movies/cartoons/luca.jpg",
        acteurs: "Jim Parsons, Steve Martin",
        decription: "Le film de Pixar s'appelle Up (qui se traduit par En haut ou Là-haut), qui a remporté un Oscar. Son titre original en russe est d'ailleurs Вверх (Vverkh). Ce film met en scène un vieil homme qui attache des milliers de ballons à sa maison pour s'envoler.",
        year: "201",
        country: "USA",
        category: "Cartoons"
    },
    {
        id: 11,
        image: "/movies/cartoons/peterpan.jpg",
        acteurs: "Jim Parsons, Steve Martin",
        decription: "Le film de Pixar s'appelle Up (qui se traduit par En haut ou Là-haut), qui a remporté un Oscar. Son titre original en russe est d'ailleurs Вверх (Vverkh). Ce film met en scène un vieil homme qui attache des milliers de ballons à sa maison pour s'envoler.",
        year: "2023",
        country: "USA",
        category: "Cartoons"
    },
    {
        id: 12,
        image: "/movies/remance/oneday.jpg",
        acteurs: "Jim Parsons, Steve Martin",
        decription: "Le film de Pixar s'appelle Up (qui se traduit par En haut ou Là-haut), qui a remporté un Oscar. Son titre original en russe est d'ailleurs Вверх (Vverkh). Ce film met en scène un vieil homme qui attache des milliers de ballons à sa maison pour s'envoler.",
        year: "2023",
        country: "USA",
        category: "Remance"
    },
    {
        id: 13,
        image: "/movies/remance/purplehearts.jpg",
        acteurs: "Jim Parsons, Steve Martin",
        decription: "Le film de Pixar s'appelle Up (qui se traduit par En haut ou Là-haut), qui a remporté un Oscar. Son titre original en russe est d'ailleurs Вверх (Vverkh). Ce film met en scène un vieil homme qui attache des milliers de ballons à sa maison pour s'envoler.",
        year: "2015",
        country: "USA",
        category: "Remance"
    }, 
    {
        id: 14,
        image: "/movies/remance/toutsauftoi.jpg",
        acteurs: "Jim Parsons, Steve Martin",
        decription: "Le film de Pixar s'appelle Up (qui se traduit par En haut ou Là-haut), qui a remporté un Oscar. Son titre original en russe est d'ailleurs Вверх (Vverkh). Ce film met en scène un vieil homme qui attache des milliers de ballons à sa maison pour s'envoler.",
        year: "2018",
        country: "USA",
        category: "Remance"
    },
     {
        id: 15,
        image: "/movies/action/themaze.jpg",
        acteurs: "Jim Parsons, Steve Martin",
        decription: "Le film de Pixar s'appelle Up (qui se traduit par En haut ou Là-haut), qui a remporté un Oscar. Son titre original en russe est d'ailleurs Вверх (Vverkh). Ce film met en scène un vieil homme qui attache des milliers de ballons à sa maison pour s'envoler.",
        year: "2018",
        country: "USA",
        category: "Action"
    },
     {
        id: 16,
        image: "/movies/action/themenu.jpg",
        acteurs: "Jim Parsons, Steve Martin",
        decription: "Le film de Pixar s'appelle Up (qui se traduit par En haut ou Là-haut), qui a remporté un Oscar. Son titre original en russe est d'ailleurs Вверх (Vverkh). Ce film met en scène un vieil homme qui attache des milliers de ballons à sa maison pour s'envoler.",
        year: "2018",
        country: "USA",
        category: "Action"
    }
]

export default movies
