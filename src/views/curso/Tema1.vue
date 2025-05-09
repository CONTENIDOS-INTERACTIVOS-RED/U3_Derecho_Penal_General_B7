<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Esquemas del delito y su relación con la punibilidad'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El estudio de los esquemas del delito es uno de los aspectos más relevantes dentro de la dogmática penal, ya que permite analizar de manera estructurada cuándo una conducta puede considerarse delictiva y, en consecuencia, ser sancionada. Estos esquemas no son arbitrarios: han sido desarrollados históricamente a partir de distintas corrientes doctrinales y filosóficas del derecho penal, que han contribuido a delimitar de forma precisa la responsabilidad penal (Goldschmidt, 2016).
    
        .bg-color-7.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La evolución de la estructura del delito ha transitado desde modelos más simples, como los de la teoría clásica, hasta sistemas más complejos como los propuestos por la teoría finalista. El objetivo común de estos enfoques es responder a la pregunta fundamental:
              h5 ¿En qué momento una conducta humana se convierte en delito y justifica la imposición de una pena?
    
    p.mb-4 Dentro de este análisis, es crucial diferenciar el delito de la punibilidad:

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.order-2.order-lg-1
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 El delito se define como una conducta típica, antijurídica y culpable.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-12
                    p.mb-0 La punibilidad, por su parte, representa una condición adicional que permite o impide la aplicación de una sanción penal. Aun cuando se haya cometido un hecho delictivo, pueden existir causas que excluyan la pena (como la inimputabilidad o el perdón judicial), lo que haría que no se imponga castigo alguno (Goldschmidt, 2016).
              .col-lg-3(data-aos="zoom-in").order-1.order-lg-2
                img.img-fluid(src='@/assets/curso/tema1/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-4 Este enfoque esquemático tiene un gran valor práctico, ya que permite establecer con claridad:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 Si se ha producido un delito.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-11.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 Si, en caso afirmativo, corresponde imponer una pena.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 Cuál sería la sanción más adecuada de acuerdo con la gravedad del hecho y las circunstancias personales del autor.
    
    p.mb-4 La punibilidad es el resultado de un proceso jurídico que inicia con el análisis de los elementos del delito y culmina con la decisión judicial sobre la imposición o no de una pena, lo que muestra su relación directa con el esquema del delito.

    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/4.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="11%" y="49.5%" numero="+")
                h5 Esquema del delito
                p Conjunto de elementos (tipicidad, antijuridicidad, culpabilidad) que determinan si hay delito. 
    
              .bg-color-white.box-shadow.p-3(x="30.5%" y="32%" numero="+")
                h5 Tipicidad
                p Concordancia entre la conducta realizada y la descrita en la ley penal.
    
              .bg-color-white.box-shadow.p-3(x="50%" y="10%" numero="+")
                h5 Antijuridicidad
                p Contradicción de la conducta con el ordenamiento jurídico, sin causas de justificación.
    
              .bg-color-white.box-shadow.p-3(x="69.5%" y="32%" numero="+")
                h5 Culpabilidad
                p Imputación personal del hecho al autor, quien actúa con conocimiento y voluntad. 
    
              .bg-color-white.box-shadow.p-3(x="88.5%" y="50%" numero="+")
                h5 Punibilidad
                p Posibilidad jurídica de imponer una pena, una vez comprobado el delito y descartadas exclusiones.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Teoría Clásica, Neoclásica y Finalista del delito
    
    p.mb-4 La evolución de la teoría del delito en el Derecho Penal ha estado marcada por distintas corrientes doctrinales que han buscado explicar cómo debe entenderse y estructurarse el delito, así como establecer las condiciones bajo las cuales una persona puede ser considerada penalmente responsable. Entre las más influyentes se encuentran la teoría clásica, la teoría neoclásica y la teoría finalista, las cuales han influido de distintas maneras en la legislación penal colombiana, en especial en la Ley 599 de 2000.

    h2(data-aos="fade-left") Teoría clásica

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-20.p-5(data-aos="fade-left")
          p.mb-0 Formulada en el siglo XIX por autores como Franz von Liszt y Paul Johann Anselm Feuerbach, la teoría clásica adopta una visión mecanicista y objetiva del delito, influenciada por el pensamiento ilustrado. Considera el delito como un acto voluntario, típico, antijurídico y culpable, sin entrar en el análisis de las motivaciones del autor. Parte del supuesto de que todas las personas son racionales y libres, y por tanto responsables. Su análisis se centra exclusivamente en la coincidencia formal entre la conducta y el tipo penal.
        .bg-color-5.p-4(data-aos="fade-left")
          p.mb-0 <b>Por ejemplo</b>, si alguien lanza intencionalmente una piedra y rompe el vidrio de un automóvil, esta teoría verificaría si la conducta es típica, antijurídica y culpable, sin considerar las circunstancias personales del autor. Fue criticada por su falta de individualización del sujeto y por no tomar en cuenta las particularidades del caso concreto (Congreso Internacional de Jóvenes Investigadores en Ciencias Penales, 2012).

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
      .col-lg-9
        h2(data-aos="fade-left") Teoría neoclásica
        p.mb-5 Desarrollada a inicios del siglo XX por autores como Reinhard Frank, Franz von Liszt (en su etapa madura) y Edmund Mezger, esta corriente mantiene la estructura tripartita del delito, pero incorpora una visión más subjetiva y humanista. La culpabilidad deja de ser un simple presupuesto y se convierte en un juicio complejo que exige valorar la imputabilidad del autor, su conocimiento de la ilicitud y la exigibilidad de otra conducta.
    
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Así, si una persona con discapacidad mental severa mata a otra en un ataque de ira, esta teoría concluiría que, aunque el hecho es típico y antijurídico, no hay culpabilidad por falta de imputabilidad. Aporta un enfoque más justo al considerar las condiciones individuales del autor, lo que representa un avance hacia una justicia penal individualizada.
    
    h2.mb-5(data-aos="fade-left") Teoría finalista

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Propuesta en el siglo XX por Hans Welzel, la teoría finalista introduce una visión teleológica de la acción, entendiendo que todo acto humano es un acto final, es decir, orientado a un propósito. A diferencia de las teorías anteriores, el finalismo incorpora desde el inicio en el tipo penal los elementos subjetivos del dolo y la culpa. Esto permite distinguir con mayor claridad entre conductas dolosas, culposas y preterintencionales.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Por ejemplo, si una persona dispara un arma durante una riña y mata a otra, el finalismo analiza la intención del autor: si quería matar, es homicidio doloso; si fue accidental, culposo; y si solo quiso herir pero causó la muerte, es homicidio preterintencional (art. 105 C.P.). Este enfoque permite un análisis más profundo del dominio del hecho y la intervención consciente de cada partícipe.
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Un caso frecuente: si alguien atropella a un peatón mientras conduce ebrio, la teoría finalista concluye que no hay dolo, pero sí culpa grave, lo que configura un homicidio culposo (art. 109 C.P.). Esta teoría sustenta buena parte del modelo penal colombiano contemporáneo, que se basa en el análisis de la acción, imputación y responsabilidad penal.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Esquemas del delito y su impacto en la punibilidad
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El análisis dogmático del delito ha sido sistematizado a lo largo del tiempo mediante diferentes esquemas teóricos, que no solo facilitan la comprensión de cómo se configura una conducta punible, sino que también tienen efectos prácticos directos en la aplicación de la ley penal. Estos esquemas permiten determinar si una conducta es sancionable y bajo qué condiciones, convirtiéndose en herramientas esenciales para la evaluación de la responsabilidad penal y la toma de decisiones judiciales.
    
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 Uno de los modelos más aceptados en la doctrina penal contemporánea, especialmente en la legislación colombiana (Ley 599 de 2000), es el esquema tripartito del delito, estructurado en tres elementos fundamentales: tipicidad, antijuridicidad y culpabilidad. Este modelo, influenciado por la teoría finalista, conserva también aspectos de las teorías clásica y neoclásica, reflejando una visión moderna e integral del delito.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Elementos del esquema tripartito
        p.mb-5 El primer componente es la tipicidad, que se refiere a la adecuación de una conducta a un tipo penal previamente establecido por la ley. Solo puede considerarse delito aquella acción que encaje perfectamente en la descripción normativa. Por ejemplo, tomar un bien ajeno con ánimo de apropiación, sin consentimiento y con valor económico, configura el delito de hurto (art. 239 C.P.). Si no hay tipicidad, no hay delito ni punibilidad.
    
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El segundo elemento es la antijuridicidad, que exige que la conducta típica sea además contraria al ordenamiento jurídico, es decir, que no concurra ninguna causa de justificación. Si alguien golpea a otro, se configura una lesión personal; sin embargo, si actúa en legítima defensa, la antijuridicidad desaparece, lo que excluye la posibilidad de imponer una pena.
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            img(src="@/assets/curso/tema1/13.svg", data-aos="zoom-in").mx-auto
          .col-lg-9.order-lg-1
            p.mb-0.text-white El tercer elemento es la culpabilidad, entendida como la posibilidad de reprochar al autor su conducta. Para ello, se requiere que la persona sea imputable, que haya actuado con conciencia de la ilicitud y que se le pueda exigir un comportamiento distinto. Por ejemplo, si alguien comete un delito en estado de trastorno mental severo, aunque la conducta sea típica y antijurídica, no puede ser culpable y, por lo tanto, no es punible. En tales casos, el ordenamiento prevé medidas de seguridad en lugar de penas (Congreso Internacional de Jóvenes Investigadores en Ciencias Penales, 2012).

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Impacto en la punibilidad
        h5 El impacto de este esquema es directo y determinante:
        h5 La ausencia de cualquiera de los tres elementos excluye la posibilidad de imponer una pena.
        p Por tanto, este análisis estructurado guía al juez en la valoración probatoria, en la calificación jurídica del hecho y en la individualización de la sanción, respetando el debido proceso y los derechos fundamentales del imputado.

    
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Además, el esquema tripartito no solo permite decidir si una conducta es punible, sino también cómo debe ser sancionada. En el proceso penal, sirve como base para evaluar agravantes, atenuantes, culpabilidad reducida o inimputabilidad, y para aplicar medidas de seguridad o subrogados penales de manera justa y proporcional.
    
   
    .row.align-items-center.bg-color-1
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
      .col-lg-10.order-lg-1
        p.mb-0.p-4 En conclusión, los esquemas del delito no son simples construcciones teóricas, sino herramientas metodológicas indispensables que orientan el ejercicio legítimo del ius puniendi del Estado, garantizando una justicia penal racional, sistemática y respetuosa de los derechos humanos.



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/76543	 " target="_blank" rel="noopener noreferrer") Tarrío, M. C. (2008). Teoría finalista del delito y dogmática penal: ( ed.). Ediciones Cathedra Jurídica. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/61036?page=55 " target="_blank" rel="noopener noreferrer") del Valle, C. P. (2008). Estudios sobre los fundamentos del derecho penal: (ed.). Dykinson. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/5681/568160366022.pdf " target="_blank" rel="noopener noreferrer") Teixidor, D., (2011). EN TORNO A LA IMPUTACIÓN SUBJETIVA DE COMPORTAMIENTO. Revista de la Facultad de Derecho, (30), 291-307. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="www.tribunalsuperiorarmenia.gov.co/medios/aportes/Esquemas_tericos_del_delito_y_criminalidad_contemporanea.pdf " target="_blank" rel="noopener noreferrer") Arturo Salas (2016) ESQUEMAS TEÓRICOS DEL DELITO Y CRIMINALIDAD CONTEMPORÁNEA 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0124-74412016000100005  " target="_blank" rel="noopener noreferrer") Vega Arrieta, Harold. (2016). El análisis gramatical del tipo penal. Justicia, (29), 53-71. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=toSOeTj-8wM " target="_blank" rel="noopener noreferrer") SFPIE UV. (2019, 21 de octubre). Estructura del delito. [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=t_8cp1gHvjE " target="_blank" rel="noopener noreferrer") FM En Transito. (2024, 16 de mayo). ¿Tiene sentido la baja de edad de punibilidad? [Vídeo]. YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
