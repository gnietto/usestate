const frasesCelebres = [
    {
      texto:
        'Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary',
      autor: 'Steve Jobs'
    },
    {
      texto:
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand',
      autor: 'Martin Fowler'
    },
    {
      texto:
        'A programmer is ideally an essayist who works with traditional aesthetic and literary forms as well as mathematical concepts, to communicate the way that an algorithm works and to convince a reader that the results will be correct',
      autor: 'Donald Knuth'
    },
    {
      texto:
        'The most disastrous thing that you can ever learn is your first programming language',
      autor: 'Alan Kay'
    },
    {
      texto:
        'Impossible is just a big word thrown around by small men who find it easier to live in the world they have been given than to explore the power they have to change it. Impossible is not a fact. It is an opinion. Impossible is not a declaration. It is a dare. Impossible is potential. Impossible is temporary. Impossible is nothing',
      autor: 'Muhammad Alí'
    },
    {
      texto:
        'The only way to do great work is to love what you do. If you have not found it yet, keep looking. Do not settle',
      autor: 'Steve Jobs'
    },
    {
      texto: 'The best coders understand the basics of coding, deeply.',
      autor: 'Fikayo Adepoju'
    },
    {
      texto:
        'There is only one thing that makes a dream impossible to achieve: the fear of failure.',
      autor: 'Paulo Coelho'
    },
    {
      texto: 'Talk is cheap. Show me the code.',
      autor: 'Linus Torvalds'
    },
    {
      texto:
        'Programs must be written for people to read, and only incidentally for machines to execute.',
      autor: 'Harold Abelson'
    },
    {
      texto:
        'I am not a great programmer, I am just a good programmer with great habits.',
      autor: 'Kent Beck'
    },
    {
      texto:
        'A language that does not affect the way you think about programming is not worth knowing',
      autor: 'Alan Perlis'
    },
    {
      texto:
        'Stupidity is knowing the truth, seeing the truth but still believing the lies. And that is more infectious than any other desease',
      autor: 'Richard Feynman'
    },
    {
      texto:
        'Object-oriented programming offers a sustainable way to write spaghetti code. It lets you accrete programs as a series of patches',
      autor: 'Paul Graham'
    },
    {
      texto: 'Work until your name becomes your CV.',
      autor: 'Prosper Otemuyiwa'
    },
    {
      texto:
        'Preguntarse cuándo los ordenadores podrán pensar es como preguntarse cuándo los submarinos podrán nadar.',
      autor: 'Edsger W. Dijkstra'
    },
    {
      texto:
        'Es ridículo vivir 100 años y sólo ser capaces de recordar 30 millones de bytes. O sea, menos que un compact disc. La condición humana se hace más obsoleta cada minuto.',
      autor: 'Marvin Minsky'
    },
    {
      texto: 'Hardware: las partes de un ordenador que pueden ser pateadas.',
      autor: 'Jeff Pesis'
    },
    {
      texto:
        "Por fin he entendido lo que significa 'upward compatible' (compatible hacia arriba). Significa que mantenemos todos nuestros viejos errores.",
      autor: 'Dennie van Tassel'
    },
    {
      texto:
        'Hay dos grandes productos que salieron de Berkeley: LSD y UNIX. No creemos que esto sea una coincidencia.',
      autor: 'Jeremy S. Anderson'
    },
    {
      texto:
        'La verdadera innovación a menudo viene de las pequeñas startups que son capaces de crear mercados pero carecen de peso para poseerlos.',
      autor: 'Timm Martin'
    },
    {
      texto:
        'El logro más impresionante de la industria del software es su continua anulación de los constantes y asombrosos logros de la industria del hardware.',
      autor: 'Henry Petroski'
    },
    {
      texto:
        'Hay dos maneras de diseñar software: una es hacerlo tan simple que sea obvia su falta de deficiencias, y la otra es hacerlo tan complejo que no haya deficiencias obvias.',
      autor: 'C.A.R. Hoare'
    },
    {
      texto:
        'La función de un buen software es hacer que lo complejo aparente ser simple.',
      autor: 'Grady Booch'
    },
    {
      texto:
        'La formación en informática no puede convertir a nadie en experto programador, de la misma forma que estudiar pinceles y pigmentos puede hacer a alguien un experto pintor.',
      autor: 'Eric Raymond'
    },
    {
      texto:
        'Life isn’t about getting and having, it’s about giving and being.',
      autor: 'Kevin Kruse'
    },
    {
      texto:
        'Un hacker puede ser capaz de producir, en unos pocos meses, algo que un pequeño grupo de desarrolladores (digamos de 7 u 8 personas) podría tener trabajado duramente juntos más de un año. IBM solía decir que ciertos programadores podían ser 100 veces más productivos que otros trabajadores, o más.',
      autor: 'Peter Seebach'
    },
    {
      texto:
        'Los mejores programadores no son sólo marginalmente mejores que los buenos. Se trata de un orden de magnitud mayor, medida por cualquier estándar: creatividad conceptual, velocidad, ingenio o habilidad para solucionar problemas.',
      autor: 'Randall E. Stross'
    },
    {
      texto:
        'Un gran operario de tornos vale varias veces más que un operario medio, pero un gran escritor de código vale 10.000 veces el precio de un desarrollador medio.',
      autor: 'Bill Gates'
    },
    {
      texto:
        'No te preocupes si no funciona bien. Si todo estuviera correcto, serías despedido de tu trabajo.',
      autor: 'Ley de Mosher de la Ingeniería del Software'
    },
    {
      texto: 'Primero resuelve el problema. Entonces, escribe el código.',
      autor: 'John Johnson'
    },
    {
      texto:
        'Primero aprende informática y toda la teoría. Después desarrolla un estilo de programación. Entonces, olvídalo todo y hackea.',
      autor: 'George Carrette'
    },
    {
      texto: "Iterar es humano, 'recursivar' es divino.",
      autor: 'L. Peter Deutsch'
    },
    {
      texto:
        'Lo mejor de los booleanos es que si te equivocas estás a un sólo bit de la solución correcta.',
      autor: 'Anónimo'
    },
    {
      texto:
        'Pienso que Microsoft eligió el nombre .Net para que no pudiera ser mostrado en un listado de directorio de Unix.',
      autor: 'Oktal'
    },
    {
      texto:
        'El uso de COBOL daña la mente. Su enseñanza debería ser considerada como un ataque criminal.',
      autor: 'Edsger W. Dijkstra'
    },
    {
      texto:
        'Es prácticamente imposible enseñar buenos hábitos de programación a estudiantes que hayan sido previamente sometidos a una exposición de BASIC. Como desarrolladores en potencia, están mentalmente mutilados sin esperanza de regeneración.',
      autor: 'Edsger W. Dijkstra'
    },
    {
      texto:
        'No hay lenguaje de programación, no importa su estructura, que impida que los programadores hagan malos programas.',
      autor: 'Larry Flon'
    },
    {
      texto:
        'Codifica siempre como si la persona que finalmente mantendrá tu código fuera un psicópata violento que sabe dónde vives.',
      autor: 'Martin Golding'
    },
    {
      texto:
        'Whatever the mind of man can conceive and believe, it can achieve.',
      autor: 'Napoleon Hill'
    },
    {
      texto:
        'Un experto es una persona que ha cometido todos los errores posibles en un determinado terreno.',
      autor: 'Niels Bohr'
    },
    {
      texto:
        'Los bulos (hoaxes) que circulan por internet usan la debilidad del ser humano para asegurar su replicación y distribución. En otras palabras, utilizan los resquicios del Sistema Operativo Humano.',
      autor: 'Stewart Kirkpatrick'
    },
    {
      texto:
        'Las organizaciones gastan millones de dólares en firewalls y dispositivos de seguridad, pero tiran el dinero porque ninguna de estas medidas cubre el eslabón más débil de la cadena de seguridad: la gente que usa y administra los ordenadores.',
      autor: 'Kevin Mitnick'
    },
    {
      texto: 'Strive not to be a success, but rather to be of value.',
      autor: 'Albert Einstein'
    },
    {
      texto:
        'Two roads diverged in a wood, and I—I took the one…raveled by, And that has made all the difference.',
      autor: 'Robert Frost'
    },
    {
      texto: 'I attribute my success to this: I never gave or took any excuse.',
      autor: 'Florence Nightingale'
    },
    {
      texto: 'You miss 100% of the shots you don’t take.',
      autor: 'Wayne Gretzky'
    },
    {
      texto:
        'I’ve missed more than 9000 shots in my career. I’ve over again in my life. And that is why I succeed.',
      autor: 'Michael Jordan'
    },
    {
      texto:
        'The most difficult thing is the decision to act, the rest is merely tenacity.',
      autor: 'Amelia Earhart'
    },
    {
      texto: 'Every strike brings me closer to the next home run.',
      autor: 'Babe Ruth'
    },
    {
      texto:
        'Definiteness of purpose is the starting point of all achievement.',
      autor: 'W. Clement Stone'
    },
    {
      texto:
        'No sabemos lo que queremos y aun así somos responsables de lo que somos. Eso es un hecho',
      autor: 'Jean Paul Sartre'
    },
    {
      texto: 'La creatividad requiere el coraje de dejar ir las certezas',
      autor: 'Erich Fromm'
    },
    {
      texto:
        'Tener un hijo, plantar un árbol y escribir un libro es fácil. Lo difícil es criar un niño, regar el árbol y que alguien lea el libro',
      autor: 'Anónimo'
    },
    {
      texto: 'Todos somos aficionados. La vida es tan corta que no da para más',
      autor: 'Charles Chaplin'
    },
    {
      texto:
        'La vida es una obra teatral que no importa cuánto haya durado, sino lo bien que haya sido representada',
      autor: 'Séneca'
    },
    {
      texto:
        'La perfección se logra no cuando no hay nada más que añadir, sino cuando no hay nada más que quitar',
      autor: 'Antoine de Saint-Exupéry'
    },
    {
      texto:
        'Lo que doy, me lo doy. Lo que no doy, me lo quito. Nada para mí que no sea para los otros',
      autor: 'Alejandro Jodorowsky'
    },
    {
      texto:
        'Se necesitan dos años para aprender a hablar, y sesenta para aprender a callar',
      autor: 'Ernest Hemingway'
    },
    {
      texto:
        'Es una locura odiar a todas las rosas porque una te pinchó. renunciar a todos tus sueños porque uno de ellos no se realizó',
      autor: 'El Principito'
    },
    {
      texto:
        'Nunca sabes lo fuerte que eres, hasta que ser fuerte es la única opción que te queda',
      autor: 'Bob Marley'
    },
    {
      texto:
        'En la vida hay algo peor que el fracaso: el no haber intentado nada',
      autor: 'Franklin D. Roosvelt'
    },
    {
      texto:
        'Pide y recibirás, busca y encontrarás; llama y se te abrirán las puertas',
      autor: 'Anónimo'
    },
    {
      texto:
        'El éxito no se mide en el dinero, sino en la diferencia que marca en las personas',
      autor: 'Michelle Obama'
    },
    {
      texto:
        'Si tú crees que puedes, puedes. Si tú crees que no puedes, no puedes. Tanto si piensas una cosa como la otra, estás en lo cierto',
      autor: 'Henry Ford'
    },
    {
      texto: 'No hay camino para la verdad, la verdad es el camino',
      autor: 'Mahatma Ghandi'
    },
    {
      texto: 'No hagas a los otros lo que no te gustaría que te hicieran a ti',
      autor: 'Confucio'
    },
    {
      texto:
        'Para ser feliz hay que vivir en guerra con las propias pasiones y en paz con las de los demás',
      autor: 'Séneca'
    },
    {
      texto:
        '¿Amas la vida? Pues no desperdicies el tiempo, porque es la sustancia de la que está hecha',
      autor: 'Benjamin Franklin'
    },
    {
      texto:
        'Una persona que ve la vida a los 50 años igual que a los 20, ha desperdiciado 30 años de vida',
      autor: 'Muhammad Alí'
    },
    {
      texto:
        'En el mundo del software, los activos más importantes de la compañía se van a casa todas las noches. Si no se les trata bien, pueden no volver al día siguiente',
      autor: 'Peter Chang'
    },
    {
      texto:
        'Si piensas que la tecnología puede solucionar tus problemas de seguridad, está claro que ni entiendes los problemas ni entiendes la tecnología',
      autor: 'Bruce Schneier'
    },
    {
      texto:
        'Hay únicamente dos problemas realmente duros en informática: el primero es la invalidación de cachés, y el segundo darles nombres apropiados a las cosas',
      autor: 'Phil Karlton'
    },
    {
      texto:
        'Una documentación voluminosa es parte del problema, no de la solución',
      autor: 'Tom DeMarco'
    },
    {
      texto:
        'Compatibilidad significa repetir deliberadamente los errores de otras personas',
      autor: 'David Wheeler'
    },
    {
      texto:
        'Estas máquinas no tienen sentido común; todavía no han aprendido a pensar, sólo hacen exactamente lo que se les ordena, ni más ni menos. Este hecho es el concepto más difícil de entender la primera vez que se utiliza un ordenador',
      autor: 'Donald Knuth'
    },
    {
      texto:
        'La última prueba que me gustaría proponerle para medir la usabilidad es realmente simple: si el sistema fuera una persona, ¿cuánto tiempo tardarías en golpearle en la nariz?',
      autor: 'Tom Carey'
    },
    {
      texto:
        'La base de usuarios de sistemas criptográficos fuertes se reduce a la mitad por cada pulsación de tecla o click de ratón requerido para hacerlos funcionar',
      autor: 'Carl Ellison'
    },
    {
      texto: 'Una solución elegante a un problema incorrecto no resuelve nada',
      autor: 'M. Bryce'
    },
    {
      texto:
        'Hay tres maneras de adquirir sabiduría: primero, por la reflexión, que es la más noble; segundo, por imitación, que es la más sencilla; y tercero, por la experiencia, que es la más amarga',
      autor: 'Confucio'
    },
    {
      texto: 'No hay parche que corrija la estupidez',
      autor: 'Kevin Mitnick'
    },
    {
      texto:
        'Sólo los necios aprenden exclusivamente de sus propios errores; los sabios observan también los errores de otros',
      autor: 'Otto von Bismarck'
    }
  ];

export default frasesCelebres;
