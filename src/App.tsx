import type { FormEvent } from 'react'
import './App.css'

const pains = [
  'Clientes que no aparecen',
  'WhatsApps sin responder',
  'Agenda desordenada',
  'Clientes que no vuelven',
]

const features = [
  {
    icon: '📲',
    title: 'QR de reservas',
    text: 'Cada negocio tiene su QR para que los clientes reserven al instante.',
  },
  {
    icon: '📅',
    title: 'Agenda conectada',
    text: 'Servicios, horarios y huecos disponibles siempre actualizados.',
  },
  {
    icon: '💬',
    title: 'Recordatorios por WhatsApp',
    text: 'Reduce ausencias con avisos automáticos antes de cada cita.',
  },
  {
    icon: '✅',
    title: 'Confirmaciones automáticas',
    text: 'Sabrás qué citas están confirmadas y cuáles necesitan revisión.',
  },
  {
    icon: '🎯',
    title: 'Reactivación de clientes',
    text: 'Recupera clientes que llevan semanas sin volver a reservar.',
  },
  {
    icon: '✨',
    title: 'Promociones inteligentes',
    text: 'Lanza campañas para rellenar huecos flojos de la semana.',
  },
  {
    icon: '🤖',
    title: 'Futura IA recepcionista',
    text: 'Una asistente que responderá, filtrará y ayudará a cerrar citas.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Analizamos tu negocio',
    text: 'Servicios, horarios, precios, duración de citas y forma actual de trabajar.',
  },
  {
    number: '02',
    title: 'Configuramos CitaFlow',
    text: 'Agenda, reservas, recordatorios, mensajes y flujo automático de clientes.',
  },
  {
    number: '03',
    title: 'Empiezas a recibir citas',
    text: 'Tus clientes reservan y reciben confirmaciones sin que persigas a nadie.',
  },
]

const appointments = [
  {
    time: '09:30',
    name: 'Cliente 09:30',
    service: 'Servicio premium',
    status: 'Confirmada por WhatsApp',
    tone: 'green',
  },
  {
    time: '11:00',
    name: 'Cliente 11:00',
    service: 'Consulta inicial',
    status: 'Recordatorio programado',
    tone: 'blue',
  },
  {
    time: '13:15',
    name: 'Cliente 13:15',
    service: 'Revisión / sesión',
    status: 'Pendiente de confirmar',
    tone: 'yellow',
  },
]

