<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Clasificación de las penas y subrogados penales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 A continuación, se expone una explicación clara sobre cómo se estructuran las penas en el sistema penal colombiano y qué alternativas contempla la ley para evitar el encarcelamiento en ciertos casos. 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Clasificación de las penas
    
    p.mb-4 El Código Penal colombiano, en su Título IV, establece una clasificación detallada de las penas aplicables a quienes cometen delitos, diferenciando entre penas principales, penas accesorias y penas sustitutivas. Esta clasificación permite al juez imponer sanciones proporcionales, razonables y necesarias, conforme a los principios constitucionales de legalidad, proporcionalidad, resocialización y prevención (Arroyo Zapatero & Berdugo Gómez de la Torre, 2016).

    h2(data-aos="fade-left") Penas principales
    p.mb-5 Son aquellas que se imponen de forma autónoma y constituyen la sanción central frente a la conducta punible. Según el artículo 34 del Código Penal, las penas principales son:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/1.png")
            .col-lg-7
              h5 Pena privativa de la libertad (prisión)
              p Regulada en el artículo 37. Implica la reclusión del condenado en un establecimiento carcelario por un tiempo determinado, según la gravedad del delito. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-12
                  p.mb-0 <b>Ejemplo:</b> En un caso de hurto agravado con violencia, la pena podría oscilar entre 6 y 12 años de prisión, dependiendo de los agravantes legales.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/2.png")
            .col-lg-7
              h5 Pena pecuniaria (multa)
              p Dispuesta en el artículo 39. Consiste en el pago de una suma de dinero al Estado, especialmente en delitos donde sea posible la reparación del daño. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-12
                  p.mb-0 <b>Ejemplo:</b> En delitos como estafa o fraude procesal, puede imponerse una multa que va de uno a cincuenta mil salarios mínimos legales mensuales vigentes, según la gravedad del hecho y la capacidad económica del autor.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-7
              h5 Inhabilitación para el ejercicio de derechos y funciones públicas
              p Impide al condenado ejercer cargos públicos o profesiones reguladas por el Estado. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-12
                  p.mb-0 <b>Ejemplo:</b> Un funcionario condenado por peculado o concusión puede recibir, además de prisión, una inhabilitación para ejercer cargos públicos durante el tiempo que dure la sanción principal.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        h2(data-aos="fade-left") Penas accesorias
        p.mb-5 Están reguladas en el artículo 43 del Código Penal. Se imponen junto con la pena principal y no tienen autonomía propia. Su finalidad es reforzar la pena principal, proteger a la sociedad o a la víctima y prevenir la reincidencia. Entre ellas se encuentran: 
    
        .bg-color-3.p-4(data-aos="fade-left")
          p.mb-0 Inhabilitación para el ejercicio de una profesión, arte u oficio.
        .bg-color-14.p-4(data-aos="fade-left")
          p.mb-0 Suspensión de la licencia de conducción.
        .bg-color-15.p-4(data-aos="fade-left")
          p.mb-0 Prohibición de acercarse o comunicarse con la víctima.
        .bg-color-16.p-4(data-aos="fade-left")
          p.mb-0.text-white Obligación de someterse a tratamiento terapéutico. 
        .bg-color-17.p-4(data-aos="fade-left")
          p.mb-0.text-white Prohibición de ejercer la patria potestad, tutela o curaduría.
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Ejemplo: En casos de violencia intrafamiliar, es común imponer la prohibición de acercamiento a la víctima para evitar nuevas agresiones.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Penas sustitutivas
        p Son medidas que reemplazan la ejecución de la pena privativa de la libertad, permitiendo su cumplimiento fuera del establecimiento carcelario, bajo ciertas condiciones.
        p Una de las más relevantes es la prisión domiciliaria (artículo 38B, adicionado por la Ley 1709 de 2014). Este subrogado permite al condenado cumplir la pena en su residencia o en otro lugar autorizado, si:
    
        .bg-color-7.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 La pena impuesta es menor a ocho años.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 El delito no está excluido por ley (ver artículo 68A, inciso 2).
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 El condenado no representa peligro para la sociedad.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 Se compromete a cumplir condiciones como:
    
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Primero
              p.mb-0 No salir del domicilio sin autorización judicial.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Segundo
              p.mb-0 Someterse a vigilancia electrónica o presencial.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Tercero
              p.mb-0 No reincidir en conductas delictivas.
    
    p.mb-4 La Corte Constitucional ha subrayado que esta medida busca humanizar la pena y descongestionar el sistema penitenciario, manteniendo su función preventiva y resocializadora (Arroyo Zapatero & Berdugo Gómez de la Torre, 2016).

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-20.p-4(data-aos="fade-left")
          h5.mb-5 Ejemplo
          p.mb-0 En delitos de conducción en estado de embriaguez, además de otras penas, el juez puede imponer la suspensión de la licencia de conducción como medida preventiva y accesoria.

        .bg-color-5.p-4(data-aos="fade-left")
          p.mb-0 La clasificación de las penas permite al juez dosificar adecuadamente la sanción, tomando en cuenta no solo la naturaleza del delito y el daño causado, sino también las condiciones personales del infractor, su comportamiento posterior al hecho y la posibilidad de reinserción social.
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Subrogados penales y su aplicación
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-left") En el Derecho Penal colombiano, la imposición de sanciones se orienta no solo a castigar al infractor, sino también a prevenir la reincidencia, reparar el daño causado y facilitar la reintegración social del condenado. Bajo los principios de legalidad, proporcionalidad y racionalidad, la ley contempla mecanismos que permiten flexibilizar la ejecución de la pena cuando se cumplen ciertas condiciones: los llamados subrogados penales (Arroyo Zapatero & Berdugo Gómez de la Torre, 2016).
    
        .bg-color-3.p-5(data-aos="fade-left")
          p.mb-0 Los subrogados penales son beneficios jurídicos que permiten suspender, sustituir o interrumpir la ejecución de una pena, siempre bajo condiciones legales estrictas. En Colombia, están regulados entre los artículos 63 y 68A del Código Penal, y su procedencia depende de factores.
    
    h2(data-aos="fade-left") Principales subrogados penales
    p Estos mecanismos ofrecen alternativas a la ejecución total de la pena, bajo condiciones legales y judiciales específicas.
    div.ms-3
      ul.lista-ul--color
        li.mb-0.d-flex
          i.fas.fa-circle.bg-color-12
          p.mb-0 Suspensión condicional de la ejecución de la pena (Art. 63 C.P.)
      p Este beneficio permite que el juez suspenda la ejecución de la pena por un periodo de prueba, siempre que el condenado cumpla ciertas condiciones:
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-6.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 La pena impuesta no debe superar cuatro años de prisión.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-11.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 El condenado no debe haber sido beneficiario de otro subrogado en los cinco años anteriores.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-6.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 Debe carecer de antecedentes penales.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-11.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 El delito no debe estar excluido por el artículo 68A.
    
    p.mb-4 Durante el periodo de prueba, el condenado debe cumplir obligaciones como presentarse periódicamente ante la autoridad judicial y observar buena conducta.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Si cumple
              p.mb-0 La pena se considera extinguida.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 No incumple
              p.mb-0 Se revoca el beneficio y debe cumplir la pena originalmente impuesta.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        h2(data-aos="fade-left") Libertad condicional (Art. 64 C.P.)
        p.mb-3 Procede cuando el condenado ha cumplido tres quintas partes de la pena privativa de la libertad y demuestra:
    
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 Buena conducta durante la ejecución de la pena.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 Reparación del daño o acuerdo de pago con la víctima.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 Arraigo familiar y social.
        p Este beneficio no extingue la pena, sino que permite continuar su ejecución en libertad condicional, bajo la supervisión del INPEC.
        p No aplica para:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 Delitos sexuales contra menores
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-11.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 Delitos de lesa humanidad
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 Personas reincidentes
    
    h2(data-aos="fade-left") Restricciones legales
    p.mb-5 El artículo 68A del Código Penal contiene una lista taxativa de delitos excluidos de los subrogados penales. Esto significa que, incluso si se cumplen los demás requisitos, el beneficio no puede ser otorgado si el delito figura entre los expresamente excluidos.

    h2(data-aos="fade-left") Valoración judicial 
    p.mb-5 La concesión de un subrogado penal no es automática. El juez debe evaluar:

    .bg-full-width.bg-ppal-azul
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center
          .col-lg-10
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").order-2
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 El cumplimiento estricto de los requisitos legales.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 El grado de culpabilidad del condenado.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 El impacto social del delito.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 La reparación del daño y el interés de la víctima.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 Los efectos del subrogado en la prevención general y especial.
              .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/13.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-14.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Los subrogados penales representan un mecanismo clave para humanizar la sanción, promover la justicia restaurativa, reducir la sobrepoblación carcelaria y fortalecer la reintegración social del condenado, sin dejar de proteger los derechos de las víctimas y la seguridad de la comunidad.
    
    h2(data-aos="fade-left") Criterios para fijar las penas, exclusión de la punibilidad y extinción de la acción penal

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El Derecho Penal colombiano, regulado por la Ley 599 de 2000, no se limita a describir las conductas punibles y sus respectivas sanciones, sino que también establece los criterios y mecanismos que permiten dosificar adecuadamente la pena, excluir la punibilidad en ciertos casos y declarar la extinción de la acción penal. Estas figuras garantizan que la respuesta del Estado sea racional, equitativa, proporcional y conforme a los principios del Estado Social de Derecho (Chavarro Cadena, 2018).
        p(data-aos="fade-left") La imposición de la pena no puede ser un acto automático o puramente aritmético. Por el contrario, requiere de un juicio valorativo por parte del juez, quien debe tener en cuenta las circunstancias del hecho, las condiciones personales del autor y el impacto social del delito.
    

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").order-2
                p El Código Penal contempla:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 Reglas generales y especiales de dosificación de la pena.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 Circunstancias agravantes (ej. premeditación, abuso de superioridad) y atenuantes (ej. colaboración con la justicia, reparación del daño).
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 La obligación del juez de actuar conforme a los principios de legalidad, proporcionalidad, necesidad y racionalidad.
              .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/16.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-4 Este enfoque busca lograr una pena justa, evitando tanto el exceso punitivo como la impunidad.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        ul.lista-ul--color
          li.mb-0.d-flex
            i.fas.fa-circle.bg-color-12
            p.mb-0 Exclusión de la punibilidad
        p La exclusión de la punibilidad se refiere a aquellas situaciones en las que, aun existiendo una conducta típica, antijurídica y culpable, el Estado decide no imponer una sanción penal. Esta decisión puede estar basada en consideraciones de política criminal, razones humanitarias o condiciones personales del autor.
        p Algunos supuestos comunes incluyen:
    
        .bg-color-20.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 Conciliación o desistimiento en delitos querellables.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 Preclusión del proceso penal.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 Inimputabilidad permanente (ej. demencia) o transitoria (ej. trastorno mental momentáneo, debidamente comprobado).

        .bg-color-5.p-4(data-aos="fade-left")
          p.mb-0 Estas causas operan como límites al ejercicio del poder punitivo, en coherencia con los fines resocializadores del sistema penal.
    
    ul.lista-ul--color
      li.mb-0.d-flex
        i.fas.fa-circle.bg-color-12
        p.mb-0 Extinción de la acción penal
    p La extinción de la acción penal implica que el Estado pierde su facultad para investigar, juzgar o sancionar un delito. Esta figura tiene como objetivo garantizar la seguridad jurídica y evitar procesos innecesarios o ineficaces.
    p Las principales causas de extinción son:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Cumplimiento total de la pena.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Prescripción de la acción penal o de la pena.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Pago de la multa, cuando así lo dispone la ley.
    
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Muerte del imputado.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Amnistía o indulto en determinados contextos jurídicos y políticos.

    p.mb-5 Estas situaciones reflejan los límites temporales y materiales del poder punitivo del Estado, y refuerzan el respeto por los derechos fundamentales del procesado.

    h2.mb-5(data-aos="fade-left") Criterios para fijar las penas
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La determinación de la pena en el Derecho Penal colombiano no puede entenderse como un acto arbitrario ni automático. El juez penal, al momento de imponer una sanción, debe atender a criterios objetivos y subjetivos establecidos por la ley, que le permitan individualizar la pena de manera justa y proporcional, de acuerdo con las características del hecho y del autor.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/19.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Este proceso se fundamenta en los principios de legalidad, proporcionalidad, razonabilidad y justicia material, y se encuentra regulado en los artículos 55 a 61 del Código Penal colombiano.
          figure.d-flex.justify-content-end
            img(src="@/assets/curso/tema2/20.svg" data-aos="zoom-in", style="max-width: 90px")
    
    h2(data-aos="fade-left") Marco legal y punto de partida
    p.mb-0 La fijación de la pena parte del marco punitivo legal establecido para cada delito.
    p Por ejemplo, el delito de hurto simple (art. 239 C.P.) contempla una pena de prisión de 24 a 72 meses. El juez debe ubicar la pena concreta dentro de ese rango legal según:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/21.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Gravedad del hecho")
            p El juez analiza el daño causado, el riesgo generado, la forma en que se ejecutó el delito, el valor del bien jurídico afectado y la afectación a la víctima. 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 <b>Ejemplo:</b> Si una persona hurta un celular sin violencia mediante engaño simple, el daño es leve, lo que puede justificar una pena cercana al mínimo legal (24 meses).
          .div(titulo="Circunstancias personales del autor")
            p Se consideran factores como el grado de culpabilidad, antecedentes, nivel educativo, entorno social, tipo de intención (dolo o culpa), y cooperación con la justicia. 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 <b>Ejemplo:</b> Una persona sin antecedentes, con entorno familiar estable y que confiesa desde el inicio puede recibir una pena reducida.
          .div(titulo="Circunstancias de mayor punibilidad (Art. 58 C.P.)")
            p Agravan la pena elementos como: número de víctimas, premeditación, abuso de confianza, o aprovechamiento de la indefensión de la víctima.  
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 <b>Ejemplo:</b> En una estafa contra adultos mayores, la pena puede incrementarse por aprovecharse de su vulnerabilidad.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/22.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Circunstancias de menor punibilidad (Art. 55 C.P.)")
            p Permiten reducir la pena si el autor actuó bajo amenaza, por motivos altruistas, colaboró con las autoridades o mostró arrepentimiento.  
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 <b>Ejemplo:</b> En una riña, si el agresor auxilia a la víctima y coopera con la justicia, puede recibir una pena menor o acceder a un subrogado penal.
          .div(titulo="Grado de participación")
            p Se diferencia entre el autor principal, el cómplice y el determinador. 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 <b>Ejemplo:</b> En un homicidio, quien dispara recibe mayor sanción que quien solo prestó el arma.
          .div(titulo="Modalidad del delito: tentativa o consumación (Art. 27 C.P.)")
            p Si el delito fue tentado y no consumado, la pena puede reducirse hasta en un 50%.   
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 <b>Ejemplo:</b> Si alguien intenta hurtar una tienda pero no lo logra, el juez debe imponer una pena inferior a la del hurto consumado.
    
    h2(data-aos="fade-left") Enfoque jurisprudencial y finalidades de la pena
    p La Corte Suprema de Justicia ha insistido en que la fijación de la pena debe basarse en una valoración rigurosa de los hechos y las pruebas, evitando apreciaciones subjetivas o juicios morales del juez.
    p.mb-5 La pena, conforme al artículo 4 del Código Penal, debe cumplir varias funciones:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Prevención general (disuadir a la sociedad)

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Prevención especial (evitar la reincidencia)
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Retribución justa
    
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Reinserción social

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Protección del condenado
    
    p.mb-4 Fijar la pena es un ejercicio jurídico que exige valoración integral, tanto del hecho delictivo como de las circunstancias personales del autor. Su adecuada aplicación garantiza que la respuesta penal sea justa, proporcional y respetuosa de los derechos fundamentales, en consonancia con una sociedad democrática y garantista.

    .bg-full-width.bg-color-7.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Exclusión de la punibilidad y extinción de la acción penal
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Exclusión de la punibilidad y extinción de la acción penal, donde se aborda el análisis de los límites a la imposición de sanciones en el Derecho Penal colombiano. Este material ofrece explicaciones detalladas, ejemplos concretos y referencias normativas.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Exclusión de la punibilidad y extinción de la acción penal.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/24.png', alt='')
    
          




    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0599_2000.html  " target="_blank" rel="noopener noreferrer") El Congreso de la República de Colombia. (2000). Ley 599 de 2000 Por la cual se expide el Código Penal artículos 34 al 53.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_0599_2000.html " target="_blank" rel="noopener noreferrer") El Congreso de la República de Colombia. (2000). Ley 599 de 2000 Por la cual se expide el Código Penal artículos 63 al 68A.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.minjusticia.gov.co/Sala-de-prensa/PublicacionesMinJusticia/Cartilla%20Subrogados%20Penales.pdf " target="_blank" rel="noopener noreferrer") MinJusticia ( 2014) SUBROGADOS PENALES, MECANISMOS SUSTITUTIVOS DE PENA
              Y VIGILANCIA ELECTRÓNICA EN EL SISTEMA PENAL COLOMBIANO 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="www.redalyc.org/pdf/720/72045844004.pdf  " target="_blank" rel="noopener noreferrer") Durán Migliardi, M., (2015). Constitución penal y teoría de la pena: apuntes sobre una relación necesaria y propuesta para un posible contenido desde la prevención especial. Dikaion , 24 (2), 282-306. 
           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=cqUa0iuy-DU" target="_blank" rel="noopener noreferrer") Cano, J. (2021, 30 de agosto). Homicidio y circunstancias de a gravedad punitiva Art. 103, 103A y 104 Código Penal Colombiano [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=kP2y7g6e5fE " target="_blank" rel="noopener noreferrer") Gesmepol. (2015, 28 de agosto). La suspensión y sustitución de las penas [Vídeo]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'Un juez analiza que una conducta fue dolosa, causó un daño grave y el autor actuó con premeditación, aprovechando la indefensión de la víctima, lo cual lo lleva a imponer una pena superior al mínimo legal. ¿Qué criterio está aplicando el juez para fijar la pena?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Atenuante genérica  ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Circunstancia de mayor punibilidad ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Factor de imputabilidad ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Inexistencia del tipo penal',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Las circunstancias de mayor punibilidad, como la premeditación y el aprovechamiento de la indefensión, permiten aumentar la pena dentro del rango establecido por la ley, conforme al artículo 58 del Código Penal colombiano.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'En un proceso penal se demuestra que una persona cometió una conducta típica, antijurídica y culpable, pero fallece antes de que se profiera sentencia. ¿Qué consecuencia jurídica se produce en este caso?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Extinción de la acción penal ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Indulto judicial ',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Exención de responsabilidad ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Sustitución de la pena',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La muerte del imputado extingue la acción penal porque la responsabilidad penal es personal. El proceso debe finalizar sin pronunciamiento sobre la pena, conforme al artículo 82 del Código Penal colombiano.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Cuando el análisis penal parte de que toda conducta humana tiene una finalidad y considera el dolo y la culpa como parte del tipo penal, se está aplicando el modelo de una teoría del delito que incorpora la intencionalidad desde el inicio del análisis. ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Teoría clásica  ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Teoría positivista ',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Teoría retributiva ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Teoría finalista',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              'a teoría finalista, desarrollada por Hans Welzel, entiende la acción como una conducta con finalidad, incorporando el análisis del dolo y la culpa desde el tipo penal, lo cual permite una evaluación más integral y justa del delito.  ',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'Cuando un juez verifica que la pena impuesta no supera los ocho años, que el delito no está excluido por el artículo 68A del Código Penal y que el condenado no representa un peligro para la sociedad, puede sustituir la pena de prisión por una medida que permite cumplirla en el lugar de residencia. ¿Qué figura aplica en este caso?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Subrogado penal ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Suspensión condicional de la ejecución de la pena ',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Prisión domiciliaria como pena sustitutiva ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Medida de seguridad',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La prisión domiciliaria es una pena sustitutiva que permite al condenado cumplir la pena en su domicilio bajo ciertas condiciones legales. No se trata de un subrogado penal, sino de una forma alternativa de ejecutar la sanción privativa de la libertad.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Cuando una persona es condenada a una pena de prisión inferior a cuatro años, carece de antecedentes penales, no ha sido beneficiaria de otro subrogado en los últimos cinco años y el delito no está excluido por el artículo 68A del Código Penal, el juez puede optar por no hacer efectiva la pena y someter al condenado a un periodo de prueba. ¿Qué figura jurídica se aplica en este caso?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Libertad condicional',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Prisión domiciliaria',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Suspensión condicional de la ejecución de la pena',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Sustitución de la pena por multa',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La suspensión condicional de la ejecución de la pena es un subrogado penal que permite al juez suspender el cumplimiento de la condena durante un periodo de prueba, si se cumplen los requisitos establecidos en el artículo 63 del Código Penal colombiano. Su finalidad es prevenir la reincidencia y facilitar la reintegración social.  ',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
