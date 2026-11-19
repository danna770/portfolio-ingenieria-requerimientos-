// Portafolio Completo de Ingeniería de Requerimientos - Dana Graziano
// Separado explícitamente en Trabajos Individuales (11) y Trabajos Grupales - Grupo 6 (5) según el cronograma de UAI Ultra.

const PORTFOLIO_WORKS = [
  // =========================================================================
  // TRABAJOS INDIVIDUALES (11 TRABAJOS)
  // =========================================================================

  // 1. SIMULACIÓN 1: MARTÍN FERRARO (INDIVIDUAL)
  {
    id: "sim-martin-ferraro",
    number: "Individual 01",
    modality: "individual",
    modalityLabel: "👤 Trabajo Individual · Dana Graziano",
    category: "simulaciones",
    categoryLabel: "Simulación con IA + Documentación",
    isSimulation: true,
    sourceFile: "archivos/IRSimulacion.txt",
    sourceFileName: "IRSimulacion.txt",
    title: "Simulación de Entrevista #1: Martín Ferraro (CEO de Mercury S.A.)",
    subtitle: "Visión ejecutiva, experiencia de usuario y elicitación inicial de la App de Logística (Entrega Individual)",
    previewSummary: "Entrevista interactiva con IA asumiendo el rol de Analista Funcional frente a Martín Ferraro, CEO de Mercury S.A. Se indaga en la visión, experiencia sin fricción, terminología de marca ('Cliente Mercury', 'Aliado logístico' y estados evocadores) y se documenta la minuta junto a los RF 001–011 y RNF 001 bajo norma ISO/IEC/IEEE 29148.",
    highlights: [
      "Entrega Individual",
      "Conversación con IA (CEO)",
      "Minuta de Entrevista",
      "11 RF + 1 RNF (ISO 29148)"
    ],
    chatTeaser: "Martín Ferraro (CEO): «Quiero una app que no solo resuelva problemas, sino que sorprenda y deleite... La magia es eliminar fricción, que todo fluya sin esfuerzo.»",
    interviewee: {
      name: "Martín Ferraro",
      role: "CEO de Mercury S.A.",
      initials: "MF",
      studentRole: "Dana Graziano · Analista Funcional"
    },
    scenarioText: `La empresa Mercury S.A., dedicada a servicios de logística y distribución en entornos urbanos, ha decidido desarrollar una nueva aplicación móvil que permita a sus clientes realizar el seguimiento en tiempo real de los pedidos, gestionar reclamos y calificar el servicio recibido. El sistema también debe integrarse con las operaciones internas para facilitar la asignación de rutas, el control de entregas y la retroalimentación de los repartidores. El/la estudiante asume el rol de Analista Funcional dentro del equipo consultor externo contratado por Mercury S.A. para llevar a cabo entrevistas efectivas, detectar ambigüedades y documentar requerimientos según el estándar IEEE / ISO 29148.`,
    chatMessages: [
      {
        sender: "ai",
        name: "Martín Ferraro (CEO · IA)",
        text: "Hola, mi nombre es Martín Ferraro. Quiero que pienses en grande. Imagina una app que no solo resuelva problemas, sino que sorprenda y deleite. Necesito escuchar tus primeras ideas sobre cómo lograr que esta aplicación sea intuitiva, elegante y que haga sentir al cliente que está usando algo mágico. No quiero listas técnicas. Háblame de impacto, experiencia y visión. ¿Por dónde empezarías?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Buenas tardes. ¿Cuáles son los principales problemas que busca resolver? ¿Cuáles son las características que permitirán que la aplicación \"sorprenda y deleite\"? ¿Con hacer sentir al cliente que está usando algo mágico se refiere a que la aplicación sea intuitiva? ¿Y qué más? ¿Podría contarme sobre el impacto, experiencia y visión de la empresa antes de definir las de la aplicación?"
      },
      {
        sender: "ai",
        name: "Martín Ferraro (CEO · IA)",
        text: "Mira, el problema es simple pero profundo: hoy pedir algo, esperar y no saber qué pasa genera ansiedad y desconfianza. Quiero que el cliente se sienta seguro, importante. La app debe anticipar necesidades, no solo contestar dudas. Sorprende cuando es invisible y eficiente, como un asistente que te lee la mente. Para mí, la magia es eliminar fricción, que todo fluya sin esfuerzo. Elegancia significa no recargar, solo mostrar lo esencial. El impacto: transformar el modo en que los clientes perciben nuestra marca. La experiencia: placer y facilidad, no frustración. La visión: ser líderes porque ofrecemos algo que otros ni imaginan. ¿Puedes traducir esto en requerimientos concretos sin perder esa esencia?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Okey, querría una aplicación que permita todo el seguimiento de un paquete para generar más confianza en el usuario, la aplicación debe enviarle notificaciones al cliente sobre el seguimiento y permitirle visualizar el estado de envío del mismo. ¿Es correcto, vinculado a ello, cree necesario agregar más funcionalidades en la aplicación? Menciona que la app debe anticipar necesidades, podría permitir al usuario conectarse con un operador para realizar dudas sobre su paquete; ¿está de acuerdo con esto? Por lo que menciona la aplicación debe ser fácil de usar y tener lo esencial, esta debe permitirle al usuario acceder a la aplicación con su correo electrónico, ingresando un pin; luego, deberá ver una solapa o pantalla/interfaz donde diga algo como \"Mis pedidos\", donde al clickear pueda visualizar sus pedidos y al acceder una línea con los diferentes estados del pedido, tales como: En preparación, esperando a ser despachado, pedido en camino, pedido entregado. Además, si desea que para eliminar la fricción y que todo fluya sin esfuerzo, en la misma pantalla/interfaz, le debería aparecer al usuario un rango horario en el que le llegará el pedido cuando este está siendo enviado, por otro lado, cuando el paquete está esperando a ser despachado al usuario le debería aparecer en el mismo lugar un rango de días en el que probablemente recibirá su paquete. Debajo de la línea de estado del pedido que visualiza el cliente, podría haber un botón que exprese de forma clara que sirve para comunicarse con un operador. Exprese, por favor, si está de acuerdo con estas ideas para luego transformarlos en requerimientos concretos, mencionando qué agregaría, modificaría, con cuáles ideas de las mencionadas está de acuerdo y con cuáles no en caso de que las haya. Gracias."
      },
      {
        sender: "ai",
        name: "Martín Ferraro (CEO · IA)",
        text: "Me gusta la dirección: seguimiento claro, notificaciones precisas, acceso sencillo. Pero cuidado, no quiero una app \"genérica de paquetería\". Lo de anticipar horarios me parece clave, pero debe sentirse instantáneo, no \"estimado\". El contacto con operador está bien, pero ¿y si la app resuelve el 90% de dudas sin intervención humana? Quiero que el usuario sienta que Mercury lo entiende antes de preguntar. Visualiza esto: abres la app y ya sabes dónde está tu pedido, cuándo llega y si hay algún problema, todo sin buscar. Elegancia significa que el usuario no piense en cómo navegar, solo lo disfruta. ¿Cómo harías para que la interacción sea mínima y el valor máximo? Dame ideas para sorprender, no solo para informar."
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Entonces, la aplicación no tendrá asistencia humana como la de un operador, y el resto de funcionalidades son las ya mencionadas. A diferencia de los rangos de fecha que mencioné no van a ser estimados sino precisos. ¿La aplicación está destinada solo a los compradores o también al equipo de logística? En caso de estar orientado también a los empleados, al loguearse la aplicación identificará al tipo de usuario y lo redireccionará a \"su aplicación\", será diferente la del comprador a la del empleado. La del usuario que solicita el pedido será como ya mencionamos y la del empleado en la pantalla principal tendrá tres botones que derivarán a diferentes interfaces/pantallas/visualizaciones, estas serán 3: Asignación de ruta, control de entrega y retroalimentación (comentarios para mejorar ya sea en aspectos de software o de logística). Exprese si está de acuerdo y si realmente debe existir este otro usuario (empleado) que menciono. Por otro lado, le pregunto, ¿existen prioridades claras sobre la aplicación, errores que no debe cometer o funcionalidades que considera indispensables o situaciones que hay que evitar que ocurran? ¿Existen restricciones que conozca sobre la comunicación o flujo de información en los procesos de entrega? ¿Existe un lugar donde se encuentre toda esta información?"
      },
      {
        sender: "ai",
        name: "Martín Ferraro (CEO · IA)",
        text: "¡Excelente, vas por buen camino! Quiero claridad: la app es para ambos, clientes y empleados, pero cada experiencia debe sentirse única. Piensa en el usuario como protagonista; el empleado también merece una herramienta elegante, no un panel aburrido. Prioridad número uno: que ningún usuario dude sobre qué hacer o dónde mirar. Error imperdonable: confusión, espera innecesaria, información duplicada o dispersa. Indispensable: notificaciones relevantes, interacción mínima, sensación de control. Restricciones hay, sí: privacidad, tiempos reales, nada de datos viejos o genéricos. No existe un \"manual\" en Mercury; reinventamos procesos. Tu reto es capturar esa esencia sin perder foco en lo fundamental: experiencia superior, fluidez y precisión. ¿Puedes resumir la esencia en tres frases, como si fuesen el lema de la app?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Okey, debe haber una fuente de datos única para que no haya información duplicada, debe haber una separación de funciones clara en la que se defina quién carga cada tipo de información, la aplicación se debe actualizar en tiempo real para ambos tipos de usuarios y si el envío del pedido se atrasa debe aparecer en la aplicación con la nueva fecha de entrega y el comprador debe recibir una notificación que mencione el suceso imprevisto, este mensaje debe ser empático."
      },
      {
        sender: "ai",
        name: "Martín Ferraro (CEO · IA)",
        text: "Perfecto. Quiero que la app actúe como un piano bien afinado: cada nota (dato) es única y aporta armonía, nunca ruido. Empatía en los mensajes, actualización en tiempo real, y roles claros, eso es básico. Ahora, dime: ¿cómo asegurarías que la experiencia nunca se vuelva monótona ni repetitiva, incluso cuando ocurren imprevistos? Dame una idea que haga que el usuario se sienta acompañado, no solo informado."
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "La experiencia no se volverá monótona porque el usuario sabrá siempre el estado de su paquete, se le comunicará todo de forma clara y haciéndole sentir que su experiencia es lo más importante para Mercury. Gracias por el tiempo dedicado, hasta acá es suficiente."
      },
      {
        sender: "ai",
        name: "Martín Ferraro (CEO · IA)",
        text: "Has entendido la esencia. Te agradezco el foco en la experiencia, no solo en la información. Pero recuerda: la verdadera magia está en sorprender, incluso cuando el proceso es rutinario. Piensa en la app como un amigo que acompaña, no como un calendario. Si lo logras, Mercury será memorable. Me gusta tu actitud, pero nunca te conformes con lo suficiente. ¡Hasta luego!"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Últimas aclaraciones, ¿está de acuerdo con llamar a los diferentes usuarios Empleado y Comprador o los considera nombres genéricos?"
      },
      {
        sender: "ai",
        name: "Martín Ferraro (CEO · IA)",
        text: "Los nombres genéricos no cuentan historias. Prefiero algo que refleje el rol y la personalidad de cada usuario. \"Comprador\" suena frío; busquemos algo como \"Cliente Mercury\" o \"Protagonista\". \"Empleado\" puede ser \"Experto\" o \"Aliado logístico\". Quiero que cada usuario se sienta valorado y parte de algo más grande. La terminología debe inspirar, no solo describir. ¿Tienes propuestas que transmitan esa idea de excelencia y pertenencia?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "¿Cómo desea denominar estos estados, falta alguno? En preparación, esperando a ser despachado, pedido en camino, pedido entregado."
      },
      {
        sender: "ai",
        name: "Martín Ferraro (CEO · IA)",
        text: "Los estados que mencionas van al grano, pero quiero que sean más evocadores, menos técnicos. \"En preparación\" podría ser \"Tu pedido está tomando forma\"; \"Esperando a ser despachado\" es muy frío, prefiero \"Listo para partir\". \"Pedido en camino\" me gusta, pero tal vez \"Llegando a ti\"; \"Pedido entregado\" debería ser \"¡Mercury cumplió!\". No quiero que el usuario vea sólo etapas, quiero que sienta avance y conexión. ¿Falta alguno? Si surge un imprevisto, deberíamos agregar \"Atención especial\" para transmitir que estamos ocupándonos personalmente. Piensa en mensajes que le hablen al corazón, no sólo a la mente."
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Genial, ¿el cliente debe poder ingresar feedback?"
      },
      {
        sender: "ai",
        name: "Martín Ferraro (CEO · IA)",
        text: "Por supuesto. El feedback del cliente es oro: permite afinar la experiencia, detectar señales débiles y transformar errores en oportunidades. Pero quiero que sea sencillo, directo, casi invisible. Que el usuario lo dé sin pensarlo, como dejar un aplauso o una sugerencia. No formularios interminables ni encuestas tediosas. El feedback debe ser una vía de comunicación real, que haga sentir al cliente que su voz tiene impacto. ¿Cómo garantizarías que ese feedback sea útil y genere acción, no solo datos?"
      }
    ],
    documentationHtml: `
      <div class="doc-section">
        <span class="doc-section-title">1. Informe o Minuta de la Entrevista</span>
        <p><strong>Objetivo de la reunión:</strong> Obtener los requerimientos para desarrollar una aplicación intuitiva y con actualización en tiempo real con dos tipos de usuario: Cliente, representado con el nombre <em>"Cliente Mercury"</em> en la aplicación, y el Empleado que se visualizará como <em>"Aliado logístico"</em>. Es una aplicación de logística y distribución en entornos urbanos que le debe permitir a los clientes visualizar el estado de su paquete, desde la preparación del pedido hasta su entrega; también debe poder expresar cómo fue su experiencia. Por otro lado, los empleados de logística deben poder visualizar las rutas que tienen asignadas, registrar las entregas como forma de control y generar feedback para la aplicación.</p>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Necesidades, Deseos y Expectativas del CEO</span>
        <ul class="doc-list">
          <li>El CEO, Martín Ferraro, busca obtener una aplicación de logística que no sea genérica; sin embargo, debe ser intuitiva y anticipar las necesidades de los usuarios.</li>
          <li>Se debe utilizar la terminología propuesta por el CEO para los estados del pedido: <strong>"Tu pedido está tomando forma"</strong>, <strong>"Listo para repartir"</strong> (o <em>Listo para partir</em>), <strong>"Llegando a ti"</strong> y <strong>"¡Mercury cumplió!"</strong>. Si surge algún imprevisto con la entrega del pedido, el estado debe figurar como <strong>"Atención especial"</strong>.</li>
          <li>Los nombres de los perfiles de usuario deben ser <strong>Cliente Mercury</strong> y <strong>Aliado logístico</strong>.</li>
        </ul>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Principales Problemas Identificados</span>
        <ul class="doc-list">
          <li>La espera de pedidos genera ansiedad y desconfianza en los clientes por falta de información precisa.</li>
          <li>La información actual se encuentra desactualizada y duplicada.</li>
        </ul>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">2. Especificación de Requerimientos (ISO/IEC/IEEE 29148)</span>
        <p><strong>Requerimientos Funcionales (RF):</strong></p>
        <div class="req-grid">
          <div class="req-item"><span class="req-code">RF 001</span><p>La aplicación debe notificar al cliente el estado de su pedido cada vez que se actualice en la aplicación.</p></div>
          <div class="req-item"><span class="req-code">RF 002</span><p>La aplicación debe permitir a los usuarios acceder con su email.</p></div>
          <div class="req-item"><span class="req-code">RF 003</span><p>La aplicación debe redireccionar al usuario a la UI correspondiente según su rol (Cliente Mercury o Aliado logístico).</p></div>
          <div class="req-item"><span class="req-code">RF 004</span><p>El cliente debe poder visualizar un apartado con sus pedidos y el estado de cada uno.</p></div>
          <div class="req-item"><span class="req-code">RF 005</span><p>El estado de cada pedido debe visualizarse en una línea recta como: <em>Tu pedido está tomando forma</em>, <em>Listo para repartir</em>, <em>Llegando a ti</em>, <em>¡Mercury cumplió!</em>. Si surge algún imprevisto con la entrega del pedido el estado debe figurar como <em>"Atención especial"</em>.</p></div>
          <div class="req-item"><span class="req-code">RF 006</span><p>El sistema debe mostrar al Cliente Mercury la fecha y el rango horario preciso de entrega del pedido.</p></div>
          <div class="req-item"><span class="req-code">RF 007</span><p>El sistema debe recalcular y mostrar la nueva fecha de entrega ante un imprevisto, enviando automáticamente una notificación explicativa al Cliente Mercury.</p></div>
          <div class="req-item"><span class="req-code">RF 008</span><p>El sistema debe permitir al Cliente Mercury enviar feedback del servicio.</p></div>
          <div class="req-item"><span class="req-code">RF 009</span><p>El sistema debe permitir al repartidor (Aliado logístico) visualizar las rutas que tiene asignadas.</p></div>
          <div class="req-item"><span class="req-code">RF 010</span><p>El repartidor debe poder registrar los pedidos entregados.</p></div>
          <div class="req-item"><span class="req-code">RF 011</span><p>El repartidor debe poder enviar feedback sobre la aplicación.</p></div>
        </div>
        <p style="margin-top: 18px;"><strong>Requerimientos No Funcionales (RNF):</strong></p>
        <div class="req-grid">
          <div class="req-item rnf-item"><span class="req-code">RNF 001</span><p>Los datos que se visualizan en la aplicación se deben actualizar en tiempo real.</p></div>
        </div>
      </div>
    `
  },

  // 2. SIMULACIÓN 2: LUCÍA SAN JUAN (INDIVIDUAL)
  {
    id: "sim-lucia-sanjuan",
    number: "Individual 02",
    modality: "individual",
    modalityLabel: "👤 Trabajo Individual · Dana Graziano",
    category: "simulaciones",
    categoryLabel: "Simulación con IA + Documentación",
    isSimulation: true,
    sourceFile: "archivos/IR_simulacion.txt",
    sourceFileName: "IR_simulacion.txt",
    title: "Simulación de Entrevista #2: Lucía San Juan (Gerente de Administración y Finanzas)",
    subtitle: "Facturación masiva, conciliación automática de pagos, reportes BI e integración móvil en Mercury S.A. (Entrega Individual)",
    previewSummary: "Entrevista de elicitación con Lucía San Juan (Gerente de Finanzas de Mercury S.A.) enfocada en resolver cuellos de botella administrativos: lotes de hasta 1000 facturas en menos de 5 minutos, conciliación automática de pagos, dashboards de Inteligencia de Negocios por zona y período, y especificación detallada de 20 RF y 4 RNF.",
    highlights: [
      "Entrega Individual",
      "Conversación con IA (Finanzas)",
      "Conciliación y Lotes de 1000 Facturas",
      "20 RF + 4 RNF"
    ],
    chatTeaser: "Lucía San Juan (Finanzas): «Un lote de hasta 1000 facturas debe estar procesado en menos de 5 minutos, del principio al fin, con todos los datos verificados y sin duplicidades.»",
    interviewee: {
      name: "Lucía San Juan",
      role: "Gerente de Administración y Finanzas · Mercury S.A.",
      initials: "LS",
      studentRole: "Dana Graziano · Analista Funcional"
    },
    scenarioText: `Entrevista individual con Lucía San Juan, Gerente de Administración y Finanzas de Mercury S.A., dentro del proceso de elicitación de requerimientos para integrar la nueva aplicación móvil con el sistema de gestión administrativa, facturación, cobranzas y reportes de inteligencia de negocios.`,
    chatMessages: [
      {
        sender: "ai",
        name: "Lucía San Juan (Finanzas · IA)",
        text: "Hola, mi nombre es Lucía San Juan. Soy la gerente de administración de finanzas de Mercury S.A. y sinceramente no estoy conforme con el sistema actual. Espero nuevas funcionalidades que faciliten la registración rápida de las operaciones con facturas, el ingreso de pagos y, sobre todo, reportes inteligentes y útiles para la toma de decisiones. Todo esto debe integrarse perfectamente con la aplicación móvil, no quiero errores ni demoras porque ya tuvimos suficientes problemas antes. Quiero que el desarrollo avance urgente y pienso controlar cada uno de los prototipos que presenten, porque no confío del todo después de nuestras malas experiencias. Estoy lista para la entrevista, pero no tengo demasiado tiempo, así que vamos al grano. ¿Qué necesitas saber para arrancar?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Buenas tardes, mi nombre es Dana. Empecemos con la entrevista. El objetivo de la entrevista es agregar nuevas funcionalidades al sistema ya existente, se deberán revisar las funcionalidades viejas y eliminar aquellas que sean sustituidas o que no sean necesarias ni deseadas en el sistema. Además debemos integrar el sistema ya existente a la aplicación móvil. ¿Estás de acuerdo con el objetivo? ¿Crees que va más allá de lo que mencioné?"
      },
      {
        sender: "ai",
        name: "Lucía San Juan (Finanzas · IA)",
        text: "Perfecto, Dana. Estoy de acuerdo, pero quiero dejar claro algo: para mí lo fundamental es que no se repitan los errores del pasado y que todas las funcionalidades realmente funcionen como deben, sin procesos engorrosos ni pasos innecesarios. Además de lo que mencionaste, quiero insistir en que los reportes de inteligencia de negocios sean automáticos, no sólo listados básicos, sino con indicadores clave y gráficos útiles. Y no pienso esperar eternamente: necesito un cronograma claro, entregas parciales y ver cada prototipo antes de que avancen. Si no vas a garantizar todo esto, prefiero saberlo ya. ¿Por dónde empezás la revisión del sistema existente?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Primero, los reportes de inteligencia de negocio deberán tener indicadores clave y gráficos que reflejen el contenido. ¿Cuál es ese contenido y de dónde se recupera?"
      },
      {
        sender: "ai",
        name: "Lucía San Juan (Finanzas · IA)",
        text: "Dana, el contenido que necesito en los reportes debe salir de nuestro sistema de gestión: operaciones de facturación, ingresos de pagos, cuentas por cobrar, morosos, flujo de caja, comisiones de repartidores y cualquier dato que ayude a tomar decisiones rápidas. Todo esto tiene que actualizarse automáticamente. Los datos provienen tanto del sistema actual como de la nueva app—o sea, necesito que ambos se integren perfectamente para no tener varios registros. Y quiero ver desgloses por cliente, repartidor, zona y periodo. ¿Lo tienen claro? ¿Me podés asegurar que esa información va a estar disponible en los reportes desde un inicio y no me van a salir con 'eso viene en la próxima versión' como siempre?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Te pido por favor que me responda primero lo que le solicito para mantener el orden en la entrevista, gracias. ¿Cuáles son las funcionalidades que no están bien desarrolladas o procesos que no se llevan a cabo como usted querría? ¿Para qué son las nuevas funcionalidades que necesita agregar? Menciona el desglose en cliente, repartidor, zona y periodo. Cliente y repartidor son perfiles de usuario. ¿Qué son zona y periodo?"
      },
      {
        sender: "ai",
        name: "Lucía San Juan (Finanzas · IA)",
        text: "Te respondo por partes, Dana, porque tengo muy claro lo que no funciona: registrar facturas es lento y manual, muchos campos se duplican o hay que corregir errores, además cuando ingresan pagos no se asocian automáticamente a las facturas correspondientes y perdemos tiempo conciliando. Por eso quiero módulos ágiles que automaticen esa tarea y que los reportes sean inmediatos, no con demora ni pendientes de exportar datos a Excel como ahora. Las nuevas funcionalidades que exijo son: carga rápida y masiva de facturas, conciliación automática de pagos, dashboard de inteligencia de negocios (con gráficos e indicadores claros de cobros, morosos, comisiones, etc.) y todo esto integrado con la app móvil.\n\nRespecto a \"zona\" me refiero al área geográfica de cobertura (barrios, ciudades, regiones donde operamos) porque necesito analizar rendimientos por zona. \"Periodo\" es el tiempo del reporte: diariamente, semanal, mensual, anual, o personalizado. ¿Te queda claro así o necesitás más detalle?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "¿A qué te referís específicamente con conciliación automática de pagos?"
      },
      {
        sender: "ai",
        name: "Lucía San Juan (Finanzas · IA)",
        text: "Conciliación automática de pagos significa que, cuando un cliente realice un pago—ya sea transferencia, tarjeta o efectivo—el sistema debería detectar ese ingreso y asociarlo automáticamente a la factura correspondiente, sin que nadie tenga que hacer el cruce manual. Si el cliente paga varias facturas juntas, el sistema tiene que poder reconocer a qué facturas corresponde ese monto y dar por saldadas las que estén completas, dejando las otras pendientes parcial o totalmente, según corresponda. Yo no quiero más tareas repetitivas, ni errores por pasar datos a mano. ¿Se puede garantizar esto desde el inicio o vamos a tener que esperar que a alguien se le ocurra sumar esa función después?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "¿A qué cantidad de facturas te referís con carga masiva de facturas?"
      },
      {
        sender: "ai",
        name: "Lucía San Juan (Finanzas · IA)",
        text: "Cuando digo carga masiva de facturas, me refiero mínimo a cientos a la vez, no menos de 200 por operación, y que no se trabe el sistema ni tengamos que dividir en tandas como ahora. A veces, en fechas de cierre, llegamos a más de mil facturas en un solo día, así que no quiero limitaciones técnicas ni excusas de \"se saturó\". El sistema debe soportarlo y procesarlas en minutos, con todos los campos validados y sin errores de duplicidad. ¿Eso lo están contemplando desde ya o van a decir después que no estaba en el alcance?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "¿El sistema debe procesar un lote de hasta 1000 facturas en un tiempo inferior a cuánto?"
      },
      {
        sender: "ai",
        name: "Lucía San Juan (Finanzas · IA)",
        text: "No voy a negociar con los tiempos: un lote de hasta 1000 facturas debe estar procesado en menos de 5 minutos, del principio al fin, con todos los datos verificados y confirmados en el sistema, sin errores de validación ni duplicidades. Si eso no lo pueden garantizar, avísame ya porque lo voy a exigir desde la primera prueba. ¿Te quedó claro el requerimiento?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Mencioná puntualmente las características o funcionalidades que deben estar integradas con la aplicación."
      },
      {
        sender: "ai",
        name: "Lucía San Juan (Finanzas · IA)",
        text: "Bien, te lo detallo bien claro y concreto: 1) Consulta y emisión de facturas desde la app, 2) registro automático de pagos recibidos por móvil (por ejemplo, que el repartidor confirme el cobro y eso quede volcado al sistema central en el momento), 3) visualización de reportes clave e indicadores para la gestión (cobros, morosos, comisiones, facturación por zona y por período), 4) actualizaciones en tiempo real del estado de facturas y pagos, 5) notificaciones automáticas a clientes y al área administrativa ante cobranzas o incidencias, y 6) carga de comprobantes o fotos de factura/pago desde la propia app. Todo esto quiero que sea 100% integrado: nada de tener que cargar datos por separado ni de esperar a que \"sincronicen\" después. ¿Lo tomás nota?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Profundizá en qué tipo de usuario (cliente o repartidor) tienen el campo zona y periodo y qué representan cada uno. ¿A cuánto tiempo exacto de demora te referís con carga rápida?"
      },
      {
        sender: "ai",
        name: "Lucía San Juan (Finanzas · IA)",
        text: "Te aclaro: el campo \"zona\" lo usa tanto el repartidor como el cliente, porque necesito analizar dónde se hacen las entregas, cuáles zonas rinden más y dónde hay más problemas de cobranza. Por ejemplo, si un repartidor trabaja mayormente en una zona específica, quiero poder ver sus resultados diferenciados. Lo mismo aplica para el cliente, hay empresas y particulares que concentran operaciones en distintas zonas. \"Periodo\" es para filtrar información por días, semanas, meses o el rango que yo defina, y eso debe estar disponible tanto para los reportes de usuario cliente como repartidor, según el análisis que quiera hacer.\n\nEn cuanto a \"carga rápida\", es sencillo: si hablo de cargar una sola factura, quiero que tarde menos de 3 segundos desde que envío la información hasta que queda registrada y confirmada. Si es carga masiva, ya te aclaré antes: mil facturas deben procesarse en menos de cinco minutos, y una sola factura no puede demorar ni medio café. No hay margen para quedarse esperando frente a la pantalla, quiero agilidad real, no promesas."
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Decime de forma clara los campos que debe tener visible el cliente y cuál el repartidor."
      },
      {
        sender: "ai",
        name: "Lucía San Juan (Finanzas · IA)",
        text: "Muy concreto: para el cliente, los campos que debe ver en la app son: número de factura, importe, estado de pago (pendiente, pagada, vencida), fecha de emisión, fecha de vencimiento, zona de entrega, historial de pagos asociados, y posibilidad de descargar el comprobante. Para el repartidor: lista de facturas a entregar/cobrar, zona asignada, nombre del cliente, importe, estado actual (entregado, cobrado, pendiente), y campo para confirmar el cobro o cargar comprobante (foto). Los repartidores no deben ver datos contables complejos ni reportes generales, sólo lo indispensable para su trabajo. Quiero esos campos bien organizados, nada de esconder información esencial ni menús confusos."
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "¿Qué debe poder hacer cada usuario además de visualizar esos campos? ¿O eso es todo?"
      },
      {
        sender: "ai",
        name: "Lucía San Juan (Finanzas · IA)",
        text: "No, eso no es todo. El cliente debe además poder filtrar facturas por estado, zona y período, descargar comprobantes, cargar reclamos directamente desde la app y recibir notificaciones cuando se acerque el vencimiento o haya un pago registrado. También debería poder calificar el servicio y dejar comentarios.\n\nEl repartidor necesita poder marcar facturas como entregadas o cobradas, cargar comprobantes (fotos), recibir notificaciones de nuevas asignaciones y actualizar el estado de cada tarea en tiempo real. Además, debe poder ver el historial de entregas realizadas, pero, insisto, sólo lo indispensable para su función. ¿Te queda claro o necesitás más detalles sobre alguna acción específica?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "¿Explicás esto más claro y me decís cuánto tiempo antes debería recibir la notificación el user?"
      },
      {
        sender: "ai",
        name: "Lucía San Juan (Finanzas · IA)",
        text: "Te lo explico puntual: el cliente debe poder aplicar filtros (por estado de factura, zona y período) para buscar facturas específicas, descargar comprobantes, cargar un reclamo directamente desde la app y recibir notificaciones automáticas tanto cuando falta una semana como 48 horas antes del vencimiento de cada factura, y también al momento de registrar un pago. Además, debe tener la opción de calificar el servicio y dejar comentarios sobre la entrega o el cobro.\n\nEl repartidor, por su parte, debe poder marcar en tiempo real las facturas como entregadas o cobradas, subir fotografías de comprobantes, recibir una notificación inmediata ante cualquier nueva asignación y visualizar un historial de entregas anteriores. Todo esto debe estar disponible sin demoras, y especialmente las notificaciones de vencimiento no pueden fallar. ¿Está claro ahora cómo debería interactuar cada usuario y los tiempos de aviso?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Lo que necesitás que el sistema sí o sí haga en términos claros es que permita la automatización de procesos como... indicalos."
      },
      {
        sender: "ai",
        name: "Lucía San Juan (Finanzas · IA)",
        text: "Muy claro: el sistema debe automatizar sí o sí estos procesos—sin intervención manual ni excusas: 1) la carga y validación masiva de facturas, 2) la asociación automática de pagos recibidos con las facturas correspondientes, 3) el envío automático de notificaciones antes del vencimiento de las facturas o ante movimientos relevantes, 4) la generación y envío directo de reportes de inteligencia de negocios con datos actualizados en tiempo real y visualizaciones claras, 5) la asignación de entregas o cobranzas a repartidores de manera automática según zona y disponibilidad, y 6) la actualización inmediata del estado de cada factura o pago en todo el sistema y en la app. Si el sistema no resuelve todo esto, para mí no tiene sentido avanzar porque no quiero parches ni soluciones a medias."
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Decime alguna funcionalidad que no es indispensable para el funcionamiento del sistema pero sumaría valor para usted si la tendría."
      },
      {
        sender: "ai",
        name: "Lucía San Juan (Finanzas · IA)",
        text: "Algo que no es indispensable pero agregaría mucho valor sería tener un sistema de alertas personalizadas por objetivos: por ejemplo, poder configurar avisos si la cobranza en una zona baja de cierto porcentaje, o si hay una acumulación anormal de facturas impagas por cliente. También sumar analítica predictiva que me indique tendencias, como previsión de morosidad o flujo de caja en función de históricos. No es estrictamente necesario para operar, pero me permitiría anticiparme y tomar decisiones más inteligentes antes de que el problema sea grande. Si logran incorporar esto, sería una mejora fuerte respecto a lo que tenemos ahora."
      }
    ],
    documentationHtml: `
      <div class="doc-section">
        <span class="doc-section-title">1. Informe de Relevamiento — Mercury S.A.</span>
        <p><strong>Proyecto:</strong> Sistema de gestión para Mercury S.A.<br>
        <strong>Entrevistada:</strong> Lucía San Juan (Gerente de Administración y Finanzas).<br>
        <strong>Fecha:</strong> 26/10/2026<br>
        <strong>Stakeholders:</strong> Lucía San Juan, Área de administración, repartidores, clientes, Dirección general.</p>
        <p><strong>Introducción y Objetivo:</strong> Existe un sistema actual con el que la empresa no está conforme. La gerente solicita funcionalidades que permitan registrar facturas, el ingreso de pagos y reportes para la toma de decisiones integrados con la aplicación móvil en tiempo real, corrigiendo errores del sistema actual y automatizando reportes de inteligencia de negocios.</p>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Necesidades, Deseos y Expectativas</span>
        <p><strong>Necesidades:</strong></p>
        <ul class="doc-list">
          <li>Automatizar la carga y validación masiva de facturas.</li>
          <li>Conciliar automáticamente los pagos recibidos con sus comprobantes.</li>
          <li>Emitir alertas automáticas ante vencimientos próximos y movimientos clave.</li>
          <li>Generar y distribuir reportes de inteligencia de negocios en tiempo real.</li>
          <li>Sincronizar de forma inmediata los cambios de estado de facturas y cobros.</li>
        </ul>
        <p><strong>Deseos:</strong></p>
        <ul class="doc-list">
          <li>Sistema de alertas personalizadas por zonas.</li>
          <li>Sistema de alertas personalizadas por acumulación anormal de facturas impagas por cliente.</li>
          <li>Indicadores de tendencias puntuales (analítica predictiva de morosidad y flujo de caja).</li>
        </ul>
        <p><strong>Expectativas:</strong></p>
        <ul class="doc-list">
          <li>Controlar cada entrega para asegurar que el sistema no repita errores del pasado y cumpla los plazos sin demoras.</li>
          <li>Incorporar indicadores de tendencias que consigan prevenir morosidad y avisos configurables para perfiles con tendencias específicas.</li>
        </ul>
        <p><strong>Aspectos que requieren aclaración o profundización:</strong></p>
        <ul class="doc-list">
          <li><em>RF 002:</em> ¿Los reportes de inteligencia de negocio deben realizarse a partir del sistema de gestión ya existente e incluir únicamente operaciones de facturación, ingresos de pagos, cuentas por cobrar, morosos, flujo de caja y comisiones de repartidores?</li>
        </ul>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">2. Especificación de Requerimientos (ISO/IEC/IEEE 29148)</span>
        <p><strong>Requerimientos Funcionales (RF):</strong></p>
        <div class="req-grid">
          <div class="req-item"><span class="req-code">RF 001</span><p>Los reportes de inteligencia de negocio se deberán generar de forma automática.</p></div>
          <div class="req-item"><span class="req-code">RF 002</span><p>Los reportes de inteligencia de negocio deben realizarse a partir del sistema de gestión ya existente e incluir operaciones de facturación, ingresos de pagos, cuentas por cobrar, morosos, flujo de caja y comisiones de repartidores.</p></div>
          <div class="req-item"><span class="req-code">RF 003</span><p>El sistema deberá tener dos tipos de perfiles de usuario: Cliente y Repartidor.</p></div>
          <div class="req-item"><span class="req-code">RF 004</span><p>La base de datos deberá ser normalizada.</p></div>
          <div class="req-item"><span class="req-code">RF 005</span><p>El pago ingresado al sistema se deberá asociar automáticamente a la factura seleccionada del usuario que emite el pago.</p></div>
          <div class="req-item"><span class="req-code">RF 006</span><p>El sistema deberá permitir el procesamiento en un único lote de al menos 200 facturas simultáneas mediante carga de archivo, sin requerir la división manual en tandas.</p></div>
          <div class="req-item"><span class="req-code">RF 007</span><p>El sistema deberá sincronizar las consultas y emisiones de facturas con la aplicación móvil.</p></div>
          <div class="req-item"><span class="req-code">RF 008</span><p>El sistema deberá sincronizar el registro automático de pagos con la aplicación móvil.</p></div>
          <div class="req-item"><span class="req-code">RF 009</span><p>El sistema deberá sincronizar la visualización de reportes clave e indicadores para la gestión (cobros, morosos, comisiones, facturación por zona y por período) con la aplicación móvil.</p></div>
          <div class="req-item"><span class="req-code">RF 010</span><p>El sistema deberá sincronizar la visualización de actualizaciones en tiempo real del estado de facturas y pagos con la aplicación móvil.</p></div>
          <div class="req-item"><span class="req-code">RF 011</span><p>El sistema deberá sincronizar las notificaciones automáticas de cobranzas o incidencias a clientes y al área administrativa con la aplicación móvil.</p></div>
          <div class="req-item"><span class="req-code">RF 012</span><p>La aplicación móvil debe sincronizar la carga de comprobantes o fotos de factura/pago con el sistema.</p></div>
          <div class="req-item"><span class="req-code">RF 013 (Cliente)</span><p>El perfil de usuario Cliente debe poder visualizar: número de factura, importe, estado de pago (pendiente, pagada, vencida), fecha de emisión, fecha de vencimiento, zona de entrega, historial de pagos asociados, y posibilidad de descargar el comprobante.</p></div>
          <div class="req-item"><span class="req-code">RF 012/013b (Repartidor)</span><p>El perfil de Repartidor debe poder visualizar: lista de facturas a entregar/cobrar, zona asignada, nombre del cliente, importe, estado actual (entregado, cobrado, pendiente), y campo para confirmar el cobro o cargar comprobante (foto).</p></div>
          <div class="req-item"><span class="req-code">RF 013c</span><p>El cliente debe poder filtrar facturas por estado, zona y período.</p></div>
          <div class="req-item"><span class="req-code">RF 014</span><p>El cliente debe poder descargar comprobantes.</p></div>
          <div class="req-item"><span class="req-code">RF 015</span><p>El cliente debe poder cargar reclamos desde la aplicación móvil.</p></div>
          <div class="req-item"><span class="req-code">RF 016</span><p>El repartidor debe poder marcar las facturas como entregadas o cobradas en tiempo real.</p></div>
          <div class="req-item"><span class="req-code">RF 017</span><p>El repartidor debe poder subir fotografías de comprobantes.</p></div>
          <div class="req-item"><span class="req-code">RF 018</span><p>El repartidor debe recibir notificaciones inmediatas ante nuevas asignaciones.</p></div>
          <div class="req-item"><span class="req-code">RF 019</span><p>El repartidor debe poder visualizar el historial de entregas anteriores.</p></div>
          <div class="req-item"><span class="req-code">RF 020</span><p>El sistema debe emitir notificaciones de vencimiento para los usuarios correspondientes.</p></div>
        </div>

        <p style="margin-top: 18px;"><strong>Requerimientos No Funcionales (RNF):</strong></p>
        <div class="req-grid">
          <div class="req-item rnf-item"><span class="req-code">RNF 001</span><p>Los reportes deben actualizarse al modificar, eliminar o ingresar nuevos datos.</p></div>
          <div class="req-item rnf-item"><span class="req-code">RNF 002</span><p>El sistema debe procesar, validar y confirmar un lote de hasta 1000 facturas en un tiempo inferior a 5 minutos.</p></div>
          <div class="req-item rnf-item"><span class="req-code">RNF 003</span><p>El sistema debe ocultar y proteger los datos financieros y contables en todas las interfaces accesibles por el tipo de usuario: Repartidor.</p></div>
          <div class="req-item rnf-item"><span class="req-code">RNF 004</span><p>El sistema debe enviar una notificación al usuario una semana y 48 hs antes de la fecha de vencimiento de una factura y al momento de registrar un pago.</p></div>
        </div>
      </div>
    `
  },

  // 3. SIMULACIÓN 3: ALBERTO TORRES (INDIVIDUAL)
  {
    id: "sim-alberto-torres",
    number: "Individual 03",
    modality: "individual",
    modalityLabel: "👤 Trabajo Individual · Dana Graziano",
    category: "simulaciones",
    categoryLabel: "Simulación con IA + Documentación",
    isSimulation: true,
    sourceFile: "archivos/simulacion3.txt",
    sourceFileName: "simulacion3.txt",
    title: "Simulación de Entrevista #3: Alberto Torres (Jefe de Sistemas / IT)",
    subtitle: "Arquitectura de integración por APIs (ERP, ruteo y entregas), seguridad, Ley 25.326 y notificaciones push (Entrega Individual)",
    previewSummary: "Entrevista técnica con Alberto Torres, Jefe de Sistemas de Mercury S.A. Se releva la arquitectura de tres sistemas independientes (ERP, optimización de rutas y control de entregas), integración mediante APIs REST/OAuth2, validación por firma/foto, calificación 1–5, disparadores de notificaciones push y cumplimiento de la Ley 25.326.",
    highlights: [
      "Entrega Individual",
      "Conversación con IA (Jefe de IT)",
      "Integración API con ERP / Ruteo / Entregas",
      "Seguridad y Ley 25.326"
    ],
    chatTeaser: "Alberto Torres (Jefe de Sistemas): «El ERP centraliza la gestión administrativa, pero para ruteo usamos un sistema específico y para control de entregas una plataforma dedicada con APIs propias.»",
    interviewee: {
      name: "Alberto Torres",
      role: "Jefe de Sistemas (Responsable de IT) · Mercury S.A.",
      initials: "AT",
      studentRole: "Dana Graziano · Analista Funcional"
    },
    scenarioText: `Entrevista individual con Alberto Torres, Jefe de Sistemas y actor técnico clave de Mercury S.A., para relevar la arquitectura de integración entre la nueva app móvil (desarrollada desde cero) y los sistemas internos (ERP, sistema de ruteo y plataforma de entregas), estándares de seguridad, privacidad de datos y escalabilidad.`,
    chatMessages: [
      {
        sender: "ai",
        name: "Alberto Torres (Jefe de IT · IA)",
        text: "Hola, mi nombre es Alberto Torres. Soy el Jefe de Sistemas de Mercury S.A. y participo como actor técnico clave en el proyecto de la nueva aplicación móvil para clientes y repartidores. Estamos en la fase inicial, relevando los requerimientos del sistema para asegurar una integración adecuada con nuestras plataformas internas, cumplir con estándares de seguridad y garantizar escalabilidad.\n\nContame tus impresiones iniciales sobre el proyecto y cómo proponés abordar la entrevista para esta etapa de elicitación de requerimientos."
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Okey, entiendo. Como prioridad y necesidad principal: Desarrollo de aplicación móvil. Integrar la aplicación móvil con las plataformas internas. La integración debe ser segura y escalable."
      },
      {
        sender: "ai",
        name: "Alberto Torres (Jefe de IT · IA)",
        text: "Veo que identificaste bien las prioridades. Me gustaría saber cómo proponés documentar los requerimientos de integración, considerando que tenemos sistemas ERP, de ruteo y de entregas que actualmente operan bajo estándares específicos de seguridad y comunicación. ¿Tenés alguna metodología o herramienta en mente para mapear estos requerimientos técnicos y no funcionales? Así podremos asegurarnos de que no queden aspectos críticos sin cubrir."
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Antes voy a hacerle algunas preguntas, ¿ya tienen una aplicación móvil o se debe desarrollar desde cero?"
      },
      {
        sender: "ai",
        name: "Alberto Torres (Jefe de IT · IA)",
        text: "Te respondo de forma directa: actualmente no contamos con una aplicación móvil propia; todo el desarrollo sería desde cero. Esto implica que debemos definir cuidadosamente los requerimientos para que la solución sea robusta, compatible e integrable con los sistemas internos existentes. Por eso valoro que se plantee desde el principio cómo se va a documentar y mapear de forma efectiva la integración y los requisitos técnicos. Si tenés otra pregunta puntual sobre los sistemas internos o las restricciones técnicas, adelante."
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "¿El único sistema interno es el ERP? ¿Para el ruteo y entregas se utiliza el ERP u otro sistema?"
      },
      {
        sender: "ai",
        name: "Alberto Torres (Jefe de IT · IA)",
        text: "Buena pregunta. Te aclaro: el ERP centraliza la gestión administrativa y financiera, pero para ruteo utilizamos un sistema específico de optimización de rutas, y para el control de entregas contamos con una plataforma dedicada que monitorea en tiempo real el avance de los repartidores. Estos sistemas están integrados entre sí, pero cada uno funciona de manera independiente y tiene APIs propias. Por eso es clave definir cómo va a interactuar la aplicación móvil con cada uno de ellos y bajo qué protocolos de seguridad. ¿Querés que te detalle los flujos de información actuales o te interesa primero conocer los requisitos técnicos de integración que solemos exigir para nuevos desarrollos?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Contame sobre los flujos y los requisitos técnicos que mencionaste."
      },
      {
        sender: "ai",
        name: "Alberto Torres (Jefe de IT · IA)",
        text: "Perfecto, te resumo los flujos principales: la información de pedidos y clientes proviene del ERP, los datos de ruteo y asignación de repartidores se gestionan en el sistema de rutas, y el avance de las entregas se monitorea en la plataforma de control. La aplicación móvil deberá consultar datos, enviar actualizaciones y recibir retroalimentación desde cada sistema a través de APIs, siempre bajo protocolos seguros (idealmente REST con autenticación OAuth2). Los requisitos técnicos: integración vía API, cifrado de datos en tránsito y en reposo, logs centralizados, capacidad de escalabilidad, y asegurar compatibilidad con nuestra infraestructura (servidores actuales y nube privada). ¿Querés profundizar en algún flujo o requisito puntual?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Me comentaste que la app deberá consultar datos, enviar actualizaciones y recibir retroalimentación desde cada sistema a través de API pero no cuál es el objetivo de esta. ¿Para qué la van a usar los clientes, desde su perspectiva qué es lo que van a poder hacer? Te pregunto lo mismo desde la perspectiva del repartidor. Si sabemos que deberá consultar datos pero no qué datos consultará y para qué no nos sirve. Lo que mencionaste antes justificalo desde la perspectiva de los usuarios. Gracias."
      },
      {
        sender: "ai",
        name: "Alberto Torres (Jefe de IT · IA)",
        text: "Muy buena observación; siempre que definimos la integración, necesitamos partir de los objetivos de los usuarios. Desde la perspectiva del cliente, la app le permitirá: consultar el estado de sus pedidos en tiempo real, gestionar reclamos, calificar el servicio y recibir notificaciones sobre entregas. Para lograr esto, la app necesita consultar al ERP (info del pedido), al sistema de rutas (estado del envío) y a la plataforma de entregas (actualizaciones y firmas de recepción). Desde la perspectiva del repartidor, la app servirá para recibir asignaciones de rutas, marcar avances (ejemplo: \"pedido entregado\"), reportar inconvenientes y eventualmente recibir retroalimentación del cliente. Así, los datos que se consultan y actualizan tienen sentido práctico alineado a cada rol. ¿Te interesaría priorizar algunos casos de uso o querés que avancemos en la redacción de historias de usuario para cada perfil?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "¿El repartidor asignado al pedido del cliente deberá tener un canal privado de mensajería repartidor-cliente?"
      },
      {
        sender: "ai",
        name: "Alberto Torres (Jefe de IT · IA)",
        text: "Ese requerimiento se ha debatido en otras ocasiones. Desde el área de Sistemas, un canal privado de mensajería entre cliente y repartidor asignado puede ofrecer beneficios en términos de comunicación directa y resolución rápida de incidencias, pero implica desafíos técnicos importantes: seguridad y privacidad de datos, controles de moderación, trazabilidad y almacenamiento seguro de mensajes. Además hay que evaluar si la infraestructura actual puede soportarlo sin generar dependencias complejas o costos extra.\n\n¿El canal sería solo texto o incluiría archivos (fotos, firmas, etc.)? ¿Cómo se manejarían los mensajes una vez finalizada la entrega? Me interesa que lo definamos para estimar su impacto y priorizarlo correctamente dentro del alcance inicial del proyecto. ¿Querés profundizar en los requisitos funcionales de ese canal o preferís analizar alternativas menos críticas, como notificaciones predefinidas?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Dejémoslo para ver en otras entrevistas y sigamos con las funcionalidades esenciales como las notificaciones. Antes de seguir con las notificaciones, ¿hay otras funciones como esta para agregar a la aplicación? Lo quiero tener en cuenta si así es."
      },
      {
        sender: "ai",
        name: "Alberto Torres (Jefe de IT · IA)",
        text: "Buena pregunta, es importante definir bien ese alcance. Más allá de notificaciones y mensajería, suelo ver propuestas de funcionalidades como: localización en tiempo real del repartidor en el mapa (visible al cliente durante la franja de entrega), posibilidad de reprogramar la entrega desde la app, validación de identidad/datos al momento de recibir el pedido, y carga de prueba de entrega (foto, firma electrónica). Por experiencia, conviene priorizar las funciones esenciales y dejar lo accesorio para fases posteriores, pero necesitás confirmarlo con usuarios y responsables de cada área. ¿Querés que discutamos brevemente el impacto técnico de alguna de estas funcionalidades antes de pasar a las notificaciones?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "La posibilidad de reprogramar la entrega desde la app lo podemos dejar para ver después, ¿le parece? Hay aspectos con mayor importancia de funcionamiento para un modelo inicial. Lo mismo con localización en tiempo real del repartidor en el mapa."
      },
      {
        sender: "ai",
        name: "Alberto Torres (Jefe de IT · IA)",
        text: "Coincido con vos, es fundamental enfocarnos en las funcionalidades base para no diluir los recursos ni comprometer la calidad del primer lanzamiento. Las notificaciones push, gestión de reclamos, seguimiento de pedidos y carga de calificaciones deberían ser las prioridades iniciales. Si considerás relevante agregar otra función esencial como la validación digital del recibo de entrega (por firma o foto) podemos analizarlo ahora, ya que impacta tanto para clientes como repartidores y es clave desde el área de Sistemas para trazabilidad. ¿Te gustaría profundizar en cómo se gestionarán las notificaciones o avanzar con los requisitos de validación de entrega?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "El cliente deberá poder calificar con puntos del 1 al 5 la calidad del servicio. 5 como excelente, 1 como Con aspectos para mejorar. ¿Le parece bien?"
      },
      {
        sender: "ai",
        name: "Alberto Torres (Jefe de IT · IA)",
        text: "Me parece adecuado: una escala simple del 1 al 5 facilita tanto la experiencia del usuario como el análisis posterior. Es fundamental definir dónde quedará almacenada esa información y cómo se usará: ¿irá directo al ERP o la gestionaremos primero en la nueva app? También, desde el área de Sistemas, necesitamos establecer los criterios de seguridad y privacidad para ese dato. Por otro lado, habría que definir si la calificación es obligatoria o voluntaria, y si permitirá comentarios adicionales. ¿Querés que discutamos el flujo técnico para recolectar y reportar esas calificaciones?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "¿Las notificaciones son solo para el cliente y por el cambio de estado del pedido? No abarca nada más, ¿verdad?"
      },
      {
        sender: "ai",
        name: "Alberto Torres (Jefe de IT · IA)",
        text: "Entiendo la duda, pero la aplicación está pensada para cubrir ambos perfiles principales: clientes y repartidores. Para el cliente, no solo es seguimiento del pedido y calificación: tendrá también gestión de reclamos y notificaciones. Para el repartidor, es fundamental la asignación de rutas, actualización de estados (ejemplo: \"pedido entregado\"), reporte de inconvenientes y eventualmente retroalimentación sobre su propio desempeño. Todo esto debe integrarse con nuestros sistemas internos. Si necesitas, puedo ayudarte a detallar historias de usuario para cada perfil o identificar qué funciones cruzan ambos roles, así priorizamos bien desde el inicio. ¿Cómo querés enfocarlo ahora?"
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Okey, a modo de lista especificá los motivos por los que se notificará al cliente o al repartidor. El cliente recibirá una notificación y aparecerá en el apartado notificación cuando cambie el estado de ... a ... Te pido que me lo digas tanto para el cliente como el repartidor. Por otro lado, respuesta a pregunta anterior, almacenamos todo en una base de datos que se conecte con el ERP y la app, ¿es posible?"
      },
      {
        sender: "ai",
        name: "Alberto Torres (Jefe de IT · IA)",
        text: "Perfecto, te detallo los motivos de notificación para cada perfil, teniendo en cuenta los estados clave del proceso:\n\nCliente:\n- Confirmación de recepción del pedido (\"pedido registrado\").\n- Aviso de preparación o despacho (\"pedido en preparación\", \"pedido despachado\").\n- Notificación de que el pedido está en camino (\"en ruta\").\n- Aviso de entrega próxima (repartidor cerca del domicilio).\n- Confirmación de entrega completada.\n- Actualización ante incidencias o demoras (ejemplo: \"entrega reprogramada\", \"incidencia reportada\").\n- Recepción de respuesta a un reclamo.\n- Solicitud para calificar el servicio tras la entrega.\n\nRepartidor:\n- Asignación de un nuevo pedido/ruta.\n- Modificaciones en los datos del pedido asignado o cambios de ruta.\n- Recordatorio de entrega pendiente (en caso de retraso).\n- Notificación de incidente reportado por el cliente.\n- Confirmación de la finalización de entrega.\n\nRespecto a tu pregunta técnica: sí, es viable tener una base de datos intermedia que se sincronice con el ERP y almacene toda la información relevante de la app. Lo importante es definir muy bien el modelo de datos y los mecanismos de actualización/sincronización para evitar inconsistencias. Además, hay que considerar los aspectos de seguridad, acceso y auditoría de esa base."
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "La forma de almacenamiento la dejamos para ver más tarde y corroborar con el equipo, ¿está de acuerdo?"
      },
      {
        sender: "ai",
        name: "Alberto Torres (Jefe de IT · IA)",
        text: "De acuerdo, me parece prudente que el esquema de almacenamiento se revise con todo el equipo técnico para asegurar consistencia y viabilidad a largo plazo. De momento, podemos dejar registrada la necesidad de esta base de datos intermedia como requerimiento técnico sujeto a validación. Si te parece, podemos avanzar en detallar el flujo operativo de las notificaciones o repasar posibles escenarios críticos donde la app pueda aportar valor agregado diferenciador."
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "En forma de punteo pero con detalle veamos escenarios críticos donde la app pueda aportar valor agregado diferenciador, tiempos de respuestas y seguridad que había mencionado."
      },
      {
        sender: "ai",
        name: "Alberto Torres (Jefe de IT · IA)",
        text: "De acuerdo, te detallo en forma de punteo algunos escenarios críticos donde la app puede aportar valor agregado diferenciador, analizando tiempos de respuesta y la seguridad requerida:\n- Notificación inmediata ante incidencias: notificar al cliente y al repartidor en tiempo real con baja latencia.\n- Firma digital o validación al entregar: reemplazar comprobantes en papel por firma electrónica o foto desde la app, garantizando autenticidad y auditoría.\n- Gestión segura y trazable de reclamos: seguimiento digital donde todas las interacciones quedan registradas.\n- Control de acceso y permisos: autenticación robusta (preferentemente multifactor para repartidores).\n- Sincronización ante fallos de conectividad: almacenamiento temporal para evitar pérdida de datos ante caídas de red.\n- Integridad y consistencia de la información: cambios de estado sincronizados sin desfases temporales para evitar dobles asignaciones."
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "¿Existe alguna norma para la protección de datos?"
      },
      {
        sender: "ai",
        name: "Alberto Torres (Jefe de IT · IA)",
        text: "Sí, existen normas internacionales y nacionales que regulan la protección de datos personales. A nivel global, la más conocida es el Reglamento General de Protección de Datos (GDPR) de la Unión Europea. En Argentina, aplicamos la Ley 25.326 de Protección de Datos Personales, que es de cumplimiento obligatorio y tiene requisitos similares: consentimiento del usuario, derechos de acceso y supresión, medidas de seguridad para resguardar la información y notificación ante incidentes. Para el sistema que estamos desarrollando, hay que asegurarse de cumplir con estas normas desde el diseño (privacy by design), considerando cifrado, control de acceso y registro de auditoría."
      },
      {
        sender: "student",
        name: "Dana Graziano (Estudiante)",
        text: "Damos fin, gracias."
      },
      {
        sender: "ai",
        name: "Alberto Torres (Jefe de IT · IA)",
        text: "Perfecto, gracias a vos por la entrevista y tu enfoque claro durante el relevamiento. Quedó una base sólida para avanzar con el informe inicial; valoro que priorizáramos las funcionalidades esenciales, los escenarios críticos y los requisitos normativos. ¡Que tengas buen día!"
      }
    ],
    documentationHtml: `
      <div class="doc-section">
        <span class="doc-section-title">1. Informe Inicial — Entrevista con Jefe de Sistemas (IT)</span>
        <p><strong>Fase:</strong> Inicial.<br>
        <strong>Objetivo general:</strong> Desarrollar una aplicación móvil para clientes y repartidores integrada a las plataformas internas con el objetivo de cumplir estándares de seguridad y garantizar escalabilidad.<br>
        <strong>Público objetivo:</strong> Clientes y Repartidores.</p>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Necesidades, Deseos y Problemas Identificados</span>
        <p><strong>Necesidades:</strong></p>
        <ul class="doc-list">
          <li>Desarrollo de aplicación móvil desde cero.</li>
          <li>Integrar la aplicación móvil con las plataformas internas (sistemas ERP, de ruteo y de entregas).</li>
          <li>La integración debe ser segura y escalable, cumpliendo con las normas vigentes.</li>
          <li>Notificaciones push, gestión de reclamos, seguimiento de pedidos y carga de calificaciones.</li>
        </ul>
        <p><strong>Deseos (para evaluar en fases posteriores):</strong></p>
        <ul class="doc-list">
          <li>Canal de mensajería privado entre el repartidor asignado y el cliente (incluyendo seguridad, privacidad, moderación, trazabilidad y evaluación de infraestructura).</li>
          <li>Localización en tiempo real del repartidor en el mapa durante la franja de entrega.</li>
          <li>Que el cliente pueda reprogramar la entrega desde la aplicación.</li>
        </ul>
        <p><strong>Problemas identificados y aspectos a profundizar:</strong></p>
        <ul class="doc-list">
          <li><strong>Problema:</strong> Falta de un sistema de comunicación directa con el cliente sobre aspectos del estado del pedido.</li>
          <li><strong>A profundizar:</strong> Incorporación del canal de mensajería y definición del esquema de almacenamiento viable (base de datos intermedia) para la aplicación y su integración con el ERP, sistema de rutas y entregas.</li>
        </ul>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">2. Especificación de Requerimientos (ISO/IEC/IEEE 29148)</span>
        <p><strong>Requerimientos Funcionales (RF):</strong></p>
        <div class="req-grid">
          <div class="req-item"><span class="req-code">RF 003</span><p>La aplicación deberá tener un apartado para la gestión de reclamos.</p></div>
          <div class="req-item"><span class="req-code">RF 004</span><p>El Cliente deberá poder enviar mensajes en el apartado "Gestión de reclamos".</p></div>
          <div class="req-item"><span class="req-code">RF 005</span><p>La aplicación se deberá conectar por API al ERP para obtener la información sobre el pedido y mostrarla en la aplicación al cliente.</p></div>
          <div class="req-item"><span class="req-code">RF 006</span><p>La aplicación se deberá conectar por API al sistema de rutas para obtener el estado del envío y mostrarlo en la aplicación al cliente.</p></div>
          <div class="req-item"><span class="req-code">RF 007</span><p>La aplicación se deberá conectar por API a la plataforma de entregas para obtener las actualizaciones del pedido y firmas de recepción.</p></div>
          <div class="req-item"><span class="req-code">RF 008</span><p>El cliente deberá ver en la aplicación las actualizaciones del pedido y firmas de recepción.</p></div>
          <div class="req-item"><span class="req-code">RF 009</span><p>El repartidor deberá poder visualizar sus rutas asignadas en la aplicación.</p></div>
          <div class="req-item"><span class="req-code">RF 010</span><p>El repartidor deberá poder cambiar el estado del pedido.</p></div>
          <div class="req-item"><span class="req-code">RF 011</span><p>El cliente deberá ver en tiempo real el cambio de estado del pedido que registró el repartidor en la aplicación.</p></div>
          <div class="req-item"><span class="req-code">RF 012</span><p>El repartidor deberá poder enviar mensajes en el apartado "Reportar inconvenientes".</p></div>
          <div class="req-item"><span class="req-code">RF 013</span><p>El repartidor deberá validar la identidad del cliente en el sistema cuando el cliente reciba el pedido.</p></div>
          <div class="req-item"><span class="req-code">RF 014</span><p>El repartidor deberá cargar una foto y firma electrónica en el sistema cuando el cliente reciba el pedido.</p></div>
          <div class="req-item"><span class="req-code">RF 015</span><p>El cliente deberá poder calificar con puntos del 1 al 5 la calidad del servicio (5: Excelente, 4: Muy bueno, 3: Aceptable, 2: Regular, 1: Con aspectos para mejorar).</p></div>
          <div class="req-item"><span class="req-code">RF 016</span><p><strong>Notificaciones Push al Cliente:</strong> Confirmación de recepción ("pedido registrado"), Aviso de preparación o despacho, Pedido en camino ("en ruta"), Aviso de entrega próxima, Confirmación de entrega completada, Actualización ante incidencias/demoras, Respuesta a un reclamo y Solicitud para calificar el servicio.</p></div>
          <div class="req-item"><span class="req-code">RF 017</span><p><strong>Notificaciones Push al Repartidor:</strong> Asignación de nuevo pedido/ruta, Modificaciones en datos del pedido o ruta, Recordatorio de entrega pendiente, Notificación de incidente reportado por el cliente y Confirmación de finalización de entrega.</p></div>
          <div class="req-item"><span class="req-code">RF 018</span><p>El sistema deberá impedir que un pedido quede asignado a más de un repartidor.</p></div>
        </div>

        <p style="margin-top: 18px;"><strong>Requerimientos No Funcionales (RNF):</strong></p>
        <div class="req-grid">
          <div class="req-item rnf-item"><span class="req-code">RNF 001</span><p>Ante una demora, desvío o problema en la entrega, el sistema deberá enviar la notificación push al cliente y al repartidor en menos de [x] segundos.</p></div>
          <div class="req-item rnf-item"><span class="req-code">RNF 002</span><p>El sistema deberá exigir autenticación robusta a los repartidores.</p></div>
          <div class="req-item rnf-item"><span class="req-code">RNF 003</span><p>El sistema deberá reflejar cada cambio de estado de un pedido en la app y en los sistemas internos en menos de [x] segundos.</p></div>
          <div class="req-item rnf-item"><span class="req-code">RNF 004</span><p>El sistema deberá cumplir con la Ley 25.326 de Protección de Datos Personales.</p></div>
          <div class="req-item rnf-item"><span class="req-code">RNF 005</span><p>La comunicación entre la app y las plataformas internas deberá estar cifrada con protocolos seguros [REST / OAuth2 / TLS].</p></div>
        </div>
      </div>
    `
  },

  // 4. CLASE 2 - ACTIVIDAD DE INVESTIGACIÓN OBLIGATORIA LENGUAJE NATURAL E IR (INDIVIDUAL)
  {
    id: "ind-clase2-investigacion-pln",
    number: "Individual 04",
    modality: "individual",
    modalityLabel: "👤 Trabajo Individual · Dana Graziano",
    category: "investigacion",
    categoryLabel: "Clase 2 · Entrega 26/08/26",
    isSimulation: false,
    sourceFile: "archivos/Investigacion_DanaGraziano.docx",
    sourceFileName: "Investigacion_DanaGraziano.docx",
    title: "Actividad de Investigación Obligatoria: Lenguaje Natural e Ingeniería de Requerimientos (Clase 2)",
    subtitle: "Análisis de «Una Herramienta Para Componer Escenarios A Través De Procesamiento Del Lenguaje Natural Y Derivar Casos De Prueba» (WER 2024)",
    previewSummary: "Entrega individual de la Clase 2 (26/08/26): análisis y síntesis del artículo científico de Gregorio Maclen, Diego Torres y Leandro Antonelli (LIFIA/UNLP y CAETI/UAI, WER 2024) sobre la organización jerárquica de escenarios en árboles mediante PLN (Python + spaCy + D3.js) para derivar casos de prueba en el modelo en V.",
    highlights: [
      "Entrega Individual (26/08/26)",
      "Procesamiento de Lenguaje Natural",
      "Árbol de Escenarios (spaCy + D3.js)",
      "Modelo en V y Casos de Prueba"
    ],
    fullContentHtml: `
      <div class="doc-section">
        <span class="doc-section-title">Ficha Bibliográfica del Trabajo Analizado</span>
        <ul class="doc-list">
          <li><strong>Título:</strong> Una Herramienta Para Componer Escenarios A Través De Procesamiento Del Lenguaje Natural Y Derivar Casos De Prueba.</li>
          <li><strong>Autores:</strong> Gregorio Maclen, Diego Torres y Leandro Antonelli.</li>
          <li><strong>Fecha de publicación:</strong> 07–09 de agosto de 2024.</li>
          <li><strong>Institución / Universidad:</strong> LIFIA, Facultad de Informática, Universidad Nacional de La Plata (UNLP) / CAETI, Facultad de Tecnología Informática, Universidad Abierta Interamericana (UAI).</li>
          <li><strong>Link al documento:</strong> <a href="https://www.inf.puc-rio.br/~wer/WERpapers/artigos/artigos_WER24/WER2024_paper_59.pdf" target="_blank" rel="noopener">https://www.inf.puc-rio.br/~wer/WERpapers/artigos/artigos_WER24/WER2024_paper_59.pdf</a></li>
        </ul>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Resumen (Abstract)</span>
        <p>"El diseño de casos de prueba es una de las actividades más desafiantes en el contexto de la ingeniería de requerimientos, dado que implica la colaboración de diferentes individuos con variados conocimientos en el dominio y perspectivas, con el objetivo de desarrollar un producto que satisfaga las expectativas y necesidades de los clientes. El modelo de desarrollo en V propone abordar el diseño de casos de prueba a partir de los requerimientos. Aunque constituye un punto de partida valioso, no siempre resulta sencillo obtener una especificación de requerimientos ordenada y consistente, que describa de manera integral toda la funcionalidad del sistema de software. Los escenarios se presentan como un artefacto efectivo para la especificación de requerimientos. Consisten en descripciones en lenguaje natural que delinean una secuencia de pasos desde un contexto o punto de partida específico hasta un objetivo o meta determinados. Los escenarios son atómicos, lo que implica que diferentes expertos pueden describir distintos escenarios en función de su conocimiento y perspectiva. Sin embargo, para el diseño efectivo de los casos de prueba, resulta crucial organizar los escenarios en una estructura jerárquica que facilite la identificación sistemática de todos los casos que necesitan ser evaluados. Este artículo propone una herramienta que permite la edición de escenarios y utiliza diversas técnicas de procesamiento de lenguaje natural para organizarlos en un árbol. Este enfoque se fundamenta en la relación 'un escenario se describe con otro escenario', lo que posibilita la generación de un árbol exhaustivo que abarque toda la funcionalidad del sistema. Posteriormente, la herramienta facilita la poda de ramas no deseadas para limitar el árbol a la funcionalidad que sea de interés evaluar. Finalmente, a partir del árbol resultante, se obtienen los casos de prueba."</p>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Síntesis Elaborada (Dana Graziano)</span>
        <p>El trabajo se enmarca en el modelo de desarrollo en V para el diseño de casos de prueba, los cuales se obtienen utilizando los requerimientos como base para ello. Su elaboración requiere grupos interdisciplinarios y con conocimientos sobre el dominio. El objetivo principal es cumplir con las expectativas y necesidades de los clientes.</p>
        <p>Un elemento clave son los escenarios, los cuales están expresados en lenguaje natural y son útiles para la especificación de requerimientos. Son atómicos, lo que permite que los integrantes de diferentes disciplinas involucrados expresen su conocimiento desde diferentes perspectivas, permitiendo casos de prueba más eficientes y precisos. En cuanto a la representación de escenarios, se utiliza un modelo conceptual que consta de dos partes: un modelo de dominio (objetos) y un modelo de razonamiento (acciones o tareas).</p>
        <p>En cuanto a la derivación de casos de prueba, se obtienen todas las combinaciones de situaciones descritas en episodios de los escenarios. Inicialmente, se proporciona un contexto con múltiples escenarios que pertenecen a un mismo problema o dominio. A partir de un escenario elegido, denominado raíz, la herramienta toma cada episodio de ese escenario y verifica si es una acción atómica simple o si presenta un sub-escenario más complejo. Si es complejo, se realiza el proceso de forma recursiva hasta que todas las hojas del árbol sean acciones indivisibles, obteniendo como resultado final una estructura de árbol que muestra gráficamente un proceso complejo descompuesto en subprocesos y pasos atómicos. Para lograr esto, la herramienta se implementa en <strong>Python</strong> y utiliza la librería <strong>spaCy</strong> para determinar la equivalencia semántica entre oraciones escritas de distinta forma, mientras que para obtener los resultados gráficos se utiliza <strong>JavaScript junto con D3.js</strong>.</p>
        <p>Por otro lado, el árbol puede ser podado manualmente por una persona con los conocimientos adecuados y comprensión del dominio del negocio para decidir cuáles ramas son o no esenciales. Esta herramienta permite incrementar la calidad y confiabilidad del software final, asegurando una cobertura exhaustiva de los escenarios y una mayor precisión en los casos de prueba.</p>
      </div>
    `
  },

  // 5. CLASE 3 - EJERCITACIÓN OBLIGATORIA INDIVIDUAL (CICLO DE VIDA)
  {
    id: "clase3-ciclo-de-vida",
    number: "Individual 05",
    modality: "individual",
    modalityLabel: "👤 Trabajo Individual · Dana Graziano",
    category: "practicos",
    categoryLabel: "Clase 3 · Entrega 27/08/26",
    isSimulation: false,
    sourceFile: "archivos/CLASE3_rquerimientosenelciclodevida.txt",
    sourceFileName: "CLASE3_rquerimientosenelciclodevida.txt",
    title: "Ejercitación Obligatoria Individual — Clase 3: Requerimientos en el Ciclo de Vida",
    subtitle: "Proceso de elicitación, técnica de entrevistas, producto SRS e impacto positivo/negativo en un Sistema de Turnos Médicos",
    previewSummary: "Entrega individual de la Clase 3 (27/08/26): análisis sobre cómo se articulan los requerimientos desde el inicio del proyecto en metodologías tradicionales (RUP) vs. ágiles. Se desarrolla el proceso de Elicitación, la técnica de Entrevistas y el documento SRS como producto, además de la relación entre requerimientos y calidad con un caso práctico de turnos médicos.",
    highlights: [
      "Entrega Individual (27/08/26)",
      "Elicitación y Entrevistas",
      "Documento SRS",
      "Requerimientos y Calidad"
    ],
    fullContentHtml: `
      <div class="doc-section">
        <span class="doc-section-title">Pregunta 1: ¿Cómo articulan los requerimientos en el ciclo de vida?</span>
        <p><em>Consigna: Indicar y describir un proceso relacionado con los requerimientos, una técnica para aplicar en ese proceso y un producto (input o output).</em></p>
        <p><strong>Respuesta:</strong></p>
        <p>Los requerimientos se deben obtener al iniciar un proyecto, son los cimientos para todo el proceso de análisis, diseño, desarrollo y pruebas. Deben ser claros, sin ambigüedades y completos para así construir un sistema que satisfaga correctamente las necesidades del usuario. A diferencia de las metodologías tradicionales, las ágiles permiten comenzar el proyecto con requisitos incompletos o cambiantes, se desarrollan mediante iteraciones (sprints) con entregas incrementales y documentación menos exhaustiva que RUP.</p>
        <p><strong>Proceso — La Elicitación:</strong> Uno de los procesos relacionados con los requerimientos es la elicitación, es decir, obtener los requerimientos provenientes de parte del cliente mediante técnicas como brainstorming, entrevistas, cuestionarios, observación del trabajo, reuniones grupales, prototipos e historias de usuario; en las cuales participan todos los interesados (si la cantidad de interesados es alta, esto podría reflejar conflictos de intereses, al cada uno poseer una idea diferente del sistema que se necesita).</p>
        <p><strong>Técnica — Las Entrevistas:</strong> Una técnica que se puede aplicar en la elicitación son las entrevistas. Mediante estas podemos obtener información de las personas que van a utilizar el sistema o que conocen el negocio, lo que permite entender los problemas, expectativas y requerimientos que el usuario no había expresado antes. Las entrevistas permiten aclarar dudas, facilitar la comunicación con los stakeholders, descubrir requerimientos implícitos y reducir malentendidos.</p>
        <p><strong>Producto — El SRS (Especificación de Requerimientos de Software):</strong> El SRS es el documento que se genera después de recopilar y analizar la información obtenida de los usuarios mediante entrevistas y otras técnicas de elicitación. Contiene Requerimientos Funcionales (lo que debe hacer el sistema), Requisitos No Funcionales (vinculados a la seguridad, rendimiento y usabilidad, etc.), restricciones y reglas de negocio, necesidades y expectativas de usuario. En las siguientes etapas se utilizan como guía para el desarrollo y diseño. Además, permiten que los desarrolladores, analistas y clientes tengan una visión en común de lo que se va a construir, y en fases más avanzadas se utiliza como referencia para realizar pruebas y validar que el producto final cumpla con lo solicitado.</p>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Pregunta 2: Requerimientos y Calidad</span>
        <p><strong>Respuesta:</strong> Los problemas de calidad no se suelen dar por la etapa de desarrollo, sino en la interpretación errónea de requisitos, la cual da el pie para que se construya algo diferente a lo que necesitaba el usuario.</p>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Pregunta 3: Impacto Positivo y Negativo de las Prácticas de Requerimientos</span>
        <p><strong>Ejemplo concreto — Sistema de turnos médicos:</strong></p>
        <ul class="doc-list">
          <li><strong>Impacto Positivo:</strong> Se definen todos los requisitos al principio, entrevistando a recepcionistas, médicos y pacientes. Se descubre que necesitan una funcionalidad de envío de recordatorios automático de turnos para la confirmación o cancelación de ellos, por lo que se desarrolla el sistema incluyendo esa funcionalidad.</li>
          <li><strong>Impacto Negativo:</strong> No se indaga en el sistema de recordatorios y cancelaciones por ausencias. El sistema permite únicamente reservar turnos; después de implementarlo el cliente solicita esa función y se debe modificar el código, gastando tiempo y recursos adicionales.</li>
        </ul>
      </div>
    `
  },

  // 6. ACTIVIDAD DE CIERRE LUEGO DE LA PARTICIPACIÓN EN EL CIITI (INDIVIDUAL)
  {
    id: "reflexion-ciiti-ia",
    number: "Individual 06",
    modality: "individual",
    modalityLabel: "👤 Trabajo Individual · Dana Graziano",
    category: "investigacion",
    categoryLabel: "Unidad 3 · Entrega 01/10/26",
    isSimulation: false,
    sourceFile: "archivos/ciiti.txt",
    sourceFileName: "ciiti.txt",
    title: "Actividad de Cierre luego de la Participación en el CIITI",
    subtitle: "Empresas unipersonales, IA Agéntica, el foco en el QUÉ resolver y la reinvención del rol de ingenieros e ingenieras",
    previewSummary: "Entrega individual de la Unidad 3 (01/10/26): ensayo reflexivo sobre las exposiciones del Congreso CIITI. Analiza cómo el foco de la Ingeniería de Requerimientos radica en QUÉ problemática resolver y el valor de negocio, pasando del uso básico de LLMs generativos a la integración de IA agéntica junto a las personas.",
    highlights: [
      "Entrega Individual (01/10/26)",
      "Congreso CIITI",
      "IA Agéntica vs. LLM Generativo",
      "Foco en el QUÉ y Valor de Negocio"
    ],
    fullContentHtml: `
      <div class="doc-section">
        <span class="doc-section-title">Reflexión Completa sobre las Charlas del Congreso CIITI</span>
        <p>Me llamaron la atención partes de diferentes charlas, algunas de ellas dieron lugar a reflexionar sobre lo que va a implicar nuestro rol como futuros ingenieros e ingenieras y cómo nos deberíamos reinventar para no quedarnos desactualizados y obsoletos en algún punto del futuro.</p>
        <p>Sobre la primera charla, <strong>"Empresas unipersonales"</strong>, una de las ideas que consideré más importante de esta exposición es cómo la IA nos permite agregarle valor y personalizar la solución que le proporcionamos al cliente. Sin embargo, esto trae mayor competencia, y como consecuencia mejora continua por la necesidad y deseo de ser al que elijan en el mercado.</p>
        <p>El mismo Speaker mencionó, tal como vimos en esta materia (Ingeniería de Requerimientos), que <strong>el foco está en QUÉ problemática vamos a resolver</strong>, y por eso mismo en la capacidad de negocio y el valor que represente aquello que vendamos.</p>
        <p>Otro tema que abordó el mismo disertante fue relacionado a la necesidad actual o futura de las empresas de surgir con la IA como centro de ellas y previendo cómo integrarán la <strong>IA agéntica</strong> junto a las personas en los procesos, respondiendo a preguntas clave de requerimientos y procesos como:</p>
        <ul class="doc-list">
          <li>¿Para qué la integraremos?</li>
          <li>¿Qué hará?</li>
          <li>¿Cómo lo hará?</li>
          <li>¿Qué hará la persona y qué hará la IA?</li>
        </ul>
        <p>Por último, otro tema que me pareció relevante es el rol de los emprendedores, tanto como de los que no lo somos, en el entorno en constante evolución en el que nos encontramos. Actualmente, no deberíamos solo usar la IA como LLM o generativa, sino ir más allá e involucrarnos en el uso de <strong>IA agéntica</strong> y en la obtención de resultados. Hoy en día debemos ser quienes identifiquemos oportunidades e impongamos el rumbo en la utilización de la IA en nuestros proyectos: estableciendo el marco, utilizando la intuición y consiguiendo clientes, entendiendo sus necesidades y preocupaciones, investigando e identificando quiénes son.</p>
        <p>Considero que una de las preguntas que nos dejan estas charlas para reflexionar es: <strong>¿Cómo nos vamos a reinventar o cómo lo estamos haciendo? ¿Cómo estamos usando esto a nuestro favor?</strong></p>
      </div>
    `
  },

  // 7. TRABAJO DE INVESTIGACIÓN INDIVIDUAL: ELICITACIÓN Y ESPECIFICACIÓN ASISTIDA POR IA
  {
    id: "ind-investigacion-ia-unlp",
    number: "Individual 07",
    modality: "individual",
    modalityLabel: "👤 Trabajo Individual · Dana Graziano",
    category: "investigacion",
    categoryLabel: "Aporte Individual de Investigación",
    isSimulation: false,
    sourceFile: "archivos/TrabajoDeInvestigacion_Graziano.pdf",
    sourceFileName: "TrabajoDeInvestigación_Graziano.pdf",
    title: "Trabajo de Investigación Individual: Elicitación y Especificación de Requerimientos Asistida por IA",
    subtitle: "Análisis de metodología automatizada en 8 etapas con LLMs, RAG y orquestación de agentes (III-LIDI, UNLP, Octubre 2025)",
    previewSummary: "Aporte individual de investigación científica sobre el trabajo de Panigo, Petkoff Bankoff, Pasini y Pesado (UNLP, 2025). Examina un flujo iterativo de 8 etapas con agentes GPT-4 y RAG que reduce un 60% los tiempos de pre y post entrevista y elimina el 15% de redundancia en las especificaciones.",
    highlights: [
      "Entrega Individual",
      "Agentes LLM + RAG (UNLP 2025)",
      "Flujo de 8 Etapas Secuenciales",
      "60% Reducción de Tiempos"
    ],
    fullContentHtml: `
      <div class="doc-section">
        <span class="doc-section-title">Ficha del Artículo Científico Seleccionado</span>
        <ul class="doc-list">
          <li><strong>Título:</strong> Elicitación y especificación de requerimientos asistida por IA.</li>
          <li><strong>Autores:</strong> Panigo Ailén, Petkoff Bankoff Kristian, Pasini Ariel Cristian, Pesado Patricia Mabel.</li>
          <li><strong>Fecha de publicación:</strong> Octubre de 2025.</li>
          <li><strong>Institución / Universidad:</strong> III-LIDI, Universidad Nacional de La Plata (UNLP).</li>
          <li><strong>Link al documento:</strong> <a href="http://sedici.unlp.edu.ar/handle/10915/191289" target="_blank" rel="noopener">http://sedici.unlp.edu.ar/handle/10915/191289</a></li>
        </ul>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Resumen y Síntesis de las 8 Etapas Secuenciales</span>
        <p><strong>Resumen:</strong> En el presente trabajo se presenta una metodología automatizada para asistir las etapas de elicitación, análisis y especificación de requerimientos en ingeniería de software mediante inteligencia artificial generativa. A través de la integración de agentes basados en grandes modelos de lenguaje (LLMs), recuperación aumentada por generación (RAG) y plataformas de orquestación visual de agentes, se construye un flujo iterativo capaz de generar entrevistas, fichas técnicas, historias de usuario y documentos trazables de especificación de software.</p>
        <p><strong>Las 8 etapas secuenciales de la metodología:</strong></p>
        <ol style="margin-left: 22px; color: var(--text-body);">
          <li><strong>Investigación contextual:</strong> Se utiliza la información inicial del proyecto para identificar los actores involucrados y se genera un resumen que sintetiza los objetivos estratégicos, el alcance y el contexto organizacional clave mediante el procesamiento de datos por un agente (GPT-4).</li>
          <li><strong>Revisión documental:</strong> Se utiliza como input el resumen ejecutivo generado en la primera etapa para que un agente extraiga los aspectos claves utilizando un RAG y provea los resultados documentales relevantes almacenados en el repositorio empresarial.</li>
          <li><strong>Preparación de entrevista:</strong> Se utiliza como entrada el contexto del proyecto y los resultados documentales para que el agente genere las preguntas específicas para la guía estructurada de la entrevista.</li>
          <li><strong>Ejecución y procesamiento de entrevista:</strong> A partir de una grabación o minuta textual, el agente procesa la información y elabora un resumen estructurado de la entrevista.</li>
          <li><strong>Generación de ficha técnica:</strong> Tomando como base el output de la etapa 4, el agente genera una ficha técnica preliminar con las funcionalidades, objetivos, público objetivo y alcance del producto.</li>
          <li><strong>Validación de funcionalidades:</strong> Con el resultado de la etapa anterior se le presenta al usuario una interfaz interactiva con el objetivo de validar y ajustar funcionalidades y reglas de negocio. Los ajustes son utilizados por el agente para generar historias de usuario detalladas con reglas y criterios de aceptación específicos.</li>
          <li><strong>Revisión de historias de usuario y criterios:</strong> Mediante una interfaz interactiva se realiza la revisión y ajuste por parte del usuario junto a dudas adicionales para obtener las historias de usuario finales ajustadas y registro formalizado de dudas.</li>
          <li><strong>Especificación completa y trazable:</strong> Se utilizan los resultados de la etapa 7 junto a referencias previas y criterios de aceptación para que el agente integre toda la información validada para generar un documento completo de especificación permitiendo mayor precisión y trazabilidad.</li>
        </ol>
        <p style="margin-top:12px;"><strong>Resultados del Caso de Estudio:</strong> Se logró reducir un <strong>60% los tiempos</strong> de tareas previas y posteriores a las reuniones con el cliente; mientras que en el enfoque tradicional se presentó un 15% vinculado a la redundancia, en el orquestado se lograron especificaciones únicas, más completas y coherentes. Además, los equipos de integración y conectividad requirieron solo dos sesiones de consulta (frente a más del doble en el método tradicional), optimizando los tiempos globales del proyecto.</p>
      </div>
    `
  },

  // 8. USO DEL LENGUAJE NATURAL EN REQUERIMIENTOS (INDIVIDUAL)
  {
    id: "uso-lenguaje-natural",
    number: "Individual 08",
    modality: "individual",
    modalityLabel: "👤 Trabajo Individual · Dana Graziano",
    category: "lena-lel",
    categoryLabel: "Lenguaje Natural y Estilo",
    isSimulation: false,
    sourceFile: "archivos/usodelenguajenatural.txt",
    sourceFileName: "usodelenguajenatural.txt",
    title: "Uso del Lenguaje Natural y Guías de Estilo en Especificaciones",
    subtitle: "Ambigüedad semántica de términos de dominio («Consignación») y reescritura atómica de reglas de negocio para una Agencia de Alquiler de Vehículos",
    previewSummary: "Entrega individual sobre el significado preciso de términos de dominio en software vs. sentido común (caso «Consignación» en gestión de inventario) y reescritura estructurada de una especificación en lenguaje natural de una Agencia de Alquiler de Vehículos aplicando pautas de redacción clara y atómica.",
    highlights: [
      "Entrega Individual",
      "Semántica de Dominio («Consignación»)",
      "Guías de Estilo de Redacción",
      "Caso Agencia de Vehículos"
    ],
    fullContentHtml: `
      <div class="doc-section">
        <span class="doc-section-title">Pregunta 1: Términos de Dominio vs. Sentido Común</span>
        <p><em>Consigna: Identifique algún término o expresión específica de un dominio del cual haya participado en el desarrollo de software, en donde tenía una definición precisa diferente del sentido común.</em></p>
        <p><strong>Respuesta:</strong> En gestión de inventario, <strong>"consignación"</strong> se define como la mercancía que está en el almacén de un cliente pero aún pertenece al proveedor hasta que se vende. En otro entorno cotidiano, "consignación" se puede entender simplemente como enviar un paquete o recibirlo, sin especificar la pertenencia legal del producto.</p>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Pregunta 2: Reescritura de Especificación en Lenguaje Natural</span>
        <p><strong>Especificación Original (Agencia de Alquiler de Vehículos):</strong></p>
        <p style="background: var(--cream-bg); padding: 14px 18px; border-radius: 12px; border: 1.5px solid var(--blue-royal);">
          Una agencia de alquiler de vehículos permite a los clientes rentar autos compactos o camionetas SUV. Cuando un cliente solicita un alquiler, el sistema calcula el presupuesto en base al vehículo, los días y su historial. El costo base de un auto compacto es de 5000 pesos por día, y si el alquiler supera los 7 días, se aplica un descuento del 10% sobre ese costo base. Las camionetas SUV cuestan 8000 pesos por día y nunca tienen descuento por cantidad de días. Por políticas de seguro, a todos los conductores menores de 25 años se les cobra un recargo fijo de 2000 pesos adicionales por cada día de alquiler, independientemente del vehículo elegido. Además, la agencia premia la fidelidad. Si un cliente registró más de 5 alquileres en el último año, se le anula automáticamente el recargo por edad (en caso de que le correspondiera) y obtiene un lavado gratuito. Por otro lado, si el cliente tiene 5 alquileres o menos, pero la suma total de días alquilados en el año supera los 20 días, recibe un descuento del 15% sobre el costo base, aunque este beneficio exclusivo de días acumulados solo es válido si el vehículo actual es un auto compacto.
        </p>

        <p style="margin-top: 16px;"><strong>Reescritura aplicando las Guías de Estilo (Oraciones directas Sujeto + Verbo + Objeto):</strong></p>
        <ul class="doc-list">
          <li>La agencia es de alquiler de vehículos.</li>
          <li>Los clientes rentan autos compactos o camionetas SUV.</li>
          <li>El sistema calcula el presupuesto en base al vehículo, los días y su historial cuando el cliente solicita el alquiler.</li>
          <li>El alquiler del auto compacto tiene un precio base de 5000 pesos por día.</li>
          <li>La agencia aplica un descuento del 10% sobre el costo base de los alquileres de autos compactos que superan los 7 días de renta.</li>
          <li>La agencia alquila las camionetas SUV a 8000 pesos por día.</li>
          <li>La agencia no aplica descuentos a la renta de camionetas SUV por cantidad de días.</li>
          <li>La agencia les cobra un recargo fijo de 2000 pesos por día a los conductores menores de 25 años.</li>
          <li>La agencia elimina el recargo cobrado por día a los conductores menores de 25 años con un total anual de alquileres registrados mayor a 5.</li>
          <li>La agencia le otorga un lavado gratuito a los conductores con un total anual de alquileres registrados mayor a 5.</li>
          <li>La agencia otorga un descuento del 15% sobre el costo base a los conductores de autos compactos con 5 alquileres o menos anuales cuya suma total de días alquilados supere los 20 días.</li>
        </ul>
      </div>
    `
  },

  // 9. CLASE 11 - DICCIONARIO, GLOSARIO, ONTOLOGÍA Y LEL (INDIVIDUAL)
  {
    id: "clase11-glosario-ontologia-lel",
    number: "Individual 09",
    modality: "individual",
    modalityLabel: "👤 Trabajo Individual · Dana Graziano",
    category: "lena-lel",
    categoryLabel: "Clase 11 · Léxico y LEL",
    isSimulation: false,
    sourceFile: "archivos/clase11.txt",
    sourceFileName: "clase11.txt",
    title: "Diccionario, Glosario, Ontología y Construcción de LEL (Clase 11)",
    subtitle: "Tres niveles de definición del concepto «Ticket», distinción lingüística (Idioma, Lenguaje, Dialecto, Argot) y modelado de símbolos LEL",
    previewSummary: "Entrega individual de la Clase 11: diferenciación conceptual y práctica entre Diccionario, Glosario y Ontología aplicada al término «Ticket» en Ingeniería de Software. Definiciones de Idioma, Lenguaje, Dialecto y Argot, y construcción de un Glosario LEL completo con Noción e Impacto para Sujeto, Verbos y Estado.",
    highlights: [
      "Entrega Individual",
      "Diccionario vs. Glosario vs. Ontología",
      "Idioma, Lenguaje, Dialecto y Argot",
      "Símbolos LEL (Noción e Impacto)"
    ],
    fullContentHtml: `
      <div class="doc-section">
        <span class="doc-section-title">Pregunta 1: Definir el concepto «Ticket» de tres formas distintas</span>
        <ul class="doc-list">
          <li><strong>Diccionario:</strong> Papel que acredita el pago de un servicio, una compra o derecho de entrada.</li>
          <li><strong>Glosario:</strong> La definición de una palabra o expresión en un glosario depende del área o contexto en el que se esté tratando; en Ingeniería de Software se define como un registro digital en un sistema de seguimiento que documenta una tarea, error, problema o requerimiento en particular que requiere algún tipo de atención.</li>
          <li><strong>Ontología:</strong> La ontología es un modelo formal que organiza y define los conceptos de un área específica, establece las relaciones y propiedades entre ellos para que las máquinas puedan procesar el conocimiento. En ontología, para el área de ingeniería en sistemas, el ticket se define como una entidad que agrupa propiedades como el estado y la prioridad. Además, se relaciona con otros conceptos como el usuario asignado y el proyecto correspondiente.</li>
        </ul>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Pregunta 2: Definición de Términos Lingüísticos</span>
        <ul class="doc-list">
          <li><strong>Idioma:</strong> Sistema de comunicación verbal o escrito de una comunidad humana que permite expresar ideas, pensamientos y sentimientos.</li>
          <li><strong>Lenguaje:</strong> Capacidad humana o animal para usar signos verbales o no, que permiten comunicar información o ideas.</li>
          <li><strong>Dialecto:</strong> Variedad de un idioma particular que se habla en una región geográfica específica o por un grupo social determinado.</li>
          <li><strong>Argot:</strong> Lenguaje especializado utilizado por un grupo de personas en específico para mantener la confidencialidad o establecer una identidad grupal.</li>
        </ul>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Pregunta 3: Definición de Conceptos en un Glosario LEL</span>
        <div class="req-grid">
          <div class="req-item">
            <span class="req-code">Sujeto: Cliente</span>
            <p><strong>Noción:</strong><br>• Persona que compra un servicio o producto.<br>• Interactúa con el sistema para realizar pedidos o efectuar pagos.</p>
            <p><strong>Impacto:</strong><br>• Paga el producto o servicio comprado.<br>• Su acción concluye con la confirmación del pago y la obtención del producto o servicio.</p>
          </div>

          <div class="req-item">
            <span class="req-code">Verbo: Pago con tarjeta de crédito (posnet)</span>
            <p><strong>Noción:</strong><br>• Medio de pago electrónico donde el cliente ingresa los datos de su tarjeta en el sistema para realizar una transacción.</p>
            <p><strong>Impacto:</strong><br>• Procesamiento y autorización del pago.<br>• Generación del comprobante.<br>• Registro en las cuentas bancarias del negocio y del usuario.</p>
          </div>

          <div class="req-item">
            <span class="req-code">Verbo: Pago en efectivo</span>
            <p><strong>Noción:</strong><br>• El cliente entrega el efectivo en la caja del negocio para la obtención del bien o servicio solicitado.</p>
            <p><strong>Impacto:</strong><br>• El cajero registra el dinero ingresado en la caja.<br>• El cajero actualiza las cuentas en el sistema.<br>• El cajero realiza el comprobante de pago.</p>
          </div>

          <div class="req-item">
            <span class="req-code">Estado: Ticket reservado</span>
            <p><strong>Noción:</strong><br>• Representa un producto reservado, a la espera de su pago y entrega.<br>• No se encuentra disponible para su venta.</p>
            <p><strong>Impacto:</strong><br>• El producto no puede ser comprado por otros clientes.</p>
          </div>
        </div>
      </div>
    `
  },

  // 10. ACTIVIDAD INDIVIDUAL - APLICACIÓN DE LEL (HEMOTERAPIA + WER 2025)
  {
    id: "aplicacion-lel-hemoterapia",
    number: "Individual 10",
    modality: "individual",
    modalityLabel: "👤 Trabajo Individual · Dana Graziano",
    category: "lena-lel",
    categoryLabel: "Aplicación de LEL e Investigación",
    isSimulation: false,
    sourceFile: "archivos/Actividad_individual_Aplicacion_LEL_Graziano.pdf",
    sourceFileName: "Actividad individual_Aplicación de LEL_Graziano (1).pdf",
    title: "Actividad Individual — Aplicación de LEL y Derivación de Casos de Prueba en Gherkin",
    subtitle: "Inciso 1: Caso Instituto de Hemoterapia de la Prov. de Buenos Aires · Inciso 2: Análisis de paper WER 2025 sobre pruebas con LEL y SRS",
    previewSummary: "Actividad individual en dos incisos: en el Inciso 1 se analiza la construcción del LEL en un dominio desconocido para los desarrolladores (Instituto de Hemoterapia de Buenos Aires, 40.000 donaciones anuales) detallando símbolos de Acción, Objeto, Formulario y Sujeto. En el Inciso 2 se analiza el paper de WER 2025 sobre el diseño de casos de prueba en formato Gherkin a partir del LEL y el SRS en el sector bancario.",
    highlights: [
      "Entrega Individual",
      "Caso Instituto de Hemoterapia",
      "Símbolos LEL (Acción, Objeto, Formulario, Sujeto)",
      "Paper WER 2025 (Gherkin + SUS)"
    ],
    fullContentHtml: `
      <div class="doc-section">
        <span class="doc-section-title">Inciso 1 — Aplicación de LEL en el Instituto de Hemoterapia (Prov. de Buenos Aires)</span>
        <p><strong>Introducción:</strong> La principal complejidad en el desarrollo de software es comprender el dominio del problema y lograr una comunicación fluida entre usuarios y desarrolladores. El Léxico Extendido del Lenguaje (LEL) permite comprender el vocabulario específico del usuario en la fase de elicitación.</p>
        <p><strong>Caso de estudio:</strong> Sistema de registración y producción del Instituto de Hemoterapia de la Provincia de Buenos Aires (dependiente del Ministerio de Salud), que recibe aproximadamente 40.000 donaciones anuales destinadas a centros sanitarios públicos y privados. Consta de los sectores: Sala de Recepción, Consultorios, Sala de Hemodonación, Laboratorio de Inmunoserología, Laboratorio de Inmunohematología, Sector de Fraccionamiento o Producción y Sector Banco de Sangre.</p>

        <div class="req-grid" style="margin-top: 14px;">
          <div class="req-item">
            <span class="req-code">1. Tipo Acción: Descarte de extracción</span>
            <p><strong>Noción:</strong><br>• Evitar que un donante con signos clínicos inaceptables o por cuestiones prácticas realice una donación.<br>• Se lleva a cabo en la sala de Hemodonación.</p>
            <p><strong>Impacto:</strong><br>• Descarte temporal del donante.<br>• Se registra en la ficha de donación.</p>
          </div>

          <div class="req-item">
            <span class="req-code">2. Tipo Objeto: Fichero de asegurados</span>
            <p><strong>Noción:</strong><br>• Conjunto de fichas de donantes que pertenecen al seguro de sangre.<br>• Se encuentran en el sector de recepción.</p>
            <p><strong>Impacto:</strong><br>• Es utilizado para seguir la historia de las donaciones.<br>• Es consultado para realizar notificaciones al asegurado en caso de necesidades extraordinarias.</p>
          </div>

          <div class="req-item">
            <span class="req-code">3. Tipo Formulario: Ficha de donación</span>
            <p><strong>Noción:</strong><br>• Panel preimpreso obligatorio para todos los donantes.<br>• Sirve para que el médico determine si el donante está en condiciones de donar y detectar grupos de riesgo.<br>• Informa condiciones de extracción y registra verificaciones de consultorio y hemodonación.</p>
            <p><strong>Impacto:</strong><br>• Recepción lo llena con datos personales y tipo de donación.<br>• En consultorio el médico completa la admisión y lo firma.<br>• Lo firma el donante aceptando condiciones.<br>• En Hemodonación un técnico completa signos clínicos y características de extracción y lo firma.</p>
          </div>

          <div class="req-item">
            <span class="req-code">4. Tipo Sujeto: Médico</span>
            <p><strong>Noción:</strong><br>• Médico especialista en hematología.<br>• Encargado de administrar cada sector del Instituto de Hemoterapia.</p>
            <p><strong>Impacto:</strong><br>• Realizar la encuesta al donante en consultorio y firmar la ficha.<br>• Capacitar al personal técnico de cada sector.<br>• Realizar control de calidad del producto y supervisar equipos.<br>• Evaluar cumplimiento de normas y aportar nuevos métodos.</p>
          </div>
        </div>

        <p style="margin-top:14px;"><strong>Conclusión del Inciso 1:</strong> Se verificó la viabilidad de construir el LEL dividiendo el proceso en cuatro etapas agrupadas en: Entrevistas y generación de símbolos, Clasificación y descripción mediante templates, y Validación con clientes y control del LEL. Se recomienda utilizar una herramienta CASE de soporte y especificar el estado de cada símbolo ("Completo", "Incompleto" o "Con dudas").</p>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Inciso 2 — Análisis de Publicación Científica (WER 2025)</span>
        <p><strong>Denominación del trabajo:</strong> <em>"Diseño de Casos de Pruebas a partir del Léxico Extendido del Lenguaje y la Especificación de Requerimientos"</em>.<br>
        <strong>Link al documento:</strong> <a href="https://werpapers.dimap.ufrn.br/papers/WER2025/wer202506.pdf" target="_blank" rel="noopener">https://werpapers.dimap.ufrn.br/papers/WER2025/wer202506.pdf</a></p>
        <p><strong>Síntesis del método y evaluación:</strong> El paper presenta un método de diseño de casos de prueba en formato <strong>Gherkin (Given, When, Then)</strong> que toma como entrada la Especificación de Requerimientos de Software (SRS) y el Léxico Extendido del Lenguaje (LEL). Mediante una correspondencia sintáctica y semántica entre los requerimientos del SRS y las columnas <em>Noción</em> e <em>Impacto</em> de los símbolos del LEL, se extraen y clasifican precondiciones, pasos y resultados esperados.</p>
        <p>El método fue evaluado en un desarrollo de software del sector bancario en Argentina enfocado en gestión de transacciones financieras y administración de cuentas bajo normativas regulatorias. Además, se utilizó la escala <strong>SUS (System Usability Scale)</strong> para evaluar el resultado final, obteniendo la calificación de <em>Aceptable</em>, demostrando su aplicabilidad profesional en contextos reales.</p>
      </div>
    `
  },

  // 11. CASOS DE USO, HISTORIAS DE USUARIO Y ESCENARIOS - HAVANNA (INDIVIDUAL)
  {
    id: "escenario-cu-us-havanna",
    number: "Individual 11",
    modality: "individual",
    modalityLabel: "👤 Trabajo Individual · Dana Graziano",
    category: "practicos",
    categoryLabel: "Modelado Funcional y Ágil",
    isSimulation: false,
    sourceFile: "archivos/Escenario_CU_US.pdf",
    sourceFileName: "Escenario_CU_US.pdf",
    title: "Casos de Uso, Historias de Usuario y Escenarios: Aplicación de Pedidos y Stock (Havanna)",
    subtitle: "Redacción de User Stories (US-001 y US-002) con criterios Gherkin, Caso de Uso CU 001 (Registrar venta) y Escenario E1 (Entrega Individual)",
    previewSummary: "Entrega individual de especificación funcional combinando artefactos ágiles y estructurados para el control de stock en locales de Havanna: Historias de Usuario con criterios de aceptación Given/When/Then, Caso de Uso completo con flujo principal y flujos alternativos, y Escenario operativo con actores, recursos y episodios.",
    highlights: [
      "Entrega Individual",
      "User Stories + Criterios Gherkin",
      "Caso de Uso CU 001",
      "Escenario E1 (App Havanna)"
    ],
    fullContentHtml: `
      <div class="doc-section">
        <span class="doc-section-title">1. Historias de Usuario (User Stories)</span>
        <div class="req-grid">
          <div class="req-item">
            <span class="req-code">US - 001</span>
            <p><strong>Compra de producto con verificación de stock en el local seleccionado por medio de la aplicación:</strong><br>
            <em>Como</em> cliente,<br>
            <em>Quiero</em> saber si el producto que seleccioné en la aplicación está disponible en el local antes de comprarlo,<br>
            <em>Para</em> no correr el riesgo de que cancelen el pedido ya confirmado.</p>
            <p style="margin-top:8px;"><strong>Criterios de aceptación (Gherkin):</strong></p>
            <p><strong>Escenario 1: Stock disponible</strong><br>
            • <em>Dada</em> la selección de un producto con stock disponible en el local seleccionado<br>
            • <em>Cuando</em> el cliente confirma la compra<br>
            • <em>Entonces</em> el sistema registra el pedido con el estado pendiente para armar en el local, descuenta las unidades de los productos comprados en el stock del local y envía al cliente la confirmación del pedido.</p>
            <p><strong>Escenario 2: Producto sin stock en el local</strong><br>
            • <em>Dada</em> la selección de un producto sin stock disponible en el local seleccionado<br>
            • <em>Cuando</em> el cliente confirma la compra<br>
            • <em>Entonces</em> el sistema informa que no hay stock disponible en el local seleccionado y no permite efectuar la compra.</p>
          </div>

          <div class="req-item">
            <span class="req-code">US - 002</span>
            <p><strong>Notificación de bajo stock para reposición:</strong><br>
            <em>Como</em> encargado del local,<br>
            <em>Quiero</em> recibir una notificación de bajo stock en la aplicación,<br>
            <em>Para</em> que cuando el stock de un producto sea bajo se me informe para pedir la reposición.</p>
            <p style="margin-top:8px;"><strong>Criterios de aceptación (Gherkin):</strong></p>
            <p><strong>Escenario: Producto con stock igual o por debajo de [x], determinado como "stock bajo"</strong><br>
            • <em>Dado</em> que el stock de un producto llegó a [x] unidades<br>
            • <em>Cuando</em> se actualice el stock por el registro de una compra<br>
            • <em>Y</em> el stock sea igual o menor a [x] unidades<br>
            • <em>Entonces</em> el sistema notifica al encargado del local el evento.</p>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">2. Caso de Uso: CU 001 – Registrar venta</span>
        <ul class="doc-list">
          <li><strong>Actor principal:</strong> Encargado de ventas.</li>
          <li><strong>Objetivo:</strong> Que el cliente compre uno o más productos en el local.</li>
          <li><strong>Precondiciones:</strong> El encargado de ventas inició sesión en el sistema del local. El producto forma parte de la lista de productos en el sistema del local.</li>
          <li><strong>Postcondiciones:</strong> Se registra el pedido realizado. Se registran los productos seleccionados como vendidos. Se actualiza el stock del local.</li>
        </ul>
        <p><strong>Flujo principal:</strong></p>
        <ol style="margin-left: 22px; color: var(--text-body);">
          <li>El encargado accede a la sección "Vender".</li>
          <li>El sistema proporciona una lista con los productos disponibles.</li>
          <li>El encargado selecciona los productos y la cantidad que va a registrar.</li>
          <li>El encargado presiona el botón registrar.</li>
          <li>El sistema valida stock.</li>
          <li>El sistema registra los productos seleccionados como vendidos y el pedido como realizado.</li>
          <li>El sistema actualiza el stock.</li>
          <li>El sistema confirma que los productos fueron registrados como vendidos.</li>
        </ol>
        <p style="margin-top:10px;"><strong>Flujo alternativo:</strong><br>
        • <strong>5.1</strong> El sistema informa que no hay stock disponible. → <strong>5.2</strong> Fin del caso de uso.<br>
        • <strong>8.1</strong> El sistema informa que no se pudo efectuar el registro de productos como vendidos. → <strong>8.2</strong> Fin del caso de uso.</p>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">3. Escenario: E1 – Comprar un producto para retirar en el local</span>
        <ul class="doc-list">
          <li><strong>Objetivo:</strong> Retirar el pedido comprado y confirmado por la aplicación en el local.</li>
          <li><strong>Contexto:</strong> El cliente debe poder realizar en la aplicación de Havanna un pedido que incluya únicamente productos con stock disponible en el local.</li>
          <li><strong>Recursos:</strong> Lista de productos con unidades de stock disponible, stock en el local, carrito, medio de pago.</li>
          <li><strong>Actores:</strong> Cliente.</li>
          <li><strong>Episodios:</strong> 1. El cliente elige el local de retiro. → 2. El cliente selecciona productos. → 3. El cliente agrega los productos seleccionados al carrito. → 4. El sistema aprueba el pago. → 5. El sistema envía la confirmación del pedido.</li>
        </ul>
      </div>
    `
  },

  // =========================================================================
  // TRABAJOS GRUPALES — GRUPO 6 (5 TRABAJOS)
  // =========================================================================

  // 12. GRUPAL 1: CLASE 1 - SOFTWARE (GRUPO 6)
  {
    id: "tp1-software-unico",
    number: "Grupal 01",
    modality: "grupal",
    modalityLabel: "👥 Trabajo Grupal · Grupo 6",
    category: "practicos",
    categoryLabel: "Clase 1 · Entrega 19/08/26 · Grupo 6",
    isSimulation: false,
    sourceFile: "archivos/TP1+GRUPAL.pdf",
    sourceFileName: "TP1+GRUPAL.pdf",
    title: "Ejercitación Obligatoria — Clase 1: El Software como Producto y Proceso (Grupo 6)",
    subtitle: "Cuadro comparativo «¿El software es único?» frente a otros productos de ingeniería y análisis de Corrección Funcional y Mantenibilidad",
    previewSummary: "Entrega grupal (Grupo 6 · 19/08/26): comparación estructural del Software frente a un Puente, un Automóvil, una Novela y un Proyecto de Investigación según intangibilidad, contenido intelectual, proceso de desarrollo, modificabilidad, degradación y costo de reproducción. Justificación de las cualidades esenciales: Corrección Funcional y Mantenibilidad.",
    highlights: [
      "Grupo 6 (19/08/26)",
      "Cuadro Comparativo Completo",
      "Corrección Funcional",
      "Mantenibilidad"
    ],
    fullContentHtml: `
      <div class="doc-section">
        <span class="doc-section-title">1. ¿El software es único? Cuadro Comparativo (Grupo 6)</span>
        <div class="dollop-table-wrap">
          <table class="dollop-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Software</th>
                <th>Puente</th>
                <th>Automóvil</th>
                <th>Novela</th>
                <th>Proyecto Investigación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Intangible</strong></td>
                <td>Sí</td>
                <td>No</td>
                <td>No</td>
                <td>Sí</td>
                <td>Sí</td>
              </tr>
              <tr>
                <td><strong>Contenido intelectual</strong></td>
                <td>Alto</td>
                <td>Medio</td>
                <td>Medio</td>
                <td>Alto</td>
                <td>Alto</td>
              </tr>
              <tr>
                <td><strong>Se lo reconoce activo contable</strong></td>
                <td>No</td>
                <td>Sí</td>
                <td>Sí</td>
                <td>Sí</td>
                <td>No</td>
              </tr>
              <tr>
                <td><strong>Proceso: Mano de obra intensivo</strong></td>
                <td>Sí</td>
                <td>Sí</td>
                <td>No</td>
                <td>Sí</td>
                <td>Sí</td>
              </tr>
              <tr>
                <td><strong>Proceso: Basado en equipos</strong></td>
                <td>Sí</td>
                <td>Sí</td>
                <td>Sí</td>
                <td>No</td>
                <td>Sí</td>
              </tr>
              <tr>
                <td><strong>Proceso: Por proyectos</strong></td>
                <td>Sí</td>
                <td>Sí</td>
                <td>No</td>
                <td>Sí</td>
                <td>Sí</td>
              </tr>
              <tr>
                <td><strong>Relación R&amp;D y producción</strong></td>
                <td>Unidas</td>
                <td>Separadas</td>
                <td>Separadas</td>
                <td>Unidas</td>
                <td>Unidas</td>
              </tr>
              <tr>
                <td><strong>Modificabilidad</strong></td>
                <td>Indefinidamente</td>
                <td>Baja</td>
                <td>Baja</td>
                <td>Media</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td><strong>Degradación</strong></td>
                <td>No</td>
                <td>Sí</td>
                <td>Sí</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td><strong>Costo de reproducción</strong></td>
                <td>Despreciable</td>
                <td>No despreciable</td>
                <td>No despreciable</td>
                <td>Despreciable</td>
                <td>Despreciable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">2. Cualidades Esenciales del Software Seleccionadas</span>
        <ul class="doc-list">
          <li><strong>CORRECCIÓN FUNCIONAL:</strong> El sistema debe cumplir correctamente con las funciones y requisitos para los que fue desarrollado. Esto garantiza que realice las operaciones esperadas y entregue resultados correctos, evitando errores que puedan afectar al usuario o al funcionamiento de la organización.</li>
          <li><strong>MANTENIBILIDAD:</strong> El sistema debe estar diseñado de manera que sea fácil de corregir, actualizar y modificar. Esto permite solucionar errores, agregar nuevas funcionalidades o adaptarlo a cambios futuros sin tener que rehacer todo el sistema.</li>
        </ul>
        <p style="margin-top:12px;"><strong>Justificación:</strong> Elegimos estas dos cualidades porque consideramos que son fundamentales para cualquier sistema de software. Por un lado, es necesario que el sistema funcione correctamente y cumpla con lo que se espera de él. Por otro lado, también es importante poder mantenerlo y adaptarlo a futuros cambios sin que esto implique rehacer todo el sistema.</p>
      </div>
    `
  },

  // 13. GRUPAL 2: CLASE 4 - SISTEMA DE BIBLIOTECA (GRUPO 6)
  {
    id: "clase4-sistema-biblioteca",
    number: "Grupal 02",
    modality: "grupal",
    modalityLabel: "👥 Trabajo Grupal · Grupo 6",
    category: "practicos",
    categoryLabel: "Clase 4 · Entrega 09/09/26 · Grupo 6",
    isSimulation: false,
    sourceFile: "archivos/clase4.txt",
    sourceFileName: "clase4.txt",
    title: "Ejercitación Obligatoria — Clase 4: Sistema de Biblioteca de la Facultad (Grupo 6)",
    subtitle: "Identificación de Necesidades, Deseos, Expectativas, Stakeholders y diferenciación entre Requerimientos de Usuario y de Sistema",
    previewSummary: "Entrega grupal (Grupo 6 · 09/09/26) sobre el caso de estudio «Sistema de biblioteca de una Facultad de Informática» dependiente de la Secretaría Académica. Clasificación exhaustiva de necesidades, deseos y expectativas, comparación conceptual entre requerimientos de usuario vs. sistema y mapeo completo de stakeholders organizacionales.",
    highlights: [
      "Grupo 6 (09/09/26)",
      "Necesidades, Deseos y Expectativas",
      "Req. de Usuario vs. Sistema",
      "Mapeo de Stakeholders"
    ],
    fullContentHtml: `
      <div class="doc-section">
        <span class="doc-section-title">Contexto del Caso: Sistema de Biblioteca de una Facultad de Informática (Grupo 6)</span>
        <p>La biblioteca cuenta con tres tipos de materiales (libros de texto, libros de consulta y publicaciones periódicas) además de acceso a bases de datos bibliográficas. Depende funcionalmente de la Secretaría Académica y se busca desarrollar un sistema automatizado de gestión para reducir el trabajo manual a su mínima expresión.</p>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Pregunta 1: Necesidades, Deseos y Expectativas</span>
        <p><strong>NECESIDADES:</strong></p>
        <ul class="doc-list">
          <li>Registrar y controlar préstamo y devolución del material bibliográfico (libros de texto, libros de consulta y publicaciones periódicas).</li>
          <li>Consultar disponibilidad de un material específico antes de retirarlo.</li>
          <li>Gestión de sanciones por incumplimiento de devolución o devolución en mal estado.</li>
          <li>Control de accesos para limitar solo al personal autorizado el uso del sistema.</li>
          <li>Trazabilidad de ejemplares para saber su disponibilidad y su ubicación.</li>
          <li>Acceso y gestión de las bases de datos de material bibliográfico con las que cuenta la biblioteca.</li>
          <li>Poder gestionar y acceder a los tres tipos de materiales de lectura de la biblioteca desde un solo sitio.</li>
          <li>Proporcionar a la Secretaría Académica acceso a informes y datos estadísticos sobre el uso de la biblioteca y el control de materiales.</li>
          <li>Automatizar el sistema de gestión de la biblioteca con el fin de reducir el trabajo manual.</li>
        </ul>
        <p><strong>DESEOS:</strong></p>
        <ul class="doc-list">
          <li>Recibir notificaciones (por mail o mensaje) como recordatorio para cuando se acerca la fecha de vencimiento de un préstamo.</li>
          <li>Tener un sistema de recomendaciones de material bibliográfico que tenga en cuenta el historial de consultas del usuario.</li>
          <li>Poder reservar online un material que esté actualmente prestado.</li>
          <li>Cargar y categorizar toda la bibliografía de la facultad en el sistema.</li>
          <li>Permitir el acceso de todos los estudiantes a la biblioteca, autenticándolos para validar su perfil de usuario.</li>
        </ul>
        <p><strong>EXPECTATIVAS:</strong></p>
        <ul class="doc-list">
          <li>Que la información sobre el estado de los préstamos sea confiable y esté siempre actualizada.</li>
          <li>Que se reduzca al mínimo el trabajo manual de la biblioteca.</li>
          <li>Mejorar la eficiencia operativa.</li>
          <li>Mejorar la calidad del servicio de biblioteca de la facultad.</li>
          <li>Reducir tiempos de gestión.</li>
        </ul>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Pregunta 2: Diferencias entre Requerimientos del Usuario y Requerimientos del Sistema</span>
        <p><strong>Requerimientos de Usuario:</strong> Describen las necesidades, objetivos o expectativas del usuario o del negocio. Se expresan de manera sencilla y sin tantos detalles técnicos en lenguaje natural, comprensible para los clientes, usuarios y stakeholders. Responden a la pregunta <em>¿Qué necesita que haga el sistema?</em> Se utilizan para comunicar y validar las necesidades del negocio.<br>
        <em>Ejemplos:</em> Desarrollar un sistema automatizado de gestión de la biblioteca, reducir el trabajo manual y automatizar las funciones de la biblioteca.</p>
        <p><strong>Requerimientos del Sistema:</strong> Son especificaciones más detalladas, estructuradas, claras y técnicas que los requerimientos de usuario. Responden a <em>¿Qué debe hacer con exactitud el sistema para satisfacer la necesidad del cliente?</em> y cómo debe funcionar el sistema para cumplir con esas necesidades. Están dirigidos a los analistas, diseñadores, desarrolladores y testers, sirviendo como base para el diseño, la implementación y las pruebas.<br>
        <em>Ejemplos:</em> El sistema deberá administrar el acceso a bases de datos bibliográficas, gestionar préstamos y devoluciones del material.</p>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Pregunta 3: Identificación de Stakeholders</span>
        <p>Los stakeholders del Sistema de la Biblioteca de la Facultad son:</p>
        <ul class="doc-list">
          <li>El Decano y Vicedecano.</li>
          <li>La Secretaría Académica (de quien depende funcionalmente la biblioteca).</li>
          <li>El Secretario de Ciencia, Técnica y Postgrado.</li>
          <li>La Secretaría de Extensión.</li>
          <li>La Dirección de Ingreso y la Dirección de Servicios a Graduados.</li>
          <li>Bibliotecarios y personal administrativo de la facultad.</li>
          <li>Estudiantes, docentes e investigadores (usuarios directos).</li>
          <li>La empresa encargada de desarrollar el sistema.</li>
        </ul>
      </div>
    `
  },

  // 14. GRUPAL 3: EJERCITACIÓN PRÁCTICA ESPECIFICACIÓN EN IR (GRUPO 6)
  {
    id: "especificaciones-bicicletas",
    number: "Grupal 03",
    modality: "grupal",
    modalityLabel: "👥 Trabajo Grupal · Grupo 6",
    category: "practicos",
    categoryLabel: "Clase 5 · Entrega 10/09/26 · Grupo 6",
    isSimulation: false,
    sourceFile: "archivos/Especificaciones_Grupo6+(1).pdf",
    sourceFileName: "Especificaciones_Grupo6+(1).pdf",
    title: "Ejercitación Práctica Especificación en Ingeniería de Requerimientos: Bicicletas Compartidas (Grupo 6)",
    subtitle: "Redacción formal de RF y RNF, detección y corrección de ambigüedades y construcción de Mini Glosario de dominio",
    previewSummary: "Entrega grupal (Grupo 6 · 10/09/26) sobre una aplicación móvil de bicicletas compartidas: formulación estructurada de 9 Requerimientos Funcionales (RF 001 a RF 009) y 2 No Funcionales (RNF 001–002), detección y corrección de 5 enunciados ambiguos y definición de glosario (Doble reserva, Modo offline, Tiempo de reserva).",
    highlights: [
      "Grupo 6 (10/09/26)",
      "9 RF y 2 RNF Estructurados",
      "Corrección de Ambigüedades",
      "Mini Glosario de Dominio"
    ],
    fullContentHtml: `
      <div class="doc-section">
        <span class="doc-section-title">1. Requerimientos Funcionales (RF) — Grupo 6</span>
        <div class="req-grid">
          <div class="req-item"><span class="req-code">RF 001</span><p>El sistema debe registrar al usuario en caso de no haber sido registrado previamente.</p></div>
          <div class="req-item"><span class="req-code">RF 002</span><p>El sistema debe autenticar al usuario para validar su identidad.</p></div>
          <div class="req-item"><span class="req-code">RF 003</span><p>El sistema debe mostrar las estaciones disponibles en el mapa y la disponibilidad en cada estación.</p></div>
          <div class="req-item"><span class="req-code">RF 004</span><p>El sistema debe permitir al usuario reservar una bicicleta por 15 minutos.</p></div>
          <div class="req-item"><span class="req-code">RF 005</span><p>El sistema debe permitir al usuario reportar daños en bicicletas.</p></div>
          <div class="req-item"><span class="req-code">RF 006</span><p>El sistema debe permitir al usuario visualizar su historial de viajes.</p></div>
          <div class="req-item"><span class="req-code">RF 007</span><p>El sistema debe permitir al usuario ver el mapa sin haber hecho la reservación.</p></div>
          <div class="req-item"><span class="req-code">RF 008</span><p>El sistema debe enviar una notificación al usuario al finalizar el tiempo de reserva.</p></div>
          <div class="req-item"><span class="req-code">RF 009</span><p>El sistema debe asegurar que no haya doble reserva de una misma bicicleta.</p></div>
        </div>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">2. Requerimientos No Funcionales (RNF)</span>
        <div class="req-grid">
          <div class="req-item rnf-item"><span class="req-code">RNF 001</span><p>El sistema le debe permitir al usuario operar en modo offline.</p></div>
          <div class="req-item rnf-item"><span class="req-code">RNF 002</span><p>El sistema debe cifrar las credenciales de los usuarios para garantizar la privacidad de los datos.</p></div>
        </div>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">3. Detección y Corrección de Ambigüedades</span>
        <div class="dollop-table-wrap">
          <table class="dollop-table">
            <thead>
              <tr>
                <th>Enunciado Original (Ambiguo)</th>
                <th>Versión Corregida y Verificable (Grupo 6)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>"El sistema debe tener buena seguridad."</em></td>
                <td>El sistema debe cumplir con la Ley 25.326 de protección de datos personales.</td>
              </tr>
              <tr>
                <td><em>"Los usuarios deben poder hacer reservas sin problemas."</em></td>
                <td>El sistema debe permitir al usuario realizar reservas de una bicicleta con disponibilidad a un único usuario, actualizando su estado en el sistema como no disponible.</td>
              </tr>
              <tr>
                <td><em>"Tiene que mostrar las estaciones como sea."</em></td>
                <td>El sistema debe permitir al usuario visualizar las estaciones disponibles actualmente como puntos de retiro.</td>
              </tr>
              <tr>
                <td><em>"Se debe poder usar el mapa cuando no hay conexión."</em></td>
                <td>El sistema le debe permitir al usuario operar en modo offline.</td>
              </tr>
              <tr>
                <td><em>"Debe permitir el acceso a la cuenta."</em></td>
                <td>El sistema debe registrar al usuario en caso de no haber sido registrado previamente y autenticar al usuario para validar su identidad, otorgándole acceso a su cuenta.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">4. Mini Glosario</span>
        <ul class="doc-list">
          <li><strong>Doble reserva:</strong> Error de asignación de una única bicicleta a más de un usuario en simultáneo.</li>
          <li><strong>Modo offline:</strong> Funcionamiento de la aplicación sin conexión a internet, mostrando el contenido correspondiente guardado previamente en el dispositivo.</li>
          <li><strong>Tiempo de reserva:</strong> Lapso en el que el estado de la bicicleta se encuentra como no disponible debido a su asignación temporal.</li>
        </ul>
      </div>
    `
  },

  // 15. GRUPAL 4: ACTIVIDAD DE APRENDIZAJE PROCESOS DE LA IR (GRUPO 6)
  {
    id: "procesos-ir-turnos",
    number: "Grupal 04",
    modality: "grupal",
    modalityLabel: "👥 Trabajo Grupal · Grupo 6",
    category: "practicos",
    categoryLabel: "Clase 5 · Entrega 16/09/26 · Grupo 6",
    isSimulation: false,
    sourceFile: "archivos/Actividad+de+aprendizaje+procesos+de+la+IR.pdf",
    sourceFileName: "Actividad+de+aprendizaje+procesos+de+la+IR.pdf",
    title: "Actividad de Aprendizaje: Procesos de la Ingeniería de Requerimientos (Grupo 6)",
    subtitle: "Elicitación, Especificación, Validación (Prototipos y WalkThrough), Trazabilidad y Gestión de Cambios en un Sistema de Turnos de Salud",
    previewSummary: "Entrega grupal (Grupo 6 · 16/09/26) que desarrolla las 4 etapas de la Ingeniería de Requerimientos para una institución de salud: 1) Elicitación (stakeholders, cuestionario, RF y RNF), 2) Especificación detallada de RF1 y RF4, 3) Validación mediante Prototipos y WalkThrough, y 4) Gestión de Requerimientos con esquema de trazabilidad Backward/Forward y control de cambios en la línea base.",
    highlights: [
      "Grupo 6 (16/09/26)",
      "Elicitación y Especificación",
      "Prototipos y WalkThrough",
      "Trazabilidad y Gestión de Cambios"
    ],
    fullContentHtml: `
      <div class="doc-section">
        <span class="doc-section-title">Parte 1 — Elicitación (Grupo 6)</span>
        <p><strong>1) Stakeholders relevantes:</strong> Doctores, pacientes y recepcionistas.</p>
        <p><strong>2) Preguntas de elicitación:</strong></p>
        <ul class="doc-list">
          <li>¿Cómo se asigna actualmente un turno y qué información se registra en cada reserva?</li>
          <li>¿Qué pasa hoy cuando un paciente cancela o no puede asistir a su turno?</li>
          <li>¿Qué canales les gustaría usar a los pacientes para pedir un turno (web, app, teléfono)?</li>
          <li>¿Qué información necesita ver un médico antes de atender a un paciente (historial, motivo de consulta, etc.)?</li>
          <li>¿Existen reglas específicas para la asignación de turnos (por especialidad, por obra social, por urgencia)?</li>
        </ul>
        <p><strong>3) Requerimientos identificados:</strong></p>
        <div class="req-grid">
          <div class="req-item"><span class="req-code">RF 1</span><p>El sistema deberá permitir al paciente solicitar un turno médico seleccionando especialidad, médico y horario disponible.</p></div>
          <div class="req-item"><span class="req-code">RF 2</span><p>El sistema deberá permitir al personal administrativo modificar o cancelar un turno ya asignado.</p></div>
          <div class="req-item"><span class="req-code">RF 3</span><p>El sistema deberá notificar automáticamente al médico cuando un paciente cancele un turno.</p></div>
          <div class="req-item"><span class="req-code">RF 4</span><p>El sistema deberá impedir la asignación de un mismo horario a dos pacientes distintos (evitar duplicación de turnos).</p></div>
          <div class="req-item rnf-item"><span class="req-code">RNF 1</span><p>El sistema deberá garantizar la confidencialidad de los datos de los pacientes, permitiendo el acceso solo a usuarios autorizados según su rol.</p></div>
          <div class="req-item rnf-item"><span class="req-code">RNF 2</span><p>El sistema deberá responder a las solicitudes de turno en un tiempo menor a 3 segundos.</p></div>
        </div>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Parte 2 — Especificación Detallada</span>
        <ul class="doc-list">
          <li><strong>RF1 – Solicitud de turno:</strong> El sistema permitirá al paciente, previamente autenticado con su usuario, seleccionar una especialidad médica, visualizar médicos disponibles y elegir un horario dentro de los turnos disponibles. Una vez confirmada la solicitud, el sistema deberá registrar el turno, marcar el horario como "no disponible" y enviar una confirmación al paciente por correo electrónico.</li>
          <li><strong>RF4 – Prevención de duplicación de turnos:</strong> El sistema deberá validar, antes de confirmar cualquier reserva, que el horario y el doctor seleccionados no tengan ya un turno asignado a otro paciente. En caso de detectar un conflicto, el sistema rechazará la solicitud y le mostrará al usuario los horarios alternativos disponibles para esa especialidad o médico.</li>
        </ul>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Parte 3 — Validación (Prototipos y WalkThrough)</span>
        <p>Las dos técnicas de validación más convenientes para este sistema de turnos en una institución de salud son los <strong>Prototipos</strong> y la <strong>Revisión de requisitos con interesados (WalkThrough)</strong>:</p>
        <p><strong>Prototipos:</strong> Modelo de implementación rápido con código ineficiente que busca validar las interfaces de usuario, la lógica, reglas de negocio y funcionalidades del sistema, imitándolas. Permite al usuario visualizar el funcionamiento del sistema, evaluar la interacción y generar feedback sobre la UX antes de iniciar la etapa de codificación. En la clínica se reunirá a pacientes y recepcionistas para evaluar la solicitud, modificación y cancelación de turnos en pantallas móviles y web.</p>
        <p><strong>WalkThrough:</strong> Técnica de análisis en la que se examina la especificación de requerimientos de software (SRS) junto a los stakeholders y expertos en el dominio (doctores, recepcionistas y equipo de análisis) para identificar ambigüedades, contradicciones, inconsistencias u omisiones, validando notificaciones por cancelación, prevención de duplicación, disponibilidad horaria y que los RNF sean medibles y verificables.</p>
        <p><strong>Feedback esperado del personal administrativo:</strong> Si faltan funcionalidades operativas como la reasignación eficiente del paciente a un nuevo turno sin recargar todos sus datos; validación del comportamiento ante asignación simultánea por diferentes recepcionistas; si la UX refleja el calendario de turnos y citas canceladas esperado; y si desean capacidades extras no esenciales.</p>
        <p><strong>Feedback esperado de los pacientes:</strong> Si la secuencia de pasos es lógica; si el lenguaje es comprensible (sin tecnicismos); y si el tamaño de letra es legible para personas mayores.</p>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Parte 4 — Gestión de Requerimientos y Trazabilidad</span>
        <p><strong>1) Aplicación de Trazabilidad (Backward ⟵ y Forward ⟶):</strong></p>
        <div class="traceability-flow">
          <div class="trace-node">
            <h5>⬅ Backward (Fuente de los requerimientos)</h5>
            <p><strong>RF4 - Prevención de duplicación de turnos:</strong> Necesidad del negocio de evitar que dos pacientes reserven el mismo horario con el mismo profesional.</p>
          </div>
          <div class="trace-node">
            <h5>Documento SRS</h5>
            <p><strong>RF4:</strong> Bloquear las reservas en horarios que estén ocupados y ofrecer horarios alternativos.</p>
          </div>
          <div class="trace-node">
            <h5>Forward (Diseño del sistema) ➡</h5>
            <p>Se crea una restricción en la base de datos que impida filas o datos duplicados; si la base de datos lo registra, procederá a bloquear la reserva y enviar una notificación de error al usuario.</p>
          </div>
        </div>
        <p><strong>2) Gestión de un cambio a mitad del proyecto (que los pacientes puedan cancelar turnos en línea):</strong></p>
        <ul class="doc-list">
          <li><strong>Registro y gestión en el proceso:</strong> 1. Recepción de la solicitud formal por parte del cliente → 2. Especificación del cambio → 3. Análisis del posible cambio → 4. Análisis de su impacto técnico (qué cambiaría de los RF ya hechos) → 5. Estimación de recursos y nuevos costos → 6. Aprobación del cambio → 7. Actualización de la documentación de requerimientos → 8. Implementación del cambio.</li>
          <li><strong>Impacto sobre los requerimientos definidos:</strong> La línea base se vería afectada porque se agregaría un requerimiento más que se enlaza de forma directa con el RF2 y RF3. El RF2 se vería afectado: los recepcionistas ahora solo deben actualizar el sistema y allí divisarían la cancelación hecha por parte del paciente; solo en caso de ser necesario los recepcionistas pueden modificar la reserva de turno.</li>
        </ul>
      </div>
    `
  },

  // 16. GRUPAL 5: INFORME GRUPAL DE INVESTIGACIÓN (ANTONELLI Y OLIVEROS - 8 DE OCTUBRE)
  {
    id: "grupal-investigacion-antonelli",
    number: "Grupal 05",
    modality: "grupal",
    modalityLabel: "👥 Trabajo Grupal · Grupo 6",
    category: "investigacion",
    categoryLabel: "Informe Grupal · 08/10/26 · Grupo 6",
    isSimulation: false,
    sourceFile: "archivos/TpIR_8Oct.pdf",
    sourceFileName: "TpIR_8Oct.pdf (y TpInvestigacion.txt)",
    title: "Trabajo Grupal de Investigación: Prácticas de Elicitación en Organizaciones de Software (Grupo 6)",
    subtitle: "Análisis grupal de la ponencia de Antonelli y Oliveros sobre técnicas de elicitación tradicionales, grupales y fuentes de requerimientos",
    previewSummary: "Entrega grupal (Grupo 6 · 08/10/26, Parte 1 de TpInvestigacion.txt): informe sobre el estudio empírico de Antonelli y Oliveros acerca de las prácticas de elicitación en organizaciones de desarrollo de software (92% de uso de técnicas tradicionales, rol del brainstorming, diferencias según antigüedad profesional y preferencia de Casos de Uso vs. Diagramas de Clase).",
    highlights: [
      "Grupo 6 (08/10/26)",
      "Estudio Antonelli y Oliveros",
      "92% Técnicas Tradicionales",
      "Entrevistas, Brainstorming y Casos de Uso"
    ],
    fullContentHtml: `
      <div class="doc-section">
        <span class="doc-section-title">Consigna de la Parte 1 (Trabajo Grupal)</span>
        <p><em>Archivo de consigna: <a href="archivos/TpInvestigacion.txt" target="_blank" class="file-link-secondary">TpInvestigacion.txt</a></em> — Escribir en forma grupal un informe breve que conste de una introducción, un desarrollo de las partes principales de la ponencia basada en el trabajo de investigación de Antonelli y Oliveros, y una breve conclusión.</p>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">Desarrollo Completo del Informe Grupal (TpIR_8Oct.pdf)</span>
        <p>En este artículo los investigadores Antonelli y Oliveros se plantean la pregunta: <em>"¿Cuáles son las prácticas de elicitación que utilizan las organizaciones de desarrollo de software?"</em> (Oliveros y Antonelli, 2026). Teniendo en cuenta que "todo el conocimiento relevante necesario para producir un modelo de los requerimientos de un dominio de problema" (Loucopoulos y Karakostas, 1995, como se citó en Oliveros y Antonelli, 2026) enuncia una serie de técnicas principales de elicitación (Bourque y Fairley, 2014, como se citó en Oliveros y Antonelli, 2026), en la ingeniería de software entre las técnicas de elicitación que más se destacan se encuentran <strong>entrevistas, escenarios, prototipos, brainstorming, observación e historias de usuarios</strong>. Los investigadores aclaran que utilizan una taxonomía sencilla con la finalidad de ayudar a comprender con mayor facilidad el conocimiento que buscan transmitir (Oliveros y Antonelli, 2026).</p>
        <p>Se analizaron diferentes estudios en los que se compararon el uso de las diferentes técnicas de elicitación (Oliveros y Antonelli, 2026). En cuanto a las <strong>técnicas tradicionales</strong>, se denotó que son las más utilizadas, ya que alcanzan el <strong>92%</strong>; siguiéndoles las grupales con la utilización del <strong>brainstorming</strong>, mientras que las técnicas restantes se encuentran por debajo del 50% (Oliveros y Antonelli, 2026). Estos resultados se explican por las diversas experiencias entre los entrevistados (Oliveros y Antonelli, 2026).</p>
        <p>Sobre el grupo estudiado de personas con <strong>seis años de experiencia o menos</strong> se llegó a la conclusión de que utilizan análisis de documentación existente y brainstorming, mientras que el restante utiliza cuestionarios y encuestas (Oliveros y Antonelli, 2026).</p>
        <p>Se determinó que el tipo de entrevista predominante es el <strong>individual</strong> por la profundidad de indagación en contenidos. Sin embargo, se restringe a un único individuo y la duración de la entrevista no siempre es suficiente (Oliveros y Antonelli, 2026).</p>
        <p>Con relación al uso de formularios, alrededor del <strong>31%</strong> de los entrevistados afirmaron que habitualmente los usan como fuente de requerimientos (Oliveros y Antonelli, 2026). Por otro lado, para el producto de desarrollo previo, los entrevistadores hacen uso del <strong>diagrama de clase</strong> debido a la buena experiencia de los entrevistados. Asimismo, para los desarrolladores es preferible la utilización de <strong>Casos de Uso</strong> (Oliveros y Antonelli, 2026).</p>
        <p><strong>Conclusión:</strong> Aunque haya pocos estudios sobre prácticas de elicitación, mediante esta investigación se logró descubrir que las técnicas más utilizadas son las tradicionales. Luego, se encuentra el Brainstorming, desarrollado de forma grupal (Oliveros y Antonelli, 2026). Finalmente, sobre las fuentes de requerimientos, se concluyó que el uso de información obtenida en entrevistas individuales, probablemente debido a su alcance, se asocia a proyectos de menor escala (Oliveros y Antonelli, 2026).</p>
      </div>
    `
  }
,
  // =========================================================================
  // TRABAJO PRÁCTICO INTEGRADOR — «PODCAST DEL INGENIERO» (GRUPO 6)
  // ACTIVIDAD ESPECIAL GRUPAL: CASO FRANQUICIA HAVANNA (3 ENTREGAS)
  // =========================================================================

  // 17. TPI - ENTREGA 1: ENUNCIADO DEL DOMINIO (HAVANNA)
  {
    id: "tpi-entrega1-enunciado",
    number: "TPI · Entrega 1",
    modality: "grupal",
    activityType: "integrador",
    isIntegrador: true,
    modalityLabel: "👥 Trabajo Grupal (Grupo 6) · TP Integrador",
    category: "integrador",
    categoryLabel: "Proyecto Integrador · Podcast del Ingeniero · Entrega 1",
    isSimulation: false,
    sourceFile: "archivos/cafe-requerimientos-havanna-ia.png",
    sourceFileName: "TPI_Entrega1_Havanna.pdf",
    title: "TP Integrador — «Podcast del Ingeniero» · Entrega 1: Enunciado del Dominio (Havanna)",
    subtitle: "Delimitación del caso de estudio: Franquicia Havanna, cafetería y retail, modalidades de venta y sincronización de stock en tiempo real",
    previewSummary: "Entrega 1 del Trabajo Práctico Integrador (Grupo 6): Delimitación y enunciado formal del dominio del problema para la franquicia Havanna. Comprende el servicio de cafetería y venta minorista (retail), modalidades de venta (mostrador, tienda virtual e-commerce y app con Take Away), áreas organizacionales (Gerente, Encargado de góndola, Cajero, Clientes), dependencias funcionales y el objetivo del sistema para sincronizar stock en tiempo real y eliminar sobreventas.",
    highlights: [
      "Grupo 6 · TP Integrador",
      "Caso Franquicia Havanna",
      "Cafetería & Retail",
      "Sincronización en Tiempo Real",
      "Prof. Marcela Samela"
    ],
    fullContentHtml: `
      <div class="podcast-cover-banner">
        <img src="archivos/cafe-requerimientos-havanna-ia.png" alt="Café de Requerimientos - Franquicia Havanna (Imagen Oficial generada con IA)" class="podcast-cover-img" />
        <div class="podcast-cover-meta">
          <span class="badge-integrador">🎙️ TRABAJO PRÁCTICO INTEGRADOR · ENTREGA 1</span>
          <h4>«PODCAST DEL INGENIERO» — CASO HAVANNA</h4>
          <p><strong>Universidad:</strong> Universidad Abierta Interamericana (UAI)<br>
          <strong>Asignatura:</strong> Ingeniería de Requerimientos<br>
          <strong>Docente:</strong> Prof. Marcela Samela<br>
          <strong>Integrantes del Grupo 6:</strong> Agostina Melegari, Daniela Benitez y Dana Graziano</p>
        </div>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">1. Consigna Oficial de la Entrega 1</span>
        <div class="info-note-box">
          <p><strong>Objetivo:</strong> Iniciar el Trabajo Práctico Integrador mediante la definición de un caso de estudio propio, que servirá de base para aplicar, en las entregas sucesivas, el ciclo completo de la Ingeniería de Requerimientos.</p>
          <p><strong>Resultados de aprendizaje involucrados:</strong> RA1 — Obtiene conocimiento de un dominio para definir los requerimientos de software. (En esta entrega se activa en su fase inicial: delimitar y comprender el dominio del problema).</p>
          <p><strong>Criterios de evaluación:</strong> Claridad y precisión en la redacción del enunciado del dominio; cobertura de contexto, recursos, áreas involucradas, dependencias funcionales y objetivo del sistema; adecuación del alcance; coherencia y verosimilitud; estructura clara y ordenada; originalidad del caso de estudio.</p>
        </div>
      </div>

      <div class="doc-section">
        <span class="doc-section-title">2. Enunciado del Dominio: Franquicia Havanna (Grupo 6)</span>
        <p>Considerar el sistema de una franquicia de la cafetería <strong>Havanna</strong>.</p>
        <p>La franquicia posee <strong>dos tipos de negocio</strong>:</p>
        <ul>
          <li><strong>Servicio de cafetería:</strong> elaboración y consumo en el local o al paso.</li>
          <li><strong>Venta minorista de productos industriales (retail):</strong> alfajores, chocolates, dulces y especialidades envasadas.</li>
        </ul>

        <p>La cadena posee <strong>diferentes modalidades de venta</strong>:</p>
        <ul>
          <li>En mostrador (cafetería y retail) y tienda virtual de e-commerce.</li>
          <li>Su propia aplicación móvil para pedidos desde las mesas y modalidad Take Away.</li>
        </ul>

        <p>En los diferentes tipos de negocio se venden:</p>
        <ul>
          <li><strong>Productos retail:</strong> Cajas de alfajores clásicos, Havannets, cookies, chocolates, tabletas y frascos de dulce de leche.</li>
          <li><strong>Productos de elaboración (cafetería):</strong> Cafés, lattes, frappés, licuados y pastelería.</li>
        </ul>

        <div class="alert-box-warning">
          <strong>Problemática del dominio:</strong> Los pedidos online, de cafetería y de retail se encuentran unificados; productos con diferentes fines están juntos. Existen alertas de quiebre de stock cuando un producto llega a una cantidad crítica. Sin embargo, al descontar los empleados el stock manualmente según la modalidad de venta, surgen discrepancias que provocan sobreventas y cancelaciones de pedidos.
        </div>

        <p><strong>Las áreas organizacionales y actores del local son:</strong></p>
        <div class="stakeholders-summary-grid">
          <div class="stakeholder-card">
            <h4>👔 Gerente del local</h4>
            <p>Administra las compras a la planta central de Havanna, controla los cierres de caja y supervisa el inventario general del establecimiento.</p>
          </div>
          <div class="stakeholder-card">
            <h4>📦 Encargado del stock en góndola (retail)</h4>
            <p>Es quien debe reponer los productos en los estantes físicos y auditar las bajas de stock, mermas y roturas.</p>
          </div>
          <div class="stakeholder-card">
            <h4>💳 Cajero</h4>
            <p>Registra las ventas del mostrador, cobra los productos y despacha los pedidos de Take Away generados desde la aplicación.</p>
          </div>
          <div class="stakeholder-card">
            <h4>☕ Clientes (Usuarios)</h4>
            <p>Envían transacciones al sistema mediante compras en el mostrador físico, pedidos en mesa o a través de la app y la tienda virtual.</p>
          </div>
        </div>

        <p style="margin-top:16px;"><strong>Funcionalmente el sistema dependerá de:</strong></p>
        <ul>
          <li><strong>El sistema de punto de venta (POS) físico del local:</strong> para descontar el stock global al registrar la venta presencial de un producto.</li>
          <li><strong>El registro de ventas por la App de Havanna:</strong> para modificar el stock de la oferta de productos tanto del local como de la misma aplicación en tiempo real.</li>
        </ul>

        <div class="highlight-objective-card">
          <h4>🎯 Objetivo del sistema a desarrollar</h4>
          <p>Se solicita desarrollar un <strong>sistema centralizado de catálogo e inventario con actualización en tiempo real</strong>. El objetivo es automatizar la sincronización de las existencias físicas del local con la oferta digital. Se busca eliminar la necesidad del trabajo manual de los empleados para dar de baja los productos según la modalidad de venta, evitando la sobreventa de productos con alta demanda, optimizando la experiencia del cliente y reduciendo drásticamente las cancelaciones por falta de stock.</p>
        </div>
      </div>
    `
  },

  // 18. TPI - ENTREGA 2: DOMINIO INTEGRADO, STAKEHOLDERS, ELICITACIÓN, CUALIDADES Y LEL (HAVANNA)
  {
    id: "tpi-entrega2-podcast-ep1",
    number: "TPI · Entrega 2",
    modality: "grupal",
    activityType: "integrador",
    isIntegrador: true,
    modalityLabel: "👥 Trabajo Grupal (Grupo 6) · TP Integrador",
    category: "integrador",
    categoryLabel: "Proyecto Integrador · Podcast del Ingeniero · Entrega 2",
    isSimulation: false,
    sourceFile: "archivos/TPI_Entrega2_Havanna.pdf",
    sourceFileName: "TPI_Entrega2_Havanna.pdf",
    title: "TP Integrador — «Podcast del Ingeniero» · Entrega 2: Dominio, Stakeholders, Elicitación, Cualidades y LEL",
    subtitle: "Integración del dominio Havanna, identificación de stakeholders directos/indirectos con características y motivaciones, técnicas de elicitación, cualidades y LEL",
    previewSummary: "Entrega 2 oficial del Trabajo Práctico Integrador (Grupo 6 · Caso Havanna): integra y amplía el enunciado del dominio de la Entrega 1, incorporando la identificación exhaustiva de stakeholders directos (Gerente, Encargado de góndola, Cajero, Cliente) e indirectos (Havanna franquiciante, Planta central, Equipo de desarrollo) con sus características relevantes y motivaciones; selección y justificación de técnicas de elicitación (entrevistas semiestructuradas, cuestionarios, prototipado); 6 cualidades del software priorizadas; definiciones del dominio bajo LEL (Stock, Sobreventas, Take away, E-commerce); e imagen de portada generada con IA y su justificación conceptual.",
    highlights: [
      "Grupo 6 · TPI Entrega 2",
      "Enunciado Integrado Havanna",
      "Stakeholders Directos e Indirectos",
      "Técnicas de Elicitación Justificadas",
      "6 Cualidades del Software",
      "LEL: Stock, Sobreventas, Take away, E-commerce",
      "Arte IA: Café de Requerimientos"
    ],
    fullContentHtml: `
      <div class="podcast-cover-banner">
        <img src="archivos/cafe-requerimientos-havanna-ia.png" alt="Café de Requerimientos - Franquicia Havanna (Imagen Oficial generada con IA)" class="podcast-cover-img" />
        <div class="podcast-cover-meta">
          <span class="badge-integrador">🎙️ TRABAJO PRÁCTICO INTEGRADOR · ENTREGA 2</span>
          <h4>ENTREGA 2 · HAVANNA («PODCAST DEL INGENIERO»)</h4>
          <p><strong>Universidad:</strong> Universidad Abierta Interamericana (UAI)<br>
          <strong>Asignatura:</strong> Ingeniería de Requerimientos · <strong>Docente:</strong> Prof. Marcela Samela<br>
          <strong>Integrantes del Grupo 6:</strong> Agostina Melegari, Daniela Benitez y Dana Graziano<br>
          <strong>Documento oficial de entrega:</strong> <a href="archivos/TPI_Entrega2_Havanna.pdf" target="_blank" class="file-link-secondary">Descargar TPI_Entrega2_Havanna.pdf (9 páginas) ↗</a></p>
        </div>
      </div>

      <!-- SECCIÓN 1: ENUNCIADO DEL DOMINIO -->
      <div class="doc-section">
        <span class="doc-section-title">1. Enunciado del Dominio (Havanna)</span>
        <p>Considerar el sistema de una franquicia de la cafetería <strong>Havanna</strong>.</p>
        <p>La franquicia posee <strong>dos tipos de negocio</strong>: Servicio de cafetería y venta minorista de productos industriales (alfajores, chocolates, dulces).</p>
        <p>La cadena posee <strong>diferentes modalidades de venta</strong>:</p>
        <ul>
          <li>En mostrador (cafetería y retail) y tienda virtual de e-commerce.</li>
          <li>Su propia aplicación móvil para pedidos desde las mesas y Take Away.</li>
        </ul>
        <p>En los diferentes tipos de negocio se venden:</p>
        <ul>
          <li><strong>Productos retail:</strong> Cajas de alfajores clásicos, Havannets, cookies, chocolates, tabletas y frascos de dulce del leche.</li>
          <li><strong>Productos de elaboración (cafetería):</strong> Cafés, lattes, frappés, licuados y pastelería.</li>
        </ul>
        <p>Los pedidos online, cafetería y retail se encuentran unificados, productos con diferentes fines están juntos.</p>
        <p>Existen alertas de quiebre de stock cuando un producto llega a una cantidad crítica.</p>
        <p><strong>Las áreas organizacionales y actores del local son:</strong></p>
        <ul>
          <li><strong>Gerente del local:</strong> quien administra las compras a la planta central de Havanna, controla los cierres de caja y supervisa el inventario general.</li>
          <li><strong>Encargado del stock en góndola (retail):</strong> es quien debe reponer los productos en los estantes y auditar las bajas de stock y roturas.</li>
          <li><strong>Cajero:</strong> registra las ventas del mostrador, cobra los productos y despacha los pedidos de Take Away de la aplicación.</li>
          <li><strong>Clientes, usuarios:</strong> quienes envían transacciones al sistema.</li>
        </ul>
        <p><strong>Funcionalmente el sistema dependerá de:</strong></p>
        <ul>
          <li>El sistema de punto de venta físico del local para descontar el stock global al registrar la venta de un producto.</li>
          <li>El registro de ventas por la App de Havanna para modificar el stock de la oferta de productos tanto del local como de la misma aplicación.</li>
        </ul>
        <div class="highlight-objective-card">
          <h4>🎯 Objetivo del sistema a desarrollar</h4>
          <p>Se solicita desarrollar un <strong>sistema centralizado de catálogo e inventario con actualización en tiempo real</strong>. El objetivo es automatizar la sincronización de las existencias físicas del local con la oferta digital. Se busca eliminar la necesidad del trabajo manual de los empleados para dar de baja los productos según la modalidad de venta, evitando la sobreventa de productos con alta demanda, optimizando la experiencia del cliente y reduciendo las cancelaciones por falta de stock.</p>
        </div>
      </div>

      <!-- SECCIÓN 2: IDENTIFICACIÓN DE STAKEHOLDERS -->
      <div class="doc-section">
        <span class="doc-section-title">2. Identificación de Stakeholders</span>

        <h4 style="color: var(--blue-royal); margin: 16px 0 10px 0; font-size: 1.05rem;">2.1 Stakeholders directos (interactúan con el sistema)</h4>
        
        <div class="stakeholder-detail-card">
          <h4>👔 Gerente del local</h4>
          <p><strong>Características relevantes:</strong></p>
          <ul>
            <li>Tiene alta influencia porque administra las compras, los cierres de caja y el inventario del local.</li>
            <li>Es la principal fuente con conocimiento del dominio reglas de negocio.</li>
          </ul>
          <p><strong>Motivaciones:</strong></p>
          <ul>
            <li>Acceder al inventario de productos actualizado para planificar las compras a la planta central.</li>
            <li>Que coincida el stock real en el local con el que informa el sistema.</li>
            <li>Reducir las ventas por sobreventa.</li>
          </ul>
        </div>

        <div class="stakeholder-detail-card">
          <h4>📦 Encargado de stock en góndola</h4>
          <p><strong>Características relevantes:</strong></p>
          <ul>
            <li>Tiene baja influencia porque no decide sobre el proyecto, pero su conocimiento es importante para desarrollar las funcionalidades de quiebre y consultas de stock y registro de bajas de stock.</li>
          </ul>
          <p><strong>Motivaciones:</strong></p>
          <ul>
            <li>Conocer cuando un producto llega a la cantidad crítica de stock antes de que se agote por completo.</li>
          </ul>
        </div>

        <div class="stakeholder-detail-card">
          <h4>💳 Cajero</h4>
          <p><strong>Características relevantes:</strong></p>
          <ul>
            <li>Tiene baja influencia, no toma decisiones sobre el proyecto.</li>
            <li>Necesita que el sistema responda en el tiempo definido en los requerimientos para no recibir quejas de los clientes por demoras.</li>
          </ul>
          <p><strong>Motivaciones:</strong></p>
          <ul>
            <li>Descuento automático de stock por venta efectuada.</li>
            <li>Conocer los pedidos TakeAway pendientes de entrega desde la aplicación para prepararlos y apartarlos para su entrega.</li>
            <li>Automatización de procesos para evitar tareas manuales.</li>
          </ul>
        </div>

        <div class="stakeholder-detail-card">
          <h4>☕ Cliente</h4>
          <p><strong>Características relevantes:</strong></p>
          <ul>
            <li>Usuario que compra en el mostrador o en la aplicación.</li>
            <li>No toman decisiones sobre el proyecto.</li>
            <li>El objetivo del sistema es mejorar su experiencia.</li>
          </ul>
          <p><strong>Motivaciones:</strong></p>
          <ul>
            <li>Comprar únicamente productos que estén disponibles para que el pedido no sea cancelado por falta de stock.</li>
          </ul>
        </div>

        <h4 style="color: var(--blue-royal); margin: 24px 0 10px 0; font-size: 1.05rem;">2.2 Stakeholders indirectos</h4>

        <div class="stakeholder-detail-card">
          <h4>🏢 Havanna franquiciante</h4>
          <p><strong>Características relevantes:</strong></p>
          <ul>
            <li>Tiene alta influencia.</li>
            <li>Solicita y financia el sistema.</li>
            <li>Toma las decisiones sobre el sistema.</li>
            <li>Es dueña de la aplicación.</li>
            <li>Impone restricciones técnicas que se deben cumplir.</li>
            <li>Sus objetivos conforman los requerimientos de negocio.</li>
          </ul>
          <p><strong>Motivaciones:</strong></p>
          <ul>
            <li>Eliminar el trabajo manual de los empleados para dar de baja productos vendidos.</li>
            <li>Evitar la sobreventa de productos sin stock reduciendo las cancelaciones de pedidos.</li>
            <li>Mejorar la experiencia del cliente.</li>
            <li>Sincronización en tiempo real del stock del local con la aplicación.</li>
          </ul>
        </div>

        <div class="stakeholder-detail-card">
          <h4>🏭 Planta central de Havanna</h4>
          <p><strong>Características relevantes:</strong></p>
          <ul>
            <li>Proveedor del local.</li>
            <li>Influencia media, se relaciona con el sistema a través de las compras que gestiona el gerente.</li>
          </ul>
          <p><strong>Motivaciones:</strong></p>
          <ul>
            <li>Recibir los pedidos de reposición acordes a las necesidades del local.</li>
          </ul>
        </div>

        <div class="stakeholder-detail-card">
          <h4>💻 Equipo de desarrollo</h4>
          <p><strong>Características relevantes:</strong></p>
          <ul>
            <li>Responsabilidad alta. Influencia media.</li>
            <li>Responsable de construir el sistema.</li>
            <li>Es el usuario principal de la especificación de requerimientos.</li>
          </ul>
          <p><strong>Motivaciones:</strong></p>
          <ul>
            <li>Contar con requerimientos claros, completos y verificables.</li>
            <li>Contar con interfaces intuitivas y bien definidas para los sistemas existentes.</li>
          </ul>
        </div>
      </div>

      <!-- SECCIÓN 3: TÉCNICAS DE ELICITACIÓN -->
      <div class="doc-section">
        <span class="doc-section-title">3. Técnicas de Elicitación</span>
        <div class="theory-block">
          <h4>🎤 Entrevista Semiestructurada</h4>
          <p>Permite profundizar en las reglas de negocio clave del gerente, el encargado de góndola y el cajero. Al ser semiestructurada, ofrece la flexibilidad necesaria para indagar cómo maneja cada uno su parte del negocio con preguntas comunes y, a la vez, repreguntar cuando aparecen problemas que no estaban previstos.</p>
        </div>

        <div class="theory-block">
          <h4>📝 Cuestionarios al personal</h4>
          <p>Permite relevar de forma rápida y homogénea la opinión de muchos empleados que no pueden ser entrevistados de forma individual. Esta modalidad tiene como objetivo medir con qué frecuencia ocurren quiebres de stock y sobreventas, cuánto tiempo les lleva la baja manual de productos, qué fallas identifican entre la sincronización entre el punto de venta, la app y la góndola, entre otros aspectos relevantes.</p>
        </div>

        <div class="theory-block">
          <h4>🖥️ Prototipado</h4>
          <p>Permite que se validen los requerimientos relevados con maquetas de catálogos y de las pantallas de inventario y alertas. Ayuda a descubrir necesidades nuevas y reduce el riesgo de malentendidos antes de construir.</p>
        </div>
      </div>

      <!-- SECCIÓN 4: CUALIDADES DEL SOFTWARE -->
      <div class="doc-section">
        <span class="doc-section-title">4. Cualidades del Software</span>
        <div class="req-grid">
          <div class="req-item">
            <span class="req-code">1º · Rendimiento</span>
            <p>El stock debe actualizarse casi al instante después de cada venta, para que el catálogo digital refleje los productos disponibles en tiempo real.</p>
          </div>
          <div class="req-item">
            <span class="req-code">2º · Disponibilidad</span>
            <p>El sistema debe estar operativo durante todo el horario comercial, incluso en los picos de demanda.</p>
          </div>
          <div class="req-item">
            <span class="req-code">3º · Seguridad</span>
            <p>Solo los usuarios autorizados pueden modificar el stock, y los datos de los clientes y las transacciones deben estar protegidos.</p>
          </div>
          <div class="req-item">
            <span class="req-code">4º · Control de Acceso por Rol</span>
            <p>El gerente, el encargado de góndola y el cajero tienen permisos distintos según sus responsabilidades.</p>
          </div>
          <div class="req-item">
            <span class="req-code">5º · Usabilidad</span>
            <p>Las pantallas deben ser simples para el cajero, el encargado y el cliente, con poca capacitación.</p>
          </div>
          <div class="req-item">
            <span class="req-code">6º · Consistencia de Datos</span>
            <p>El stock debe coincidir en todo momento entre el punto de venta, la app, la tienda virtual y la góndola, sin duplicaciones ni diferencias.</p>
          </div>
        </div>
      </div>

      <!-- SECCIÓN 5: LEL -->
      <div class="doc-section">
        <span class="doc-section-title">5. Definiciones del Dominio Utilizando LEL</span>
        <div class="lel-grid">
          <div class="lel-card">
            <div class="lel-card-header">
              <span class="lel-symbol-name">Stock</span>
              <span class="lel-type-badge objeto">Objeto</span>
            </div>
            <p><strong>Noción:</strong> Es la representación de la cantidad de productos, insumos y mercadería disponible en la cafetería Havanna, ya sea para su venta o elaboración. La cantidad de productos varía según ventas, compras, ingreso de mercadería o posibles desperdicios en tiempo real.</p>
            <p><strong>Impacto:</strong></p>
            <ul>
              <li>Permite conocer la disponibilidad de productos, insumos y mercadería, en tiempo real.</li>
              <li>Al realizar una venta, el sistema se actualiza, mostrando si hay nuevos ingresos o agotamientos de productos.</li>
              <li>Evita la oferta de productos que no se encuentran disponibles.</li>
            </ul>
          </div>

          <div class="lel-card">
            <div class="lel-card-header">
              <span class="lel-symbol-name">Sobreventas</span>
              <span class="lel-type-badge estado">Estado</span>
            </div>
            <p><strong>Noción:</strong> Las sobreventas solo pueden suceder cuando el sistema comience a registrar o aceptar pedidos que están ya desbordados, ósea que supera la disponibilidad del stock del local.</p>
            <p><strong>Impacto:</strong></p>
            <ul>
              <li>Requiere que el personal se registre y verifique la disponibilidad en stock.</li>
              <li>Permite que el sistema controle y actualice el stock para evitar pedidos que superen la disponibilidad.</li>
              <li>Afecta la satisfacción del cliente, ocasionando reclamos.</li>
            </ul>
          </div>

          <div class="lel-card">
            <div class="lel-card-header">
              <span class="lel-symbol-name">Take away</span>
              <span class="lel-type-badge estado">Modalidad</span>
            </div>
            <p><strong>Noción:</strong> Modalidad de compra, en el cual el cliente realiza un pedido para luego retirarlo y consumirlo fuera del local. El cliente puede hacer su pedido en el local o desde una app virtual. No requiere uso de las mesas del establecimiento.</p>
            <p><strong>Impacto:</strong></p>
            <ul>
              <li>Permite a los clientes realizar y retirar pedidos en el local.</li>
              <li>Facilita la atención a clientes que desean consumir fuera del local.</li>
              <li>Produce una orden de pedido que debe ser registrada y preparada por el personal.</li>
            </ul>
          </div>

          <div class="lel-card">
            <div class="lel-card-header">
              <span class="lel-symbol-name">E-commerce</span>
              <span class="lel-type-badge objeto">Canal</span>
            </div>
            <p><strong>Noción:</strong> Canal de comercio electrónico donde los clientes pueden acceder, consultar y realizar un pedido de la cafetería, así como también permite la realización del pago sin necesidad de estar físicamente en el local. Incluye modalidades de entrega como el Take Away o el envío a domicilio.</p>
            <p><strong>Impacto:</strong></p>
            <ul>
              <li>Permite que los clientes puedan acceder al catálogo de productos.</li>
              <li>Permite la consulta de precios y disponibilidad de productos.</li>
              <li>Facilita la generación de pedidos online.</li>
              <li>Crea órdenes de compra que deben ser recibidas, gestionadas y preparadas por el personal.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- SECCIÓN 6: IMAGEN DE IA Y JUSTIFICACIÓN -->
      <div class="doc-section">
        <span class="doc-section-title">6. Imagen Representativa Creada con Inteligencia Artificial</span>
        
        <div class="ai-badge-showcase">
          <div class="ai-badge-poster-wrap">
            <img src="archivos/cafe-requerimientos-havanna-ia.png" alt="Café de Requerimientos — Havanna Cafés (Imagen Oficial del Proyecto generada con Inteligencia Artificial)" class="ai-badge-poster-img" />
            <a href="archivos/cafe-requerimientos-havanna-ia.png" target="_blank" class="ai-badge-zoom-btn">🔍 Ver en alta resolución ↗</a>
          </div>
          <div class="ai-badge-text-block">
            <div class="ai-badge-header-pill">
              <span class="ai-pill-icon">✨</span>
              <span>ARTE OFICIAL DEL PROYECTO · GENERADO CON INTELIGENCIA ARTIFICIAL</span>
            </div>
            <h4>☕ «Café de Requerimientos — Havanna Cafés»</h4>
            <p class="ai-badge-lead"><strong>Justificación Conceptual de la Imagen Oficial:</strong></p>
            <p>Representa la idea central de la Ingeniería de Requerimientos en el contexto real de la empresa. El café representa la charla cercana entre el analista y los stakeholders, ya que así se relevan las necesidades profundas en las entrevistas y reuniones de elicitación. El alfajor artesanal y la taza servida presentan de manera inmediata el dominio del negocio: la franquicia Havanna combinando armónicamente la venta de productos industriales retail (cajas de alfajores, galletitas, chocolates) con el servicio de cafetería de especialidad.</p>
            <p>Los colores dorados y crema cálido, junto a la tipografía característica, aluden directamente a la identidad de marca de Havanna, permitiendo que el oyente del «Podcast del Ingeniero» asocie instantáneamente el marco teórico de la asignatura con el negocio analizado.</p>
            
            <div class="ai-badge-tag-cloud">
              <span class="ai-tag">☕ Metáfora: Entrevista y Elicitación de Requerimientos</span>
              <span class="ai-tag">🏷️ Dominio: Franquicia Havanna (Cafetería & Retail)</span>
              <span class="ai-tag">🎨 Identidad Visual: Paleta Dorada y Tipografía Havanna</span>
              <span class="ai-tag">🎙️ Recurso Multimedia: Portada Oficial del «Podcast del Ingeniero»</span>
            </div>
          </div>
        </div>
      </div>
    `
  },

  // 19. TPI - ENTREGA 3 (FINAL): ESPECIFICACIÓN COMPLETA, CU, US Y LEL (PODCAST EPISODIO 2)
  {
    id: "tpi-entrega3-especificacion-final",
    number: "TPI · Entrega 3 Final",
    modality: "grupal",
    activityType: "integrador",
    isIntegrador: true,
    modalityLabel: "👥 Trabajo Grupal (Grupo 6) · TP Integrador",
    category: "integrador",
    categoryLabel: "Proyecto Integrador · Podcast del Ingeniero · Entrega 3 (Final)",
    isSimulation: false,
    sourceFile: "archivos/cafe-requerimientos-havanna-ia.png",
    sourceFileName: "TPI_Entrega3_Final_Havanna.pdf",
    title: "TP Integrador — «Podcast del Ingeniero» · Entrega 3 (Final): Especificación Completa, Casos de Uso, US y LEL",
    subtitle: "Documento integrador maestro de Havanna: Necesidades/deseos/expectativas, RU vs RS, 4 RF, 5 RNF, 3 CU completos, 3 US con Gherkin, 6 símbolos LEL, marco metodológico y glosario de IR",
    previewSummary: "Entrega Final del Trabajo Práctico Integrador (Grupo 6 · Episodio 2): documento maestro de especificación y modelado para la franquicia Havanna. Incluye matriz de necesidades, deseos y expectativas; tabla comparativa RU vs RS; 5 Requerimientos de Usuario (RU01-RU05); 5 Requerimientos del Sistema (RS01-RS05); 4 RF y 5 RNF medibles; desarrollo teórico de Elicitación, Especificación SRS (norma ISO/IEC/IEEE 29148:2018), Validación y Prototipos; 3 Casos de Uso detallados (CU01, CU02, CU03); 3 Historias de Usuario con escenarios Given/When/Then; LEL con 6 símbolos y Glosario completo de la Asignatura.",
    highlights: [
      "Grupo 6 · TPI Final",
      "Matriz Necesidades / Deseos / Expectativas",
      "5 RU + 5 RS + 4 RF + 5 RNF (ISO 29148)",
      "3 Casos de Uso Completos (CU01-03)",
      "3 Historias de Usuario (Gherkin)",
      "LEL Havanna (6 Símbolos)",
      "Glosario Completo de la Asignatura"
    ],
    fullContentHtml: `
      <div class="podcast-cover-banner">
        <img src="archivos/cafe-requerimientos-havanna-ia.png" alt="Café de Requerimientos - Franquicia Havanna (Imagen Oficial generada con IA)" class="podcast-cover-img" />
        <div class="podcast-cover-meta">
          <span class="badge-integrador">🎙️ TRABAJO PRÁCTICO INTEGRADOR · ENTREGA FINAL</span>
          <h4>ENTREGA 3 (FINAL) · «PODCAST DEL INGENIERO» (HAVANNA)</h4>
          <p><strong>Universidad:</strong> Universidad Abierta Interamericana (UAI)<br>
          <strong>Facultad:</strong> Tecnología Informática · <strong>Asignatura:</strong> Ingeniería de Requerimientos<br>
          <strong>Docente:</strong> Prof. Marcela Samela · <strong>Comisión:</strong> Cursada 2026<br>
          <strong>Integrantes del Grupo 6:</strong> Agostina Melegari, Daniela Benitez y Dana Graziano</p>
        </div>
      </div>

      <!-- SECCIÓN 1: NECESIDADES, DESEOS Y EXPECTATIVAS -->
      <div class="doc-section">
        <span class="doc-section-title">1. Necesidades, Deseos y Expectativas de los Usuarios (Havanna)</span>
        <div class="stakeholders-matrix-grid">
          
          <div class="user-perspective-card">
            <h4>👔 Gerente del Local</h4>
            <p><strong>Necesidad:</strong> Contar con un inventario actualizado y confiable para planificar las compras necesarias y controlar el stock general.</p>
            <p><strong>Deseo:</strong> Ver el estado del stock de todo el local en una sola pantalla, sin tener que ir combinando información del punto de venta y de la app.</p>
            <p><strong>Expectativa:</strong> Que el stock registrado por el sistema coincida con el stock real del local y que las sobreventas disminuyan drásticamente.</p>
          </div>

          <div class="user-perspective-card">
            <h4>📦 Encargado de Stock en Góndola</h4>
            <p><strong>Necesidad:</strong> Saber cuándo un producto llega a su nivel de reposición antes de que se agote.</p>
            <p><strong>Deseo:</strong> Recibir alertas de bajo stock de forma inmediata, y poder registrar bajas y roturas desde un solo lugar.</p>
            <p><strong>Expectativa:</strong> Que el sistema refleje bajas por rotura y las reposiciones sin tener que corregir datos a mano.</p>
          </div>

          <div class="user-perspective-card">
            <h4>💳 Cajero</h4>
            <p><strong>Necesidad:</strong> Que el stock se dé de baja automáticamente al momento de registrar una venta y poder ver los pedidos Take Away pendientes de la aplicación.</p>
            <p><strong>Deseo:</strong> Una pantalla simple que no requiera de mucha capacitación y que no genere demoras en la atención.</p>
            <p><strong>Expectativa:</strong> Que el sistema responda dentro del tiempo predeterminado para no recibir quejas de los clientes y que desaparezcan las tareas manuales de baja de productos.</p>
          </div>

          <div class="user-perspective-card">
            <h4>☕ Cliente</h4>
            <p><strong>Necesidad:</strong> Comprar únicamente productos disponibles, tanto en mostrador como en la app y la tienda virtual.</p>
            <p><strong>Deseo:</strong> Consultar precios y disponibilidad en tiempo real y hacer su pedido (mesa, Take Away o e-commerce) sin inconvenientes.</p>
            <p><strong>Expectativa:</strong> Que su pedido no sea cancelado por falta de stock y que sus datos y pagos estén protegidos.</p>
          </div>

        </div>
      </div>

      <!-- SECCIÓN 2: TABLA RU VS RS -->
      <div class="doc-section">
        <span class="doc-section-title">2. Diferencias entre Requerimientos de Usuario y Requerimientos del Sistema</span>
        <div class="table-responsive">
          <table class="styled-comparison-table">
            <thead>
              <tr>
                <th style="width: 50%;">Requerimiento de Usuario (RU)</th>
                <th style="width: 50%;">Requerimientos del Sistema (RS)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Descripción abstracta y de alto nivel sobre los servicios que el usuario espera que tenga el sistema/software.</td>
                <td>Especificación detallada de las funciones que el software/sistema debe cumplir.</td>
              </tr>
              <tr>
                <td>Utiliza un lenguaje natural sin jerga técnica.</td>
                <td>Utiliza un lenguaje técnico y preciso.</td>
              </tr>
              <tr>
                <td>Se enfoca en <strong>qué necesita</strong> el usuario.</td>
                <td>Define <strong>cómo debe responder y operar</strong> el sistema.</td>
              </tr>
              <tr>
                <td>Verifica que el producto resuelva el problema del negocio o usuario.</td>
                <td>Sirve como plano de construcción, además de como un contrato técnico para el desarrollo.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- SECCIÓN 3: REQUERIMIENTOS DE USUARIO Y DEL SISTEMA -->
      <div class="doc-section">
        <span class="doc-section-title">3. Requerimientos de Usuario (RU)</span>
        <ul class="req-numbered-list">
          <li><strong>RU01:</strong> El gerente del local deberá poder consultar el inventario general actualizado de los productos retail y de elaboración.</li>
          <li><strong>RU02:</strong> El encargado de stock en góndola deberá ser notificado cuando un producto alcance su cantidad crítica de stock.</li>
          <li><strong>RU03:</strong> El cajero deberá contar con el descuento automático del stock al registrar una venta, sin realizar bajas manuales.</li>
          <li><strong>RU04:</strong> El cajero deberá poder visualizar los pedidos Take Away pendientes de entrega que llegan desde la aplicación.</li>
          <li><strong>RU05:</strong> El cliente deberá poder consultar la disponibilidad y el precio de los productos desde el mostrador, la aplicación y la tienda virtual.</li>
        </ul>

        <span class="doc-section-title" style="margin-top:20px;">4. Requerimientos del Sistema (RS)</span>
        <ul class="req-numbered-list">
          <li><strong>RS01:</strong> El Sistema deberá diferenciar si los pedidos son Take Away o consumo OnSite, exigiendo que se seleccione una modalidad de consumo al realizar el pedido.</li>
          <li><strong>RS02:</strong> El sistema deberá descontar automáticamente del inventario la cantidad específica que se utilizó de insumos cuando se entrega un pedido.</li>
          <li><strong>RS03:</strong> El sistema deberá verificar en tiempo real el stock disponible; en caso de no tener suficientes insumos para realizar un producto, este deberá marcarse como "sin disponibilidad" y deshabilitar la selección de ese producto.</li>
          <li><strong>RS04:</strong> El sistema deberá mostrar en pantalla en qué estado está el pedido.</li>
          <li><strong>RS05:</strong> El sistema deberá mostrar en pantalla el seguimiento en tiempo real y actualización de Stock.</li>
        </ul>
      </div>

      <!-- SECCIÓN 4: RF Y RNF -->
      <div class="doc-section">
        <span class="doc-section-title">5. Requerimientos Funcionales (RF)</span>
        <div class="req-grid">
          <div class="req-item">
            <span class="req-code">RF01</span>
            <p>El sistema deberá descontar automáticamente del stock global la cantidad de cada producto vendido cuando el punto de venta del local o la aplicación de Havanna registren una venta.</p>
          </div>
          <div class="req-item">
            <span class="req-code">RF02</span>
            <p>El sistema deberá rechazar o impedir la confirmación de cualquier pedido (mostrador, app o e-commerce) cuya cantidad supere el stock disponible del producto.</p>
          </div>
          <div class="req-item">
            <span class="req-code">RF03</span>
            <p>El sistema deberá notificar al encargado de góndola y al gerente cuando un producto alcance su cantidad crítica de stock.</p>
          </div>
          <div class="req-item">
            <span class="req-code">RF04</span>
            <p>El sistema deberá mostrar al cajero los pedidos Take Away recibidos desde la aplicación que estén pendientes de preparación y entrega.</p>
          </div>
        </div>

        <span class="doc-section-title" style="margin-top:22px;">6. Requerimientos No Funcionales (RNF) — Norma ISO/IEC/IEEE 29148</span>
        <div class="req-grid">
          <div class="req-item">
            <span class="req-code rnf">RNF01 · Rendimiento</span>
            <p>El sistema deberá reflejar la actualización de stock tras una venta en el catálogo digital en un máximo de <strong>15 segundos</strong>.</p>
          </div>
          <div class="req-item">
            <span class="req-code rnf">RNF02 · Seguridad</span>
            <p>Solo los usuarios autenticados y autorizados podrán modificar el stock, y los datos de clientes y transacciones deberán almacenarse y transmitirse de forma cifrada.</p>
          </div>
          <div class="req-item">
            <span class="req-code rnf">RNF03 · Control de Acceso</span>
            <p>El sistema deberá diferenciar permisos para el gerente, el encargado de góndola y el cajero, según sus responsabilidades.</p>
          </div>
          <div class="req-item">
            <span class="req-code rnf">RNF04 · Usabilidad</span>
            <p>Un cajero o encargado nuevo deberá poder realizar las operaciones básicas de su rol con <strong>no más de 30 minutos de capacitación</strong>.</p>
          </div>
          <div class="req-item">
            <span class="req-code rnf">RNF05 · Consistencia</span>
            <p>El stock deberá ser idéntico en el punto de venta, la app, la tienda virtual y la góndola, sin duplicaciones ni diferencias entre canales.</p>
          </div>
        </div>
      </div>

      <!-- SECCIÓN 5: MARCO TEÓRICO Y SUBPROCESOS DE LA IR -->
      <div class="doc-section">
        <span class="doc-section-title">7. Subprocesos de la Ingeniería de Requerimientos</span>
        
        <div class="theory-block">
          <h4>A. Elicitación</h4>
          <p>La elicitación consiste en el proceso de sonsacar los requerimientos, es decir, obtenerlos para relevar las necesidades de los stakeholders e identificar sus deseos y expectativas, usualmente mediante entrevistas. Los requerimientos permiten conocer diferentes aspectos del problema o del software a crear: razones de la creación del sistema, qué deberá hacer, restricciones del negocio y requerimientos funcionales. Es la etapa donde pueden surgir malentendidos debido a que el cliente no siempre sabe cómo expresar lo que necesita o desea, los expertos pueden no haber adquirido aún el conocimiento suficiente sobre el negocio o existir problemas de consenso entre stakeholders.</p>
          <p>En el caso de Havanna los stakeholders principales son el gerente del local, el encargado del stock, el cajero y el cliente (además del franquiciante y el personal de la planta central). El gerente conoce las reglas del negocio, el encargado el stock físico y el cajero la gestión de ventas. Para obtener el conocimiento necesario se deben hacer preguntas y repreguntar si es necesario; no alcanza con un formulario. Se eligen <strong>entrevistas semiestructuradas</strong> para indagar con preguntas abiertas y cerradas, <strong>cuestionarios</strong> para medir cuantitativamente al personal masivo, y <strong>prototipos</strong> para validar de forma interactiva.</p>
        </div>

        <div class="theory-block">
          <h4>B. Especificación de Requerimientos de Software (SRS)</h4>
          <p>Es el proceso de redactar los requerimientos de forma clara, completa y verificable, asegurando el cumplimiento de las normas. El SRS es el documento formal que modela las necesidades del usuario y define qué se debe implementar. Es un medio de comunicación para que todas las partes comprendan el proyecto, expresado en lenguaje natural y gráfico. Constituye la base contractual entre el cliente y el desarrollador para definir el alcance, evaluar el producto final y diseñar las pruebas necesarias.</p>
          <p>Se asegura el cumplimiento de estándares con la norma vigente <strong>ISO/IEC/IEEE 29148</strong>, que define la estructura del requerimiento y los niveles de conformidad incluyendo la perspectiva del negocio. Los RF y RNF deben redactarse con la estructura normativa correspondiente (<em>condición + sujeto + acción + objeto + restricción</em>). Por ejemplo, en lugar de enunciar ambiguamente <em>"El stock se tiene que actualizar casi al instante"</em>, se convierte en un RNF medible: <em>"El sistema debe actualizar el stock en la app en menos de 15 segundos"</em>.</p>
        </div>

        <div class="theory-block">
          <h4>C. Validación</h4>
          <p>La validación responde a la pregunta <em>"¿Estamos construyendo el sistema correcto?"</em>, permitiendo corroborar la consistencia del modelo de requerimientos con las intenciones del cliente y los usuarios. Como resultado se obtiene un modelo de requerimientos alineado con las expectativas de los usuarios. Sin embargo, no significa que el modelo sea perfecto, sino que es un acuerdo formal entre lo que el cliente desea y lo que es factible. La validación está presente en todos los procesos de la IR.</p>
          <p>Es crítica porque el modelo puede ser técnicamente consistente pero resolver el problema equivocado. Las técnicas principales son <strong>prototipos</strong> (para validar funcionalidades), <strong>animación</strong> (sistemas en tiempo real) y <strong>paráfrasis</strong> (explicar el modelo en el lenguaje cotidiano del usuario). En Havanna, el gerente valida reglas de negocio y stock, el cajero el flujo de venta y pedidos Take Away, y el encargado las alertas de stock crítico. Lo que no se valida vuelve a la elicitación y a la especificación, formando un ciclo virtuoso.</p>
        </div>

        <div class="theory-block">
          <h4>D. Gap Semántico, Lenguaje Natural y LEL</h4>
          <p>Existen problemas de comunicación derivados del <strong>gap semántico</strong> que genera ambigüedad: cada parte puede entender una misma palabra con diferente significado debido a la brecha entre la terminología del negocio y el vocabulario técnico de los analistas. Junto con el lenguaje natural, es una de las razones por las que relevar requerimientos resulta complejo. Para mitigar la ambigüedad se redactan oraciones simples con sujeto explícito, en voz activa y un único término para cada concepto.</p>
          <p>El <strong>Léxico Extendido del Lenguaje (LEL)</strong> permite contrarrestar estos problemas estableciendo un único significado para cada término clave en un glosario enriquecido del dominio. Cada símbolo tiene <em>noción</em> (lo que es) e <em>impacto</em> (lo que hace o recibe), clasificándose como sujeto, objeto, verbo o estado. El LEL cumple con el <strong>principio de circularidad</strong> (usar los símbolos para describir otros símbolos) y el <strong>vocabulario mínimo</strong>, sirviendo como base fundamental para la redacción de escenarios.</p>
        </div>

        <div class="theory-block">
          <h4>E. Prototipos</h4>
          <p>Se utilizan prototipos para validar UX, necesidades, deseos, expectativas y reglas de negocio antes de codificar. Un prototipo es una versión limitada, rápida y económica de una parte del sistema que permite visualizarlo y corroborar funcionalidades antes de construirlo. Facilita descubrir omisiones en etapas tempranas donde corregir errores resulta exponencialmente menos costoso.</p>
        </div>
      </div>

      <!-- SECCIÓN 6: CASOS DE USO COMPLETOS -->
      <div class="doc-section">
        <span class="doc-section-title">8. Casos de Uso del Sistema (Havanna)</span>

        <!-- CU01 -->
        <div class="case-card">
          <div class="case-header">
            <h4>CU01 — Registrar Pedido</h4>
            <span class="case-actor-badge">Actor: Cajero</span>
          </div>
          <div class="case-body">
            <p><strong>Objetivo / Postcondiciones:</strong> El pedido queda registrado en el sistema con sus ítems y la modalidad de consumo.</p>
            <p><strong>Asunción / Precondiciones:</strong> Existen productos activos y disponibles en el punto de venta. El cajero debe estar registrado y autenticado.</p>
            
            <p class="flow-title">Camino Feliz (Modalidad On Site):</p>
            <ol class="flow-steps">
              <li>El sistema muestra en pantalla si desea hacer un pedido.</li>
              <li>El cajero selecciona "nuevo pedido".</li>
              <li>El sistema solicita seleccionar la modalidad de consumo (Take Away o On Site).</li>
              <li>El cajero selecciona modalidad On Site.</li>
              <li>El sistema solicita seleccionar qué producto se desea pedir.</li>
              <li>El cajero selecciona el producto y los añade en una orden.</li>
              <li>El sistema calcula el precio total de el o los productos solicitados.</li>
              <li>El sistema pregunta: ¿Confirmar pedido?</li>
              <li>El cajero confirma el pedido.</li>
              <li>El sistema guarda y valida la orden, enviando un comando a la cocina.</li>
            </ol>

            <p class="flow-title">Camino Alternativo (Modalidad Take Away):</p>
            <ol class="flow-steps">
              <li>El sistema solicita seleccionar la modalidad de consumo (Take Away o On Site).</li>
              <li>El cajero selecciona modalidad Take Away.</li>
              <li>El sistema solicita seleccionar qué producto se desea pedir.</li>
              <li>El cajero selecciona el producto y los añade en una orden.</li>
              <li>El sistema genera un código de retiro para el cliente.</li>
              <li>El sistema calcula el total del producto y solicita un medio de pago.</li>
              <li>El cajero selecciona medio de pago y realiza el cobro.</li>
              <li>El sistema valida el pago y manda la orden a la cocina.</li>
            </ol>

            <p class="flow-title flow-alert">Camino Excepcional (Falta de Stock):</p>
            <ol class="flow-steps">
              <li>El sistema solicita seleccionar qué producto se desea pedir.</li>
              <li>El cajero selecciona el producto y los añade en una orden.</li>
              <li>El Sistema invalida la selección de producto por falta de Stock.</li>
              <li>El cajero no puede continuar con la orden y se notifica la indisponibilidad al cliente.</li>
            </ol>
          </div>
        </div>

        <!-- CU02 -->
        <div class="case-card">
          <div class="case-header">
            <h4>CU02 — Actualizar Stock</h4>
            <span class="case-actor-badge">Actor: Usuario / Cajero</span>
          </div>
          <div class="case-body">
            <p><strong>Objetivo / Postcondiciones:</strong> El Stock de un insumo utilizado en la venta de un producto se descuenta automáticamente y se actualiza el sistema de Stock.</p>
            <p><strong>Asunción / Precondiciones:</strong> El cajero debe estar registrado en el sistema.</p>

            <p class="flow-title">Camino Feliz:</p>
            <ol class="flow-steps">
              <li>El sistema recibe la notificación de venta de producto.</li>
              <li>El sistema solicita el código del producto.</li>
              <li>El usuario ingresa el código del producto vendido.</li>
              <li>El Sistema valida el código.</li>
              <li>El sistema revisa de la venta del producto todos los ítems utilizados.</li>
              <li>El usuario selecciona el botón "Actualizar Stock".</li>
              <li>El Sistema actualiza el Stock según los ítems que se utilizaron en la venta.</li>
            </ol>

            <p class="flow-title">Camino Alternativo (Reconocimiento de Bajo Stock):</p>
            <ol class="flow-steps">
              <li>El usuario selecciona el botón "Actualizar Stock".</li>
              <li>El sistema reconoce ítems que están por debajo del mínimo de Stock configurado.</li>
              <li>El sistema actualiza el stock y muestra un cartel de alerta en pantalla: <strong>"Bajo Stock"</strong> al encargado y gerente.</li>
            </ol>

            <p class="flow-title flow-alert">Camino Excepcional (Código Inválido):</p>
            <ol class="flow-steps">
              <li>El usuario ingresa el código del producto vendido.</li>
              <li>El Sistema invalida el código.</li>
              <li>El sistema muestra una alerta de "Código de producto inválido o inexistente".</li>
            </ol>
          </div>
        </div>

        <!-- CU03 -->
        <div class="case-card">
          <div class="case-header">
            <h4>CU03 — Registrar Método de Pago</h4>
            <span class="case-actor-badge">Actor: Cajero</span>
          </div>
          <div class="case-body">
            <p><strong>Objetivo / Postcondiciones:</strong> Se selecciona un método de pago para pagar el producto; el estado del pedido cambia a pagado.</p>
            <p><strong>Asunción / Precondiciones:</strong> El Cajero debe estar registrado. Existe un pedido solicitado y confirmado cuyo monto es mayor a 0. Medios de pago habilitados (Efectivo, Tarjeta de Débito, Tarjeta de Crédito o Transferencia).</p>

            <p class="flow-title">Camino Feliz (Tarjeta de Débito):</p>
            <ol class="flow-steps">
              <li>El Cajero selecciona el pedido pendiente de cobro y presiona el botón "Cobrar".</li>
              <li>El sistema muestra el monto total a pagar y solicita seleccionar el método de pago.</li>
              <li>El Cajero selecciona el método de pago: Tarjeta de Débito.</li>
              <li>El sistema solicita procesar la Tarjeta de Débito.</li>
              <li>El Cajero procesa la tarjeta y presiona "Confirmar pago".</li>
              <li>El sistema valida el pago, cambia el estado del pedido a Pagado y emite el comprobante fiscal.</li>
            </ol>

            <p class="flow-title">Camino Alternativo (Efectivo con Vuelto Automático):</p>
            <ol class="flow-steps">
              <li>El Cajero selecciona el método de pago: Efectivo.</li>
              <li>El sistema solicita ingresar el monto exacto entregado por el cliente.</li>
              <li>El Sistema calcula automáticamente el vuelto correspondiente.</li>
              <li>El cajero entrega el vuelto al cliente.</li>
              <li>El sistema cambia el estado del pedido a Pagado y emite el comprobante.</li>
            </ol>

            <p class="flow-title flow-alert">Camino Excepcional (Pago Rechazado):</p>
            <ol class="flow-steps">
              <li>El Cajero selecciona el método de pago: Tarjeta de Débito.</li>
              <li>El sistema solicita procesar la Tarjeta de Débito.</li>
              <li>El Cajero procesa la Tarjeta de Débito.</li>
              <li>El Sistema invalida la tarjeta y muestra una alerta en pantalla: <strong>"Pago rechazado"</strong>.</li>
            </ol>
          </div>
        </div>

      </div>

      <!-- SECCIÓN 7: HISTORIAS DE USUARIO CON CRITERIOS GHERKIN -->
      <div class="doc-section">
        <span class="doc-section-title">9. Historias de Usuario (User Stories) con Criterios de Aceptación Gherkin</span>

        <div class="user-story-card">
          <div class="us-header">
            <h4>US 1 — Venta en mostrador que actualice el stock en la app</h4>
            <span class="us-role-tag">Rol: Cajero</span>
          </div>
          <div class="us-narrative">
            <p><em>Como</em> cajero,<br>
            <em>Quiero</em> que al registrar una venta disminuya el stock de la app,<br>
            <em>Para</em> no vender un producto en la caja que debe ser reservado para un pedido Take Away.</p>
          </div>
          <div class="us-gherkin-box">
            <strong>Escenario 1: Sincronización rápida tras venta en caja</strong>
            <p>• <strong>Dado</strong> una venta de un producto con stock en la caja.<br>
            • <strong>Cuando</strong> el cajero registra la venta.<br>
            • <strong>Entonces</strong> el stock del local se descuenta y la app actualiza el stock disponible para la venta en menos de 60 segundos.</p>
          </div>
        </div>

        <div class="user-story-card">
          <div class="us-header">
            <h4>US 2 — Pedidos Take Away pendientes (con entrega en el local)</h4>
            <span class="us-role-tag">Rol: Cajero</span>
          </div>
          <div class="us-narrative">
            <p><em>Como</em> cajero,<br>
            <em>Quiero</em> ver los pedidos Take Away pendientes de entrega realizados por la app,<br>
            <em>Para</em> prepararlos antes de que el cliente llegue y no demorar otros procesos.</p>
          </div>
          <div class="us-gherkin-box">
            <strong>Escenario 1: Notificación de nuevo pedido</strong>
            <p>• <strong>Dada</strong> la confirmación de un pedido por la app.<br>
            • <strong>Cuando</strong> el cajero reciba la notificación por el pedido efectuado.<br>
            • <strong>Entonces</strong> el pedido se muestra en el apartado "Pendientes de preparación".</p>
            <br>
            <strong>Escenario 2: Preparación y aviso al cliente</strong>
            <p>• <strong>Dado</strong> el pedido en preparación.<br>
            • <strong>Cuando</strong> un empleado lo prepara.<br>
            • <strong>Entonces</strong> el cajero busca en el punto de venta del sistema el apartado "Pendientes de preparación", cambia el estado a "Preparado", se actualiza el estado en la app y el cliente ve en la app: <em>"Preparado, listo para retirar"</em>.</p>
          </div>
        </div>

        <div class="user-story-card">
          <div class="us-header">
            <h4>US 3 — Consultar el stock real y definir umbral</h4>
            <span class="us-role-tag">Rol: Gerente</span>
          </div>
          <div class="us-narrative">
            <p><em>Como</em> gerente,<br>
            <em>Quiero</em> consultar el stock actual de cada producto del local y configurar umbrales críticos,<br>
            <em>Para</em> planificar las compras con anticipación.</p>
          </div>
          <div class="us-gherkin-box">
            <strong>Escenario 1: Configuración exitosa de umbral</strong>
            <p>• <strong>Dado</strong> que el gerente selecciona un producto.<br>
            • <strong>Cuando</strong> ingresa el valor del umbral en el apartado "Propiedades del producto".<br>
            • <strong>Entonces</strong> el sistema guarda el valor en la propiedad umbral y emite una notificación de bajo stock cuando la propiedad cantidad del producto alcanza el valor definido como umbral.</p>
            <br>
            <strong>Escenario 2: Validación de excepciones de entrada</strong>
            <p>• <strong>Dado</strong> que el gerente selecciona un producto.<br>
            • <strong>Cuando</strong> ingresa un número negativo o deja el campo vacío.<br>
            • <strong>Entonces</strong> el sistema genera una excepción informando que el valor no es válido y que no se guardará el cambio realizado.</p>
          </div>
        </div>

      </div>

      <!-- SECCIÓN 8: LÉXICO EXTENDIDO DEL LENGUAJE (LEL) DEL CASO HAVANNA -->
      <div class="doc-section">
        <span class="doc-section-title">10. Léxico Extendido del Lenguaje (LEL) del Dominio Havanna</span>
        <div class="lel-grid">
          
          <div class="lel-card">
            <div class="lel-card-header">
              <span class="lel-symbol-name">Cajero</span>
              <span class="lel-type-badge sujeto">Sujeto</span>
            </div>
            <p><strong>Noción:</strong> Empleado del local que atiende el mostrador de la cafetería y de la venta de productos retail.</p>
            <p><strong>Impacto:</strong></p>
            <ul>
              <li>El cajero registra la venta de los productos en el punto de venta.</li>
              <li>El cajero cobra los productos al cliente.</li>
              <li>El cajero consulta los pedidos Take Away pendientes.</li>
              <li>El cajero prepara los pedidos Take Away pendientes.</li>
              <li>El cajero entrega los pedidos Take Away pendientes.</li>
            </ul>
          </div>

          <div class="lel-card">
            <div class="lel-card-header">
              <span class="lel-symbol-name">Sobreventa</span>
              <span class="lel-type-badge estado">Estado</span>
            </div>
            <p><strong>Noción:</strong> Situación en la que el sistema acepta pedidos cuya cantidad supera el stock disponible del local.</p>
            <p><strong>Impacto:</strong></p>
            <ul>
              <li>El local cancela el pedido por falta de stock.</li>
              <li>El cliente realiza un reclamo.</li>
              <li>El sistema rechaza los pedidos que superan la disponibilidad.</li>
            </ul>
          </div>

          <div class="lel-card">
            <div class="lel-card-header">
              <span class="lel-symbol-name">Registrar Venta</span>
              <span class="lel-type-badge verbo">Verbo</span>
            </div>
            <p><strong>Noción:</strong> Dejar constancia de la venta de un producto, ya sea en el mostrador o en la app, para cobrar y actualizar el stock.</p>
            <p><strong>Impacto:</strong></p>
            <ul>
              <li>El cajero ingresa el producto y la cantidad seleccionada en el punto de venta.</li>
              <li>El cajero le cobra el producto al cliente.</li>
              <li>El sistema descuenta la cantidad vendida del stock.</li>
            </ul>
          </div>

          <div class="lel-card">
            <div class="lel-card-header">
              <span class="lel-symbol-name">Stock</span>
              <span class="lel-type-badge objeto">Objeto</span>
            </div>
            <p><strong>Noción:</strong> Cantidad de unidades disponibles de un producto en un local. Se utiliza el mismo para el punto de venta y la app. Permite realizar o evita realizar nuevas ventas según el stock disponible.</p>
            <p><strong>Impacto:</strong></p>
            <ul>
              <li>Se descuenta cuando el cajero realiza una venta en el punto de venta o se registra la venta del cliente.</li>
              <li>Aumenta cuando el encargado registra el reingreso de productos desde la planta central.</li>
              <li>El gerente lo consulta para realizar las compras.</li>
              <li>Cuando llega a cero el producto pasa a quiebre de stock.</li>
            </ul>
          </div>

          <div class="lel-card">
            <div class="lel-card-header">
              <span class="lel-symbol-name">Quiebre de Stock</span>
              <span class="lel-type-badge estado">Estado</span>
            </div>
            <p><strong>Noción:</strong> Situación en la que un producto tiene stock igual a cero en un local y como consecuencia no puede vender ese producto.</p>
            <p><strong>Impacto:</strong></p>
            <ul>
              <li>Un producto pasa a quiebre de stock cuando una venta deja su stock en cero.</li>
              <li>El producto aparece como "Sin stock" en la app y en el punto de venta.</li>
              <li>El sistema no permite la venta del producto.</li>
            </ul>
          </div>

          <div class="lel-card">
            <div class="lel-card-header">
              <span class="lel-symbol-name">Sincronizar Stock</span>
              <span class="lel-type-badge verbo">Verbo</span>
            </div>
            <p><strong>Noción:</strong> Acción que realiza el sistema para que el stock sea el mismo en la app y el punto de venta.</p>
            <p><strong>Impacto:</strong></p>
            <ul>
              <li>Se registra una venta en la app o en el punto de venta.</li>
              <li>El sistema actualiza el stock del producto en la app y el punto de venta en menos de 60 segundos.</li>
              <li>Si el producto llega a cero, el estado pasa a quiebre de stock.</li>
              <li><strong>Resultado:</strong> La app y el punto de venta muestran la misma cantidad y se evita la sobreventa.</li>
            </ul>
          </div>

        </div>
      </div>

      <!-- SECCIÓN 9: LÉXICO COMPLETO DE LA ASIGNATURA -->
      <div class="doc-section">
        <span class="doc-section-title">11. Léxico Teórico General de la Asignatura</span>
        
        <div class="theory-glossary-accordion">
          
          <div class="glossary-category-card">
            <h4>🔄 Proceso de la Ingeniería de Requerimientos</h4>
            <ul class="glossary-term-list">
              <li><strong>Ingeniería de Requerimientos (IR):</strong> Disciplina que abarca las etapas de elicitación, especificación, validación y gestión de los requerimientos de un sistema a lo largo de todo su ciclo de vida.</li>
              <li><strong>Elicitación:</strong> Etapa de obtención de las ideas y necesidades del usuario para convertirlas en requerimientos claros. Se usan entrevistas, cuestionarios, prototipos, observación, brainstorming y análisis de documentos.</li>
              <li><strong>Especificación de Requerimientos de Software (SRS):</strong> Documentación formal de los requerimientos. Sirve como herramienta de comunicación, como acuerdo contractual entre cliente y proveedor y como base para el testeo. La norma vigente es la <strong>ISO/IEC/IEEE 29148:2018</strong>, que reemplazó a la clásica IEEE 830.</li>
              <li><strong>Validación:</strong> Certifica, con participación activa del usuario, que el modelo de requerimientos corresponde a lo que el usuario realmente pretende. Responde a: <em>"¿Estamos construyendo el producto correcto?"</em>. Se hace durante la especificación y no solo al final. Técnicas principales: prototipos, animación y paráfrasis.</li>
              <li><strong>Verificación:</strong> Comprueba que el producto de una fase cumple los requerimientos de la fase anterior y que el sistema cumple la especificación formal. Responde a: <em>"¿Estamos construyendo el producto correctamente?"</em>.</li>
              <li><strong>Trazabilidad:</strong> Capacidad de seguir un requerimiento a lo largo de todo su ciclo de vida, vinculando la necesidad del stakeholder con la especificación (StRS y SRS), el diseño, el código y las pruebas (hacia adelante y hacia atrás).</li>
            </ul>
          </div>

          <div class="glossary-category-card">
            <h4>👥 Actores y Necesidades</h4>
            <ul class="glossary-term-list">
              <li><strong>Stakeholder:</strong> Persona u organización afectada por el sistema o con interés o influencia en él. Directo (cajero, gerente) o indirecto (franquiciante, planta central).</li>
              <li><strong>Necesidad:</strong> Requisito fundamental que el sistema debe cumplir para resolver el problema principal. Incluye funcionalidad, comportamiento, tiempo de respuesta y condiciones operacionales.</li>
              <li><strong>Deseo:</strong> Característica adicional que los stakeholders quisieran tener pero que no es esencial para resolver el problema (funcionalidades extra o mejoras cosméticas).</li>
              <li><strong>Expectativa:</strong> Característica que los stakeholders esperan del sistema pero que suele no decirse de forma explícita (confiabilidad, robustez o aspectos implícitos del dominio).</li>
            </ul>
          </div>

          <div class="glossary-category-card">
            <h4>📋 Requerimientos y Cualidades</h4>
            <ul class="glossary-term-list">
              <li><strong>Requerimiento del usuario:</strong> Enunciado en lenguaje natural de lo que el usuario necesita poder hacer con el sistema para resolver un problema o alcanzar un objetivo.</li>
              <li><strong>Requerimiento del sistema:</strong> Descripción técnica y detallada de las capacidades que el sistema debe cumplir para satisfacer lo que pide el usuario, sirviendo de plano constructivo.</li>
              <li><strong>Requerimiento funcional (RF):</strong> Servicio o comportamiento que el sistema debe ofrecer (qué hace el sistema, sus funciones y flujos).</li>
              <li><strong>Requerimiento no funcional (RNF):</strong> Restricción o condición sobre cómo debe comportarse el sistema al cumplir sus funciones (rendimiento, seguridad, disponibilidad, usabilidad).</li>
              <li><strong>Cualidades del software:</strong> Atributos de calidad externos (perceptibles por el usuario: corrección, confiabilidad, robustez, amistosidad) e internos (visibles por desarrolladores: verificabilidad, mantenibilidad, reusabilidad).</li>
            </ul>
          </div>

          <div class="glossary-category-card">
            <h4>🗣️ Lenguaje, Comunicación y Modelado</h4>
            <ul class="glossary-term-list">
              <li><strong>Lenguaje natural:</strong> Lenguaje cotidiano con el que los stakeholders expresan sus necesidades. Es comprensible pero proclive a la ambigüedad; se mitiga usando voz activa y sujeto explícito.</li>
              <li><strong>Gap semántico:</strong> Brecha de comprensión entre los usuarios (vocabulario del negocio) y los analistas/desarrolladores (vocabulario técnico).</li>
              <li><strong>Léxico Extendido del Lenguaje (LEL):</strong> Glosario estructurado del dominio. Cada símbolo se clasifica como sujeto, objeto, verbo o estado, y se describe con su noción e impacto.</li>
              <li><strong>Símbolo:</strong> Término relevante del dominio definido en el LEL con su clasificación tipológica.</li>
              <li><strong>Noción:</strong> Qué es el símbolo dentro del dominio (significado y características esenciales).</li>
              <li><strong>Impacto:</strong> Efectos, acciones que realiza o recibe el símbolo en el sistema.</li>
              <li><strong>Entrevista:</strong> Técnica dialógica de elicitación. La semiestructurada combina preguntas pautadas con repreguntas abiertas.</li>
              <li><strong>Cuestionario:</strong> Relevamiento rápido, estructurado y homogéneo para grupos amplios de usuarios.</li>
              <li><strong>Prototipo:</strong> Maqueta preliminar interactiva para visualizar interfaces y validar requerimientos tempranamente.</li>
              <li><strong>Caso de uso:</strong> Descripción de la interacción entre un actor externo y el sistema para lograr un objetivo de negocio.</li>
              <li><strong>Historia de usuario:</strong> Requerimiento ágil breve expresado como <em>Como [rol], quiero [funcionalidad] para [beneficio]</em>, evaluado con INVEST y criterios de aceptación Gherkin (Dado/Cuando/Entonces).</li>
              <li><strong>Escenario:</strong> Historia en lenguaje natural apoyada en el LEL que describe un requerimiento con contexto, actores, recursos y episodios.</li>
              <li><strong>Criterio de aceptación:</strong> Condición verificable y testeable que determina cuándo una historia de usuario está correctamente implementada.</li>
            </ul>
          </div>

        </div>
      </div>
    `
  }
];