function App() {
  function handleDemoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const salon = String(form.get('salon') || '')
    const city = String(form.get('city') || '')
    const whatsapp = String(form.get('whatsapp') || '')
    const instagram = String(form.get('instagram') || '')
    const message = String(form.get('message') || '')

    const subject = `Demo CitaFlow - ${salon || 'Nuevo negocio'}`
    const body = [
      'Hola, quiero una demo de CitaFlow.',
      '',
      `Negocio: ${salon}`,
      `Ciudad: ${city}`,
      `WhatsApp: ${whatsapp}`,
      `Instagram: ${instagram}`,
      '',
      `Mensaje: ${message}`,
    ].join('\n')

    window.location.href = `mailto:hola@citaflow.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <a className="brand" href="#" aria-label="CitaFlow inicio">
            <span className="brandMark">▦</span>
            <span>CitaFlow</span>
          </a>

          <div className="navLinks">
            <a href="#producto">Producto</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#demo" className="navButton">Pedir demo</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <span className="eyebrow">Reservas para negocios con cita previa</span>

            <h1>Consigue más citas y automatiza tu negocio.</h1>

            <p className="heroText">
              Agenda online, recordatorios por WhatsApp y seguimiento automático
              de clientes para que tu negocio venda más sin perseguir citas.
            </p>

            <div className="heroActions">
              <a className="button primary" href="#demo">Solicitar demo gratuita</a>
              <a className="button secondary" href="#como-funciona">Ver cómo funciona</a>
            </div>

            <div className="trustRow">
              <span>Sin permanencia</span>
              <span>Setup rápido</span>
              <span>Para negocios con cita previa</span>
            </div>
          </div>

          <div className="productVisual" aria-label="Vista previa de CitaFlow">
            <div className="glow glowOne" />
            <div className="glow glowTwo" />

            <div className="dashboardCard">
              <div className="dashboardTop">
                <div>
                  <span className="tinyLabel">Hoy</span>
                  <h2>Agenda diaria</h2>
                </div>
                <span className="liveBadge">En vivo</span>
              </div>

              <div className="appointments">
                {appointments.map((item) => (
                  <div className="appointment" key={item.time}>
                    <strong>{item.time}</strong>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.service}</p>
                      <span className={`status ${item.tone}`}>{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="dashboardFooter">
                <span>+ Nueva cita</span>
                <strong>WhatsApp activo</strong>
              </div>
            </div>

            <div className="miniPanel revenue">
              <span>Reservas este mes</span>
              <strong>+38%</strong>
            </div>

            <div className="miniPanel reminder">
              <span>Ausencias evitadas</span>
              <strong>24</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="problem section">
        <div className="sectionHeading">
          <span className="eyebrow">El problema</span>
          <h2>¿Pierdes tiempo gestionando citas manualmente?</h2>
        </div>

        <div className="painGrid">
          {pains.map((pain) => (
            <div className="pain" key={pain}>{pain}</div>
          ))}
        </div>
      </section>

      <section className="trustSection section">
        <div className="trustPanel">
          <div>
            <span className="eyebrow">Para negocios con cita previa</span>
            <h2>Reservas online para cualquier negocio que atiende con agenda.</h2>
          </div>

          <div className="trustStats">
            <div>
              <strong>24/7</strong>
              <span>Reservas online aunque el negocio esté cerrado.</span>
            </div>
            <div>
              <strong>WhatsApp</strong>
              <span>Recordatorios y confirmaciones automáticas.</span>
            </div>
            <div>
              <strong>Más retorno</strong>
              <span>Reactivación de clientes que llevan tiempo sin reservar.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="businessTypes section">
        <div className="sectionHeading wide">
          <span className="eyebrow">Multi-sector</span>
          <h2>Un sistema de reservas para cualquier agenda profesional.</h2>
          <p>
            CitaFlow se adapta a negocios que necesitan organizar citas,
            reducir ausencias y permitir reservas online desde un QR o enlace.
          </p>
        </div>

        <div className="typeGrid">
          <span>Centros de estética</span>
          <span>Veterinarios</span>
          <span>Clínicas</span>
          <span>Fisioterapia</span>
          <span>Masajes</span>
          <span>Tatuajes</span>
          <span>Talleres</span>
          <span>Asesores</span>
        </div>
      </section>

      <section className="qrSection section">
        <div className="qrCard">
          <div className="qrCopy">
            <span className="eyebrow">QR + agenda online</span>
            <h2>Tu negocio siempre abierto para recibir reservas.</h2>
            <p>
              Cada negocio tendrá su propio QR y enlace de reservas. El cliente
              escanea, elige servicio, día y hora, y CitaFlow actualiza la agenda
              automáticamente.
            </p>

            <div className="qrBullets">
              <span>QR para mostrador, escaparate o recepción</span>
              <span>Link para Instagram y WhatsApp</span>
              <span>Agenda conectada a servicios, horarios y disponibilidad</span>
            </div>
          </div>

          <div className="qrVisual" aria-label="Vista previa del QR de reservas de CitaFlow">
            <div className="qrMock realisticQR" aria-hidden="true">
              <div className="finder tl"><span></span></div>
              <div className="finder tr"><span></span></div>
              <div className="finder bl"><span></span></div>

              <i className="q p1 pink"></i>
              <i className="q p2"></i>
              <i className="q p3"></i>
              <i className="q p4 pink"></i>
              <i className="q p5"></i>
              <i className="q p6 pink"></i>
              <i className="q p7"></i>
              <i className="q p8"></i>
              <i className="q p9 pink"></i>
              <i className="q p10"></i>
              <i className="q p11 pink"></i>
              <i className="q p12"></i>
              <i className="q p13"></i>
              <i className="q p14 pink"></i>
              <i className="q p15"></i>
              <i className="q p16 pink"></i>
              <i className="q p17"></i>
              <i className="q p18"></i>
              <i className="q p19 pink"></i>
              <i className="q p20"></i>
            </div>

            <div className="bookingMini">
              <span>citaflow.app/demo/negocio</span>
              <strong>Reserva online</strong>
              <p>Servicio · Día · Hora · Confirmación</p>
              <em>Escanea para reservar</em>
            </div>
          </div>
        </div>
      </section>

      <section className="clientFlow section">
        <div className="sectionHeading wide">
          <span className="eyebrow">Así reserva tu cliente</span>
          <h2>De escanear el QR a tener la cita confirmada.</h2>
          <p>
            El cliente no tiene que llamar ni esperar respuesta. CitaFlow guía
            la reserva y deja la agenda actualizada automáticamente.
          </p>
        </div>

        <div className="flowGrid">
          <article className="flowCard">
            <span>01</span>
            <h3>Escanea el QR</h3>
            <p>Desde el escaparate, mostrador, Instagram, WhatsApp, recepción o tarjeta del negocio.</p>
          </article>

          <article className="flowCard">
            <span>02</span>
            <h3>Elige servicio y hora</h3>
            <p>Ve los servicios disponibles, duración, precios y huecos libres.</p>
          </article>

          <article className="flowCard">
            <span>03</span>
            <h3>Recibe confirmación</h3>
            <p>La cita queda guardada y el cliente recibe confirmación automática.</p>
          </article>
        </div>
      </section>

      <section className="features section" id="producto">
        <div className="sectionHeading wide">
          <span className="eyebrow">Todo en un sistema sencillo</span>
          <h2>Menos huecos vacíos. Más clientes recurrentes.</h2>
          <p>
            CitaFlow centraliza la agenda, automatiza mensajes y ayuda a que
            tus clientes vuelvan justo cuando toca.
          </p>
        </div>

        <div className="featureGrid">
          {features.map((feature) => (
            <article className="featureCard" key={feature.title}>
              <span className="featureIcon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase section">
        <div className="showcaseCard">
          <div>
            <span className="eyebrow">Producto visual</span>
            <h2>Una agenda clara para vender más, no para complicarte.</h2>
            <p>
              Vista diaria, clientes, servicios, estados de confirmación y
              automatizaciones preparadas para funcionar desde el primer día.
            </p>
          </div>

          <div className="phoneMockup">
            <div className="phoneHeader">
              <span>Mar, 21 mayo</span>
              <strong>8 citas</strong>
            </div>

            <div className="calendarLine filled">
              <span>09:00</span>
              <strong>Servicio reservado</strong>
            </div>
            <div className="calendarLine">
              <span>10:30</span>
              <strong>Hueco disponible</strong>
            </div>
            <div className="calendarLine filled">
              <span>12:00</span>
              <strong>Consulta completa</strong>
            </div>
            <div className="calendarLine filled">
              <span>17:30</span>
              <strong>Seguimiento / sesión premium</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="steps section" id="como-funciona">
        <div className="sectionHeading wide">
          <span className="eyebrow">Cómo funciona</span>
          <h2>Te lo dejamos montado para que empieces rápido.</h2>
        </div>

        <div className="stepGrid">
          {steps.map((step) => (
            <article className="stepCard" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="demo section" id="demo">
        <div className="demoCard">
          <div className="demoCopy">
            <span className="offerBadge">Oferta inicial</span>
            <h2>Demo gratuita para los primeros negocios.</h2>
            <p>
              Estamos seleccionando negocios para probar CitaFlow con condiciones
              especiales de lanzamiento. Déjanos tus datos y te contactamos.
            </p>
          </div>

          <form className="demoForm" onSubmit={handleDemoSubmit}>
            <div className="formGrid">
              <label>
                Nombre del negocio
                <input name="salon" type="text" placeholder="Ej. Clínica Luna, VetCare, Estética Norte" required />
              </label>

              <label>
                Ciudad
                <input name="city" type="text" placeholder="Ej. Madrid" required />
              </label>
            </div>

            <label>
              WhatsApp
              <input name="whatsapp" type="tel" placeholder="+34 600 000 000" required />
            </label>

            <label>
              Instagram o web
              <input name="instagram" type="text" placeholder="@tunegocio" />
            </label>

            <label>
              ¿Qué te gustaría automatizar?
              <textarea name="message" placeholder="Reservas, recordatorios, QR, agenda, clientes..." rows={4}></textarea>
            </label>

            <button className="button primary big" type="submit">
              Solicitar demo gratuita
            </button>

            <small>
              Sin compromiso. Te contactamos para enseñarte cómo funcionaría en tu negocio.
            </small>
          </form>
        </div>
      </section>

      <footer className="footer">
        <span>© CitaFlow.com</span>
        <span>Reservas, QR y automatización para negocios con cita previa</span>
      </footer>
    </main>
  )
}

export default App
